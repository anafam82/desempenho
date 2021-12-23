
//classe de modelo para conversar com backend. 
//coloco os atributos q estao no backend

export interface Servidor{
    idServidor?: number //? é pq é opcional
    nome: string
    localizacao: string
    cargo: string
    email: string 
   
}

