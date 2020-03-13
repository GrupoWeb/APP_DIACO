USE [DIACO]
GO

/****** Object:  Table [dbo].[reg_resolucion_visita_campo]    Script Date: 02/05/2019 19:16:39 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[reg_resolucion_visita_campo](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_registro] [int] NOT NULL,
	[id_queja] [int] NOT NULL,
	[id_tipo_registro] [int] NOT NULL,
	[codigo] [varchar](30) NULL,
	[version] [varchar](30) NULL,
	[fecha_visita] [datetime] NULL,
	[anio_queja] [int] NULL,
	[quejanumero] [int] NULL,
	[fecha_creacion] [datetime] NULL,
	[creado_por] [int] NOT NULL,
	[nombre_consumidor] [varchar](600) NOT NULL,
	[nombre_proveedor] [varchar](600) NOT NULL,
 CONSTRAINT [PK_reg_resolucion_visita_campo] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
 CONSTRAINT [IX_reg_resolucion_visita_campo] UNIQUE NONCLUSTERED 
(
	[codigo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[reg_resolucion_visita_campo]  WITH CHECK ADD  CONSTRAINT [FK_reg_resolucion_visita_campo_diaco_cat_tipo_registro] FOREIGN KEY([id_tipo_registro])
REFERENCES [dbo].[diaco_cat_tipo_registro] ([id_tipo_registro])
GO

ALTER TABLE [dbo].[reg_resolucion_visita_campo] CHECK CONSTRAINT [FK_reg_resolucion_visita_campo_diaco_cat_tipo_registro]
GO

ALTER TABLE [dbo].[reg_resolucion_visita_campo]  WITH CHECK ADD  CONSTRAINT [FK_reg_resolucion_visita_campo_diaco_queja] FOREIGN KEY([id_queja])
REFERENCES [dbo].[diaco_queja] ([id_queja])
GO

ALTER TABLE [dbo].[reg_resolucion_visita_campo] CHECK CONSTRAINT [FK_reg_resolucion_visita_campo_diaco_queja]
GO

ALTER TABLE [dbo].[reg_resolucion_visita_campo]  WITH CHECK ADD  CONSTRAINT [FK_reg_resolucion_visita_campo_diaco_registro] FOREIGN KEY([id_registro])
REFERENCES [dbo].[diaco_registro] ([id_registro])
GO

ALTER TABLE [dbo].[reg_resolucion_visita_campo] CHECK CONSTRAINT [FK_reg_resolucion_visita_campo_diaco_registro]
GO

ALTER TABLE [dbo].[reg_resolucion_visita_campo]  WITH CHECK ADD  CONSTRAINT [FK_reg_resolucion_visita_campo_diaco_usuario] FOREIGN KEY([creado_por])
REFERENCES [dbo].[diaco_usuario] ([id_usuario])
GO

ALTER TABLE [dbo].[reg_resolucion_visita_campo] CHECK CONSTRAINT [FK_reg_resolucion_visita_campo_diaco_usuario]
GO

