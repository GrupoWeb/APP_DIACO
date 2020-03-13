USE [DIACO]
GO

/****** Object:  Table [dbo].[diaco_categoria_imagen]    Script Date: 18/03/2019 15:01:51 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[diaco_categoria_imagen](
	[id] [int] NOT NULL,
	[categoria] [varchar](50) NULL,
	[usuario_agrego] [int] NULL,
	[fecha_agregado] [datetime] NULL,
	[habilitado] [varchar](1) NULL,
 CONSTRAINT [PK_diaco_categoria_imagen] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

