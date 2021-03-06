USE [diacoDB]
GO

/****** Object:  Table [dbo].[reg_res_archivo_conciliacion]    Script Date: 06/06/2019 11:53:25 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[reg_res_archivo_conciliacion](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_correlativo_conciliacion] [int] NOT NULL,
	[id_queja] [int] NOT NULL,
	[id_tipo_registro] [int] NOT NULL,
	[fecha_res_conciliacion] [datetime] NULL,
	[nombre_consumidor] [varchar](500) NULL,
	[nombre_proveedor] [varchar](500) NULL,
	[fecha_creacion] [datetime] NULL,
	[creado_por] [int] NOT NULL,
 CONSTRAINT [PK_reg_res_archivo_conciliacion] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[reg_res_archivo_conciliacion]  WITH CHECK ADD  CONSTRAINT [FK_reg_res_archivo_conci_diaco_cat_tipo_reg] FOREIGN KEY([id_tipo_registro])
REFERENCES [dbo].[diaco_cat_tipo_registro] ([id_tipo_registro])
GO

ALTER TABLE [dbo].[reg_res_archivo_conciliacion] CHECK CONSTRAINT [FK_reg_res_archivo_conci_diaco_cat_tipo_reg]
GO

ALTER TABLE [dbo].[reg_res_archivo_conciliacion]  WITH CHECK ADD  CONSTRAINT [FK_reg_res_archivo_conciliacion_diaco_queja] FOREIGN KEY([id_queja])
REFERENCES [dbo].[diaco_queja] ([id_queja])
GO

ALTER TABLE [dbo].[reg_res_archivo_conciliacion] CHECK CONSTRAINT [FK_reg_res_archivo_conciliacion_diaco_queja]
GO


ALTER TABLE [dbo].[reg_res_archivo_conciliacion]  WITH CHECK ADD  CONSTRAINT [FK_reg_res_archivo_conciliacion_diaco_usuario] FOREIGN KEY([creado_por])
REFERENCES [dbo].[diaco_usuario] ([id_usuario])
GO

ALTER TABLE [dbo].[reg_res_archivo_conciliacion] CHECK CONSTRAINT [FK_reg_res_archivo_conciliacion_diaco_usuario]
GO
