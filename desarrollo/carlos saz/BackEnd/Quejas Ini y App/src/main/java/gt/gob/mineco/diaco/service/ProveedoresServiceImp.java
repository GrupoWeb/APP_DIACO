package gt.gob.mineco.diaco.service;

import gt.gob.mineco.diaco.dao.CalificacionRepository;
import java.sql.Timestamp;
import java.util.Date;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.persistence.NoResultException;

import gt.gob.mineco.diaco.dao.DepartamentoRepository;
import gt.gob.mineco.diaco.dao.MunicipioRepository;
import gt.gob.mineco.diaco.dao.ProveedorRepository;
import gt.gob.mineco.diaco.dto.CalificacionProveedorDto;
import gt.gob.mineco.diaco.dto.ProveedorAprobarDto;
import gt.gob.mineco.diaco.dto.ProveedorDto;
import gt.gob.mineco.diaco.model.Departamento;
import gt.gob.mineco.diaco.model.DiacoEstablecimiento;
import gt.gob.mineco.diaco.model.DiacoProveedor;
import gt.gob.mineco.diaco.model.DiacoProveedorAprovar;
import gt.gob.mineco.diaco.model.Municipio;
import gt.gob.mineco.diaco.model.TipoEmail;
import gt.gob.mineco.diaco.model.TipoTelefono;
import gt.gob.rgm.sat.ws.ConsultaSiaf;
import gt.gob.rgm.sat.ws.ConsultaSiafLocator;
import gt.gob.rgm.sat.ws.ConsultasPublicasPortSoapBindingStub;
import gt.gob.rgm.sat.ws.ContribuyenteWsEp;
import java.io.File;
import java.io.StringReader;
import java.net.URL;
import java.rmi.Remote;
import java.util.ArrayList;
import java.util.Iterator;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.Unmarshaller;
import javax.xml.namespace.QName;
import javax.xml.rpc.Call;
import javax.xml.rpc.ServiceException;
import javax.xml.rpc.encoding.TypeMappingRegistry;
import javax.xml.rpc.handler.HandlerRegistry;
import gt.gob.mineco.diaco.model.DiacoCalificacionUsuarioProv;
import gt.gob.mineco.diaco.model.DiacoCatalogoCatagoriaCalificacion;
import gt.gob.mineco.diaco.model.DiacoProveedor;
import gt.gob.mineco.diaco.model.DiacoPtsGeneralCalifProv;
import gt.gob.mineco.diaco.model.Municipio;
import gt.gob.mineco.diaco.util.FormCalificacionUsuario;
import java.util.List;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.naming.InitialContext;
import javax.transaction.UserTransaction;

@Stateless
public class ProveedoresServiceImp {

    @Inject
    ProveedorRepository proveedorDao;

    @Inject
    DepartamentoRepository departamentoDao;

    @Inject
    MunicipioRepository municipioDao;

    @Inject
    CalificacionRepository calificacionDao;

