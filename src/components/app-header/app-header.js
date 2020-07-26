import React from 'react';

// стили цсс шапки
import './app-header.css';
// styled-components
import styled from 'styled-components';

// стили styled-components
const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        color: ${props => props.colored ? 'red' : 'black'};
        :hover {
            color: blue;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`

const AppHeader = ({liked, allPost}) => {
    return (
    <Header colored>
        <h1>Fedy Pacik</h1>
        <h2>{allPost} записей, из понравилось {liked}</h2>
    </Header>)
}

export default AppHeader;