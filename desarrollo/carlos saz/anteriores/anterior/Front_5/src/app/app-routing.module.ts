import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { MainConcVirtualComponent }      from './main-conc-virtual/main-conc-virtual.component';
//import { LoginComponent } from './login/login.component';
//import { ConsumidorComponent } from './consumidor/consumidor.component';
//import { ProveedorComponent } from './proveedor/proveedor.component';
//import { QuejaComponent } from './queja/queja.component';
import { QuejainiComponent } from './quejaini/quejaini.component';
import { QuejaconComponent } from './quejacon/quejacon.component';
import { QuejaextComponent } from './quejaext/quejaext.component';
//import { BuscaprovComponent } from './buscaprov/buscaprov.component'
import { BuscaprovComponent}  from './buscaprov/buscaprov.component';
//import { QuejaiuComponent } from './quejaiu/quejai.component';

const routes: Routes = [
//----------------------------------------------------------------
	//{ path: '', redirectTo: '/quejaini', pathMatch: 'full' },
//----------------------------------------------------------------
//  { path: 'mainConcVirt', component: MainConcVirtualComponent },
//  { path: 'Login', component: LoginComponent },
//	{ path: 'consumidor', component: ConsumidorComponent },
//	{ path: 'proveedor', component: ProveedorComponent },
//	{ path: 'queja', component: QuejaComponent },
	{ path: 'quejaini', component: QuejainiComponent }
	,{path: 'quejacon/:dato/:id', component: QuejaconComponent }
	//,{ path: 'quejacon', component: QuejaconComponent }
	,{ path: 'quejaweb', component: QuejaextComponent }	
	//,{ path: 'quejaiu/:dato', component: QuejaiuComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
	,RourterModule.forRoot([ 
	{path: 'quejaini/:id', component: QuejaComponentIni }
	])
	
*/