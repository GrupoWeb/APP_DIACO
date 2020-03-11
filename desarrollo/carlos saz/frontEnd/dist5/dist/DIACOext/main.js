(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _quejacon_quejacon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quejacon/quejacon.component */ "./src/app/quejacon/quejacon.component.ts");
/* harmony import */ var _quejaext_quejaext_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quejaext/quejaext.component */ "./src/app/quejaext/quejaext.component.ts");
/* harmony import */ var _quejaini_quejaini_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quejaini/quejaini.component */ "./src/app/quejaini/quejaini.component.ts");






var routes = [
    // {path: 'quejaini', loadChildren: './quejaini/quejaini.component', data: {preload:true} },
    // {path: 'quejacon/:dato/:id', loadChildren: './quejacon/quejacon.component', data: {preload:true} },
    // {path: 'quejaweb', loadChildren: './quejaext/quejaext.component', data: {preload:true}}
    { path: 'quejaini', component: _quejaini_quejaini_component__WEBPACK_IMPORTED_MODULE_5__["QuejainiComponent"] },
    { path: 'quejacon/:dato/:id', component: _quejacon_quejacon_component__WEBPACK_IMPORTED_MODULE_3__["QuejaconComponent"] },
    { path: 'quejaweb', component: _quejaext_quejaext_component__WEBPACK_IMPORTED_MODULE_4__["QuejaextComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'DIACOext';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MaterialModule, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _quejaini_quejaini_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./quejaini/quejaini.component */ "./src/app/quejaini/quejaini.component.ts");
/* harmony import */ var _quejaext_quejaext_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./quejaext/quejaext.component */ "./src/app/quejaext/quejaext.component.ts");
/* harmony import */ var _quejacon_quejacon_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./quejacon/quejacon.component */ "./src/app/quejacon/quejacon.component.ts");
/* harmony import */ var _my_alert_dialog_my_alert_dialog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./my-alert-dialog/my-alert-dialog.component */ "./src/app/my-alert-dialog/my-alert-dialog.component.ts");
/* harmony import */ var _buscaprov_buscaprov_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./buscaprov/buscaprov.component */ "./src/app/buscaprov/buscaprov.component.ts");
/* harmony import */ var _buscaprov_paginator_espa_ol__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./buscaprov/paginator-español */ "./src/app/buscaprov/paginator-español.ts");







//import { MainConcVirtualComponent } from './main-conc-virtual/main-conc-virtual.component';
//import { TableConcVirtualComponent } from './table-conc-virtual/table-conc-virtual.component';
//import { HttpClientModule }    from '@angular/common/http';

//import {MatDialogModule} from "@angular/material";









//import { DetalleConcVirtComponent } from './detalle-conc-virt/detalle-conc-virt.component';
//import { BitacoraConcVirtComponent } from './bitacora-conc-virt/bitacora-conc-virt.component';
//import { ResolverConcVirtComponent } from './resolver-conc-virt/resolver-conc-virt.component';
//import { FileReadUploadComponent } from './file-read-upload/file-read-upload.component';
//import { LoginComponent } from './login/login.component';
//import { ConsumidorComponent } from './consumidor/consumidor.component';
//import { ProveedorComponent } from './proveedor/proveedor.component';
//import { QuejaComponent } from './queja/queja.component';


//import { MatTooltipModule  } from '@angular/material';




//import { MyCustomDialogService } from './my-custom-dialog/my-custom-dialog.service';
//import { MyCustomDialogModule } from './my-custom-dialog/my-custom-dialog.module';
//import { MyCustomDialogComponent } from './my-custom-dialog/my-custom-dialog.component';


//import { QuejaiuComponent } from './quejaiu/quejaiu.component';
//import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
//import { LoadingScreenInterceptor } from "./loading-screen/loading.interceptor";
/*
import { QuejainiComponentCon } from './quejacon/quejacon.component';
import { QuejainiComponentExt } from './quejaext/quejaext.component';
*/
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                //    MainConcVirtualComponent,
                //    TableConcVirtualComponent,
                //    DetalleConcVirtComponent,
                //    BitacoraConcVirtComponent,
                //    ResolverConcVirtComponent,
                //    FileReadUploadComponent
                //    LoginComponent,
                //    ConsumidorComponent,
                //    ProveedorComponent,
                //    QuejaComponent,
                _quejaini_quejaini_component__WEBPACK_IMPORTED_MODULE_17__["QuejainiComponent"],
                _quejaext_quejaext_component__WEBPACK_IMPORTED_MODULE_18__["QuejaextComponent"],
                _quejacon_quejacon_component__WEBPACK_IMPORTED_MODULE_19__["QuejaconComponent"],
                _my_alert_dialog_my_alert_dialog_component__WEBPACK_IMPORTED_MODULE_20__["MyAlertDialogComponent"], _buscaprov_buscaprov_component__WEBPACK_IMPORTED_MODULE_21__["BuscaprovComponent"]
                //, QuejaiuComponent
                //, LoadingScreenComponent
                //,QuejainiComponentCon
                //,QuejainiComponentExt
                //,MyCustomDialogComponent
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTablesModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__["NgxDatatableModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_15__["FileUploadModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__["BsDatepickerModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"]
                //,MyCustomDialogModule
                ,
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
            //exports: [MyCustomDialogComponent],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["HashLocationStrategy"] }, { provide: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorIntl"], useClass: _buscaprov_paginator_espa_ol__WEBPACK_IMPORTED_MODULE_22__["PaginatorEspañol"] }, _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
            //,{      provide: HTTP_INTERCEPTORS,      useClass: LoadingScreenInterceptor,      multi: true    }
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            //  entryComponents: [DetalleConcVirtComponent,BitacoraConcVirtComponent,ResolverConcVirtComponent,MyCustomDialogComponent]
            entryComponents: [_quejaini_quejaini_component__WEBPACK_IMPORTED_MODULE_17__["QuejainiComponent"], _quejaext_quejaext_component__WEBPACK_IMPORTED_MODULE_18__["QuejaextComponent"], _quejacon_quejacon_component__WEBPACK_IMPORTED_MODULE_19__["QuejaconComponent"], _my_alert_dialog_my_alert_dialog_component__WEBPACK_IMPORTED_MODULE_20__["MyAlertDialogComponent"], _buscaprov_buscaprov_component__WEBPACK_IMPORTED_MODULE_21__["BuscaprovComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/buscaprov/api-usuarios.service.ts":
/*!***************************************************!*\
  !*** ./src/app/buscaprov/api-usuarios.service.ts ***!
  \***************************************************/
/*! exports provided: ApiUsuariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiUsuariosService", function() { return ApiUsuariosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _conc_virt_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../conc-virt-const */ "./src/app/conc-virt-const.ts");




var ApiUsuariosService = /** @class */ (function () {
    function ApiUsuariosService(http) {
        this.http = http;
    }
    ApiUsuariosService.prototype.getUsuarios = function () {
        return this.http.get('http://apiuser.azurewebsites.net/api/usuarios');
    };
    ApiUsuariosService.prototype.fetchDataProv = function (nit, nombre) {
        return this.http.get(_conc_virt_const__WEBPACK_IMPORTED_MODULE_3__["BASE_URL_REST_FILE"] + 'proveedores/busca?nit=' + nit + "&nombre=" + nombre);
    };
    ApiUsuariosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiUsuariosService);
    return ApiUsuariosService;
}());



/***/ }),

/***/ "./src/app/buscaprov/buscaprov.component.css":
/*!***************************************************!*\
  !*** ./src/app/buscaprov/buscaprov.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  mat-header-row{\r\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n  }\r\n  \r\n  .mat-row:nth-child(even){\r\n    background-color:rgb(250, 212, 212)\r\n  }\r\n  \r\n  .mat-row:nth-child(odd){\r\n    background-color:rgb(247, 241, 241)\r\n}\r\n  \r\n  .encabezado{\r\n  background-color: lightcoral;\r\n}\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVzY2Fwcm92L2J1c2NhcHJvdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usc0VBQXNFO0VBQ3hFOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRTtFQUNGOztFQUVGO0lBQ0k7QUFDSjs7RUFFQTtFQUNFLDRCQUE0QjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2J1c2NhcHJvdi9idXNjYXByb3YuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWhlYWRlciB7XHJcbiAgICBtaW4taGVpZ2h0OiA2NHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDI0cHggMDtcclxuICB9XHJcblxyXG4gIG1hdC1oZWFkZXItcm93e1xyXG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAubWF0LXRhYmxlIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1yb3c6bnRoLWNoaWxkKGV2ZW4pe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjUwLCAyMTIsIDIxMilcclxuICB9XHJcblxyXG4ubWF0LXJvdzpudGgtY2hpbGQob2RkKXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI0NywgMjQxLCAyNDEpXHJcbn1cclxuXHJcbi5lbmNhYmV6YWRve1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XHJcbn1cclxuXHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/buscaprov/buscaprov.component.html":
/*!****************************************************!*\
  !*** ./src/app/buscaprov/buscaprov.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\n <form [formGroup]=\"proveedorForm\" >\n<div class=\"form-group row\">\n          <label for=\"\" class=\"col-lg-12 col-form-label\">Ingrese parametro de busqueda, puede ser NIT o NOMBRE</label>\n\t\t<div class=\"col-lg-12\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n\t\t\t  \n\t\t\t  <div class=\"form-group row\">\n\t\t\t\t  <label for=\"nitProveedor\" class=\"col-lg-2 col-form-label\">NIT</label>\n\t\t\t\t  <div class=\"col-lg-2\">\n\t\t\t\t\t<input \n\t\t\t\t\t  id=\"nitProveedor\"\n\t\t\t\t\t  type=\"text\"\n\t\t\t\t\t  class=\"form-control\"\n\t\t\t\t\t  matTooltipPosition=\"after\"\n\t\t\t\t\t  matTooltip=\"Ingrese NIT del proveedor\"\n\t\t\t\t\t  matTooltipClass=\"custom-tooltip-blue\"\n\t\t\t\t\t  formControlName=\"nitProveedor\"\n\t\t\t\t\t  (change)=\"RenderDataTableProveedor()\"\n\t\t\t\t\t  placeholder=\"NIT\"\n\t\t\t\t\t  >\n\t\t\t\t  </div>\n\t\t\t\t  <label for=\"nombrep\" class=\"col-lg-2 col-form-label\">Nombre</label>\n\t\t\t\t  <div class=\"col-lg-2\">\n\t\t\t\t\t<input\n\t\t\t\t\t  id=\"nombrep\"\n\t\t\t\t\t  type=\"text\"\n\t\t\t\t\t  class=\"form-control\"\n\t\t\t\t\t  matTooltipPosition=\"after\"\n\t\t\t\t\t  matTooltip=\"Ingrese Nombre del proveedor\"\n\t\t\t\t\t  matTooltipClass=\"custom-tooltip-blue\"\n\t\t\t\t\t  formControlName=\"nombrep\"\n\t\t\t\t\t  (change)=\"RenderDataTableProveedor()\"\n\t\t\t\t\t  placeholder=\"Nombre\"\n\t\t\t\t\t  >\n\t\t\t\t  </div>\n\t\t\t\t  \n\t\t\t\t  <button\n              class=\"btn btn-primary\"\n\t\t\t  matTooltipPosition=\"after\"\n\t\t\t\t\t  matTooltip=\"Busqueda proveedor.\"\n\t\t\t\t\t  matTooltipClass=\"custom-tooltip-blue\"\n\t\t\t  (click)=\"RenderDataTableProveedor()\"\n              >Buscar proveedor</button>\n\t\t\t</div>\n</div></div></div></div>\n<div class=\"example-header mat-elevation-z8\">\n  <mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Escriba algo para filtrar\">\n  </mat-form-field>\n</div>\n<br>\n<div class=\"example-container mat-elevation-z8\">\n  <mat-table [dataSource]=\"dataSource\" matSort>\n    <!--Columna ID-->\n    <ng-container matColumnDef=\"Id\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Id </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"   > {{row.idProveedor}} </mat-cell>\n\t  \n    </ng-container>\n\n    <!-- Columna Documento -->\n    <ng-container matColumnDef=\"Documento\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Documento </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.nitProveedor}} </mat-cell>\n    </ng-container>\n\n    <!-- Columna Nombre-->\n    <ng-container matColumnDef=\"Nombre\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Nombre </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.nombre}} </mat-cell>\n    </ng-container>\n\t\n\t<!-- Name Column -->\n    <ng-container matColumnDef=\"Seleccionar\">\n  <mat-header-cell  *matHeaderCellDef > Seleccionar </mat-header-cell>\n  <mat-cell *matCellDef=\"let row\" >\n       <!--button mat-button (click)=\"seleccionar(row.idProveedor,row.nombre)\">Seleccionar</button-->\n\t   <button [mat-dialog-close]=\"proveedorToInsert\" style=\"margin-left: 5%\" type=\"button\" (click)=\"seleccionar(row.idProveedor,row.nombre,row.nitProveedor)\">Seleccionar</button>\n  </mat-cell>\n</ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"encabezado\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n    </mat-row>\n  </mat-table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 50, 100]\" [pageSize]=\"10\" [showFirstLastButtons]=\"true\"></mat-paginator>\n</div>\n</form>\n\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <!--button type=\"button\" class=\"btn btn-light\" >Close</button-->\n  <button [mat-dialog-close]=\"courseToInsert\" style=\"margin-left: 5%\" type=\"button\" class=\"btn btn-dark\">Cerrar</button>\n  <!--button  style=\"margin-left: 5%\" type=\"button\" class=\"btn btn-dark\">Cerrar</button-->\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/buscaprov/buscaprov.component.ts":
/*!**************************************************!*\
  !*** ./src/app/buscaprov/buscaprov.component.ts ***!
  \**************************************************/
/*! exports provided: BuscaprovComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscaprovComponent", function() { return BuscaprovComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _api_usuarios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-usuarios.service */ "./src/app/buscaprov/api-usuarios.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_proveedor_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/proveedor.model */ "./src/app/shared/proveedor.model.ts");







var BuscaprovComponent = /** @class */ (function () {
    function BuscaprovComponent(dataService, dialogRef) {
        this.dataService = dataService;
        this.dialogRef = dialogRef;
        this.displayedColumns = ['Id', 'Documento', 'Nombre', 'Seleccionar'];
        //this.logService = new LogService(this.LOG_TAG);
    }
    BuscaprovComponent.prototype.ngOnInit = function () {
        this.initProveedorForm();
    };
    BuscaprovComponent.prototype.initProveedorForm = function () {
        this.proveedorForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'nombrep': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            'nitProveedor': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
        this.proveedorToInsert = new _shared_proveedor_model__WEBPACK_IMPORTED_MODULE_5__["Proveedor"]();
        this.proveedorToInsert.idProveedor = 0;
        this.proveedorToInsert.nombre = "";
        this.proveedorToInsert.nitProveedor = "";
    };
    BuscaprovComponent.prototype.RenderDataTable = function () {
        var _this = this;
        this.dataService.getUsuarios()
            .subscribe(function (res) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
            _this.dataSource.data = res;
            //console.log(this.dataSource.data);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        }, function (error) {
            console.log('Se produjo un error mientras intentaba recuperar Usuarios!' + error);
        });
    };
    BuscaprovComponent.prototype.RenderDataTableProveedor = function () {
        var _this = this;
        if (this.proveedorForm.value.nitProveedor == "" && this.proveedorForm.value.nombrep == "") {
            this.dataSource = null;
        }
        else {
            this.dataService.fetchDataProv(this.proveedorForm.value.nitProveedor, this.proveedorForm.value.nombrep)
                .subscribe(function (res) {
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
                _this.dataSource.data = res['value'];
                //console.log(this.dataSource.data);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
            }, function (error) {
                console.log('Se produjo un error mientras intentaba recuperar Usuarios!' + error);
            });
        }
    };
    BuscaprovComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    };
    BuscaprovComponent.prototype.seleccionar = function (valor, nombre, nit) {
        this.proveedorToInsert.idProveedor = valor;
        this.proveedorToInsert.nombre = nombre;
        this.proveedorToInsert.nitProveedor = nit;
        //this.initProveedorForm();
        //this.dataSource = null;	
        console.info(this.proveedorToInsert.idProveedor);
        console.info(this.proveedorToInsert.nombre);
    };
    BuscaprovComponent.prototype.courseToInsert = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], BuscaprovComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], BuscaprovComponent.prototype, "sort", void 0);
    BuscaprovComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buscaprov',
            template: __webpack_require__(/*! ./buscaprov.component.html */ "./src/app/buscaprov/buscaprov.component.html"),
            styles: [__webpack_require__(/*! ./buscaprov.component.css */ "./src/app/buscaprov/buscaprov.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_usuarios_service__WEBPACK_IMPORTED_MODULE_3__["ApiUsuariosService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], BuscaprovComponent);
    return BuscaprovComponent;
}());



/***/ }),

/***/ "./src/app/buscaprov/paginator-español.ts":
/*!************************************************!*\
  !*** ./src/app/buscaprov/paginator-español.ts ***!
  \************************************************/
/*! exports provided: PaginatorEspañol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorEspañol", function() { return PaginatorEspañol; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");


var PaginatorEspañol = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PaginatorEspañol, _super);
    function PaginatorEspañol() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemsPerPageLabel = 'Items por Página';
        _this.nextPageLabel = 'Siguiente';
        _this.previousPageLabel = 'Previa';
        _this.firstPageLabel = "Primera Página";
        _this.lastPageLabel = "Última Página";
        _this.getRangeLabel = function (page, pageSize, length) {
            if (length === 0 || pageSize === 0) {
                return '0 de ' + length;
            }
            length = Math.max(length, 0);
            var startIndex = page * pageSize;
            //Si el índice de inicio excede la longitud de la lista, no intente arreglar el índice final hasta el final
            var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
            return startIndex + 1 + ' - ' + endIndex + ' de ' + length;
        };
        return _this;
    }
    return PaginatorEspañol;
}(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorIntl"]));



/***/ }),

/***/ "./src/app/conc-virt-const.ts":
/*!************************************!*\
  !*** ./src/app/conc-virt-const.ts ***!
  \************************************/
/*! exports provided: BASE_SERVER, BASE_URL_REST, BASE_URL_FILE, BASE_URL_REST_FILE, BASE_DIST_6, BaseCmbClass, CmbResolucion, FrmMainConcVirt, LSTFILTRO_ESTADOCONCVIRT, LSTFILTRO_RESOLUCION, FrmBitacora, FrmQueja, FrmDetalle_Queja, FrmDetalle_Telefono, FrmDetalle_Email, List_Images, FrmDepartamento, FrmMunicipio, FrmProveedor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_SERVER", function() { return BASE_SERVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL_REST", function() { return BASE_URL_REST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL_FILE", function() { return BASE_URL_FILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL_REST_FILE", function() { return BASE_URL_REST_FILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_DIST_6", function() { return BASE_DIST_6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseCmbClass", function() { return BaseCmbClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmbResolucion", function() { return CmbResolucion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrmMainConcVirt", function() { return FrmMainConcVirt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LSTFILTRO_ESTADOCONCVIRT", function() { return LSTFILTRO_ESTADOCONCVIRT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LSTFILTRO_RESOLUCION", function() { return LSTFILTRO_RESOLUCION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrmBitacora", function() { return FrmBitacora; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrmQueja", function() { return FrmQueja; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrmDetalle_Queja", function() { return FrmDetalle_Queja; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrmDetalle_Telefono", function() { return FrmDetalle_Telefono; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrmDetalle_Email", function() { return FrmDetalle_Email; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List_Images", function() { return List_Images; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrmDepartamento", function() { return FrmDepartamento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrmMunicipio", function() { return FrmMunicipio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrmProveedor", function() { return FrmProveedor; });
/*
export const BASE_URL_REST='http://gestorquejas.diaco.gob.gt/file-web-quejaini/rs/';
export const BASE_URL_REST_FILE='http://gestorquejas.diaco.gob.gt/file-web-quejaini/rs/';
export const BASE_URL_FILE='http://gestorquejas.diaco.gob.gt/file-web-quejaini/rs/';
*/
var BASE_SERVER = 'http://desagestorquejas.diaco.gob.gt/';
var BASE_URL_REST = BASE_SERVER + 'web-quejaini/rs/';
var BASE_URL_FILE = BASE_SERVER + 'web-quejaini/rs/';
var BASE_URL_REST_FILE = BASE_URL_FILE;
var BASE_DIST_6 = BASE_SERVER + 'quejas_ini_6/#/pquejaini/presencial/eyjhbgcioijiuzi1nij9.eyjzdwiioijjy2fybg9ziiwicm9szxmioijob3jtywwstm9ybwfsle5vcm1hbcxob3jtywwilcjuyw1lijoiy2nhcmxvcyisimv4cci6mtu3ndgxmji4mswidxnlcm5hbwuioijjy2fybg9zin0.dcvx3gvghft8y9m7l0rbsqlnuxd2s9umqzhioiqgep0';
/*
export const BASE_URL_REST='http://localhost:8080/BackEnd/rs/';
export const BASE_URL_REST_FILE='http://localhost:8080/BackEnd/rs/';
export const BASE_URL_FILE='http://localhost:8080/BackEnd/rs/';
*/
var BaseCmbClass = /** @class */ (function () {
    function BaseCmbClass() {
    }
    return BaseCmbClass;
}());

var CmbResolucion = /** @class */ (function () {
    function CmbResolucion() {
    }
    return CmbResolucion;
}());

var FrmMainConcVirt = /** @class */ (function () {
    function FrmMainConcVirt() {
    }
    return FrmMainConcVirt;
}());

