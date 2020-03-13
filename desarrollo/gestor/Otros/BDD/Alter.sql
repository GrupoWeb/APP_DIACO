ALTER TABLE diaco.dbo.[diaco_queja] ADD fecha_queja datetime NULL;

ALTER TABLE diaco.dbo.diaco_comunicacion_consumidor
    ADD via INTEGER,
    FOREIGN KEY(via) REFERENCES diaco.[dbo].[diaco_catalogo](id_catalogo);

ALTER TABLE diaco.dbo.diaco_cat_tipo_registro
    ADD flujo_id INTEGER,
    FOREIGN KEY(flujo_id) REFERENCES diaco.[dbo].[diaco_flujo](id);

ALTER TABLE diaco.dbo.[diaco_estado_queja]
    ADD flujo_id INTEGER,
    FOREIGN KEY(flujo_id) REFERENCES diaco.[dbo].[diaco_flujo](id);

ALTER TABLE diaco.dbo.diaco_paso_queja
    ADD id_tipo_registro INTEGER,
    FOREIGN KEY(id_tipo_registro) REFERENCES diaco.dbo.diaco_cat_tipo_registro(id_tipo_registro);

ALTER TABLE diaco.dbo.[diaco_catalogo] ADD estado varchar(1) NULL;

ALTER TABLE diaco.dbo.diaco_paso_queja ADD operacion varchar(1) NULL;

ALTER TABLE diaco.dbo.diaco_consumidor drop column nombre_consumidor;
ALTER TABLE diaco.dbo.diaco_consumidor ADD nombre1 varchar(100) NULL;
ALTER TABLE diaco.dbo.diaco_consumidor ADD nombre2 varchar(100) NULL;
ALTER TABLE diaco.dbo.diaco_consumidor ADD nombre3 varchar(100) NULL;
ALTER TABLE diaco.dbo.diaco_consumidor ADD apellido1 varchar(100) NULL;
ALTER TABLE diaco.dbo.diaco_consumidor ADD apellido2 varchar(100) NULL;
ALTER TABLE diaco.dbo.diaco_consumidor ADD apellido_casada varchar(100) NULL;
ALTER TABLE diaco.dbo.diaco_consumidor drop column tipo_consumidor;
ALTER TABLE diaco.dbo.diaco_consumidor add tipo_consumidor INTEGER NULL;

ALTER TABLE diaco.dbo.diaco_telefono ADD usuario_modifico INTEGER NULL,
    FOREIGN KEY(usuario_modifico) REFERENCES diaco.dbo.diaco_usuario(id_usuario);
ALTER TABLE diaco.dbo.diaco_telefono ADD fecha_modificacion datetime NULL;
ALTER TABLE diaco.dbo.diaco_telefono drop column tipo_telefono;
ALTER TABLE diaco.dbo.diaco_telefono ADD tipo_telefono INTEGER NULL,
 FOREIGN KEY(tipo_telefono) REFERENCES diaco.dbo.diaco_catalogo(id_catalogo);
ALTER TABLE diaco.dbo.diaco_telefono drop column fecha_adicion;
ALTER TABLE diaco.dbo.diaco_telefono add fecha_adicion datetime NULL;

ALTER TABLE diaco.dbo.diaco_queja ADD motivo varchar(200) NULL;
ALTER TABLE diaco.dbo.diaco_queja ADD id_departamento INTEGER NULL,
 FOREIGN KEY(id_departamento) REFERENCES diaco.dbo.departamento(codigo_departamento);
ALTER TABLE diaco.dbo.diaco_queja ADD id_municipio INTEGER NULL,
 FOREIGN KEY(id_municipio) REFERENCES diaco.dbo.municipio(codigo_municipio);

ALTER TABLE diaco.dbo.[diaco_imagenes_queja] drop column usuario_adiciono;
ALTER TABLE diaco.dbo.[diaco_imagenes_queja] add usuario_adiciono INTEGER NULL;
ALTER TABLE diaco.dbo.[diaco_imagenes_queja] ADD id_queja INTEGER,
    FOREIGN KEY(id_queja) REFERENCES diaco.[dbo].diaco_queja(id_queja);
ALTER TABLE diaco.dbo.[diaco_imagenes_queja] ADD id_flujo INTEGER,
    FOREIGN KEY(id_flujo) REFERENCES diaco.[dbo].diaco_flujo(id);
ALTER TABLE diaco.dbo.[diaco_imagenes_queja] ADD id_categoria_imagen INTEGER,
    FOREIGN KEY(id_categoria_imagen) REFERENCES diaco.[dbo].diaco_categoria_imagen(id);
ALTER TABLE diaco.dbo.[diaco_imagenes_queja] ADD id_repositorio INTEGER,
    FOREIGN KEY(id_repositorio) REFERENCES diaco.[dbo].diaco_repositorio(id);

ALTER TABLE diaco.dbo.[diaco_tipo_imagen] ADD habilitado varchar(1) NULL;

ALTER TABLE diaco.[dbo].[diaco_verif_conciliacion_previa] ADD notas varchar(1000) NULL;
ALTER TABLE diaco.[dbo].[diaco_verif_conciliacion_previa] ADD resolucion INTEGER,
    FOREIGN KEY(resolucion) REFERENCES diaco.[dbo].[diaco_catalogo](id_catalogo);

ALTER TABLE diaco.[dbo].[diaco_verif_conciliacion_previa] ADD respuesta_diaco INTEGER,
    FOREIGN KEY(respuesta_diaco) REFERENCES diaco.[dbo].[diaco_catalogo](id_catalogo);

