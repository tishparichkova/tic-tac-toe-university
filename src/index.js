import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// import styles from "./styles.css";
import store from './store/';
import { GameContainer } from './components/Game/Game';

const App = () => (
  <Provider store={store}>
    <GameContainer />
  </Provider>
);

render(<App />, document.getElementById("root"));
