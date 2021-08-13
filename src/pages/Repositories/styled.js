import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    max-width: 991px;
    margin: 0 auto;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 18px;
    font-family: sans-serif;
    color: #333;
    margin: 25px 0px;
`;

export const List = styled.ul`
    list-style: none;
    font-size: 14px;
    padding: 0;
    font-family: sans-serif;
`;

export const ListItem = styled.li`
    margin: 10px 0;
    background-color: #000;
    color: #fff;
    padding: 10px;
`;

export const LinkHome = styled(Link)`
    display: block;
    width: 50px;
    text-align: center;
    margin: 25px auto;
    background-color: #fff;
    padding: 5px;
    color: #000;
    font-size: 14px;
    font-family: sans-serif;
    text-decoration: none;
    border-radius: 5px;
`;
