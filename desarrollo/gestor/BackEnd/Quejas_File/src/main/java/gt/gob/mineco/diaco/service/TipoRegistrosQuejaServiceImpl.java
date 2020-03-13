/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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

import com.sun.star.beans.PropertyValue;
import com.sun.star.comp.helper.Bootstrap;
import com.sun.star.frame.XComponentLoader;
import com.sun.star.frame.XDesktop;
import com.sun.star.frame.XStorable;
import com.sun.star.lang.XComponent;
import com.sun.star.lang.XMultiComponentFactory;
import com.sun.star.text.XTextDocument;
import com.sun.star.uno.UnoRuntime;
import com.sun.star.uno.XComponentContext;
import com.sun.star.util.XCloseable;
import com.sun.star.util.XReplaceDescriptor;
import com.sun.star.util.XReplaceable;
import gt.gob.mineco.diaco.model.TipoReg_ComunicacionPermanente;
import gt.gob.mineco.diaco.model.TipoReg_FichaQueja;
import gt.gob.mineco.diaco.model.TipoReg_FormularioQueja;
import gt.gob.mineco.diaco.model.TipoReg_ResolucionVisitaCampo;
import gt.gob.mineco.diaco.util.NumerosEnLetras;
import gt.gob.mineco.diaco.util.OOoOutputStream;
import java.io.ByteArrayInputStream;
import java.text.Format;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Locale;
import ooo.connector.BootstrapSocketConnector;

/**
 *
 * @author julio
 */
@Stateless
@TransactionManagement(TransactionManagementType.BEAN)
public class TipoRegistrosQuejaServiceImpl implements TipoRegistrosQuejaService {

    @Inject
    private TipoRepository tipoDao;

    /*DIACO-AQ-FO-02*/
    @Override
    public Response getFormularioQueja(Integer idqueja) {
        try {
            TipoReg_FormularioQueja formQueja = tipoDao.findByIdFormularioQueja(idqueja);

            // Initialise
            String oooExeFolder = "/opt/libreoffice6.1/program";
            XComponentContext xContext = BootstrapSocketConnector.bootstrap(oooExeFolder);
            //XComponentContext xContext = Bootstrap.bootstrap();
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd-MM-yyyy");

            XMultiComponentFactory xMCF = xContext.getServiceManager();

            Object oDesktop = xMCF.createInstanceWithContext(
                    "com.sun.star.frame.Desktop", xContext);

            XDesktop xDesktop = (XDesktop) UnoRuntime.queryInterface(
                    XDesktop.class, oDesktop);

            // Load the Document
            String workingDir = "/home/julio/Documents/Mineco/proyPrototipo/diacoRegistros/";
            String myTemplate = workingDir + "FormularioQueja.docx";

            if (!new File(myTemplate).canRead()) {
                throw new RuntimeException("Cannot load template:" + new File(myTemplate));
            }

            XComponentLoader xCompLoader = (XComponentLoader) UnoRuntime
                    .queryInterface(com.sun.star.frame.XComponentLoader.class, xDesktop);

            String sUrl = "file:///" + myTemplate;

            PropertyValue[] propertyValues = new PropertyValue[0];

            propertyValues = new PropertyValue[1];
            propertyValues[0] = new PropertyValue();
            propertyValues[0].Name = "Hidden";
            propertyValues[0].Value = new Boolean(true);

            XComponent xComp = xCompLoader.loadComponentFromURL(
                    sUrl, "_blank", 0, propertyValues);

            // Manipulate
            XReplaceDescriptor xReplaceDescr = null;
            XReplaceable xReplaceable = null;

            XTextDocument xTextDocument = (XTextDocument) UnoRuntime
                    .queryInterface(XTextDocument.class, xComp);

            xReplaceable = (XReplaceable) UnoRuntime
                    .queryInterface(XReplaceable.class,
                            xTextDocument);

            xReplaceDescr = (XReplaceDescriptor) xReplaceable
                    .createReplaceDescriptor();

            xReplaceDescr.setSearchString("<num_queja>");
            xReplaceDescr.setReplaceString(formQueja.getId_queja().toString());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<via_ingreso>");
            xReplaceDescr.setReplaceString(formQueja.getVia_ingreso());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<nombre_cons>");
            xReplaceDescr.setReplaceString(formQueja.getCon_nombre());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<fecha_queja>");
            xReplaceDescr.setReplaceString(simpleDateFormat.format(formQueja.getFecha_creacion()));
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<identificacion_cons>");
            xReplaceDescr.setReplaceString(formQueja.getCon_identificacion());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<nombre_prov>");
            xReplaceDescr.setReplaceString(formQueja.getProv_nombre());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<tel_cons>");
            xReplaceDescr.setReplaceString(formQueja.getCon_telefono());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<nit_prov>");
            xReplaceDescr.setReplaceString(formQueja.getProv_nit());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<email_cons>");
            xReplaceDescr.setReplaceString(formQueja.getCon_email());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<tel_prov>");
            xReplaceDescr.setReplaceString(formQueja.getProv_telefono());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<dir_cons>");
            xReplaceDescr.setReplaceString(formQueja.getCon_direccion());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<fecha_compra>");
            xReplaceDescr.setReplaceString(simpleDateFormat.format(formQueja.getFecha_creacion()));
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<depto_cons>");
            xReplaceDescr.setReplaceString(formQueja.getCon_dpto());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<dir_prov>");
            xReplaceDescr.setReplaceString(formQueja.getProv_direccion());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<zona_cons>");
            xReplaceDescr.setReplaceString(formQueja.getCon_zona());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<depto_prov>");
            xReplaceDescr.setReplaceString(formQueja.getProv_departamento());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<municipio_cons>");
            xReplaceDescr.setReplaceString(formQueja.getCon_municipio());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<zona_prov>");
            xReplaceDescr.setReplaceString(formQueja.getProv_zona());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<municipio_prov>");
            xReplaceDescr.setReplaceString(formQueja.getProv_municipio());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<detalle_queja>");
            xReplaceDescr.setReplaceString(formQueja.getQueja());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<posible_solucion>");
            xReplaceDescr.setReplaceString(formQueja.getSolucion());
            xReplaceable.replaceAll(xReplaceDescr);

            OOoOutputStream output = new OOoOutputStream();

            // save as a PDF 
            XStorable xStorable = (XStorable) UnoRuntime
                    .queryInterface(XStorable.class, xComp);

            propertyValues = new PropertyValue[2];
            // Setting the flag for overwriting
            propertyValues[0] = new PropertyValue();
            propertyValues[1] = new PropertyValue();

            propertyValues[0].Name = "OutputStream";
            propertyValues[0].Value = output;
            // Setting the filter name

            propertyValues[1].Name = "FilterName";
            propertyValues[1].Value = "writer_pdf_Export";

            // Appending the favoured extension to the origin document name
            //String myResult = workingDir + "queja.pdf";
            xStorable.storeToURL("private:stream", propertyValues);

            // shutdown
            //xDesktop.terminate();
            XCloseable xcloseable = (XCloseable) UnoRuntime.queryInterface(XCloseable.class, xComp);
            xcloseable.close(false);

            ByteArrayInputStream inStream = new ByteArrayInputStream(output.toByteArray());

            ResponseBuilder response = Response.ok((Object) inStream);
            response.header("Content-Disposition", "attachment;filename=queja.pdf");
            return response.build();

        } catch (Exception e) {
            e.printStackTrace();
            ResponseBuilder response = Response.serverError();
            return response.build();
        }
    }

