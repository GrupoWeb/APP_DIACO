USE [DIACO]
GO

/****** Object:  Table [dbo].[reg_formulario_queja]    Script Date: 09/04/2019 11:53:47 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[reg_formulario_queja](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_registro] [int] NOT NULL,
	[id_queja] [int] NOT NULL,
	[id_tipo_registro] [int] NOT NULL,
	[codigo] [varchar](20) NULL,
	[fecha] [datetime] NULL,
	[via_ingreso] [varchar](40) NULL,
	[con_identificacion] [varchar](20) NULL,
	[con_nombre] [varchar](500) NULL,
	[con_telefono] [varchar](1000) NULL,
	[con_email] [varchar](1000) NULL,
	[con_direccion] [varchar](1000) NULL,
	[con_dpto] [varchar](200) NULL,
	[con_zona] [varchar](20) NULL,
	[con_municipio] [varchar](200) NULL,
	[prov_nombre] [varchar](500) NULL,
	[prov_nit] [varchar](30) NULL,
	[prov_telefono] [varchar](1000) NULL,
	[prov_fechacompra] [datetime] NULL,
	[prov_direccion] [varchar](1000) NULL,
	[prov_departamento] [varchar](500) NULL,
	[prov_zona] [varchar](20) NULL,
	[prov_municipio] [varchar](500) NULL,
	[queja] [varchar](500) NULL,
	[solucion] [varchar](500) NULL,
	[creado_por] [int] NULL,
	[fecha_creacion] [datetime] NULL,
 CONSTRAINT [PK_reg_formulario_queja] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[reg_formulario_queja]  WITH CHECK ADD  CONSTRAINT [FK_reg_formulario_queja_diaco_cat_tipo_registro] FOREIGN KEY([id_tipo_registro])
REFERENCES [dbo].[diaco_cat_tipo_registro] ([id_tipo_registro])
GO

ALTER TABLE [dbo].[reg_formulario_queja] CHECK CONSTRAINT [FK_reg_formulario_queja_diaco_cat_tipo_registro]
GO

ALTER TABLE [dbo].[reg_formulario_queja]  WITH CHECK ADD  CONSTRAINT [FK_reg_formulario_queja_diaco_queja] FOREIGN KEY([id_queja])
REFERENCES [dbo].[diaco_queja] ([id_queja])
GO

ALTER TABLE [dbo].[reg_formulario_queja] CHECK CONSTRAINT [FK_reg_formulario_queja_diaco_queja]
GO

ALTER TABLE [dbo].[reg_formulario_queja]  WITH CHECK ADD  CONSTRAINT [FK_reg_formulario_queja_diaco_registro] FOREIGN KEY([id_registro])
REFERENCES [dbo].[diaco_registro] ([id_registro])
GO

ALTER TABLE [dbo].[reg_formulario_queja] CHECK CONSTRAINT [FK_reg_formulario_queja_diaco_registro]
GO

ALTER TABLE [dbo].[reg_formulario_queja]  WITH CHECK ADD  CONSTRAINT [FK_reg_formulario_queja_diaco_usuario] FOREIGN KEY([creado_por])
REFERENCES [dbo].[diaco_usuario] ([id_usuario])
GO

ALTER TABLE [dbo].[reg_formulario_queja] CHECK CONSTRAINT [FK_reg_formulario_queja_diaco_usuario]
GO

