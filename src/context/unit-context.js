import {createContext} from 'react';

const UnitContext = createContext({
  useCelsius: true,
  setUseCelsius: () => {},
  useGrams: true,
  setUseGrams: () => {},
});

export default UnitContext;
