USE [DIACO]
GO

/****** Object:  Table [dbo].[diaco_repositorio]    Script Date: 19/03/2019 07:37:23 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[diaco_repositorio](
	[id] [int] NOT NULL,
	[nombre] [varchar](50) NULL,
	[repositorio] [varchar](100) NULL,
	[activo] [bit] NULL,
	[usuario_creo] [int] NULL,
	[fecha_creado] [datetime] NULL,
 CONSTRAINT [PK_diaco_repositorio] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