var LSTFILTRO_ESTADOCONCVIRT = [
    { id: 401, nombre: 'Activo' },
    { id: 402, nombre: 'Resuelto Localmente' },
    { id: 999, nombre: 'Pendiente validar por DIACO' },
    { id: 107, nombre: 'Finalizado por DIACO' },
    { id: 108, nombre: 'Rechazado por DIACO' }
];
var LSTFILTRO_RESOLUCION = [
    { id: 1, nombre: 'No Aplica' },
    { id: 2, nombre: 'Resuelto' },
    { id: 3, nombre: 'Sin Resolución' }
];
var FrmBitacora = /** @class */ (function () {
    function FrmBitacora() {
    }
    return FrmBitacora;
}());

var FrmQueja = /** @class */ (function () {
    function FrmQueja() {
    }
    return FrmQueja;
}());

var FrmDetalle_Queja = /** @class */ (function () {
    function FrmDetalle_Queja() {
    }
    return FrmDetalle_Queja;
}());

var FrmDetalle_Telefono = /** @class */ (function () {
    function FrmDetalle_Telefono() {
    }
    return FrmDetalle_Telefono;
}());

var FrmDetalle_Email = /** @class */ (function () {
    function FrmDetalle_Email() {
    }
    return FrmDetalle_Email;
}());

var List_Images = /** @class */ (function () {
    function List_Images() {
    }
    return List_Images;
}());

var FrmDepartamento = /** @class */ (function () {
    function FrmDepartamento() {
    }
    return FrmDepartamento;
}());

var FrmMunicipio = /** @class */ (function () {
    function FrmMunicipio() {
    }
    return FrmMunicipio;
}());

var FrmProveedor = /** @class */ (function () {
    function FrmProveedor() {
    }
    return FrmProveedor;
}());



/***/ }),

/***/ "./src/app/my-alert-dialog/my-alert-dialog.component.html":
/*!****************************************************************!*\
  !*** ./src/app/my-alert-dialog/my-alert-dialog.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 matDialogTitle>Información</h2>\r\n<mat-dialog-content>\r\n  <p>Su queja ya fue registrada, por favor complete su queja ingresando los documentos requeridos. <br> \r\n   Presione por favor el boton \"Continuar\" <br>\r\n   *NOTA:  si sus datos no aparecen posiblemente su acceso ya vencio o ya ingreso sus documentos.  <br>\r\n  Gracias.</p>\r\n</mat-dialog-content>\r\n<mat-dialog-actions align=\"end\">\r\n  <!--button mat-button matDialogClose=\"cancel\" color=\"primary\">Cancel</button-->\r\n  <button mat-button matDialogClose=\"confirm\" color=\"warn\">Continuar</button>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/my-alert-dialog/my-alert-dialog.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/my-alert-dialog/my-alert-dialog.component.ts ***!
  \**************************************************************/
/*! exports provided: MyAlertDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAlertDialogComponent", function() { return MyAlertDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyAlertDialogComponent = /** @class */ (function () {
    function MyAlertDialogComponent() {
    }
    MyAlertDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'my-alert-dialog',
            template: __webpack_require__(/*! ./my-alert-dialog.component.html */ "./src/app/my-alert-dialog/my-alert-dialog.component.html")
        })
    ], MyAlertDialogComponent);
    return MyAlertDialogComponent;
}());



/***/ }),

/***/ "./src/app/quejacon/quejacon.component.html":
/*!**************************************************!*\
  !*** ./src/app/quejacon/quejacon.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n<body>\n\n\t<div class=\"container\">\n\t<!--img src=\"imagen-grd2.png\" class=\"center\"/-->\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-4 text-center\">\n\t\t\t\t&nbsp;\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4 text-center\">\n\t\t\t\t<img class=\"headerimg\" />\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4 text-center\">\n\t\t\t\t&nbsp;\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n<div class=\"container\">\n\n \n  \n  <!--div class=\"row\">\n    <h2></h2>\n  </div-->\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <form [formGroup]=\"quejaForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n\t\t<div class=\"form-group row\">\n          <label for=\"\" class=\"col-lg-2 col-form-label\">Datos Consumidor</label>\n\t\t<div class=\"col-lg-12\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n\t\t\t  \n\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\n\t\t\t\t<label for=\"dpiPasaporte\" class=\"col-lg-2 col-form-label\"> DPI o pasaporte </label>\n          <div class=\"col-lg-4 form-control\">\n            {{_vDpiPasaporte}}\n          </div>\n\t\t\t\t\n\t\t\t\t  <label for=\"nombre\" class=\"col-lg-2 col-form-label\"> Nombre</label>\n\t\t\t\t  <div class=\"col-lg-4 form-control\">\n\t\t\t\t\t{{_vNombre}}\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group row\">\n          <label for=\"telefono\" class=\"col-lg-2 col-form-label\"> telefono</label>\n          <div class=\"col-lg-4 form-control\" >\n\t\t\t{{_vTelefono}}\n          </div>\n\t\t  \n\t\t  <label for=\"correo\" class=\"col-lg-2 col-form-label\"> Correo Electronico</label>\n          <div class=\"col-lg-4 form-control\">\n\t\t  {{_vCorreo}}\n          </div>\n        </div>\n\t\t\t\t\n\t\t<div class=\"form-group row\">\n          <label for=\"detalleQueja\"  class=\"col-lg-12 col-form-label\" [ngStyle]=\"{color: 'blue'}\"> Detalle Queja</label>\n          <div class=\"col-lg\">\n\t\t\t{{_vDetalleQueja}}\n          </div>\n\t\t</div>  \n        <div class=\"form-group row\">\n          <label for=\"solicitaQue\" class=\"col-lg-12 col-form-label\" [ngStyle]=\"{color: 'blue'}\"> Petición Queja</label>\n          <div class=\"col-lg\">\n\t\t  {{_vSolicitaQue}}\n          </div>\n        </div>\n\t\t\t\t\n\t\t\t  </div>\n\t\t\t</div>\n\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group row\">\n          <label for=\"\" class=\"col-lg-2 col-form-label\">Datos Proveedor</label>\n\t\t<div class=\"col-lg-12\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n\t\t\t  \n\t\t\t  <div class=\"form-group row\">\n\t\t\t\t  <label for=\"nitProveedor\" class=\"col-lg-2 col-form-label\"> NIT</label>\n\t\t\t\t  <div class=\"col-lg-4 form-control\">\n\t\t\t\t  {{_vNitProveedor}}\n\t\t\t\t  </div>\n\t\t\t\t  <label for=\"ubicacion\" class=\"col-lg-2 col-form-label\">Ubicacion</label>\n\t\t\t\t  <div class=\"col-lg-4 form-control\">\n\t\t\t\t  {{_vUbicacion}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"form-group row\">\n\t\t\t<label for=\"nitProveedor\" class=\"col-lg-10 col-form-label\">{{nproveedor}}</label>\n\t\t\t\t\n\t\t\t</div>\n\t\t\t\n\t\t\t  </div>\n\t\t\t</div>\n\t\t</div>\n\t\t</div>\n\n\t\t\n        <div class=\"form-group row\" >\n          <label for=\"\" class=\"col-lg-2 col-form-label\">Datos Adjuntos</label>\n          <div class=\"col-lg-12\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <div class=\"form-group row\">\n\t\t\t\t<label for=\"et9\" [ngStyle]=\"{color: 'red'}\">(*)</label>\n                  <label for=\"filFactura\" class=\"col-lg-2 col-form-label\">Factura o Contrato</label>\n                  <div class=\"col-lg-10\">\n                    <input\n                      #filFactura\n                      id=\"filFactura\"\n\t                      type=\"file\"\n                      ng2FileSelect\n                      [uploader]=\"uploader\"\n                      class=\"form-control\"\n\t\t\t\t\t  matTooltipPosition=\"above\"\n\t\t\t\t\t  matTooltip=\"Agrege copia de su documento.\"\n\t\t\t\t\t  matTooltipClass=\"custom-tooltip-blue\"\n                      (change)=\"onFileChanged('FAC')\"\n\t\t\t\t\t  required>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n\t\t\t\t<label for=\"et9\" [ngStyle]=\"{color: 'red'}\">(*)</label>\n                  <label for=\"filDpi\" class=\"col-lg-2 col-form-label\">DPI o Pasaporte</label>\n                  <div class=\"col-lg-10\">\n                    <input\n                      #filDpi\n                      id=\"filDpi\"\n                      type=\"file\"\n                      ng2FileSelect\n                      [uploader]=\"uploader\"\n                      class=\"form-control\"\n\t\t\t\t\t  matTooltipPosition=\"above\"\n\t\t\t\t\t  matTooltip=\"Agrege su copia de DPI o Pasaporte\"\n\t\t\t\t\t  matTooltipClass=\"custom-tooltip-blue\"\n                      (change)=\"onFileChanged('DPI')\"\n\t\t\t\t\t  required>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <p>Estos documentos deben ir completos, por ejemplo el DPI debe ser escaneado a ambos lados.</p>\n                </div>\n              </div>\n            </div>\n          </div>\n\t\t  <label class=\"col-form-label\" >(Los campos marcados </label>\n\t\t  <label class=\"col-form-label\" [ngStyle]=\"{color: 'red'}\">  (*)  </label>\n\t\t  <label class=\"col-form-label\" > son obligatorios.)</label>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col-lg-12 text-center\">\n            <button\n              class=\"btn btn-primary\"\n              type=\"submit\"\n\t\t\t  matTooltipPosition=\"after\"\n\t\t\t\t\t  matTooltip=\"Grabe su queja.\"\n\t\t\t\t\t  matTooltipClass=\"custom-tooltip-blue\"\n\t\t\t  [disabled]=\"successFile\"\n\t              >Guardar Queja </button>\n          </div>\n        </div>\n      </form>\n\t  \n  \n    </div>\n  </div>\n  \n  <div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\" *ngIf=\"success\">\n    <strong>Queja actualizada!</strong> Su queja ha sido actualizada exitosamente. {{vsecanio}}-{{vanio}}\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"onDismissClicked()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  \n  \n</div>\n\n    <!--img src=\"diaco-grd.jpg\" class=\"center\"/-->\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-4 text-center\">\n\t\t\t\t&nbsp;\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4 text-center\">\n\t\t\t\t<img class=\"footerimg\" />\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4 text-center\">\n\t\t\t\t&nbsp;\n\t\t\t</div>\n\t\t</div>\n\t</div><!--\n\t<div *ngIf=\"flagInfoError\" class=\"alert alert-alert col-lg-12\" [@EnterLeave]=\"'flyIn'\">\n\t\tHubo un error al procesar esta acción, por favor intente de nuevo.\n\t</div>\n-->\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/quejacon/quejacon.component.scss":
/*!**************************************************!*\
  !*** ./src/app/quejacon/quejacon.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* BASIC */\n.headerimg {\n  content: url('imagen-grd2.png');\n  width: 100%;\n  height: auto; }\n.footerimg {\n  content: url('diaco-grd.jpg');\n  width: 100%;\n  height: auto; }\nbody {\n  background-image: url('diacofade3.jpg'), url('imagen-grdfade2.jpg');\n  background-repeat: no-repeat, no-repeat;\n  background-attachment: fixed, fixed;\n  background-size: auto auto, auto auto;\n  background-position: bottom right, bottom left;\n  min-height: 100vh; }\nhtml {\n  background-color: #56baed; }\nbody {\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh; }\na.underlineHover {\n  color: #e68a00;\n  display: inline-block;\n  text-decoration: none;\n  font-weight: 400; }\nh2 {\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 40px 8px 10px 8px;\n  color: #cccccc; }\n/* STRUCTURE */\n.wrapper {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  min-height: 100%;\n  padding: 20px; }\n#formContent {\n  border-radius: 10px 10px 10px 10px;\n  background: #fff;\n  padding: 30px;\n  width: 90%;\n  max-width: 450px;\n  position: relative;\n  padding: 0px;\n  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);\n  text-align: center;\n  background-color: #00284d; }\n#formFooter {\n  background-color: #f6f6f7;\n  border-top: 1px solid #dce8f1;\n  padding: 25px;\n  text-align: center;\n  border-radius: 0 0 10px 10px; }\n/* TABS */\nh2.inactive {\n  color: #cccccc; }\nh2.active {\n  color: #0d0d0d;\n  border-bottom: 2px solid #5fbae9; }\n/* FORM TYPOGRAPHY*/\ninput[type=button], input[type=submit], input[type=reset] {\n  background-color: #1aa3ff;\n  border: none;\n  color: white;\n  padding: 15px 80px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 10px;\n  box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);\n  border-radius: 5px 5px 5px 5px;\n  margin: 5px 20px 40px 20px;\n  transition: all 0.3s ease-in-out; }\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover {\n  background-color: #e68a00; }\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active {\n  transform: scale(0.95); }\ninput[type=text], input[type=password] {\n  background-color: #f6f6f6;\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 110%;\n  border: 2px solid #f6f6f6;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px; }\ninput[type=text]:focus, input[type=password]:focus {\n  background-color: #fff;\n  border-bottom: 2px solid #5fbae9; }\ninput[type=text]:placeholder {\n  color: #cccccc; }\n/* ANIMATIONS */\n/* Simple CSS3 Fade-in-down Animation */\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0); }\n  100% {\n    opacity: 1;\n    transform: none; } }\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    transform: none; } }\n/* Simple CSS3 Fade-in Animation */\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n.fadeIn {\n  opacity: 0;\n  -webkit-animation: fadeIn ease-in 1;\n  animation: fadeIn ease-in 1;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s; }\n.fadeIn.first {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s; }\n.fadeIn.second {\n  -webkit-animation-delay: 0.6s;\n  animation-delay: 0.6s; }\n.fadeIn.third {\n  -webkit-animation-delay: 0.8s;\n  animation-delay: 0.8s; }\n.fadeIn.fourth {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s; }\n/* Simple CSS3 Fade-in Animation */\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #56baed;\n  content: \"\";\n  transition: width 0.2s; }\n.underlineHover:hover {\n  /*color: #1aa3ff;*/ }\n.underlineHover:hover:after {\n  width: 100%; }\n/* OTHERS */\n*:focus {\n  outline: none; }\n#icon {\n  width: 60%; }\nhtml, body {\n  height: 100%; }\n/*footer css*/\n#wrap {\n  min-height: 100%; }\n#main {\n  overflow: auto;\n  padding-bottom: 150px;\n  /* this needs to be bigger than footer height*/ }\n.page-footer {\n  background-color: #00284d;\n  color: white; }\n.footer-copyright {\n  color: white; }\n.footer-link {\n  color: white;\n  text-decoration: underline; }\n.footer-link:hover {\n  color: #e68a00;\n  text-decoration: underline; }\n.footer-margin {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  /* Set the fixed height of the footer here */\n  height: 100px;\n  /*line-height: 100px;*/\n  /* Vertically center the text there */ }\n.center {\n  margin-left: auto;\n  margin-right: auto;\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlamFjb24vQzpcXHd3d1xcQVBQX0RJQUNPXFxkZXNhcnJvbGxvXFxjYXJsb3Mgc2F6XFxmcm9udEVuZFxcZGlzdDUvc3JjXFxhcHBcXHF1ZWphY29uXFxxdWVqYWNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxVQUFBO0FBRUE7RUFDSywrQkFBa0M7RUFDckMsV0FBVztFQUNYLFlBQVksRUFBQTtBQUVkO0VBQ0ssNkJBQWdDO0VBQ25DLFdBQVc7RUFDWCxZQUFZLEVBQUE7QUFJZDtFQUNDLG1FQUFtRTtFQUNuRSx1Q0FBdUM7RUFDdkMsbUNBQW1DO0VBQ25DLHFDQUFxQztFQUNyQyw4Q0FBOEM7RUFDOUMsaUJBQWdCLEVBQUE7QUFJakI7RUFDRSx5QkFBeUIsRUFBQTtBQUczQjtFQUNFLGtDQUFrQztFQUNsQyxhQUFhLEVBQUE7QUFHZjtFQUNFLGNBQWM7RUFDZCxxQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHFCQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsY0FBYyxFQUFBO0FBS2hCLGNBQUE7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWEsRUFBQTtBQUdmO0VBRUUsa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUVaLDRDQUF5QztFQUN6QyxrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUE7QUFHM0I7RUFDRSx5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixrQkFBa0I7RUFFbEIsNEJBQTRCLEVBQUE7QUFLOUIsU0FBQTtBQUVBO0VBQ0UsY0FBYyxFQUFBO0FBR2hCO0VBQ0UsY0FBYztFQUNkLGdDQUFnQyxFQUFBO0FBS2xDLG1CQUFBO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGVBQWU7RUFFZixpREFBOEM7RUFFOUMsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUsxQixnQ0FBZ0MsRUFBQTtBQUdsQztFQUNFLHlCQUF5QixFQUFBO0FBRzNCO0VBS0Usc0JBQXNCLEVBQUE7QUFHeEI7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFdBQVc7RUFDWCxXQUFXO0VBQ1gseUJBQXlCO0VBS3pCLGdDQUFnQztFQUVoQyw4QkFBOEIsRUFBQTtBQUdoQztFQUNFLHNCQUFzQjtFQUN0QixnQ0FBZ0MsRUFBQTtBQUdsQztFQUNFLGNBQWMsRUFBQTtBQUtoQixlQUFBO0FBRUEsdUNBQUE7QUFDQTtFQUNFLGtDQUFrQztFQUNsQywwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixpQ0FBaUM7RUFDakMseUJBQXlCLEVBQUE7QUFHM0I7RUFDRTtJQUNFLFVBQVU7SUFFVixtQ0FBbUMsRUFBQTtFQUVyQztJQUNFLFVBQVU7SUFFVixlQUFlLEVBQUEsRUFBQTtBQUluQjtFQUNFO0lBQ0UsVUFBVTtJQUVWLG1DQUFtQyxFQUFBO0VBRXJDO0lBQ0UsVUFBVTtJQUVWLGVBQWUsRUFBQSxFQUFBO0FBSW5CLGtDQUFBO0FBQ0E7RUFBNEI7SUFBTyxVQUFTLEVBQUE7RUFBSTtJQUFLLFVBQVMsRUFBQSxFQUFBO0FBRTlEO0VBQW9CO0lBQU8sVUFBUyxFQUFBO0VBQUk7SUFBSyxVQUFTLEVBQUEsRUFBQTtBQUV0RDtFQUNFLFVBQVM7RUFDVCxtQ0FBa0M7RUFFbEMsMkJBQTBCO0VBRTFCLHFDQUFvQztFQUVwQyw2QkFBNEI7RUFFNUIsOEJBQTZCO0VBRTdCLHNCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsMkJBQTJCO0VBRTNCLG1CQUFtQixFQUFBO0FBR3JCLGtDQUFBO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsT0FBTztFQUNQLGFBQWE7RUFDYixRQUFRO0VBQ1IsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsc0JBQXNCLEVBQUE7QUFHeEI7RUFDRSxrQkFBQSxFQUFtQjtBQUdyQjtFQUNFLFdBQVcsRUFBQTtBQUtiLFdBQUE7QUFFQTtFQUNJLGFBQWEsRUFBQTtBQUdqQjtFQUNFLFVBQVMsRUFBQTtBQUdYO0VBQ0UsWUFBWSxFQUFBO0FBR2QsYUFBQTtBQUVBO0VBQ0UsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSxjQUFhO0VBQ2IscUJBQW9CO0VBQUUsOENBQUEsRUFBK0M7QUFHdkU7RUFDRSx5QkFBeUI7RUFDekIsWUFBVyxFQUFBO0FBR2I7RUFDQyxZQUFXLEVBQUE7QUFHWjtFQUNDLFlBQVc7RUFDWCwwQkFBMEIsRUFBQTtBQUczQjtFQUNDLGNBQWE7RUFDYiwwQkFBMEIsRUFBQTtBQUczQjtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsV0FBVztFQUNYLDRDQUFBO0VBQ0EsYUFBYTtFQUNiLHNCQUFBO0VBQXdCLHFDQUFBLEVBQXNDO0FBR2hFO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9xdWVqYWNvbi9xdWVqYWNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiBCQVNJQyAqL1xyXG5cclxuLmhlYWRlcmltZ3tcclxuICAgICBjb250ZW50OnVybChcImNzcy9pbWFnZW4tZ3JkMi5wbmdcIik7XHJcblx0IHdpZHRoOiAxMDAlO1xyXG5cdCBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLmZvb3RlcmltZ3tcclxuICAgICBjb250ZW50OnVybChcImNzcy9kaWFjby1ncmQuanBnXCIpO1xyXG5cdCB3aWR0aDogMTAwJTtcclxuXHQgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbiBcclxuIFxyXG5ib2R5IHtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9kaWFjb2ZhZGUzLmpwZyksIHVybCguL2ltYWdlbi1ncmRmYWRlMi5qcGcpIDtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0LCBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZCwgZml4ZWQ7XHJcblx0YmFja2dyb3VuZC1zaXplOiBhdXRvIGF1dG8sIGF1dG8gYXV0bztcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gcmlnaHQsIGJvdHRvbSBsZWZ0O1xyXG5cdG1pbi1oZWlnaHQ6MTAwdmg7IFxyXG59XHJcblxyXG4gXHJcbmh0bWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5hLnVuZGVybGluZUhvdmVyIHtcclxuICBjb2xvcjogI2U2OGEwMDtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogNDBweCA4cHggMTBweCA4cHg7IFxyXG4gIGNvbG9yOiAjY2NjY2NjO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIFNUUlVDVFVSRSAqL1xyXG5cclxuLndyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbiNmb3JtQ29udGVudCB7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWF4LXdpZHRoOiA0NTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDI4NGQ7XHJcbn1cclxuXHJcbiNmb3JtRm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY3O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGNlOGYxO1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi8qIFRBQlMgKi9cclxuXHJcbmgyLmluYWN0aXZlIHtcclxuICBjb2xvcjogI2NjY2NjYztcclxufVxyXG5cclxuaDIuYWN0aXZlIHtcclxuICBjb2xvcjogIzBkMGQwZDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcclxufVxyXG5cclxuXHJcblxyXG4vKiBGT1JNIFRZUE9HUkFQSFkqL1xyXG5cclxuaW5wdXRbdHlwZT1idXR0b25dLCBpbnB1dFt0eXBlPXN1Ym1pdF0sIGlucHV0W3R5cGU9cmVzZXRdICB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhYTNmZjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE1cHggODBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsMTg2LDIzMywwLjQpO1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwxODYsMjMzLDAuNCk7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gIG1hcmdpbjogNXB4IDIwcHggNDBweCAyMHB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciwgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyLCBpbnB1dFt0eXBlPXJlc2V0XTpob3ZlciAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNjhhMDA7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9YnV0dG9uXTphY3RpdmUsIGlucHV0W3R5cGU9c3VibWl0XTphY3RpdmUsIGlucHV0W3R5cGU9cmVzZXRdOmFjdGl2ZSAge1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW46IDVweDtcclxuICB3aWR0aDogMTEwJTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZjZmNmY2O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XTpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICNjY2NjY2M7XHJcbn1cclxuXHJcblxyXG5cclxuLyogQU5JTUFUSU9OUyAqL1xyXG5cclxuLyogU2ltcGxlIENTUzMgRmFkZS1pbi1kb3duIEFuaW1hdGlvbiAqL1xyXG4uZmFkZUluRG93biB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcclxuICBhbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxyXG5cclxuLmZhZGVJbiB7XHJcbiAgb3BhY2l0eTowO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XHJcbiAgLW1vei1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcclxuICBhbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcclxuXHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xyXG4gIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xyXG5cclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcclxuICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcclxuICBhbmltYXRpb24tZHVyYXRpb246MXM7XHJcbn1cclxuXHJcbi5mYWRlSW4uZmlyc3Qge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC40cztcclxufVxyXG5cclxuLmZhZGVJbi5zZWNvbmQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC42cztcclxufVxyXG5cclxuLmZhZGVJbi50aGlyZCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG59XHJcblxyXG4uZmFkZUluLmZvdXJ0aCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAxcztcclxuICBhbmltYXRpb24tZGVsYXk6IDFzO1xyXG59XHJcblxyXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xyXG4udW5kZXJsaW5lSG92ZXI6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAtMTBweDtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4ycztcclxufVxyXG5cclxuLnVuZGVybGluZUhvdmVyOmhvdmVyIHtcclxuICAvKmNvbG9yOiAjMWFhM2ZmOyovXHJcbn1cclxuXHJcbi51bmRlcmxpbmVIb3Zlcjpob3ZlcjphZnRlcntcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcblxyXG4vKiBPVEhFUlMgKi9cclxuXHJcbio6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufSBcclxuXHJcbiNpY29uIHtcclxuICB3aWR0aDo2MCU7XHJcbn1cclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLypmb290ZXIgY3NzKi9cclxuXHJcbiN3cmFwIHtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jbWFpbiB7XHJcbiAgb3ZlcmZsb3c6YXV0bztcclxuICBwYWRkaW5nLWJvdHRvbToxNTBweDsgLyogdGhpcyBuZWVkcyB0byBiZSBiaWdnZXIgdGhhbiBmb290ZXIgaGVpZ2h0Ki9cclxufVxyXG5cclxuLnBhZ2UtZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyODRkO1xyXG4gIGNvbG9yOndoaXRlO1xyXG59IFxyXG5cclxuLmZvb3Rlci1jb3B5cmlnaHR7XHJcblx0Y29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5mb290ZXItbGlua3tcclxuXHRjb2xvcjp3aGl0ZTtcclxuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmZvb3Rlci1saW5rOmhvdmVye1xyXG5cdGNvbG9yOiNlNjhhMDA7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5mb290ZXItbWFyZ2luIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8qIFNldCB0aGUgZml4ZWQgaGVpZ2h0IG9mIHRoZSBmb290ZXIgaGVyZSAqL1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgLypsaW5lLWhlaWdodDogMTAwcHg7Ki8gLyogVmVydGljYWxseSBjZW50ZXIgdGhlIHRleHQgdGhlcmUgKi9cclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/quejacon/quejacon.component.ts":
/*!************************************************!*\
  !*** ./src/app/quejacon/quejacon.component.ts ***!
  \************************************************/
/*! exports provided: QuejaconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuejaconComponent", function() { return QuejaconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_quejasini_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/quejasini.service */ "./src/app/shared/quejasini.service.ts");
/* harmony import */ var _shared_quejaini_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/quejaini.model */ "./src/app/shared/quejaini.model.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var _shared_consumidores_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/consumidores.service */ "./src/app/shared/consumidores.service.ts");
/* harmony import */ var _shared_proveedores_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/proveedores.service */ "./src/app/shared/proveedores.service.ts");
/* harmony import */ var _conc_virt_const__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../conc-virt-const */ "./src/app/conc-virt-const.ts");
/* harmony import */ var _my_alert_dialog_my_alert_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../my-alert-dialog/my-alert-dialog.component */ "./src/app/my-alert-dialog/my-alert-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");

