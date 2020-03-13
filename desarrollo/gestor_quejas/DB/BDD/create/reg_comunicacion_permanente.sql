USE [DIACO]
GO

/****** Object:  Table [dbo].[reg_comunicacion_permanente]    Script Date: 09/04/2019 11:53:25 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[reg_comunicacion_permanente](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_registro] [int] NOT NULL,
	[id_queja] [int] NOT NULL,
	[id_tipo_registro] [int] NOT NULL,
	[codigo] [varchar](30) NULL,
	[fecha_presentacion] [datetime] NULL,
	[fecha_asignacion] [datetime] NULL,
	[responsable] [varchar](500) NULL,
	[via_comunicacion] [varchar](100) NULL,
	[con_nombre] [varchar](1000) NULL,
	[con_telefono] [varchar](1000) NULL,
	[con_email] [varchar](1000) NULL,
	[estatus] [varchar](1000) NULL,
	[fecha_notificacion] [datetime] NULL,
	[observaciones] [varchar](1000) NULL,
	[fecha_creacion] [datetime] NULL,
	[creado_por] [int] NOT NULL,
 CONSTRAINT [PK_reg_comunicacion_permanente] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
 CONSTRAINT [IX_reg_comunicacion_permanente] UNIQUE NONCLUSTERED 
(
	[codigo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[reg_comunicacion_permanente]  WITH CHECK ADD  CONSTRAINT [FK_reg_comunicacion_permanente_diaco_cat_tipo_registro] FOREIGN KEY([id_tipo_registro])
REFERENCES [dbo].[diaco_cat_tipo_registro] ([id_tipo_registro])
GO

ALTER TABLE [dbo].[reg_comunicacion_permanente] CHECK CONSTRAINT [FK_reg_comunicacion_permanente_diaco_cat_tipo_registro]
GO

ALTER TABLE [dbo].[reg_comunicacion_permanente]  WITH CHECK ADD  CONSTRAINT [FK_reg_comunicacion_permanente_diaco_queja] FOREIGN KEY([id_queja])
REFERENCES [dbo].[diaco_queja] ([id_queja])
GO

ALTER TABLE [dbo].[reg_comunicacion_permanente] CHECK CONSTRAINT [FK_reg_comunicacion_permanente_diaco_queja]
GO

ALTER TABLE [dbo].[reg_comunicacion_permanente]  WITH CHECK ADD  CONSTRAINT [FK_reg_comunicacion_permanente_diaco_registro] FOREIGN KEY([id_registro])
REFERENCES [dbo].[diaco_registro] ([id_registro])
GO

ALTER TABLE [dbo].[reg_comunicacion_permanente] CHECK CONSTRAINT [FK_reg_comunicacion_permanente_diaco_registro]
GO

ALTER TABLE [dbo].[reg_comunicacion_permanente]  WITH CHECK ADD  CONSTRAINT [FK_reg_comunicacion_permanente_diaco_usuario] FOREIGN KEY([creado_por])
REFERENCES [dbo].[diaco_usuario] ([id_usuario])
GO

ALTER TABLE [dbo].[reg_comunicacion_permanente] CHECK CONSTRAINT [FK_reg_comunicacion_permanente_diaco_usuario]
GO

