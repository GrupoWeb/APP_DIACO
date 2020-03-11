package gt.gob.mineco.diaco.service;

import javax.ejb.Stateless;
import javax.inject.Inject;

import gt.gob.mineco.diaco.dao.TipoRepository;
import gt.gob.mineco.diaco.model.TipoImagenesQueja;
import gt.gob.mineco.diaco.model.TipoTipoImagen;
import gt.gob.mineco.diaco.model.TipoRepositorio;
import gt.gob.mineco.diaco.util.ResponseRs;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Date;
import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import java.text.SimpleDateFormat;
import java.io.ByteArrayOutputStream;
import java.io.FileInputStream;
import java.util.zip.ZipOutputStream;
import java.util.zip.ZipEntry;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.attribute.FileTime;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.transaction.UserTransaction;
import javax.naming.InitialContext;

@Stateless
@TransactionManagement(TransactionManagementType.BEAN)
public class TipoImagenesQuejaServiceImp implements TipoImagenesQuejaService {

	@Inject
	private TipoRepository tipoDao;
	
	@Override
	public ResponseRs listImagenesQueja(Integer idqueja,Integer idflujo) {
		ResponseRs response = new ResponseRs();
		
		try { 
			response.setCode(0L);
			response.setReason("OK");
                        response.setValue(tipoDao.findAllImagenesQueja(idqueja,idflujo));
		} catch (Exception e) {
			e.printStackTrace();
			response.setCode(1L);
			response.setReason("ERROR");
		}		
		return response;
	}

	@Override
	public ResponseRs getImagenesQueja(Integer id) {
		ResponseRs response = new ResponseRs();
		
		try {
			response.setCode(0L);
			response.setReason("OK");
			response.setValue(tipoDao.findByIdImagenesQueja(id));
		} catch (Exception e) {
			e.printStackTrace();
			response.setCode(1L);
			response.setReason("ERROR");
		}		
		return response;
	}
	
	@Override
	public Response getImagen(Integer id) {		
		try {
                    TipoImagenesQueja vtipoImagenesQueja = tipoDao.findByIdImagenesQueja(id);
                    if(vtipoImagenesQueja != null){
                        TipoRepositorio tipoRepositorio = tipoDao.findByIdRepositorio(vtipoImagenesQueja.getId_repositorio());
                        String idqueja = Integer.toString(vtipoImagenesQueja.getId_queja()).trim();
                        String file=vtipoImagenesQueja.getImagen();
                        String path = tipoRepositorio.getRepositorio()+File.separator+"queja"+File.separator+idqueja+File.separator;
                        File fileDownload = new File(path + File.separator + file);
                        if( fileDownload.exists() ){
                            ResponseBuilder response = Response.ok((Object) fileDownload);
                            response.header("Content-Disposition", "attachment;filename=" + file);
                            return response.build();
                        }else{
                            ResponseBuilder response = Response.noContent();
                            return response.build();                          
                        }
                    }
                    ResponseBuilder response = Response.serverError();
                    return response.build();
		} catch (Exception e) {
			e.printStackTrace();
                        ResponseBuilder response = Response.serverError();
                        return response.build();
		}		
	}

        
        
    /**
     * Adds an extra file to the zip archive, copying in the created
     * date and a comment.
     * @param file file to be archived
     * @param zipStream archive to contain the file.
     */
    private void addToZipFile(Path file, ZipOutputStream zipStream, String name) throws IOException {
        System.out.println(file);
        String inputFileName = file.toFile().getPath();
        FileInputStream inputStream = new FileInputStream(inputFileName);

        //ZipEntry entry = new ZipEntry(file.toFile().getName());
        ZipEntry entry = new ZipEntry(name);
        entry.setCreationTime(FileTime.fromMillis(file.toFile().lastModified()));
        //entry.setComment("Created by TheCodersCorner");
        zipStream.putNextEntry(entry);
        byte[] readBuffer = new byte[2048];
        int amountRead;
        while ((amountRead = inputStream.read(readBuffer)) > 0) {
            zipStream.write(readBuffer, 0, amountRead);
        }
        zipStream.closeEntry();
        
    }
        