    @Override
    public Response getRegistroComunicacionPermanente(Integer idqueja, String status, String observaciones, String via) {
        try {
            //TipoReg_FormularioQueja formQueja = tipoDao.findByIdFormularioQueja(idqueja);
            TipoReg_ComunicacionPermanente regComPerm = tipoDao.findByIdComunicacionPermanente(idqueja);

            // Initialise
            String oooExeFolder = "C:/Program Files/LibreOffice/program";
            XComponentContext xContext = BootstrapSocketConnector.bootstrap(oooExeFolder);
            //XComponentContext xContext = Bootstrap.bootstrap();
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd-MM-yyyy");

            XMultiComponentFactory xMCF = xContext.getServiceManager();

            Object oDesktop = xMCF.createInstanceWithContext(
                    "com.sun.star.frame.Desktop", xContext);

            XDesktop xDesktop = (XDesktop) UnoRuntime.queryInterface(
                    XDesktop.class, oDesktop);

            // Load the Document
            String workingDir = "C:/javainstalls/FILESERVER/diacoRegistros/";
            String myTemplate = workingDir + "ComPermanente.docx";

            if (!new File(myTemplate).canRead()) {
                throw new RuntimeException("Cannot load template:" + new File(myTemplate));
            }

            XComponentLoader xCompLoader = (XComponentLoader) UnoRuntime
                    .queryInterface(com.sun.star.frame.XComponentLoader.class, xDesktop);

            String sUrl = "file:///" + myTemplate;

            PropertyValue[] propertyValues = new PropertyValue[0];

            propertyValues = new PropertyValue[1];
            propertyValues[0] = new PropertyValue();
            propertyValues[0].Name = "Hidden";
            propertyValues[0].Value = new Boolean(true);

            XComponent xComp = xCompLoader.loadComponentFromURL(
                    sUrl, "_blank", 0, propertyValues);
//xComp.dispose();

            // Manipulate
            XReplaceDescriptor xReplaceDescr = null;
            XReplaceable xReplaceable = null;

            XTextDocument xTextDocument = (XTextDocument) UnoRuntime
                    .queryInterface(XTextDocument.class, xComp);
            //xTextDocument.dispose();

            xReplaceable = (XReplaceable) UnoRuntime
                    .queryInterface(XReplaceable.class,
                            xTextDocument);

            xReplaceDescr = (XReplaceDescriptor) xReplaceable
                    .createReplaceDescriptor();

            xReplaceDescr.setSearchString("<fecha_presentacion>");
            xReplaceDescr.setReplaceString(simpleDateFormat.format(regComPerm.getFechaPresentacion()));
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<id_queja>");
            xReplaceDescr.setReplaceString(String.valueOf(regComPerm.getQuejanumero()+"-"+regComPerm.getAnioQueja()));
            xReplaceable.replaceAll(xReplaceDescr);

            // mail merge the signatory
            xReplaceDescr.setSearchString("<fecha_asignacion>");
            xReplaceDescr.setReplaceString(simpleDateFormat.format(regComPerm.getFechaCreacion()));

            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<asignado_a>");
            xReplaceDescr.setReplaceString(regComPerm.getResponsable());
            xReplaceable.replaceAll(xReplaceDescr);

            if (regComPerm.getViaComunicacion().equals("Teléfono")) {
                xReplaceDescr.setSearchString("<tel_x>");
                xReplaceDescr.setReplaceString("x");
                xReplaceable.replaceAll(xReplaceDescr);

                xReplaceDescr.setSearchString("<email_x>");
                xReplaceDescr.setReplaceString("");
                xReplaceable.replaceAll(xReplaceDescr);
            } else {
                xReplaceDescr.setSearchString("<tel_x>");
                xReplaceDescr.setReplaceString("");
                xReplaceable.replaceAll(xReplaceDescr);

                xReplaceDescr.setSearchString("<email_x>");
                xReplaceDescr.setReplaceString("x");
                xReplaceable.replaceAll(xReplaceDescr);
            }

            xReplaceDescr.setSearchString("<nombre_consumidor>");
            xReplaceDescr.setReplaceString(regComPerm.getConNombre());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<telefono>");
            xReplaceDescr.setReplaceString(regComPerm.getConTelefono());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<email>");
            xReplaceDescr.setReplaceString(regComPerm.getConEmail());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<estatus>");
            xReplaceDescr.setReplaceString(regComPerm.getEstatus());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<fecha_notificacion>");
            xReplaceDescr.setReplaceString(simpleDateFormat.format(regComPerm.getFechaNotificacion()));
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<observaciones>");
            xReplaceDescr.setReplaceString(regComPerm.getObservaciones());
            xReplaceable.replaceAll(xReplaceDescr);

            OOoOutputStream output = new OOoOutputStream();

            // save as a PDF 
            XStorable xStorable = (XStorable) UnoRuntime
                    .queryInterface(XStorable.class, xComp);

            propertyValues = new PropertyValue[2];
            // Setting the flag for overwriting
            propertyValues[0] = new PropertyValue();
            propertyValues[1] = new PropertyValue();

            propertyValues[0].Name = "OutputStream";
            propertyValues[0].Value = output;
            // Setting the filter name

            propertyValues[1].Name = "FilterName";
            propertyValues[1].Value = "writer_pdf_Export";

            // Appending the favoured extension to the origin document name
            //String myResult = workingDir + "queja.pdf";
            xStorable.storeToURL("private:stream", propertyValues);

            // shutdown
            //xDesktop.terminate();
            // close document
            XCloseable xcloseable = (XCloseable) UnoRuntime.queryInterface(XCloseable.class, xComp);
            xcloseable.close(false);
            ByteArrayInputStream inStream = new ByteArrayInputStream(output.toByteArray());

            ResponseBuilder response = Response.ok((Object) inStream);
            response.header("Content-Disposition", "attachment;filename=ComPerm" + regComPerm.getIdQueja() + ".pdf");
            return response.build();

        } catch (Exception e) {
            e.printStackTrace();
            ResponseBuilder response = Response.serverError();
            return response.build();
        }
    }

