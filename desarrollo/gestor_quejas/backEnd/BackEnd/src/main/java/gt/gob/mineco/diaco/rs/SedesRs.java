package gt.gob.mineco.diaco.rs;

import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import gt.gob.mineco.diaco.model.DiacoSede;
import gt.gob.mineco.diaco.service.SedesServiceImp;
import gt.gob.mineco.diaco.util.ResponseRs;

@Path("/sedes")
@RequestScoped
public class SedesRs {
	@Inject
	SedesServiceImp sedesService;
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public ResponseRs getSedes() {
		ResponseRs response = new ResponseRs();
		List<DiacoSede> sedes = sedesService.getAll();
		response.setValue(sedes);
		return response;
	}
}
