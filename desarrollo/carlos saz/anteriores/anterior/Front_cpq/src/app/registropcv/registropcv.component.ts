import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FileUploader, FileItem } from "ng2-file-upload";
import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams } from '@angular/common/http';
import { BASE_URL_REST_FILE2 } from '../conc-virt-const';
import { ResponseRs } from '../shared/response-rs.model';
import { Subject } from 'rxjs';
import { SubmitFormService } from "../shared/submit-form.service";
import { Departamento } from '../shared/departamento.model';
import { DepartamentosService } from '../shared/departamentos.service';
import { Municipio } from '../shared/municipio.model';
import { MunicipiosService } from '../shared/municipios.service';
import {MatDialog, MatDialogConfig} from '@angular/material';
import { NgxSoapService, Client, ISoapMethodResponse } from 'ngx-soap';
import { ProveedoresService } from '../shared/proveedores.service';
import { Proveedorpcv } from '../shared/proveedorpcv.model';
//import { ReCaptchaV3Service } from 'ngx-captcha';

@Component({
  selector: 'app-registropcv',
  templateUrl: './registropcv.component.html',
  styleUrls: ['./registropcv.component.scss']
})
export class RegistropcvComponent implements OnInit {

  registropcvForm: FormGroup;
  @ViewChild('filDpi')
  filDpi: ElementRef;
  departamentos: Departamento[];
  departamentosSubscription: Subscription;
  municipios: Municipio[];
  municipiosSubscription: Subscription;
  existingProveedor : Proveedorpcv;
  nombre_ : string;
  telefono_ : string;
  correo_ : string; 
  continua : string = "0";
  completado : boolean = false;
  
  uploader = new FileUploader({
    itemAlias: 'document'
  });
  
	otro: FileItem;

	dpi: FileItem;
	dpiIndex: number;
	formulario: FileItem;
	formularioIndex: number;
	nombramiento: FileItem;
	nombramientoIndex: number;
	patente: FileItem;
	patenteIndex: number;
	rtu : FileItem;
	rtuIndex : number;
	success: boolean = false;
	mjsError:string  = '';
	str_usuario:string = '';
	client: Client;
	intA: string;
	intB: string;
	vidproveedor : number;

	operation = new Subject<Proveedorpcv>();

 	 
  constructor(private router: Router
     ,private dialog: MatDialog
	 ,private departamentosService: DepartamentosService
     ,private municipiosService: MunicipiosService
	 ,private soap: NgxSoapService
	 , private http: HttpClient
	 ,private proveedoresService: ProveedoresService
	 //,private reCaptchaV3Service: ReCaptchaV3Service
	 ,private formBuilder: FormBuilder
	) {

	}

  ngOnInit() {
	 ///this.registropcvForm = this.formBuilder.group({
      
    //});  
	// cargar departamentos
    this.departamentosSubscription = this.departamentosService.fetchData().subscribe(
      res => {
        this.departamentos = res.value;
      }
    )
    this.initregistropcvForm(null);
  }
  


  initregistropcvForm(proveedor: Proveedorpcv) {
	  if (proveedor) {
		  this.nombre_   = "Nombre:   "+ proveedor.nombre;
		  this.telefono_ = "Telefono: " + proveedor.telefono;
		  this.correo_   = "Correo:   " + proveedor.correo;
	  }
    this.registropcvForm = new FormGroup({
      'nit': new FormControl(proveedor ? proveedor.nit : '', Validators.required)
      ,'telefono': new FormControl(proveedor ? proveedor.telefonoNotif : '', Validators.required)
      ,'email': new FormControl(proveedor ? proveedor.correoNotif : '', Validators.required)
	  ,'codigoDepartamento': new FormControl(proveedor ? proveedor.idDepartamento : '', Validators.required)
	  ,'codigoMunicipio': new FormControl(proveedor ? proveedor.idMunicipio : '', Validators.required)
	  ,'direccionDetalle': new FormControl(proveedor ? proveedor.direccion : '', Validators.required)
	  //,'nombre' : new FormControl(proveedor ? proveedor.nombre : '', Validators.required)
	  //,'razonSocial' : new FormControl(proveedor ? proveedor.razonSocial : '', Validators.required)
	  ,'tipoProveedor' : new FormControl(1, Validators.required)
	  ,'recaptcha': new FormControl('', Validators.required)
    });
	if (proveedor) {
	  // seleccionar departamento
      this.onDepartamentoChanged(proveedor.idDepartamento != undefined ? proveedor.idDepartamento : 0);
	  this.registropcvForm.patchValue({
        'codigoDepartamento': proveedor.idDepartamento
      });
	  
	  // seleccionar municipio
      this.onMunicipioChanged();
      this.registropcvForm.patchValue({
        'codigoMunicipio': proveedor.idMunicipio
      });
	}
  }

