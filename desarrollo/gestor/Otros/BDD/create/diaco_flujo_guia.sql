USE [DIACO]
GO

/****** Object:  Table [dbo].[diaco_flujo_guia]    Script Date: 04/04/2019 11:46:07 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[diaco_flujo_guia](
	[id_queja] [int] NOT NULL,
	[atcon_conc_previa] [bit] NULL,
	[atcon_verif_datos] [bit] NULL,
	[atcon_com_permanente] [bit] NULL,
	[atcon_audiencia_conc] [bit] NULL,
	[atcon_audiencia_prueba] [bit] NULL,
 CONSTRAINT [PK_diaco_flujo_guia] PRIMARY KEY CLUSTERED 
(
	[id_queja] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

