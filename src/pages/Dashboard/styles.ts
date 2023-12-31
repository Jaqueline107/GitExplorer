import styled, { css } from 'styled-components';

interface FormProps {
    hasError: boolean;
}

export const Title = styled.h1`
    font-size: 47px;
    color: #3a3a3a;
    max-width: 450px;
    line-height: 57px;

    margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
    margin-top: 40px;
    max-width: 700px;

    display: flex;

    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        outline: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
        border: 2px solid #fff;
        border-right: 0;

        ${props =>
            props.hasError &&
            css`
                border-color: #c53030;
            `}

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 210px;
        height: 70px;
        background: #04d361;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
            background: #04bf58;
        }
    }
`;

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 8px;
`;

export const Repositories = styled.div`
    margin-top: 80px;
    max-width: 700px;

    a {
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;

        display: flex;
        align-items: center;
        transition: transform 0.2s;

        &:hover {
            transform: translateX(10px);
        }

        & + a {
            margin-top: 17px;
        }

        img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }

        div {
            flex: 1;
            margin-left: 17px;

            strong {
                font-size: 20px;
                color: #3d3d4d;
            }
            p {
                font-size: 18px;
                color: #a8a8b3;
                margin-top: 4px;
            }
        }
    }
`;