  onFileChanged(type: string) {
    if (type == 'FORM') {
      if (this.formulario) {
        let formularioItem = this.uploader.queue[this.formularioIndex];
        this.uploader.removeFromQueue(formularioItem);
      }
      this.formulario = this.uploader.queue[this.uploader.queue.length - 1];
      this.formularioIndex = this.uploader.queue.length - 1;
    } else if (type == 'DPI') {
      if (this.dpi) {
        let dpiItem = this.uploader.queue[this.dpiIndex];
        this.uploader.removeFromQueue(dpiItem);
      }
      this.dpi = this.uploader.queue[this.uploader.queue.length - 1];
      this.dpiIndex = this.uploader.queue.length - 1;
    } else if (type == 'NOMB') {
      if (this.nombramiento) {
        let nombramientoItem = this.uploader.queue[this.nombramientoIndex];
        this.uploader.removeFromQueue(nombramientoItem);
      }
      this.nombramiento = this.uploader.queue[this.uploader.queue.length - 1];
      this.nombramientoIndex = this.uploader.queue.length - 1;
    } else if (type == 'PATE') {
      if (this.patente) {
        let patenteItem = this.uploader.queue[this.patenteIndex];
        this.uploader.removeFromQueue(patenteItem);
      }
      this.patente = this.uploader.queue[this.uploader.queue.length - 1];
      this.patenteIndex = this.uploader.queue.length - 1;
    } else if (type == 'RTU') {
      if (this.rtu) {
        let rtuItem = this.uploader.queue[this.rtuIndex];
        this.uploader.removeFromQueue(rtuItem);
      }
      this.rtu = this.uploader.queue[this.uploader.queue.length - 1];
      this.rtuIndex = this.uploader.queue.length - 1;
    } 
	

	
  }

  onRemoveClicked(index: number) {
    let removeItem = this.uploader.queue[index];
    this.uploader.removeFromQueue(removeItem);
    if (index == this.formularioIndex) {
      this.formularioIndex = null;
      this.formulario = null;
    } else if (index == this.dpiIndex) {
      this.dpiIndex = null;
      this.dpi = null;
    } else if (index == this.nombramientoIndex) {
      this.nombramientoIndex = null;
      this.nombramiento = null;
    } else if (index == this.patenteIndex) {
      this.patenteIndex = null;
      this.patente = null;
    } else if (index == this.rtuIndex) {
      this.rtuIndex = null;
      this.rtu = null;
    } 
  }

