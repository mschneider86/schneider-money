import React, { useState } from 'react';
import { Container, Content } from './styles';

import logoImg from '../../assets/logo.svg';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt='schneider money' />
        <button type='button' onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
