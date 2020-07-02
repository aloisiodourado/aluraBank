export function domInject(selector: string){

  return function(target: any, propertyKey: string) {

    let elemento: JQuery;

    const getter = function(){
      if(!elemento){
        console.log(`buscando ${selector} para injetar em ${propertyKey}`)
        elemento = $(selector);
      }
      return elemento;
    }

    Object.defineProperty(target, propertyKey, {
      get: getter
    })
  }

}