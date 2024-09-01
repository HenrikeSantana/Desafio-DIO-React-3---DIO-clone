import React from 'react';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
    return (
        <div>
            <Header autenticado={true} />
            <Container>
                <Column flex={3}>
                    <Title>FEED</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighlight>#RANKING DA SEMANA</TitleHighlight>
                    <UserInfo percentual={80} name="Henrique Alves Sant'Ana" image="https://avatars.githubusercontent.com/u/170680672?v=4" />
                    <UserInfo percentual={27} name="Henrique Alves Sant'Ana" image="https://avatars.githubusercontent.com/u/170680672?v=4" />
                    <UserInfo percentual={89} name="Henrique Alves Sant'Ana" image="https://avatars.githubusercontent.com/u/170680672?v=4" />
                    <UserInfo percentual={57} name="Henrique Alves Sant'Ana" image="https://avatars.githubusercontent.com/u/170680672?v=4" />
                    <UserInfo percentual={12} name="Henrique Alves Sant'Ana" image="https://avatars.githubusercontent.com/u/170680672?v=4" />
                </Column>
                
            </Container>
        </div>
    )
}

export { Feed };