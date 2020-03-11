CREATE TABLE reg_cedula_citacion_con_jur (
	id int IDENTITY(1,1) NOT NULL,
	id_registro int NOT NULL,
	id_queja int NOT NULL,
	id_tipo_registro int NOT NULL,
	id_audiencia int NOT NULL,
	codigo varchar(30)   NULL,
	version varchar(10)   NULL,
	codigo_citacion varchar(30)   NULL,
	nombre_consumidor varchar(600)   NULL,
	direccion_consumidor varchar(200)   NULL,
	zona_consumidor varchar(10)   NULL,
	dpto_consumidor_muni varchar(200)   NULL,
	telefonos_consumidor varchar(200)   NULL,
	direccion_sede varchar(200)   NULL,
	dpto_sede varchar(100)   NULL,
	muni_sede varchar(100)   NULL,
	fecha_cita datetime NULL,
	no_audiencia varchar(50)  NULL,
	nombre_proveedor varchar(600)   NULL,
	fecha_creacion datetime NULL,
	creado_por int NULL,
	anio_queja int NULL,
	quejanumero int NULL,
	correlativo varchar(30)   NULL,
	CONSTRAINT PK_reg_cedula_citacion_con_jur PRIMARY KEY (id),
	CONSTRAINT FK_reg_cedula_citacion_con_jur_diaco_cat_tipo_registro FOREIGN KEY (id_tipo_registro) REFERENCES diaco_cat_tipo_registro(id_tipo_registro),
	CONSTRAINT FK_reg_cedula_citacion_con_jur_diaco_audiencia FOREIGN KEY (id_audiencia) REFERENCES diaco_audiencia(id_audiencia),
	CONSTRAINT FK_reg_cedula_citacion_con_jur_diaco_queja FOREIGN KEY (id_queja) REFERENCES diaco_queja(id_queja),
	CONSTRAINT FK_reg_cedula_citacion_con_jur_diaco_registro FOREIGN KEY (id_registro) REFERENCES diaco_registro(id_registro),
	CONSTRAINT FK_reg_cedula_citacion_con_jur_diaco_usuario FOREIGN KEY (creado_por) REFERENCES diaco_usuario(id_usuario)
);
