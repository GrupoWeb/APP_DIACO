USE [DIACO]
GO

/****** Object:  View [dbo].[View_MainQueja]    Script Date: 18/03/2019 12:34:46 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO





CREATE view [dbo].[View_MainQueja] as
select dq.id_queja, dq.fecha_queja, ISNULL(c.nombre1+' ', '')+ISNULL(c.nombre2+' ', '')+ISNULL(c.nombre3+' ', '')+ISNULL(c.apellido1+' ', '')+ISNULL(c.apellido2+' ', '')
+ISNULL(c.apellido_casada+' ', '') nombre_consumidor , p.nombre nombre_proveedor, dq.id_estado_queja,
dq.detalle_queja, dq.solicita_que, dq.id_proveedor, dq.id_departamento, dq.id_municipio
from diaco.[dbo].[diaco_queja] dq, diaco.[dbo].[diaco_proveedor] p, diaco.[dbo].[diaco_consumidor] c
where dq.id_consumidor = c.id_consumidor and dq.id_proveedor = p.id_proveedor
GO

