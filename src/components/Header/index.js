import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Top, Logo, Title } from './styles';

import logo from '../../assets/Nubank_Logo.png';

/**
 * Importando o React da lib react
 * Importando o ícone da lib dos vector icons
 * Importando todas as estilizações dos componentes utilizados na página
 */

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Vitor</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#fff" />
    </Container>
  );
}

/**
 * Exportando a função que retorna os elementos do cabeçalho
 * Criando um container para colocar todo o conteúdo de header
 * Adicionado a logo e um título
 * Adicionando o ícone
 */
