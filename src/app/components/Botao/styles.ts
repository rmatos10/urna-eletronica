import styled, { css } from "styled-components";
import { BotaoProps } from "./Botao";

export const Botao = styled.button<BotaoProps>`
    width: 70px;
    height: 40px;
    background-color: #282F38;
    color: #FFF;
    font-size: 25px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 10px;
    box-shadow: 3px 3px 0px #2B2B33;
    cursor: pointer;
    border-radius: 6px;
    position: relative;

    ${({ cor }) => {
        switch (cor) {
            case 'branco':
                return css`
                    width: 90px;
                    background-color: #FFF;
                    color: #000;
                    font-size: 18px;
                    font-weight: 700;
                    justify-content: center;
                `;
            case 'corrige':
                return css`
                    width: 90px;
                    color: #2B2B33;
                    background-color: #EB4D09;
                    font-size: 18px;
                    font-weight: 700;
                    justify-content: center;
                `;
            case 'confirma':
                return css`
                    background-color: #48C079;
                    color: #000;
                    font-size: 18px;
                    width: 90px;
                    height: 100px;
                    font-weight: 700;
                    letter-spacing: -1.4px;
                    padding-top: 8px;
                `;
            default:
                return css``; // Caso padrão
        }
    }}
`;
