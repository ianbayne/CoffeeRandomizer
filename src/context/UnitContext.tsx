import { createContext } from 'react';

const UnitContext = createContext({
  celsius: true,
  setCelsius: () => {},
  grams: true,
  setGrams: () => {},
});

export default UnitContext;
