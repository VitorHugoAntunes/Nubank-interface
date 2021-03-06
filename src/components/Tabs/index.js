import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TabsContainer, TabItem, TabText } from './styles';

/**
 * Importando o React e o ícone de suas respectivas libs
 * Importando todas as estilizações dos componentes utilizados na página
 */

export default function Tabs({ translateY }) {
  return (
    <Container
      style={{
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [0, 392],
              outputRange: [0, 30],
              extrapolate: 'clamp',
            }),
          },
          /**
           * Empurrando as Tabs para baixo, conforme vai arrastando o Card ate a posicao 392, as Tabs sao empurradas 30 pixels para baixo
           */
        ],
        opacity: translateY.interpolate({
          inputRange: [0, 392],
          outputRange: [1, 0.1],
          extrapolate: 'clamp',
        }),
      }}
      /**
       * Diminuindo a opacidade das Tabs, quando o Card estiver na posicao 0 as Tabs sao totalmente visiveis,
       * conforme vai arrastando para baixo ate a posicao 392 as Tabs ficam com opacidade 0.1
       */
    >
      <TabsContainer>
        <TabItem>
          <Icon name="person-add" size={24} color="#fff" />
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <Icon name="chat-bubble-outline" size={24} color="#fff" />
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-downward" size={24} color="#fff" />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-upward" size={24} color="#fff" />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <Icon name="lock" size={24} color="#fff" />
          <TabText>Bloquear cartão</TabText>
        </TabItem>
      </TabsContainer>
    </Container>

    /**
     * Criando um container para guardar todos os elementos das Tabs
     * Criando quatro tabs com diferentes ícones (representação de botões dentro do app)
     */
  );
}
