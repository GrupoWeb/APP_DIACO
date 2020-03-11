Insert into diaco.dbo.departamento values (1,'Alta Verapaz');
Insert into diaco.dbo.departamento values (2,'Baja Verapaz');
Insert into diaco.dbo.departamento values (3,'Chimaltenango');
Insert into diaco.dbo.departamento values (4,'Chiquimula');
Insert into diaco.dbo.departamento values (5,'Pet�n');
Insert into diaco.dbo.departamento values (6,'El Progreso');
Insert into diaco.dbo.departamento values (7,'Quich�');
Insert into diaco.dbo.departamento values (8,'Escuintla');
Insert into diaco.dbo.departamento values (9,'Guatemala');
Insert into diaco.dbo.departamento values (10,'Huehuetenango');
Insert into diaco.dbo.departamento values (11,'Izabal');
Insert into diaco.dbo.departamento values (12,'Jalapa');
Insert into diaco.dbo.departamento values (13,'Jutiapa');
Insert into diaco.dbo.departamento values (14,'Quetzaltenango');
Insert into diaco.dbo.departamento values (15,'Retalhuleu');
Insert into diaco.dbo.departamento values (16,'Sacatep�quez');
Insert into diaco.dbo.departamento values (17,'San Marcos');
Insert into diaco.dbo.departamento values (18,'Santa Rosa');
Insert into diaco.dbo.departamento values (19,'Solol�');
Insert into diaco.dbo.departamento values (20,'Suchitep�quez');
Insert into diaco.dbo.departamento values (21,'Totonicap�n');
Insert into diaco.dbo.departamento values (22,'Zacapa');

insert into diaco.dbo.diaco_paises values (1,'Guatemala', getdate());
insert into diaco.dbo.diaco_paises values (2,'El Salvador', getdate());
insert into diaco.dbo.diaco_paises values (3,'Honduras', getdate());

