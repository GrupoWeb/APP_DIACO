CREATE TABLE reg_cedula_notificacion_res_juridico (
	id int IDENTITY(1,1) NOT NULL,
	id_registro int NOT NULL,
	id_queja int NOT NULL,
	id_resultado_resolucion int,
	anio   int,
	es_CP varchar(1),
	es_resultado_resolucion varchar(25),
	id_tipo_registro int NOT NULL,
	codigo varchar(30)  NULL,
	telefono varchar(150) null,
	municipio  varchar(100),
	departamento varchar(100),
	direccion    varchar(150),
	notifico_a   varchar(150),
	fecha_resolucion datetime null,
	usuario_creacion int,
	version varchar(30)  NULL,
	quejanumero int NULL,
	fecha_creacion datetime NULL,
	creado_por int NOT NULL,
	correlativo varchar(30)  NULL,
	CONSTRAINT PK_reg_cedula_notificacion_res_juridico PRIMARY KEY (id),
	CONSTRAINT FK_reg_cedula_notificacion_res_juridico FOREIGN KEY (id_tipo_registro) REFERENCES diaco_cat_tipo_registro(id_tipo_registro),
	CONSTRAINT FK_reg_cedula_notificacion_res_juridico_diaco_queja FOREIGN KEY (id_queja) REFERENCES diaco_queja(id_queja),
	CONSTRAINT FK_reg_cedula_notificacion_res_juridico_diaco_registro FOREIGN KEY (id_registro) REFERENCES diaco_registro(id_registro),
	CONSTRAINT FK_reg_cedula_notificacion_res_juridico_diaco_usuario FOREIGN KEY (creado_por) REFERENCES diaco_usuario(id_usuario)
);
