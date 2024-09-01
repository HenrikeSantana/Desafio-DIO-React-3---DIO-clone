import React from 'react';
import logo from '../../assets/logo-dio.png';
import { Button } from '../Button';
import { useNavigate  } from 'react-router-dom';

import { Container, Row, Wrapper, BuscarInputContainer, Menu, MenuRight, Input, UserPicture} from './styles';

const Header = ({autenticado}) => {
    const navigate = useNavigate();

    const handleClickDioImage = () => {
        navigate('/');
    }

    const handleClickEntrar = () => {
        navigate('/login');
    }

    const handleClickCadastrar = () => {
        navigate('/cadastro');
    }

    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da DIO" onClick={handleClickDioImage} />
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                            <Input placeholder='Buscar...' />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src='https://avatars.githubusercontent.com/u/170680672?v=4' />
                    ) : (
                        <>
                        <MenuRight href='http://localhost:3000/'>Home</MenuRight>
                            <Button title="Entrar" onClick={handleClickEntrar} />
                            <Button title="Cadastrar" onClick={handleClickCadastrar} />  
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header };