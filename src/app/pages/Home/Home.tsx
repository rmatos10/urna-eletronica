"use client";

import { CargoVotacao, DisplayNumero, InformacoesEsquerda, InformacoesDireita, Legenda, Numero, NumeroPisca, Tela, UrnaEletronica, AreaVotacao, CardCandidato, CardVicePrefeito, Imagem, Linha, Teclado, ContainerNumeros, ContainerAcoes, TituloVotacao, ListaInformacoes, CardInformacoes, ListaDetalhesInformacoes, Braille, CardVotoEmBranco, CardFimVotacao, CardVotoNulo } from "./styles";
import { useRef, useState } from "react";
import Braille1 from '../../assets/imagens/braille/braille1.png';
import Braille2 from '../../assets/imagens/braille/braille2.png';
import Braille3 from '../../assets/imagens/braille/braille3.png';
import Braille4 from '../../assets/imagens/braille/braille4.png';
import Braille5 from '../../assets/imagens/braille/braille5.png';
import Braille6 from '../../assets/imagens/braille/braille6.png';
import Braille7 from '../../assets/imagens/braille/braille7.png';
import Braille8 from '../../assets/imagens/braille/braille8.png';
import Braille9 from '../../assets/imagens/braille/braille9.png';
import Braille0 from '../../assets/imagens/braille/braille0.png';
import Branco from '../../assets/imagens/braille/branco.png';
import Corrige from '../../assets/imagens/braille/corrige.png';
import Confirma from '../../assets/imagens/braille/confirma.png';
import { Botao } from "@/app/components/Botao/Botao";
import { Etapa } from "@/app/model/etapa";
import { Candidato } from "@/app/model/candidato";
import audioDigitoUrna from '../../assets/sons/digito-urna.mp3';
import audioConfirmaUrna from '../../assets/sons/confirma-urna.mp3';
import { Audio } from "@/app/components/Audio/Audio";
import { dados as dadosEleicao} from "@/app/model/dados";