//import { Component, OnInit } from '@angular/core';

//import { ormGroup,  FormControl } from '@angular/forms';











var QuejaconComponent = /** @class */ (function () {
    //constructor() { }
    function QuejaconComponent(router, dialog, _route, consumidoresService, proveedoresService, quejasService) {
        this.router = router;
        this.dialog = dialog;
        this._route = _route;
        this.consumidoresService = consumidoresService;
        this.proveedoresService = proveedoresService;
        this.quejasService = quejasService;
        this.nproveedor = "";
        this.vanio = 0;
        this.vsecanio = 0;
        this.vsecuencia2 = "";
        this.vidqueja = 0;
        this.vidimagen = 3;
        this.vdpi = -1;
        this.vfac = -1;
        this.vact = -1;
        this.dato = "";
        this.vid = "";
        //variables a mostrar
        this._vDpiPasaporte = "";
        this._vNombre = "";
        this._vTelefono = "";
        this._vCorreo = "";
        this._vDetalleQueja = "";
        this._vSolicitaQue = "";
        this._vNitProveedor = "";
        this._vUbicacion = "";
        this._url = "";
        this.existingData = false;
        this.existingModeConsumidor = false;
        this.existingModeProveedor = false;
        this.existingModeToken = false;
        this.vsecuencia = "";
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploader"]({
            //url: BASE_URL_FILE,
            itemAlias: 'document'
        });
        this.success = false;
        this.successFile = true;
        this.operation = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        //console.info(this._route.snapshot.paramMap.get('id'));
    }
    QuejaconComponent.prototype.ngOnDestroy = function () {
        ////console.log("finaliza");
    };
    QuejaconComponent.prototype.ngOnInit = function () {
        var _this = this;
        // listener cuando finaliza la operacion de creacion
        this.quejaOperationSubscription = this.quejasService.operation.subscribe(function (queja) {
            // limpia sesion
            _this.quejaForm.reset();
            _this.success = true;
            _this.successFile = true;
            _this.nproveedor = "";
        });
        this._route.params.subscribe(function (params) {
            _this.dato = params.dato;
            _this.vid = params.id;
        });
        this.initQuejaForm();
        //this.initConsumidorForm(null);
        //this.vid = this._route.snapshot.paramMap.get('id')
        //console.info(this.vid);
        if (this.vid != "") {
            this.findByToken("0");
            //console.info(this.vid);
            //if (this.vid == "") {
            this.unregister();
            //}
        }
    };
    QuejaconComponent.prototype.initQuejaForm = function () {
        this.quejaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'nombre': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'dpiPasaporte': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'telefono': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'correo': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'detalleQueja': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'solicitaQue': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'nitProveedor': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'ubicacion': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.nproveedor = "";
        this.dpiIndex = -1;
        this.facturaIndex = -1;
        ////console.log("inicializa");
    };
    QuejaconComponent.prototype.unregister = function () {
        var dialogRef = this.dialog.open(_my_alert_dialog_my_alert_dialog_component__WEBPACK_IMPORTED_MODULE_11__["MyAlertDialogComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
            // NOTE: The result can also be nothing if the user presses the `esc` key or clicks outside the dialog
            if (result == 'confirm') {
                console.log('Unregistered');
            }
        });
    };
    QuejaconComponent.prototype.onFileChanged = function (type) {
        //console.info(type);	
        this.vact = this.uploader.queue.length - 1;
        //console.info(this.factura);
        if (this.uploader.queue.length > 0) {
            if (type == 'FAC') {
                if (this.factura && this.facturaIndex > -1) {
                    var facturaItem = this.uploader.queue[this.facturaIndex];
                    this.uploader.removeFromQueue(facturaItem);
                }
                this.factura = this.uploader.queue[this.uploader.queue.length - 1];
                this.facturaIndex = this.uploader.queue.length - 1;
                if (this.dpiIndex == this.facturaIndex) {
                    this.dpiIndex = this.dpiIndex - 1;
                }
            }
            else if (type == 'DPI') {
                if (this.dpi && this.dpiIndex > -1) {
                    var dpiItem = this.uploader.queue[this.dpiIndex];
                    this.uploader.removeFromQueue(dpiItem);
                }
                this.dpi = this.uploader.queue[this.uploader.queue.length - 1];
                this.dpiIndex = this.uploader.queue.length - 1;
                if (this.dpiIndex == this.facturaIndex) {
                    this.facturaIndex = this.facturaIndex - 1;
                }
            }
            if (this.uploader.queue.length == 0) {
                this.dpiIndex = -1;
                this.facturaIndex = -1;
            }
            //console.info(this.factura);
            //console.info(this.dpi);
            //console.info(this.uploader.queue.length);
            //console.info(this.facturaIndex);
            //console.info(this.dpiIndex);
            //console.info(this.uploader.queue.length);	
            if (this.uploader.queue.length == 2 && this._vDpiPasaporte != undefined) {
                this.successFile = false;
            }
            else {
                this.successFile = true;
            }
            console.info(this._vDpiPasaporte, this.uploader.queue.length == 2);
        }
    };
    /*
      onRemoveClicked(index: number) {
        let removeItem = this.uploader.queue[index];
        this.uploader.removeFromQueue(removeItem);
        if (index == this.facturaIndex) {
          this.facturaIndex = null;
          this.factura = null;
        } else if (index == this.dpiIndex) {
          this.dpiIndex = null;
          this.dpi = null;
        }
      }*/
    QuejaconComponent.prototype.onSubmit = function () {
        var _this = this;
        var queja = new _shared_quejaini_model__WEBPACK_IMPORTED_MODULE_6__["Quejaini"]();
        queja.nombre = this.quejaForm.value.nombre;
        queja.dpiPasaporte = this.quejaForm.value.dpiPasaporte;
        queja.telefono = this.quejaForm.value.telefono;
        queja.correo = this.quejaForm.value.correo;
        queja.detalleQueja = this.quejaForm.value.detalleQueja;
        queja.solicitaQue = this.quejaForm.value.solicitaQue;
        queja.nitProveedor = this.quejaForm.value.nitProveedor;
        queja.anio = 0;
        queja.secuencia = 0;
        queja.idFuente = this.vsecuencia;
        if (this.existingModeConsumidor) {
            queja.idConsumidor = this.existingConsumidor.idConsumidor;
        }
        else {
            queja.idConsumidor = 0;
        }
        if (this.existingModeProveedor) {
            queja.idProveedor = this.existingProveedor.idProveedor;
        }
        else {
            queja.idProveedor = 0;
        }
        // verifica que esten ingresados los 2 archivos
        if (this.uploader.queue.length != 2) {
            alert("Debe de ingresar Datos adjuntos requeridos.");
            return;
        }
        //queja = this.quejasService.createQueja(queja, this.uploader).susbribe;
        /*
        this.quejasService.saveData(queja).subscribe(
          (retvalue) => {
              
            if(retvalue){
                    var tempstr=retvalue['value'];
                    if(tempstr != null && tempstr != '')	{
                        //this.registrodata=JSON.parse('['+retvalue["value"].slice(0, -1) +']');
                        this.vanio = tempstr.anio;
                        this.vsecanio = tempstr.secuencia;
                        this.vidqueja = tempstr.idQueja;
        */
        //coloca los archivos en orden.
        if (this.uploader.queue.length >= 2) {
            var removeItem = this.uploader.queue[1];
            this.uploader.removeFromQueue(removeItem);
            removeItem = this.uploader.queue[0];
            this.uploader.removeFromQueue(removeItem);
            this.uploader.queue.push(this.factura);
            this.uploader.queue.push(this.dpi);
            //console.info(this.uploader.queue.length);
        }
        if (this.uploader.queue.length > 0) {
            //console.log(this.vidqueja);
            this.uploader.onBeforeUploadItem = function (removeItem) {
                //removeItem.withCredentials = false;
                //removeItem.url = BASE_URL_REST_FILE + 'quejas/upload?id_queja='+this.vidqueja+"&id_categoria_imagen="+this.vidimagen;
                //BASE_URL_REST_FILE + 'quejasini/upload?id_queja='+this.vidqueja+"&id_categoria_imagen="+this.vidimagen,
                for (var i = 0; i < _this.uploader.queue.length; i++) {
                    //console.log("modifica url - inicio");
                    //console.log(i);
                    var removeItem_1 = _this.uploader.queue[i];
                    if (removeItem_1 == _this.dpi) {
                        //console.log("cambia url dpi");
                        _this.uploader.queue[i].url = _conc_virt_const__WEBPACK_IMPORTED_MODULE_10__["BASE_URL_REST_FILE"] + 'quejasini/upload?id_queja=' + _this.vidqueja + "&id_categoria_imagen=" + 2 + "&correo=1&data=" + _this.vid;
                        //console.log(this.uploader.queue[i].url);
                        //console.log(removeItem);
                    }
                    else {
                        if (removeItem_1 == _this.factura) {
                            //console.log("cambia url factura");
                            _this.uploader.queue[i].url = _conc_virt_const__WEBPACK_IMPORTED_MODULE_10__["BASE_URL_REST_FILE"] + 'quejasini/upload?id_queja=' + _this.vidqueja + "&id_categoria_imagen=" + 3 + "&correo=0&data=" + _this.vid;
                            //console.log(this.uploader.queue[i].url);	
                            //console.log(removeItem);
                        }
                        else {
                            //console.log("cambia url otro");
                            _this.uploader.queue[i].url = _conc_virt_const__WEBPACK_IMPORTED_MODULE_10__["BASE_URL_REST_FILE"] + 'quejasini/upload?id_queja=' + _this.vidqueja + "&id_categoria_imagen=" + 1 + "&correo=0&data=" + _this.vid;
                            //console.log(this.uploader.queue[i].url);
                            //console.log(removeItem);
                        }
                    }
                    //console.log("modifica url - fin");	
                }
            };
            this.uploader.setOptions({
                //url: BASE_URL_REST_FILE + 'quejasini/upload?id_queja='+this.vidqueja+"&id_categoria_imagen="+this.vidimagen,
                itemAlias: 'file'
            });
            this.uploader.onCompleteAll = function () {
                // finalizo la carga de todos los archivos
                // this.operation.next(retvalue.value);
                //console.log("completo inicia limpieza");
                _this._vDpiPasaporte = '';
                _this._vNombre = '';
                _this._vTelefono = '';
                _this._vCorreo = '';
                _this._vDetalleQueja = '';
                _this._vSolicitaQue = '';
                _this._vNitProveedor = '';
                _this._vUbicacion = '';
                _this.findByToken("1");
                _this.successFile = true;
                _this.success = true;
                /*
          //
            //this.vanio = 0;
            //this.vsecanio =  0;
            //this.vidqueja =  0;
            //this.uploader = null;
            */
            };
            this.uploader.onCompleteItem = function (item, uploadResponse, status, headers) {
                // finalizo la carga de un archivo
                // this.vidimagen = this.vidimagen + 1;
                console.log('ImageUpload:uploaded:', item, status, headers);
            };
            this.uploader.uploadAll();
        }
        else {
            //this.operation.next(retvalue.value);
        }
        //this.findSecuenciaId();
        //////console.info("onsSumiT");
        //this.vanio = queja.anio;
        //  this.vsecanio = queja.noQueja;
        ////console.info('-------------------');
        ////console.info(queja);
        ////console.info('-------------------');
    };
    QuejaconComponent.prototype.onDismissClicked = function () {
        this.success = false;
        this.initQuejaForm();
        console.info("onDismm");
    };
    QuejaconComponent.prototype.initQuejaParam = function (queja) {
        this._vDpiPasaporte = (queja ? queja.dpiPasaporte : '');
        this._vNombre = (queja ? queja.nombre : '');
        this._vTelefono = (queja ? queja.telefono : '');
        this._vCorreo = (queja ? queja.correo : '');
        this._vDetalleQueja = (queja ? queja.detalleQueja : '');
        this._vSolicitaQue = (queja ? queja.solicitaQue : '');
        this._vNitProveedor = (queja ? queja.nitProveedor : '');
        this.vanio = (queja ? queja.anio : 0);
        this.vsecanio = (queja ? queja.secuencia : 0);
        this._vUbicacion = (queja ? queja.ubicacion : '');
        this.vidqueja = (queja ? queja.idQueja : 0);
    };
    QuejaconComponent.prototype.initConsumidor = function (consumidor) {
        this.quejaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'nombre': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](consumidor ? consumidor.nombre1 : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            //'nombre2': new FormControl(consumidor ? consumidor.nombre2 : ''),
            //'nombre3': new FormControl(consumidor ? consumidor.nombre3 : ''),
            //'apellido1': new FormControl(consumidor ? consumidor.apellido1 : '', Validators.required),
            //'apellido2': new FormControl(consumidor ? consumidor.apellido2 : ''),
            //'apellidoCasada': new FormControl(consumidor ? consumidor.apellidoCasada : ''),
            'telefono': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](consumidor ? consumidor.telefono : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            //'telefonoDomicilio': new FormControl(consumidor ? consumidor.domicilio : ''),
            'correo': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](consumidor ? consumidor.correoElectronico1 : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email),
            'dpiPasaporte': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](consumidor ? consumidor.documentoIdentificacion : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'detalleQueja': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.detalleQueja, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'solicitaQue': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.solicitaQue, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'nitProveedor': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.nitProveedor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'ubicacion': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.ubicacion)
        });
        this.findBySecuencia();
        //////console.log("inicializa consumidor");
    };
    QuejaconComponent.prototype.initProveedor = function (proveedor) {
        this.quejaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'nombre': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.nombre, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'telefono': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.telefono, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'correo': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.correo, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email),
            'dpiPasaporte': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.dpiPasaporte, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'detalleQueja': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.detalleQueja, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'solicitaQue': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.solicitaQue, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'nitProveedor': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](proveedor ? proveedor.nitProveedor : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            /*
            'primerNombre': new FormControl(proveedor ? proveedor.primerNombre : ''),
            'segundoNombre': new FormControl(proveedor ? proveedor.segundoNombre : ''),
            'tercerNombre': new FormControl(proveedor ? proveedor.tercerNombre : ''),
            'primerApellido': new FormControl(proveedor ? proveedor.primerApellido : ''),
            'segundoApellido': new FormControl(proveedor ? proveedor.segundoApellido : ''),
            'apellidoCasada': new FormControl(proveedor ? proveedor.apellidoCasada : ''),
            'nombreEmpresa': new FormControl(proveedor ? proveedor.nombreEmpresa : ''),
            'razonSocial': new FormControl(proveedor ? proveedor.razonSocial : ''),
            */
            'ubicacion': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.ubicacion)
        });
        //////console.log("inicializa consumidor");
    };
    QuejaconComponent.prototype.onDocumentoIdentificacionChanged = function () {
        var _this = this;
        //////console.log(this.quejaForm.value.dpiPasaporte);
        this.consumidoresService.fetchData(this.quejaForm.value.dpiPasaporte).subscribe(function (response) {
            if (response.value) {
                // inicializar formulario con valores predeterminados
                _this.existingModeConsumidor = true;
                _this.existingConsumidor = response.value;
                _this.initConsumidor(response.value);
                //queja.dpiPasaporte = this.quejaForm.value.dpiPasaporte;
            }
            else {
                _this.initConsumidor(null);
                _this.existingModeConsumidor = false;
                _this.existingConsumidor = null;
            }
        });
        //////console.log("ingreso al onDocumentoIdentificacionChanged");
    };
    QuejaconComponent.prototype.onProveedorChanged = function () {
        var _this = this;
        //////console.log(this.quejaForm.value.nitProveedor);
        this.proveedoresService.fetchData(this.quejaForm.value.nitProveedor).subscribe(function (response) {
            if (response.value) {
                // inicializar formulario con valores predeterminados
                _this.existingModeProveedor = true;
                _this.existingProveedor = response.value;
                _this.initProveedor(response.value);
                _this.nproveedor = response.value.nombre;
            }
            else {
                _this.existingModeProveedor = false;
                _this.existingProveedor = null;
                _this.nproveedor = "";
            }
        });
        //////console.log("ingreso al onProveedorChanged");
    };
    QuejaconComponent.prototype.initNoQueja = function (queja) {
        this.vanio = (queja ? queja.anio : 0);
        this.vsecanio = (queja ? queja.noQueja : 0);
        ////console.info('initNoQueja|');
        ////console.info(this.vanio);
        ////console.info(this.vsecanio);
    };
    QuejaconComponent.prototype.findSecuenciaId = function () {
        var _this = this;
        if (this.vsecuencia = "") {
        }
        else {
            this.quejasService.fetchDataSecId(this.vsecuencia).subscribe(function (response) {
                if (response.value) {
                    // inicializar formulario con valores predeterminados
                    ////console.info("findSecuenc");
                    _this.initNoQueja(response.value);
                }
            });
        }
    };
    QuejaconComponent.prototype.findBySecuencia = function () {
        var _this = this;
        this.quejasService.fetchDataSecuencia().subscribe(function (response) {
            if (response.value) {
                // inicializar formulario con valores predeterminados
                //
                _this.vsecuencia2 = response.value;
                _this.vsecuencia = response.value;
            }
        });
    };
    QuejaconComponent.prototype.findByToken = function (dato) {
        var _this = this;
        this.quejasService.fetchDataByToken(this.vid, dato).subscribe(function (response) {
            if (response.value) {
                // inicializar formulario con valores predeterminados
                //
                _this.existingQueja = response.value;
                _this.existingModeToken = true;
                _this.initQuejaParam(response.value);
            }
            else {
                _this.existingData = false;
            }
        });
        console.info(this._vDpiPasaporte);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('filDpi'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], QuejaconComponent.prototype, "filDpi", void 0);
    QuejaconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quejacon',
            template: __webpack_require__(/*! ./quejacon.component.html */ "./src/app/quejacon/quejacon.component.html"),
            styles: [__webpack_require__(/*! ./quejacon.component.scss */ "./src/app/quejacon/quejacon.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _shared_consumidores_service__WEBPACK_IMPORTED_MODULE_8__["ConsumidoresService"],
            _shared_proveedores_service__WEBPACK_IMPORTED_MODULE_9__["ProveedoresService"],
            _shared_quejasini_service__WEBPACK_IMPORTED_MODULE_5__["QuejasIniService"]])
    ], QuejaconComponent);
    return QuejaconComponent;
}());



