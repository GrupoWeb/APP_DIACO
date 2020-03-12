package gt.gob.mineco.diaco.rs;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.DELETE;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.MultivaluedMap;

import gt.gob.mineco.diaco.service.TipoImagenesQuejaService;
import gt.gob.mineco.diaco.util.ResponseRs;
import org.glassfish.jersey.media.multipart.FormDataContentDisposition;  
import org.glassfish.jersey.media.multipart.FormDataParam; 
import gt.gob.mineco.diaco.util.FormImagenSubmit;
import java.io.InputStream;

@Path("/tipos-imgqueja")
@RequestScoped
public class TipoImagenesQuejaRs {

	@Inject
	private TipoImagenesQuejaService tipoImgQuejaService;
	
	@GET
	@Path("/{idqueja}/{idflujo}")
        @Produces(MediaType.APPLICATION_JSON)
	public ResponseRs getImagenesQuejas(@PathParam("idqueja") Integer idqueja, @PathParam("idflujo") Integer idflujo){
		return tipoImgQuejaService.listImagenesQueja(idqueja,idflujo);
	}
	
	@GET
	@Path("/single/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public ResponseRs getImagenesQueja(@PathParam("id") Integer id) {
            try{
                return tipoImgQuejaService.getImagenesQueja(id);
            }catch(Exception e){
                System.out.println("dude");
            }
            return null;
        }
        
        @GET
	@Path("/image/{id}")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public Response getImagenQueja(@PathParam("id") Integer id) {
		return tipoImgQuejaService.getImagen(id);
	}
        
        @GET
	@Path("/zip/{idqueja}/{idflujo}")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public Response getZipQueja(@PathParam("idqueja") Integer idqueja, @PathParam("idflujo") Integer idflujo) {
		return tipoImgQuejaService.getZip(idqueja, idflujo);
	}
        
        @POST
        @Consumes(MediaType.MULTIPART_FORM_DATA)
        @Produces(MediaType.APPLICATION_JSON)
         public ResponseRs uploadFile(  
            @FormDataParam("attachment") InputStream uploadedInputStream, @FormDataParam("attachment") FormDataContentDisposition fileDetail,
            @FormDataParam("id_queja") String id_queja, @FormDataParam("id_tipo_imagen") String id_tipo_imagen, 
            @FormDataParam("id_categoria_imagen") String id_categoria_imagen, @FormDataParam("id_flujo") String id_flujo) { 
                return tipoImgQuejaService.saveImagen(uploadedInputStream,fileDetail,Integer.parseInt(id_queja),Integer.parseInt(id_tipo_imagen),Integer.parseInt(id_categoria_imagen),Integer.parseInt(id_flujo));                
         }  
          
	@DELETE
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public ResponseRs deleteImagenesQueja(@PathParam("id") Integer id) {
		return tipoImgQuejaService.deleteImagen(id);
	}
        
}
