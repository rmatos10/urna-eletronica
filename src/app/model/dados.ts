import { Candidato } from "./candidato";
import { Etapa } from "./etapa";
import { Foto } from "./foto";

export const dados: Etapa[] = [
    new Etapa(1, 'Vereador', 5,
        [
            new Candidato(
                20222,
                'Professora Lu Schambeck',
                'PODEMOS',
                [new Foto('professora_lu_schambeck.jpg', 'Professora Lu Schambeck - PODEMOS')]
            ),
            new Candidato(
                23023,
                'Matheusinho',
                'CIDADANIA',
                [new Foto('matheusinho.jpg', 'Matheusinho - CIDADANIA')]
            ),
            new Candidato(
                55300,
                'Agnelo Miranda',
                'PSD',
                [new Foto('agnelo_miranda.jpg', 'Agnelo Miranda - PSD')]
            ),
            new Candidato(
                12777,
                'Queixinho',
                'PDT',
                [new Foto('queixinho.jpg', 'Queixinho - PDT')]
            ),
            new Candidato(
                22221,
                'Anna Valente',
                'PL',
                [new Foto('anna_valente.jpg', 'Anna Valente - PL')]
            )
        ]
    ), 
    new Etapa(2, 'Prefeito', 2,
        [
            new Candidato(
                13,
                'Claudia Bratti',
                'PT',
                [
                    new Foto('claudia_bratti.jpg', 'Claudia Bratti - PT'),
                    new Foto('celi.jpg', 'Celi - PT')
                ]
            ),
            new Candidato(
                29,
                'Leandro Brugnago',
                'PCO',
                [
                    new Foto('leandro_brugnago.jpg', 'Leandro Brugnago - PCO'),
                    new Foto('antonio_carlos.jpeg', 'Antonio Carlos - PCO')
                ]
            ),
            new Candidato(
                15,
                'Elizeu Mattos',
                'MDB',
                [
                    new Foto('elizeu_mattos.jpg', 'Elizeu Mattos - MDB'),
                    new Foto('gil_zappellini.jpeg', 'Gil Zappellini - MDB')
                ]
            ),
            new Candidato(
                23,
                'Carmen Zanotto',
                'CIDADANIA',
                [
                    new Foto('carmen_zanotto.jpg', 'Carmen Zanotto - CIDADANIA'),
                    new Foto('jair_junior.jpg', 'Jair Junior - CIDADANIA')
                ]
            ),
            new Candidato(
                44,
                'Lio Marin',
                'União Brasil',
                [
                    new Foto('lio_marin.jpg', 'Lio Marin - União Brasil'),
                    new Foto('vinicius_borges.jpeg', 'Vinicius Borges - União Brasil'),
                ]
            )
        ]
    )
];