/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package gt.gob.mineco.diaco.model;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author julio
 */
@Entity
@Table(name = "reg_resolucion_visita_campo", catalog = "diacoDB", schema = "dbo")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "TipoReg_ResolucionVisitaCampo.findAll", query = "SELECT t FROM TipoReg_ResolucionVisitaCampo t")
    , @NamedQuery(name = "TipoReg_ResolucionVisitaCampo.findById", query = "SELECT t FROM TipoReg_ResolucionVisitaCampo t WHERE t.id = :id")
    , @NamedQuery(name = "TipoReg_ResolucionVisitaCampo.findByCodigo", query = "SELECT t FROM TipoReg_ResolucionVisitaCampo t WHERE t.codigo = :codigo")
    , @NamedQuery(name = "TipoReg_ResolucionVisitaCampo.findByVersion", query = "SELECT t FROM TipoReg_ResolucionVisitaCampo t WHERE t.version = :version")
    , @NamedQuery(name = "TipoReg_ResolucionVisitaCampo.findByAnioQueja", query = "SELECT t FROM TipoReg_ResolucionVisitaCampo t WHERE t.anioQueja = :anioQueja")
    , @NamedQuery(name = "TipoReg_ResolucionVisitaCampo.findByQuejanumero", query = "SELECT t FROM TipoReg_ResolucionVisitaCampo t WHERE t.quejanumero = :quejanumero")
    , @NamedQuery(name = "TipoReg_ResolucionVisitaCampo.findByFechaCreacion", query = "SELECT t FROM TipoReg_ResolucionVisitaCampo t WHERE t.fechaCreacion = :fechaCreacion")
    , @NamedQuery(name = "TipoReg_ResolucionVisitaCampo.findByNombreConsumidor", query = "SELECT t FROM TipoReg_ResolucionVisitaCampo t WHERE t.nombreConsumidor = :nombreConsumidor")
    , @NamedQuery(name = "TipoReg_ResolucionVisitaCampo.findByNombreProveedor", query = "SELECT t FROM TipoReg_ResolucionVisitaCampo t WHERE t.nombreProveedor = :nombreProveedor")
    , @NamedQuery(name = "TipoReg_ResolucionVisitaCampo.findByIdTipoRegistro", query = "SELECT t FROM TipoReg_ResolucionVisitaCampo t WHERE t.idTipoRegistro = :idTipoRegistro")
    , @NamedQuery(name = "TipoReg_ResolucionVisitaCampo.findByIdQueja", query = "SELECT t FROM TipoReg_ResolucionVisitaCampo t WHERE t.idQueja = :idQueja")
    , @NamedQuery(name = "TipoReg_ResolucionVisitaCampo.findByIdRegistro", query = "SELECT t FROM TipoReg_ResolucionVisitaCampo t WHERE t.idRegistro = :idRegistro")
    , @NamedQuery(name = "TipoReg_ResolucionVisitaCampo.findByCreadoPor", query = "SELECT t FROM TipoReg_ResolucionVisitaCampo t WHERE t.creadoPor = :creadoPor")})
public class TipoReg_ResolucionVisitaCampo implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;
    @Size(max = 30)
    @Column(name = "codigo")
    private String codigo;
    @Size(max = 30)
    @Column(name = "version")
    private String version;
    @Column(name = "anio_queja")
    private Integer anioQueja;
    @Column(name = "quejanumero")
    private Integer quejanumero;
    @Column(name = "fecha_creacion")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaCreacion;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 600)
    @Column(name = "nombre_consumidor")
    private String nombreConsumidor;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 600)
    @Column(name = "nombre_proveedor")
    private String nombreProveedor;
    @Basic(optional = false)
    @NotNull
    @Column(name = "id_tipo_registro")
    private int idTipoRegistro;
    @Basic(optional = false)
    @NotNull
    @Column(name = "id_queja")
    private int idQueja;
    @Basic(optional = false)
    @NotNull
    @Column(name = "id_registro")
    private int idRegistro;
    @Basic(optional = false)
    @NotNull
    @Column(name = "creado_por")
    private int creadoPor;

    public TipoReg_ResolucionVisitaCampo() {
    }

    public TipoReg_ResolucionVisitaCampo(Integer id) {
        this.id = id;
    }

    public TipoReg_ResolucionVisitaCampo(Integer id, String nombreConsumidor, String nombreProveedor, int idTipoRegistro, int idQueja, int idRegistro, int creadoPor) {
        this.id = id;
        this.nombreConsumidor = nombreConsumidor;
        this.nombreProveedor = nombreProveedor;
        this.idTipoRegistro = idTipoRegistro;
        this.idQueja = idQueja;
        this.idRegistro = idRegistro;
        this.creadoPor = creadoPor;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }

    public Integer getAnioQueja() {
        return anioQueja;
    }

    public void setAnioQueja(Integer anioQueja) {
        this.anioQueja = anioQueja;
    }

    public Integer getQuejanumero() {
        return quejanumero;
    }

    public void setQuejanumero(Integer quejanumero) {
        this.quejanumero = quejanumero;
    }

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public String getNombreConsumidor() {
        return nombreConsumidor;
    }

    public void setNombreConsumidor(String nombreConsumidor) {
        this.nombreConsumidor = nombreConsumidor;
    }

    public String getNombreProveedor() {
        return nombreProveedor;
    }

    public void setNombreProveedor(String nombreProveedor) {
        this.nombreProveedor = nombreProveedor;
    }

    public int getIdTipoRegistro() {
        return idTipoRegistro;
    }

    public void setIdTipoRegistro(int idTipoRegistro) {
        this.idTipoRegistro = idTipoRegistro;
    }

    public int getIdQueja() {
        return idQueja;
    }

    public void setIdQueja(int idQueja) {
        this.idQueja = idQueja;
    }

    public int getIdRegistro() {
        return idRegistro;
    }

    public void setIdRegistro(int idRegistro) {
        this.idRegistro = idRegistro;
    }

    public int getCreadoPor() {
        return creadoPor;
    }

    public void setCreadoPor(int creadoPor) {
        this.creadoPor = creadoPor;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof TipoReg_ResolucionVisitaCampo)) {
            return false;
        }
        TipoReg_ResolucionVisitaCampo other = (TipoReg_ResolucionVisitaCampo) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "gt.gob.mineco.diaco.model.TipoReg_ResolucionVisitaCampo[ id=" + id + " ]";
    }
    
}

