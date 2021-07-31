import { Postagem } from "./Postagem"

export class Tema{
public id: number
public descricao: string
public qtdTema: number
// Relacionamento de tabelas
public postagem: Postagem[]
}

