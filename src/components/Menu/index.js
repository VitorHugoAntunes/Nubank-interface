import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import QRCode from 'react-native-qrcode-svg';

import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText,
} from './styles';

/**
 * Importando o react, icon e qrcode de suas respectivas pastas/libs
 * Importando os estilos de todos os componentes utilizados no Menu
 */

export default function Menu({ translateY }) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
        }),
      }}
      /**
       * Utilizando a funcao translateY para alterar a opacidade do menu, deixando-o invisivel quando o Card for arrastado 150 pixels para baixo
       * e ficando invisivel novamente quando o card for arrastado para cima
       */
    >
      <Code>
        <QRCode
          value="https://nubank.com.br/"
          size={80}

          /**
           * Adicionado o QRCode com tamanho de 80 pixels e atribuindo o site do nubank ao seu valor
           */
        />
      </Code>
      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#fff" />
          <NavText>Me ajuda</NavText>
        </NavItem>

        <NavItem>
          <Icon name="person-outline" size={20} color="#fff" />
          <NavText>Perfil</NavText>
        </NavItem>

        <NavItem>
          <Icon name="credit-card" size={20} color="#fff" />
          <NavText>Configurar cartão</NavText>
        </NavItem>

        <NavItem>
          <Icon name="smartphone" size={20} color="#fff" />
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
/**
 * Estes sao todos os elementos do container que engloba o menu, nele sao contidos o QRCode e abaixo itens de navegacao
 * com icones e um botao logo abaixo
 */