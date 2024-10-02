import React from "react";
import * as S from './styles';

export type BotaoProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    cor?: 'branco' | 'confirma' | 'corrige';
    children?: React.ReactNode;
};

export const Botao = ({cor, ...props}: BotaoProps) => {
    return (
        <>
            <S.Botao 
                cor={cor}
                {...props} 
            />
        </>
    )
};