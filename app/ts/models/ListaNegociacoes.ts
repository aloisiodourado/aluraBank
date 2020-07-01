import { Negociacao } from './Negociacao'

export class ListaNegociacoes {
  private _listaNegociacoes: Negociacao[] =[];

  adiciona(negociacao: Negociacao): void {

    this._listaNegociacoes.push(negociacao)
  }

  paraArray(): Negociacao[] {

    return [].concat(this._listaNegociacoes)
  }
}