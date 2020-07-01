import { NegociacoesView, MensagemView } from '../views/index'
import { ListaNegociacoes, Negociacao } from '../models/index'

export class NegociacaoController {

  private _inputData: JQuery;
  private _inputQuantidade: JQuery;
  private _inputValor: JQuery;
  private _listaNegociacoes = new ListaNegociacoes();
  private _negociacoesView = new NegociacoesView('#negociacoesView')
  private _mensagemView = new MensagemView('#mensagemView')

  constructor(){
    this._inputData = $('#data') 
    this._inputQuantidade = $('#quantidade') 
    this._inputValor = $('#valor') 
    this._negociacoesView.update(this._listaNegociacoes)
  }

  adiciona(event: Event){

    event.preventDefault()
    const negociacao = new Negociacao(
      new Date(this._inputData.val().replace(/-/g, ',')),
      parseInt(this._inputQuantidade.val()),
      parseFloat(this._inputValor.val())
    )

    this._listaNegociacoes.adiciona(negociacao)

    this._negociacoesView.update(this._listaNegociacoes)
    this._mensagemView.update("Negociacao incluida com sucesso!")
  }
}