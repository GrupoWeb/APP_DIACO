USE [DIACO]
GO

/****** Object:  Table [dbo].[diaco_bitacora]    Script Date: 19/03/2019 15:41:27 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[diaco_bitacora](
	[id] [numeric](12, 0) IDENTITY(1,1) NOT NULL,
	[id_queja] [int] NOT NULL,
	[fecha] [datetime] NOT NULL,
	[usuario] [int] NULL,
	[bitacora] [varchar](1000) NOT NULL,
	[consumidor] [varchar](1000) NULL,
	[fecha_actualizado] [datetime] NULL,
	[usuario_actualizado] [int] NULL,
	[id_queja_paso] [int] NULL,
	[id_tipo_registro] [int] NULL,
	[id_flujo] [int] NULL,
 CONSTRAINT [PK_diaco_bitacora] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[diaco_bitacora]  WITH CHECK ADD  CONSTRAINT [FK_diaco_bitacora_diaco_bitacora] FOREIGN KEY([id])
REFERENCES [dbo].[diaco_bitacora] ([id])
GO

ALTER TABLE [dbo].[diaco_bitacora] CHECK CONSTRAINT [FK_diaco_bitacora_diaco_bitacora]
GO

ALTER TABLE [dbo].[diaco_bitacora]  WITH CHECK ADD  CONSTRAINT [FK_diaco_bitacora_diaco_cat_tipo_registro] FOREIGN KEY([id_tipo_registro])
REFERENCES [dbo].[diaco_cat_tipo_registro] ([id_tipo_registro])
GO

ALTER TABLE [dbo].[diaco_bitacora] CHECK CONSTRAINT [FK_diaco_bitacora_diaco_cat_tipo_registro]
GO

ALTER TABLE [dbo].[diaco_bitacora]  WITH CHECK ADD  CONSTRAINT [FK_diaco_bitacora_diaco_flujo] FOREIGN KEY([id_flujo])
REFERENCES [dbo].[diaco_flujo] ([id])
GO

ALTER TABLE [dbo].[diaco_bitacora] CHECK CONSTRAINT [FK_diaco_bitacora_diaco_flujo]
GO

ALTER TABLE [dbo].[diaco_bitacora]  WITH CHECK ADD  CONSTRAINT [FK_diaco_bitacora_diaco_paso_queja] FOREIGN KEY([id_queja_paso])
REFERENCES [dbo].[diaco_paso_queja] ([id_queja_paso])
GO

ALTER TABLE [dbo].[diaco_bitacora] CHECK CONSTRAINT [FK_diaco_bitacora_diaco_paso_queja]
GO

ALTER TABLE [dbo].[diaco_bitacora]  WITH CHECK ADD  CONSTRAINT [FK_diaco_bitacora_diaco_queja] FOREIGN KEY([id_queja])
REFERENCES [dbo].[diaco_queja] ([id_queja])
GO

ALTER TABLE [dbo].[diaco_bitacora] CHECK CONSTRAINT [FK_diaco_bitacora_diaco_queja]
GO

ALTER TABLE [dbo].[diaco_bitacora]  WITH CHECK ADD  CONSTRAINT [FK_diaco_bitacora_diaco_usuario] FOREIGN KEY([usuario])
REFERENCES [dbo].[diaco_usuario] ([id_usuario])
GO

ALTER TABLE [dbo].[diaco_bitacora] CHECK CONSTRAINT [FK_diaco_bitacora_diaco_usuario]
GO

