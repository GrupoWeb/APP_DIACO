/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package gt.gob.mineco.diaco.util;

import java.io.Serializable;

/**
 *
 * @author julio
 */
public class FormComPermQueja implements Serializable {
     private Integer idQueja;
     private String status;
     private String observaciones;
     private String via;
     
     public FormComPermQueja()
     {
     }

    /**
     * @return the idQueja
     */
    public Integer getIdQueja() {
        return idQueja;
    }

    /**
     * @param idQueja the idQueja to set
     */
    public void setIdQueja(Integer idQueja) {
        this.idQueja = idQueja;
    }

    /**
     * @return the status
     */
    public String getStatus() {
        return status;
    }

    /**
     * @param status the status to set
     */
    public void setStatus(String status) {
        this.status = status;
    }

    /**
     * @return the observaciones
     */
    public String getObservaciones() {
        return observaciones;
    }

    /**
     * @param observaciones the observaciones to set
     */
    public void setObservaciones(String observaciones) {
        this.observaciones = observaciones;
    }

    /**
     * @return the via
     */
    public String getVia() {
        return via;
    }

    /**
     * @param via the via to set
     */
    public void setVia(String via) {
        this.via = via;
    }

    
}
