import React from 'react';
import { StatusBar } from 'react-native';

/**
 * Importando o React de dentro da pasta react
 * Importando o componente da Status bar de dentro da pasta react-native
 */

import './config/ReactotronConfig';

import Routes from './routes';

/**
 * Importando as rotas da pasta de rotas
 */

const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
    <Routes />
  </>
);

/**
 * Criando a função que irá exibir o componente das rotas e muda a cor da barra de notificação para a mesma cor do background
 */

export default App;

/**
 * Exporta o a função.
 */