    @Override
    public Response getCedulaCitacionCons(Integer idqueja, String fechaCitacion, String horaCitacion) {
        try {
            TipoReg_FormularioQueja formQueja = tipoDao.findByIdFormularioQueja(idqueja);

            // Initialise
            String oooExeFolder = "/opt/libreoffice6.1/program";
            XComponentContext xContext = BootstrapSocketConnector.bootstrap(oooExeFolder);
            Locale.setDefault(new Locale("es", "GT", "UNIX"));
            LocalDate ld = LocalDate.now();

            LocalDate dateCitacion = LocalDate.parse(fechaCitacion);

            XMultiComponentFactory xMCF = xContext.getServiceManager();

            Object oDesktop = xMCF.createInstanceWithContext(
                    "com.sun.star.frame.Desktop", xContext);

            XDesktop xDesktop = (XDesktop) UnoRuntime.queryInterface(
                    XDesktop.class, oDesktop);

            // Load the Document
            String workingDir = "/home/julio/Documents/Mineco/proyPrototipo/diacoRegistros/";
            String myTemplate = workingDir + "Cedula_Citacion_Cons.docx";

            if (!new File(myTemplate).canRead()) {
                throw new RuntimeException("Cannot load template:" + new File(myTemplate));
            }

            XComponentLoader xCompLoader = (XComponentLoader) UnoRuntime
                    .queryInterface(com.sun.star.frame.XComponentLoader.class, xDesktop);

            String sUrl = "file:///" + myTemplate;

            PropertyValue[] propertyValues = new PropertyValue[0];

            propertyValues = new PropertyValue[1];
            propertyValues[0] = new PropertyValue();
            propertyValues[0].Name = "Hidden";
            propertyValues[0].Value = new Boolean(true);

            XComponent xComp = xCompLoader.loadComponentFromURL(
                    sUrl, "_blank", 0, propertyValues);

            // Manipulate
            XReplaceDescriptor xReplaceDescr = null;
            XReplaceable xReplaceable = null;

            XTextDocument xTextDocument = (XTextDocument) UnoRuntime
                    .queryInterface(XTextDocument.class, xComp);

            xReplaceable = (XReplaceable) UnoRuntime
                    .queryInterface(XReplaceable.class,
                            xTextDocument);

            xReplaceDescr = (XReplaceDescriptor) xReplaceable
                    .createReplaceDescriptor();

            // mail merge the date
            xReplaceDescr.setSearchString("<fecha_creacion_citacion>");
            xReplaceDescr.setReplaceString(ld.format(DateTimeFormatter.ofPattern("dd 'de' MMMM 'de' yyyy")));
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<fecha_citacion>");
            xReplaceDescr.setReplaceString(dateCitacion.format(DateTimeFormatter.ofPattern("dd 'de' MMMM 'de' yyyy")));
            xReplaceable.replaceAll(xReplaceDescr);

            // mail merge the addressee
            xReplaceDescr.setSearchString("<queja_num>");
            xReplaceDescr.setReplaceString(formQueja.getId_queja().toString());
            xReplaceable.replaceAll(xReplaceDescr);

            // mail merge the signatory
            xReplaceDescr.setSearchString("<nombre_consumidor>");
            xReplaceDescr.setReplaceString(formQueja.getCon_nombre());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<tel_consumidor>");
            xReplaceDescr.setReplaceString(formQueja.getCon_telefono());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<cita_hora>");
            xReplaceDescr.setReplaceString(horaCitacion);
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<nombre_proveedor>");
            xReplaceDescr.setReplaceString(formQueja.getProv_nombre());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<motivo_queja>");
            xReplaceDescr.setReplaceString(formQueja.getQueja());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<direccion_consumidor>");
            xReplaceDescr.setReplaceString(formQueja.getCon_direccion());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<posible_solucion>");
            xReplaceDescr.setReplaceString(formQueja.getSolucion());
            xReplaceable.replaceAll(xReplaceDescr);

            OOoOutputStream output = new OOoOutputStream();

            // save as a PDF 
            XStorable xStorable = (XStorable) UnoRuntime
                    .queryInterface(XStorable.class, xComp);

            propertyValues = new PropertyValue[2];
            // Setting the flag for overwriting
            propertyValues[0] = new PropertyValue();
            propertyValues[1] = new PropertyValue();

            propertyValues[0].Name = "OutputStream";
            propertyValues[0].Value = output;
            // Setting the filter name

            propertyValues[1].Name = "FilterName";
            propertyValues[1].Value = "writer_pdf_Export";

            // Appending the favoured extension to the origin document name
            //String myResult = workingDir + "queja.pdf";
            xStorable.storeToURL("private:stream", propertyValues);

            // shutdown
            //xDesktop.terminate();
            XCloseable xcloseable = (XCloseable) UnoRuntime.queryInterface(XCloseable.class, xComp);
            xcloseable.close(false);
            ByteArrayInputStream inStream = new ByteArrayInputStream(output.toByteArray());

            ResponseBuilder response = Response.ok((Object) inStream);
            response.header("Content-Disposition", "attachment;filename=ComPerm" + formQueja.getId_queja() + ".pdf");
            return response.build();

        } catch (Exception e) {
            e.printStackTrace();
            ResponseBuilder response = Response.serverError();
            return response.build();
        }
    }

