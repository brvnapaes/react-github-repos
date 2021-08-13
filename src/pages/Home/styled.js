import styled from 'styled-components';

export const HomeContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input`
    border: 1px solid #ddd;
    height: 25px;
    padding: 0 10px;
    border-radius: 5px 0px 0px 5px;

    &focus,
    &active {
        outline: 0;
        box-shadow: none;
    }
`;

export const Button = styled.button`
    border: 1px solid #000;
    height: 25px;
    padding: 0 10px;
    background: #000;
    color: #fff;
    border-radius: 0px 5px 5px 0px;

    &focus,
    &active {
        outline: 0;
        box-shadow: none;
    }
`;

export const ErrorMsg = styled.span`
    display: block; 
    font-family: sans-serif;
    font-size: 12px;
    margin-top: 10px;
`;