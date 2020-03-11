import { Component, OnInit, ViewChild,ElementRef,Input } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { RegistrosService } from '../shared/registros.service';
import { FileManagerService } from '../shared/file-manager.service';
import { QuejaService } from '../shared/queja.service';
import { LSTCMB_SEDES, LSTCMB_AREAS, LSTCMB_CONCILIADORES, BaseCmbClass } from '../atencion-consumidor-const';
import { FormGroup, FormControl  } from '@angular/forms';
import { timer } from 'rxjs';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { HttpClient, HttpHeaders, HttpErrorResponse,HttpRequest,HttpEvent,HttpEventType,HttpResponse } from '@angular/common/http';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-incomparecencia',
  templateUrl: './incomparecencia.component.html',
  styleUrls: ['./incomparecencia.component.css'],
  animations: [
		trigger('EnterLeave', [
	  state('flyIn', style({ transform: 'translateX(0)' })),
	  transition(':enter', [
		style({ transform: 'translateX(-100%)' }),
		animate('100ms 150ms ease-in')
	  ]),
	  transition(':leave', [
		animate('300ms ease-out', style({ transform: 'translateX(-100%)' }))
	  ])
	])]
})
export class IncomparecenciaComponent implements OnInit {
  @ViewChild('attachmentCtrl') 
  ELattachment:ElementRef;
  @ViewChild('attachmentCtrl2') 
  ELattachment2:ElementRef;
  attachmentCtrl;attachmentCtrl2;
  flagInfoError;
  progressperc:Number;progressperc2:Number;
  progressaccent:String;progressaccent2:String;
  UploadFinished:boolean;UploadFinished2:boolean;
  flagEditable:boolean;
  loaderror:boolean;
  registrodata;linkdescription;idimagenactacon;tipoactacon;
  registrodata2;linkdescription2;idimagenactacon2;tipoactacon2;
  lst_queja;flagformvisible;

  constructor(private _registrosservice:RegistrosService, private _fileManagerService:FileManagerService, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<IncomparecenciaComponent>, private _quejaService: QuejaService) { 
	this.flagInfoError=false;
	this.flagEditable=false;
	this.progressperc=0;
    this.progressaccent="primary";
    this.UploadFinished=true;
	this.linkdescription='';
	this.progressperc2=0;
    this.progressaccent2="primary";
    this.UploadFinished2=true;
	this.linkdescription2='';
	this.flagformvisible=0;
	this.loaderror=false;
  }

  ngOnInit() {
	  this.GetLink(this.data.NoQueja);
	  this.GetLink2(this.data.NoQueja);
	  this.QuejaCheck();
	  this.SetSecTimerForm();
  }

	QuejaCheck(){
		let tempstr='';
		this._quejaService.getDataQueja(this.data.NoQueja).subscribe((retvalue)=>{
			if(retvalue["reason"] == 'OK'){
				tempstr=retvalue['value'];
				if(tempstr != null)	{
					this.lst_queja=JSON.parse('['+retvalue["value"].slice(0, -1) +']');
					console.log(this.lst_queja);
					this.flagformvisible++;
					//verificar estado para permitir edicion en formulario
					if(this.lst_queja[0]['id_estado_queja']>=101 && this.lst_queja[0]['id_estado_queja']<=106)
						//si es rol 3 administrador, puede editar
						if(this.data.Rol == 3)
							this.flagEditable=true;
						else{
							//si es otro rol, revisar si la queja esta asignada a este usuario
							if(this.lst_queja[0]['usuario_asignado'] == this.data.Usuario)
								this.flagEditable=true;
							else
								this.flagEditable=false;
						}
					else
						this.flagEditable=false;
				}else{
					console.log('Información de queja no pudo ser obtenida.');
					this.flagInfoError=true;
					this.SetSecTimerInfoError();
				}				
			}else{
				console.log('Rest service response ERROR.');
				this.flagInfoError=true;
				this.SetSecTimerInfoError();
			}		
		},(error)=>{
			console.log(error);
			this.flagInfoError=true;
			this.SetSecTimerInfoError();
		});	
	}