    @Override
    public Response getActaConciliacioAtContr(Integer pIdqueja, String pFecha_conciliacion, String pHora_conciliacion, String pNombre_auxiliar, String pPunto_segundo, String pPunto_tercero, String pPunto_cuarto, String pPunto_cinco) {
        try {
            TipoReg_FormularioQueja formQueja = tipoDao.findByIdFormularioQueja(pIdqueja);

            // Initialise
            String oooExeFolder = "/opt/libreoffice6.1/program";
            XComponentContext xContext = BootstrapSocketConnector.bootstrap(oooExeFolder);
            Locale.setDefault(new Locale("es", "GT", "UNIX"));
            LocalDate ld = LocalDate.now();

            LocalDate dateConciliacion = LocalDate.parse(pFecha_conciliacion);
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd-MM-yyyy");

            XMultiComponentFactory xMCF = xContext.getServiceManager();

            Object oDesktop = xMCF.createInstanceWithContext(
                    "com.sun.star.frame.Desktop", xContext);

            XDesktop xDesktop = (XDesktop) UnoRuntime.queryInterface(
                    XDesktop.class, oDesktop);

            // Load the Document
            String workingDir = "/home/julio/Documents/Mineco/proyPrototipo/diacoRegistros/";
            String myTemplate = workingDir + "Acta_Conciliacion_At_Contri.docx";

            if (!new File(myTemplate).canRead()) {
                throw new RuntimeException("Cannot load template:" + new File(myTemplate));
            }

            XComponentLoader xCompLoader = (XComponentLoader) UnoRuntime
                    .queryInterface(com.sun.star.frame.XComponentLoader.class, xDesktop);

            String sUrl = "file:///" + myTemplate;

            PropertyValue[] propertyValues = new PropertyValue[0];

            propertyValues = new PropertyValue[1];
            propertyValues[0] = new PropertyValue();
            propertyValues[0].Name = "Hidden";
            propertyValues[0].Value = new Boolean(true);

            XComponent xComp = xCompLoader.loadComponentFromURL(
                    sUrl, "_blank", 0, propertyValues);

            // Manipulate
            XReplaceDescriptor xReplaceDescr = null;
            XReplaceable xReplaceable = null;

            XTextDocument xTextDocument = (XTextDocument) UnoRuntime
                    .queryInterface(XTextDocument.class, xComp);

            xReplaceable = (XReplaceable) UnoRuntime
                    .queryInterface(XReplaceable.class,
                            xTextDocument);

            xReplaceDescr = (XReplaceDescriptor) xReplaceable
                    .createReplaceDescriptor();

            // mail merge the date
            xReplaceDescr.setSearchString("<fecha_conciliacion>");
            xReplaceDescr.setReplaceString(ld.format(DateTimeFormatter.ofPattern("dd 'de' MMMM 'de' yyyy")));
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<hora_conciliacion>");
            xReplaceDescr.setReplaceString(pHora_conciliacion);
            xReplaceable.replaceAll(xReplaceDescr);

            // mail merge the addressee
            xReplaceDescr.setSearchString("<nombre_consumidor>");
            xReplaceDescr.setReplaceString(formQueja.getCon_nombre());
            xReplaceable.replaceAll(xReplaceDescr);

            // mail merge the signatory
            xReplaceDescr.setSearchString("<identificacion_consumidor>");
            xReplaceDescr.setReplaceString(formQueja.getCon_identificacion());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<abogado_consumidor>");
            xReplaceDescr.setReplaceString("Luis Pereira Martinez");
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<colegiado_abogado>");
            xReplaceDescr.setReplaceString("8784");
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<nombre_proveedor>");
            xReplaceDescr.setReplaceString(formQueja.getProv_nombre());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<identificacion_proveedor>");
            xReplaceDescr.setReplaceString(formQueja.getProv_nit());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<nombre_entidad_proveedor>");
            xReplaceDescr.setReplaceString(formQueja.getProv_nombre());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<notario_proveedor>");
            xReplaceDescr.setReplaceString("Jorge Martinez Santiesteban");
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<fecha_acta_nombramiento_proveedor>");
            xReplaceDescr.setReplaceString("05 de Mayo de 2015");
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<num_registro_acta_mercantil>");
            xReplaceDescr.setReplaceString("123456");
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<folio_registro_acta_mercantil>");
            xReplaceDescr.setReplaceString("555888");
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<auxiliares_comercio>");
            xReplaceDescr.setReplaceString("88997");
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<nombre_auxiliar>");
            xReplaceDescr.setReplaceString(pNombre_auxiliar);
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<num_queja>");
            xReplaceDescr.setReplaceString(formQueja.getId_queja().toString());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<fecha_queja>");
            xReplaceDescr.setReplaceString(simpleDateFormat.format(formQueja.getFecha_creacion()));
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<motivo_queja>");
            xReplaceDescr.setReplaceString(formQueja.getQueja());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<punto_segundo>");
            xReplaceDescr.setReplaceString(pPunto_segundo);
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<punto_tercero>");
            xReplaceDescr.setReplaceString(pPunto_tercero);
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<punto_cuarto>");
            xReplaceDescr.setReplaceString(pPunto_tercero);
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<punto_quinto>");
            xReplaceDescr.setReplaceString(pPunto_cinco);
            xReplaceable.replaceAll(xReplaceDescr);

            OOoOutputStream output = new OOoOutputStream();

            // save as a PDF 
            XStorable xStorable = (XStorable) UnoRuntime
                    .queryInterface(XStorable.class, xComp);

            propertyValues = new PropertyValue[2];
            // Setting the flag for overwriting
            propertyValues[0] = new PropertyValue();
            propertyValues[1] = new PropertyValue();

            propertyValues[0].Name = "OutputStream";
            propertyValues[0].Value = output;
            // Setting the filter name

            propertyValues[1].Name = "FilterName";
            propertyValues[1].Value = "writer_pdf_Export";

            // Appending the favoured extension to the origin document name
            //String myResult = workingDir + "queja.pdf";
            xStorable.storeToURL("private:stream", propertyValues);

            // shutdown
            //xDesktop.terminate();
            XCloseable xcloseable = (XCloseable) UnoRuntime.queryInterface(XCloseable.class, xComp);
            xcloseable.close(false);
            ByteArrayInputStream inStream = new ByteArrayInputStream(output.toByteArray());

            ResponseBuilder response = Response.ok((Object) inStream);
            response.header("Content-Disposition", "attachment;filename=ComPerm" + formQueja.getId_queja() + ".pdf");
            return response.build();

        } catch (Exception e) {
            e.printStackTrace();
            ResponseBuilder response = Response.serverError();
            return response.build();
        }
    }

