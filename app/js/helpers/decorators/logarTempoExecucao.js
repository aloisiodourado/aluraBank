System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logarTempoExecucao(emSegundos = false) {
        return function (target, propertyKey, descriptor) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function (...args) {
                let unidade = 'ms';
                let divisor = 1;
                if (emSegundos) {
                    unidade = 's';
                    divisor = 1000;
                }
                const t1 = performance.now();
                console.log("-------------------");
                console.log(`Parametros passados para o metodo ${propertyKey}: ${JSON.stringify(args)}`);
                console.log();
                const retorno = metodoOriginal.apply(this, args);
                const t2 = performance.now();
                console.log(`Tempo de execução = ${(t2 - t1) / divisor} ${unidade}`);
                return retorno;
            };
            return descriptor;
        };
    }
    exports_1("logarTempoExecucao", logarTempoExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
