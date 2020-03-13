/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package gt.gob.mineco.diaco.rs;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;


import gt.gob.mineco.diaco.service.TipoRegistrosQuejaService;
import javax.ws.rs.QueryParam;

/**
 *
 * @author julio
 */
@Path("/registros-queja")
@RequestScoped
public class TipoRegistrosQuejaRs {

    @Inject
    private TipoRegistrosQuejaService tipoRegQuejaService;

    @GET /*DIACO-AQ-FO-02*/
    @Path("/form-queja/{id}")
    @Produces(MediaType.APPLICATION_OCTET_STREAM)
    public Response getFormularioQueja(@QueryParam("id") Integer id) {
    //    return tipoRegQuejaService.getRegistroFichaQueja(idqueja);
        return tipoRegQuejaService.getFormularioQueja(id);
    }
 
     @GET
    //@Path("/com-perm/{idqueja}")
    @Path("/com-perm/{idqueja}/{status}/{observaciones}/{via}")
    @Produces(MediaType.APPLICATION_OCTET_STREAM)
    public Response getRegistroComunicacionPermanente(@PathParam("idqueja") Integer idqueja,@PathParam("status") String status,@PathParam("observaciones") String observaciones,@PathParam("via") String via) {
        return tipoRegQuejaService.getRegistroComunicacionPermanente(idqueja,status,observaciones,via);
    }
  
    
     @GET
    //@Path("/com-perm/{idqueja}")
    @Path("/cedula-cita-cons/{idqueja}/{fecha}/{hora}")
    @Produces(MediaType.APPLICATION_OCTET_STREAM)
    public Response getCedulaCitacionCons(@PathParam("idqueja") Integer idqueja,@PathParam("fecha") String fechaCitacion,@PathParam("hora") String horaCitacion) {
        return tipoRegQuejaService.getCedulaCitacionCons(idqueja,fechaCitacion,horaCitacion);
    }
    
     @GET
    @Path("/cedula-cita-prov/{idqueja}/{fecha}/{hora}")
    @Produces(MediaType.APPLICATION_OCTET_STREAM)
    public Response getCedulaCitacionProv(@PathParam("idqueja") Integer idqueja,@PathParam("fecha") String fechaCitacion,@PathParam("hora") String horaCitacion) {
        return tipoRegQuejaService.getCedulaCitacionProv(idqueja,fechaCitacion,horaCitacion);
    }
      @GET
    @Path("/cedula-noti-cons/{idqueja}/{fecha}")
    @Produces(MediaType.APPLICATION_OCTET_STREAM)
    public Response getCedulaNotiCons(@PathParam("idqueja") Integer idqueja,@PathParam("fecha") String fechaCitacion) {
        return tipoRegQuejaService.getCedulaNotificacionCons(idqueja,fechaCitacion);
    }
    
    @GET
    @Path("/cedula-noti-prov/{idqueja}/{fecha}")
    @Produces(MediaType.APPLICATION_OCTET_STREAM)
    public Response getCedulaNotiProv(@PathParam("idqueja") Integer idqueja,@PathParam("fecha") String fechaCitacion) {
        return tipoRegQuejaService.getCedulaNotificacionProv(idqueja,fechaCitacion);
    }
    
    @GET
    @Path("/acta-conciliacion-at-contr/{idqueja}")
    @Produces(MediaType.APPLICATION_OCTET_STREAM)
    public Response getActaConciliacionAtContri(@PathParam("idqueja") Integer idqueja,@QueryParam("pFecha_conciliacion") String pFecha_conciliacion, @QueryParam("pHora_conciliacion") String pHora_conciliacion, @QueryParam("pNombre_auxiliar") String pNombre_auxiliar, @QueryParam("pPunto_segundo") String pPunto_segundo, @QueryParam("pPunto_tercero") String pPunto_tercero, @QueryParam("pPunto_cuarto") String pPunto_cuarto,@QueryParam("pPunto_cinco") String pPunto_cinco ) {
        return tipoRegQuejaService.getActaConciliacioAtContr(idqueja, pFecha_conciliacion, pHora_conciliacion, pNombre_auxiliar, pPunto_segundo, pPunto_tercero, pPunto_cuarto, pPunto_cinco);
    }
    
    @GET
    @Path("/ficha-queja")
    @Produces(MediaType.APPLICATION_OCTET_STREAM)
    public Response getFichaQueja(@QueryParam("pIdQueja") Integer idqueja) {
        return tipoRegQuejaService.getFichaQueja(idqueja);
    }
    
    @GET
    @Path("/resolucion-archivo-visita-campo")
    @Produces(MediaType.APPLICATION_OCTET_STREAM)
    public Response getResArchivoVisitaCampo(@QueryParam("pIdQueja") Integer pIdQueja,@QueryParam("pFechaResolucion") String pFechaResolucion ) {
        return tipoRegQuejaService.getArchivoVisitaCampo(pIdQueja, pFechaResolucion);
    }
    
    
    
}