/***/ }),

/***/ "./src/app/quejaext/quejaext.component.html":
/*!**************************************************!*\
  !*** ./src/app/quejaext/quejaext.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n\n</head>\n<body>\n    \n\t<div class=\"container\">\n\t\n\t\n\t<!--img src=\"imagen-grd2.png\" class=\"center\"/-->\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-4 text-center\">\n\t\t\t\t&nbsp;\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4 text-center\">\n\t\t\t\t<img class=\"headerimg\" />\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4 text-center\">\n\t\t\t\t&nbsp;\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n<div class=\"container\">\n\n \n  \n  <!--div class=\"row\">\n    <h2></h2>\n  </div-->\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <form [formGroup]=\"quejaForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n\t\t<div class=\"form-group row\">\n          <label for=\"\" class=\"col-lg-3 col-form-label\">Datos Consumidor</label>\n\t\t   \n\t\t<div class=\"col-lg-12\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n\t\t\t  \n\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\n\t\t\t\t<label for=\"et1\" >(-)</label>\n\t\t\t\t<label for=\"dpiPasaporte\" class=\"col-lg-2 col-form-label\" >DPI o pasaporte</label>\n          <div class=\"col-lg-3\">\n            <input\n              id=\"dpiPasaporte\"\n              type=\"text\"\n              class=\"form-control\"\n\t\t\t  matTooltipPosition=\"after\"\n\t\t\t\t\t  matTooltip=\"Ingrese su DPI o Pasaporte\"\n\t\t\t\t\t  matTooltipClass=\"custom-tooltip-blue\"\n              formControlName=\"dpiPasaporte\"\n\t\t\t  (change)=\"onDocumentoIdentificacionChanged()\"\n\t\t\t  placeholder=\"Documento\"\n\t\t\t  maxLength=\"50\"\n\t\t\t  \n\t\t\t  >\n\t\t\t\t<div *ngIf=\"quejaForm.get('dpiPasaporte').errors && quejaForm.get('dpiPasaporte').dirty\">\n\t\t\t\t<p *ngIf=\"quejaForm.get('dpiPasaporte').hasError('required')\" [ngStyle]=\"{color: 'red'}\">Ingrese su DPI o Pasaporte</p>\n\t\t\t  </div>\n\t\t\t  <div *ngIf=\"quejaForm.get('dpiPasaporte').errors && quejaForm.get('dpiPasaporte').dirty\">\n\t\t\t\t<p *ngIf=\"quejaForm.get('dpiPasaporte').hasError('maxLength')\" [ngStyle]=\"{color: 'red'}\">DPI solo admite 50 caracteres</p>\n\t\t\t  </div>\n\t\t\t  \n\t\t\t  \n          </div>\n\t\t         <label for=\"et2\" [ngStyle]=\"{color: 'red'}\" class=\"col-lg-1 col-form-label\"></label>\n\t\t\t\t <label for=\"et2\" [ngStyle]=\"{color: 'red'}\">(*)</label>\n\t\t\t\t  <label for=\"nombre\" class=\"col-lg-2 col-form-label\">Nombre(s)</label>\n\t\t\t\t  <div class=\"col-lg-3\">\n\t\t\t\t\t<input\n\t\t\t\t\t  id=\"nombre\"\n\t\t\t\t\t  type=\"text\"\n\t\t\t\t\t  class=\"form-control\"\n\t\t\t\t\t  matTooltipPosition=\"after\"\n\t\t\t\t\t  matTooltip=\"Ingrese su nombre\"\n\t\t\t\t\t  matTooltipClass=\"custom-tooltip-blue\"\n\t\t\t\t\t  formControlName=\"nombre\" \n\t\t\t\t\t  placeholder=\"Nombre(s)\"\n\t\t\t\t\t  maxLength=\"300\"\n\t\t\t\t\t  required>\n\t\t\t\t\t  <div *ngIf=\"quejaForm.get('nombre').errors && quejaForm.get('nombre').dirty\">\n\t\t\t\t<p *ngIf=\"quejaForm.get('nombre').hasError('maxLength')\" [ngStyle]=\"{color: 'red'}\">Nombre solo admite 300 caracteres</p>\n\t\t\t  </div>\n\t\t\t\t  </div>\n\t\t\t\t  \n\t\t\t\t  \n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\n\t\n\t\n\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\n\t\t\t\t<label for=\"et3\" [ngStyle]=\"{color: 'red'}\">(*)</label>\n\t\t\t\t  <label for=\"apellido\" class=\"col-lg-2 col-form-label\">Apellido(s)</label>\n\t\t\t\t  <div class=\"col-lg-3\">\n\t\t\t\t\t<input\n\t\t\t\t\t  id=\"apellido\"\n\t\t\t\t\t  type=\"text\"\n\t\t\t\t\t  class=\"form-control\"\n\t\t\t\t\t  matTooltipPosition=\"after\"\n\t\t\t\t\t  matTooltip=\"Ingrese su apellido\"\n\t\t\t\t\t  matTooltipClass=\"custom-tooltip-blue\"\n\t\t\t\t\t  formControlName=\"apellido\" \n\t\t\t\t\t  placeholder=\"Apellido(s)\"\n\t\t\t\t\t  maxLength=\"300\"\n\t\t\t\t\t  required>\n\t\t\t\t\t  <div *ngIf=\"quejaForm.get('apellido').errors && quejaForm.get('apellido').dirty\">\n\t\t\t\t<p *ngIf=\"quejaForm.get('apellido').hasError('maxLength')\" [ngStyle]=\"{color: 'red'}\">Apellido solo admite 300 caracteres</p>\n\t\t\t  </div>\n\t\t\t\t  </div>\n\t\t <label for=\"et2\" [ngStyle]=\"{color: 'red'}\" class=\"col-lg-1 col-form-label\"></label>\t\t  \n\t\t <label for=\"et4\" [ngStyle]=\"{color: 'red'}\">(*)</label>\t\t\n          <label for=\"telefono\" class=\"col-lg-2 col-form-label\">telefono</label>\n          <div class=\"col-lg-3\">\n            <input\n              id=\"telefono\"\n              type=\"text\"\n              class=\"form-control\"\n\t\t\t  matTooltipPosition=\"after\"\n\t\t\t\t\t  matTooltip=\"Ingrese su Número de teléfono\"\n\t\t\t\t\t  matTooltipClass=\"custom-tooltip-blue\"\n              formControlName=\"telefono\"\n\t\t\t  placeholder=\"Teléfono\"\n\t\t\t  pattern=\"^[0-9]{8}$\"\n\t\t\t  required>\n\t\t\t  <div *ngIf=\"quejaForm.get('telefono').errors && quejaForm.get('telefono').dirty\">\n\t\t\t\t<p *ngIf=\"quejaForm.get('telefono').hasError('pattern')\" [ngStyle]=\"{color: 'red'}\" >Error en numero de telefono, solo admite números</p>\n\t\t\t  </div>\n          </div>\n\t\t  \n\t\t  \n\t\t  </div>\n\t\t  <div class=\"form-group row\">\n\t\t  <label for=\"et5\" [ngStyle]=\"{color: 'red'}\">(*)</label>\n\t\t  <label for=\"correo\" class=\"col-lg-2 col-form-label\">Correo Electronico</label>\n          <div class=\"col-lg-3\">\n            <input\n              id=\"correo\"\n              type=\"text\"\n              class=\"form-control\"\n\t\t\t  matTooltipPosition=\"after\"\n\t\t\t\t\t  matTooltip=\"Ingrese su correo electrónico\"\n\t\t\t\t\t  matTooltipClass=\"custom-tooltip-blue\"\n              formControlName=\"correo\"\n\t\t\t  placeholder=\"Correo\"\n\t\t\t  pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n\t\t\t  required>\n\t\t\t  <div *ngIf=\"quejaForm.get('correo').errors && quejaForm.get('correo').dirty\">\n\t\t\t\t<p *ngIf=\"quejaForm.get('correo').hasError('pattern')\" [ngStyle]=\"{color: 'red'}\">Error en formato de correo</p>\n\t\t\t  </div>\n          </div>\n\t\t  \n        </div>\n\t\t\t\t\n\t\t\t\n\t\t<div class=\"form-group row\">\n\t\t  <label for=\"et6\" [ngStyle]=\"{color: 'red'}\">(*)</label>\n          <label for=\"detalleQueja\" class=\"col-lg-2 col-form-label\">Detalle Queja (sea breve y conciso)</label>\n          <div class=\"col-lg-3\">\n            <textarea\n              id=\"detalleQueja\"\n              class=\"form-control\"\n\t\t\t  matTooltipPosition=\"after\"\n\t\t\t\t\t  matTooltip=\"Ingrese su queja\"\n\t\t\t\t\t  matTooltipClass=\"custom-tooltip-blue\"\n              formControlName=\"detalleQueja\"\n\t\t\t  maxLength=\"1000\"\n\t\t\t  required\n\t\t\t  ></textarea>\n\t\t\t  <div *ngIf=\"quejaForm.get('detalleQueja').errors && quejaForm.get('detalleQueja').dirty\">\n\t\t\t\t<p *ngIf=\"quejaForm.get('detalleQueja').hasError('maxLength')\" [ngStyle]=\"{color: 'red'}\">Detalle de queda solo admite 250 caracteres</p>\n\t\t\t  </div>\n          </div>\n\t\t  \n         <label for=\"et7\" [ngStyle]=\"{color: 'red'}\">(*)</label>\n          <label for=\"solicitaQue\" class=\"col-lg-2 col-form-label\">Petición Queja (sea breve y conciso)</label>\n          <div class=\"col-lg-3\">\n            <textarea\n              id=\"solicitaQue\"\n              class=\"form-control\"\n\t\t\t  matTooltipPosition=\"after\"\n\t\t\t\t\t  matTooltip=\"Ingrese su solicitud de la queja ingresada.\"\n\t\t\t\t\t  matTooltipClass=\"custom-tooltip-blue\"\n              formControlName=\"solicitaQue\"\n\t\t\t  required\n\t\t\t  ></textarea>\n\t\t\t  <div *ngIf=\"quejaForm.get('solicitaQue').errors && quejaForm.get('solicitaQue').dirty\">\n\t\t\t\t<p *ngIf=\"quejaForm.get('solicitaQue').hasError('maxLength')\" [ngStyle]=\"{color: 'red'}\">Solicitud de queja solo admite 250 caracteres</p>\n\t\t\t  </div>\n          </div>\n        </div>\n\t\t\t\t\n\t\t\t  </div>\n\t\t\t</div>\n\t\t</div>\n\t\t</div>\n\t\t\n\t  \n\t\t\n\t\t<div class=\"form-group row\">\n          <label for=\"\" class=\"col-lg-12 col-form-label\">Datos Proveedor (Ingrese el NIT sin guión)</label>\n\t\t<div class=\"col-lg-12\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n\t\t\t  \n\t\t\t  <div class=\"form-group row\">\n\t\t\t      <label for=\"et8\" [ngStyle]=\"{color: 'red'}\">(*)</label>\n\t\t\t\t  <label for=\"nitProveedor\" class=\"col-lg-1 col-form-label\">NIT</label>\n\t\t\t\t  <div class=\"col-lg-2\">\n\t\t\t\t\t<input\n\t\t\t\t\t  id=\"nitProveedor\"\n\t\t\t\t\t  type=\"text\"\n\t\t\t\t\t  class=\"form-control\"\n\t\t\t\t\t  matTooltipPosition=\"after\"\n\t\t\t\t\t  matTooltip=\"Ingrese NIT del proveedor\"\n\t\t\t\t\t  matTooltipClass=\"custom-tooltip-blue\"\n\t\t\t\t\t  formControlName=\"nitProveedor\"\n\n\t\t\t\t\t  placeholder=\"NIT\"\n\t\t\t\t\t  pattern=\"^[0-9]+([0-9]|[K]|[k]){1}$\"\n\t\t\t\t\t  required>\n\t\t\t\t\t  <div *ngIf=\"quejaForm.get('nitProveedor').errors && quejaForm.get('nitProveedor').dirty\">\n\t\t\t\t<p *ngIf=\"quejaForm.get('nitProveedor').hasError('pattern')\" [ngStyle]=\"{color: 'red'}\">Error NIT incorrecto</p>\n\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-1\">\n\t\t\t\t\t  <button type=\"button\" class=\"btn btn-primary row button\" (click)=\"onProveedorChanged()\">Buscar</button>\n\t\t\t\t  </div>\n\t\t\t\t  \n\t\t\t  \n\t\t\t\t  <label for=\"et2\" [ngStyle]=\"{color: 'red'}\" class=\"col-lg-1 col-form-label\"></label>\n\t\t\t\t  <label for=\"et9\" [ngStyle]=\"{color: 'red'}\">(*)</label>\n\t\t\t\t  <label for=\"ubicacion\" class=\"col-lg-2 col-form-label\">Ubicacion</label>\n\t\t\t\t  <div class=\"col-lg-3\">\n\t\t\t\t  <input\n\t\t\t\t\t  id=\"ubicacion\"\n\t\t\t\t\t  type=\"text\"\n\t\t\t\t\t  class=\"form-control\"\n\t\t\t\t\t  matTooltipPosition=\"after\"\n\t\t\t\t\t  matTooltip=\"Ingrese ubicacion\"\n\t\t\t\t\t  matTooltipClass=\"custom-tooltip-blue\"\n\t\t\t\t\t  formControlName=\"ubicacion\"\n\t\t\t\t\t  placeholder=\"Ubicación\"\n\t\t\t\t\t  required>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"form-group row\">\n\t\t\t<label for=\"nitProveedor\" class=\"col-lg-10 col-form-label\">{{nproveedor}}</label>\n\t\t\t\t\n\t\t\t</div>\n\t\t\t\n\t\t\t  </div>\n\t\t\t</div>\n\t\t</div>\n\t\t  \n\t\t \n\t\t  \n\t\t</div>\t\t\n\t\n\t\t\n        <div class=\"form-group row\">\n          <label for=\"\" class=\"col-lg-2 col-form-label\">Datos Adjuntos</label>\n          <div class=\"col-lg-12\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <div class=\"form-group row\">\n\t\t\t\t<label for=\"et9\" [ngStyle]=\"{color: 'red'}\">(*)</label>\n                  <label for=\"filFactura\" class=\"col-lg-2 col-form-label\">Factura o Contrato</label>\n                  <div class=\"col-lg-10\">\n                    <input\n                      #filFactura\n\t\t\t\t\t  \n                      id=\"filFactura\"\n\t                      type=\"file\"\n                      ng2FileSelect\n                      [uploader]=\"uploader\"\n                      class=\"form-control\"\n\t\t\t\t\t  matTooltipPosition=\"above\"\n\t\t\t\t\t  matTooltip=\"Agrege copia de su documento.\"\n\t\t\t\t\t  matTooltipClass=\"custom-tooltip-blue\"\n                      (change)=\"onFileChanged('FAC')\"\n\t\t\t\t\t  required>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n\t\t\t\t<label for=\"et9\" [ngStyle]=\"{color: 'red'}\">(*)</label>\n                  <label for=\"filDpi\" class=\"col-lg-2 col-form-label\">DPI o Pasaporte</label>\n                  <div class=\"col-lg-10\">\n                    <input\n\t\t\t\t\t\t\n                      #filDpi\n                      id=\"filDpi\"\n                      type=\"file\"\n                      ng2FileSelect\n                      [uploader]=\"uploader\"\n                      class=\"form-control\"\n\t\t\t\t\t  matTooltipPosition=\"above\"\n\t\t\t\t\t  matTooltip=\"Agrege su copia de DPI o Pasaporte\"\n\t\t\t\t\t  matTooltipClass=\"custom-tooltip-blue\"\n                      (change)=\"onFileChanged('DPI')\"\n\t\t\t\t\t  required>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <p>Estos documentos deben ir completos, por ejemplo el DPI debe ser escaneado a ambos lados.</p>\n                </div>\n              </div>\n            </div>\n          </div>\n\t\t  <label class=\"col-form-label\" >(Los campos marcados </label>\n\t\t  <label class=\"col-form-label\" [ngStyle]=\"{color: 'red'}\">  (*)  </label>\n\t\t  <label class=\"col-form-label\" > son obligatorios.)</label>\n\t\t  \n        </div>\n\t\t\n        <div class=\"form-group row\">\n          <div class=\"col-lg-12 text-center\">\n            <button\n              class=\"btn btn-primary\"\n              type=\"submit\"\n\t\t\t  matTooltipPosition=\"after\"\n\t\t\t\t\t  matTooltip=\"Grabe su queja.\"\n\t\t\t\t\t  matTooltipClass=\"custom-tooltip-blue\"\n\t\t\t  [disabled]=\"quejaForm.invalid\"\n              >Guardar Queja</button>\n          </div>\n        </div>\n      </form>\n\t  \n  \n    </div>\n  </div>\n  \n  <div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\" *ngIf=\"success\">\n    <strong>Queja registrada!</strong> Su queja ha sido registrada exitosamente. {{vsecanio}}-{{vanio}}\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"onDismissClicked()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  \n  \n</div>\n    <!--img src=\"diaco-grd.jpg\" class=\"center\"/-->\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-4 text-center\">\n\t\t\t\t&nbsp;\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4 text-center\">\n\t\t\t\t<img class=\"footerimg\" />\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4 text-center\">\n\t\t\t\t&nbsp;\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/quejaext/quejaext.component.scss":
/*!**************************************************!*\
  !*** ./src/app/quejaext/quejaext.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* BASIC */\n.headerimg {\n  content: url('imagen-grd2.png');\n  width: 100%;\n  height: auto; }\n.footerimg {\n  content: url('diaco-grd.jpg');\n  width: 100%;\n  height: auto; }\nbody {\n  background-image: url('diacofade3.jpg'), url('imagen-grdfade2.jpg');\n  background-repeat: no-repeat, no-repeat;\n  background-attachment: fixed, fixed;\n  background-size: auto auto, auto auto;\n  background-position: bottom right, bottom left;\n  min-height: 100vh; }\nhtml {\n  background-color: #56baed; }\nbody {\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh; }\na.underlineHover {\n  color: #e68a00;\n  display: inline-block;\n  text-decoration: none;\n  font-weight: 400; }\nh2 {\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 40px 8px 10px 8px;\n  color: #cccccc; }\n/* STRUCTURE */\n.wrapper {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  min-height: 100%;\n  padding: 20px; }\n#formContent {\n  border-radius: 10px 10px 10px 10px;\n  background: #fff;\n  padding: 30px;\n  width: 90%;\n  max-width: 450px;\n  position: relative;\n  padding: 0px;\n  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);\n  text-align: center;\n  background-color: #00284d; }\n#formFooter {\n  background-color: #f6f6f7;\n  border-top: 1px solid #dce8f1;\n  padding: 25px;\n  text-align: center;\n  border-radius: 0 0 10px 10px; }\n/* TABS */\nh2.inactive {\n  color: #cccccc; }\nh2.active {\n  color: #0d0d0d;\n  border-bottom: 2px solid #5fbae9; }\n/* FORM TYPOGRAPHY*/\ninput[type=button], input[type=submit], input[type=reset] {\n  background-color: #1aa3ff;\n  border: none;\n  color: white;\n  padding: 15px 80px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 10px;\n  box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);\n  border-radius: 5px 5px 5px 5px;\n  margin: 5px 20px 40px 20px;\n  transition: all 0.3s ease-in-out; }\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover {\n  background-color: #e68a00; }\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active {\n  transform: scale(0.95); }\ninput[type=text], input[type=password] {\n  background-color: #f6f6f6;\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 110%;\n  border: 2px solid #f6f6f6;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px; }\ninput[type=text]:focus, input[type=password]:focus {\n  background-color: #fff;\n  border-bottom: 2px solid #5fbae9; }\ninput[type=text]:placeholder {\n  color: #cccccc; }\n/* ANIMATIONS */\n/* Simple CSS3 Fade-in-down Animation */\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0); }\n  100% {\n    opacity: 1;\n    transform: none; } }\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    transform: none; } }\n/* Simple CSS3 Fade-in Animation */\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n.fadeIn {\n  opacity: 0;\n  -webkit-animation: fadeIn ease-in 1;\n  animation: fadeIn ease-in 1;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s; }\n.fadeIn.first {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s; }\n.fadeIn.second {\n  -webkit-animation-delay: 0.6s;\n  animation-delay: 0.6s; }\n.fadeIn.third {\n  -webkit-animation-delay: 0.8s;\n  animation-delay: 0.8s; }\n.fadeIn.fourth {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s; }\n/* Simple CSS3 Fade-in Animation */\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #56baed;\n  content: \"\";\n  transition: width 0.2s; }\n.underlineHover:hover {\n  /*color: #1aa3ff;*/ }\n.underlineHover:hover:after {\n  width: 100%; }\n/* OTHERS */\n*:focus {\n  outline: none; }\n#icon {\n  width: 60%; }\nhtml, body {\n  height: 100%; }\n/*footer css*/\n#wrap {\n  min-height: 100%; }\n#main {\n  overflow: auto;\n  padding-bottom: 150px;\n  /* this needs to be bigger than footer height*/ }\n.page-footer {\n  background-color: #00284d;\n  color: white; }\n.footer-copyright {\n  color: white; }\n.footer-link {\n  color: white;\n  text-decoration: underline; }\n.footer-link:hover {\n  color: #e68a00;\n  text-decoration: underline; }\n.footer-margin {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  /* Set the fixed height of the footer here */\n  height: 100px;\n  /*line-height: 100px;*/\n  /* Vertically center the text there */ }\n.center {\n  margin-left: auto;\n  margin-right: auto;\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlamFleHQvQzpcXHd3d1xcQVBQX0RJQUNPXFxkZXNhcnJvbGxvXFxjYXJsb3Mgc2F6XFxmcm9udEVuZFxcZGlzdDUvc3JjXFxhcHBcXHF1ZWphZXh0XFxxdWVqYWV4dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxVQUFBO0FBRUE7RUFDSywrQkFBa0M7RUFDckMsV0FBVztFQUNYLFlBQVksRUFBQTtBQUVkO0VBQ0ssNkJBQWdDO0VBQ25DLFdBQVc7RUFDWCxZQUFZLEVBQUE7QUFJZDtFQUNDLG1FQUFtRTtFQUNuRSx1Q0FBdUM7RUFDdkMsbUNBQW1DO0VBQ25DLHFDQUFxQztFQUNyQyw4Q0FBOEM7RUFDOUMsaUJBQWdCLEVBQUE7QUFJakI7RUFDRSx5QkFBeUIsRUFBQTtBQUczQjtFQUNFLGtDQUFrQztFQUNsQyxhQUFhLEVBQUE7QUFHZjtFQUNFLGNBQWM7RUFDZCxxQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHFCQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsY0FBYyxFQUFBO0FBS2hCLGNBQUE7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWEsRUFBQTtBQUdmO0VBRUUsa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUVaLDRDQUF5QztFQUN6QyxrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUE7QUFHM0I7RUFDRSx5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixrQkFBa0I7RUFFbEIsNEJBQTRCLEVBQUE7QUFLOUIsU0FBQTtBQUVBO0VBQ0UsY0FBYyxFQUFBO0FBR2hCO0VBQ0UsY0FBYztFQUNkLGdDQUFnQyxFQUFBO0FBS2xDLG1CQUFBO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGVBQWU7RUFFZixpREFBOEM7RUFFOUMsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUsxQixnQ0FBZ0MsRUFBQTtBQUdsQztFQUNFLHlCQUF5QixFQUFBO0FBRzNCO0VBS0Usc0JBQXNCLEVBQUE7QUFHeEI7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFdBQVc7RUFDWCxXQUFXO0VBQ1gseUJBQXlCO0VBS3pCLGdDQUFnQztFQUVoQyw4QkFBOEIsRUFBQTtBQUdoQztFQUNFLHNCQUFzQjtFQUN0QixnQ0FBZ0MsRUFBQTtBQUdsQztFQUNFLGNBQWMsRUFBQTtBQUtoQixlQUFBO0FBRUEsdUNBQUE7QUFDQTtFQUNFLGtDQUFrQztFQUNsQywwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixpQ0FBaUM7RUFDakMseUJBQXlCLEVBQUE7QUFHM0I7RUFDRTtJQUNFLFVBQVU7SUFFVixtQ0FBbUMsRUFBQTtFQUVyQztJQUNFLFVBQVU7SUFFVixlQUFlLEVBQUEsRUFBQTtBQUluQjtFQUNFO0lBQ0UsVUFBVTtJQUVWLG1DQUFtQyxFQUFBO0VBRXJDO0lBQ0UsVUFBVTtJQUVWLGVBQWUsRUFBQSxFQUFBO0FBSW5CLGtDQUFBO0FBQ0E7RUFBNEI7SUFBTyxVQUFTLEVBQUE7RUFBSTtJQUFLLFVBQVMsRUFBQSxFQUFBO0FBRTlEO0VBQW9CO0lBQU8sVUFBUyxFQUFBO0VBQUk7SUFBSyxVQUFTLEVBQUEsRUFBQTtBQUV0RDtFQUNFLFVBQVM7RUFDVCxtQ0FBa0M7RUFFbEMsMkJBQTBCO0VBRTFCLHFDQUFvQztFQUVwQyw2QkFBNEI7RUFFNUIsOEJBQTZCO0VBRTdCLHNCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsMkJBQTJCO0VBRTNCLG1CQUFtQixFQUFBO0FBR3JCLGtDQUFBO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsT0FBTztFQUNQLGFBQWE7RUFDYixRQUFRO0VBQ1IsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsc0JBQXNCLEVBQUE7QUFHeEI7RUFDRSxrQkFBQSxFQUFtQjtBQUdyQjtFQUNFLFdBQVcsRUFBQTtBQUtiLFdBQUE7QUFFQTtFQUNJLGFBQWEsRUFBQTtBQUdqQjtFQUNFLFVBQVMsRUFBQTtBQUdYO0VBQ0UsWUFBWSxFQUFBO0FBR2QsYUFBQTtBQUVBO0VBQ0UsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSxjQUFhO0VBQ2IscUJBQW9CO0VBQUUsOENBQUEsRUFBK0M7QUFHdkU7RUFDRSx5QkFBeUI7RUFDekIsWUFBVyxFQUFBO0FBR2I7RUFDQyxZQUFXLEVBQUE7QUFHWjtFQUNDLFlBQVc7RUFDWCwwQkFBMEIsRUFBQTtBQUczQjtFQUNDLGNBQWE7RUFDYiwwQkFBMEIsRUFBQTtBQUczQjtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsV0FBVztFQUNYLDRDQUFBO0VBQ0EsYUFBYTtFQUNiLHNCQUFBO0VBQXdCLHFDQUFBLEVBQXNDO0FBR2hFO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9xdWVqYWV4dC9xdWVqYWV4dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiBCQVNJQyAqL1xyXG5cclxuLmhlYWRlcmltZ3tcclxuICAgICBjb250ZW50OnVybChcImNzcy9pbWFnZW4tZ3JkMi5wbmdcIik7XHJcblx0IHdpZHRoOiAxMDAlO1xyXG5cdCBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLmZvb3RlcmltZ3tcclxuICAgICBjb250ZW50OnVybChcImNzcy9kaWFjby1ncmQuanBnXCIpO1xyXG5cdCB3aWR0aDogMTAwJTtcclxuXHQgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbiBcclxuIFxyXG5ib2R5IHtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9kaWFjb2ZhZGUzLmpwZyksIHVybCguL2ltYWdlbi1ncmRmYWRlMi5qcGcpIDtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0LCBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZCwgZml4ZWQ7XHJcblx0YmFja2dyb3VuZC1zaXplOiBhdXRvIGF1dG8sIGF1dG8gYXV0bztcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gcmlnaHQsIGJvdHRvbSBsZWZ0O1xyXG5cdG1pbi1oZWlnaHQ6MTAwdmg7IFxyXG59XHJcblxyXG4gXHJcbmh0bWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5hLnVuZGVybGluZUhvdmVyIHtcclxuICBjb2xvcjogI2U2OGEwMDtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogNDBweCA4cHggMTBweCA4cHg7IFxyXG4gIGNvbG9yOiAjY2NjY2NjO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIFNUUlVDVFVSRSAqL1xyXG5cclxuLndyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbiNmb3JtQ29udGVudCB7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWF4LXdpZHRoOiA0NTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDI4NGQ7XHJcbn1cclxuXHJcbiNmb3JtRm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY3O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGNlOGYxO1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi8qIFRBQlMgKi9cclxuXHJcbmgyLmluYWN0aXZlIHtcclxuICBjb2xvcjogI2NjY2NjYztcclxufVxyXG5cclxuaDIuYWN0aXZlIHtcclxuICBjb2xvcjogIzBkMGQwZDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcclxufVxyXG5cclxuXHJcblxyXG4vKiBGT1JNIFRZUE9HUkFQSFkqL1xyXG5cclxuaW5wdXRbdHlwZT1idXR0b25dLCBpbnB1dFt0eXBlPXN1Ym1pdF0sIGlucHV0W3R5cGU9cmVzZXRdICB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhYTNmZjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE1cHggODBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsMTg2LDIzMywwLjQpO1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwxODYsMjMzLDAuNCk7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gIG1hcmdpbjogNXB4IDIwcHggNDBweCAyMHB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciwgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyLCBpbnB1dFt0eXBlPXJlc2V0XTpob3ZlciAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNjhhMDA7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9YnV0dG9uXTphY3RpdmUsIGlucHV0W3R5cGU9c3VibWl0XTphY3RpdmUsIGlucHV0W3R5cGU9cmVzZXRdOmFjdGl2ZSAge1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW46IDVweDtcclxuICB3aWR0aDogMTEwJTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZjZmNmY2O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XTpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICNjY2NjY2M7XHJcbn1cclxuXHJcblxyXG5cclxuLyogQU5JTUFUSU9OUyAqL1xyXG5cclxuLyogU2ltcGxlIENTUzMgRmFkZS1pbi1kb3duIEFuaW1hdGlvbiAqL1xyXG4uZmFkZUluRG93biB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcclxuICBhbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxyXG5cclxuLmZhZGVJbiB7XHJcbiAgb3BhY2l0eTowO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XHJcbiAgLW1vei1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcclxuICBhbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcclxuXHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xyXG4gIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xyXG5cclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcclxuICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcclxuICBhbmltYXRpb24tZHVyYXRpb246MXM7XHJcbn1cclxuXHJcbi5mYWRlSW4uZmlyc3Qge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC40cztcclxufVxyXG5cclxuLmZhZGVJbi5zZWNvbmQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC42cztcclxufVxyXG5cclxuLmZhZGVJbi50aGlyZCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG59XHJcblxyXG4uZmFkZUluLmZvdXJ0aCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAxcztcclxuICBhbmltYXRpb24tZGVsYXk6IDFzO1xyXG59XHJcblxyXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xyXG4udW5kZXJsaW5lSG92ZXI6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAtMTBweDtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4ycztcclxufVxyXG5cclxuLnVuZGVybGluZUhvdmVyOmhvdmVyIHtcclxuICAvKmNvbG9yOiAjMWFhM2ZmOyovXHJcbn1cclxuXHJcbi51bmRlcmxpbmVIb3Zlcjpob3ZlcjphZnRlcntcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcblxyXG4vKiBPVEhFUlMgKi9cclxuXHJcbio6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufSBcclxuXHJcbiNpY29uIHtcclxuICB3aWR0aDo2MCU7XHJcbn1cclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLypmb290ZXIgY3NzKi9cclxuXHJcbiN3cmFwIHtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jbWFpbiB7XHJcbiAgb3ZlcmZsb3c6YXV0bztcclxuICBwYWRkaW5nLWJvdHRvbToxNTBweDsgLyogdGhpcyBuZWVkcyB0byBiZSBiaWdnZXIgdGhhbiBmb290ZXIgaGVpZ2h0Ki9cclxufVxyXG5cclxuLnBhZ2UtZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyODRkO1xyXG4gIGNvbG9yOndoaXRlO1xyXG59IFxyXG5cclxuLmZvb3Rlci1jb3B5cmlnaHR7XHJcblx0Y29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5mb290ZXItbGlua3tcclxuXHRjb2xvcjp3aGl0ZTtcclxuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmZvb3Rlci1saW5rOmhvdmVye1xyXG5cdGNvbG9yOiNlNjhhMDA7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5mb290ZXItbWFyZ2luIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8qIFNldCB0aGUgZml4ZWQgaGVpZ2h0IG9mIHRoZSBmb290ZXIgaGVyZSAqL1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgLypsaW5lLWhlaWdodDogMTAwcHg7Ki8gLyogVmVydGljYWxseSBjZW50ZXIgdGhlIHRleHQgdGhlcmUgKi9cclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/quejaext/quejaext.component.ts":
/*!************************************************!*\
  !*** ./src/app/quejaext/quejaext.component.ts ***!
  \************************************************/
/*! exports provided: QuejaextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuejaextComponent", function() { return QuejaextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_quejasini_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/quejasini.service */ "./src/app/shared/quejasini.service.ts");
/* harmony import */ var _shared_quejaini_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/quejaini.model */ "./src/app/shared/quejaini.model.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var _shared_consumidores_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/consumidores.service */ "./src/app/shared/consumidores.service.ts");
/* harmony import */ var _shared_proveedores_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/proveedores.service */ "./src/app/shared/proveedores.service.ts");
/* harmony import */ var _conc_virt_const__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../conc-virt-const */ "./src/app/conc-virt-const.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _buscaprov_buscaprov_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../buscaprov/buscaprov.component */ "./src/app/buscaprov/buscaprov.component.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_13__);

