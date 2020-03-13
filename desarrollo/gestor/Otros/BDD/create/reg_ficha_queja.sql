USE [DIACO]
GO

/****** Object:  Table [dbo].[reg_ficha_queja]    Script Date: 09/04/2019 11:53:38 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[reg_ficha_queja](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_registro] [int] NOT NULL,
	[id_queja] [int] NOT NULL,
	[id_tipo_registro] [int] NOT NULL,
	[fecha_ingreso_queja] [datetime] NULL,
	[nombre_proveedor] [varchar](500) NULL,
	[nombre_consumidor] [varchar](500) NULL,
	[solicita_que] [varchar](500) NULL,
	[fecha_comunicacion] [datetime] NULL,
	[visita_campo] [varchar](200) NULL,
	[citacion] [varchar](200) NULL,
	[audiencia_conciliacion] [varchar](200) NULL,
	[conclusion] [varchar](200) NULL,
	[comentarios] [varchar](200) NULL,
	[fecha_creacion] [datetime] NULL,
	[creado_por] [int] NULL,
 CONSTRAINT [PK_reg_ficha_queja] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[reg_ficha_queja]  WITH CHECK ADD  CONSTRAINT [FK_reg_ficha_queja_diaco_cat_tipo_registro] FOREIGN KEY([id_tipo_registro])
REFERENCES [dbo].[diaco_cat_tipo_registro] ([id_tipo_registro])
GO

ALTER TABLE [dbo].[reg_ficha_queja] CHECK CONSTRAINT [FK_reg_ficha_queja_diaco_cat_tipo_registro]
GO

ALTER TABLE [dbo].[reg_ficha_queja]  WITH CHECK ADD  CONSTRAINT [FK_reg_ficha_queja_diaco_queja] FOREIGN KEY([id_queja])
REFERENCES [dbo].[diaco_queja] ([id_queja])
GO

ALTER TABLE [dbo].[reg_ficha_queja] CHECK CONSTRAINT [FK_reg_ficha_queja_diaco_queja]
GO

ALTER TABLE [dbo].[reg_ficha_queja]  WITH CHECK ADD  CONSTRAINT [FK_reg_ficha_queja_diaco_usuario] FOREIGN KEY([creado_por])
REFERENCES [dbo].[diaco_usuario] ([id_usuario])
GO

ALTER TABLE [dbo].[reg_ficha_queja] CHECK CONSTRAINT [FK_reg_ficha_queja_diaco_usuario]
GO

ALTER TABLE [dbo].[reg_ficha_queja]  WITH CHECK ADD  CONSTRAINT [FK_reg_ficha_queja_reg_ficha_queja] FOREIGN KEY([id_registro])
REFERENCES [dbo].[diaco_registro] ([id_registro])
GO

ALTER TABLE [dbo].[reg_ficha_queja] CHECK CONSTRAINT [FK_reg_ficha_queja_reg_ficha_queja]
GO

