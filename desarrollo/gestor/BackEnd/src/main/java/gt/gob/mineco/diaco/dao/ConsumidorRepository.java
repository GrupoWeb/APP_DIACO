package gt.gob.mineco.diaco.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import gt.gob.mineco.diaco.model.DiacoConsumidor;
import gt.gob.mineco.diaco.model.TipoEmail;
import gt.gob.mineco.diaco.model.TipoTelefono;
import java.util.List;

public class ConsumidorRepository {

    @PersistenceContext
    private EntityManager em;

    public DiacoConsumidor save(DiacoConsumidor consumidor) {
        em.persist(consumidor);
        em.flush();
        return consumidor;
    }
    
    public DiacoConsumidor merge(DiacoConsumidor consumidor) {
        em.merge(consumidor);
        em.flush();
        return consumidor;
    }
    
    public DiacoConsumidor updateCon(DiacoConsumidor consumidor) {
        em.merge(consumidor);
        em.flush();
        return consumidor;
    }

    
    public TipoEmail saveCorreo(TipoEmail correo) {
        em.persist(correo);
        em.flush();
        return correo;
    }

    public TipoEmail updateCorreo(TipoEmail correo) {
        em.merge(correo);
        em.flush();
        return correo;
    }

    public TipoTelefono saveTelefono(TipoTelefono telefono) {
        em.persist(telefono);
        em.flush();
        return telefono;
    }
    
    public TipoTelefono updateTelefono(TipoTelefono telefono) {
        em.merge(telefono);
        em.flush();
        return telefono;
    }
    

    public DiacoConsumidor findByDocumentoIdentificacion(String documentoIdentificacion) {
        try {
        TypedQuery<DiacoConsumidor> query = em.createNamedQuery("DiacoConsumidor.findByDocumentoIdentificacion", DiacoConsumidor.class);
        query.setParameter("documentoIdentificacion", documentoIdentificacion);
        return query.getSingleResult();
        } catch (Exception e ) {
            return null;
        }
    }

    public TipoTelefono findTelefonoById(Integer idConsumidor) {
        List<TipoTelefono> DataList = em.createNamedQuery("TipoTelefono.findAllC").setParameter("id_consumidor", idConsumidor).setMaxResults(1).getResultList();
        return DataList.isEmpty() ? null : DataList.get(0);
    }

    public TipoEmail findCorreoById(Integer idConsumidor) {
        List<TipoEmail> DataList = em.createNamedQuery("TipoEmail.findAllC").setParameter("id_consumidor", idConsumidor).setMaxResults(1).getResultList();
        return DataList.isEmpty() ? null : DataList.get(0);
    }
    
    public List<TipoTelefono> findTelefonosById(Integer idConsumidor) {
        List<TipoTelefono> DataList = em.createNamedQuery("TipoTelefono.findAllC").setParameter("id_consumidor", idConsumidor).setMaxResults(100).getResultList();
        return DataList;
    }

    public List<TipoEmail> findCorreosById(Integer idConsumidor) {
        List<TipoEmail> DataList = em.createNamedQuery("TipoEmail.findAllC").setParameter("id_consumidor", idConsumidor).setMaxResults(100).getResultList();
        return DataList;
    }

    public DiacoConsumidor findById(Integer id) {
        return em.find(DiacoConsumidor.class, id);
    }
}