//import { Component, OnInit } from '@angular/core';

//import { ormGroup,  FormControl } from '@angular/forms';









//import { MyCustomDialogService } from '../my-custom-dialog/my-custom-dialog.service';



var QuejaextComponent = /** @class */ (function () {
    //constructor() { }
    function QuejaextComponent(router, dialog, consumidoresService, proveedoresService, quejasService
    //,private customDialog: MyCustomDialogService
    //,private fb: FormBuilder
    ) {
        //console.info(this._route.snapshot.paramMap.get('id'));
        this.router = router;
        this.dialog = dialog;
        this.consumidoresService = consumidoresService;
        this.proveedoresService = proveedoresService;
        this.quejasService = quejasService;
        this.nproveedor = "";
        this.vanio = 0;
        this.vsecanio = 0;
        this.vsecuencia2 = "";
        this.vidqueja = 0;
        this.vidimagen = 3;
        this.vdpi = -1;
        this.vfac = -1;
        this.vact = -1;
        this.existingModeConsumidor = false;
        this.existingModeProveedor = false;
        this.vsecuencia = "";
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploader"]({
            //url: BASE_URL_FILE,
            itemAlias: 'document'
        });
        this.success = false;
        this.successFile = true;
        this.showSpinner = true;
        this.operation = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    QuejaextComponent.prototype.ngOnDestroy = function () {
        ////console.log("finaliza");
    };
    QuejaextComponent.prototype.ngOnInit = function () {
        var _this = this;
        // listener cuando finaliza la operacion de creacion
        this.quejaOperationSubscription = this.quejasService.operation.subscribe(function (queja) {
            // limpia sesion
            _this.quejaForm.reset();
            _this.success = true;
            _this.successFile = true;
            _this.nproveedor = "";
        });
        /*
        this.customDialogForm = fb.group({
            dialogTitle: ['Title'],
            dialogMsg: [''],
            dialogType: ['alert'],
            okBtnColor: [''],
            okBtnLabel: [''],
            cancelBtnColor: [''],
            cancelBtnLabel: ['']
          });
          */
        //this._route.params.subscribe(
        //  (params: Params) => {
        //    this.vid = params.id;
        //  }
        //);
        this.initQuejaForm();
        //this.initConsumidorForm(null);
        //this.vid = this._route.snapshot.paramMap.get('id')
        //console.info(this.vid);
    };
    QuejaextComponent.prototype.initQuejaForm = function () {
        this.quejaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'nombre': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'apellido': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'dpiPasaporte': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'telefono': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'correo': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'detalleQueja': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'solicitaQue': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'nitProveedor': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'ubicacion': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.nproveedor = "";
        this.dpiIndex = -1;
        this.facturaIndex = -1;
        ////console.log("inicializa");
    };
    QuejaextComponent.prototype.onFileChanged = function (type) {
        //console.info(type);	
        this.vact = this.uploader.queue.length - 1;
        //console.info(this.factura);
        if (this.uploader.queue.length > 0) {
            if (type == 'FAC') {
                if (this.factura && this.facturaIndex > -1) {
                    var facturaItem = this.uploader.queue[this.facturaIndex];
                    this.uploader.removeFromQueue(facturaItem);
                }
                this.factura = this.uploader.queue[this.uploader.queue.length - 1];
                this.facturaIndex = this.uploader.queue.length - 1;
                if (this.dpiIndex == this.facturaIndex) {
                    this.dpiIndex = this.dpiIndex - 1;
                }
            }
            else if (type == 'DPI') {
                if (this.dpi && this.dpiIndex > -1) {
                    var dpiItem = this.uploader.queue[this.dpiIndex];
                    this.uploader.removeFromQueue(dpiItem);
                }
                this.dpi = this.uploader.queue[this.uploader.queue.length - 1];
                this.dpiIndex = this.uploader.queue.length - 1;
                if (this.dpiIndex == this.facturaIndex) {
                    this.facturaIndex = this.facturaIndex - 1;
                }
            }
            if (this.uploader.queue.length == 0) {
                this.dpiIndex = -1;
                this.facturaIndex = -1;
            }
            //console.info(this.factura);
            //console.info(this.dpi);
            //console.info(this.uploader.queue.length);
            //console.info(this.facturaIndex);
            //console.info(this.dpiIndex);
            if (this.uploader.queue.length == 2) {
                this.successFile = false;
            }
            else {
                this.successFile = true;
            }
        }
    };
    /*  onRemoveClicked(index: number) {
        let removeItem = this.uploader.queue[index];
        this.uploader.removeFromQueue(removeItem);
        if (index == this.facturaIndex) {
          this.facturaIndex = null;
          this.factura = null;
        } else if (index == this.dpiIndex) {
          this.dpiIndex = null;
          this.dpi = null;
        }
      }*/
    QuejaextComponent.prototype.onSubmit = function () {
        var _this = this;
        this.showSpinner = true;
        var queja = new _shared_quejaini_model__WEBPACK_IMPORTED_MODULE_6__["Quejaini"]();
        queja.nombre = this.quejaForm.value.nombre;
        queja.apellido = this.quejaForm.value.apellido;
        queja.dpiPasaporte = this.quejaForm.value.dpiPasaporte;
        queja.telefono = this.quejaForm.value.telefono;
        queja.correo = this.quejaForm.value.correo;
        queja.detalleQueja = this.quejaForm.value.detalleQueja;
        queja.solicitaQue = this.quejaForm.value.solicitaQue;
        queja.nitProveedor = this.quejaForm.value.nitProveedor;
        queja.ubicacion = this.quejaForm.value.ubicacion;
        queja.anio = 0;
        queja.secuencia = 0;
        queja.idFuente = "Web user";
        if (this.existingModeConsumidor) {
            queja.idConsumidor = this.existingConsumidor.idConsumidor;
        }
        else {
            queja.idConsumidor = 0;
        }
        if (this.existingModeProveedor) {
            queja.idProveedor = this.existingProveedor.idProveedor;
        }
        else {
            queja.idProveedor = 0;
        }
        // verifica que esten ingresados los 2 archivos
        if (this.uploader.queue.length != 2) {
            alert("Debe de ingresar Datos adjuntos requeridos.");
            this.showSpinner = false;
            return;
        }
        //coloca los archivos en orden.
        if (this.uploader.queue.length >= 2) {
            var removeItem = this.uploader.queue[1];
            this.uploader.removeFromQueue(removeItem);
            removeItem = this.uploader.queue[0];
            this.uploader.removeFromQueue(removeItem);
            this.uploader.queue.push(this.factura);
            this.uploader.queue.push(this.dpi);
            console.info(this.uploader.queue.length);
        }
        //queja = this.quejasService.createQueja(queja, this.uploader).susbribe;
        this.quejasService.saveData(queja, '').subscribe(function (retvalue) {
            if (retvalue) {
                var tempstr = retvalue['value'];
                if (tempstr != null && tempstr != '') {
                    //this.registrodata=JSON.parse('['+retvalue["value"].slice(0, -1) +']');
                    _this.vanio = tempstr.anio;
                    _this.vsecanio = tempstr.secuencia;
                    _this.vidqueja = tempstr.idQueja;
                    if (_this.uploader.queue.length > 0) {
                        //console.log(this.vidqueja);
                        _this.uploader.onBeforeUploadItem = function (removeItem) {
                            //removeItem.withCredentials = false;
                            //removeItem.url = BASE_URL_REST_FILE + 'quejas/upload?id_queja='+this.vidqueja+"&id_categoria_imagen="+this.vidimagen;
                            //BASE_URL_REST_FILE + 'quejasini/upload?id_queja='+this.vidqueja+"&id_categoria_imagen="+this.vidimagen,
                            for (var i = 0; i < _this.uploader.queue.length; i++) {
                                console.log("modifica url - inicio");
                                console.log(i);
                                var removeItem_1 = _this.uploader.queue[i];
                                if (removeItem_1 == _this.dpi) {
                                    console.log("cambia url dpi");
                                    _this.uploader.queue[i].url = _conc_virt_const__WEBPACK_IMPORTED_MODULE_10__["BASE_URL_REST_FILE"] + 'quejasini/upload?id_queja=' + _this.vidqueja + "&id_categoria_imagen=" + 2 + "&correo=0&data=0";
                                    console.log(_this.uploader.queue[i].url);
                                    console.log(removeItem_1);
                                }
                                else {
                                    if (removeItem_1 == _this.factura) {
                                        console.log("cambia url factura");
                                        _this.uploader.queue[i].url = _conc_virt_const__WEBPACK_IMPORTED_MODULE_10__["BASE_URL_REST_FILE"] + 'quejasini/upload?id_queja=' + _this.vidqueja + "&id_categoria_imagen=" + 3 + "&correo=0&data=0";
                                        console.log(_this.uploader.queue[i].url);
                                        console.log(removeItem_1);
                                    }
                                    else {
                                        console.log("cambia url otro");
                                        _this.uploader.queue[i].url = _conc_virt_const__WEBPACK_IMPORTED_MODULE_10__["BASE_URL_REST_FILE"] + 'quejasini/upload?id_queja=' + _this.vidqueja + "&id_categoria_imagen=" + 1 + "&correo=0&data=0";
                                        console.log(_this.uploader.queue[i].url);
                                        console.log(removeItem_1);
                                    }
                                }
                                console.log("modifica url - fin");
                            }
                        };
                        _this.uploader.setOptions({
                            //url: BASE_URL_REST_FILE + 'quejasini/upload?id_queja='+this.vidqueja+"&id_categoria_imagen="+this.vidimagen,
                            itemAlias: 'file'
                        });
                        _this.uploader.onCompleteAll = function () {
                            // finalizo la carga de todos los archivos
                            _this.operation.next(retvalue.value);
                            //console.info(this.uploader.nativeElement.value);
                        };
                        _this.uploader.onCompleteItem = function (item, uploadResponse, status, headers) {
                            // finalizo la carga de un archivo
                            _this.vidimagen = _this.vidimagen + 1;
                            //console.info(this.uploader.nativeElement.value);
                        };
                        _this.uploader.uploadAll();
                    }
                    else {
                        _this.operation.next(retvalue.value);
                    }
                    _this.success = true;
                }
                else {
                    ////console.log('no llego');
                }
            }
            else {
                ////console.log('Rest service response ERROR.');
            }
        });
        this.showSpinner = false;
        this.onDismissClicked();
        //this.findSecuenciaId();
        //////console.info("onsSumiT");
        //this.vanio = queja.anio;
        //  this.vsecanio = queja.noQueja;
        ////console.info('-------------------');
        ////console.info(queja);
        ////console.info('-------------------');
    };
    QuejaextComponent.prototype.onDismissClicked = function () {
        this.success = false;
        this.successFile = false;
        this.initQuejaForm();
        ////console.info("onDismm");
    };
    QuejaextComponent.prototype.initConsumidor = function (consumidor, tipo) {
        if (tipo == 0) {
            this.quejaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                'nombre': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](consumidor ? consumidor.nombre1 +
                    (consumidor ? ' ' + (consumidor.nombre2 == null ? '' : consumidor.nombre2) +
                        (consumidor != null ? ' ' + (consumidor.nombre3 == null ? '' : consumidor.nombre3) : '') : '') : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'apellido': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](consumidor ? consumidor.apellido1 + (consumidor ? ' ' + (consumidor.apellido2 == null ? '' : consumidor.apellido2) : '') : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                //'apellidoCasada': new FormControl(consumidor ? consumidor.apellidoCasada : ''),
                'telefono': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](consumidor ? consumidor.telefono : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                //'telefonoDomicilio': new FormControl(consumidor ? consumidor.domicilio : ''),
                'correo': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](consumidor ? consumidor.correoElectronico1 : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email),
                'dpiPasaporte': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](consumidor ? consumidor.documentoIdentificacion : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'detalleQueja': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.detalleQueja, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'solicitaQue': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.solicitaQue, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'nitProveedor': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.nitProveedor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'ubicacion': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.ubicacion, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            });
        }
        else {
            this.quejaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                'nombre': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](consumidor ? consumidor.nombre1 +
                    (consumidor ? ' ' + (consumidor.nombre2 == null ? '' : consumidor.nombre2) +
                        (consumidor != null ? ' ' + (consumidor.nombre3 == null ? '' : consumidor.nombre3) : '') : '') : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'apellido': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](consumidor ? consumidor.apellido1 + (consumidor ? ' ' + (consumidor.apellido2 == null ? '' : consumidor.apellido2) : '') : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                //'apellidoCasada': new FormControl(consumidor ? consumidor.apellidoCasada : ''),
                'telefono': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](consumidor ? consumidor.telefono : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                //'telefonoDomicilio': new FormControl(consumidor ? consumidor.domicilio : ''),
                'correo': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](consumidor ? consumidor.correoElectronico1 : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email),
                'dpiPasaporte': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.dpiPasaporte, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'detalleQueja': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.detalleQueja, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'solicitaQue': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.solicitaQue, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'nitProveedor': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.nitProveedor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'ubicacion': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.ubicacion, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            });
        }
        this.findBySecuencia();
        //////console.log("inicializa consumidor");
    };
    QuejaextComponent.prototype.initProveedor = function (nit) {
        this.quejaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'nombre': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.nombre, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'apellido': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.apellido, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'telefono': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.telefono, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'correo': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.correo, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email),
            'dpiPasaporte': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.dpiPasaporte, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'detalleQueja': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.detalleQueja, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'solicitaQue': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.solicitaQue, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'nitProveedor': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](nit, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            /*
            'primerNombre': new FormControl(proveedor ? proveedor.primerNombre : ''),
            'segundoNombre': new FormControl(proveedor ? proveedor.segundoNombre : ''),
            'tercerNombre': new FormControl(proveedor ? proveedor.tercerNombre : ''),
            'primerApellido': new FormControl(proveedor ? proveedor.primerApellido : ''),
            'segundoApellido': new FormControl(proveedor ? proveedor.segundoApellido : ''),
            'apellidoCasada': new FormControl(proveedor ? proveedor.apellidoCasada : ''),
            'nombreEmpresa': new FormControl(proveedor ? proveedor.nombreEmpresa : ''),
            'razonSocial': new FormControl(proveedor ? proveedor.razonSocial : ''),
            */
            'ubicacion': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.ubicacion, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        //////console.log("inicializa consumidor");
    };
    QuejaextComponent.prototype.onDocumentoIdentificacionChanged = function () {
        var _this = this;
        //////console.log(this.quejaForm.value.dpiPasaporte);
        this.consumidoresService.fetchData(this.quejaForm.value.dpiPasaporte).subscribe(function (response) {
            if (response.value) {
                // inicializar formulario con valores predeterminados
                _this.existingModeConsumidor = true;
                _this.existingConsumidor = response.value;
                _this.initConsumidor(response.value, 0);
                //queja.dpiPasaporte = this.quejaForm.value.dpiPasaporte;
            }
            else {
                _this.existingModeConsumidor = false;
                _this.existingConsumidor = null;
                _this.initConsumidor(null, 1);
            }
        });
        //////console.log("ingreso al onDocumentoIdentificacionChanged");
    };
    QuejaextComponent.prototype.onProveedorChanged = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogConfig"]();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        var dialogRef = this.dialog.open(_buscaprov_buscaprov_component__WEBPACK_IMPORTED_MODULE_12__["BuscaprovComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (data) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_13__["isUndefined"])(data)) {
                console.info(data);
                // inicializar formulario con valores predeterminados
                _this.existingModeProveedor = true;
                _this.existingProveedor = data;
                _this.initProveedor(data.nitProveedor);
                _this.nproveedor = data.nombre;
            }
            else {
                _this.existingModeProveedor = false;
                _this.existingProveedor = null;
                _this.nproveedor = "";
            }
        }, function (error) { return console.info('Undefined data. No will insert 2'); }); //this.logService.print(error, LogService.ERROR_MSG));
        /*
        //////console.log(this.quejaForm.value.nitProveedor);
      this.proveedoresService.fetchData(this.quejaForm.value.nitProveedor).subscribe(
        (response) => {
          if (response.value) {
            // inicializar formulario con valores predeterminados
            this.existingModeProveedor = true;
            this.existingProveedor = response.value;
            this.initProveedor(response.value);
            this.nproveedor = response.value.nombre;
          } else {
            this.existingModeProveedor = false;
            this.existingProveedor = null;
            this.nproveedor = "";
          }
        }
      );
      //////console.log("ingreso al onProveedorChanged");
      */
    };
    QuejaextComponent.prototype.initNoQueja = function (queja) {
        this.vanio = (queja ? queja.anio : 0);
        this.vsecanio = (queja ? queja.noQueja : 0);
        ////console.info('initNoQueja|');
        ////console.info(this.vanio);
        ////console.info(this.vsecanio);
    };
    QuejaextComponent.prototype.findSecuenciaId = function () {
        var _this = this;
        if (this.vsecuencia = "") {
        }
        else {
            this.quejasService.fetchDataSecId(this.vsecuencia).subscribe(function (response) {
                if (response.value) {
                    // inicializar formulario con valores predeterminados
                    ////console.info("findSecuenc");
                    _this.initNoQueja(response.value);
                }
            });
        }
    };
    QuejaextComponent.prototype.findBySecuencia = function () {
        var _this = this;
        this.quejasService.fetchDataSecuencia().subscribe(function (response) {
            if (response.value) {
                // inicializar formulario con valores predeterminados
                //
                _this.vsecuencia2 = response.value;
                _this.vsecuencia = response.value;
            }
        });
    };
    QuejaextComponent.prototype.openCustomDialog = function () {
        console.log("this.customDialogForm.value");
        //this.customDialog.openAlertDialog(this.customDialogForm.value);
        this.success = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('filDpi'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], QuejaextComponent.prototype, "filDpi", void 0);
    QuejaextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quejaext',
            template: __webpack_require__(/*! ./quejaext.component.html */ "./src/app/quejaext/quejaext.component.html"),
            styles: [__webpack_require__(/*! ./quejaext.component.scss */ "./src/app/quejaext/quejaext.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"],
            _shared_consumidores_service__WEBPACK_IMPORTED_MODULE_8__["ConsumidoresService"],
            _shared_proveedores_service__WEBPACK_IMPORTED_MODULE_9__["ProveedoresService"],
            _shared_quejasini_service__WEBPACK_IMPORTED_MODULE_5__["QuejasIniService"]
            //,private customDialog: MyCustomDialogService
            //,private fb: FormBuilder
        ])
    ], QuejaextComponent);
    return QuejaextComponent;
}());



