import { logarTempoExecucao } from '../helpers/decorators/index'

export abstract class View<T> {
  private _element: JQuery

  constructor(selector: string){
    this._element = $(selector)
  }

  @logarTempoExecucao(true)
  update(modelo: T): void {
    this._element.html(this.template(modelo))
  }

  abstract template(modelo: T): string 
}
