import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagem{
public id: number
public curtidas: number
public imagens:	string
public datatempo: Date
// Relacionamento de tabelas
public usuario: Usuario
public tema: Tema

}