insert into diaco.dbo.municipio values (1,9,'Guatemala',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (2,9,'Santa Catarina Pinula',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (3,9,'San Jos� Pinula',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (4,9,'San Jos� del Golfo',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (5,9,'Palencia',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (6,9,'Chinautla',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (7,9,'San Pedro Ayampuc',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (8,9,'Mixco',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (9,9,'San Pedro Sacatep�quez',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (10,9,'San Juan Sacatep�quez',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (11,9,'San Raymundo',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (12,9,'Chuarrancho',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (13,9,'Fraijanes',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (14,9,'Amatitl�n',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (15,9,'Villa Nueva',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (16,9,'Villa Canales',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (17,9,'San Miguel Petapa',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (18,1,'Cob�n',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (19,1,'San Pedro Carch�',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (20,1,'San Juan Chamelco',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (21,1,'San Crist�bal Verapaz',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (22,1,'Tactic',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (23,1,'Tucur�',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (24,1,'Tamah�',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (25,1,'Panz�s',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (26,1,'Senah�',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (27,1,'Cahab�n',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (28,1,'Lanqu�n',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (29,1,'Chahal',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (30,1,'Fray Bartolom� de las Casas',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (31,1,'Chisec',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (32,1,'Santa Cruz Verapaz',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (33,1,'Santa Catalina La Tinta',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (34,1,'Raxruh�',getdate(),NULL,NULL,NULL)

insert into diaco.dbo.diaco_sede values (1,1,'Sede Guatemala','A','ciudad',getdate(),NULL,NULL,NULL)

insert into diacoDB.dbo.diaco_consumidor values (1,1,'66329337','1234123451234','M','3','2','1',1,9,1,'0',getdate(),NULL,NULL,'Franklyn',NULL,NULL,'Algaba',NULL,NULL,6);
insert into diacoDB.dbo.diaco_consumidor values (2,1,'12345678','1234123451233','M','3','2','1',1,9,1,'0',getdate(),NULL,NULL,'Carlos',null,null,'Rodriguez',null,null,6);

insert into diaco.dbo.diaco_proveedor values(1,'Claro','12315678','direccion claro','1',9,'1','1',1,NULL,getdate(),NULL,NULL,NULL);

insert into diaco.dbo.diaco_actividad_economica values (1,'actividad padre 1','1',NULL,NULL,NULL,NULL);

insert into diaco.dbo.diaco_sub_actividad_economica values (1,1,'actividad sub 1',NULL,NULL,NULL,NULL);


insert into diacoDB.dbo.diaco_queja values(123456,1,1,101,1,'123456','20181011','detalle de la queja aqui','solicitud consumidor aqui','1',NULL,'1','usuario asignado',getdate(),'motivo',9,8);
insert into diacoDB.dbo.diaco_queja values(123457,1,1,101,1,'123456','20181012','detalle de la queja aqui','solicitud consumidor aqui','1',NULL,'1','usuario asignado',getdate(),'motivo',9,8);
insert into diacoDB.dbo.diaco_queja values(123458,1,1,101,1,'123456','20181013','detalle de la queja aqui','solicitud consumidor aqui','1',NULL,'1','usuario asignado',getdate(),'motivo',9,8);
insert into diacoDB.dbo.diaco_queja values(123459,1,1,101,1,'123456','20181014','detalle de la queja aqui','solicitud consumidor aqui','1',NULL,'1','usuario asignado',getdate(),'motivo',9,8);
insert into diacoDB.dbo.diaco_queja values(123460,1,1,101,1,'123456','20181111','detalle de la queja aqui','solicitud consumidor aqui','1',NULL,'1','usuario asignado',getdate(),'motivo',9,8);

insert into diaco.[dbo].[diaco_departamento_interno] values (1,'Atenci�n al Consumidor',1,getdate())
insert into diaco.[dbo].[diaco_departamento_interno] values (2,'Jur�dico',1,getdate())
insert into diaco.[dbo].[diaco_departamento_interno] values (3,'Verificaci�n y Vigilancia',1,getdate())
insert into diaco.[dbo].[diaco_departamento_interno] values (4,'Archivo',1,getdate())

insert into diaco.dbo.diaco_cat_tipo_registro (id_tipo_registro, nombre_tipo_registro, flujo_id, usuario_adiciono, fecha_adicion) values (1,'Verificaci�n Conciliaci�n Previa',1,1,getdate())
insert into diaco.dbo.diaco_cat_tipo_registro (id_tipo_registro, nombre_tipo_registro, flujo_id, usuario_adiciono, fecha_adicion) values (2,'Verificaci�n de Datos',1,1,getdate())
insert into diaco.dbo.diaco_cat_tipo_registro (id_tipo_registro, nombre_tipo_registro, flujo_id, usuario_adiciono, fecha_adicion) values (3,'Comunicaci�n Permanente',1,1,getdate())
insert into diaco.dbo.diaco_cat_tipo_registro (id_tipo_registro, nombre_tipo_registro, flujo_id, usuario_adiciono, fecha_adicion) values (4,'Programar Audiencia de Conciliaci�n',1,1,getdate())
insert into diaco.dbo.diaco_cat_tipo_registro (id_tipo_registro, nombre_tipo_registro, flujo_id, usuario_adiciono, fecha_adicion) values (5,'Programar Audiencia Ofrecimiento medios de prueba',1,1,getdate())
insert into diaco.dbo.diaco_cat_tipo_registro (id_tipo_registro, nombre_tipo_registro, flujo_id, usuario_adiciono, fecha_adicion) values (6,'Conciliaci�n',1,1,getdate())
insert into diaco.dbo.diaco_cat_tipo_registro (id_tipo_registro, nombre_tipo_registro, flujo_id, usuario_adiciono, fecha_adicion) values (7,'Incomparecencia',1,1,getdate())
insert into diaco.dbo.diaco_cat_tipo_registro (id_tipo_registro, nombre_tipo_registro, flujo_id, usuario_adiciono, fecha_adicion) values (8,'Visita de Campo',1,1,getdate())
insert into diaco.dbo.diaco_cat_tipo_registro (id_tipo_registro, nombre_tipo_registro, flujo_id, usuario_adiciono, fecha_adicion) values (9,'Movimiento de Expediente',1,1,getdate())
insert into diaco.dbo.diaco_cat_tipo_registro (id_tipo_registro, nombre_tipo_registro, flujo_id, usuario_adiciono, fecha_adicion) values (10,'Finalizar Queja',1,1,getdate())
insert into diaco.dbo.diaco_cat_tipo_registro (id_tipo_registro, nombre_tipo_registro, flujo_id, usuario_adiciono, fecha_adicion) values (11,'Archivar Queja',1,1,getdate())
insert into diaco.dbo.diaco_cat_tipo_registro (id_tipo_registro, nombre_tipo_registro, flujo_id, usuario_adiciono, fecha_adicion) values (12,'Bit�cora',1,1,getdate())
insert into diaco.dbo.diaco_cat_tipo_registro (id_tipo_registro, nombre_tipo_registro, flujo_id, usuario_adiciono, fecha_adicion) values (13,'Bit�cora',4,1,getdate())
insert into diaco.dbo.diaco_cat_tipo_registro (id_tipo_registro, nombre_tipo_registro, flujo_id, usuario_adiciono, fecha_adicion) values (14,'Resolver Queja',4,1,getdate())

insert into diaco.dbo.diaco_flujo values(1,'Atenci�n al Consumidor');
insert into diaco.dbo.diaco_flujo values(2,'Jur�dico');
insert into diaco.dbo.diaco_flujo values(3,'Verificaci�n y Vigilancia');
insert into diaco.dbo.diaco_flujo values(4,'Conciliaci�n Virtual');

insert into diaco.dbo.diaco_estado_queja values (101,'nuevo',NULL,getdate(),1);
insert into diaco.dbo.diaco_estado_queja values (102,'revisi�n conciliaci�n virtual completa',NULL,getdate(),1);
insert into diaco.dbo.diaco_estado_queja values (103,'verificaci�n de datos completa',NULL,getdate(),1);
insert into diaco.dbo.diaco_estado_queja values (104,'comunicaci�n permanente completa',NULL,getdate(),1);
insert into diaco.dbo.diaco_estado_queja values (105,'audiencia de conciliaci�n completa',NULL,getdate(),1);
insert into diaco.dbo.diaco_estado_queja values (106,'audiencia de ofrecimiento de medio de prueba completa',NULL,getdate(),1);
insert into diaco.dbo.diaco_estado_queja values (107,'archivado',NULL,getdate(),1);
insert into diaco.dbo.diaco_estado_queja values (108,'finalizado',NULL,getdate(),1);
insert into diaco.dbo.diaco_estado_queja values (401,'nuevo',NULL,getdate(),4);
insert into diaco.dbo.diaco_estado_queja values (402,'resuelto',NULL,getdate(),4);

insert into diaco.dbo.diaco_paso_queja(id_queja, id_estado_operado, descripcion, fecha_operacion, usuario_operacion, id_sede_diaco_operacio, id_departamento_interno,id_tipo_registro)
values (123456,1,NULL,getdate(),1,1,1,3)

 insert into diaco.[dbo].[diaco_catalogo] values (1,'Tel�fono','diaco_comunicacion_consumidor',getdate(),1,'A')
 insert into diaco.[dbo].[diaco_catalogo] values (2,'Correo Electr�nico','diaco_comunicacion_consumidor',getdate(),1,'A')
 insert into diaco.[dbo].[diaco_catalogo] values (3,'Personal','tabla_telefono',getdate(),1,'A')
 insert into diaco.[dbo].[diaco_catalogo] values (4,'Domicilio','tabla_telefono',getdate(),1,'A')
 insert into diaco.[dbo].[diaco_catalogo] values (5,'Referencia','tabla_telefono',getdate(),1,'A')
 insert into diaco.[dbo].[diaco_catalogo] values (6,'Individual','tabla_consumidor',getdate(),1,'A')
 insert into diaco.[dbo].[diaco_catalogo] values (7,'Juridico','tabla_consumidor',getdate(),1,'A')
 insert into diaco.[dbo].[diaco_catalogo] values (8,'No Aplica','resolver_queja',getdate(),1,'A')
 insert into diaco.[dbo].[diaco_catalogo] values (9,'Resuelto','resolver_queja',getdate(),1,'A')
 insert into diaco.[dbo].[diaco_catalogo] values (10,'Sin resoluci�n','resolver_queja',getdate(),1,'A')

 insert into diaco.dbo.diaco_telefono(id_consumidor, telefono, tipo_telefono, usuario_adiciono, fecha_adicion) values (1,'12345678',3,1,getdate())
 insert into diaco.dbo.diaco_telefono(id_consumidor, telefono, tipo_telefono, usuario_adiciono, fecha_adicion) values (1,'12345679',4,1,getdate())
 insert into diaco.dbo.diaco_email(id_consumidor, correo_electronico, usuario_adiciono,fecha_adicion) values(1,'correo@email.com',1,getdate())
 insert into diaco.dbo.diaco_email(id_consumidor, correo_electronico, usuario_adiciono,fecha_adicion) values(1,'correo2@email.com',1,getdate())

insert into diaco.[dbo].[diaco_tipo_imagen] values(1,'pdf',1,getdate(),'A')
insert into diaco.[dbo].[diaco_tipo_imagen] values(2,'gif',1,getdate(),'A')
insert into diaco.[dbo].[diaco_tipo_imagen] values(3,'jpg',1,getdate(),'A')
insert into diaco.[dbo].[diaco_tipo_imagen] values(4,'png',1,getdate(),'A')

insert into diaco.[dbo].diaco_categoria_imagen values (1,'otro',1,getdate(),'A')
insert into diaco.[dbo].diaco_categoria_imagen values (2,'dpi',1,getdate(),'A')
insert into diaco.[dbo].diaco_categoria_imagen values (3,'factura',1,getdate(),'A')

insert into diaco.dbo.diaco_repositorio values (1,'local','"C:\\javainstalls\\FILESERVER\\"',1,1,getdate())

 insert into diaco.[dbo].[diaco_catalogo] values (11,'Rechazar Soluci�n y Continuar Tr�mite','respuesta_diaco_conc_virt',getdate(),1,'A')
 insert into diaco.[dbo].[diaco_catalogo] values (12,'Validar Conciliaci�n','respuesta_diaco_conc_virt',getdate(),1,'A')
 insert into diaco.[dbo].[diaco_catalogo] values (13,'Continuar Tr�mite','respuesta_diaco_conc_virt',getdate(),1,'A')
 insert into diaco.[dbo].[diaco_catalogo] values (14,'Queja Finalizada','respuesta_diaco_conc_virt',getdate(),1,'A')

 delete from [diaco_registro] where id_registro = 3

 insert into diaco.[dbo].[diaco_registro] values (1,'Comunicaci�n Permanente con el Consumidor y Usuario', 'DIACO-AQ-FO',1,getdate(),'1.0')
 insert into diaco.[dbo].[diaco_registro] values (2,'Ficha de la Queja', '',0,getdate(),'1.0')
 insert into diaco.[dbo].[diaco_registro] values (3,'C�dula Citaci�n Consumidor', 'DSC-CC',0,getdate(),'1.0')
 insert into diaco.[dbo].[diaco_registro] values (4,'C�dula Citaci�n Proveedor', '',0,getdate(),'1.0')
 insert into diaco.[dbo].[diaco_registro] values (5,'C�dula Notificaci�n Consumidor', '',0,getdate(),'1.0')
 insert into diaco.[dbo].[diaco_registro] values (6,'C�dula Notificaci�n Proveedor', '',0,getdate(),'1.0')

 insert into diaco.dbo.diaco_sede values (2,18,'Sede Alta Verapaz','A','ciudad',getdate(),NULL,NULL,NULL)

 insert into diaco.[dbo].[diaco_catalogo] values (15,'Jur�dico','at_con_movimientoflujo',getdate(),1,'A')
 insert into diaco.[dbo].[diaco_catalogo] values (16,'Verificaci�n y Vigilancia','at_con_movimientoflujo',getdate(),1,'A')
 insert into diaco.[dbo].[diaco_catalogo] values (17,'Sede Regional','at_con_movimientoflujo',getdate(),1,'A')

 insert into diaco.dbo.diaco_estado_queja values (201,'nuevo',NULL,getdate(),2);
 insert into diaco.dbo.diaco_estado_queja values (301,'nuevo',NULL,getdate(),3);

 insert into diaco.[dbo].[diaco_resultado_audiencia] values (1,'Conciliaci�n','1')
 insert into diaco.[dbo].[diaco_resultado_audiencia] values (2,'Sin Acuerdo','1')
 insert into diaco.[dbo].[diaco_resultado_audiencia] values (3,'Incomparecencia','1')
 insert into diaco.[dbo].[diaco_resultado_audiencia] values (4,'Pr�rroga de Audiencia','1')
 insert into diaco.[dbo].[diaco_resultado_audiencia] values (5,'Conciliaci�n','2')
 insert into diaco.[dbo].[diaco_resultado_audiencia] values (6,'Rebeld�a','2')
 insert into diaco.[dbo].[diaco_resultado_audiencia] values (7,'Apertura de Prueba','2')

 insert into diaco.[dbo].diaco_motivo_queja_finalizada values (1,'Improcedencia','F','A')
 insert into diaco.[dbo].diaco_motivo_queja_finalizada values (2,'Falta de Documentaci�n','F','A')
 insert into diaco.[dbo].diaco_motivo_queja_finalizada values (3,'Muestra A','A','A')
 insert into diaco.[dbo].diaco_motivo_queja_finalizada values (4,'Muestra B','A','A')
 insert into diaco.[dbo].diaco_motivo_queja_finalizada values (5,'Categoria A','C','A')
 insert into diaco.[dbo].diaco_motivo_queja_finalizada values (6,'Categoria B','C','A')

 insert into diaco.[dbo].diaco_motivo_poa values (1,'Conciliaci�n con restituci�n del bien','A')
 insert into diaco.[dbo].diaco_motivo_poa values (2,'Conciliaci�n con reembolso monetario','A')
 insert into diaco.[dbo].diaco_motivo_poa values (3,'Conciliaci�n con rescisi�n de contrato','A')
 insert into diaco.[dbo].diaco_motivo_poa values (4,'Queja no Aplica','A')
 insert into diaco.[dbo].diaco_motivo_poa values (5,'Desistimiento','A')

 insert into diaco.[dbo].[diaco_queja_correlativo] values (2019,50)

 insert into diaco.[dbo].[diaco_registro] values (7,'Resoluci�n de Archivo por Visita de Campo', 'DSC-RC',0,getdate(),'1.0')
 insert into diaco.[dbo].[diaco_registro] values (8,'Formulario Movimiento de Expediente', 'DIACO-AQ-FO',0,getdate(),'1.0')

 insert into diaco.[dbo].[diaco_email_fuente] values (1,4,'Conciliaci�n Virtual Interacciones','diaco_conciliacion_virtual@testmail.com','Solicitud de Informaci�n por parte de Proveedor')
 insert into diaco.[dbo].[diaco_email_fuente] values (2,1,'Verificaci�n de Datos - Informaci�n Extra','diaco_atencion_al_consumidor@testmail.com','Atenci�n al Consumidor - Solicitud para Completar Queja')

 insert into diaco.[dbo].[diaco_tipo_cola] values (1,1,'Atenci�n al Consumidor Queja Nueva', getdate(), 1,0)
 insert into diaco.[dbo].[diaco_tipo_cola] values (2,2,'Jur�dico Queja Nueva', getdate(), 1,0)
 insert into diaco.[dbo].[diaco_tipo_cola] values (3,3,'Verificaci�n y Vigilancia Queja Nueva', getdate(), 1,0)

insert into diaco.[dbo].[diaco_cola_asignacion](id_usuario, id_tipo_cola, activo, fecha_creacion, creado_por) values (1,1,1,getdate(),1)
insert into diaco.[dbo].[diaco_cola_asignacion](id_usuario, id_tipo_cola, activo, fecha_creacion, creado_por) values (1,2,1,getdate(),1)
insert into diaco.[dbo].[diaco_cola_asignacion](id_usuario, id_tipo_cola, activo, fecha_creacion, creado_por) values (1,3,1,getdate(),1)

insert into diaco.[dbo].[diaco_estado_queja] values (130,'pendiente confirmaci�n',1,getdate(),1)
insert into diaco.[dbo].[diaco_estado_queja] values (230,'pendiente confirmaci�n',1,getdate(),2)
insert into diaco.[dbo].[diaco_estado_queja] values (330,'pendiente confirmaci�n',1,getdate(),3)