    @Override
    public Response getCedulaCitacionProv(Integer idqueja, String fechaCitacion, String horaCitacion) {
        try {
            TipoReg_FormularioQueja formQueja = tipoDao.findByIdFormularioQueja(idqueja);

            // Initialise
            String oooExeFolder = "/opt/libreoffice6.1/program";
            XComponentContext xContext = BootstrapSocketConnector.bootstrap(oooExeFolder);
            //XComponentContext xContext = Bootstrap.bootstrap();
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd-MM-yyyy");

            Locale.setDefault(new Locale("es", "GT", "UNIX"));
            LocalDate ld = LocalDate.now();
            LocalDate dateCitacion = LocalDate.parse(fechaCitacion);

            XMultiComponentFactory xMCF = xContext.getServiceManager();

            Object oDesktop = xMCF.createInstanceWithContext(
                    "com.sun.star.frame.Desktop", xContext);

            XDesktop xDesktop = (XDesktop) UnoRuntime.queryInterface(
                    XDesktop.class, oDesktop);

            // Load the Document
            String workingDir = "/home/julio/Documents/Mineco/proyPrototipo/diacoRegistros/";
            String myTemplate = workingDir + "Cedula_Citacion_Prov.docx";

            if (!new File(myTemplate).canRead()) {
                throw new RuntimeException("Cannot load template:" + new File(myTemplate));
            }

            XComponentLoader xCompLoader = (XComponentLoader) UnoRuntime
                    .queryInterface(com.sun.star.frame.XComponentLoader.class, xDesktop);

            String sUrl = "file:///" + myTemplate;

            PropertyValue[] propertyValues = new PropertyValue[0];

            propertyValues = new PropertyValue[1];
            propertyValues[0] = new PropertyValue();
            propertyValues[0].Name = "Hidden";
            propertyValues[0].Value = new Boolean(true);

            XComponent xComp = xCompLoader.loadComponentFromURL(
                    sUrl, "_blank", 0, propertyValues);

            // Manipulate
            XReplaceDescriptor xReplaceDescr = null;
            XReplaceable xReplaceable = null;

            XTextDocument xTextDocument = (XTextDocument) UnoRuntime
                    .queryInterface(XTextDocument.class, xComp);

            xReplaceable = (XReplaceable) UnoRuntime
                    .queryInterface(XReplaceable.class,
                            xTextDocument);

            xReplaceDescr = (XReplaceDescriptor) xReplaceable
                    .createReplaceDescriptor();

            // mail merge the date
            String fechaPresentacion = simpleDateFormat.format(formQueja.getFecha_creacion());
            xReplaceDescr.setSearchString("<fecha_creacion_citacion>");
            xReplaceDescr.setReplaceString(ld.format(DateTimeFormatter.ofPattern("dd 'de' MMMM 'de' yyyy")));
            xReplaceable.replaceAll(xReplaceDescr);

            // mail merge the addressee
            xReplaceDescr.setSearchString("<queja_num>");
            xReplaceDescr.setReplaceString(formQueja.getId_queja().toString());
            xReplaceable.replaceAll(xReplaceDescr);

            // mail merge the signatory
            xReplaceDescr.setSearchString("<nombre_prov>");
            xReplaceDescr.setReplaceString(formQueja.getProv_nombre());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<dir_prov>");
            xReplaceDescr.setReplaceString(formQueja.getProv_direccion());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<tel_prov>");
            xReplaceDescr.setReplaceString(formQueja.getProv_telefono());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<fecha_citacion>");
            xReplaceDescr.setReplaceString(dateCitacion.format(DateTimeFormatter.ofPattern("dd 'de' MMMM 'de' yyyy")));
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<cita_hora>");
            xReplaceDescr.setReplaceString(horaCitacion);
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<detalle_queja>");
            xReplaceDescr.setReplaceString(formQueja.getQueja());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<posible_solucion>");
            xReplaceDescr.setReplaceString(formQueja.getSolucion());
            xReplaceable.replaceAll(xReplaceDescr);

            OOoOutputStream output = new OOoOutputStream();

            // save as a PDF 
            XStorable xStorable = (XStorable) UnoRuntime
                    .queryInterface(XStorable.class, xComp);

            propertyValues = new PropertyValue[2];
            // Setting the flag for overwriting
            propertyValues[0] = new PropertyValue();
            propertyValues[1] = new PropertyValue();

            propertyValues[0].Name = "OutputStream";
            propertyValues[0].Value = output;
            // Setting the filter name

            propertyValues[1].Name = "FilterName";
            propertyValues[1].Value = "writer_pdf_Export";

            // Appending the favoured extension to the origin document name
            //String myResult = workingDir + "queja.pdf";
            xStorable.storeToURL("private:stream", propertyValues);

            // shutdown
            //xDesktop.terminate();
            XCloseable xcloseable = (XCloseable) UnoRuntime.queryInterface(XCloseable.class, xComp);
            xcloseable.close(false);
            ByteArrayInputStream inStream = new ByteArrayInputStream(output.toByteArray());

            ResponseBuilder response = Response.ok((Object) inStream);
            response.header("Content-Disposition", "attachment;filename=ComPerm" + formQueja.getId_queja() + ".pdf");
            return response.build();

        } catch (Exception e) {
            e.printStackTrace();
            ResponseBuilder response = Response.serverError();
            return response.build();
        }
    }