	@Override
	public Response getZip(Integer idqueja, Integer idflujo) {		
            String fname=null;
            try {
                    String stridqueja = Integer.toString(idqueja).trim();
                    Integer pos=1;
                    List<TipoImagenesQueja> ImgList=tipoDao.findAllImagenesQueja(idqueja,idflujo);
                    ByteArrayOutputStream baos = new ByteArrayOutputStream();
                    String directory="";
                    String file="";
                    //System.out.println("before list");            
                    if(!ImgList.isEmpty()){
			ZipOutputStream zos = new ZipOutputStream(baos);
                        for (TipoImagenesQueja ThisItem: ImgList) {
                            TipoRepositorio tipoRepositorio = tipoDao.findByIdRepositorio(ThisItem.getId_repositorio());
                            directory = tipoRepositorio.getRepositorio()+File.separator+"queja"+File.separator+stridqueja+File.separator;
                            file= ThisItem.getImagen();
                            Path path = Paths.get(directory + File.separator + file);
                            fname=Integer.toString(pos) + "."+ThisItem.getDescripcion_imagen_otros();
                            //System.out.println("**: "+fname);
                            addToZipFile(path, zos, fname);
                            pos++;
                        }
                        zos.close();
                        //System.out.println(baos.size());
                        ResponseBuilder response = Response.ok(baos.toByteArray());
                        response.header("Content-Disposition", "attachment;filename=" + stridqueja+".zip");
                        return response.build();
                    }else{
                        ResponseBuilder response = Response.noContent();
                        return response.build();
                    }
                } catch (IOException ex) {
			ex.printStackTrace();
                        ResponseBuilder response = Response.serverError();
                        return response.build();
                }catch(Exception e) {
                        e.printStackTrace();
                        ResponseBuilder response = Response.serverError();
                        return response.build();
		} 				
	}
        
        
        @Override
        public ResponseRs saveImagen(InputStream uploadedInputStream, FormDataContentDisposition fileDetail, Integer id_queja, Integer id_tipo_imagen, Integer id_categoria_imagen, Integer id_flujo){
            ResponseRs response = new ResponseRs();
            SimpleDateFormat format = new SimpleDateFormat("yyyyMMdd_HHmmss");
            String dateString = format.format( System.currentTimeMillis() );

                UserTransaction transaction=null;
		try {                        
                        transaction = (UserTransaction)new InitialContext().lookup("java:comp/UserTransaction");
                        transaction.begin();
                        
                        TipoRepositorio tipoRepositorio = tipoDao.findActiveRepo();    
                        String filename=fileDetail.getFileName();
                        String fileext=FileExtension(filename);
                        String newfilename = dateString+fileext;
                        String folderLocation = tipoRepositorio.getRepositorio()+ File.separator+"queja"+ File.separator+id_queja.toString().trim();
                        
                        TipoImagenesQueja newImagenesQueja = new TipoImagenesQueja();
                        newImagenesQueja.setId_queja(id_queja);
                        newImagenesQueja.setId_tipo_imagen(id_tipo_imagen);
                        newImagenesQueja.setHabilitado("A");
                        switch(id_categoria_imagen){
                            case 2:
                                newImagenesQueja.setImagen("Archivo_DPI_"+id_queja.toString()+fileext);
                                break;
                            case 3:
                                newImagenesQueja.setImagen("Archivo_Factura_"+id_queja.toString()+fileext);
                                break;
                            case 4:
                                newImagenesQueja.setImagen("Acta_conciliacion_"+id_queja.toString()+fileext);
                                folderLocation = tipoRepositorio.getRepositorio()+ File.separator+"acta"+ File.separator+id_queja.toString().trim();
                                break;
                            case 5:
                                newImagenesQueja.setImagen("Acta_incomparecencia_"+id_queja.toString()+fileext);
                                folderLocation = tipoRepositorio.getRepositorio()+ File.separator+"acta"+ File.separator+id_queja.toString().trim();
                                break;    
                            default:
                                newImagenesQueja.setImagen(newfilename);
                        }
                        
                        
                                    
                        String fileLocation = folderLocation +File.separator+newfilename;  

                        
                        newImagenesQueja.setDescripcion_imagen_otros(filename);
                        newImagenesQueja.setUsuario_adiciono(1);
                        newImagenesQueja.setFecha_adicion(new Date());
                        newImagenesQueja.setId_categoria_imagen(id_categoria_imagen);
                        newImagenesQueja.setId_flujo(id_flujo);
                        newImagenesQueja.setId_repositorio(tipoRepositorio.getId());
                        TipoTipoImagen vtipoTipoImagen = tipoDao.findByIdTipoImagen(id_tipo_imagen);
                        newImagenesQueja.setTipotipoimagen(vtipoTipoImagen);
                        tipoDao.saveImagenesQueja(newImagenesQueja);
                        response.setCode(0L);
                        response.setReason("OK");
                        response.setValue(newImagenesQueja);
                        
                        try{
                            System.out.println(uploadedInputStream);
                            System.out.println(fileLocation);
                            System.out.println(folderLocation);
                            writeFile(uploadedInputStream,fileLocation,folderLocation);            
                        }
                        catch(IOException ioe){
                            ioe.printStackTrace();
                            response.setCode(1L);
                            response.setReason("ERROR");
                            try{
                                transaction.rollback();
                            }catch(Exception ee){
                                ee.printStackTrace();
                            }
                            return response;
                        }
                        
                        transaction.commit();    
                    
                } catch (Exception e) {
                    e.printStackTrace();
                    response.setCode(1L);
                    response.setReason("ERROR");
                    try{
                        transaction.rollback();
                    }catch(Exception ee){
                        ee.printStackTrace();
                    }
                    
                }  
                return response;  
        }
        
