package gt.gob.mineco.diaco.service;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.Date;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.persistence.NoResultException;

import gt.gob.mineco.diaco.dao.ProveedorRepository;
import gt.gob.mineco.diaco.dao.QuejaRepository;
import gt.gob.mineco.diaco.dao.ConsumidorRepository;
import gt.gob.mineco.diaco.dao.DepartamentoRepository;
import gt.gob.mineco.diaco.dao.MunicipioRepository;
import gt.gob.mineco.diaco.model.DiacoQueja;
import gt.gob.mineco.diaco.dto.DiacoQuejaDto;
import gt.gob.mineco.diaco.dto.DiacoQuejaIniDto;
import gt.gob.mineco.diaco.model.Departamento;
import gt.gob.mineco.diaco.model.DiacoConsumidor;
import gt.gob.mineco.diaco.model.DiacoProveedor;
import gt.gob.mineco.diaco.model.Municipio;
import gt.gob.mineco.diaco.model.TipoEmail;
import gt.gob.mineco.diaco.model.TipoPasoQueja;
import gt.gob.mineco.diaco.model.TipoTelefono;
import gt.gob.mineco.diaco.util.Constants;
import gt.gob.mineco.diaco.util.Email;
import java.util.ArrayList;
import java.util.List;

@Stateless
public class QuejasServiceImp {

    @Inject
    QuejaRepository quejaDao;
    @Inject
    ProveedorRepository proveedorDao;
    @Inject
    ConsumidorRepository consumidorDao;
    @Inject
    DepartamentoRepository deptoDao;
    @Inject
    MunicipioRepository muniDao;

    public DiacoQueja saveQuejadq(DiacoQueja queja) {
        boolean existeq = false;
        if (queja.getIdQueja() != null) {
            System.out.println("actualiza queja " + queja.getIdQueja());
            existeq = true;
        } else {
            System.out.println("graba nueva queja ");
            // asignar estado 401
            queja.setIdEstadoQueja(Constants.QUEJA_NUEVA);
            // generar correlativo de queja
            Integer noQueja = 1;
            try {
                noQueja = quejaDao.findMaxFromYear() + 1;
            } catch (NoResultException ex) {
                // si no hay resultados para el año actual, es la 1
            }
            queja.setAnio(LocalDate.now().getYear());
            queja.setNoQueja(noQueja);
            queja.setFechaQueja(new Timestamp(new Date().getTime()));
        }

        return (existeq ? quejaDao.merge(queja) : quejaDao.save(queja));
    }

    public DiacoQuejaDto saveQueja(DiacoQuejaDto quejaDto) {
        DiacoQueja queja = new DiacoQueja();
        // asignar estado 401
        queja.setIdEstadoQueja(Constants.QUEJA_NUEVA);
        // generar correlativo de queja
        Integer noQueja = 1;
        try {
            noQueja = quejaDao.findMaxFromYear() + 1;
        } catch (NoResultException ex) {
            // si no hay resultados para el año actual, es la 1
        }
        queja.setAnio(LocalDate.now().getYear());
        queja.setNoQueja(noQueja);
        queja.setFechaQueja(new Timestamp(new Date().getTime()));
        queja.setDetalleQueja(quejaDto.getDetalleQueja());
        queja.setSolicitaQue(quejaDto.getSolicitaQue());
        //busca proveedor
        DiacoProveedor prov = new DiacoProveedor();
        prov = proveedorDao.findByNit(quejaDto.getNitProveedor());
        if (prov != null) {
            queja.setIdProveedor(prov.getIdProveedor());
        } else {
            // crea el proveedor
            prov = new DiacoProveedor();
            prov.setIdProveedor(noQueja);
            prov.setNitProveedor(quejaDto.getNitProveedor());
            prov.setNombre("pendiente");
            prov.setNombreEmpresa("pendiente");
            proveedorDao.save(prov);
            queja.setIdProveedor(prov.getIdProveedor());
        }
        //busca consumidor
        DiacoConsumidor cons = new DiacoConsumidor();
        cons = consumidorDao.findByDocumentoIdentificacion(quejaDto.getDpiPasaporte());
        if (cons != null) {
            queja.setIdConsumidor(cons.getIdConsumidor());
        } else {
            // crea consumidor
            cons = new DiacoConsumidor();
            cons.setDocumentoIdentificacion(quejaDto.getDpiPasaporte());
            cons.setCorreoElectronico1(quejaDto.getCorreo());
            cons.setTelefono(quejaDto.getTelefono());
            cons.setNombre1(quejaDto.getNombre());
            consumidorDao.save(cons);
            queja.setIdConsumidor(cons.getIdConsumidor());
        }
        queja.setIdDiacoSede(1);
        quejaDao.save(queja);
        return quejaDto;
    }

