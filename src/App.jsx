import { useState } from 'react'

import * as Styled from "./styles/App.Styled";

import Card from './components/Card';

const App = () => {
  return (
    <Styled.Container>
      <Card />
    </Styled.Container>
  );
}

export default App
