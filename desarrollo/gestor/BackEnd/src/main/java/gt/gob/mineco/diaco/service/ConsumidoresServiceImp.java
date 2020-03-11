package gt.gob.mineco.diaco.service;

import java.sql.Timestamp;
import java.util.Date;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.persistence.NoResultException;

import gt.gob.mineco.diaco.dao.ConsumidorRepository;
import gt.gob.mineco.diaco.dao.DepartamentoRepository;
import gt.gob.mineco.diaco.dao.MunicipioRepository;
import gt.gob.mineco.diaco.dao.PaisRepository;
import gt.gob.mineco.diaco.dao.SedeRepository;
import gt.gob.mineco.diaco.model.Departamento;
import gt.gob.mineco.diaco.model.DiacoConsumidor;
import gt.gob.mineco.diaco.model.DiacoPais;
import gt.gob.mineco.diaco.model.DiacoSede;
import gt.gob.mineco.diaco.model.Municipio;
import gt.gob.mineco.diaco.model.TipoEmail;
import gt.gob.mineco.diaco.model.TipoTelefono;
import java.util.List;

@Stateless
public class ConsumidoresServiceImp {

    @Inject
    ConsumidorRepository consumidorDao;

    @Inject
    PaisRepository paisDao;

    @Inject
    DepartamentoRepository departamentoDao;

    @Inject
    MunicipioRepository municipioDao;

    @Inject
    SedeRepository sedeDao;

    public DiacoConsumidor saveConsumidor(DiacoConsumidor consumidor) {
        // asociar pais
        DiacoPais pais = paisDao.findById(consumidor.getNacionalidad());
        consumidor.setPais(pais);
        // asociar departamento
        Departamento departamento = departamentoDao.findById(consumidor.getCodigoDepartamento());
        consumidor.setDepartamento(departamento);
        // asociar municipio
        Municipio municipio = municipioDao.findById(consumidor.getCodigoMunicipio());
        consumidor.setMunicipio(municipio);
        // asociar sede
        DiacoSede sede = sedeDao.findById(consumidor.getSedeDiacoCercana());
        consumidor.setSede(sede);
        consumidor.setFechaAdicion(new Timestamp(new Date().getTime()));
        return consumidorDao.save(consumidor);
    }

    public DiacoConsumidor getConsumidorByDocumentoIdentificacion(String documentoIdentificacion) {
        try {
            return consumidorDao.findByDocumentoIdentificacion(documentoIdentificacion);
        } catch (NoResultException ex) {
            return null;
        }
    }

    public TipoTelefono findTelefonoById(Integer id) {
        return consumidorDao.findTelefonoById(id);
    }

    public TipoEmail findCorreoById(Integer id) {
        return consumidorDao.findCorreoById(id);
    }
    
    public DiacoConsumidor findConsumidorById(Integer id) {
        return this.consumidorDao.findById(id);
    }

    public  List<TipoTelefono> findTelefonosById(Integer id) {
        return consumidorDao.findTelefonosById(id);
    }

    public List<TipoEmail> findCorreosById(Integer  id) {
        return consumidorDao.findCorreosById(id);
    }

}
