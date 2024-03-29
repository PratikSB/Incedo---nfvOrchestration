"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var check_component_1 = require('./check.component');
var select_component_1 = require('./select.component');
var select_option_component_1 = require('./select-option.component');
__export(require('./check.component'));
__export(require('./select.component'));
__export(require('./select-option.component'));
var SELECT_DIRECTIVES = [
    check_component_1.CheckComponent,
    select_component_1.SelectComponent,
    select_option_component_1.SelectOptionComponent,
];
var SelectModule = (function () {
    function SelectModule() {
    }
    SelectModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule],
            declarations: [SELECT_DIRECTIVES],
            exports: [SELECT_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [])
    ], SelectModule);
    return SelectModule;
}());
exports.SelectModule = SelectModule;
//# sourceMappingURL=index.js.map