import {createContext} from 'react';

const UseCelsiusContext = createContext({
  useCelsius: true,
  setUseCelsius: () => {},
});

export default UseCelsiusContext;