    public DiacoQuejaIniDto saveQuejaIni(DiacoQuejaIniDto quejaIni) {
        DiacoQueja queja = new DiacoQueja();
        Integer noQueja = 1;
        //verifica si existe el proveedor
        //DiacoProveedor pt = this.proveedorDao.findById(quejaIni.getIdProveedor() != null ? quejaIni.getIdProveedor() : 0);
        DiacoProveedor pt = this.proveedorDao.findByNit(quejaIni.getNitProveedor()!= null ? quejaIni.getNitProveedor(): "0");
        //DiacoConsumidor ct = this.consumidorDao.findById(quejaIni.getIdConsumidor() != null ? quejaIni.getIdConsumidor() : 0);
        DiacoConsumidor ct = this.consumidorDao.findByDocumentoIdentificacion(quejaIni.getDpiPasaporte()!= null ? quejaIni.getDpiPasaporte() : "0");

        //verificamos que exista el 

        try {
            noQueja = quejaDao.findMaxFromYear() + 1;
        } catch (NoResultException ex) {
            // si no hay resultados para el año actual, es la 1
        }
        //if (!quejaIni.getIdProveedor().toString().equals("0")) {
        if (pt != null) {
            queja.setIdProveedor(pt.getIdProveedor());
            if (pt.getHabilitadoConciliacionPrevia().equals("1")) {
                System.out.println("graba estado queja 401");
                queja.setIdEstadoQueja(Constants.QUEJA_NUEVA);
            }
        } else {
            //Graba proveedor
            DiacoProveedor prov = new DiacoProveedor();
            prov = new DiacoProveedor();
            //prov.setIdProveedor(noQueja);
            prov.setNitProveedor(quejaIni.getNitProveedor());
            prov.setNombre("pendiente");
            prov.setNombreEmpresa("pendiente");
            prov.setHabilitadoConciliacionPrevia("0");  //para que pueda arrncar sin problemas la cola
            prov.setDireccion("direccion");
            prov.setTipoProveedor("6");
            prov.setEmail("pendiente@correo.com");
            prov.setFechaAdicion(new Timestamp(new Date().getTime()));
            prov.setHabilitado("1");
            prov.setIdActividadEconomica("1");
            prov.setIdTipoComercio("1");
            prov.setTelefono("00000000");
            prov.setNombreEmpresa("pendiente");
            prov.setRazonSocial("pendiente");
            prov.setCodigoDepartamento(9);
            prov.setCodigoMunicipio(1);
            Departamento depto = this.deptoDao.findById(9);
            Municipio muni = this.muniDao.findById(1);
            prov.setDepartamento(depto);
            prov.setMunicipio(muni);
            proveedorDao.save(prov);
            queja.setIdProveedor(prov.getIdProveedor());
        }
        //if (!quejaIni.getIdConsumidor().toString().equals("0")) {
        if (ct != null) {
            System.out.println("existe consumidor");
            queja.setIdConsumidor(ct.getIdConsumidor());
            //actualiza los datos si hubieron
            String[] nombres = quejaIni.getNombre().replace(" ", "-").split("-");
            switch (nombres.length) {
                case 1:
                    ct.setNombre1(nombres[0]);
                    ct.setNombre2("");
                    ct.setNombre3("");
                    break;
                case 2:
                    ct.setNombre1(nombres[0]);
                    ct.setNombre2(nombres[1]);
                    ct.setNombre3("");
                    break;
                case 3:
                    ct.setNombre1(nombres[0]);
                    ct.setNombre2(nombres[1]);
                    ct.setNombre3(nombres[2]);
                    break;
            }
            String[] apellidos = quejaIni.getApellido().replace(" ", "-").split("-");
            switch (apellidos.length) {
                case 1:
                    ct.setApellido1(apellidos[0]);
                    ct.setApellido2("");
                    break;
                case 2:
                    ct.setApellido1(apellidos[0]);
                    ct.setApellido2(apellidos[1]);
                    break;
                default:
                    ct.setApellido1(apellidos[0]);
                    ct.setApellido2(apellidos[1]);
                    break;
            }
            //verifica si existe telefono grabado en la tabla telefono
            List<TipoEmail> correos = this.consumidorDao.findCorreosById(quejaIni.getIdConsumidor());
            for (TipoEmail te: correos) {
                if (te.getCorreo_electronico().equals(ct.getCorreoElectronico1())) {
                    te.setCorreo_electronico(quejaIni.getCorreo());
                    this.consumidorDao.updateCorreo(te);
                }
            }
            //verifica si existe correo en la tabla correo
            List<TipoTelefono> telefonos = this.consumidorDao.findTelefonosById(quejaIni.getIdConsumidor());
            for (TipoTelefono te: telefonos) {
                if (te.getTelefono().equals(ct.getTelefono())) {
                    te.setTelefono(quejaIni.getTelefono());
                    this.consumidorDao.updateTelefono(te);
                }
            }
            ct.setTelefono(quejaIni.getTelefono());
            ct.setCorreoElectronico1(quejaIni.getCorreo());
            this.consumidorDao.updateCon(ct);
        } else {
            // grabar consumidor
            System.out.println("no existe consumidor");
            DiacoConsumidor cons = new DiacoConsumidor();
            //cons.setIdConsumidor(noQueja);

            String[] nombres = quejaIni.getNombre().replace(" ", "-").split("-");
            switch (nombres.length) {
                case 1:
                    cons.setNombre1(nombres[0]);
                    break;
                case 2:
                    cons.setNombre1(nombres[0]);
                    cons.setNombre2(nombres[1]);
                    break;
                case 3:
                    cons.setNombre1(nombres[0]);
                    cons.setNombre2(nombres[1]);
                    cons.setNombre3(nombres[2]);
                    break;
            }
            String[] apellidos = quejaIni.getApellido().replace(" ", "-").split("-");
            switch (apellidos.length) {
                case 1:
                    cons.setApellido1(apellidos[0]);
                    break;
                case 2:
                    cons.setApellido1(apellidos[0]);
                    cons.setApellido2(apellidos[1]);
                    break;
                default:
                    cons.setApellido1(apellidos[0]);
                    cons.setApellido2(apellidos[1]);
                    break;
            }
            //cons.setNombre1(quejaIni.getNombre());
            cons.setDocumentoIdentificacion(quejaIni.getDpiPasaporte());
            cons.setTelefono(quejaIni.getTelefono());
            cons.setCorreoElectronico1(quejaIni.getCorreo());
            cons.setCodigoDepartamento(9);
            cons.setCodigoMunicipio(1);
            Departamento depto = this.deptoDao.findById(9);
            Municipio muni = this.muniDao.findById(1);
            cons.setDepartamento(depto);
            cons.setMunicipio(muni);
            cons.setNacionalidad(1);
            consumidorDao.save(cons);

            queja.setIdConsumidor(cons.getIdConsumidor());
            //graba el correo
            TipoEmail correo = new TipoEmail();
            correo.setCorreo_electronico(quejaIni.getCorreo());
            correo.setFecha_adicion(new Date());
            correo.setId_consumidor(cons.getIdConsumidor());
            this.consumidorDao.saveCorreo(correo);
            TipoTelefono tel = new TipoTelefono();
            tel.setId_consumidor(cons.getIdConsumidor());
            tel.setTelefono(quejaIni.getTelefono());
            tel.setTipo_telefono(3);
            tel.setFecha_adicion(new Date());
            this.consumidorDao.saveTelefono(tel);
        }
        queja.setIdDiacoSede(1);
        queja.setAnio(LocalDate.now().getYear());
        queja.setNoQueja(noQueja);
        queja.setFechaQueja(new Timestamp(new Date().getTime()));
        queja.setDetalleQueja(quejaIni.getDetalleQueja());
        queja.setSolicitaQue(quejaIni.getSolicitaQue());
        queja.setFuente("webMobil");
        queja.setUbicacion(quejaIni.getUbicacion());
        queja.setIdDepartamento(9);
        queja.setIdMunicipio(1);
        //queja.setIdFuente(Integer.parseInt(quejaIni.getIdFuente()));
        //graba la queja
        quejaDao.save(queja);

        quejaIni.setAnio(queja.getAnio());
        quejaIni.setIdQueja(queja.getIdQueja());
        quejaIni.setSecuencia(queja.getNoQueja());
        System.out.println("a cola");
        //boolean aquejanueva = false;
        //if (quejaIni.getIdProveedor().toString().equals("0")) {
        try {
            DiacoProveedor tempp = this.proveedorDao.findById(queja.getIdProveedor());
            System.out.println("------" + tempp.getHabilitadoConciliacionPrevia());
            if (tempp.getHabilitadoConciliacionPrevia().equals("1")) {
                System.out.println("no ingreso -graba estado queja 401");
                //queja.setIdEstadoQueja(Constants.QUEJA_NUEVA);
                //quejaDao.save(queja);
            } else {
                this.quejaDao.grabaAtencionConsumidor(queja);
                System.out.println("ingreso");
            }
        } catch (Exception e) {

        }
        //}

        return quejaIni;
    }

