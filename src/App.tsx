import './App.css';

import { ChakraProvider } from '@chakra-ui/react';

import Nminx from './components/Nminx';

function App() {
  return (
    <>
      <ChakraProvider>
        <Nminx />
      </ChakraProvider>
    </>
  );
}

export default App;
