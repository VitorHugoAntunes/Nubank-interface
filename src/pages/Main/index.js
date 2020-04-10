import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

/**
 * Importando o React da biblioteca react
 * Importando o ícone de dentro dos vector icons
 */

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

/**
 * Importando o animated do da biblioteca react native para utilizar as animações
 * Importando o PanGestureHandler para captar o arrastar na tela do usuário e importando o State para guardar o estado da animação
 */

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';

/**
 * Importando os componentes da tela principal
 */

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation,
} from './styles';

/**
 * Importando todas as estilizações dos componentes utilizados na página
 */

export default function Main() {
  let offset = 0;
  const translateY = new Animated.Value(0);

  const animateEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;

      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 392 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 392 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    /**
     * Container que armazena todos os elementos da tela.
     */

    /**
     * Adicionando a variável de animação ao Menu
     */
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={animateEvent}
          onHandlerStateChange={onHandlerStateChanged}
          /**
           * Detectar que o estado da animação mudou
           */
        >
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-350, 0, 392],
                    outputRange: [-50, 0, 392],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
            /** Definir quanto o Card pode ser arrastado(input) e definir o que acontece caso ultrapassar essas medidas.
             * O clamp é utilizado para evitar que acontença mais alguma coisa caso chegue no limite da medida
             */
          >
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              <Description>R$ 4.512,25</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferência de R$ 150,00 recebida de Maria Paula hoje às
                13:00h
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>
      <Tabs translateY={translateY} />
    </Container>
  );
}

/**
 * Todas as informações contidas no cards separadamente
 * Adicionando a variável de animação nas TABS
 */