ALTER TABLE diaco.[dbo].[diaco_queja] drop column usuario_asignado;
ALTER TABLE diaco.[dbo].[diaco_queja] ADD usuario_asignado INTEGER,
    FOREIGN KEY(usuario_asignado) REFERENCES diaco.[dbo].[diaco_usuario](id_usuario);
ALTER TABLE diaco.[dbo].[diaco_queja] ADD id_diaco_sede INTEGER,
    FOREIGN KEY(id_diaco_sede) REFERENCES diaco.[dbo].[diaco_sede](id_diaco_sede);

ALTER TABLE diaco.[dbo].[diaco_queja_registro] ADD id_detalle INTEGER NULL;

ALTER TABLE diaco.[dbo].[diaco_audiencia] drop column fecha_programada;
ALTER TABLE diaco.[dbo].[diaco_audiencia] ADD ced_cita_consumidor varchar(20) NULL;
ALTER TABLE diaco.[dbo].[diaco_audiencia] ADD ced_cita_proveedor varchar(20) NULL;
ALTER TABLE diaco.[dbo].[diaco_audiencia] ADD ced_notif_consumidor varchar(20) NULL;
ALTER TABLE diaco.[dbo].[diaco_audiencia] ADD ced_notif_proveedor varchar(20) NULL;
ALTER TABLE diaco.[dbo].[diaco_audiencia] ALTER COLUMN es_primera_seg_audiencia INTEGER NULL;

ALTER TABLE diaco.[dbo].[diaco_paso_queja] ALTER COLUMN usuario_operacion INTEGER;

ALTER TABLE diaco.[dbo].[diaco_resultado_audiencia] ADD es_primera_seg_audiencia varchar(1) NULL;

ALTER TABLE diaco.[dbo].[diaco_registro] ADD version varchar(10) NULL;

ALTER TABLE diaco.[dbo].diaco_motivo_queja_finalizada ADD tipo varchar(1) NULL;
ALTER TABLE diaco.[dbo].diaco_motivo_queja_finalizada ADD estado varchar(1) NULL;

ALTER TABLE diaco.[dbo].diaco_queja_finalizada ADD id_motivo_queja_finalizada_categoria INTEGER,
    FOREIGN KEY(id_motivo_queja_finalizada_categoria) REFERENCES diaco.[dbo].diaco_motivo_queja_finalizada(id_motivo_queja_finalizada);
ALTER TABLE diaco.[dbo].diaco_queja_finalizada ALTER COLUMN monto_recuperado money NULL;

ALTER TABLE diaco.[dbo].diaco_motivo_poa ADD estado varchar(1) NULL;

ALTER TABLE diaco.dbo.diaco_queja ADD anio INTEGER NULL;
ALTER TABLE diaco.dbo.diaco_queja ADD no_queja INTEGER NULL;

ALTER TABLE diaco.dbo.[diaco_visita_campo] drop column hecha_por;
ALTER TABLE diaco.[dbo].[diaco_visita_campo] ADD hecha_por INTEGER,
    FOREIGN KEY(hecha_por) REFERENCES diaco.[dbo].[diaco_usuario](id_usuario);
ALTER TABLE diaco.[dbo].[diaco_visita_campo] ADD id_flujo INTEGER,
    FOREIGN KEY(id_flujo) REFERENCES diaco.[dbo].[diaco_flujo](id);

ALTER TABLE diaco.[dbo].[reg_cedula_citacion_con] ADD anio_queja INTEGER NULL;
ALTER TABLE diaco.[dbo].[reg_cedula_citacion_con] ADD quejanumero INTEGER NULL;
ALTER TABLE diaco.[dbo].[reg_cedula_citacion_pro] ADD anio_queja INTEGER NULL;
ALTER TABLE diaco.[dbo].[reg_cedula_citacion_pro] ADD quejanumero INTEGER NULL;
ALTER TABLE diaco.[dbo].[reg_cedula_notificacion_con] ADD anio_queja INTEGER NULL;
ALTER TABLE diaco.[dbo].[reg_cedula_notificacion_con] ADD quejanumero INTEGER NULL;
ALTER TABLE diaco.[dbo].[reg_cedula_notificacion_pro] ADD anio_queja INTEGER NULL;
ALTER TABLE diaco.[dbo].[reg_cedula_notificacion_pro] ADD quejanumero INTEGER NULL;
ALTER TABLE diaco.[dbo].[reg_comunicacion_permanente] ADD anio_queja INTEGER NULL;
ALTER TABLE diaco.[dbo].[reg_comunicacion_permanente] ADD quejanumero INTEGER NULL;
ALTER TABLE diaco.[dbo].[reg_ficha_queja] ADD anio_queja INTEGER NULL;
ALTER TABLE diaco.[dbo].[reg_ficha_queja] ADD quejanumero INTEGER NULL;
ALTER TABLE diaco.[dbo].[reg_formulario_queja] ADD anio_queja INTEGER NULL;
ALTER TABLE diaco.[dbo].[reg_formulario_queja] ADD quejanumero INTEGER NULL;

ALTER TABLE diaco.dbo.diaco_departamento_interno drop column usuario_adiciono;
ALTER TABLE diaco.[dbo].diaco_departamento_interno ADD usuario_adiciono INTEGER,
    FOREIGN KEY(usuario_adiciono) REFERENCES diaco.[dbo].[diaco_usuario](id_usuario);

