USE [DIACO]
GO

/****** Object:  Table [dbo].[diaco_programa_audiencia]    Script Date: 09/04/2019 16:12:01 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[diaco_programa_audiencia](
	[id_progra_aud] [int] IDENTITY(1,1) NOT NULL,
	[id_audiencia] [int] NULL,
	[fecha_programada] [datetime] NULL,
	[activo] [bit] NULL,
 CONSTRAINT [PK_diaco_programa_audiencia] PRIMARY KEY CLUSTERED 
(
	[id_progra_aud] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

