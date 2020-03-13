package gt.gob.mineco.diaco.rs;

import gt.gob.mineco.diaco.dto.ProveedorDto;
import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import gt.gob.mineco.diaco.model.DiacoProveedor;
import gt.gob.mineco.diaco.model.TipoEmail;
import gt.gob.mineco.diaco.model.TipoTelefono;
import gt.gob.mineco.diaco.service.ProveedoresServiceImp;
import gt.gob.mineco.diaco.util.FormCalificacionUsuario;
import gt.gob.mineco.diaco.util.ResponseRs;
import java.util.List;

@Path("/proveedores")
@RequestScoped
@Produces(MediaType.APPLICATION_JSON)
public class ProveedoresRs {

    @Inject
    ProveedoresServiceImp proveedoresService;

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public ResponseRs createProveedor(DiacoProveedor proveedor) {
        ResponseRs response = new ResponseRs();
        proveedor = proveedoresService.saveProveedor(proveedor);
        response.setValue(proveedor);
        return response;
    }
    
    @GET
    public ResponseRs getProveedores(@QueryParam(value = "nit") String nit,@QueryParam(value = "id_instalacion") String pIdInstalacionMobil) {
        ResponseRs response = new ResponseRs();
        //DiacoProveedor proveedor = proveedoresService.getProveedorByNit(nit);
        DiacoProveedor proveedor = proveedoresService.getProveedorAndCalifByNit(nit,pIdInstalacionMobil);
        response.setValue(proveedor);
        return response;
    }

    @GET
    @Path("/busca")
    public ResponseRs getFindProveedores(@QueryParam(value = "nit") String nit, @QueryParam(value = "nombre") String nombre) {
        ResponseRs response = new ResponseRs();
        List<ProveedorDto> proveedor = proveedoresService.getProveedorByNitNombre(nit, nombre);
        response.setValue(proveedor);
        return response;
    }

@POST
   @Path("/save_calificacion")
    @Consumes(MediaType.APPLICATION_JSON)
    public ResponseRs saveCalificacionProveedor(FormCalificacionUsuario pCalificacion) {
        ResponseRs response = new ResponseRs();
        proveedoresService.saveCalificacionProveedor(pCalificacion);
        response.setReason("OK");
        return response;
    }
	
	@GET
    @Path("/proveedor")
    public ResponseRs getFindId(@QueryParam(value = "id") Integer id) {
        ResponseRs response = new ResponseRs();
        DiacoProveedor proveedor = proveedoresService.getProveedorById(id);
        if (proveedor != null) {
            List<TipoTelefono> tel = proveedoresService.findTelefonosById(proveedor.getIdProveedor());
            List<TipoEmail> correo = proveedoresService.findCorreosById(proveedor.getIdProveedor());
            for (TipoTelefono t : tel) {
                switch (t.getTipocatalogo().getId_catalogo()) {
                    case 3:
                        proveedor.setTelefono1(t.getTelefono()); //Personal
                        break;
                    case 4:
                        proveedor.setTelefono2(t.getTelefono()); //Domicilio
                        break;
                    case 5:
                        proveedor.setTelefono3(t.getTelefono()); //Referencia
                        break;

                }
            }
            if (correo != null) {
                Integer i = 1;
                for (TipoEmail c : correo) {
                    switch (i) {
                        case 1:
                            proveedor.setEmail1(c.getCorreo_electronico());
                            i++;
                            break;
                        case 2:
                            proveedor.setEmail2(c.getCorreo_electronico());
                            i++;
                            break;
                    }
                }
            }
        }
        response.setValue(proveedor);
        return response;
    }
    
}
