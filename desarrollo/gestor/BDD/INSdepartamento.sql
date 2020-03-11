Insert into diaco.dbo.departamento values (1,'Alta Verapaz');
Insert into diaco.dbo.departamento values (2,'Baja Verapaz');
Insert into diaco.dbo.departamento values (3,'Chimaltenango');
Insert into diaco.dbo.departamento values (4,'Chiquimula');
Insert into diaco.dbo.departamento values (5,'Petén');
Insert into diaco.dbo.departamento values (6,'El Progreso');
Insert into diaco.dbo.departamento values (7,'Quiché');
Insert into diaco.dbo.departamento values (8,'Escuintla');
Insert into diaco.dbo.departamento values (9,'Guatemala');
Insert into diaco.dbo.departamento values (10,'Huehuetenango');
Insert into diaco.dbo.departamento values (11,'Izabal');
Insert into diaco.dbo.departamento values (12,'Jalapa');
Insert into diaco.dbo.departamento values (13,'Jutiapa');
Insert into diaco.dbo.departamento values (14,'Quetzaltenango');
Insert into diaco.dbo.departamento values (15,'Retalhuleu');
Insert into diaco.dbo.departamento values (16,'Sacatepéquez');
Insert into diaco.dbo.departamento values (17,'San Marcos');
Insert into diaco.dbo.departamento values (18,'Santa Rosa');
Insert into diaco.dbo.departamento values (19,'Sololá');
Insert into diaco.dbo.departamento values (20,'Suchitepéquez');
Insert into diaco.dbo.departamento values (21,'Totonicapán');
Insert into diaco.dbo.departamento values (22,'Zacapa');

insert into diaco.dbo.diaco_paises values (1,'Guatemala', getdate());
insert into diaco.dbo.diaco_paises values (2,'El Salvador', getdate());
insert into diaco.dbo.diaco_paises values (3,'Honduras', getdate());

