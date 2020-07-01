export abstract class View<T> {
  private _element: JQuery

  constructor(selector: string){
    this._element = $(selector)
  }

  update(modelo: T): void {
    this._element.html(this.template(modelo))
  }

  abstract template(modelo: T): string 
}
