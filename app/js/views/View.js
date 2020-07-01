System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(selector) {
                    this._element = $(selector);
                }
                update(modelo) {
                    this._element.html(this.template(modelo));
                }
            };
            exports_1("View", View);
        }
    };
});
