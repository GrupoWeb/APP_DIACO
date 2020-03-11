/*
export const BASE_URL_REST='http://gestorquejas.diaco.gob.gt/file-web-quejaini/rs/';
export const BASE_URL_REST_FILE='http://gestorquejas.diaco.gob.gt/file-web-quejaini/rs/';
export const BASE_URL_FILE='http://gestorquejas.diaco.gob.gt/file-web-quejaini/rs/';
*/

export const BASE_SERVER   = 'http://desagestorquejas.diaco.gob.gt/';
export const BASE_URL_REST = BASE_SERVER + 'web-quejaini/rs/';
export const BASE_URL_FILE = BASE_SERVER + 'web-quejaini/rs/';
export const BASE_URL_REST_FILE = BASE_URL_FILE;

export const BASE_DIST_6 = BASE_SERVER + 'quejas_ini_6/#/pquejaini/presencial/eyjhbgcioijiuzi1nij9.eyjzdwiioijjy2fybg9ziiwicm9szxmioijob3jtywwstm9ybwfsle5vcm1hbcxob3jtywwilcjuyw1lijoiy2nhcmxvcyisimv4cci6mtu3ndgxmji4mswidxnlcm5hbwuioijjy2fybg9zin0.dcvx3gvghft8y9m7l0rbsqlnuxd2s9umqzhioiqgep0';

/*
export const BASE_URL_REST='http://localhost:8080/BackEnd/rs/';
export const BASE_URL_REST_FILE='http://localhost:8080/BackEnd/rs/';
export const BASE_URL_FILE='http://localhost:8080/BackEnd/rs/';
*/



export class BaseCmbClass {
  id: number;
  nombre: string;
}

export class CmbResolucion {
  id_catalogo: number;
  descripcion_catalogo: string;
}

export class FrmMainConcVirt {
  departamento: number;
  municipio: number;
  estado: number;
  id_proveedor: number;
  SelectedFDesde: Date;
  SelectedFHasta: Date;
}

export const LSTFILTRO_ESTADOCONCVIRT: BaseCmbClass[] = [
	{ id: 401, nombre: 'Activo' },
	{ id: 402, nombre: 'Resuelto Localmente' },
	{ id: 999, nombre: 'Pendiente validar por DIACO' },
	{ id: 107, nombre: 'Finalizado por DIACO' },
	{ id: 108, nombre: 'Rechazado por DIACO' }
];

export const LSTFILTRO_RESOLUCION: BaseCmbClass[] = [
	{ id: 1, nombre: 'No Aplica' },
	{ id: 2, nombre: 'Resuelto' },
	{ id: 3, nombre: 'Sin Resolución' }
];

export class FrmBitacora {
	id: number;
	correlativo: number;
	No: number;
	Fecha: Date;
	Bitacora: string;
	Consumidor: string;
}

export class FrmQueja {
  id_queja: number;
  fecha_queja: Date;
  id_estado_queja: number;
  motivo: string;
  detalle_queja: string;
  solicita_que: string;
  nombre_consumidor: string;
  tipotelefono:FrmDetalle_Telefono[];
  tipoemail:FrmDetalle_Email[];
}

export class FrmDetalle_Queja {
  id_queja: number;
  motivo: string;
  detalle_queja: string;
  fecha_queja: Date;
  solicita_que: string;
  id_consumidor: string;
  id_proveedor: string;
  nombre_consumidor: string;
  tipotelefono:FrmDetalle_Telefono[];
  tipoemail:FrmDetalle_Email[];
}

export class FrmDetalle_Telefono {
  id_telefono: number;
  telefono: string;
  tipo_telefono: number;
}

export class FrmDetalle_Email {
  id_email: number;
  correo_electronico: string;
}

export class List_Images {
  id_imagen_queja: number;
  id_tipo_imagen: number;
  imagen: string;
  id_queja: number;
}

export class FrmDepartamento {
  codigo_departamento: number;
  nombre_departamento: string;
}

export class FrmMunicipio {
  codigo_municipio: number;
  codigo_departamento: number;
  nombre_departamento: string;
}

export class FrmProveedor {
  id_proveedor: number;
  nombre: string;
  direccion: string;
  nit: string;
  codigo_departamento: number;
  codigo_municipio: number;
}