    @Override
    public Response getCedulaNotificacionCons(Integer idqueja, String fechaCitacion) {
        try {
            TipoReg_FormularioQueja formQueja = tipoDao.findByIdFormularioQueja(idqueja);

            // Initialise
            String oooExeFolder = "/opt/libreoffice6.1/program";
            XComponentContext xContext = BootstrapSocketConnector.bootstrap(oooExeFolder);
            //XComponentContext xContext = Bootstrap.bootstrap();

            XMultiComponentFactory xMCF = xContext.getServiceManager();

            Object oDesktop = xMCF.createInstanceWithContext(
                    "com.sun.star.frame.Desktop", xContext);

            XDesktop xDesktop = (XDesktop) UnoRuntime.queryInterface(
                    XDesktop.class, oDesktop);

            Locale.setDefault(new Locale("es", "GT", "UNIX"));

            // Load the Document
            String workingDir = "/home/julio/Documents/Mineco/proyPrototipo/diacoRegistros/";
            String myTemplate = workingDir + "Cedula_Notificacion_Cons.docx";

            if (!new File(myTemplate).canRead()) {
                throw new RuntimeException("Cannot load template:" + new File(myTemplate));
            }

            XComponentLoader xCompLoader = (XComponentLoader) UnoRuntime
                    .queryInterface(com.sun.star.frame.XComponentLoader.class, xDesktop);

            String sUrl = "file:///" + myTemplate;

            PropertyValue[] propertyValues = new PropertyValue[0];

            propertyValues = new PropertyValue[1];
            propertyValues[0] = new PropertyValue();
            propertyValues[0].Name = "Hidden";
            propertyValues[0].Value = new Boolean(true);

            XComponent xComp = xCompLoader.loadComponentFromURL(
                    sUrl, "_blank", 0, propertyValues);
//xComp.dispose();

            // Manipulate
            XReplaceDescriptor xReplaceDescr = null;
            XReplaceable xReplaceable = null;

            XTextDocument xTextDocument = (XTextDocument) UnoRuntime
                    .queryInterface(XTextDocument.class, xComp);
            //xTextDocument.dispose();

            xReplaceable = (XReplaceable) UnoRuntime
                    .queryInterface(XReplaceable.class,
                            xTextDocument);

            xReplaceDescr = (XReplaceDescriptor) xReplaceable
                    .createReplaceDescriptor();

            xReplaceDescr.setSearchString("<num_queja>");
            xReplaceDescr.setReplaceString(formQueja.getId_queja().toString());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<num_citacion>");
            xReplaceDescr.setReplaceString("1");
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<dir_cons>");
            xReplaceDescr.setReplaceString(formQueja.getCon_direccion());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<nombre_cons>");
            xReplaceDescr.setReplaceString(formQueja.getCon_nombre());
            xReplaceable.replaceAll(xReplaceDescr);

            LocalDate dateCitacion = LocalDate.parse(fechaCitacion);
            int day = dateCitacion.getDayOfMonth();
            String mes = dateCitacion.format(DateTimeFormatter.ofPattern("MMMM"));
            String mesUpper = mes.substring(0, 1).toUpperCase() + mes.substring(1);
            int year = dateCitacion.getYear();
            NumerosEnLetras nl = new NumerosEnLetras();
            String dia = nl.convertir(day);
            String anio = nl.convertir(year);
            xReplaceDescr.setSearchString("<fecha_notificacion>");
            xReplaceDescr.setReplaceString(dia + " de " + mesUpper + " de " + anio);
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<email>");
            xReplaceDescr.setReplaceString(formQueja.getCon_email());
            xReplaceable.replaceAll(xReplaceDescr);

            OOoOutputStream output = new OOoOutputStream();

            // save as a PDF 
            XStorable xStorable = (XStorable) UnoRuntime
                    .queryInterface(XStorable.class, xComp);

            propertyValues = new PropertyValue[2];
            // Setting the flag for overwriting
            propertyValues[0] = new PropertyValue();
            propertyValues[1] = new PropertyValue();

            propertyValues[0].Name = "OutputStream";
            propertyValues[0].Value = output;
            // Setting the filter name

            propertyValues[1].Name = "FilterName";
            propertyValues[1].Value = "writer_pdf_Export";

            // Appending the favoured extension to the origin document name
            //String myResult = workingDir + "queja.pdf";
            xStorable.storeToURL("private:stream", propertyValues);

            // shutdown
            //xDesktop.terminate();
            // close document
            XCloseable xcloseable = (XCloseable) UnoRuntime.queryInterface(XCloseable.class, xComp);
            xcloseable.close(false);
            ByteArrayInputStream inStream = new ByteArrayInputStream(output.toByteArray());

            ResponseBuilder response = Response.ok((Object) inStream);
            response.header("Content-Disposition", "attachment;filename=ComPerm" + formQueja.getId_queja() + ".pdf");
            return response.build();

        } catch (Exception e) {
            e.printStackTrace();
            ResponseBuilder response = Response.serverError();
            return response.build();
        }
    }

    @Override
    public Response getCedulaNotificacionProv(Integer idqueja, String fechaCitacion) {
        try {
            TipoReg_FormularioQueja formQueja = tipoDao.findByIdFormularioQueja(idqueja);

            // Initialise
            String oooExeFolder = "/opt/libreoffice6.1/program";
            XComponentContext xContext = BootstrapSocketConnector.bootstrap(oooExeFolder);
            //XComponentContext xContext = Bootstrap.bootstrap();

            XMultiComponentFactory xMCF = xContext.getServiceManager();

            Object oDesktop = xMCF.createInstanceWithContext(
                    "com.sun.star.frame.Desktop", xContext);

            XDesktop xDesktop = (XDesktop) UnoRuntime.queryInterface(
                    XDesktop.class, oDesktop);

            Locale.setDefault(new Locale("es", "GT", "UNIX"));

            // Load the Document
            String workingDir = "/home/julio/Documents/Mineco/proyPrototipo/diacoRegistros/";
            String myTemplate = workingDir + "Cedula_Notificacion_Prov.docx";

            if (!new File(myTemplate).canRead()) {
                throw new RuntimeException("Cannot load template:" + new File(myTemplate));
            }

            XComponentLoader xCompLoader = (XComponentLoader) UnoRuntime
                    .queryInterface(com.sun.star.frame.XComponentLoader.class, xDesktop);

            String sUrl = "file:///" + myTemplate;

            PropertyValue[] propertyValues = new PropertyValue[0];

            propertyValues = new PropertyValue[1];
            propertyValues[0] = new PropertyValue();
            propertyValues[0].Name = "Hidden";
            propertyValues[0].Value = new Boolean(true);

            XComponent xComp = xCompLoader.loadComponentFromURL(
                    sUrl, "_blank", 0, propertyValues);
//xComp.dispose();

            // Manipulate
            XReplaceDescriptor xReplaceDescr = null;
            XReplaceable xReplaceable = null;

            XTextDocument xTextDocument = (XTextDocument) UnoRuntime
                    .queryInterface(XTextDocument.class, xComp);
            //xTextDocument.dispose();

            xReplaceable = (XReplaceable) UnoRuntime
                    .queryInterface(XReplaceable.class,
                            xTextDocument);

            xReplaceDescr = (XReplaceDescriptor) xReplaceable
                    .createReplaceDescriptor();

            xReplaceDescr.setSearchString("<num_queja>");
            xReplaceDescr.setReplaceString(formQueja.getId_queja().toString());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<num_citacion>");
            xReplaceDescr.setReplaceString("1");
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<dir_prov>");
            xReplaceDescr.setReplaceString(formQueja.getProv_direccion());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<nombre_prov>");
            xReplaceDescr.setReplaceString(formQueja.getProv_nombre());
            xReplaceable.replaceAll(xReplaceDescr);

            LocalDate dateCitacion = LocalDate.parse(fechaCitacion);
            int day = dateCitacion.getDayOfMonth();
            String mes = dateCitacion.format(DateTimeFormatter.ofPattern("MMMM"));
            String mesUpper = mes.substring(0, 1).toUpperCase() + mes.substring(1);
            int year = dateCitacion.getYear();
            NumerosEnLetras nl = new NumerosEnLetras();
            String dia = nl.convertir(day);
            String anio = nl.convertir(year);
            xReplaceDescr.setSearchString("<fecha_notificacion>");
            xReplaceDescr.setReplaceString(dia + " de " + mesUpper + " de " + anio);
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<email>");
            xReplaceDescr.setReplaceString(formQueja.getCon_email());
            xReplaceable.replaceAll(xReplaceDescr);

            OOoOutputStream output = new OOoOutputStream();

            // save as a PDF 
            XStorable xStorable = (XStorable) UnoRuntime
                    .queryInterface(XStorable.class, xComp);

            propertyValues = new PropertyValue[2];
            // Setting the flag for overwriting
            propertyValues[0] = new PropertyValue();
            propertyValues[1] = new PropertyValue();

            propertyValues[0].Name = "OutputStream";
            propertyValues[0].Value = output;
            // Setting the filter name

            propertyValues[1].Name = "FilterName";
            propertyValues[1].Value = "writer_pdf_Export";

            // Appending the favoured extension to the origin document name
            //String myResult = workingDir + "queja.pdf";
            xStorable.storeToURL("private:stream", propertyValues);

            // shutdown
            //xDesktop.terminate();
            // close document
            XCloseable xcloseable = (XCloseable) UnoRuntime.queryInterface(XCloseable.class, xComp);
            xcloseable.close(false);
            ByteArrayInputStream inStream = new ByteArrayInputStream(output.toByteArray());
            // seria interesante y de probar lo del StreamingOutput
            // en https://stackoverflow.com/questions/29712554/how-to-download-a-file-using-a-java-rest-service-and-a-data-stream

            ResponseBuilder response = Response.ok((Object) inStream);
            response.header("Content-Disposition", "attachment;filename=ComPerm" + formQueja.getId_queja() + ".pdf");
            return response.build();

        } catch (Exception e) {
            e.printStackTrace();
            ResponseBuilder response = Response.serverError();
            return response.build();
        }
    }

