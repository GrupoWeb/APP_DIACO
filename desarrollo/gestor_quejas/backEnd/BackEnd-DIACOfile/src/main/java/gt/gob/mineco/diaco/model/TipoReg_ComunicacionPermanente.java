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
@Table(name = "reg_comunicacion_permanente")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "TipoReg_ComunicacionPermanente.findAll", query = "SELECT t FROM TipoReg_ComunicacionPermanente t")
    , @NamedQuery(name = "TipoReg_ComunicacionPermanente.findById", query = "SELECT t FROM TipoReg_ComunicacionPermanente t WHERE t.id = :id")
    , @NamedQuery(name = "TipoReg_ComunicacionPermanente.findByCodigo", query = "SELECT t FROM TipoReg_ComunicacionPermanente t WHERE t.codigo = :codigo")
    , @NamedQuery(name = "TipoReg_ComunicacionPermanente.findByFechaPresentacion", query = "SELECT t FROM TipoReg_ComunicacionPermanente t WHERE t.fechaPresentacion = :fechaPresentacion")
    , @NamedQuery(name = "TipoReg_ComunicacionPermanente.findByFechaAsignacion", query = "SELECT t FROM TipoReg_ComunicacionPermanente t WHERE t.fechaAsignacion = :fechaAsignacion")
    , @NamedQuery(name = "TipoReg_ComunicacionPermanente.findByResponsable", query = "SELECT t FROM TipoReg_ComunicacionPermanente t WHERE t.responsable = :responsable")
    , @NamedQuery(name = "TipoReg_ComunicacionPermanente.findByViaComunicacion", query = "SELECT t FROM TipoReg_ComunicacionPermanente t WHERE t.viaComunicacion = :viaComunicacion")
    , @NamedQuery(name = "TipoReg_ComunicacionPermanente.findByConNombre", query = "SELECT t FROM TipoReg_ComunicacionPermanente t WHERE t.conNombre = :conNombre")
    , @NamedQuery(name = "TipoReg_ComunicacionPermanente.findByConTelefono", query = "SELECT t FROM TipoReg_ComunicacionPermanente t WHERE t.conTelefono = :conTelefono")
    , @NamedQuery(name = "TipoReg_ComunicacionPermanente.findByConEmail", query = "SELECT t FROM TipoReg_ComunicacionPermanente t WHERE t.conEmail = :conEmail")
    , @NamedQuery(name = "TipoReg_ComunicacionPermanente.findByEstatus", query = "SELECT t FROM TipoReg_ComunicacionPermanente t WHERE t.estatus = :estatus")
    , @NamedQuery(name = "TipoReg_ComunicacionPermanente.findByFechaNotificacion", query = "SELECT t FROM TipoReg_ComunicacionPermanente t WHERE t.fechaNotificacion = :fechaNotificacion")
    , @NamedQuery(name = "TipoReg_ComunicacionPermanente.findByObservaciones", query = "SELECT t FROM TipoReg_ComunicacionPermanente t WHERE t.observaciones = :observaciones")
    , @NamedQuery(name = "TipoReg_ComunicacionPermanente.findByFechaCreacion", query = "SELECT t FROM TipoReg_ComunicacionPermanente t WHERE t.fechaCreacion = :fechaCreacion")
    , @NamedQuery(name = "TipoReg_ComunicacionPermanente.findByAnioQueja", query = "SELECT t FROM TipoReg_ComunicacionPermanente t WHERE t.anioQueja = :anioQueja")
    , @NamedQuery(name = "TipoReg_ComunicacionPermanente.findByQuejanumero", query = "SELECT t FROM TipoReg_ComunicacionPermanente t WHERE t.quejanumero = :quejanumero")
    , @NamedQuery(name = "TipoReg_ComunicacionPermanente.findByIdTipoRegistro", query = "SELECT t FROM TipoReg_ComunicacionPermanente t WHERE t.idTipoRegistro = :idTipoRegistro")
    , @NamedQuery(name = "TipoReg_ComunicacionPermanente.findByIdQueja", query = "SELECT t FROM TipoReg_ComunicacionPermanente t WHERE t.idQueja = :idQueja")
    , @NamedQuery(name = "TipoReg_ComunicacionPermanente.findByIdRegistro", query = "SELECT t FROM TipoReg_ComunicacionPermanente t WHERE t.idRegistro = :idRegistro")
    , @NamedQuery(name = "TipoReg_ComunicacionPermanente.findByCreadoPor", query = "SELECT t FROM TipoReg_ComunicacionPermanente t WHERE t.creadoPor = :creadoPor")})
