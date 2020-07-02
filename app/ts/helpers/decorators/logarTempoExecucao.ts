export function logarTempoExecucao(emSegundos: boolean = false){

  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){

    const metodoOriginal = descriptor.value;

    descriptor.value = function(...args: any[]){
      let unidade = 'ms';
      let divisor = 1
      if (emSegundos){
        unidade = 's'
        divisor = 1000
      }
      const t1 = performance.now();
      console.log("-------------------")
      console.log(`Parametros passados para o metodo ${propertyKey}: ${JSON.stringify(args)}`)
      console.log()
      const retorno = metodoOriginal.apply(this, args);
      const t2 = performance.now();
      console.log(`Tempo de execução = ${(t2 - t1)/divisor} ${unidade}`)
      return retorno;
    }

    return descriptor;
  }
}