    public DiacoProveedor saveProveedor(DiacoProveedor proveedor) {
        // asociar departamento
        Departamento departamento = departamentoDao.findById(proveedor.getCodigoDepartamento());
        proveedor.setDepartamento(departamento);
        // asociar municipio
        Municipio municipio = municipioDao.findById(proveedor.getCodigoMunicipio());
        proveedor.setMunicipio(municipio);
        proveedor.setRazonSocial(proveedor.getRazonSocial() != null ? proveedor.getRazonSocial() : "-----");
        proveedor.setNombreEmpresa(proveedor.getNombreEmpresa() != null ? proveedor.getNombreEmpresa() : "-----");
        DiacoProveedor temp = this.getProveedorById(proveedor.getIdProveedor() != null ? proveedor.getIdProveedor() : 0);
        proveedor.setDireccion(proveedor.getDireccionDetalle() != null ? proveedor.getDireccionDetalle() : "pendiente");
        if (proveedor.getTipoProveedor().equals("6")) {
            proveedor.setNombre(proveedor.getPrimerNombre() + " " + proveedor.getPrimerApellido());
        } else {
            proveedor.setNombre(proveedor.getNombreEmpresa());
        }
        if (temp != null) {
            System.out.println("modifica proveedor ");
            proveedor.setFechaModificacion(new Timestamp(new Date().getTime()));
            proveedor.setFechaAdicion(temp.getFechaAdicion() != null ? temp.getFechaAdicion() : new Timestamp(new Date().getTime()));
            if (temp.getFechaRegistroConciliacionPrevia() != null) {
                proveedor.setFechaRegistroConciliacionPrevia(temp.getFechaRegistroConciliacionPrevia());
            }
            proveedorDao.merge(proveedor);
        } else {
            System.out.println("graba proveedor ");
            proveedor.setFechaAdicion(new Timestamp(new Date().getTime()));
            proveedorDao.save(proveedor);
        }
        if (proveedor != null) {
            //graba telefono
            if (proveedor.getTelefono() != null) {
                //busca telefono
                List<TipoTelefono> tels = proveedorDao.findTelefonosById(proveedor.getIdProveedor());
                if (tels != null && !tels.isEmpty()) {
                    for (TipoTelefono t : tels) {
                        t.setTelefono(proveedor.getTelefono());
                        this.proveedorDao.updateTelefono(t);
                    }
                } else {
                    TipoTelefono tel = new TipoTelefono();
                    tel.setId_proveedor(proveedor.getIdProveedor());
                    tel.setTelefono(proveedor.getTelefono());
                    tel.setTipo_telefono(3); //personal
                    tel.setFecha_adicion(new Timestamp(new Date().getTime()));
                    this.proveedorDao.saveTelefono(tel);

                }
            }
            //graba correo
            if (proveedor.getEmail() != null) {
                List<TipoEmail> correos = proveedorDao.findCorreosById(proveedor.getIdProveedor());
                if (correos != null && !correos.isEmpty()) {
                    for (TipoEmail e : correos) {
                        e.setCorreo_electronico(proveedor.getEmail());
                        this.proveedorDao.updateCorreo(e);
                    }
                } else {
                    TipoEmail correo = new TipoEmail();
                    correo.setCorreo_electronico(proveedor.getEmail());
                    correo.setFecha_adicion(new Date());
                    correo.setId_proveedor(proveedor.getIdProveedor());
                    this.proveedorDao.saveCorreo(correo);
                }
            }
        }
        return proveedor;
    }