	ReadFile(){
		console.log('readfile');
		//2 plantilla incomparecencia
		this._fileManagerService.getPlantilla(2).subscribe((Data)=>{
			console.log(Data);
			//tipo 5 docx, word document
			this._fileManagerService.FileDownLoadChoose(Data,5);
			this.flagInfoError=false;
		},(error)=>{
			console.log(error);
			this.flagInfoError=true;
			this.SetSecTimerInfoError();
		});
  }  

  downLoadActaIncomparecencia(){
	console.log('entro a downLoadActaIncomparecencia : ');
	this._registrosservice.addGet_ActaIncomparecencia(this.data.NoQueja).subscribe((Data)=>{
	console.log('entro a downLoadActaIncomparecencia2');
		this._registrosservice.FileDownLoadChoose(Data,6);
		this.flagInfoError=false;
	},(error)=>{
		console.log(error);
		 this.flagInfoError=true;
	     this.SetSecTimerInfoError();
	});
}

  ReadLink(){
		this._fileManagerService.getImageInterna(this.idimagenactacon).subscribe((Data)=>{
			console.log(this.idimagenactacon,this.tipoactacon);
			this._fileManagerService.FileDownLoadChoose(Data,this.tipoactacon);
			this.flagInfoError=false;
		},(error)=>{
			console.log(error);
			this.flagInfoError=true;
			this.SetSecTimerInfoError();
		});
  }  
  ReadLink2(){
		this._fileManagerService.getImageInterna(this.idimagenactacon2).subscribe((Data)=>{
			console.log(this.idimagenactacon2,this.tipoactacon2);
			this._fileManagerService.FileDownLoadChoose(Data,this.tipoactacon2);
			this.flagInfoError=false;
		},(error)=>{
			console.log(error);
			this.flagInfoError=true;
			this.SetSecTimerInfoError();
		});
  }
  GetLink(idqueja){
	  //5 acta de incomparecencia
	  let idcategoria=5;
	  this._fileManagerService.getCatFile(idqueja, idcategoria).subscribe((retvalue)=>{
			if(retvalue["reason"] == 'OK'){
				var tempstr=retvalue['value'];
				if(tempstr != null && tempstr != '')	{
					this.registrodata=JSON.parse('['+retvalue["value"].slice(0, -1) +']');
					this.linkdescription=this.registrodata[0]['descripcion_imagen_otros'];
					this.idimagenactacon=this.registrodata[0]['id_imagen_interno'];
					this.tipoactacon=this.registrodata[0]['id_tipo_imagen'];
					console.log(this.registrodata);
				}else{
					this.linkdescription='';
				}
				this.flagformvisible++;
			}else{
				console.log('Rest service response ERROR.');
				this.flagInfoError=true;
				this.SetSecTimerInfoError();
			}		
		},(error)=>{
			console.log(error);
			this.flagInfoError=true;
			this.SetSecTimerInfoError();
		});
  }
  GetLink2(idqueja){
	  //7 acta de incomparecencia scan
 	  let idcategoria=7;
	  this._fileManagerService.getCatFile(idqueja, idcategoria).subscribe((retvalue)=>{
			if(retvalue["reason"] == 'OK'){
				var tempstr=retvalue['value'];
				if(tempstr != null && tempstr != '')	{
					this.registrodata2=JSON.parse('['+retvalue["value"].slice(0, -1) +']');
					this.linkdescription2=this.registrodata2[0]['descripcion_imagen_otros'];
					this.idimagenactacon2=this.registrodata2[0]['id_imagen_interno'];
					this.tipoactacon2=this.registrodata2[0]['id_tipo_imagen'];
					console.log(this.registrodata2);
				}else{
					this.linkdescription2='';
				}
				this.flagformvisible++;
			}else{
				console.log('Rest service response ERROR.');
				this.flagInfoError=true;
				this.SetSecTimerInfoError();
			}		
		},(error)=>{
			console.log(error);
			this.flagInfoError=true;
			this.SetSecTimerInfoError();
		});
  }
  
