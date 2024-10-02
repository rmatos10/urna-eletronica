import { Candidato } from "./candidato";

// Classe para Etapa
export class Etapa {
    etapa: number;
    titulo: string;
    numeros: number;
    candidatos: Candidato[];

    constructor(etapa: number, titulo: string, numeros: number, candidatos: Candidato[]) {
        this.etapa = etapa;
        this.titulo = titulo;
        this.numeros = numeros;
        this.candidatos = candidatos;
    }
}