    public DiacoProveedor updateProveedor(DiacoProveedor proveedor) {
        if (proveedor != null) {
            DiacoProveedor temp = this.findConsumidorById(proveedor.getIdProveedor());
            if (temp != null) {
                temp.setHabilitadoNotificacionElectronica("1");
                return this.proveedorDao.merge(temp);
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    public DiacoProveedorAprovar saveProveedorAprobar(DiacoProveedorAprovar proveedor) {
        // asociar departamento
        Departamento departamento = departamentoDao.findById(proveedor.getIdDepartamento());
        proveedor.setDepartamento(departamento);
        // asociar municipio
        Municipio municipio = municipioDao.findById(proveedor.getIdMunicipio());
        proveedor.setMunicipio(municipio);

        proveedor.setRazonSocial(proveedor.getRazonSocial() != null ? proveedor.getRazonSocial() : "-----");
        proveedor.setNombre(proveedor.getNombre() != null ? proveedor.getNombre() : "-----");
        proveedor.setDireccion(proveedor.getDireccion() != null ? proveedor.getDireccion() : "pendiente");
        proveedor.setCreadoPor(this.proveedorDao.findUserById(1));
        DiacoProveedorAprovar tempp = proveedorDao.findByNitProveedor(proveedor.getNit());

        if (tempp != null) {
            System.out.println("actualiza proveedor ");
            proveedor.setFechaCreado(tempp.getFechaCreado());
            if (tempp.getNotaRechazo() != null) {
                proveedor.setNotaRechazo(tempp.getNotaRechazo());
            }
            proveedor.setEstado(tempp.getEstado() != null ? tempp.getEstado() : "P");
            proveedorDao.mergeProveedor(proveedor);
        } else {
            System.out.println("graba proveedor ");
            proveedor.setEstado("P");
            proveedor.setFechaCreado(new Timestamp(new Date().getTime()));
            proveedorDao.saveProveedor(proveedor);
        }

//        if (proveedor != null) {
//            //graba telefono
//            if (proveedor.getTelefono() != null) {
//                //busca telefono
//                List<TipoTelefono> tels = proveedorDao.findTelefonosById(proveedor.getIdProveedor());
//                if (tels != null && !tels.isEmpty()) {
//                    for (TipoTelefono t : tels) {
//                        t.setTelefono(proveedor.getTelefono());
//                        this.proveedorDao.updateTelefono(t);
//                    }
//                } else {
//                    TipoTelefono tel = new TipoTelefono();
//                    tel.setId_proveedor(proveedor.getIdProveedor());
//                    tel.setTelefono(proveedor.getTelefono());
//                    tel.setTipo_telefono(3); //personal
//                    tel.setFecha_adicion(new Date());
//                    this.proveedorDao.saveTelefono(tel);
//
//                }
//            }
//            //graba correo
//            if (proveedor.getEmail() != null) {
//                List<TipoEmail> correos = proveedorDao.findCorreosById(proveedor.getIdProveedor());
//                if (correos != null && !correos.isEmpty()) {
//                    for (TipoEmail e : correos) {
//                        e.setCorreo_electronico(proveedor.getEmail());
//                        this.proveedorDao.updateCorreo(e);
//                    }
//                } else {
//                    TipoEmail correo = new TipoEmail();
//                    correo.setCorreo_electronico(proveedor.getEmail());
//                    correo.setFecha_adicion(new Date());
//                    correo.setId_proveedor(proveedor.getIdProveedor());
//                    this.proveedorDao.saveCorreo(correo);
//                }
//            }
//        }
        return proveedor;
    }

    public DiacoProveedor getProveedorByNit(String nit) {
        try {
            //DiacoProveedor result = proveedorDao.findByNit(nit);
            DiacoProveedor result = this.getProveedorByNitSAT(nit);
            if (result != null) {
                // hace las consultas a quejas para determinar el valor.
                Long totquejas = proveedorDao.findQuejasProv(result.getIdProveedor());
                Long totquejasval = proveedorDao.findQuejasValProv(result.getIdProveedor());
                result.setQuejas_validas(totquejas - totquejasval);
                result.setQuejas_validas_resuelta(totquejasval);
            }
            return result;
        } catch (NoResultException ex) {
            return null;
        }
    }

    public DiacoEstablecimiento getEstableciminientoById(Integer id) {
        DiacoEstablecimiento e = this.proveedorDao.getEstableciminientoById(id);
        if (e.getCodigoDepartamento() != null) {
            e.setIdDepartamento(e.getCodigoDepartamento().getCodigoDepartamento());
        }
        if (e.getCodigoMunicipio() != null) {
            e.setIdMunicipio(e.getCodigoMunicipio().getCodigoMunicipio());
        }
        return e;
    }

    public List<DiacoEstablecimiento> getEstableciminientoByNitProveedor(String nit) {
        List<DiacoEstablecimiento> temp = this.proveedorDao.getEstableciminientoByNitProveedor(nit);
        List<DiacoEstablecimiento> temn = new ArrayList<>();
        for (DiacoEstablecimiento e : temp) {
            if (e.getCodigoDepartamento() != null) {
                e.setIdDepartamento(e.getCodigoDepartamento().getCodigoDepartamento());
            }
            if (e.getCodigoMunicipio() != null) {
                e.setIdMunicipio(e.getCodigoMunicipio().getCodigoMunicipio());
            }
            //e.setCodigoDepartamento(null);
            //e.setCodigoMunicipio(null);
            temn.add(e);
        }
        if (!temn.isEmpty()) {
            return temn;
        } else {
            return temp;
        }
    }

    public DiacoEstablecimiento setEstableciminientoByNitProveedor(DiacoEstablecimiento est) {
        //ingresa datos de municipio y departamento
        if (est.getIdDepartamento() != null) {
            est.setCodigoDepartamento(this.departamentoDao.findById(est.getIdDepartamento()));
            est.setCodigoMunicipio(this.municipioDao.findById(est.getIdMunicipio()));
        }
        //busca si existe el establecimiento
        if (est.getIdEstablecimiento() != null) {
            DiacoEstablecimiento temp = this.proveedorDao.findEstableciminientoByNitProveedor(est.getIdEstablecimiento());
            if (temp != null) {
                est.setFechaModificacion(new Date());
                return this.proveedorDao.mergeEstableciminientoByNitProveedor(est);
            } else {
                est.setFechaAdicion(new Date());
                est.setHabilitado("1");
                return this.proveedorDao.saveEstableciminientoByNitProveedor(est);
            }
        } else {
            est.setFechaAdicion(new Date());
            est.setHabilitado("1");
            return this.proveedorDao.saveEstableciminientoByNitProveedor(est);
        }
    }

    public DiacoProveedorAprovar getProveedorByNitProveedor(String nit) {
        //invocar ws de sat
        try {
            //verifica  si ya existe 
            DiacoProveedorAprovar result = new DiacoProveedorAprovar();
            DiacoProveedorAprovar temp = proveedorDao.findByNitProveedor(nit.toUpperCase());
            if (temp != null) {
                result.setCorreo(temp.getCorreo());
                result.setDireccion(temp.getDireccion());
                result.setEstado(temp.getEstado());
                result.setId(temp.getId());
                result.setNit(temp.getNit());
                if (temp.getDepartamento() != null) {
                    result.setIdDepartamento(temp.getDepartamento().getCodigoDepartamento());
                }
                if (temp.getMunicipio() != null) {
                    result.setIdMunicipio(temp.getMunicipio().getCodigoMunicipio());
                }
                result.setNombre(temp.getNombre());
                if (temp.getNotaRechazo() != null) {
                    result.setNotaRechazo(temp.getNotaRechazo());
                }
                if (temp.getRazonSocial() != null) {
                    result.setRazonSocial(temp.getRazonSocial());
                }
                result.setTelefono(temp.getTelefono());
                if (temp.getCorreoNotif() != null) {
                    result.setCorreoNotif(temp.getCorreoNotif());
                }
                if (temp.getTelefonoNotif() != null) {
                    result.setTelefonoNotif(temp.getTelefonoNotif());
                }
//                result.setDepartamento(null);
//                result.setMunicipio(null);
//                result.setCreadoPor(null);
            } else {
                String url = this.proveedorDao.findParametro("sat_prov_url");
                String user = this.proveedorDao.findParametro("sat_prov_user");
                String pass = this.proveedorDao.findParametro("sat_prov_pass");
                ConsultaSiafLocator cs = new ConsultaSiafLocator();
                cs.setConsultasPublicasPortEndpointAddress(url);
                String resp = cs.getConsultasPublicasPort().findContribuyenteByNitMFP(user, pass, nit.toUpperCase());
                System.out.println("url: " + url + "  data: " + resp);
                if (!resp.isEmpty()) {
                    if (resp.contains("CODIGO_ERROR")) {
                        result = null;
                    } else {
                        result = new DiacoProveedorAprovar();
                        StringReader reader = new StringReader(
                                resp.replace("<GC_REQCONTRIBUYENTE>", "").replace("</GC_REQCONTRIBUYENTE>", "")
                                        .replace("<DOMICILIO_FISCAL>", "").replace("</DOMICILIO_FISCAL>", "")
                                        .replace("<EMA>", "<EMA><![CDATA[").replace("</EMA>", "]]></EMA>"));
                        JAXBContext jaxbContext = JAXBContext.newInstance(ProveedorAprobarDto.class);
                        Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();
                        ProveedorAprobarDto pa = (ProveedorAprobarDto) jaxbUnmarshaller.unmarshal(reader);
                        System.out.println("-----------------------" + pa.toString());
                        result.setNit(pa.getNit());
                        result.setCorreo(pa.getEma());
                        result.setTelefono(pa.getTel());
                        result.setDireccion(
                                (pa.getCoa() != null ? pa.getCoa() : "") + " "
                                + (pa.getNc() != null ? pa.getNc() : "") + " "
                                + (pa.getZon() != null ? (pa.getZon().trim().length() > 0 ? "zona " + pa.getZon() : "") : "") + " "
                                + (pa.getCol() != null ? (pa.getCol().trim().length() > 0 ? "colonia " + pa.getCol() : "") : "") + " "
                                + (pa.getApa() != null ? (pa.getApa().trim().length() > 0 ? " apartamento " + pa.getApa() : "") : "")
                        );
                        result.setNombre(pa.getNom());
                    }
                }
            }
            return result;

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }

    }

    public DiacoProveedor getProveedorById(Integer id) {
        return this.proveedorDao.findById(id);
    }

    public List<ProveedorDto> getProveedorByNitNombre(String nit, String nombre) {
        System.out.println("Busca proveedor por "+(!nit.isEmpty()?nit:(!nombre.isEmpty()?nombre:"sin parametros")));
        List<ProveedorDto> result = this.proveedorDao.getProveedorByNitNombre(nit, nombre);
        /*for (ProveedorDto pd : result) {
                if (pd.getNombre().toUpperCase().equals("PENDIENTE")) {
                    result.remove(pd);
                }
            }*/
        if (result != null && !result.isEmpty()) {
            System.out.println("Encontro  "+result.size()+" datos");
        } else {
            System.out.println("Busca dato en SAT ");
                DiacoProveedor temp = this.getProveedorByNitSAT(nit);
            if (temp != null) {
                ProveedorDto pd = new ProveedorDto();
                pd.setIdProveedor(temp.getIdProveedor());
                pd.setNitProveedor(temp.getNitProveedor());
                pd.setNombre(temp.getNombre());
                result.add(pd);
            } else {
                System.out.println("Encontro  0  datos");
            }
        }
        return result;
    }

    public TipoTelefono findTelefonoById(Integer id) {
        return proveedorDao.findTelefonoById(id);
    }

    public TipoEmail findCorreoById(Integer id) {
        return proveedorDao.findCorreoById(id);
    }

    public DiacoProveedor findConsumidorById(Integer id) {
        return this.proveedorDao.findById(id);
    }

    public List<TipoTelefono> findTelefonosById(Integer id) {
        return proveedorDao.findTelefonosById(id);
    }

    public List<TipoEmail> findCorreosById(Integer id) {
        return proveedorDao.findCorreosById(id);
    }

    public DiacoProveedor getProveedorAndCalifByNit(String nit, String pIdInstalacionMobil) {
        try {
            //DiacoProveedor result = proveedorDao.findByNit(nit);
            DiacoProveedor result = this.getProveedorByNitSAT(nit);
            if (result != null) {
                // hace las consultas a quejas para determinar el valor.
                Long totquejas = proveedorDao.findQuejasProv(result.getIdProveedor());
                Long totquejasval = proveedorDao.findQuejasValProv(result.getIdProveedor());
                result.setQuejas_validas(totquejas - totquejasval);
                result.setQuejas_validas_resuelta(totquejasval);
            }
            //XHGCJDJE2342
            if (result != null) {
                /*  List<DiacoCalificacionUsuarioProv> diacoCalificacionUsuarioProv = calificacionDao.findCalificacionUsuarioProv(result.getIdProveedor(), pIdInstalacionMobil);
                result.setDiacoCalificacionUsuarioProv(diacoCalificacionUsuarioProv);

                List<DiacoPtsGeneralCalifProv> diacoPtsGeneralCalifProv = calificacionDao.findCalificacionGeneralProv(result.getIdProveedor());
                result.setDiacoPtsGeneralCalifProv(diacoPtsGeneralCalifProv);*/
                List<CalificacionProveedorDto> calificacionProveedorDto = calificacionDao.findCalificacionesUserGeneral(result.getIdProveedor(), pIdInstalacionMobil);
                result.setDiacoCalificacionProveedorDto(calificacionProveedorDto);

            }
            return result;
        } catch (NoResultException ex) {
            return null;
        }
    }

    public DiacoCalificacionUsuarioProv saveCalificacionProveedor(FormCalificacionUsuario pCalificacion) {
        UserTransaction transaction = null;
        DiacoCalificacionUsuarioProv calificacionModel;
        DiacoCalificacionUsuarioProv result = null;
        try {
            transaction = (UserTransaction) new InitialContext().lookup("java:comp/UserTransaction");
            transaction.begin();
            //DiacoProveedor proveedorModel = proveedorDao.findByNit(pCalificacion.getNit_proveedor());
            DiacoProveedor proveedorModel = this.getProveedorByNitSAT(pCalificacion.getNit_proveedor());
            DiacoCatalogoCatagoriaCalificacion categoriaCalificacion = new DiacoCatalogoCatagoriaCalificacion(pCalificacion.getIdCategoriaCalificacion());
            calificacionModel = calificacionDao.findCalificacionUsuarioProvCategoria(proveedorModel.getIdProveedor(), pCalificacion.getId_instalacion(), categoriaCalificacion);

            if (calificacionModel != null) { //ya existe la calificacion , solo se actualiza
                calificacionModel.setCalificacion(pCalificacion.getCalificacion());
                calificacionModel.setFecha_calificacion(new Date());
                calificacionDao.saveCalificacionUsuario(calificacionModel);
            } else {  //Es una calificacion nueva
                calificacionModel = new DiacoCalificacionUsuarioProv();
                calificacionModel.setCalificacion(pCalificacion.getCalificacion());
                calificacionModel.setIdInstalacionMobil(pCalificacion.getId_instalacion());

                calificacionModel.setIdCategoriaCalificacion(categoriaCalificacion);

                calificacionModel.setIdProveedor(proveedorModel.getIdProveedor());
                calificacionModel.setFecha_calificacion(new Date());

                result = calificacionDao.saveCalificacionUsuario(calificacionModel);
            }
            transaction.commit();

        } catch (Exception e) {
            try {
                e.printStackTrace();
                transaction.rollback();
            } catch (Exception ec) {
                ec.printStackTrace();
            }

        }

        return result;

    }

    public DiacoProveedor getProveedorByNitSAT(String nit) {
        //invocar ws de sat
        try {
            //verifica  si ya existe 
            DiacoProveedor result = new DiacoProveedor();
            DiacoProveedor temp = proveedorDao.findByNit(nit.toUpperCase());
            if (temp != null) {
                result = temp;
            } else {
                String url = this.proveedorDao.findParametro("sat_prov_url");
                String user = this.proveedorDao.findParametro("sat_prov_user");
                String pass = this.proveedorDao.findParametro("sat_prov_pass");
                ConsultaSiafLocator cs = new ConsultaSiafLocator();
                cs.setConsultasPublicasPortEndpointAddress(url);
                String resp = cs.getConsultasPublicasPort().findContribuyenteByNitMFP(user, pass, nit.toUpperCase());
                System.out.println("url: " + url + "  data: " + resp);
                if (!resp.isEmpty()) {
                    if (resp.contains("CODIGO_ERROR")) {
                        result = null;
                    } else {
                        result = new DiacoProveedor();
                        StringReader reader = new StringReader(
                                resp.replace("<GC_REQCONTRIBUYENTE>", "").replace("</GC_REQCONTRIBUYENTE>", "")
                                        .replace("<DOMICILIO_FISCAL>", "").replace("</DOMICILIO_FISCAL>", "")
                                        .replace("<EMA>", "<EMA><![CDATA[").replace("</EMA>", "]]></EMA>"));
                        JAXBContext jaxbContext = JAXBContext.newInstance(ProveedorAprobarDto.class);
                        Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();
                        ProveedorAprobarDto pa = (ProveedorAprobarDto) jaxbUnmarshaller.unmarshal(reader);
                        System.out.println("-----------------------" + pa.toString());
                        result.setNitProveedor(pa.getNit());
                        result.setEmail(pa.getEma());
                        result.setTelefono(pa.getTel());
                        result.setDireccion(
                                (pa.getCoa() != null ? pa.getCoa() : "") + " "
                                + (pa.getNc() != null ? pa.getNc() : "") + " "
                                + (pa.getZon() != null ? (pa.getZon().trim().length() > 0 ? "zona " + pa.getZon() : "") : "") + " "
                                + (pa.getCol() != null ? (pa.getCol().trim().length() > 0 ? "colonia " + pa.getCol() : "") : "") + " "
                                + (pa.getApa() != null ? (pa.getApa().trim().length() > 0 ? " apartamento " + pa.getApa() : "") : "")
                        );
                        result.setNombre(pa.getNom());
                        // asociar departamento
                        Departamento departamento = departamentoDao.findById(9);
                        result.setDepartamento(departamento);
                        // asociar municipio
                        Municipio municipio = municipioDao.findById(1);
                        result.setMunicipio(municipio);
                        result.setRazonSocial("-----");
                        result.setNombreEmpresa("-----");
                        result.setCalificacionAutorizada("0");
                        result.setFechaAdicion(new Timestamp(new Date().getTime()));
                        result.setHabilitado("1");
                        result.setTipoProveedor("6");
                        result.setHabilitadoConciliacionPrevia("0");
                        result.setHabilitado("1");
                        result.setIdActividadEconomica("1");
                        result.setIdTipoComercio("1");
                        result.setDireccionZona(pa.getZon());
                        this.proveedorDao.save(result);
                    }
                }
            }
            return result;

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

}
