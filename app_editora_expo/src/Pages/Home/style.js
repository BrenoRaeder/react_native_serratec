import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    width: 100%;
    padding: 10px 0;
    font-family: monospace;
`;

export const PublishingCompanyCard = styled.View`
    background-color: #1b1c1b;
    color: #fff;
    width: 150px;
    height: 150px;
    margin: 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`;

export const BookCard = styled.View`
    display: flex;
    flex-direction: column;
    background-color: #1b1c1b;
    align-items: center;
    margin: 0 5px;
    width: 250px;
    height: 400px;
    justify-content: space-between;
`;