USE [diacoDB]
GO

/****** Object:  Table [dbo].[reg_cedula_notificacion_cit_correo]    Script Date: 02/05/2019 19:16:39 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[reg_cedula_notificacion_cit_correo](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_registro] [int] NOT NULL,
	[id_queja] [int] NOT NULL,
	[id_tipo_registro] [int] NOT NULL,
    [id_audiencia] [int] NOT NULL,
	[codigo] [varchar](30) NULL,
	[version] [varchar](30) NULL,
	[quejanumero] [int] NULL,
	[citacion_hacia] [varchar](100) NULL,
	[fecha_citacion] [datetime] NULL,
	[fecha_creacion] [datetime] NULL,
	[creado_por] [int] NOT NULL,
	[correlativo_citacion] [varchar](30) NULL
 CONSTRAINT [PK_reg_cedula_notificacion_cit_correo] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
 
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[reg_cedula_notificacion_cit_correo]  WITH CHECK ADD  CONSTRAINT [FK_reg_cedula_notificacion_cit_correo] FOREIGN KEY([id_tipo_registro])
REFERENCES [dbo].[diaco_cat_tipo_registro] ([id_tipo_registro])
GO

ALTER TABLE [dbo].[reg_cedula_notificacion_cit_correo] CHECK CONSTRAINT [FK_reg_cedula_notificacion_cit_correo]
GO

ALTER TABLE [dbo].[reg_cedula_notificacion_cit_correo]  WITH CHECK ADD  CONSTRAINT [FK_reg_cedula_notificacion_cit_correo_diaco_queja] FOREIGN KEY([id_queja])
REFERENCES [dbo].[diaco_queja] ([id_queja])
GO

ALTER TABLE [dbo].[reg_cedula_notificacion_cit_correo] CHECK CONSTRAINT [FK_reg_cedula_notificacion_cit_correo_diaco_queja]
GO

ALTER TABLE [dbo].[reg_cedula_notificacion_cit_correo]  WITH CHECK ADD  CONSTRAINT [FK_reg_cedula_notificacion_cit_correo_diaco_registro] FOREIGN KEY([id_registro])
REFERENCES [dbo].[diaco_registro] ([id_registro])
GO

ALTER TABLE [dbo].[reg_cedula_notificacion_cit_correo] CHECK CONSTRAINT [FK_reg_cedula_notificacion_cit_correo_diaco_registro]
GO

ALTER TABLE [dbo].[reg_cedula_notificacion_cit_correo]  WITH CHECK ADD  CONSTRAINT [FK_reg_cedula_notificacion_cit_correo_diaco_usuario] FOREIGN KEY([creado_por])
REFERENCES [dbo].[diaco_usuario] ([id_usuario])
GO

ALTER TABLE [dbo].[reg_cedula_notificacion_cit_correo] CHECK CONSTRAINT [FK_reg_cedula_notificacion_cit_correo_diaco_usuario]
GO
