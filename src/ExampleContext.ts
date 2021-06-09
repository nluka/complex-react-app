import { createContext } from 'react';

interface ExampleContextDefault {
  addFlashMessage: Function;
  setIsLoggedIn: Function;
}

const ExampleContext = createContext<ExampleContextDefault>({
  addFlashMessage: () => {},
  setIsLoggedIn: () => {},
});

export default ExampleContext;
