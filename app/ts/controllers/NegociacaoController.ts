import { NegociacoesView, MensagemView } from '../views/index'
import { ListaNegociacoes, Negociacao, NegociacaoApi } from '../models/index'
import { domInject , throttle } from '../helpers/decorators/index'
import { NegociacaoService } from '../service/index'

export class NegociacaoController {

  @domInject('#data')
  private _inputData: JQuery;

  @domInject('#quantidade')
  private _inputQuantidade: JQuery;
  
  @domInject('#valor')
  private _inputValor: JQuery;
  
  private _listaNegociacoes = new ListaNegociacoes();
  private _negociacoesView = new NegociacoesView('#negociacoesView')
  private _mensagemView = new MensagemView('#mensagemView')

  private _negociacaoService = new NegociacaoService();

  constructor(){
    this._negociacoesView.update(this._listaNegociacoes)
  }

  @throttle()
  adiciona(){

    let data = new Date(this._inputData.val().replace(/-/g, ','))

    if(data.getDay() == DiaDaSemana.Domingo || data.getDay() == DiaDaSemana.Sabado){
      this._mensagemView.update("Dia não útil, não pode receber uma negociação")
    } else {
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

  @throttle(500)
  importarDados(){

    function isOk (res: Response){

      if(res.ok){
        return res 
      } else {
        throw new Error(res.statusText)
      }
    }

    this._negociacaoService
      .obterNegociacoes(isOk)
      .then(negociacoes => {
        negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
        this._negociacoesView.update(this._listaNegociacoes)
        this._mensagemView.update("Negociacoes importadas com sucesso")
      })


  }
}

enum DiaDaSemana {
  Domingo,
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado
}