  public onSubmit() {
	 
    let proveedor: Proveedorpcv = new Proveedorpcv();
	if (this.registropcvForm.value.nit=="" || this.registropcvForm.value.nit == undefined) {
		this.mjsError +=  "- Ingrese NIT.  " + "\r\n";
	} else {
		proveedor.nit = this.registropcvForm.value.nit;
	}
	if (this.registropcvForm.value.telefono=="" || this.registropcvForm.value.telefono == undefined) {
		this.mjsError +=  "- Ingrese numero de telefono.  " + "\r\n";
	} else {
		proveedor.telefonoNotif = this.registropcvForm.value.telefono;
	}
	if (this.registropcvForm.value.email == "" || this.registropcvForm.value.email == undefined) {
		this.mjsError +=  "- Ingrese correo.  " + "\r\n";
	} else {
		proveedor.correoNotif = this.registropcvForm.value.email;
	}
	if (this.registropcvForm.value.direccionDetalle=="" || this.registropcvForm.value.direccionDetalle == undefined ) {
		this.mjsError +=  "- Ingrese su direccion.  " + "\r\n";
	} else {
		proveedor.direccion = this.registropcvForm.value.direccionDetalle;
	}
	if (this.registropcvForm.value.codigoDepartamento > 0) {
		proveedor.idDepartamento = this.registropcvForm.value.codigoDepartamento;
	} else {
		this.mjsError +=  "- Seleccione departamento.  " + "\r\n";
	}
	if (this.registropcvForm.value.codigoMunicipio > 0) {
		proveedor.idMunicipio = this.registropcvForm.value.codigoMunicipio;
	} else {
		this.mjsError +=  "- Seleccione municipio.  " + "\r\n";
	}
	if (this.registropcvForm.value.tipoProveedor=='1') {
			if (this.dpi != null) {
			} else {
				this.mjsError +=  "- Ingrese DPI dueño o Representante legal.  " + "\r\n";
			}
			if (this.rtu != null) {
			} else {
				this.mjsError +=  "- Ingrese Constancia de Registro de Inscripción Tributaria (RTU).  " + "\r\n";
			}
	}
	if (this.registropcvForm.value.tipoProveedor=='2') {	
		if (this.dpi != null) {
		} else {
			this.mjsError +=  "- Ingrese DPI dueño o Representante legal.  " + "\r\n";
		}
		if (this.rtu != null) {
		} else {
			this.mjsError +=  "- Ingrese Constancia de Registro de Inscripción Tributaria (RTU).  " + "\r\n";
		}
		if (this.patente != null) {
		} else {
			this.mjsError +=  "- Ingrese Patente de sociedad y empresa.  " + "\r\n";
		}		
	}
	if (this.registropcvForm.value.tipoProveedor=='3') {	
		if (this.formulario != null) {
		} else {
			this.mjsError +=  "- Ingrese Formulario de registro.  " + "\r\n";
		}
		if (this.nombramiento != null) {
		} else {
			this.mjsError +=  "- Ingrese Nombramiento de representante legal.  " + "\r\n";
		}
		if (this.dpi != null) {
		} else {
			this.mjsError +=  "- Ingrese DPI dueño o Representante legal.  " + "\r\n";
		}
		if (this.patente != null) {
		} else {
			this.mjsError +=  "- Ingrese Patente de sociedad y empresa.  " + "\r\n";
		}
		if (this.rtu != null) {
		} else {
			this.mjsError +=  "- Ingrese Constancia de Registro de Inscripción Tributaria (RTU).  " + "\r\n";
		}
	}
	
	if (this.mjsError=='') {
	
	} else {
		alert(this.mjsError);
		this.mjsError = "";
		return false;
	}
	
	proveedor.nombre = this.existingProveedor.nombre;
	proveedor.id = this.existingProveedor.id;
	proveedor.razonSocial = this.existingProveedor.razonSocial;
	proveedor.telefono = this.existingProveedor.telefono;
	proveedor.correo = this.existingProveedor.correo;
	proveedor.notaRechazo = this.existingProveedor.notaRechazo;
	proveedor.estado = (this.existingProveedor.estado ? this.existingProveedor.estado : 'P');

		this.proveedoresService.saveDataPCV(proveedor).subscribe(
		  (retvalue) => {
 
			if(retvalue){
					var tempstr=retvalue['value'];
					
					if(tempstr != null && tempstr != '')	{
						//this.registrodata=JSON.parse('['+retvalue["value"].slice(0, -1) +']');
						//this.vanio = tempstr.anio;
						//this.vsecuencia = tempstr.noQueja;
						this.vidproveedor = tempstr.id;
		
		
		
		if (this.uploader.queue.length > 	0) {
			let estado : boolean = true;
			// this.success = true;
			this.uploader.onBeforeUploadItem = (removeItem) => {
					  	for (let i = 0; i < this.uploader.queue.length; i++) {
							//console.log("modifica url - inicio");
							//console.log(i);
							let removeItem = this.uploader.queue[i];
							if (removeItem == this.dpi) {
								//console.log("cambia url dpi");
								this.uploader.queue[i].url = BASE_URL_REST_FILE2 + 'proveedores/upload?id_proveedor='+this.vidproveedor+"&id_categoria_imagen="+16+"&correo=0&data=0";
								//console.log(this.uploader.queue[i].url);
								//console.log(removeItem);
							} else {
								if (removeItem == this.formulario) {
									//console.log("cambia url formulario");
									this.uploader.queue[i].url = BASE_URL_REST_FILE2 + 'proveedores/upload?id_proveedor='+this.vidproveedor+"&id_categoria_imagen="+14+"&correo=0&data=0";
									//console.log(this.uploader.queue[i].url);	
									//console.log(removeItem);
								} else {
									if (removeItem == this.nombramiento) {
									//console.log("cambia url nombramiento");
									this.uploader.queue[i].url = BASE_URL_REST_FILE2 + 'proveedores/upload?id_proveedor='+this.vidproveedor+"&id_categoria_imagen="+15+"&correo=0&data=0";
									//console.log(this.uploader.queue[i].url);	
									//console.log(removeItem);
									} else {
										if (removeItem == this.patente) {
										//console.log("cambia url patente");
										this.uploader.queue[i].url = BASE_URL_REST_FILE2 + 'proveedores/upload?id_proveedor='+this.vidproveedor+"&id_categoria_imagen="+17+"&correo=0&data=0";
										//console.log(this.uploader.queue[i].url);	
										//console.log(removeItem);
										} else {
											if (removeItem == this.rtu) {
												//console.log("cambia url patente");
												this.uploader.queue[i].url = BASE_URL_REST_FILE2 + 'proveedores/upload?id_proveedor='+this.vidproveedor+"&id_categoria_imagen="+22+"&correo=0&data=0";
												//console.log(this.uploader.queue[i].url);	
												//console.log(removeItem);
											} else {
												//console.log("cambia url otro");
												this.uploader.queue[i].url = BASE_URL_REST_FILE2 + 'proveedores/upload?id_proveedor='+this.vidproveedor+"&id_categoria_imagen="+1+"&correo=0&data=0";
												//console.log(this.uploader.queue[i].url);
												//console.log(removeItem);
											}
										} // remove patente
									} // remove nombramiento
								} // remove formulario
							} //remove dpi
							//console.log("modifica url - fin");	
						}
						
				}
				//console.info("ingreso files");
			  this.uploader.setOptions({
				itemAlias: 'file'
			  });
			
			  this.uploader.onCompleteAll = () => {
				// finalizo la carga de todos los archivos
				///this.vidimagen = this.vidimagen - 1;
				this.operation.next(retvalue.value);
				
				
				console.info("ingreso files onclomplete",estado);
				if (estado)  {
    				this.success = true;
					this.completado = false; 
					this.initregistropcvForm(null);
				    while (this.uploader.queue.length) {
				      this.uploader.queue[0].remove();
				    }
				} else {
					//this.success = false;
					alert("Ocurrio un error al cargar sus archivos, por favor verifique.  Gracias.");
				}
			  };
			  this.uploader.onCompleteItem = (item, uploadResponse, status, headers) => {
				// finalizo la carga de un archivo
				//this.vidimagen = this.vidimagen - 1;
				//console.info("ingreso files oncompleteitem",status);
				if (status == 0)  {
					//this.success = false;
					estado = false;
				} else {
					//this.success = true;
				}
			  };

			  this.uploader.uploadAll();
			  //console.info("ingreso files uploadall");
			} else {
			  this.operation.next(retvalue.value);
			}
		
				
					}else{
						////console.log('no llego');
					}
				}else{
					////console.log('Rest service response ERROR.');
				}  
			  
		  
		  }
		 
		);
		//console.info(this.vsecuencia);
		//console.info(this.vanio);
			
  }
  