	SetSecTimerInfoError(){
		const source = timer(5000);
		const subscribe = source.subscribe(val => this.flagInfoError=false);
	}
	SetSecTimerProgressComplete(){
		const source = timer(2000);
		const subscribe = source.subscribe(val => {this.UploadFinished=true;this.progressperc=0;});
	}
	SetSecTimerProgressComplete2(){
		const source = timer(2000);
		const subscribe = source.subscribe(val => {this.UploadFinished2=true;this.progressperc2=0;});
	}
	DownloadProgressBar(operation){
		if(operation=='finished'){
			this.SetSecTimerProgressComplete();
		}else{
			this.UploadFinished=false;			
		}
	}
	DownloadProgressBar2(operation){
		if(operation=='finished'){
			this.SetSecTimerProgressComplete2();
		}else{
			this.UploadFinished2=false;			
		}
	}
	SetSecTimerForm(){
		const source = timer(15000);
		const subscribe = source.subscribe(val => this.TimerForm() );
	}
	TimerForm(){
		if(this.flagformvisible<3){
			this.loaderror=true;	
			this.flagformvisible=-1;
		}
	}
	
	UploadFile(){
		console.log(this.ELattachment);
	  if(this.ELattachment.nativeElement.files.item(0)){
		  console.log(this.ELattachment.nativeElement.files.item(0));
		  if( this._fileManagerService.VerifyFileSizeInt(this.ELattachment.nativeElement.files.item(0).size) ){
			  var tipo_imagen=this._fileManagerService.VerifyDOCX(this.ELattachment.nativeElement.files.item(0).type, this.ELattachment.nativeElement.files.item(0).name);
			  if(tipo_imagen){
				  console.log(this.ELattachment.nativeElement.files[0]);
					this.DownloadProgressBar('start');
					//5- acta incomparecencia
					this._fileManagerService.postNewFile(this.ELattachment.nativeElement.files.item(0),this.data.NoQueja,5,1).subscribe(event => {
						if (event.type === HttpEventType.UploadProgress) {
							this.progressperc=Math.round(100 * event.loaded / event.total);
						} else if (event instanceof HttpResponse) {
						  console.log(event);
						  this.DownloadProgressBar('finished');
						  if(event['body']['reason'] != 'OK'){
							  console.log('Falla al subir el archivo');
							  this.flagInfoError=true;
							  this.SetSecTimerInfoError();
						  }else{
								this.GetLink(this.data.NoQueja);
						  }							  
						}
					  },(error)=>{
							console.log(error);
							this.flagInfoError=true;
							this.SetSecTimerInfoError();
							this.DownloadProgressBar('finished');
					  });
			  }else{
				  alert('Solo se permite subir archivos de tipo: DOCX');
			  }
		  }else{
			  alert('El tamaño máximo de archivo es de 1 Mb, por favor revise su archivo.');
		  }
	  }
	}
	UploadFile2(){
	  if(this.ELattachment2.nativeElement.files.item(0)){
		  console.log(this.ELattachment2.nativeElement.files.item(0));
		  if( this._fileManagerService.VerifyFileSize(this.ELattachment2.nativeElement.files.item(0).size) ){
			  var tipo_imagen=this._fileManagerService.TranslateTipoImagen(this.ELattachment2.nativeElement.files.item(0).type, this.ELattachment2.nativeElement.files.item(0).name);
			  if(tipo_imagen){
				  console.log(this.ELattachment2.nativeElement.files[0]);
					this.DownloadProgressBar2('start');
					this._fileManagerService.postNewScan(this.ELattachment2.nativeElement.files.item(0),this.data.NoQueja,7,tipo_imagen,1).subscribe(event => {
						if (event.type === HttpEventType.UploadProgress) {
							this.progressperc2=Math.round(100 * event.loaded / event.total);
						} else if (event instanceof HttpResponse) {
						  console.log(event);
						  this.DownloadProgressBar2('finished');
						  if(event['body']['reason'] != 'OK'){
							  console.log('Falla al subir el archivo');
							  this.flagInfoError=true;
							  this.SetSecTimerInfoError();
						  }else{
							  this.GetLink2(this.data.NoQueja);
						  }
							  
						}
					  },(error)=>{
							console.log(error);
							this.flagInfoError=true;
							this.SetSecTimerInfoError();
							this.DownloadProgressBar('finished');
					  });
			  }else{
				  alert('Solo se permite subir archivos de tipo: PDF, PNG, GIF y JPG.');
			  }
		  }else{
			  alert('El tamaño máximo de archivo es de 1 Mb, por favor revise su archivo.');
		  }
	  }
	}
	
	closeDialog() {
		this.dialogRef.close();
	}



}