        private String FileExtension(String filename){
            if(filename.length() > 0){
                int pos = filename.lastIndexOf(".");
                if (pos > 0) 
                    return filename.substring(pos);
            }
            return null;
        }
        
        @Override
        public ResponseRs deleteImagen(Integer id){
            String filename;
            String idqueja;
            String fileLocation;  
            boolean result=true;
            ResponseRs response = new ResponseRs();            
                UserTransaction transaction=null;
		try {                        
                    transaction = (UserTransaction)new InitialContext().lookup("java:comp/UserTransaction");
                    transaction.begin();                    
                    TipoImagenesQueja vtipoImagenesQueja = tipoDao.findByIdImagenesQueja(id);
                    if (vtipoImagenesQueja != null){
                        idqueja = vtipoImagenesQueja.getId_queja().toString().trim();
                        filename = vtipoImagenesQueja.getImagen();
                        TipoRepositorio tipoRepositorio = tipoDao.findByIdRepositorio(vtipoImagenesQueja.getId_repositorio());
                        fileLocation = tipoRepositorio.getRepositorio() +File.separator+ idqueja + File.separator + filename;
                        tipoDao.deleteImagenesQueja(vtipoImagenesQueja);   
                        try{
                            result=deleteFile(fileLocation);                                  
                        }catch(IOException ioe){
                            ioe.printStackTrace();
                            response.setCode(0L);
                            response.setReason("OK");
                            response.setValue("Referencia eliminada en base de datos, archivo no encontrado");
                        }
                        
                        response.setCode(0L);
                        response.setReason("OK");
                        if(result)
                            response.setValue("Referencia en base de datos y archivo eliminado.");
                        else
                            response.setValue("Referencia eliminada en base de datos, archivo no encontrado");
                    }else{
                        response.setCode(1L);
                        response.setReason("ERROR");
                        response.setValue("Referencia en base de datos no encontrada");
                    }
                    transaction.commit();
                    return response;
                        
                } catch (Exception e) {
                    e.printStackTrace();
                    response.setCode(1L);
                    response.setReason("ERROR");
                    try{
                        transaction.rollback();
                    }catch(Exception ee){
                        ee.printStackTrace();
                    }
                    return response;
                }  
                  
        }
        
        private void writeFile(InputStream uploadedInputStream, String fileLocation, String folderLocation) throws IOException {
                //revisar si existe el folder, si no crearlo
                File customDir = new File(folderLocation);
                if (!customDir.exists()) {
                        customDir.mkdir();
                }

                FileOutputStream out;// = new FileOutputStream(new File(fileLocation));  
                int read = 0;  
                byte[] bytes = new byte[1024];  
                out = new FileOutputStream(new File(fileLocation));  
                while ((read = uploadedInputStream.read(bytes)) != -1) {  
                    out.write(bytes, 0, read);  
                }  
                out.flush();  
                out.close();  
                
            /*File file = new File(filename);

            if (!file.exists()) {
                file.createNewFile();
            }*/
            
        }

        private boolean deleteFile(String fileLocation) throws IOException {

            File file = new File(fileLocation); 
            if(file.delete()){ 
                return true;
            }else{ 
                return false;
            }             
        }
        
	/** getters and setters **/
	public TipoRepository getTipoArticuloDao() {
		return tipoDao;
	}

	public void setTipoArticuloDao(TipoRepository tipoDao) {
		this.tipoDao = tipoDao;
	}

}
