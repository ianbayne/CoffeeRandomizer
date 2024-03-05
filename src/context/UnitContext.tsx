import { createContext, Dispatch, SetStateAction } from 'react';

type UnitContextData = {
  celsius: boolean;
  setCelsius: Dispatch<SetStateAction<boolean>>;
  grams: boolean;
  setGrams: Dispatch<SetStateAction<boolean>>;
};

const UnitContext = createContext<UnitContextData | null>(null);

export default UnitContext;
