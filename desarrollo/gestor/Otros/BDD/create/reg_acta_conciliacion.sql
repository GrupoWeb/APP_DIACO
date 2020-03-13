USE [diacoDB]
GO

/****** Object:  Table [dbo].[reg_acta_conciliacion]    Script Date: 06/06/2019 11:53:25 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[reg_acta_conciliacion](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_codigo_acta_conciliacion] [int] NOT NULL,
	[id_queja] [int] NOT NULL,
	[id_tipo_registro] [int] NOT NULL,
	[fecha_conciliacion] [datetime] NULL,
	[nombre_consumidor] [varchar](500) NULL,
	[identificacion_consumidor]  [varchar](100) NULL,
	[abogado_consumidor] [varchar](1000) NULL,
	[colegiado_abogado]  [varchar](50) NULL,
	[nombre_proveedor] [varchar](1000) NULL,
	[identificacion_proveedor] [varchar](500) NULL,
	[nombre_entidad_proveedor] [varchar](500) NULL,
	[notario_proveedor]  [varchar](500) NULL,
    [fecha_acta_nombramiento_proveedor] [datetime] NULL,
    [num_registro_acta_mercantil] [varchar](150) NULL,
    [folio_registro_acta_mercantil] [varchar](150) NULL,
    [auxiliares_comercio] [varchar](150) NULL,
    [nombre_auxiliar]   [varchar](500) NULL,
    [fecha_queja]  [datetime] NULL,
    [motivo_queja]  [varchar](4000) NULL,
    [punto_segundo]  [varchar](4000) NULL,
    [punto_tercero]  [varchar](4000) NULL,
    [punto_cuarto]  [varchar](4000) NULL,
    [punto_quinto]  [varchar](4000) NULL,
  	[fecha_creacion] [datetime] NULL,
	[creado_por] [int] NOT NULL,
 CONSTRAINT [PK_reg_acta_conciliacion] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[reg_acta_conciliacion]  WITH CHECK ADD  CONSTRAINT [FK_reg_acta_conciliacion_diaco_cat_tipo_registro] FOREIGN KEY([id_tipo_registro])
REFERENCES [dbo].[diaco_cat_tipo_registro] ([id_tipo_registro])
GO

ALTER TABLE [dbo].[reg_acta_conciliacion] CHECK CONSTRAINT [FK_reg_acta_conciliacion_diaco_cat_tipo_registro]
GO

ALTER TABLE [dbo].[reg_acta_conciliacion]  WITH CHECK ADD  CONSTRAINT [FK_reg_acta_conciliacion_diaco_queja] FOREIGN KEY([id_queja])
REFERENCES [dbo].[diaco_queja] ([id_queja])
GO

ALTER TABLE [dbo].[reg_acta_conciliacion] CHECK CONSTRAINT [FK_reg_acta_conciliacion_diaco_queja]
GO


ALTER TABLE [dbo].[reg_acta_conciliacion]  WITH CHECK ADD  CONSTRAINT [FK_reg_acta_conciliacion_diaco_usuario] FOREIGN KEY([creado_por])
REFERENCES [dbo].[diaco_usuario] ([id_usuario])
GO

ALTER TABLE [dbo].[reg_acta_conciliacion] CHECK CONSTRAINT [FK_reg_acta_conciliacion_diaco_usuario]
GO