/***/ }),

/***/ "./src/app/quejaini/quejaini.component.html":
/*!**************************************************!*\
  !*** ./src/app/quejaini/quejaini.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n\n</head>\n<body>\n    \n\t<div class=\"container\">\n\t\n\t\n\t<!--img src=\"imagen-grd2.png\" class=\"center\"/-->\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-4 text-center\">\n\t\t\t\t&nbsp;\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4 text-center\">\n\t\t\t\t<img class=\"headerimg\" />\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4 text-center\">\n\t\t\t\t&nbsp;\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n<div class=\"container\">\n\n \n  \n  <!--div class=\"row\">\n    <h2></h2>\n  </div-->\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <form [formGroup]=\"quejaForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n\t\t<div class=\"form-group row\">\n          <label for=\"\" class=\"col-lg-3 col-form-label\">Datos Consumidor</label>\n\t\t   \n\t\t<div class=\"col-lg-12\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n\t\t\t  \n\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\n\t\t\t\t<label for=\"et1\" >(-)</label>\n\t\t\t\t<label for=\"dpiPasaporte\" class=\"col-lg-2 col-form-label\" >DPI o pasaporte</label>\n          <div class=\"col-lg-3\">\n            <input\n              id=\"dpiPasaporte\"\n              type=\"text\"\n              class=\"form-control\"\n\t\t\t  matTooltipPosition=\"after\"\n\t\t\t\t\t  matTooltip=\"Ingrese su DPI o Pasaporte\"\n\t\t\t\t\t  matTooltipClass=\"custom-tooltip-blue\"\n              formControlName=\"dpiPasaporte\"\n\t\t\t  (change)=\"onDocumentoIdentificacionChanged()\"\n\t\t\t  placeholder=\"Documento\"\n\t\t\t  maxLength=\"50\"\n\t\t\t  \n\t\t\t  >\n\t\t\t\t<div *ngIf=\"quejaForm.get('dpiPasaporte').errors && quejaForm.get('dpiPasaporte').dirty\">\n\t\t\t\t<p *ngIf=\"quejaForm.get('dpiPasaporte').hasError('required')\" [ngStyle]=\"{color: 'red'}\">Ingrese su DPI o Pasaporte</p>\n\t\t\t  </div>\n\t\t\t  <div *ngIf=\"quejaForm.get('dpiPasaporte').errors && quejaForm.get('dpiPasaporte').dirty\">\n\t\t\t\t<p *ngIf=\"quejaForm.get('dpiPasaporte').hasError('maxLength')\" [ngStyle]=\"{color: 'red'}\">DPI solo admite 50 caracteres</p>\n\t\t\t  </div>\n\n          </div>\n\t\t\t\t  <label for=\"et2\" [ngStyle]=\"{color: 'red'}\" class=\"col-lg-1 col-form-label\"></label>\n\t\t\t\t  <label for=\"et2\" [ngStyle]=\"{color: 'red'}\" >(*)</label>\n\t\t\t\t  <label for=\"nombre\" class=\"col-lg-2 col-form-label\">Nombre(s)</label>\n\t\t\t\t  <div class=\"col-lg-3\">\n\t\t\t\t\t<input\n\t\t\t\t\t  id=\"nombre\"\n\t\t\t\t\t  type=\"text\"\n\t\t\t\t\t  class=\"form-control\"\n\t\t\t\t\t  matTooltipPosition=\"after\"\n\t\t\t\t\t  matTooltip=\"Ingrese su nombre\"\n\t\t\t\t\t  matTooltipClass=\"custom-tooltip-blue\"\n\t\t\t\t\t  formControlName=\"nombre\" \n\t\t\t\t\t  placeholder=\"Nombre(s)\"\n\t\t\t\t\t  maxLength=\"300\"\n\t\t\t\t\t  required>\n\t\t\t\t\t  <div *ngIf=\"quejaForm.get('nombre').errors && quejaForm.get('nombre').dirty\">\n\t\t\t\t<p *ngIf=\"quejaForm.get('nombre').hasError('maxLength')\" [ngStyle]=\"{color: 'red'}\">Nombre solo admite 300 caracteres</p>\n\t\t\t  </div>\n\t\t\t\t  </div>\n\t\t\t\t  \n\t\t\t\t  \n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\n\t\n\t\n\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\n\t\t\t\t<label for=\"et3\" [ngStyle]=\"{color: 'red'}\">(*)</label>\n\t\t\t\t  <label for=\"apellido\" class=\"col-lg-2 col-form-label\">Apellido(s)</label>\n\t\t\t\t  <div class=\"col-lg-3\">\n\t\t\t\t\t<input\n\t\t\t\t\t  id=\"apellido\"\n\t\t\t\t\t  type=\"text\"\n\t\t\t\t\t  class=\"form-control\"\n\t\t\t\t\t  matTooltipPosition=\"after\"\n\t\t\t\t\t  matTooltip=\"Ingrese su apellido\"\n\t\t\t\t\t  matTooltipClass=\"custom-tooltip-blue\"\n\t\t\t\t\t  formControlName=\"apellido\" \n\t\t\t\t\t  placeholder=\"Apellido(s)\"\n\t\t\t\t\t  maxLength=\"300\"\n\t\t\t\t\t  required>\n\t\t\t\t\t  <div *ngIf=\"quejaForm.get('apellido').errors && quejaForm.get('apellido').dirty\">\n\t\t\t\t<p *ngIf=\"quejaForm.get('apellido').hasError('maxLength')\" [ngStyle]=\"{color: 'red'}\">Apellido solo admite 300 caracteres</p>\n\t\t\t  </div>\n\t\t\t\t  </div>\n\t\t\t\t\t <label for=\"et2\" [ngStyle]=\"{color: 'red'}\" class=\"col-lg-1 col-form-label\"></label>\n\t\t <label for=\"et4\" [ngStyle]=\"{color: 'red'}\">(*)</label>\t\t\n          <label for=\"telefono\" class=\"col-lg-2 col-form-label\">telefono</label>\n          <div class=\"col-lg-3\">\n            <input\n              id=\"telefono\"\n              type=\"text\"\n              class=\"form-control\"\n\t\t\t  matTooltipPosition=\"after\"\n\t\t\t\t\t  matTooltip=\"Ingrese su Número de teléfono\"\n\t\t\t\t\t  matTooltipClass=\"custom-tooltip-blue\"\n              formControlName=\"telefono\"\n\t\t\t  placeholder=\"Teléfono\"\n\t\t\t   pattern=\"^[0-9]{8}$\"\n\t\t\t  required>\n\t\t\t  <div *ngIf=\"quejaForm.get('telefono').errors && quejaForm.get('telefono').dirty\">\n\t\t\t\t<p *ngIf=\"quejaForm.get('telefono').hasError('pattern')\" [ngStyle]=\"{color: 'red'}\" >Error en numero de telefono, solo admite números</p>\n\t\t\t  </div>\n          </div>\n\t\t  \n\t\t  </div>\n\t\t  <div class=\"form-group row\">\n\t\t  <label for=\"et5\" [ngStyle]=\"{color: 'red'}\">(*)</label>\n\t\t  <label for=\"correo\" class=\"col-lg-2 col-form-label\">Correo Electronico</label>\n          <div class=\"col-lg-3\">\n            <input\n              id=\"correo\"\n              type=\"text\"\n              class=\"form-control\"\n\t\t\t  matTooltipPosition=\"after\"\n\t\t\t\t\t  matTooltip=\"Ingrese su correo electrónico\"\n\t\t\t\t\t  matTooltipClass=\"custom-tooltip-blue\"\n              formControlName=\"correo\"\n\t\t\t  placeholder=\"Correo\"\n\t\t\t  pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n\t\t\t  required>\n\t\t\t  <div *ngIf=\"quejaForm.get('correo').errors && quejaForm.get('correo').dirty\">\n\t\t\t\t<p *ngIf=\"quejaForm.get('correo').hasError('pattern')\" [ngStyle]=\"{color: 'red'}\">Error en formato de correo</p>\n\t\t\t  </div>\n          </div>\n\t\t  \n        </div>\n\t\t\t\t\n\t\t\t\n\t\t<div class=\"form-group row\">\n\t\t  <label for=\"et6\" [ngStyle]=\"{color: 'red'}\">(*)</label>\n          <label for=\"detalleQueja\" class=\"col-lg-2 col-form-label\">Detalle Queja (sea breve y conciso)</label>\n          <div class=\"col-lg-3\">\n            <textarea\n              id=\"detalleQueja\"\n              class=\"form-control\"\n\t\t\t  matTooltipPosition=\"after\"\n\t\t\t\t\t  matTooltip=\"Ingrese su queja\"\n\t\t\t\t\t  matTooltipClass=\"custom-tooltip-blue\"\n              formControlName=\"detalleQueja\"\n\t\t\t  maxLength=\"1000\"\n\t\t\t  required\n\t\t\t  ></textarea>\n\t\t\t  <div *ngIf=\"quejaForm.get('detalleQueja').errors && quejaForm.get('detalleQueja').dirty\">\n\t\t\t\t<p *ngIf=\"quejaForm.get('detalleQueja').hasError('maxLength')\" [ngStyle]=\"{color: 'red'}\">Detalle de queda solo admite 250 caracteres</p>\n\t\t\t  </div>\n          </div>\n         <label for=\"et7\" [ngStyle]=\"{color: 'red'}\">(*)</label>\n          <label for=\"solicitaQue\" class=\"col-lg-2 col-form-label\">Petición Queja (sea breve y conciso)</label>\n          <div class=\"col-lg-3\">\n            <textarea\n              id=\"solicitaQue\"\n              class=\"form-control\"\n\t\t\t  matTooltipPosition=\"after\"\n\t\t\t\t\t  matTooltip=\"Ingrese su solicitud de la queja ingresada.\"\n\t\t\t\t\t  matTooltipClass=\"custom-tooltip-blue\"\n              formControlName=\"solicitaQue\"\n\t\t\t  required\n\t\t\t  ></textarea>\n\t\t\t  <div *ngIf=\"quejaForm.get('solicitaQue').errors && quejaForm.get('solicitaQue').dirty\">\n\t\t\t\t<p *ngIf=\"quejaForm.get('solicitaQue').hasError('maxLength')\" [ngStyle]=\"{color: 'red'}\">Solicitud de queja solo admite 250 caracteres</p>\n\t\t\t  </div>\n          </div>\n        </div>\n\t\t\t\t\n\t\t\t  </div>\n\t\t\t</div>\n\t\t</div>\n\t\t</div>\n\n\t\t\t  \n\t\t<div class=\"form-group row\">\n          <label for=\"\" class=\"col-lg-12 col-form-label\">Datos Proveedor (Ingrese el NIT sin guión)</label>\n\t\t<div class=\"col-lg-12\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n\t\t\t  \n\t\t\t  <div class=\"form-group row\">\n\t\t\t      <label for=\"et8\" [ngStyle]=\"{color: 'red'}\">(*)</label>\n\t\t\t\t  <label for=\"nitProveedor\" class=\"col-lg-1 col-form-label\">NIT</label>\n\t\t\t\t  <div class=\"col-lg-2\">\n\t\t\t\t\t<input\n\t\t\t\t\t  id=\"nitProveedor\"\n\t\t\t\t\t  type=\"text\"\n\t\t\t\t\t  class=\"form-control\"\n\t\t\t\t\t  matTooltipPosition=\"after\"\n\t\t\t\t\t  matTooltip=\"Ingrese NIT del proveedor\"\n\t\t\t\t\t  matTooltipClass=\"custom-tooltip-blue\"\n\t\t\t\t\t  formControlName=\"nitProveedor\"\n\t\t\t\t\t  \n\t\t\t\t\t  placeholder=\"NIT\"\n\t\t\t\t\t  pattern=\"^[0-9]+([0-9]|[K]|[k]){1}$\"\n\t\t\t\t\t  required>\n\t\t\t\t\t  <div *ngIf=\"quejaForm.get('nitProveedor').errors && quejaForm.get('nitProveedor').dirty\">\n\t\t\t\t<p *ngIf=\"quejaForm.get('nitProveedor').hasError('pattern')\" [ngStyle]=\"{color: 'red'}\">Error NIT incorrecto</p>\n\t\t\t  </div>\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"col-lg-1\">\n\t\t\t\t\t  <button type=\"button\" class=\"btn btn-primary row button\" (click)=\"onProveedorChanged()\">Buscar</button>\n\t\t\t\t  </div>\n\t\t\t\t  \n\t\t\t\t   <label for=\"et2\" [ngStyle]=\"{color: 'red'}\" class=\"col-lg-1 col-form-label\"></label>\n\t\t\t\t  <label for=\"et9\" [ngStyle]=\"{color: 'red'}\">(*)</label>\n\t\t\t\t  <label for=\"ubicacion\" class=\"col-lg-2 col-form-label\">Ubicacion</label>\n\t\t\t\t  <div class=\"col-lg-3\">\n\t\t\t\t  <input\n\t\t\t\t\t  id=\"ubicacion\"\n\t\t\t\t\t  type=\"text\"\n\t\t\t\t\t  class=\"form-control\"\n\t\t\t\t\t  matTooltipPosition=\"after\"\n\t\t\t\t\t  matTooltip=\"Ingrese ubicacion\"\n\t\t\t\t\t  matTooltipClass=\"custom-tooltip-blue\"\n\t\t\t\t\t  formControlName=\"ubicacion\"\n\t\t\t\t\t  placeholder=\"Ubicación\"\n\t\t\t\t\t  required>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"form-group row\">\n\t\t\t<label for=\"nitProveedor\" class=\"col-lg-10 col-form-label\">{{nproveedor}}</label>\n\t\t\t\t\n\t\t\t</div>\n\t\t\t\n\t\t\t  </div>\n\t\t\t</div>\n\t\t</div>\n\t\t  \n\t\t <label class=\"col-form-label\" >(Los campos marcados </label>\n\t\t  <label class=\"col-form-label\" [ngStyle]=\"{color: 'red'}\">  (*)  </label>\n\t\t  <label class=\"col-form-label\" > son obligatorios.)</label>\n\t\t  \n\t\t</div>\n\t\n\t\t\n\t\t<!--\n        <div class=\"form-group row\">\n          <label for=\"\" class=\"col-lg-12 col-form-label\">Ingrese los datos solicitados si los poseee por favor, caso contrario se notificará al consumidor por correo para  que los envie.</label>\n          <div class=\"col-lg-12\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <div class=\"form-group row\">\n                  <label for=\"filFactura\" class=\"col-lg-2 col-form-label\">Factura o Contrato</label>\n                  <div class=\"col-lg-10\">\n                    <input\n                      #filFactura\n                      id=\"filFactura\"\n\t                      type=\"file\"\n                      ng2FileSelect\n                      [uploader]=\"uploader\"\n                      class=\"form-control\"\n\t\t\t\t\t  matTooltipPosition=\"above\"\n\t\t\t\t\t  matTooltip=\"Agrege copia de su documento.\"\n\t\t\t\t\t  matTooltipClass=\"custom-tooltip-blue\"\n                      (change)=\"onFileChanged('FAC')\"\n\t\t\t\t\t  required>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label for=\"filDpi\" class=\"col-lg-2 col-form-label\">DPI o Pasaporte</label>\n                  <div class=\"col-lg-10\">\n                    <input\n                      #filDpi\n                      id=\"filDpi\"\n                      type=\"file\"\n                      ng2FileSelect\n                      [uploader]=\"uploader\"\n                      class=\"form-control\"\n\t\t\t\t\t  matTooltipPosition=\"above\"\n\t\t\t\t\t  matTooltip=\"Agrege su copia de DPI o Pasaporte\"\n\t\t\t\t\t  matTooltipClass=\"custom-tooltip-blue\"\n                      (change)=\"onFileChanged('DPI')\"\n\t\t\t\t\t  required>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <p>Estos documentos deben ir completos, por ejemplo el DPI debe ser escaneado a ambos lados.</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\t\t-->\n        <div class=\"form-group row\">\n          <div class=\"col-lg-12 text-center\">\n            <button\n              class=\"btn btn-primary\"\n              type=\"submit\"\n\t\t\t  matTooltipPosition=\"after\"\n\t\t\t\t\t  matTooltip=\"Grabe su queja.\"\n\t\t\t\t\t  matTooltipClass=\"custom-tooltip-blue\"\n\t\t\t  [disabled]=\"quejaForm.invalid\"\n              >Guardar Queja</button>\n          </div>\n        </div>\n      </form>\n\t<div *ngIf=\"showSpinner\" class=\"alert alert-alert col-lg-12\" [@EnterLeave]=\"'flyIn'\">\n\t\tFavor espere se grabe su queja..\n\t</div>\n\t  \n  \n    </div>\n  </div>\n  \n  <div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\" *ngIf=\"success\">\n    <strong>Queja registrada!</strong> Su queja ha sido registrada exitosamente. {{vsecanio}}-{{vanio}}\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"onDismissClicked()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  \n  \n</div>\n    <!--img src=\"diaco-grd.jpg\" class=\"center\"/-->\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-4 text-center\">\n\t\t\t\t&nbsp;\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4 text-center\">\n\t\t\t\t<img class=\"footerimg\" />\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4 text-center\">\n\t\t\t\t&nbsp;\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/quejaini/quejaini.component.scss":
/*!**************************************************!*\
  !*** ./src/app/quejaini/quejaini.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* BASIC */\n.headerimg {\n  content: url('imagen-grd2.png');\n  width: 100%;\n  height: auto; }\n.footerimg {\n  content: url('diaco-grd.jpg');\n  width: 100%;\n  height: auto; }\nbody {\n  background-image: url('diacofade3.jpg'), url('imagen-grdfade2.jpg');\n  background-repeat: no-repeat, no-repeat;\n  background-attachment: fixed, fixed;\n  background-size: auto auto, auto auto;\n  background-position: bottom right, bottom left;\n  min-height: 100vh; }\nhtml {\n  background-color: #56baed; }\nbody {\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh; }\na.underlineHover {\n  color: #e68a00;\n  display: inline-block;\n  text-decoration: none;\n  font-weight: 400; }\nh2 {\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 40px 8px 10px 8px;\n  color: #cccccc; }\n/* STRUCTURE */\n.wrapper {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  min-height: 100%;\n  padding: 20px; }\n#formContent {\n  border-radius: 10px 10px 10px 10px;\n  background: #fff;\n  padding: 30px;\n  width: 90%;\n  max-width: 450px;\n  position: relative;\n  padding: 0px;\n  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);\n  text-align: center;\n  background-color: #00284d; }\n#formFooter {\n  background-color: #f6f6f7;\n  border-top: 1px solid #dce8f1;\n  padding: 25px;\n  text-align: center;\n  border-radius: 0 0 10px 10px; }\n/* TABS */\nh2.inactive {\n  color: #cccccc; }\nh2.active {\n  color: #0d0d0d;\n  border-bottom: 2px solid #5fbae9; }\n/* FORM TYPOGRAPHY*/\ninput[type=button], input[type=submit], input[type=reset] {\n  background-color: #1aa3ff;\n  border: none;\n  color: white;\n  padding: 15px 80px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 10px;\n  box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);\n  border-radius: 5px 5px 5px 5px;\n  margin: 5px 20px 40px 20px;\n  transition: all 0.3s ease-in-out; }\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover {\n  background-color: #e68a00; }\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active {\n  transform: scale(0.95); }\ninput[type=text], input[type=password] {\n  background-color: #f6f6f6;\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 110%;\n  border: 2px solid #f6f6f6;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px; }\ninput[type=text]:focus, input[type=password]:focus {\n  background-color: #fff;\n  border-bottom: 2px solid #5fbae9; }\ninput[type=text]:placeholder {\n  color: #cccccc; }\n/* ANIMATIONS */\n/* Simple CSS3 Fade-in-down Animation */\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0); }\n  100% {\n    opacity: 1;\n    transform: none; } }\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    transform: none; } }\n/* Simple CSS3 Fade-in Animation */\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n.fadeIn {\n  opacity: 0;\n  -webkit-animation: fadeIn ease-in 1;\n  animation: fadeIn ease-in 1;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s; }\n.fadeIn.first {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s; }\n.fadeIn.second {\n  -webkit-animation-delay: 0.6s;\n  animation-delay: 0.6s; }\n.fadeIn.third {\n  -webkit-animation-delay: 0.8s;\n  animation-delay: 0.8s; }\n.fadeIn.fourth {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s; }\n/* Simple CSS3 Fade-in Animation */\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #56baed;\n  content: \"\";\n  transition: width 0.2s; }\n.underlineHover:hover {\n  /*color: #1aa3ff;*/ }\n.underlineHover:hover:after {\n  width: 100%; }\n/* OTHERS */\n*:focus {\n  outline: none; }\n#icon {\n  width: 60%; }\nhtml, body {\n  height: 100%; }\n/*footer css*/\n#wrap {\n  min-height: 100%; }\n#main {\n  overflow: auto;\n  padding-bottom: 150px;\n  /* this needs to be bigger than footer height*/ }\n.page-footer {\n  background-color: #00284d;\n  color: white; }\n.footer-copyright {\n  color: white; }\n.footer-link {\n  color: white;\n  text-decoration: underline; }\n.footer-link:hover {\n  color: #e68a00;\n  text-decoration: underline; }\n.footer-margin {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  /* Set the fixed height of the footer here */\n  height: 100px;\n  /*line-height: 100px;*/\n  /* Vertically center the text there */ }\n.center {\n  margin-left: auto;\n  margin-right: auto;\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlamFpbmkvQzpcXHd3d1xcQVBQX0RJQUNPXFxkZXNhcnJvbGxvXFxjYXJsb3Mgc2F6XFxmcm9udEVuZFxcZGlzdDUvc3JjXFxhcHBcXHF1ZWphaW5pXFxxdWVqYWluaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxVQUFBO0FBRUE7RUFDSywrQkFBa0M7RUFDckMsV0FBVztFQUNYLFlBQVksRUFBQTtBQUVkO0VBQ0ssNkJBQWdDO0VBQ25DLFdBQVc7RUFDWCxZQUFZLEVBQUE7QUFJZDtFQUNDLG1FQUFtRTtFQUNuRSx1Q0FBdUM7RUFDdkMsbUNBQW1DO0VBQ25DLHFDQUFxQztFQUNyQyw4Q0FBOEM7RUFDOUMsaUJBQWdCLEVBQUE7QUFJakI7RUFDRSx5QkFBeUIsRUFBQTtBQUczQjtFQUNFLGtDQUFrQztFQUNsQyxhQUFhLEVBQUE7QUFHZjtFQUNFLGNBQWM7RUFDZCxxQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHFCQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsY0FBYyxFQUFBO0FBS2hCLGNBQUE7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWEsRUFBQTtBQUdmO0VBRUUsa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUVaLDRDQUF5QztFQUN6QyxrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUE7QUFHM0I7RUFDRSx5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixrQkFBa0I7RUFFbEIsNEJBQTRCLEVBQUE7QUFLOUIsU0FBQTtBQUVBO0VBQ0UsY0FBYyxFQUFBO0FBR2hCO0VBQ0UsY0FBYztFQUNkLGdDQUFnQyxFQUFBO0FBS2xDLG1CQUFBO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGVBQWU7RUFFZixpREFBOEM7RUFFOUMsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUsxQixnQ0FBZ0MsRUFBQTtBQUdsQztFQUNFLHlCQUF5QixFQUFBO0FBRzNCO0VBS0Usc0JBQXNCLEVBQUE7QUFHeEI7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFdBQVc7RUFDWCxXQUFXO0VBQ1gseUJBQXlCO0VBS3pCLGdDQUFnQztFQUVoQyw4QkFBOEIsRUFBQTtBQUdoQztFQUNFLHNCQUFzQjtFQUN0QixnQ0FBZ0MsRUFBQTtBQUdsQztFQUNFLGNBQWMsRUFBQTtBQUtoQixlQUFBO0FBRUEsdUNBQUE7QUFDQTtFQUNFLGtDQUFrQztFQUNsQywwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixpQ0FBaUM7RUFDakMseUJBQXlCLEVBQUE7QUFHM0I7RUFDRTtJQUNFLFVBQVU7SUFFVixtQ0FBbUMsRUFBQTtFQUVyQztJQUNFLFVBQVU7SUFFVixlQUFlLEVBQUEsRUFBQTtBQUluQjtFQUNFO0lBQ0UsVUFBVTtJQUVWLG1DQUFtQyxFQUFBO0VBRXJDO0lBQ0UsVUFBVTtJQUVWLGVBQWUsRUFBQSxFQUFBO0FBSW5CLGtDQUFBO0FBQ0E7RUFBNEI7SUFBTyxVQUFTLEVBQUE7RUFBSTtJQUFLLFVBQVMsRUFBQSxFQUFBO0FBRTlEO0VBQW9CO0lBQU8sVUFBUyxFQUFBO0VBQUk7SUFBSyxVQUFTLEVBQUEsRUFBQTtBQUV0RDtFQUNFLFVBQVM7RUFDVCxtQ0FBa0M7RUFFbEMsMkJBQTBCO0VBRTFCLHFDQUFvQztFQUVwQyw2QkFBNEI7RUFFNUIsOEJBQTZCO0VBRTdCLHNCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsMkJBQTJCO0VBRTNCLG1CQUFtQixFQUFBO0FBR3JCLGtDQUFBO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsT0FBTztFQUNQLGFBQWE7RUFDYixRQUFRO0VBQ1IsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsc0JBQXNCLEVBQUE7QUFHeEI7RUFDRSxrQkFBQSxFQUFtQjtBQUdyQjtFQUNFLFdBQVcsRUFBQTtBQUtiLFdBQUE7QUFFQTtFQUNJLGFBQWEsRUFBQTtBQUdqQjtFQUNFLFVBQVMsRUFBQTtBQUdYO0VBQ0UsWUFBWSxFQUFBO0FBR2QsYUFBQTtBQUVBO0VBQ0UsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSxjQUFhO0VBQ2IscUJBQW9CO0VBQUUsOENBQUEsRUFBK0M7QUFHdkU7RUFDRSx5QkFBeUI7RUFDekIsWUFBVyxFQUFBO0FBR2I7RUFDQyxZQUFXLEVBQUE7QUFHWjtFQUNDLFlBQVc7RUFDWCwwQkFBMEIsRUFBQTtBQUczQjtFQUNDLGNBQWE7RUFDYiwwQkFBMEIsRUFBQTtBQUczQjtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsV0FBVztFQUNYLDRDQUFBO0VBQ0EsYUFBYTtFQUNiLHNCQUFBO0VBQXdCLHFDQUFBLEVBQXNDO0FBR2hFO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9xdWVqYWluaS9xdWVqYWluaS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiBCQVNJQyAqL1xyXG5cclxuLmhlYWRlcmltZ3tcclxuICAgICBjb250ZW50OnVybChcImNzcy9pbWFnZW4tZ3JkMi5wbmdcIik7XHJcblx0IHdpZHRoOiAxMDAlO1xyXG5cdCBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLmZvb3RlcmltZ3tcclxuICAgICBjb250ZW50OnVybChcImNzcy9kaWFjby1ncmQuanBnXCIpO1xyXG5cdCB3aWR0aDogMTAwJTtcclxuXHQgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbiBcclxuIFxyXG5ib2R5IHtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9kaWFjb2ZhZGUzLmpwZyksIHVybCguL2ltYWdlbi1ncmRmYWRlMi5qcGcpIDtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0LCBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZCwgZml4ZWQ7XHJcblx0YmFja2dyb3VuZC1zaXplOiBhdXRvIGF1dG8sIGF1dG8gYXV0bztcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gcmlnaHQsIGJvdHRvbSBsZWZ0O1xyXG5cdG1pbi1oZWlnaHQ6MTAwdmg7IFxyXG59XHJcblxyXG4gXHJcbmh0bWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5hLnVuZGVybGluZUhvdmVyIHtcclxuICBjb2xvcjogI2U2OGEwMDtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogNDBweCA4cHggMTBweCA4cHg7IFxyXG4gIGNvbG9yOiAjY2NjY2NjO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIFNUUlVDVFVSRSAqL1xyXG5cclxuLndyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbiNmb3JtQ29udGVudCB7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWF4LXdpZHRoOiA0NTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDI4NGQ7XHJcbn1cclxuXHJcbiNmb3JtRm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY3O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGNlOGYxO1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi8qIFRBQlMgKi9cclxuXHJcbmgyLmluYWN0aXZlIHtcclxuICBjb2xvcjogI2NjY2NjYztcclxufVxyXG5cclxuaDIuYWN0aXZlIHtcclxuICBjb2xvcjogIzBkMGQwZDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcclxufVxyXG5cclxuXHJcblxyXG4vKiBGT1JNIFRZUE9HUkFQSFkqL1xyXG5cclxuaW5wdXRbdHlwZT1idXR0b25dLCBpbnB1dFt0eXBlPXN1Ym1pdF0sIGlucHV0W3R5cGU9cmVzZXRdICB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhYTNmZjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE1cHggODBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsMTg2LDIzMywwLjQpO1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwxODYsMjMzLDAuNCk7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gIG1hcmdpbjogNXB4IDIwcHggNDBweCAyMHB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciwgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyLCBpbnB1dFt0eXBlPXJlc2V0XTpob3ZlciAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNjhhMDA7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9YnV0dG9uXTphY3RpdmUsIGlucHV0W3R5cGU9c3VibWl0XTphY3RpdmUsIGlucHV0W3R5cGU9cmVzZXRdOmFjdGl2ZSAge1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW46IDVweDtcclxuICB3aWR0aDogMTEwJTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZjZmNmY2O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XTpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICNjY2NjY2M7XHJcbn1cclxuXHJcblxyXG5cclxuLyogQU5JTUFUSU9OUyAqL1xyXG5cclxuLyogU2ltcGxlIENTUzMgRmFkZS1pbi1kb3duIEFuaW1hdGlvbiAqL1xyXG4uZmFkZUluRG93biB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcclxuICBhbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxyXG5cclxuLmZhZGVJbiB7XHJcbiAgb3BhY2l0eTowO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XHJcbiAgLW1vei1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcclxuICBhbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcclxuXHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xyXG4gIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xyXG5cclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcclxuICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcclxuICBhbmltYXRpb24tZHVyYXRpb246MXM7XHJcbn1cclxuXHJcbi5mYWRlSW4uZmlyc3Qge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC40cztcclxufVxyXG5cclxuLmZhZGVJbi5zZWNvbmQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC42cztcclxufVxyXG5cclxuLmZhZGVJbi50aGlyZCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG59XHJcblxyXG4uZmFkZUluLmZvdXJ0aCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAxcztcclxuICBhbmltYXRpb24tZGVsYXk6IDFzO1xyXG59XHJcblxyXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xyXG4udW5kZXJsaW5lSG92ZXI6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAtMTBweDtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4ycztcclxufVxyXG5cclxuLnVuZGVybGluZUhvdmVyOmhvdmVyIHtcclxuICAvKmNvbG9yOiAjMWFhM2ZmOyovXHJcbn1cclxuXHJcbi51bmRlcmxpbmVIb3Zlcjpob3ZlcjphZnRlcntcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcblxyXG4vKiBPVEhFUlMgKi9cclxuXHJcbio6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufSBcclxuXHJcbiNpY29uIHtcclxuICB3aWR0aDo2MCU7XHJcbn1cclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLypmb290ZXIgY3NzKi9cclxuXHJcbiN3cmFwIHtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jbWFpbiB7XHJcbiAgb3ZlcmZsb3c6YXV0bztcclxuICBwYWRkaW5nLWJvdHRvbToxNTBweDsgLyogdGhpcyBuZWVkcyB0byBiZSBiaWdnZXIgdGhhbiBmb290ZXIgaGVpZ2h0Ki9cclxufVxyXG5cclxuLnBhZ2UtZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyODRkO1xyXG4gIGNvbG9yOndoaXRlO1xyXG59IFxyXG5cclxuLmZvb3Rlci1jb3B5cmlnaHR7XHJcblx0Y29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5mb290ZXItbGlua3tcclxuXHRjb2xvcjp3aGl0ZTtcclxuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmZvb3Rlci1saW5rOmhvdmVye1xyXG5cdGNvbG9yOiNlNjhhMDA7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5mb290ZXItbWFyZ2luIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8qIFNldCB0aGUgZml4ZWQgaGVpZ2h0IG9mIHRoZSBmb290ZXIgaGVyZSAqL1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgLypsaW5lLWhlaWdodDogMTAwcHg7Ki8gLyogVmVydGljYWxseSBjZW50ZXIgdGhlIHRleHQgdGhlcmUgKi9cclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/quejaini/quejaini.component.ts":
/*!************************************************!*\
  !*** ./src/app/quejaini/quejaini.component.ts ***!
  \************************************************/
/*! exports provided: QuejainiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuejainiComponent", function() { return QuejainiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_quejasini_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/quejasini.service */ "./src/app/shared/quejasini.service.ts");
/* harmony import */ var _shared_quejaini_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/quejaini.model */ "./src/app/shared/quejaini.model.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var _conc_virt_const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../conc-virt-const */ "./src/app/conc-virt-const.ts");
/* harmony import */ var _shared_consumidores_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/consumidores.service */ "./src/app/shared/consumidores.service.ts");
/* harmony import */ var _shared_proveedores_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/proveedores.service */ "./src/app/shared/proveedores.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _buscaprov_buscaprov_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../buscaprov/buscaprov.component */ "./src/app/buscaprov/buscaprov.component.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_13__);

