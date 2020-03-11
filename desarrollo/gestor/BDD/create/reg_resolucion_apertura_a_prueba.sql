CREATE TABLE reg_resolucion_apertura_a_prueba (
	id int IDENTITY(1,1) NOT NULL,
	id_registro int NOT NULL,
	id_queja int NOT NULL,
	id_resultado_audiencia  int NOT NULL,
	id_tipo_registro int NOT NULL,
	codigo varchar(30)   NULL,
	version varchar(30)   NULL,
	quejanumero int NULL,
	asignado_a       varchar(100),
	consumidor       varchar(100),
	proveedor      varchar(100),
	fecha_resolucion_apertura datetime NULL,
	fecha_creacion datetime NULL,
	creado_por int NOT NULL,
	correlativo varchar(30)  NULL,
	CONSTRAINT PK_reg_resolucion_apertura_a_prueba PRIMARY KEY (id),
	CONSTRAINT FK_reg_resolucion_apertura_a_prueba FOREIGN KEY (id_tipo_registro) REFERENCES diaco_cat_tipo_registro(id_tipo_registro),
	CONSTRAINT FK_reg_resolucion_apertura_a_prueba_diaco_queja FOREIGN KEY (id_queja) REFERENCES diaco_queja(id_queja),
	CONSTRAINT FK_reg_resolucion_apertura_a_prueba_diaco_registro FOREIGN KEY (id_registro) REFERENCES diaco_registro(id_registro),
	CONSTRAINT FK_reg_resolucion_apertura_a_prueba_diaco_usuario FOREIGN KEY (creado_por) REFERENCES diaco_usuario(id_usuario),
	CONSTRAINT FK_reg_resolucion_apertura_a_prueba_resultado_audiencia FOREIGN KEY (id_resultado_audiencia) REFERENCES diaco_res_audiencia(id)
);
