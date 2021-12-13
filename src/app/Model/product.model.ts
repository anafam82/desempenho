
//classe de modelo para conversar com backend. 
//coloco os atributos q estao no backend

export interface Product{
    id?: number //? é pq é opcional
    orgao: string
    macroprocesso: string
    processo: string 
    produtoPactuacao: string
    indicador: string
    formula: string
    modalidade: string
    fonte: string

}