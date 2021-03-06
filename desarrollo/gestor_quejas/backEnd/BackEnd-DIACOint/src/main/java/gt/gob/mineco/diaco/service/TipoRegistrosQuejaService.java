/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package gt.gob.mineco.diaco.service;

import gt.gob.mineco.diaco.model.TipoReg_ActaConciliacion;
import gt.gob.mineco.diaco.model.TipoReg_ActaIncomparecencia;
import gt.gob.mineco.diaco.util.CedulaNotificacionDto;
import javax.ws.rs.core.Response;

/**
 *
 * @author julio
 */
public interface TipoRegistrosQuejaService {
 
    	//public Response getRegistroFichaQueja(Integer idqueja);	
        public Response getRegistroComunicacionPermanente(Integer pIdRegistro,String pToken);
        public Response getCedulaCitacionCons(Integer pId_audiencia,String pToken) ;
        public Response getCedulaCitacionProv(Integer pId_audiencia,String pToken) ;
        public Response getFormularioQueja(Integer idqueja,String pToken);
        public Response getCedulaNotificacionCons(Integer pId_audiencia,String pToken);
        public Response getCedulaNotificacionProv(Integer pId_audiencia,String pToken);
        public Response getFichaQueja(Integer pIdqueja,String pToken);
        public Response getArchivoVisitaCampo(Integer pIdqueja, String pFechaResolucion,String pToken);
        public Response getResArchivoConciliacion(Integer pId_Queja,String pToken);
        public Response getResArchivoUnicaAudiencia(Integer pId_Queja,String pToken);
         public Response getMovimientoExpediente(Integer pId_Queja,String pToken);
         public Response getArchivoVisitaCampoVerifVig(Integer pId, String pToken);
         public Response getCedulaNotificacionResolucionJuridico(CedulaNotificacionDto pCedulaNotificacionDto);
         public Response getCedulaNotificacionCitacionJuridico(Integer pIdAudiencia,String esCP, String pToken);
         public Response getCedulaNotificacionCitacionCorreo(Integer pId, String pToken);
         public Response getCedulaNotificacionResCorreo(Integer pId, String pToken);
         public Response getActaIncomparecenciaAtContr(TipoReg_ActaIncomparecencia vTipoReg_ActaIncomparecencia);
         public Response getActaConciliacioAtContr(TipoReg_ActaConciliacion vTipoReg_ActaConciliacion);
         public Response getCaratulaJuridico(Integer pId_Queja, String pToken) ;
         public Response getCedulaCitacionConsJuridico(Integer pIdAudiencia,String pToken);
         public Response getCedulaCitacionProJuridico(Integer pIdAudiencia,String pToken);
         public Response getAperturaPrueba(Integer pIdResultAudiencia, String pToken);
          public Response getDeclaracionRebeldia(Integer pIdResAudiencia, String pToken);
          public Response getResolucionFinal(Integer pIdResultAudiencia, String pToken) ;


}