    public List<DiacoQuejaIniDto> getquejas(DiacoQuejaIniDto quejaIni) {
        List<DiacoQuejaIniDto> rlist = new ArrayList<>();

        return rlist;
    }

    public Long getSecuencia() {
        return quejaDao.getSecuencia();
    }

    public DiacoQueja findBySecuencia(Integer fuente) {
        return quejaDao.findByIdFuente(fuente);
    }

    public DiacoQueja getquejasId(Integer id) {
        DiacoQueja resp=  quejaDao.getquejasId(id);
        if (resp != null) {
            resp.setConsumidor(this.consumidorDao.findById(resp.getIdConsumidor()));
            resp.setProveedor(this.proveedorDao.findById(resp.getIdProveedor()));
            resp.setSede(this.quejaDao.findSedeById(resp.getIdDiacoSede()));
            TipoPasoQueja tpq = this.quejaDao.findPasoQuejaById(resp.getIdQueja());
            if (tpq != null)  {
                resp.setPasoQueja(tpq);
                resp.setEstadoQueja(this.quejaDao.findEstadoQuejaById(tpq.getId_estado_operado()));
            }
            resp.setEstadoQueja(this.quejaDao.findEstadoQuejaById(resp.getIdEstadoQueja()));
            resp.setColor("#FF0000");
        }
        return resp;
    }
    
