package gt.gob.mineco.diaco.dao;

import gt.gob.mineco.diaco.dto.ProveedorDto;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import gt.gob.mineco.diaco.model.DiacoProveedor;
import gt.gob.mineco.diaco.model.TipoEmail;
import gt.gob.mineco.diaco.model.TipoTelefono;
import java.time.LocalDate;
import java.util.List;
import javax.persistence.Query;

public class ProveedorRepository {

    @PersistenceContext
    EntityManager em;

    public DiacoProveedor save(DiacoProveedor proveedor) {
        em.persist(proveedor);
        em.flush();
        return proveedor;
    }
    
    public DiacoProveedor merge(DiacoProveedor proveedor) {
        em.merge(proveedor);
        em.flush();
        return proveedor;
    }

    public DiacoProveedor findByNit(String nit) {
        try {
        TypedQuery<DiacoProveedor> query = em.createNamedQuery("DiacoProveedor.findByNit", DiacoProveedor.class);
        query.setParameter("nit", nit);
        return query.getSingleResult();
        } catch (Exception e) {
            return null;
        }
    }
    
    public Long findQuejasValProv(Integer id) {
        TypedQuery<Long> query = em.createNamedQuery("DiacoQueja.findQuejasValProv", Long.class);
        query.setParameter("id_proveedor", id);
        return query.getSingleResult();
    }
    
    public Long findQuejasProv(Integer id) {
        TypedQuery<Long> query = em.createNamedQuery("DiacoQueja.findQuejasProv", Long.class);
        query.setParameter("id_proveedor", id);
        return query.getSingleResult();
    }

    public DiacoProveedor findById(Integer id) {
        return em.find(DiacoProveedor.class, id);
    }

    public List<ProveedorDto> getProveedorByNitNombre(String nit, String nombre) {
        String querystring = "SELECT v FROM DiacoProveedor v where 1=1 ";
        querystring = querystring + " and ( "
                    + "coalesce(CONCAT( UPPER(v.primerNombre), ' '),'') + "
                    + "coalesce(CONCAT( UPPER(v.segundoNombre), ' '),'') + "
                    + "coalesce(CONCAT( UPPER(v.tercerNombre), ' '),'') + "
                    + "coalesce(CONCAT( UPPER(v.primerApellido), ' '),'') + "
                    + "coalesce(CONCAT( UPPER(v.segundoApellido), ' '),'') + "
                    + "coalesce(CONCAT( UPPER(v.apellidoCasada), ' '),'') + "
                    + "coalesce(CONCAT( UPPER(v.razonSocial), ' '),'') + "
                    + "coalesce(CONCAT( UPPER(v.nombreEmpresa), ' '),'') + "
                    + "coalesce(CONCAT( UPPER(v.nombre), ' '),'') ) NOT LIKE UPPER(:pro_pendiente)";
        String param;
        if (!nombre.isEmpty()) {
            querystring = querystring + " and ( "
                    + "coalesce(CONCAT( UPPER(v.primerNombre), ' '),'') + "
                    + "coalesce(CONCAT( UPPER(v.segundoNombre), ' '),'') + "
                    + "coalesce(CONCAT( UPPER(v.tercerNombre), ' '),'') + "
                    + "coalesce(CONCAT( UPPER(v.primerApellido), ' '),'') + "
                    + "coalesce(CONCAT( UPPER(v.segundoApellido), ' '),'') + "
                    + "coalesce(CONCAT( UPPER(v.apellidoCasada), ' '),'') + "
                    + "coalesce(CONCAT( UPPER(v.razonSocial), ' '),'') + "
                    + "coalesce(CONCAT( UPPER(v.nombreEmpresa), ' '),'') + "
                    + "coalesce(CONCAT( UPPER(v.nombre), ' '),'') ) LIKE UPPER(:pro_nombre)";
            
        }
        if (!nit.isEmpty()) {
            querystring = querystring + " and UPPER(v.nitProveedor) LIKE UPPER(:pro_nit)";
        }
        Query nq = this.em.createQuery(querystring, DiacoProveedor.class);
        param = "%PENDIENTE%";
        nq.setParameter("pro_pendiente", param);
        
        if (!nombre.isEmpty()) {
            param = "%" + nombre.replaceAll(" ", "%") + "%";
            nq.setParameter("pro_nombre", param);
        }
        if (!nit.isEmpty()) {
            param = "%" + nit.replaceAll(" ", "%") + "%";
            nq.setParameter("pro_nit", param);
        }

        //System.out.println(".............. " + querystring + ", ........ " + nq.getParameters());
        
        return nq.getResultList();
    }

    public TipoTelefono findTelefonoById(Integer idProveedor) {
        List<TipoTelefono> DataList = em.createNamedQuery("TipoTelefono.findAllP").setParameter("id_proveedor", idProveedor).setMaxResults(1).getResultList();
        return DataList.isEmpty() ? null : DataList.get(0);
    }

    public TipoEmail findCorreoById(Integer idProveedor) {
        List<TipoEmail> DataList = em.createNamedQuery("TipoEmail.findAllP").setParameter("id_proveedor", idProveedor).setMaxResults(1).getResultList();
        return DataList.isEmpty() ? null : DataList.get(0);
    }
    
    public List<TipoTelefono> findTelefonosById(Integer idProveedor) {
        List<TipoTelefono> DataList = em.createNamedQuery("TipoTelefono.findAllP").setParameter("id_proveedor", idProveedor).setMaxResults(100).getResultList();
        return DataList;
    }

    public List<TipoEmail> findCorreosById(Integer idProveedor) {
        List<TipoEmail> DataList = em.createNamedQuery("TipoEmail.findAllP").setParameter("id_proveedor", idProveedor).setMaxResults(100).getResultList();
        return DataList;
    }
    
    public String findParametro(String id) {
		//this.em.getEntityManagerFactory().getCache().evict(DiacoParametros.class);
        TypedQuery<String> query = em.createNamedQuery("DiacoParametros.findByParametro", String.class);
        query.setParameter("parametro", id);
        return query.getSingleResult();
    }
}
