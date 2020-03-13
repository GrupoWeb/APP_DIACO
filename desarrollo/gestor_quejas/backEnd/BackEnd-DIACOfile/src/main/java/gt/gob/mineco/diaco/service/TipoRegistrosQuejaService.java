/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package gt.gob.mineco.diaco.service;

import javax.ws.rs.core.Response;

/**
 *
 * @author julio
 */
public interface TipoRegistrosQuejaService {
 
    	//public Response getRegistroFichaQueja(Integer idqueja);	
        public Response getRegistroComunicacionPermanente(Integer idqueja,String status,String observaciones,String via);
        public Response getCedulaCitacionCons(Integer idqueja,String fechaCitacion,String horaCitacion);
        public Response getCedulaCitacionProv(Integer idqueja,String fechaCitacion,String horaCitacion) ;
        public Response getFormularioQueja(Integer idqueja);
        public Response getCedulaNotificacionCons(Integer idqueja, String fechaCitacion);
        public Response getCedulaNotificacionProv(Integer idqueja, String fechaCitacion);
        public Response getActaConciliacioAtContr(Integer pIdqueja,String pFecha_conciliacion,String pHora_conciliacion,String pNombre_auxiliar, String pPunto_segundo,String pPunto_tercero,String pPunto_cuarto,String pPunto_cinco ) ;
        public Response getFichaQueja(Integer pIdqueja);
        public Response getArchivoVisitaCampo(Integer pIdqueja, String pFechaResolucion);

}
