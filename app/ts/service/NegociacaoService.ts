import { Negociacao, NegociacaoApi } from '../models/index';

export class NegociacaoService {


  obterNegociacoes(handler: HandlerFunction): Promise<Negociacao[]> {
    
    return fetch('http://localhost:8080/dados')
    .then(res => handler(res))
    .then(res => res.json())
    .then((dados: NegociacaoApi[]) => 
      dados
        .map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
    )
    .catch(err => {
      console.log(err.message)
      return new Array<Negociacao>()
    });
  }
}

export interface HandlerFunction {

  (res: Response): Response

}