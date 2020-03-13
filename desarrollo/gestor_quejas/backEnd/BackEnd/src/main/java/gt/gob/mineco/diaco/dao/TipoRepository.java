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
import gt.gob.mineco.diaco.model.TipoTipoImagen;
import gt.gob.mineco.diaco.model.TipoRepositorio;
import javax.persistence.PersistenceContextType;

@ApplicationScoped
/*@Stateless
@TransactionManagement(TransactionManagementType.BEAN)*/
public class TipoRepository {

    @PersistenceContext
    private EntityManager em;

    public TipoRepositorio findByIdRepositorio(Integer id) {
        return em.find(TipoRepositorio.class, id);
    }

	/*
    @SuppressWarnings("unchecked")
    public TipoRepositorio findActiveRepo() {
        List<TipoRepositorio> DataList = em.createNamedQuery("TipoRepositorio.findActive").setMaxResults(1).getResultList();
        return DataList.isEmpty() ? null : DataList.get(0);
    }
	*/

    @SuppressWarnings("unchecked")
    public List<TipoImagenesQueja> findAllImagenesQueja(Integer idqueja, Integer idflujo) {
        switch (idflujo) {
            case 1:
                return em.createNamedQuery("TipoImagenesQueja.findAllFlujoAtencionCon").setParameter("id_queja", idqueja).getResultList();
            case 4:
                return em.createNamedQuery("TipoImagenesQueja.findAllFlujoConcVirt").setParameter("id_queja", idqueja).getResultList();
            default:
                return null;
        }
    }

    @SuppressWarnings("unchecked")
    public List<TipoImagenesQueja> findbyQuejaImagen(Integer idqueja, String imagen) {
        return em.createNamedQuery("TipoImagenesQueja.findbyQuejaImagen").setParameter("id_queja", idqueja).setParameter("archivo", imagen).getResultList();
    }

    public TipoImagenesQueja findByIdImagenesQueja(Integer id) {
        return em.find(TipoImagenesQueja.class, id);
    }
    
    public TipoImagenesQueja findbyTipoI(Integer idqueja) {
        List<TipoImagenesQueja> DataList = em.createNamedQuery("TipoImagenesQueja.findbyTipoI").setParameter("id_queja", idqueja).getResultList();
        return DataList.isEmpty() ? null : DataList.get(0);
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

    public TipoImagenesQueja findbyCatImagen(Integer idqueja, Integer categoria) {
        List<TipoImagenesQueja> DataList = em.createNamedQuery("TipoImagenesQueja.findbyCatImagen").setParameter("id_queja", idqueja).setParameter("categoria", categoria).getResultList();
        return DataList.isEmpty() ? null : DataList.get(0);
    }

    public TipoRepositorio findActiveRepo(String tipo) {
        List<TipoRepositorio> DataList = em.createNamedQuery("TipoRepositorio.findActive").setParameter("tipo", tipo).setMaxResults(1).getResultList();
        return DataList.isEmpty() ? null : DataList.get(0);
    }

    public TipoTipoImagen findTipoImagen(String desc) {
        List<TipoTipoImagen> DataList = em.createNamedQuery("TipoTipoImagen.findByDescripcion").setParameter("descripcion", desc).setMaxResults(1).getResultList();
        return DataList.isEmpty() ? null : DataList.get(0);

    }
}
