import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

/**
 * Importando o Animated da lib react native
 * Importando o styled dos componentes de estilo
 * Importando da lib react native iphone x helper o getStatusBarHeight para pegar informações da altura da barra de notificações (também funciona para alguns celulares android)
 */

export const Container = styled.View`
  flex: 1;
  background: #8b10ae;
  justify-content: center;
  padding-top: ${getStatusBarHeight()}px;
`;

/**
 * Estilizando o Container principal
 * Adicionando padding top com a medida da altura da barra de notificações
 */

export const Content = styled.View`
  flex-1;
  max-height: 500px;
  z-index: 5;
`;
/**
 * Preenchendo e definindo a altura máxima
 * Utilizando z index para deixar por cima de todos os outros elementos
 */

export const Card = styled(Animated.View)`
  flex-1;
  background: #fff;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0px;
`;
/**
 * Definindo as medidas, posição e margens do Card
 * Aplicando o Animated ao estilo do container para que seja possivel alterar os estilos utilizando a variavel translateY
 */
export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 13px;
  color: #999;
`;

export const Description = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color: #333;
`;

export const CardFooter = styled.View`
  padding: 30px;
  background: #eee;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const Annotation = styled.Text`
  font-size: 12px;
  color: #333;
`;