public class TipoReg_ComunicacionPermanente implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;
    @Size(max = 30)
    @Column(name = "codigo")
    private String codigo;
    @Column(name = "fecha_presentacion")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaPresentacion;
    @Column(name = "fecha_asignacion")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaAsignacion;
    @Size(max = 500)
    @Column(name = "responsable")
    private String responsable;
    @Size(max = 100)
    @Column(name = "via_comunicacion")
    private String viaComunicacion;
    @Size(max = 1000)
    @Column(name = "con_nombre")
    private String conNombre;
    @Size(max = 1000)
    @Column(name = "con_telefono")
    private String conTelefono;
    @Size(max = 1000)
    @Column(name = "con_email")
    private String conEmail;
    @Size(max = 1000)
    @Column(name = "estatus")
    private String estatus;
    @Column(name = "fecha_notificacion")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaNotificacion;
    @Size(max = 1000)
    @Column(name = "observaciones")
    private String observaciones;
    @Column(name = "fecha_creacion")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaCreacion;
    @Column(name = "anio_queja")
    private Integer anioQueja;
    @Column(name = "quejanumero")
    private Integer quejanumero;
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

    public TipoReg_ComunicacionPermanente() {
    }

    public TipoReg_ComunicacionPermanente(Integer id) {
        this.id = id;
    }

    public TipoReg_ComunicacionPermanente(Integer id, int idTipoRegistro, int idQueja, int idRegistro, int creadoPor) {
        this.id = id;
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

    public Date getFechaPresentacion() {
        return fechaPresentacion;
    }

    public void setFechaPresentacion(Date fechaPresentacion) {
        this.fechaPresentacion = fechaPresentacion;
    }

    public Date getFechaAsignacion() {
        return fechaAsignacion;
    }

    public void setFechaAsignacion(Date fechaAsignacion) {
        this.fechaAsignacion = fechaAsignacion;
    }

    public String getResponsable() {
        return responsable;
    }

    public void setResponsable(String responsable) {
        this.responsable = responsable;
    }

    public String getViaComunicacion() {
        return viaComunicacion;
    }

    public void setViaComunicacion(String viaComunicacion) {
        this.viaComunicacion = viaComunicacion;
    }

    public String getConNombre() {
        return conNombre;
    }

    public void setConNombre(String conNombre) {
        this.conNombre = conNombre;
    }

    public String getConTelefono() {
        return conTelefono;
    }

    public void setConTelefono(String conTelefono) {
        this.conTelefono = conTelefono;
    }

    public String getConEmail() {
        return conEmail;
    }

    public void setConEmail(String conEmail) {
        this.conEmail = conEmail;
    }

    public String getEstatus() {
        return estatus;
    }

    public void setEstatus(String estatus) {
        this.estatus = estatus;
    }

    public Date getFechaNotificacion() {
        return fechaNotificacion;
    }

    public void setFechaNotificacion(Date fechaNotificacion) {
        this.fechaNotificacion = fechaNotificacion;
    }

    public String getObservaciones() {
        return observaciones;
    }

    public void setObservaciones(String observaciones) {
        this.observaciones = observaciones;
    }

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
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
        if (!(object instanceof TipoReg_ComunicacionPermanente)) {
            return false;
        }
        TipoReg_ComunicacionPermanente other = (TipoReg_ComunicacionPermanente) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "gt.gob.mineco.diaco.model.TIpo_RegComunicacionPermanente[ id=" + id + " ]";
    }
    
}