const Home = () => {

    const dados: Etapa[] = dadosEleicao;
    const [numeros, setNumeros] = useState<number[]>(Array(dados[0].numeros).fill(null));
    const [etapaVoto, setEtapaVoto] = useState(dados[0].etapa);
    const [candidato, setCandidato] = useState<Candidato | null>(null);
    const [textoCargoVotacao, setTextoCargoVotacao] = useState<string>(dados[0].titulo);
    const [votoEmBranco, setVotoEmBranco] = useState<boolean>(false);
    const [votoNulo, setVotoNulo] = useState<boolean>(false);
    const [finalizouVotacao, setFinalizouVotacao] = useState<boolean>(false);
    const [possuiVicePrefeito, setVicePrefeito] = useState<boolean>(false);
    const audioRefDigitoUrna = useRef<{ playAudio: () => void, pausarAudio: () => void } | null>(null);
    const audioRefConfirmaUrna = useRef<{ playAudio: () => void, pausarAudio: () => void } | null>(null);

    const clicou = (digito: number) => {
        const novosNumeros = [...numeros];
        const posicaoVazia = novosNumeros.findIndex(num => num === null);
        if (posicaoVazia !== -1) {
            novosNumeros[posicaoVazia] = digito;
            setNumeros(novosNumeros);
            audioRefDigitoUrna.current?.playAudio();
            if(etapaVoto === 1 && posicaoVazia === 4 || etapaVoto === 2 && posicaoVazia === 1) {
                const dadosVotacao = dados.find(d => d.etapa === etapaVoto);
                const numerosCandidato = Number((novosNumeros.filter(num => num !== null) as number[]).join(''));
                const candidato = dadosVotacao?.candidatos.find(d => d.numero === numerosCandidato);
                if(candidato) {
                    setCandidato(candidato);
                    setVicePrefeito(etapaVoto === 1 ? false : true);
                } else {
                    setVotoNulo(true);
                }
            }
        }
    };

    const branco = () => {
        const numerosCandidato = Number((numeros.filter(num => num !== null) as number[]).join(''));
        if((numerosCandidato) && (numerosCandidato > 0)) {
            alert('Para votar em branco, por favor não digite nenhum número!');
        } else {
            const dadosVotacao = dados.find(d => d.etapa === etapaVoto);
            setEtapaVoto(dadosVotacao!.etapa);
            setNumeros(Array(dadosVotacao?.numeros).fill(null));
            setCandidato(null);
            setTextoCargoVotacao(dadosVotacao!.titulo);
            setVotoEmBranco(true);
            setVotoNulo(false);
        }
    };

    const corrige = () => {
        if(etapaVoto === 1) {
            setEtapaVoto(dados[0]?.etapa);
            setNumeros(Array(dados[0]?.numeros).fill(null));
            setCandidato(null);
            setTextoCargoVotacao(dados[0]?.titulo);
            setVotoEmBranco(false);
            setVotoNulo(false);
        } if(etapaVoto === 2)  {
            setEtapaVoto(dados[1]?.etapa);
            setNumeros(Array(dados[1]?.numeros).fill(null));
            setCandidato(null);
            setTextoCargoVotacao(dados[1]?.titulo);
            setVotoEmBranco(false);
            setVotoNulo(false);
            setVicePrefeito(false);
        }
    };

    const confirma = () => {
        audioRefConfirmaUrna.current?.playAudio();
        if(etapaVoto === 1) {
            setEtapaVoto(dados[1]?.etapa);
            setNumeros(Array(dados[1]?.numeros).fill(null));
            setCandidato(null);
            setTextoCargoVotacao(dados[1]?.titulo);
            setVotoEmBranco(false);
            setVotoNulo(false);
        } else {
            setEtapaVoto((prevEtapaVoto) => prevEtapaVoto + 1);
            setFinalizouVotacao(true);
            setVotoEmBranco(false);
            setVotoNulo(false);
        }
    };

    return (
        <>
            <UrnaEletronica>
                <Tela>
                    <AreaVotacao>
                        {!finalizouVotacao ? (
                            <>
                                <InformacoesEsquerda>
                                    <TituloVotacao>
                                        <span>SEU VOTO PARA</span>
                                        <span>TREINAMENTO</span>
                                    </TituloVotacao>
                                    <CargoVotacao>
                                        <span>{ textoCargoVotacao }</span>
                                    </CargoVotacao>
                                    {!votoEmBranco && !votoNulo ? (
                                        <CardInformacoes>
                                            <ListaInformacoes>
                                                <li>Número:</li>
                                                <li>Nome:</li>
                                                <li>Partido:</li>
                                            </ListaInformacoes>
                                            <ListaDetalhesInformacoes>
                                                <li>
                                                    <DisplayNumero>
                                                        <NumeroPisca></NumeroPisca>
                                                        {numeros.map((numero, index) => (
                                                            <Numero key={index}>{numero}</Numero>
                                                        ))}
                                                    </DisplayNumero>
                                                </li>
                                                <li>
                                                    { candidato?.nome || ''}
                                                </li>
                                                <li>
                                                    { candidato?.partido || ''}
                                                </li>
                                            </ListaDetalhesInformacoes>
                                        </CardInformacoes>
                                    ) : null}
                                    
                                    {votoEmBranco ? (
                                        <CardVotoEmBranco>
                                            VOTO EM BRANCO
                                        </CardVotoEmBranco>
                                    ) : votoNulo ? (
                                        <CardVotoNulo>
                                            VOTO NULO
                                        </CardVotoNulo>
                                    ) : null}
                                    <Legenda>
                                        Aperta a tecla: <br/>
                                        CONFIRMA para CONFIRMAR este voto.<br/>
                                        CORRIGE para CORRIGIR este voto.
                                    </Legenda>
                                </InformacoesEsquerda>
                                <InformacoesDireita>
                                    { candidato ? (
                                        <CardCandidato>
                                            <Imagem 
                                                src={`candidatos/${etapaVoto === 1 ? 'vereador' : 'prefeito'}/${candidato?.fotos[0]?.url}`}
                                                alt={candidato?.fotos[0]?.legenda}
                                            ></Imagem>
                                            { etapaVoto === 1 ? 'Vereador' : 'Prefeito' }
                                        </CardCandidato>
                                    ) : null}
                                    
                                    { possuiVicePrefeito ? (
                                        <CardVicePrefeito>
                                            <Imagem 
                                                src={`candidatos/vice-prefeito/${candidato?.fotos[1]?.url}`}
                                                alt={candidato?.fotos[1]?.legenda}
                                            ></Imagem>
                                            Vice-prefeito
                                        </CardVicePrefeito>
                                    ) : null }
                                </InformacoesDireita>
                            </>
                        ) : (
                            <CardFimVotacao>
                                FIM
                            </CardFimVotacao>
                        )}
                    </AreaVotacao>
                </Tela>
                <Teclado>
                    <ContainerNumeros>
                        <Linha>
                            <Botao onClick={() => clicou(1)}>1<Braille src={Braille1.src}></Braille></Botao>
                            <Botao onClick={() => clicou(2)}>2<Braille src={Braille2.src}></Braille></Botao>
                            <Botao onClick={() => clicou(3)}>3<Braille src={Braille3.src}></Braille></Botao>
                        </Linha>
                        <Linha>
                            <Botao onClick={() => clicou(4)}>4<Braille src={Braille4.src}></Braille></Botao>
                            <Botao onClick={() => clicou(5)}>5<Braille src={Braille5.src}></Braille></Botao>
                            <Botao onClick={() => clicou(6)}>6<Braille src={Braille6.src}></Braille></Botao>
                        </Linha>
                        <Linha>
                            <Botao onClick={() => clicou(7)}>7<Braille src={Braille7.src}></Braille></Botao>
                            <Botao onClick={() => clicou(8)}>8<Braille src={Braille8.src}></Braille></Botao>
                            <Botao onClick={() => clicou(9)}>9<Braille src={Braille9.src}></Braille></Botao>
                        </Linha>
                        <Linha>
                            <Botao onClick={() => clicou(0)}>0<Braille src={Braille0.src}></Braille></Botao>
                        </Linha>
                    </ContainerNumeros>
                    <ContainerAcoes>
                        <Linha style={{flexDirection: 'column'}}>
                            <Botao cor="branco" onClick={() => branco()}>BRANCO<Braille src={Branco.src} cor="branco"></Braille></Botao>
                            <Botao cor="corrige" onClick={() => corrige()}>CORRIGE<Braille src={Corrige.src} cor="corrige"></Braille></Botao>
                            <Botao cor="confirma" onClick={() => confirma()}>CONFIRMA<Braille src={Confirma.src} cor="confirma"></Braille></Botao>
                        </Linha>
                    </ContainerAcoes>
                </Teclado>
                <Audio ref={audioRefDigitoUrna} src={audioDigitoUrna} />
                <Audio ref={audioRefConfirmaUrna} src={audioConfirmaUrna} />
            </UrnaEletronica>
        </>
    )
};

export default Home;