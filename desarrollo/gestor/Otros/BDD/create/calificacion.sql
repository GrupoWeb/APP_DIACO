    create table diaco_catalogo_catagoria_calificacion
    (
        id_categoria_calificacion INT    not null identity(1,1) primary key,
        nombre_categoria varchar(50)
    );



create table diaco_calificacion_usuario_prov
(
     id_calificacion_usuario_prov int IDENTITY(1,1) NOT NULL,
     id_proveedor                 INT FOREIGN KEY REFERENCES diaco_proveedor(id_proveedor),
     id_categoria_calificacion    INT FOREIGN KEY REFERENCES diaco_catalogo_catagoria_calificacion(id_categoria_calificacion),
     id_instalacion_mobil         VARCHAR(50),
     fecha_calificacion           datetime,
     calificacion                 int     
)


create table diaco_pts_general_calif_prov
(
     id_pts_general_calif_prov    int IDENTITY(1,1) NOT NULL,
     id_proveedor                 INT FOREIGN KEY REFERENCES diaco_proveedor(id_proveedor),
     id_categoria_calificacion    INT FOREIGN KEY REFERENCES diaco_catalogo_catagoria_calificacion(id_categoria_calificacion),
     num_calificaciones           INT,
     promedio                     decimal(3,2)        

)


CREATE TRIGGER diaco_trg_calificacion_generalON diaco_calificacion_usuario_prov
AFTER INSERT, UPDATE AS BEGIN   
 SET NOCOUNT ON;   
  DECLARE @num_calificaciones_actual integer, @promedio_actual decimal(3,2), @id_prov integer, @id_categoria_calif integer, @num_calificaciones_nuevo integer, @promedio_nuevo decimal(3,2), @calificacion_nueva integer, @calificacion_actual integer;    
       select @id_prov = d.id_proveedor , @id_categoria_calif= d.id_categoria_calificacion, @calificacion_actual= d.calificacion  
         FROM DELETED AS d;    
         if @id_prov is not null 
         BEGIN   
          select @num_calificaciones_actual=ptsgen.num_calificaciones ,@promedio_actual = ptsgen.promedio from    
          diaco_pts_general_calif_prov ptsgen where ptsgen.id_proveedor=@id_prov and ptsgen.id_categoria_calificacion=@id_categoria_calif;     
           select @calificacion_nueva= i.calificacion        FROM INSERTED AS i;     
           set @promedio_nuevo= (@num_calificaciones_actual*@promedio_actual  - @calificacion_actual +@calificacion_nueva)/@num_calificaciones_actual;        
               update diaco_pts_general_calif_prov  SET  promedio=@promedio_nuevo WHERE     
                id_proveedor= @id_prov and id_categoria_calificacion=@id_categoria_calif;   
           END     
           ELSE   
            BEGIN   
              select @id_prov = i.id_proveedor , @id_categoria_calif= i.id_categoria_calificacion, @calificacion_nueva= i.calificacion 
              FROM INSERTED AS i;    
              select @num_calificaciones_actual=ptsgen.num_calificaciones ,@promedio_actual = ptsgen.promedio from  
              diaco_pts_general_calif_prov ptsgen where     
              ptsgen.id_proveedor=@id_prov and ptsgen.id_categoria_calificacion=@id_categoria_calif;   
                IF @num_calificaciones_actual is null      
                 BEGIN     
				    insert into diaco_pts_general_calif_prov(id_proveedor,id_categoria_calificacion,num_calificaciones,promedio) 
                       VALUES(@id_prov,@id_categoria_calif,1,@calificacion_nueva);      
                 END   
                   ELSE 
                    BEGIN   
                     set @num_calificaciones_nuevo = @num_calificaciones_actual+1; 
                     set @promedio_nuevo= (@num_calificaciones_actual*@promedio_actual  + @calificacion_nueva)/@num_calificaciones_nuevo;       
                     update diaco_pts_general_calif_prov  SET num_calificaciones=@num_calificaciones_nuevo, promedio=@promedio_nuevo WHERE
                     id_proveedor= @id_prov and id_categoria_calificacion=@id_categoria_calif;     
                    END
           END
                    
  END



http://www.sqlservertutorial.net/sql-server-stored-procedures/variables/
http://www.sqlservertutorial.net/sql-server-triggers/sql-server-create-trigger/
