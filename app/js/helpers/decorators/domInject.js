System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function domInject(selector) {
        return function (target, propertyKey) {
            let elemento;
            const getter = function () {
                if (!elemento) {
                    console.log(`buscando ${selector} para injetar em ${propertyKey}`);
                    elemento = $(selector);
                }
                return elemento;
            };
            Object.defineProperty(target, propertyKey, {
                get: getter
            });
        };
    }
    exports_1("domInject", domInject);
    return {
        setters: [],
        execute: function () {
        }
    };
});