  onDismissClicked() {
    this.success = false;
	this.continua = "0";
	this.nombre_ = "";
	this.telefono_ = "";
	this.correo_ = "";
	this.dpi = null;
	this.otro = null;
	this.formulario = null;
	this.nombramiento = null;
	this.patente = null;
	this.completado = false;
	//this.uploader.queue = null;
	
	if (this.uploader.queue.length > 0) {
		let pItem = this.uploader.queue[0];
		this.uploader.removeFromQueue(pItem);
	}
	this.registropcvForm.reset();
  }

  onHomeClicked() {
	this.CerrarSesion();  
    this.router.navigate(['/Login']);
  }
  
  CerrarSesion(){
	  /*
		let loc_token=this._submitFormService.Get_token();
		console.log(loc_token);
		if(loc_token == '')
			this._seguridadService.RedireccionarLogin();
		this._seguridadService.Logout(loc_token).subscribe((retvalue)=>{
			console.log('cerrar sesion',retvalue);
			this._seguridadService.RedireccionarLogin();		
		},(error)=>{
			this._seguridadService.RedireccionarLogin();
		});*/
	}

  
  public onDepartamentoChanged(_departamento : number) {
    // cargar municipios
	//console.log("depto ",_departamento);
    this.municipiosSubscription = this.departamentosService.fetchMunicipios(_departamento != undefined ? _departamento : this.registropcvForm.value.codigoDepartamento).subscribe(
      res => {
        this.municipios = res.value;
      }
    );
  }

  public onMunicipioChanged() {
    // cargar sedes
	/*
    this.municipiosSubscription = this.municipiosService.fetchSedes(this.registropcvForm.value.idMunicipio).subscribe(
      res => {
        this.sedes = res.value;
      }
    );
	*/
  }

  
  /***
	busca nit en servicio 
  ***/
  public findByNITtoSAT() {
	  let pnit = this.registropcvForm.value.nit;
	  this.completado = true;
	 this.proveedoresService.fetchDataByWsProveedor(pnit).subscribe(
      (response) => {
		let tempstr=response['value'];
        if (tempstr != null || tempstr != undefined) {

		   //console.info("existe",tempstr);
		   this.initregistropcvForm(tempstr);
		   this.existingProveedor = tempstr;
		   this.continua = "1"; 
		   this.completado = true;
		  } else {
			 
			alert("No existe información para el NIT ingresado, por favor verifique. Gracias");	
			this.registropcvForm.reset();
			this.completado = false;
		  }
      }
    );	
	//console.info("findByTokenProveedor end ",this.quejasService.quejat);
  }


	//captcha
	public readonly siteKey = '6LcvoUgUAAAAAJJbhcXvLn3KgG-pyULLusaU4mL1';


}
