package gt.gob.mineco.diaco.service;

import gt.gob.mineco.diaco.dao.CalificacionRepository;
import java.sql.Timestamp;
import java.util.Date;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.persistence.NoResultException;

import gt.gob.mineco.diaco.dao.DepartamentoRepository;
import gt.gob.mineco.diaco.dao.MunicipioRepository;
import gt.gob.mineco.diaco.dao.ProveedorRepository;
import gt.gob.mineco.diaco.dto.CalificacionProveedorDto;
import gt.gob.mineco.diaco.dto.ProveedorDto;
import gt.gob.mineco.diaco.model.Departamento;
import gt.gob.mineco.diaco.model.DiacoCalificacionUsuarioProv;
import gt.gob.mineco.diaco.model.DiacoCatalogoCatagoriaCalificacion;
import gt.gob.mineco.diaco.model.DiacoProveedor;
import gt.gob.mineco.diaco.model.DiacoPtsGeneralCalifProv;
import gt.gob.mineco.diaco.model.Municipio;
import gt.gob.mineco.diaco.util.FormCalificacionUsuario;
import gt.gob.mineco.diaco.model.TipoEmail;
import gt.gob.mineco.diaco.model.TipoTelefono;
import java.util.List;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.naming.InitialContext;
import javax.transaction.UserTransaction;

@Stateless
@TransactionManagement(TransactionManagementType.BEAN)
public class ProveedoresServiceImp {

    @Inject
    ProveedorRepository proveedorDao;

    @Inject
    DepartamentoRepository departamentoDao;

    @Inject
    MunicipioRepository municipioDao;

    @Inject
    CalificacionRepository calificacionDao;

    public DiacoProveedor saveProveedor(DiacoProveedor proveedor) {
        // asociar departamento
        Departamento departamento = departamentoDao.findById(proveedor.getCodigoDepartamento());
        proveedor.setDepartamento(departamento);
        // asociar municipio
        Municipio municipio = municipioDao.findById(proveedor.getCodigoMunicipio());
        proveedor.setMunicipio(municipio);
        proveedor.setFechaAdicion(new Timestamp(new Date().getTime()));
        return proveedorDao.save(proveedor);
    }

    public DiacoProveedor getProveedorByNit(String nit) {
        try {
            DiacoProveedor result = proveedorDao.findByNit(nit);
            if (result != null) {
                // hace las consultas a quejas para determinar el valor.
                Long totquejas = proveedorDao.findQuejasProv(result.getIdProveedor());
                Long totquejasval = proveedorDao.findQuejasValProv(result.getIdProveedor());
                result.setQuejas_validas(totquejas - totquejasval);
                result.setQuejas_validas_resuelta(totquejasval);
            }
            return result;
        } catch (NoResultException ex) {
            return null;
        }
    }

    public DiacoProveedor getProveedorById(Integer id) {
        return this.proveedorDao.findById(id);
    }

    public List<ProveedorDto> getProveedorByNitNombre(String nit, String nombre) {
        List<ProveedorDto> result = this.proveedorDao.getProveedorByNitNombre(nit, nombre);
        /*for (ProveedorDto pd : result) {
                if (pd.getNombre().toUpperCase().equals("PENDIENTE")) {
                    result.remove(pd);
                }
            }*/
        return result;
    }

        public TipoTelefono findTelefonoById(Integer id) {
        return proveedorDao.findTelefonoById(id);
    }

    public TipoEmail findCorreoById(Integer id) {
        return proveedorDao.findCorreoById(id);
    }
    

public DiacoProveedor findConsumidorById(Integer id) {
        return this.proveedorDao.findById(id);
    }

    public  List<TipoTelefono> findTelefonosById(Integer id) {
        return proveedorDao.findTelefonosById(id);
    }

    public List<TipoEmail> findCorreosById(Integer  id) {
        return proveedorDao.findCorreosById(id);
    }


    public DiacoProveedor getProveedorAndCalifByNit(String nit, String pIdInstalacionMobil) {
        try {
            DiacoProveedor result = proveedorDao.findByNit(nit);
            if (result != null) {
                // hace las consultas a quejas para determinar el valor.
                Long totquejas = proveedorDao.findQuejasProv(result.getIdProveedor());
                Long totquejasval = proveedorDao.findQuejasValProv(result.getIdProveedor());
                result.setQuejas_validas(totquejas - totquejasval);
                result.setQuejas_validas_resuelta(totquejasval);
            }
            //XHGCJDJE2342
            if (result != null) {
              /*  List<DiacoCalificacionUsuarioProv> diacoCalificacionUsuarioProv = calificacionDao.findCalificacionUsuarioProv(result.getIdProveedor(), pIdInstalacionMobil);
                result.setDiacoCalificacionUsuarioProv(diacoCalificacionUsuarioProv);

                List<DiacoPtsGeneralCalifProv> diacoPtsGeneralCalifProv = calificacionDao.findCalificacionGeneralProv(result.getIdProveedor());
                result.setDiacoPtsGeneralCalifProv(diacoPtsGeneralCalifProv);*/
                List<CalificacionProveedorDto> calificacionProveedorDto=calificacionDao.findCalificacionesUserGeneral(result.getIdProveedor(), pIdInstalacionMobil);
                result.setDiacoCalificacionProveedorDto(calificacionProveedorDto);
              
            }
            return result;
        } catch (NoResultException ex) {
            return null;
        }
    }

    public DiacoCalificacionUsuarioProv saveCalificacionProveedor(FormCalificacionUsuario pCalificacion) {
        UserTransaction transaction = null;
        DiacoCalificacionUsuarioProv calificacionModel ;
        DiacoCalificacionUsuarioProv result = null;
        try {
            transaction = (UserTransaction) new InitialContext().lookup("java:comp/UserTransaction");
            transaction.begin();
            DiacoProveedor proveedorModel = proveedorDao.findByNit(pCalificacion.getNit_proveedor());
            DiacoCatalogoCatagoriaCalificacion categoriaCalificacion = new DiacoCatalogoCatagoriaCalificacion(pCalificacion.getIdCategoriaCalificacion());
            calificacionModel = calificacionDao.findCalificacionUsuarioProvCategoria(proveedorModel.getIdProveedor(), pCalificacion.getId_instalacion(), categoriaCalificacion);

            if(calificacionModel!=null)
            { //ya existe la calificacion , solo se actualiza
                 calificacionModel.setCalificacion(pCalificacion.getCalificacion());
                 calificacionModel.setFecha_calificacion(new Date());
                 calificacionDao.saveCalificacionUsuario(calificacionModel);
            } else
            
            {  //Es una calificacion nueva
              calificacionModel  = new DiacoCalificacionUsuarioProv();
            calificacionModel.setCalificacion(pCalificacion.getCalificacion());
            calificacionModel.setIdInstalacionMobil(pCalificacion.getId_instalacion());

            
            calificacionModel.setIdCategoriaCalificacion(categoriaCalificacion);

            calificacionModel.setIdProveedor(proveedorModel.getIdProveedor());
            calificacionModel.setFecha_calificacion(new Date());

            result = calificacionDao.saveCalificacionUsuario(calificacionModel);
            }
            transaction.commit();

        } catch (Exception e) {
            try {
                e.printStackTrace();
                transaction.rollback();
            } catch (Exception ec) {
                ec.printStackTrace();
            }

        }

        return result;

    }

}
