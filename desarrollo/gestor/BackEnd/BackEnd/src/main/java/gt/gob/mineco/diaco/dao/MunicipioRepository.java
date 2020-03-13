package gt.gob.mineco.diaco.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import gt.gob.mineco.diaco.model.Municipio;

public class MunicipioRepository {
	@PersistenceContext
	private EntityManager em;
	
	public List<Municipio> findAll() {
		TypedQuery<Municipio> query = em.createNamedQuery("Municipio.findAll", Municipio.class);
		return query.getResultList();
	}
	
	public Municipio findById(Integer codigoMunicipio) {
		return em.find(Municipio.class, codigoMunicipio);
	}
	
	public List<Municipio> findByDepartamento(Integer codigoDepartamento) {
		TypedQuery<Municipio> query = em.createNamedQuery("Municipio.findByDepartamento", Municipio.class);
		query.setParameter("departamento", codigoDepartamento);
		return query.getResultList();
	}
	
	public Municipio save(Municipio municipio) {
		em.persist(municipio);
		return municipio;
	}
}
