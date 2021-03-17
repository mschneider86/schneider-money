import React from 'react';
import { Container, Content } from './styles';
import logoImg from '../../assets/logo.svg';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt='schneider money' />
        <button type='button'>Nova transação</button>
      </Content>
    </Container>
  );
}
