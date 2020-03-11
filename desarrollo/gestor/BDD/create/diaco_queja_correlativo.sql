USE [DIACO]
GO

/****** Object:  Table [dbo].[diaco_queja_correlativo]    Script Date: 01/05/2019 09:23:11 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[diaco_queja_correlativo](
	[anio] [nchar](10) NOT NULL,
	[correlativo] [nchar](10) NOT NULL,
 CONSTRAINT [PK_diaco_queja_correlativo] PRIMARY KEY CLUSTERED 
(
	[anio] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