    @Override
    public Response getFichaQueja(Integer pIdqueja) {
        try {
           // TipoReg_FormularioQueja formQueja = tipoDao.findByIdFormularioQueja(pIdqueja);
             TipoReg_FichaQueja  fichaQueja= tipoDao.findByIdFichaQueja(pIdqueja);
            // Initialise
            String oooExeFolder = "C:/Program Files/LibreOffice/program";
            XComponentContext xContext = BootstrapSocketConnector.bootstrap(oooExeFolder);

            XMultiComponentFactory xMCF = xContext.getServiceManager();

            Object oDesktop = xMCF.createInstanceWithContext(
                    "com.sun.star.frame.Desktop", xContext);

            XDesktop xDesktop = (XDesktop) UnoRuntime.queryInterface(
                    XDesktop.class, oDesktop);

            Locale.setDefault(new Locale("es", "GT", "UNIX"));
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd-MM-yyyy");

            // Load the Document
            String workingDir = "C:/javainstalls/FILESERVER/diacoRegistros/";
            String myTemplate = workingDir + "ficha_queja.docx";

            if (!new File(myTemplate).canRead()) {
                throw new RuntimeException("Cannot load template:" + new File(myTemplate));
            }

            XComponentLoader xCompLoader = (XComponentLoader) UnoRuntime
                    .queryInterface(com.sun.star.frame.XComponentLoader.class, xDesktop);

            String sUrl = "file:///" + myTemplate;

            PropertyValue[] propertyValues = new PropertyValue[0];

            propertyValues = new PropertyValue[1];
            propertyValues[0] = new PropertyValue();
            propertyValues[0].Name = "Hidden";
            propertyValues[0].Value = new Boolean(true);

            XComponent xComp = xCompLoader.loadComponentFromURL(
                    sUrl, "_blank", 0, propertyValues);

            // Manipulate
            XReplaceDescriptor xReplaceDescr = null;
            XReplaceable xReplaceable = null;

            XTextDocument xTextDocument = (XTextDocument) UnoRuntime
                    .queryInterface(XTextDocument.class, xComp);
            //xTextDocument.dispose();

            xReplaceable = (XReplaceable) UnoRuntime
                    .queryInterface(XReplaceable.class,
                            xTextDocument);

            xReplaceDescr = (XReplaceDescriptor) xReplaceable
                    .createReplaceDescriptor();

            xReplaceDescr.setSearchString("<num_queja>");
            xReplaceDescr.setReplaceString(fichaQueja.getQuejanumero() + "-" + fichaQueja.getAnioQueja() );
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<fecha_ingreso_queja>");
            xReplaceDescr.setReplaceString(simpleDateFormat.format(fichaQueja.getFecha_ingreso_queja()));
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<nombre_prov>");
            xReplaceDescr.setReplaceString(fichaQueja.getNombre_proveedor());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<nombre_cons>");
            xReplaceDescr.setReplaceString(fichaQueja.getNombre_consumidor());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<motivo_queja>");
            xReplaceDescr.setReplaceString(fichaQueja.getSolicita_que());
            xReplaceable.replaceAll(xReplaceDescr);

            if(fichaQueja.getFecha_comunicacion()!=null)
            { xReplaceDescr.setSearchString("<fecha_comunicacion>");
            xReplaceDescr.setReplaceString(simpleDateFormat.format(fichaQueja.getFecha_comunicacion()));
            xReplaceable.replaceAll(xReplaceDescr); }
            else { xReplaceDescr.setSearchString("<fecha_comunicacion>");
            xReplaceDescr.setReplaceString("");
            xReplaceable.replaceAll(xReplaceDescr);  }

            xReplaceDescr.setSearchString("<visita_campo>");
            xReplaceDescr.setReplaceString(fichaQueja.getVisita_campo());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<fecha_citacion>");
            xReplaceDescr.setReplaceString(fichaQueja.getCitacion());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<fecha_audiencia_conciliacion>");
            xReplaceDescr.setReplaceString(fichaQueja.getAudiencia_conciliacion());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<conclusion>");
            xReplaceDescr.setReplaceString(fichaQueja.getConclusion());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<observaciones>");
            xReplaceDescr.setReplaceString(fichaQueja.getComentarios());
            xReplaceable.replaceAll(xReplaceDescr);

            OOoOutputStream output = new OOoOutputStream();

            // save as a PDF 
            XStorable xStorable = (XStorable) UnoRuntime
                    .queryInterface(XStorable.class, xComp);

            propertyValues = new PropertyValue[2];
            // Setting the flag for overwriting
            propertyValues[0] = new PropertyValue();
            propertyValues[1] = new PropertyValue();

            propertyValues[0].Name = "OutputStream";
            propertyValues[0].Value = output;
            // Setting the filter name

            propertyValues[1].Name = "FilterName";
            propertyValues[1].Value = "writer_pdf_Export";

            // Appending the favoured extension to the origin document name
            //String myResult = workingDir + "queja.pdf";
            xStorable.storeToURL("private:stream", propertyValues);

            // shutdown
            //xDesktop.terminate();
            // close document
            XCloseable xcloseable = (XCloseable) UnoRuntime.queryInterface(XCloseable.class, xComp);
            xcloseable.close(false);
            ByteArrayInputStream inStream = new ByteArrayInputStream(output.toByteArray());

            ResponseBuilder response = Response.ok((Object) inStream);
            response.header("Content-Disposition", "attachment;filename=ComPerm" + fichaQueja.getId_queja() + ".pdf");
            return response.build();

        } catch (Exception e) {
            e.printStackTrace();
            ResponseBuilder response = Response.serverError();
            return response.build();
        }
    }

