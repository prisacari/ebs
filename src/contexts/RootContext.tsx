import React, { createContext, FC, useState } from 'react';

export const RootContext = createContext<any>(null);
import { IRoot, Locale } from '../interfaces';

const RootContextProvider: FC<{ initialState: IRoot }> = ({ initialState, children }) => {
  const [state, setState] = useState<IRoot>(initialState);

  const changeLang = (lang: Locale): void => {
    setState((prev) => ({ ...prev, locale: lang }));
  };

  return <RootContext.Provider value={{ state, setState, changeLang }}>{children}</RootContext.Provider>;
};

export default RootContextProvider;