//import { Component, OnInit } from '@angular/core';

//import { ormGroup,  FormControl } from '@angular/forms';










//import { MyCustomDialogService } from '../my-custom-dialog/my-custom-dialog.service';



var QuejainiComponent = /** @class */ (function () {
    //constructor() { }
    function QuejainiComponent(router, dialog, consumidoresService, proveedoresService, quejasService
    //,private customDialog: MyCustomDialogService
    //,private fb: FormBuilder
    ) {
        //console.info(this._route.snapshot.paramMap.get('id'));
        this.router = router;
        this.dialog = dialog;
        this.consumidoresService = consumidoresService;
        this.proveedoresService = proveedoresService;
        this.quejasService = quejasService;
        this.nproveedor = "";
        this.vanio = 0;
        this.vsecanio = 0;
        this.vsecuencia2 = "";
        this.vidqueja = 0;
        this.vidimagen = 2;
        this.vdpi = -1;
        this.vfac = -1;
        this.vact = -1;
        this.existingModeConsumidor = false;
        this.existingModeProveedor = false;
        this.vsecuencia = "";
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploader"]({
            url: _conc_virt_const__WEBPACK_IMPORTED_MODULE_8__["BASE_URL_FILE"],
            itemAlias: 'document'
        });
        this.success = false;
        this.successFile = true;
        this.showSpinner = false;
        this.operation = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    QuejainiComponent.prototype.ngOnDestroy = function () {
        ////console.log("finaliza");
    };
    QuejainiComponent.prototype.ngOnInit = function () {
        var _this = this;
        // listener cuando finaliza la operacion de creacion
        this.quejaOperationSubscription = this.quejasService.operation.subscribe(function (queja) {
            // limpia sesion
            _this.quejaForm.reset();
            _this.success = true;
            _this.successFile = true;
            _this.nproveedor = "";
        });
        /*
        this.customDialogForm = fb.group({
            dialogTitle: ['Title'],
            dialogMsg: [''],
            dialogType: ['alert'],
            okBtnColor: [''],
            okBtnLabel: [''],
            cancelBtnColor: [''],
            cancelBtnLabel: ['']
          });
          */
        //this._route.params.subscribe(
        //  (params: Params) => {
        //    this.vid = params.id;
        //  }
        //);
        this.initQuejaForm();
        //this.initConsumidorForm(null);
        //this.vid = this._route.snapshot.paramMap.get('id')
        //console.info(this.vid);
    };
    QuejainiComponent.prototype.initQuejaForm = function () {
        this.quejaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'nombre': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'apellido': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'dpiPasaporte': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'telefono': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'correo': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'detalleQueja': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'solicitaQue': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'nitProveedor': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'ubicacion': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.nproveedor = "";
        this.dpiIndex = -1;
        this.facturaIndex = -1;
        ////console.log("inicializa");
    };
    QuejainiComponent.prototype.onFileChanged = function (type) {
        console.info(type);
        this.vact = this.uploader.queue.length - 1;
        console.info(this.factura);
        if (this.uploader.queue.length > 0) {
            if (type == 'FAC') {
                if (this.factura && this.facturaIndex > -1) {
                    var facturaItem = this.uploader.queue[this.facturaIndex];
                    this.uploader.removeFromQueue(facturaItem);
                }
                this.factura = this.uploader.queue[this.uploader.queue.length - 1];
                this.facturaIndex = this.uploader.queue.length - 1;
                if (this.dpiIndex == this.facturaIndex) {
                    this.dpiIndex = this.dpiIndex - 1;
                }
            }
            else if (type == 'DPI') {
                if (this.dpi && this.dpiIndex > -1) {
                    var dpiItem = this.uploader.queue[this.dpiIndex];
                    this.uploader.removeFromQueue(dpiItem);
                }
                this.dpi = this.uploader.queue[this.uploader.queue.length - 1];
                this.dpiIndex = this.uploader.queue.length - 1;
                if (this.dpiIndex == this.facturaIndex) {
                    this.facturaIndex = this.facturaIndex - 1;
                }
            }
            if (this.uploader.queue.length == 0) {
                this.dpiIndex = -1;
                this.facturaIndex = -1;
            }
            //console.info(this.factura);
            //console.info(this.dpi);
            //console.info(this.uploader.queue.length);
            //console.info(this.facturaIndex);
            //console.info(this.dpiIndex);
            if (this.uploader.queue.length == 2) {
                this.successFile = false;
            }
            else {
                this.successFile = true;
            }
            //console.info(this.uploader.queue.length);	
            //console.info(this.uploader);
        }
    };
    /*
      onRemoveClicked(index: number) {
        let removeItem = this.uploader.queue[index];
        this.uploader.removeFromQueue(removeItem);
        if (index == this.facturaIndex) {
          this.facturaIndex = null;
          this.factura = null;
        } else if (index == this.dpiIndex) {
          this.dpiIndex = null;
          this.dpi = null;
        }
      }*/
    QuejainiComponent.prototype.onSubmit = function () {
        var _this = this;
        this.showSpinner = true;
        var queja = new _shared_quejaini_model__WEBPACK_IMPORTED_MODULE_6__["Quejaini"]();
        queja.nombre = this.quejaForm.value.nombre;
        queja.apellido = this.quejaForm.value.apellido;
        queja.dpiPasaporte = this.quejaForm.value.dpiPasaporte;
        queja.telefono = this.quejaForm.value.telefono;
        queja.correo = this.quejaForm.value.correo;
        queja.detalleQueja = this.quejaForm.value.detalleQueja;
        queja.solicitaQue = this.quejaForm.value.solicitaQue;
        queja.nitProveedor = this.quejaForm.value.nitProveedor;
        queja.ubicacion = this.quejaForm.value.ubicacion;
        queja.anio = 0;
        queja.secuencia = 0;
        queja.idFuente = 'Call Center';
        if (this.existingModeConsumidor) {
            queja.idConsumidor = this.existingConsumidor.idConsumidor;
        }
        else {
            queja.idConsumidor = 0;
        }
        if (this.existingModeProveedor) {
            queja.idProveedor = this.existingProveedor.idProveedor;
        }
        else {
            queja.idProveedor = 0;
        }
        //queja = this.quejasService.createQueja(queja, this.uploader).susbribe;
        this.quejasService.saveData(queja, '/noupload').subscribe(function (retvalue) {
            if (retvalue) {
                var tempstr = retvalue['value'];
                if (tempstr != null && tempstr != '') {
                    //this.registrodata=JSON.parse('['+retvalue["value"].slice(0, -1) +']');
                    _this.vanio = tempstr.anio;
                    _this.vsecanio = tempstr.secuencia;
                    _this.vidqueja = tempstr.idQueja;
                    if (_this.uploader.queue.length > 0) {
                        //console.log(this.vidqueja);
                        _this.uploader.setOptions({
                            url: _conc_virt_const__WEBPACK_IMPORTED_MODULE_8__["BASE_URL_REST_FILE"] + 'quejasini/upload?id_queja=' + _this.vidqueja + "&id_categoria_imagen=" + _this.vidimagen,
                            itemAlias: 'file'
                        });
                        _this.uploader.onCompleteAll = function () {
                            // finalizo la carga de todos los archivos
                            _this.operation.next(retvalue.value);
                        };
                        _this.uploader.onCompleteItem = function (item, uploadResponse, status, headers) {
                            // finalizo la carga de un archivo
                            _this.vidimagen = _this.vidimagen + 1;
                        };
                        _this.uploader.uploadAll();
                    }
                    else {
                        _this.operation.next(retvalue.value);
                    }
                    _this.success = true;
                }
                else {
                    ////console.log('no llego');
                }
            }
            else {
                ////console.log('Rest service response ERROR.');
            }
        });
        this.onDismissClicked();
        this.showSpinner = false;
        //this.findSecuenciaId();
        //////console.info("onsSumiT");
        //this.vanio = queja.anio;
        //  this.vsecanio = queja.noQueja;
        ////console.info('-------------------');
        ////console.info(queja);
        ////console.info('-------------------');
    };
    QuejainiComponent.prototype.onDismissClicked = function () {
        this.success = false;
        this.initQuejaForm();
        ////console.info("onDismm");
    };
    QuejainiComponent.prototype.initConsumidor = function (consumidor, tipo) {
        if (tipo == 0) {
            this.quejaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                'nombre': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](consumidor ? consumidor.nombre1 +
                    (consumidor ? ' ' + (consumidor.nombre2 == null ? '' : consumidor.nombre2) +
                        (consumidor != null ? ' ' + (consumidor.nombre3 == null ? '' : consumidor.nombre3) : '') : '') : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'apellido': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](consumidor ? consumidor.apellido1 + (consumidor ? ' ' + (consumidor.apellido2 == null ? '' : consumidor.apellido2) : '') : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                //'apellidoCasada': new FormControl(consumidor ? consumidor.apellidoCasada : ''),
                'telefono': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](consumidor ? consumidor.telefono : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                //'telefonoDomicilio': new FormControl(consumidor ? consumidor.domicilio : ''),
                'correo': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](consumidor ? consumidor.correoElectronico1 : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email),
                'dpiPasaporte': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](consumidor ? consumidor.documentoIdentificacion : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'detalleQueja': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.detalleQueja, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'solicitaQue': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.solicitaQue, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'nitProveedor': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.nitProveedor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'ubicacion': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.ubicacion, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            });
        }
        else {
            this.quejaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                'nombre': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](consumidor ? consumidor.nombre1 +
                    (consumidor ? ' ' + (consumidor.nombre2 == null ? '' : consumidor.nombre2) +
                        (consumidor != null ? ' ' + (consumidor.nombre3 == null ? '' : consumidor.nombre3) : '') : '') : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'apellido': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](consumidor ? consumidor.apellido1 + (consumidor ? ' ' + (consumidor.apellido2 == null ? '' : consumidor.apellido2) : '') : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                //'apellidoCasada': new FormControl(consumidor ? consumidor.apellidoCasada : ''),
                'telefono': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](consumidor ? consumidor.telefono : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                //'telefonoDomicilio': new FormControl(consumidor ? consumidor.domicilio : ''),
                'correo': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](consumidor ? consumidor.correoElectronico1 : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email),
                'dpiPasaporte': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.dpiPasaporte, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'detalleQueja': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.detalleQueja, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'solicitaQue': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.solicitaQue, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'nitProveedor': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.nitProveedor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                'ubicacion': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.ubicacion, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            });
        }
        this.findBySecuencia();
        //////console.log("inicializa consumidor");
    };
    QuejainiComponent.prototype.initProveedor = function (nit) {
        this.quejaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'nombre': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.nombre, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'apellido': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.apellido, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'telefono': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.telefono, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'correo': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.correo, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email),
            'dpiPasaporte': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.dpiPasaporte, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'detalleQueja': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.detalleQueja, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'solicitaQue': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.solicitaQue, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'nitProveedor': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](nit, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            /*
            'primerNombre': new FormControl(proveedor ? proveedor.primerNombre : ''),
            'segundoNombre': new FormControl(proveedor ? proveedor.segundoNombre : ''),
            'tercerNombre': new FormControl(proveedor ? proveedor.tercerNombre : ''),
            'primerApellido': new FormControl(proveedor ? proveedor.primerApellido : ''),
            'segundoApellido': new FormControl(proveedor ? proveedor.segundoApellido : ''),
            'apellidoCasada': new FormControl(proveedor ? proveedor.apellidoCasada : ''),
            'nombreEmpresa': new FormControl(proveedor ? proveedor.nombreEmpresa : ''),
            'razonSocial': new FormControl(proveedor ? proveedor.razonSocial : ''),
            */
            'ubicacion': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.quejaForm.value.ubicacion, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        //////console.log("inicializa consumidor");
    };
    QuejainiComponent.prototype.onDocumentoIdentificacionChanged = function () {
        var _this = this;
        //////console.log(this.quejaForm.value.dpiPasaporte);
        this.consumidoresService.fetchData(this.quejaForm.value.dpiPasaporte).subscribe(function (response) {
            if (response.value) {
                // inicializar formulario con valores predeterminados
                _this.existingModeConsumidor = true;
                _this.existingConsumidor = response.value;
                _this.initConsumidor(response.value, 0);
                //queja.dpiPasaporte = this.quejaForm.value.dpiPasaporte;
            }
            else {
                _this.existingModeConsumidor = false;
                _this.existingConsumidor = null;
                _this.initConsumidor(null, 1);
            }
        });
        //////console.log("ingreso al onDocumentoIdentificacionChanged");
    };
    QuejainiComponent.prototype.onProveedorChanged = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogConfig"]();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        var dialogRef = this.dialog.open(_buscaprov_buscaprov_component__WEBPACK_IMPORTED_MODULE_12__["BuscaprovComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (data) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_13__["isUndefined"])(data)) {
                console.info(data);
                // inicializar formulario con valores predeterminados
                _this.existingModeProveedor = true;
                _this.existingProveedor = data;
                _this.initProveedor(data.nitProveedor);
                _this.nproveedor = data.nombre;
            }
            else {
                _this.existingModeProveedor = false;
                _this.existingProveedor = null;
                _this.nproveedor = "";
            }
        }, function (error) { return console.info('Undefined data. No will insert 2'); }); //this.logService.print(error, LogService.ERROR_MSG));
        /*
        //////console.log(this.quejaForm.value.nitProveedor);
      this.proveedoresService.fetchData(this.quejaForm.value.nitProveedor).subscribe(
        (response) => {
          if (response.value) {
            // inicializar formulario con valores predeterminados
            this.existingModeProveedor = true;
            this.existingProveedor = response.value;
            this.initProveedor(response.value);
            this.nproveedor = response.value.nombre;
          } else {
            this.existingModeProveedor = false;
            this.existingProveedor = null;
            this.nproveedor = "";
          }
        }
      );
      //////console.log("ingreso al onProveedorChanged");
      */
    };
    QuejainiComponent.prototype.initNoQueja = function (queja) {
        this.vanio = (queja ? queja.anio : 0);
        this.vsecanio = (queja ? queja.noQueja : 0);
        ////console.info('initNoQueja|');
        ////console.info(this.vanio);
        ////console.info(this.vsecanio);
    };
    QuejainiComponent.prototype.findSecuenciaId = function () {
        var _this = this;
        if (this.vsecuencia = "") {
        }
        else {
            this.quejasService.fetchDataSecId(this.vsecuencia).subscribe(function (response) {
                if (response.value) {
                    // inicializar formulario con valores predeterminados
                    ////console.info("findSecuenc");
                    _this.initNoQueja(response.value);
                }
            });
        }
    };
    QuejainiComponent.prototype.findBySecuencia = function () {
        var _this = this;
        this.quejasService.fetchDataSecuencia().subscribe(function (response) {
            if (response.value) {
                // inicializar formulario con valores predeterminados
                //
                _this.vsecuencia2 = response.value;
                _this.vsecuencia = response.value;
            }
        });
    };
    QuejainiComponent.prototype.openCustomDialog = function () {
        console.log("this.customDialogForm.value");
        //this.customDialog.openAlertDialog(this.customDialogForm.value);
        this.success = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('filDpi'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], QuejainiComponent.prototype, "filDpi", void 0);
    QuejainiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quejaini',
            template: __webpack_require__(/*! ./quejaini.component.html */ "./src/app/quejaini/quejaini.component.html"),
            styles: [__webpack_require__(/*! ./quejaini.component.scss */ "./src/app/quejaini/quejaini.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"],
            _shared_consumidores_service__WEBPACK_IMPORTED_MODULE_9__["ConsumidoresService"],
            _shared_proveedores_service__WEBPACK_IMPORTED_MODULE_10__["ProveedoresService"],
            _shared_quejasini_service__WEBPACK_IMPORTED_MODULE_5__["QuejasIniService"]
            //,private customDialog: MyCustomDialogService
            //,private fb: FormBuilder
        ])
    ], QuejainiComponent);
    return QuejainiComponent;
}());



