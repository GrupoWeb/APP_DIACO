package gt.gob.mineco.diaco.service;

import gt.gob.mineco.diaco.model.TipoImagenesQueja;
import gt.gob.mineco.diaco.util.FormImagenSubmit;
import gt.gob.mineco.diaco.util.ResponseRs;
import java.io.InputStream;
import javax.ws.rs.core.Response;
import org.glassfish.jersey.media.multipart.FormDataContentDisposition;

public interface TipoImagenesQuejaService {
	
	public ResponseRs listImagenesQueja(Integer idqueja,Integer idflujo);
	public ResponseRs getImagenesQueja(Integer id);
	public Response getImagen(Integer id);
        public Response getZip(Integer idqueja, Integer idflujo);
        public ResponseRs saveImagen(InputStream uploadedInputStream, FormDataContentDisposition fileDetail, Integer id_queja, Integer id_tipo_imagen,Integer id_categoria_imagen, Integer id_flujo);
        public ResponseRs deleteImagen(Integer id);
	/*public ResponseRs updateImagenesQueja(Integer id);
	public ResponseRs deleteImagenesQueja(Integer id);*/
}
