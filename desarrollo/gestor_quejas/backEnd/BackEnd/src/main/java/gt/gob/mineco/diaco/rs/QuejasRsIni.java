package gt.gob.mineco.diaco.rs;

import java.io.InputStream;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.QueryParam;
import javax.ws.rs.DefaultValue;
import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;

import gt.gob.mineco.diaco.dto.DiacoQuejaIniDto;
import gt.gob.mineco.diaco.model.DiacoQueja;
import gt.gob.mineco.diaco.model.TipoUsuario;
import gt.gob.mineco.diaco.service.QuejasServiceImp;
import gt.gob.mineco.diaco.service.SecurityManagerServiceImpl;
import gt.gob.mineco.diaco.service.TipoImagenesQuejaServiceImp;
import gt.gob.mineco.diaco.util.ResponseRs;
import java.sql.Date;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import javax.ws.rs.GET;
import javax.ws.rs.PathParam;

@Path("/quejasini")
@RequestScoped
public class QuejasRsIni {

    @Inject
    QuejasServiceImp quejasService;
    @Inject
    TipoImagenesQuejaServiceImp tipoImgQuejaService;
    @Inject
    SecurityManagerServiceImpl securityService;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public ResponseRs getQuejas(DiacoQuejaIniDto quejaini) {
        ResponseRs response = new ResponseRs();
        List<DiacoQuejaIniDto> paises = quejasService.getquejas(quejaini);
        response.setValue(paises);
        return response;
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public ResponseRs getQuejasId(@PathParam(value = "id") Integer id) {
        ResponseRs response = new ResponseRs();
        DiacoQueja queja = quejasService.getquejasId(id);
        try {
            String tempFormat = new SimpleDateFormat("dd/MM/yyyy").format(queja.getFechaQueja());
            System.out.println("fecha: " + tempFormat);
            queja.setFechaFactura_(tempFormat);
        } catch (Exception e) {
            System.out.println("Error en fecha: " + queja.getFechaFactura());
        }
        response.setValue(queja);
        return response;
    }

    @GET
    @Path("/noqueja/{anio}/{correlativo}")
    @Produces(MediaType.APPLICATION_JSON)
    public ResponseRs getQuejasAnioSec(@PathParam(value = "anio") Integer anio, @PathParam(value = "correlativo") Integer correlativo) {
        ResponseRs response = new ResponseRs();
        DiacoQueja queja = quejasService.getquejasAnioSec(anio, correlativo);
        response.setValue(queja);
        return response;
    }

    @GET
    @Path("/secuencia")
    @Produces(MediaType.APPLICATION_JSON)
    public ResponseRs getSecuencia() {
        ResponseRs response = new ResponseRs();
        Long sigSecuencia = quejasService.getSecuencia();
        response.setValue(sigSecuencia);
        return response;
    }

    @GET
    @Path("/secuencia/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public ResponseRs getIdFuente(@PathParam(value = "id") Integer id) {
        ResponseRs response = new ResponseRs();
        DiacoQueja sigSecuencia = quejasService.findBySecuencia(id);
        response.setValue(sigSecuencia);
        return response;
    }

    @GET
    @Path("/quejacon/{dato}/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public ResponseRs getIdConsumidor(@PathParam(value = "dato") String dato, @PathParam(value = "id") String id,
             @DefaultValue("0") @QueryParam("queja") String pqueja) {
        ResponseRs response = new ResponseRs();
        if (dato.equals("interno")) {
            if (pqueja.equals("0")) {
                response.setValue(null);
            } else {
                DiacoQueja queja = this.securityService.findTokenIntExt(dato, id, pqueja);
                response.setValue(queja);
                response.setCode(queja != null ? 1L : 0L);
                response.setTotal(queja != null ? 1 : 0);
                response.setReason(queja != null ? "OK" : "ERROR");
            }
        } else if (dato.equals("externo") || dato.equals("externo1")) {
            //externo -  busca si existe el link y esta activo, adicionalmente del dato de la queja
            //esterno1 -  elimina el link para que ya no sea utiliza
            DiacoQueja queja = this.securityService.findTokenIntExt(dato, id, "");
            try {
                String tempFormat = new SimpleDateFormat("dd/MM/yyyy").format(queja.getFechaQueja());
                //System.out.println("fecha: " + tempFormat);
                queja.setFechaFactura_(tempFormat);
            } catch (Exception e) {
                System.out.println("Error en fecha: " );
            }
            response.setValue(queja);
            response.setCode(queja != null ? 1L : 0L);
            response.setTotal(queja != null ? 1 : 0);
            response.setReason(queja != null ? "OK" : "ERROR");
        } else if (dato.equals("0") || dato.equals("1")) {
            DiacoQuejaIniDto sigSecuencia = this.securityService.findTokenByConsumidor(dato, id);
            response.setValue(sigSecuencia);
            response.setCode(sigSecuencia != null ? 1L : 0L);
            response.setTotal(sigSecuencia != null ? 1 : 0);
            response.setReason(sigSecuencia != null ? "OK" : "ERROR");
        } else if (dato.equals("presencial")) {
            TipoUsuario sigSecuencia = this.securityService.findTokenPresenccial(dato, id);
            response.setValue(sigSecuencia);
            response.setCode(sigSecuencia != null ? 1L : 0L);
            response.setTotal(sigSecuencia != null ? 1 : 0);
            response.setReason(sigSecuencia != null ? "OK" : "ERROR");
        }
        return response;
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public ResponseRs createQueja(DiacoQuejaIniDto queja) {
        ResponseRs response = new ResponseRs();
        queja = quejasService.saveQuejaIni(queja);
        response.setValue(queja);
        //send email for notification
        System.out.println("Envio correo queja web"
                + this.quejasService.sendMail(queja, "subject", "1", ""));
        return response;
    }

    @POST
    @Path("/noupload")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public ResponseRs createQuejaNoUpload(DiacoQuejaIniDto queja) {
        ResponseRs response = new ResponseRs();
        queja = quejasService.saveQuejaIni(queja);
        response.setValue(queja);
        //send email for upload files
        String token = this.securityService.createTokenByConsumidor(queja);
        System.out.println("tocken  " + token);
        System.out.println("Envio correo queja int"
                + this.quejasService.sendMail(queja, "subject", "3", token));
        return response;
    }

    @POST
    @Path("/internal")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public ResponseRs updateQuejaUpload(DiacoQuejaIniDto queja) {
        ResponseRs response = new ResponseRs();
        //queja = quejasService.saveQuejaIni(queja);
        response.setValue(queja);
        //send email for notification upload files
        System.out.println("Envio correo queja upload"
                + this.quejasService.sendMail(queja, "subject", "2", ""));
        return response;
    }

    @POST
    @Path("/upload")
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Produces(MediaType.APPLICATION_JSON)
    public ResponseRs upload(@FormDataParam("document") InputStream is,
            @FormDataParam("document") FormDataContentDisposition fileDetails,
            @QueryParam("id_queja") Integer id_queja,
            @QueryParam("id_categoria_imagen") Integer id_categoria_imagen, //dpi o factura
            @DefaultValue("0") @QueryParam("correo") Integer pcorreo,
            @DefaultValue("0") @QueryParam("data") String ptoken
    ) {
        Integer id_tipo_imagen = 3;
        Integer id_flujo = 1;
        System.out.println("idqueja " + id_queja + ", tipoImange " + id_tipo_imagen + ", categoria " + id_categoria_imagen + ", flujo " + id_flujo);
        if (pcorreo > 0) {
            DiacoQuejaIniDto sigSecuencia = this.securityService.findTokenByConsumidor("0", ptoken);
            if (sigSecuencia != null) {
                this.quejasService.sendMail(sigSecuencia, "subject", "2", "");
            }
        }
        return tipoImgQuejaService.saveImagenPub(
                is,
                fileDetails,
                id_queja,
                id_tipo_imagen,
                id_categoria_imagen,
                id_flujo
        );
    }

    /*
    private void writeToFile(InputStream uploadedInputStream, String uploadedFileLocation) {
        try {
            OutputStream out = new FileOutputStream(new File(uploadedFileLocation));
            int read = 0;
            byte[] bytes = new byte[1024];

            File salida = new File(uploadedFileLocation);
            System.out.println("Archivo subido en: " + salida.getAbsolutePath());
            out = new FileOutputStream(salida);
            while ((read = uploadedInputStream.read(bytes)) != -1) {
                out.write(bytes, 0, read);
            }
            out.flush();
            out.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
     */
}
