/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package gt.gob.mineco.diaco.model;

import com.google.gson.JsonObject;
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
@Table(name = "reg_res_archivo_conciliacion")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Tipo_RegResArchivoConciliacion.findAll", query = "SELECT r FROM Tipo_RegResArchivoConciliacion r")
    , @NamedQuery(name = "Tipo_RegResArchivoConciliacion.findById", query = "SELECT r FROM Tipo_RegResArchivoConciliacion r WHERE r.id = :id")
    , @NamedQuery(name = "Tipo_RegResArchivoConciliacion.findByIdCorrelativoConciliacion", query = "SELECT r FROM Tipo_RegResArchivoConciliacion r WHERE r.idCorrelativoConciliacion = :idCorrelativoConciliacion")
    , @NamedQuery(name = "Tipo_RegResArchivoConciliacion.findByFechaResConciliacion", query = "SELECT r FROM Tipo_RegResArchivoConciliacion r WHERE r.fechaResConciliacion = :fechaResConciliacion")
    , @NamedQuery(name = "Tipo_RegResArchivoConciliacion.findByNombreConsumidor", query = "SELECT r FROM Tipo_RegResArchivoConciliacion r WHERE r.nombreConsumidor = :nombreConsumidor")
    , @NamedQuery(name = "Tipo_RegResArchivoConciliacion.findByNombreProveedor", query = "SELECT r FROM Tipo_RegResArchivoConciliacion r WHERE r.nombreProveedor = :nombreProveedor")
    , @NamedQuery(name = "Tipo_RegResArchivoConciliacion.findByFechaCreacion", query = "SELECT r FROM Tipo_RegResArchivoConciliacion r WHERE r.fechaCreacion = :fechaCreacion")
    , @NamedQuery(name = "Tipo_RegResArchivoConciliacion.findByIdTipoRegistro", query = "SELECT r FROM Tipo_RegResArchivoConciliacion r WHERE r.idTipoRegistro = :idTipoRegistro")
    , @NamedQuery(name = "Tipo_RegResArchivoConciliacion.findByIdQueja", query = "SELECT r FROM Tipo_RegResArchivoConciliacion r WHERE r.idQueja = :idQueja")
    , @NamedQuery(name = "Tipo_RegResArchivoConciliacion.findByCreadoPor", query = "SELECT r FROM Tipo_RegResArchivoConciliacion r WHERE r.creadoPor = :creadoPor")})
public class Tipo_RegResArchivoConciliacion implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", precision = 0)
    private Integer id;
    @Basic(optional = false)
    @NotNull
    @Column(name = "id_correlativo_conciliacion")
    private int idCorrelativoConciliacion;
    @Column(name = "fecha_res_conciliacion")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaResConciliacion;
    @Size(max = 500)
    @Column(name = "nombre_consumidor")
    private String nombreConsumidor;
    @Size(max = 500)
    @Column(name = "nombre_proveedor")
    private String nombreProveedor;
    @Column(name = "fecha_creacion")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaCreacion;
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
    @Column(name = "creado_por")
    private int creadoPor;
    @Column(name = "no_queja")
    private String no_queja;
    

    public Tipo_RegResArchivoConciliacion() {
    }

    public Tipo_RegResArchivoConciliacion(Integer id) {
        this.id = id;
    }

    public Tipo_RegResArchivoConciliacion(Integer id, int idCorrelativoConciliacion, int idTipoRegistro, int idQueja, int creadoPor) {
        this.id = id;
        this.idCorrelativoConciliacion = idCorrelativoConciliacion;
        this.idTipoRegistro = idTipoRegistro;
        this.idQueja = idQueja;
        this.creadoPor = creadoPor;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public int getIdCorrelativoConciliacion() {
        return idCorrelativoConciliacion;
    }

    public void setIdCorrelativoConciliacion(int idCorrelativoConciliacion) {
        this.idCorrelativoConciliacion = idCorrelativoConciliacion;
    }

    public Date getFechaResConciliacion() {
        return fechaResConciliacion;
    }

    public void setFechaResConciliacion(Date fechaResConciliacion) {
        this.fechaResConciliacion = fechaResConciliacion;
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

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
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
        if (!(object instanceof Tipo_RegResArchivoConciliacion)) {
            return false;
        }
        Tipo_RegResArchivoConciliacion other = (Tipo_RegResArchivoConciliacion) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

   @Override
        public String toString() {
            JsonObject temp = new JsonObject();
            temp.addProperty("id",this.id);
            temp.addProperty("idCorrelativo",this.idCorrelativoConciliacion);
            temp.addProperty("idQueja",this.idQueja);
  
            return temp.toString()+",";
        }

    /**
     * @return the no_queja
     */
    public String getNo_queja() {
        return no_queja;
    }

    /**
     * @param no_queja the no_queja to set
     */
    public void setNo_queja(String no_queja) {
        this.no_queja = no_queja;
    }

}