/***/ }),

/***/ "./src/app/shared/consumidores.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/consumidores.service.ts ***!
  \************************************************/
/*! exports provided: ConsumidoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumidoresService", function() { return ConsumidoresService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _conc_virt_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../conc-virt-const */ "./src/app/conc-virt-const.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ConsumidoresService = /** @class */ (function () {
    function ConsumidoresService(http) {
        this.http = http;
        this.operation = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ConsumidoresService.prototype.createConsumidor = function (consumidor) {
        var _this = this;
        this.saveData(consumidor).subscribe(function (response) {
            _this.operation.next(response.value);
        });
    };
    ConsumidoresService.prototype.fetchData = function (docid) {
        return this.http.get(_conc_virt_const__WEBPACK_IMPORTED_MODULE_3__["BASE_URL_REST_FILE"] + 'consumidores?docid=' + docid);
    };
    ConsumidoresService.prototype.saveData = function (consumidor) {
        return this.http.post(_conc_virt_const__WEBPACK_IMPORTED_MODULE_3__["BASE_URL_REST_FILE"] + 'consumidores', consumidor);
    };
    ConsumidoresService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ConsumidoresService);
    return ConsumidoresService;
}());



/***/ }),

/***/ "./src/app/shared/proveedor.model.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/proveedor.model.ts ***!
  \*******************************************/
/*! exports provided: Proveedor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Proveedor", function() { return Proveedor; });
var Proveedor = /** @class */ (function () {
    function Proveedor() {
    }
    return Proveedor;
}());



/***/ }),

/***/ "./src/app/shared/proveedores.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/proveedores.service.ts ***!
  \***********************************************/
/*! exports provided: ProveedoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProveedoresService", function() { return ProveedoresService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _conc_virt_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../conc-virt-const */ "./src/app/conc-virt-const.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ProveedoresService = /** @class */ (function () {
    function ProveedoresService(http) {
        this.http = http;
        this.operation = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ProveedoresService.prototype.createProveedor = function (proveedor) {
        var _this = this;
        this.saveData(proveedor).subscribe(function (response) {
            _this.operation.next(response.value);
        });
    };
    ProveedoresService.prototype.fetchData = function (nit) {
        return this.http.get(_conc_virt_const__WEBPACK_IMPORTED_MODULE_3__["BASE_URL_REST_FILE"] + 'proveedores?nit=' + nit);
    };
    ProveedoresService.prototype.fetchDataProv = function (nit, nombre) {
        return this.http.get(_conc_virt_const__WEBPACK_IMPORTED_MODULE_3__["BASE_URL_REST_FILE"] + 'proveedores/busca?nit=' + nit + "&nombre=" + nombre);
    };
    ProveedoresService.prototype.saveData = function (proveedor) {
        return this.http.post(_conc_virt_const__WEBPACK_IMPORTED_MODULE_3__["BASE_URL_REST_FILE"] + 'proveedores', proveedor);
    };
    ProveedoresService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProveedoresService);
    return ProveedoresService;
}());



/***/ }),

/***/ "./src/app/shared/quejaini.model.ts":
/*!******************************************!*\
  !*** ./src/app/shared/quejaini.model.ts ***!
  \******************************************/
/*! exports provided: Quejaini */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quejaini", function() { return Quejaini; });
var Quejaini = /** @class */ (function () {
    function Quejaini() {
    }
    return Quejaini;
}());



/***/ }),

/***/ "./src/app/shared/quejasini.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/quejasini.service.ts ***!
  \*********************************************/
/*! exports provided: QuejasIniService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuejasIniService", function() { return QuejasIniService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _conc_virt_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../conc-virt-const */ "./src/app/conc-virt-const.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var QuejasIniService = /** @class */ (function () {
    function QuejasIniService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'content-type': 'application/json; charset=iso-8859-1'
            })
        };
        this.operation = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    QuejasIniService.prototype.createQueja = function (queja, uploader) {
        return this.saveData(queja, '').subscribe(function (retvalue) {
            //console.info('-------------------');
            //console.info(retvalue);
            //console.info('-------------------');
            if (retvalue) {
                var tempstr = retvalue['value'];
                if (tempstr != null && tempstr != '') {
                    //console.log('llego');
                }
                else {
                    //console.log('no llego');
                }
            }
            else {
                //console.log('Rest service response ERROR.');
            }
            if (uploader.queue.length > 0) {
                uploader.setOptions({
                    url: _conc_virt_const__WEBPACK_IMPORTED_MODULE_2__["BASE_URL_REST_FILE"] + 'quejasini/upload',
                    itemAlias: 'file'
                });
                uploader.onCompleteAll = function () {
                    // finalizo la carga de todos los archivos
                    // this.operation.next(response.value);
                };
                uploader.onCompleteItem = function (item, uploadResponse, status, headers) {
                    // finalizo la carga de un archivo
                };
                uploader.uploadAll();
            }
            else {
                //this.operation.next(response.value);
            }
        });
        //this.fetchDataSecId(queja.idFlujo);
    };
    QuejasIniService.prototype.saveData = function (queja, id) {
        return this.http.post(_conc_virt_const__WEBPACK_IMPORTED_MODULE_2__["BASE_URL_REST_FILE"] + 'quejasini' + id, queja, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (item) { return console.log('grabada la queja'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('error en grabar ')));
    };
    QuejasIniService.prototype.fetchDataSecId = function (id) {
        return this.http.get(_conc_virt_const__WEBPACK_IMPORTED_MODULE_2__["BASE_URL_REST_FILE"] + 'quejasini/secuencia/' + id);
    };
    QuejasIniService.prototype.fetchDataSecuencia = function () {
        return this.http.get(_conc_virt_const__WEBPACK_IMPORTED_MODULE_2__["BASE_URL_REST_FILE"] + 'quejasini/secuencia');
    };
    QuejasIniService.prototype.fetchDataByToken = function (id, dato) {
        return this.http.get(_conc_virt_const__WEBPACK_IMPORTED_MODULE_2__["BASE_URL_REST_FILE"] + 'quejasini/quejacon/' + dato + '/' + id);
    };
    QuejasIniService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            //console.error(error); // log to //console instead
            // TODO: better job of transforming error for user consumption
            //console.log('${operation} failed: ${error.message}');
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    QuejasIniService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], QuejasIniService);
    return QuejasIniService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    if (window) {
        window.console.log = function () { };
    }
}
if (window) {
    window.console.log = function () { };
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\www\APP_DIACO\desarrollo\carlos saz\frontEnd\dist5\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map