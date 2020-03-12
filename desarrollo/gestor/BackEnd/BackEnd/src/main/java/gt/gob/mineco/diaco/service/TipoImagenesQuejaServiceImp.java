package gt.gob.mineco.diaco.service;

import javax.ejb.Stateless;
import javax.inject.Inject;

import gt.gob.mineco.diaco.dao.TipoRepository;
import gt.gob.mineco.diaco.model.TipoImagenesQueja;
import gt.gob.mineco.diaco.model.TipoTipoImagen;
import gt.gob.mineco.diaco.model.TipoRepositorio;
import gt.gob.mineco.diaco.util.ResponseRs;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Date;
import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import java.text.SimpleDateFormat;
import javax.ejb.TransactionManagement;
import javax.transaction.UserTransaction;
import javax.naming.InitialContext;

@Stateless
public class TipoImagenesQuejaServiceImp {

    @Inject
    private TipoRepository tipoDao;

    public ResponseRs saveImagenPub(InputStream uploadedInputStream, FormDataContentDisposition fileDetail, Integer id_queja, Integer id_tipo_imagen, Integer id_categoria_imagen, Integer id_flujo) {
        ResponseRs response = new ResponseRs();
        SimpleDateFormat format = new SimpleDateFormat("yyyyMMdd_HHmmss");
        String dateString = format.format(System.currentTimeMillis());

        UserTransaction transaction = null;
        try {
            //tipoDao.TokenCheck(token);
            //transaction = (UserTransaction) new InitialContext().lookup("java:comp/UserTransaction");
            //transaction.begin();

            TipoRepositorio tipoRepositorio = tipoDao.findActiveRepo("queja");
            String filename = fileDetail.getFileName();
            String fileext = FileExtension(filename);
            String newfilename = dateString + fileext;
            String folderLocation = tipoRepositorio.getRepositorio() + id_queja.toString().trim();
            System.out.println("file " + filename);
            try {
                TipoTipoImagen tipoi = this.findTipoImagen(fileext.replace(".", "").trim());
                if (tipoi != null) {
                    id_tipo_imagen = tipoi.getId_tipo_imagen();
                }
            } catch (Exception e) {

            }
            //busca si hay ya un dpi
			/*
            try {
                TipoImagenesQueja tipoImagen = tipoDao.findbyTipoI(id_queja);
                if (tipoImagen != null) {
                    if (tipoImagen.getId_categoria_imagen() == 2) {
                        id_categoria_imagen = 3;
                    } else {
						if (tipoImagen.getId_categoria_imagen() == 3) {
							id_categoria_imagen = 2;
						} else {
							id_categoria_imagen = 3;
						}
                    }
                }
            } catch (Exception e) {

            }
			*/
            TipoImagenesQueja newImagenesQueja;

            if (id_categoria_imagen != 1) {
                newImagenesQueja = tipoDao.findbyCatImagen(id_queja, id_categoria_imagen);
                if (newImagenesQueja != null) {
                    deleteImagen_NoT(newImagenesQueja.getId_imagen_queja());
                }
            }
            newImagenesQueja = new TipoImagenesQueja();

            switch (id_categoria_imagen) {
                case 2:
                    newfilename = "Archivo_DPI_" + id_queja.toString() + fileext;
                    newImagenesQueja.setImagen(newfilename);
                    newImagenesQueja.setDescripcion_imagen_otros(newfilename);
                    break;
                case 3:
                    newfilename = "Archivo_Factura_" + id_queja.toString() + fileext;
                    newImagenesQueja.setImagen(newfilename);
                    newImagenesQueja.setDescripcion_imagen_otros(newfilename);
                    break;
                default:
                    newImagenesQueja.setImagen(newfilename);
                    newImagenesQueja.setDescripcion_imagen_otros(filename);
            }
            newImagenesQueja.setId_queja(id_queja);
            newImagenesQueja.setId_tipo_imagen(id_tipo_imagen);
            newImagenesQueja.setHabilitado("A");

            String fileLocation = folderLocation + File.separator + newfilename;

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

            try {
                System.out.println(uploadedInputStream);
                System.out.println(fileLocation);
                System.out.println(folderLocation);
                writeFile(uploadedInputStream, fileLocation, folderLocation);
            } catch (Exception ioe) {
                ioe.printStackTrace();
                response.setCode(1L);
                response.setReason("ERROR");
                try {
                    //transaction.rollback();
                } catch (Exception ee) {
                    ee.printStackTrace();
                }
                return response;
            }

            //transaction.commit();
        } catch (Exception e) {
            e.printStackTrace();
            response.setCode(1L);
            response.setReason("ERROR");
            try {
                //transaction.rollback();
            } catch (Exception ee) {
                ee.printStackTrace();
            }

        }
        return response;
    }

    private String FileExtension(String filename) {
        if (filename.length() > 0) {
            int pos = filename.lastIndexOf(".");
            if (pos > 0) {
                return filename.substring(pos);
            }
        }
        return null;
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
        //System.out.println("Archivo subido en: " + out.getAbsolutePath());
        /*File file = new File(filename);

            if (!file.exists()) {
                file.createNewFile();
            }*/
    }

    private ResponseRs deleteImagen_NoT(Integer id) throws Exception {
        String filename;
        String idqueja;
        String fileLocation;
        boolean result = true;
        ResponseRs response = new ResponseRs();
        TipoImagenesQueja vtipoImagenesQueja = tipoDao.findByIdImagenesQueja(id);
        if (vtipoImagenesQueja != null) {
            idqueja = vtipoImagenesQueja.getId_queja().toString().trim();
            filename = vtipoImagenesQueja.getImagen();
            TipoRepositorio tipoRepositorio = tipoDao.findByIdRepositorio(vtipoImagenesQueja.getId_repositorio());
            fileLocation = tipoRepositorio.getRepositorio() + filename;
            tipoDao.deleteImagenesQueja(vtipoImagenesQueja);
            try {
                result = deleteFile(fileLocation);
            } catch (Exception ioe) {
                ioe.printStackTrace();
                response.setCode(0L);
                response.setReason("OK");
                response.setValue("Referencia eliminada en base de datos, archivo no encontrado");
            }
            response.setCode(0L);
            response.setReason("OK");
            if (result) {
                response.setValue("Referencia en base de datos y archivo eliminado.");
            } else {
                response.setValue("Referencia eliminada en base de datos, archivo no encontrado");
            }
        } else {
            response.setCode(1L);
            response.setReason("ERROR");
            response.setValue("Referencia en base de datos no encontrada");
        }
        return response;
    }

    private boolean deleteFile(String fileLocation) throws IOException {

        File file = new File(fileLocation);
        if (file.delete()) {
            return true;
        } else {
            return false;
        }
    }

    public TipoTipoImagen findTipoImagen(String tipo) {
        return this.tipoDao.findTipoImagen(tipo);
    }

}