    public DiacoQueja getquejasAnioSec(Integer anio, Integer correlativo) {
        DiacoQueja resp=  quejaDao.getquejasAnioSec(anio,correlativo);
        if (resp != null) {
            resp.setConsumidor(this.consumidorDao.findById(resp.getIdConsumidor()));
            resp.setProveedor(this.proveedorDao.findById(resp.getIdProveedor()));
            resp.setSede(this.quejaDao.findSedeById(resp.getIdDiacoSede()));
            TipoPasoQueja tpq = this.quejaDao.findPasoQuejaById(resp.getIdQueja());
            if (tpq != null)  {
                resp.setPasoQueja(tpq);
                resp.setEstadoQueja(this.quejaDao.findEstadoQuejaById(tpq.getId_estado_operado()));
            }
            resp.setEstadoQueja(this.quejaDao.findEstadoQuejaById(resp.getIdEstadoQueja()));
            resp.setColor("#FF0000");
        }
        return resp;
    }

    public boolean sendMail(DiacoQuejaIniDto queja, String subject, String tipo, String link) {
        Email correo = new Email();
        boolean resp = false;
        String salto = "<br>";

        String from = "info@diaco.gob.gt";
        String body = "";
        String body3 = "";
        String body1 = "Estimado Sr.(a) " + queja.getNombre() + ":" + salto
                + " Le notificamos que su queja ha sido recibida con éxito, "
                + " para darle seguimiento a la misma puede consultar el No. " + queja.getSecuencia().toString().concat("-").concat(queja.getAnio().toString()) + salto;
        String body4 = "Estimado Sr.(a) " + queja.getNombre() + ":" + salto
                + " Le notificamos que sus documentos de su queja se han recibido con éxito, "
                + " para darle seguimiento a la misma puede consultar el No. " + queja.getSecuencia().toString().concat("-").concat(queja.getAnio().toString()) + salto;
        String body2 = " Gracias por utilizar nuestros servicios electronicos. " + salto
                + "Atentamente, " + salto + salto + salto + " DIACO" + salto + " Dirección de atención y asistencia al consumidor " + salto
                + "Oficinas: 7a av. 7-61 Zona 4, 3er. Nivel Edificio del Registro Mercantil " + salto
                + "Teléfono: 2501-9898 " + salto
                + "Centro de Atención de Quejas: 6av. 0-35 Zona 4 centro comercial Plaza Zona 4 " + salto
                + "Área de Restaurantes 3er. Nivel Tel: 2501-9600";
        switch (tipo) {
            case "1":
                body = body1 + body2; //notificación de ingreso de queja web//notificación de ingreso de queja web 
                break;
            case "2":
                body = body4 + body2; //notificación de ingreso de queja por el usuario.
                break;
            case "3": //notificación de ingreso de queja call center
                body3 = "Le solicitamos por favor ingresar al siguiente link: " + salto + salto
                        + "http://desagestorquejas.diaco.gob.gt/dist5/#/quejacon/0/" + link + salto + salto
                        + " para ingresar copia de la factura o documento y su DPI" + salto
                        + " tome en cuenta que tiene 24 horas despues de recibido este correo para subir sus documentos." + salto;
                body = body1 + body3 + body2 + salto + salto + salto; //notificación de ingreso de que archivos
                break;
            default:
                break;
        }
        try {
			subject = "Notificación de queja grabada ".concat(queja.getSecuencia().toString().concat("-").concat(queja.getAnio().toString()));
            System.out.println(queja.getCorreo());
            String quejas[] = {queja.getCorreo()};
            System.out.println(quejas.length);
            resp = correo.SendEmail(from, quejas, subject, body);
        } catch (Exception e) {

        }
        return resp;
    }
}
