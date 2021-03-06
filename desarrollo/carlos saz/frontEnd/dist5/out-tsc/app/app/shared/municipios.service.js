import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL_REST_FILE } from '../conc-virt-const';
var MunicipiosService = /** @class */ (function () {
    function MunicipiosService(http) {
        this.http = http;
    }
    MunicipiosService.prototype.fetchSedes = function (codigoMunicipio) {
        return this.http.get(BASE_URL_REST_FILE + 'municipios/' + codigoMunicipio + '/sedes');
    };
    MunicipiosService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], MunicipiosService);
    return MunicipiosService;
}());
export { MunicipiosService };
//# sourceMappingURL=municipios.service.js.map