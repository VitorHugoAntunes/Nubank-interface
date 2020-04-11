import { Animated, StyleSheet } from 'react-native';

import styled from 'styled-components/native';

/**
 * Importando o StyleSheet para que possamos usar a variavel stylesheet e utilizar a propriedade hairLineWidth
 * Importando o Animated para utilizar nos estilos do container
 */

export const Container = styled(Animated.ScrollView)`
  margin: 0 30px;
  margin-bottom: 80px;
`;
/**
 * Aplicando o Animated ao estilo do container para que seja possivel alterar os estilos utilizando a variavel translateY
 */

export const Code = styled.View`
  padding: 10px;
  align-self: center;
  overflow: hidden;
  background-color: #fff;
`;

export const Nav = styled.View`
  margin-top: 30px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.8);
`;

export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
`;

export const NavText = styled.Text`
  font-size: 15px;
  color: #fff;
  margin-left: 20px;
`;

export const SignOutButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
`;

export const SignOutButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 13px;
`;
