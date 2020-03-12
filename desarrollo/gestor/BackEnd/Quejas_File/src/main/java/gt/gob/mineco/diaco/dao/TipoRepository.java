package gt.gob.mineco.diaco.dao;

import java.util.List;
import java.util.ArrayList;

import javax.enterprise.context.ApplicationScoped;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ejb.Stateless;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;

import gt.gob.mineco.diaco.model.TipoImagenesQueja;
import gt.gob.mineco.diaco.model.TipoReg_ComunicacionPermanente;
import gt.gob.mineco.diaco.model.TipoReg_FichaQueja;
import gt.gob.mineco.diaco.model.TipoReg_FormularioQueja;
import gt.gob.mineco.diaco.model.TipoReg_ResolucionVisitaCampo;
import gt.gob.mineco.diaco.model.TipoTipoImagen;
import gt.gob.mineco.diaco.model.TipoRepositorio;
import javax.persistence.NonUniqueResultException;
import javax.persistence.PersistenceContextType;
import javax.persistence.Query;

@ApplicationScoped
/*@Stateless
@TransactionManagement(TransactionManagementType.BEAN)*/
public class TipoRepository {

	@PersistenceContext
	private EntityManager em;

       	public TipoRepositorio findByIdRepositorio(Integer id) {
		return em.find(TipoRepositorio.class, id);
	}

        @SuppressWarnings("unchecked")
	public TipoRepositorio findActiveRepo(){
		List<TipoRepositorio> DataList = em.createNamedQuery("TipoRepositorio.findActive").setMaxResults(1).getResultList();
                return DataList.isEmpty() ? null : DataList.get(0);
	}
        
	@SuppressWarnings("unchecked")
	public List<TipoImagenesQueja> findAllImagenesQueja(Integer idqueja,Integer idflujo){
		switch(idflujo){
                    case 1:
                        return em.createNamedQuery("TipoImagenesQueja.findAllFlujoAtencionCon").setParameter("id_queja", idqueja).getResultList();
                    case 4:
                        return em.createNamedQuery("TipoImagenesQueja.findAllFlujoConcVirt").setParameter("id_queja", idqueja).getResultList();
                    default:
                        return null;
                }
	}
	
        @SuppressWarnings("unchecked")
	public List<TipoImagenesQueja> findbyQuejaImagen(Integer idqueja, String imagen){
		return em.createNamedQuery("TipoImagenesQueja.findbyQuejaImagen").setParameter("id_queja", idqueja).setParameter("archivo", imagen).getResultList();
	}
        
	public TipoImagenesQueja findByIdImagenesQueja(Integer id) {
		return em.find(TipoImagenesQueja.class, id);
	}
	
	public void saveImagenesQueja(TipoImagenesQueja tipoImagenesQueja) {
		em.persist(tipoImagenesQueja);
	}
	
	public void deleteImagenesQueja(TipoImagenesQueja tipoImagenesQueja) {
		em.remove(tipoImagenesQueja);
	}

	public TipoTipoImagen findByIdTipoImagen(Integer id) {
		return em.find(TipoTipoImagen.class, id);
	}
        
        public TipoReg_FormularioQueja findByIdFormularioQueja(Integer pId_queja) {
		//return em.find(TipoReg_FormularioQueja.class, id);
                    return getFirstResultOrNullFormularioQueja(em.createNamedQuery("TipoReg_FormularioQueja.findAll").setParameter("idqueja", pId_queja));

	}
        
        public TipoReg_ComunicacionPermanente findByIdComunicacionPermanente(Integer id)
        {
            this.em.getEntityManagerFactory().getCache().evict(TipoReg_ComunicacionPermanente.class); 
           return em.find(TipoReg_ComunicacionPermanente.class,id);
        }
        
        public TipoReg_ResolucionVisitaCampo findByIdResolucionVisitaCampo(Integer id)
        {
            this.em.getEntityManagerFactory().getCache().evict(TipoReg_ResolucionVisitaCampo.class); 
           return em.find(TipoReg_ResolucionVisitaCampo.class,id);
        }

        public TipoReg_FichaQueja findByIdFichaQueja(Integer id)
        {
           this.em.getEntityManagerFactory().getCache().evict(TipoReg_FichaQueja.class); 
           return em.find(TipoReg_FichaQueja.class,id);
        }
        
         public TipoReg_ResolucionVisitaCampo findByIdQuejaResolucionVisitaCampo(Integer id_queja)
        {
          // return em.find(TipoReg_ResolucionVisitaCampo.class,id_queja);
           return getFirstResultOrNullVisitaCampo(em.createNamedQuery("TipoReg_ResolucionVisitaCampo.findByIdQueja").setParameter("idQueja", id_queja));
        }
         
         public static TipoReg_ResolucionVisitaCampo getFirstResultOrNullVisitaCampo(Query query){
            List results = query.getResultList();
            if (results.isEmpty()) return null;
            else if (results.size() >= 1) return (TipoReg_ResolucionVisitaCampo)results.get(0);
            throw new NonUniqueResultException();
        }
         
          public TipoReg_FichaQueja findByIdQuejaFichaQueja(Integer id_queja)
        {
          // return em.find(TipoReg_ResolucionVisitaCampo.class,id_queja);
           return getFirstResultOrNullFichaQueja(em.createNamedQuery("TipoReg_FichaQueja.findAll").setParameter("idqueja", id_queja));
        }
          
            public static TipoReg_FichaQueja getFirstResultOrNullFichaQueja(Query query){
            List results = query.getResultList();
            if (results.isEmpty()) return null;
            else if (results.size() >= 1) return (TipoReg_FichaQueja)results.get(0);
            throw new NonUniqueResultException();
        }
            
             public static TipoReg_FormularioQueja getFirstResultOrNullFormularioQueja(Query query){
            List results = query.getResultList();
            if (results.isEmpty()) return null;
            else if (results.size() >= 1) return (TipoReg_FormularioQueja)results.get(0);
            throw new NonUniqueResultException();
        }
        
}
