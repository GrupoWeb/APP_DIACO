USE [DIACO]
GO

/****** Object:  Table [dbo].[diaco_registro]    Script Date: 02/05/2019 14:08:07 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[diaco_registro](
	[id_registro] [int] NOT NULL,
	[nombre] [varchar](100) NULL,
	[prefijo] [varchar](20) NULL,
	[correlativo] [int] NULL,
	[creado] [datetime] NULL,
	[version] [varchar](10) NULL,
 CONSTRAINT [PK_diaco_registro] PRIMARY KEY CLUSTERED 
(
	[id_registro] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