insert into diaco.dbo.municipio values (1,9,'Guatemala',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (2,9,'Santa Catarina Pinula',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (3,9,'San José Pinula',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (4,9,'San José del Golfo',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (5,9,'Palencia',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (6,9,'Chinautla',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (7,9,'San Pedro Ayampuc',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (8,9,'Mixco',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (9,9,'San Pedro Sacatepéquez',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (10,9,'San Juan Sacatepéquez',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (11,9,'San Raymundo',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (12,9,'Chuarrancho',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (13,9,'Fraijanes',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (14,9,'Amatitlán',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (15,9,'Villa Nueva',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (16,9,'Villa Canales',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (17,9,'San Miguel Petapa',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (18,1,'Cobán',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (19,1,'San Pedro Carchá',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (20,1,'San Juan Chamelco',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (21,1,'San Cristóbal Verapaz',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (22,1,'Tactic',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (23,1,'Tucurú',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (24,1,'Tamahú',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (25,1,'Panzós',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (26,1,'Senahú',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (27,1,'Cahabón',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (28,1,'Lanquín',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (29,1,'Chahal',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (30,1,'Fray Bartolomé de las Casas',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (31,1,'Chisec',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (32,1,'Santa Cruz Verapaz',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (33,1,'Santa Catalina La Tinta',getdate(),NULL,NULL,NULL)
insert into diaco.dbo.municipio values (34,1,'Raxruhá',getdate(),NULL,NULL,NULL)

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

insert into diaco.[dbo].[diaco_departamento_interno] values (1,'Atención al Consumidor',1,getdate())
insert into diaco.[dbo].[diaco_departamento_interno] values (2,'Jurídico',1,getdate())
insert into diaco.[dbo].[diaco_departamento_interno] values (3,'Verificación y Vigilancia',1,getdate())
insert into diaco.[dbo].[diaco_departamento_interno] values (4,'Archivo',1,getdate())

insert into diaco.dbo.diaco_cat_tipo_registro (id_tipo_registro, nombre_tipo_registro, flujo_id, usuario_adiciono, fecha_adicion) values (1,'Verificación Conciliación Previa',1,1,getdate())
insert into diaco.dbo.diaco_cat_tipo_registro (id_tipo_registro, nombre_tipo_registro, flujo_id, usuario_adiciono, fecha_adicion) values (2,'Verificación de Datos',1,1,getdate())
insert into diaco.dbo.diaco_cat_tipo_registro (id_tipo_registro, nombre_tipo_registro, flujo_id, usuario_adiciono, fecha_adicion) values (3,'Comunicación Permanente',1,1,getdate())
insert into diaco.dbo.diaco_cat_tipo_registro (id_tipo_registro, nombre_tipo_registro, flujo_id, usuario_adiciono, fecha_adicion) values (4,'Programar Audiencia de Conciliación',1,1,getdate())
insert into diaco.dbo.diaco_cat_tipo_registro (id_tipo_registro, nombre_tipo_registro, flujo_id, usuario_adiciono, fecha_adicion) values (5,'Programar Audiencia Ofrecimiento medios de prueba',1,1,getdate())
insert into diaco.dbo.diaco_cat_tipo_registro (id_tipo_registro, nombre_tipo_registro, flujo_id, usuario_adiciono, fecha_adicion) values (6,'Conciliación',1,1,getdate())
insert into diaco.dbo.diaco_cat_tipo_registro (id_tipo_registro, nombre_tipo_registro, flujo_id, usuario_adiciono, fecha_adicion) values (7,'Incomparecencia',1,1,getdate())
insert into diaco.dbo.diaco_cat_tipo_registro (id_tipo_registro, nombre_tipo_registro, flujo_id, usuario_adiciono, fecha_adicion) values (8,'Visita de Campo',1,1,getdate())
insert into diaco.dbo.diaco_cat_tipo_registro (id_tipo_registro, nombre_tipo_registro, flujo_id, usuario_adiciono, fecha_adicion) values (9,'Movimiento de Expediente',1,1,getdate())
insert into diaco.dbo.diaco_cat_tipo_registro (id_tipo_registro, nombre_tipo_registro, flujo_id, usuario_adiciono, fecha_adicion) values (10,'Finalizar Queja',1,1,getdate())
insert into diaco.dbo.diaco_cat_tipo_registro (id_tipo_registro, nombre_tipo_registro, flujo_id, usuario_adiciono, fecha_adicion) values (11,'Archivar Queja',1,1,getdate())
insert into diaco.dbo.diaco_cat_tipo_registro (id_tipo_registro, nombre_tipo_registro, flujo_id, usuario_adiciono, fecha_adicion) values (12,'Bitácora',1,1,getdate())
insert into diaco.dbo.diaco_cat_tipo_registro (id_tipo_registro, nombre_tipo_registro, flujo_id, usuario_adiciono, fecha_adicion) values (13,'Bitácora',4,1,getdate())
insert into diaco.dbo.diaco_cat_tipo_registro (id_tipo_registro, nombre_tipo_registro, flujo_id, usuario_adiciono, fecha_adicion) values (14,'Resolver Queja',4,1,getdate())

insert into diaco.dbo.diaco_flujo values(1,'Atención al Consumidor');
insert into diaco.dbo.diaco_flujo values(2,'Jurídico');
insert into diaco.dbo.diaco_flujo values(3,'Verificación y Vigilancia');
insert into diaco.dbo.diaco_flujo values(4,'Conciliación Virtual');

insert into diaco.dbo.diaco_estado_queja values (101,'nuevo',NULL,getdate(),1);
insert into diaco.dbo.diaco_estado_queja values (102,'revisión conciliación virtual completa',NULL,getdate(),1);
insert into diaco.dbo.diaco_estado_queja values (103,'verificación de datos completa',NULL,getdate(),1);
insert into diaco.dbo.diaco_estado_queja values (104,'comunicación permanente completa',NULL,getdate(),1);
insert into diaco.dbo.diaco_estado_queja values (105,'audiencia de conciliación completa',NULL,getdate(),1);
insert into diaco.dbo.diaco_estado_queja values (106,'audiencia de ofrecimiento de medio de prueba completa',NULL,getdate(),1);
insert into diaco.dbo.diaco_estado_queja values (107,'archivado',NULL,getdate(),1);
insert into diaco.dbo.diaco_estado_queja values (108,'finalizado',NULL,getdate(),1);
insert into diaco.dbo.diaco_estado_queja values (401,'nuevo',NULL,getdate(),4);
insert into diaco.dbo.diaco_estado_queja values (402,'resuelto',NULL,getdate(),4);

insert into diaco.dbo.diaco_paso_queja(id_queja, id_estado_operado, descripcion, fecha_operacion, usuario_operacion, id_sede_diaco_operacio, id_departamento_interno,id_tipo_registro)
values (123456,1,NULL,getdate(),1,1,1,3)

 insert into diaco.[dbo].[diaco_catalogo] values (1,'Teléfono','diaco_comunicacion_consumidor',getdate(),1,'A')
 insert into diaco.[dbo].[diaco_catalogo] values (2,'Correo Electrónico','diaco_comunicacion_consumidor',getdate(),1,'A')
 insert into diaco.[dbo].[diaco_catalogo] values (3,'Personal','tabla_telefono',getdate(),1,'A')
 insert into diaco.[dbo].[diaco_catalogo] values (4,'Domicilio','tabla_telefono',getdate(),1,'A')
 insert into diaco.[dbo].[diaco_catalogo] values (5,'Referencia','tabla_telefono',getdate(),1,'A')
 insert into diaco.[dbo].[diaco_catalogo] values (6,'Individual','tabla_consumidor',getdate(),1,'A')
 insert into diaco.[dbo].[diaco_catalogo] values (7,'Juridico','tabla_consumidor',getdate(),1,'A')
 insert into diaco.[dbo].[diaco_catalogo] values (8,'No Aplica','resolver_queja',getdate(),1,'A')
 insert into diaco.[dbo].[diaco_catalogo] values (9,'Resuelto','resolver_queja',getdate(),1,'A')
 insert into diaco.[dbo].[diaco_catalogo] values (10,'Sin resolución','resolver_queja',getdate(),1,'A')

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

 insert into diaco.[dbo].[diaco_catalogo] values (11,'Rechazar Solución y Continuar Trámite','respuesta_diaco_conc_virt',getdate(),1,'A')
 insert into diaco.[dbo].[diaco_catalogo] values (12,'Validar Conciliación','respuesta_diaco_conc_virt',getdate(),1,'A')
 insert into diaco.[dbo].[diaco_catalogo] values (13,'Continuar Trámite','respuesta_diaco_conc_virt',getdate(),1,'A')
 insert into diaco.[dbo].[diaco_catalogo] values (14,'Queja Finalizada','respuesta_diaco_conc_virt',getdate(),1,'A')

 delete from [diaco_registro] where id_registro = 3

 insert into diaco.[dbo].[diaco_registro] values (1,'Comunicación Permanente con el Consumidor y Usuario', 'DIACO-AQ-FO',1,getdate(),'1.0')
 insert into diaco.[dbo].[diaco_registro] values (2,'Ficha de la Queja', '',0,getdate(),'1.0')
 insert into diaco.[dbo].[diaco_registro] values (3,'Cédula Citación Consumidor', 'DSC-CC',0,getdate(),'1.0')
 insert into diaco.[dbo].[diaco_registro] values (4,'Cédula Citación Proveedor', '',0,getdate(),'1.0')
 insert into diaco.[dbo].[diaco_registro] values (5,'Cédula Notificación Consumidor', '',0,getdate(),'1.0')
 insert into diaco.[dbo].[diaco_registro] values (6,'Cédula Notificación Proveedor', '',0,getdate(),'1.0')

 insert into diaco.dbo.diaco_sede values (2,18,'Sede Alta Verapaz','A','ciudad',getdate(),NULL,NULL,NULL)

 insert into diaco.[dbo].[diaco_catalogo] values (15,'Jurídico','at_con_movimientoflujo',getdate(),1,'A')
 insert into diaco.[dbo].[diaco_catalogo] values (16,'Verificación y Vigilancia','at_con_movimientoflujo',getdate(),1,'A')
 insert into diaco.[dbo].[diaco_catalogo] values (17,'Sede Regional','at_con_movimientoflujo',getdate(),1,'A')

 insert into diaco.dbo.diaco_estado_queja values (201,'nuevo',NULL,getdate(),2);
 insert into diaco.dbo.diaco_estado_queja values (301,'nuevo',NULL,getdate(),3);

 insert into diaco.[dbo].[diaco_resultado_audiencia] values (1,'Conciliación','1')
 insert into diaco.[dbo].[diaco_resultado_audiencia] values (2,'Sin Acuerdo','1')
 insert into diaco.[dbo].[diaco_resultado_audiencia] values (3,'Incomparecencia','1')
 insert into diaco.[dbo].[diaco_resultado_audiencia] values (4,'Prórroga de Audiencia','1')
 insert into diaco.[dbo].[diaco_resultado_audiencia] values (5,'Conciliación','2')
 insert into diaco.[dbo].[diaco_resultado_audiencia] values (6,'Rebeldía','2')
 insert into diaco.[dbo].[diaco_resultado_audiencia] values (7,'Apertura de Prueba','2')

 insert into diaco.[dbo].diaco_motivo_queja_finalizada values (1,'Improcedencia','F','A')
 insert into diaco.[dbo].diaco_motivo_queja_finalizada values (2,'Falta de Documentación','F','A')
 insert into diaco.[dbo].diaco_motivo_queja_finalizada values (3,'Muestra A','A','A')
 insert into diaco.[dbo].diaco_motivo_queja_finalizada values (4,'Muestra B','A','A')
 insert into diaco.[dbo].diaco_motivo_queja_finalizada values (5,'Categoria A','C','A')
 insert into diaco.[dbo].diaco_motivo_queja_finalizada values (6,'Categoria B','C','A')

 insert into diaco.[dbo].diaco_motivo_poa values (1,'Conciliación con restitución del bien','A')
 insert into diaco.[dbo].diaco_motivo_poa values (2,'Conciliación con reembolso monetario','A')
 insert into diaco.[dbo].diaco_motivo_poa values (3,'Conciliación con rescisión de contrato','A')
 insert into diaco.[dbo].diaco_motivo_poa values (4,'Queja no Aplica','A')
 insert into diaco.[dbo].diaco_motivo_poa values (5,'Desistimiento','A')

 insert into diaco.[dbo].[diaco_queja_correlativo] values (2019,50)

 insert into diaco.[dbo].[diaco_registro] values (7,'Resolución de Archivo por Visita de Campo', 'DSC-RC',0,getdate(),'1.0')
 insert into diaco.[dbo].[diaco_registro] values (8,'Formulario Movimiento de Expediente', 'DIACO-AQ-FO',0,getdate(),'1.0')

 insert into diaco.[dbo].[diaco_email_fuente] values (1,4,'Conciliación Virtual Interacciones','diaco_conciliacion_virtual@testmail.com','Solicitud de Información por parte de Proveedor')
 insert into diaco.[dbo].[diaco_email_fuente] values (2,1,'Verificación de Datos - Información Extra','diaco_atencion_al_consumidor@testmail.com','Atención al Consumidor - Solicitud para Completar Queja')

 insert into diaco.[dbo].[diaco_tipo_cola] values (1,1,'Atención al Consumidor Queja Nueva', getdate(), 1,0)
 insert into diaco.[dbo].[diaco_tipo_cola] values (2,2,'Jurídico Queja Nueva', getdate(), 1,0)
 insert into diaco.[dbo].[diaco_tipo_cola] values (3,3,'Verificación y Vigilancia Queja Nueva', getdate(), 1,0)

insert into diaco.[dbo].[diaco_cola_asignacion](id_usuario, id_tipo_cola, activo, fecha_creacion, creado_por) values (1,1,1,getdate(),1)
insert into diaco.[dbo].[diaco_cola_asignacion](id_usuario, id_tipo_cola, activo, fecha_creacion, creado_por) values (1,2,1,getdate(),1)
insert into diaco.[dbo].[diaco_cola_asignacion](id_usuario, id_tipo_cola, activo, fecha_creacion, creado_por) values (1,3,1,getdate(),1)

insert into diaco.[dbo].[diaco_estado_queja] values (130,'pendiente confirmación',1,getdate(),1)
insert into diaco.[dbo].[diaco_estado_queja] values (230,'pendiente confirmación',1,getdate(),2)
insert into diaco.[dbo].[diaco_estado_queja] values (330,'pendiente confirmación',1,getdate(),3)