    /*DIACO-AQ-FO-09*/
    @Override
    public Response getArchivoVisitaCampo(Integer pIdqueja, String pFechaResolucion) {
        try {
           // TipoReg_FormularioQueja formQueja = tipoDao.findByIdFormularioQueja(pIdqueja);
                 TipoReg_ResolucionVisitaCampo visitaCampo= tipoDao.findByIdResolucionVisitaCampo(pIdqueja);

            // Initialise
            String oooExeFolder = "C:/Program Files/LibreOffice/program";
            XComponentContext xContext = BootstrapSocketConnector.bootstrap(oooExeFolder);

            XMultiComponentFactory xMCF = xContext.getServiceManager();

            Object oDesktop = xMCF.createInstanceWithContext(
                    "com.sun.star.frame.Desktop", xContext);

            XDesktop xDesktop = (XDesktop) UnoRuntime.queryInterface(
                    XDesktop.class, oDesktop);

            Locale.setDefault(new Locale("es", "GT", "UNIX"));
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd-MM-yyyy");

            // Load the Document
            String workingDir = "C:/javainstalls/FILESERVER/diacoRegistros/";
            String myTemplate = workingDir + "ArchivoVisitaCampo.docx";

            if (!new File(myTemplate).canRead()) {
                throw new RuntimeException("Cannot load template:" + new File(myTemplate));
            }

            XComponentLoader xCompLoader = (XComponentLoader) UnoRuntime
                    .queryInterface(com.sun.star.frame.XComponentLoader.class, xDesktop);

            String sUrl = "file:///" + myTemplate;

            PropertyValue[] propertyValues = new PropertyValue[0];

            propertyValues = new PropertyValue[1];
            propertyValues[0] = new PropertyValue();
            propertyValues[0].Name = "Hidden";
            propertyValues[0].Value = new Boolean(true);

            XComponent xComp = xCompLoader.loadComponentFromURL(
                    sUrl, "_blank", 0, propertyValues);

            // Manipulate
            XReplaceDescriptor xReplaceDescr = null;
            XReplaceable xReplaceable = null;

            XTextDocument xTextDocument = (XTextDocument) UnoRuntime
                    .queryInterface(XTextDocument.class, xComp);
            //xTextDocument.dispose();

            xReplaceable = (XReplaceable) UnoRuntime
                    .queryInterface(XReplaceable.class,
                            xTextDocument);

            xReplaceDescr = (XReplaceDescriptor) xReplaceable
                    .createReplaceDescriptor();

            xReplaceDescr.setSearchString("<num_queja>");
            xReplaceDescr.setReplaceString(String.valueOf(visitaCampo.getIdQueja()));
            xReplaceable.replaceAll(xReplaceDescr);
            

            xReplaceDescr.setSearchString("<fecha_resolucion>");
            xReplaceDescr.setReplaceString(simpleDateFormat.format(visitaCampo.getFechaCreacion()));
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<nombre_prov>");
            xReplaceDescr.setReplaceString(visitaCampo.getNombreProveedor());
            xReplaceable.replaceAll(xReplaceDescr);

            xReplaceDescr.setSearchString("<nombre_cons>");
            xReplaceDescr.setReplaceString(visitaCampo.getNombreConsumidor());
            xReplaceable.replaceAll(xReplaceDescr);

            OOoOutputStream output = new OOoOutputStream();

            // save as a PDF 
            XStorable xStorable = (XStorable) UnoRuntime
                    .queryInterface(XStorable.class, xComp);

            propertyValues = new PropertyValue[2];
            // Setting the flag for overwriting
            propertyValues[0] = new PropertyValue();
            propertyValues[1] = new PropertyValue();

            propertyValues[0].Name = "OutputStream";
            propertyValues[0].Value = output;
            // Setting the filter name

            propertyValues[1].Name = "FilterName";
            propertyValues[1].Value = "writer_pdf_Export";

            // Appending the favoured extension to the origin document name
            //String myResult = workingDir + "queja.pdf";
            xStorable.storeToURL("private:stream", propertyValues);

            // shutdown
            //xDesktop.terminate();
            // close document
            XCloseable xcloseable = (XCloseable) UnoRuntime.queryInterface(XCloseable.class, xComp);
            xcloseable.close(false);
            ByteArrayInputStream inStream = new ByteArrayInputStream(output.toByteArray());

            ResponseBuilder response = Response.ok((Object) inStream);
            response.header("Content-Disposition", "attachment;filename=ComPerm" + visitaCampo.getIdQueja() + ".pdf");
            return response.build();

        } catch (Exception e) {
            e.printStackTrace();
            ResponseBuilder response = Response.serverError();
            return response.build();
        }
    }

    /**
     * @return the tipoDao
     */
    public TipoRepository getTipoDao() {
        return tipoDao;
    }

    /**
     * @param tipoDao the tipoDao to set
     */
    public void setTipoDao(TipoRepository tipoDao) {
        this.tipoDao = tipoDao;
    }

}
