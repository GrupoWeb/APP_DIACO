CREATE TABLE reg_acta_juridico (
	id int IDENTITY(1,1) NOT NULL,
	id_correlativo_acta varchar(30)  NOT NULL,
	id_queja int NOT NULL,
	id_registro  int NOT NULL, 
	fecha_acta datetime NULL,
	fecha_creacion datetime NULL,
	creado_por int NOT NULL,
	CONSTRAINT PK_reg_acta_juridico PRIMARY KEY (id)
) ;


ALTER TABLE reg_acta_juridico ADD CONSTRAINT FK_reg_acta_juridico_diaco_queja FOREIGN KEY (id_queja) REFERENCES diaco_queja(id_queja);
ALTER TABLE reg_acta_juridico ADD CONSTRAINT FK_reg_acta_juridico_diaco_usuario FOREIGN KEY (creado_por) REFERENCES diaco_usuario(id_usuario);
ALTER TABLE reg_acta_juridico ADD CONSTRAINT FK_reg_acta_juridico_diaco_registro FOREIGN KEY (id_registro) REFERENCES diaco_registro(id_registro);


insert into diaco_registro(id_registro, nombre,prefijo,correlativo,creado,version,codigo_correlativo)
VALUES(30,'Acta Juridico','DIACO-AS-FO-06',0,GETDATE(),1.0,'DJ-A');
