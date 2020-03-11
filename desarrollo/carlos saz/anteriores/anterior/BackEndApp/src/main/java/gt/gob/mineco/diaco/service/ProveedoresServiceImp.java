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
import gt.gob.mineco.diaco.model.DiacoCalificacionUsuarioProv;
import gt.gob.mineco.diaco.model.DiacoCatalogoCatagoriaCalificacion;
import gt.gob.mineco.diaco.model.DiacoProveedor;
import gt.gob.mineco.diaco.model.Municipio;
import gt.gob.mineco.diaco.util.FormCalificacionUsuario;
import gt.gob.mineco.diaco.model.TipoEmail;
import gt.gob.mineco.diaco.model.TipoTelefono;
import gt.gob.rgm.sat.ws.ConsultaSiafLocator;
import java.io.StringReader;
import java.util.List;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.naming.InitialContext;
import javax.transaction.UserTransaction;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.Unmarshaller;

@Stateless
@TransactionManagement(TransactionManagementType.BEAN)
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
        proveedor.setFechaAdicion(new Timestamp(new Date().getTime()));
        return proveedorDao.save(proveedor);
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

    public DiacoProveedor getProveedorById(Integer id) {
        return this.proveedorDao.findById(id);
    }

    public List<ProveedorDto> getProveedorByNitNombre(String nit, String nombre) {
        List<ProveedorDto> result = this.proveedorDao.getProveedorByNitNombre(nit, nombre);
        /*for (ProveedorDto pd : result) {
                if (pd.getNombre().toUpperCase().equals("PENDIENTE")) {
                    result.remove(pd);
                }
            }*/
        if (result != null && !result.isEmpty()) {
            
        } else {
            DiacoProveedor temp = this.getProveedorByNitSAT(nit);
            if (temp != null) {
                ProveedorDto pd = new ProveedorDto();
                pd.setIdProveedor(temp.getIdProveedor());
                pd.setNitProveedor(temp.getNitProveedor());
                pd.setNombre(temp.getNombre());
                result.add(pd);
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
