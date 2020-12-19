import * as React from 'react';
import RootContextProvider from './contexts/RootContext';
import { IRoot, ITranslate } from './interfaces';

const lang = ['ro', 'ru', 'en'];

const isInvalidTranslate = (object: ITranslate): Boolean => {
  let invalid = false;

  for (const property in object) {
    if (typeof object !== 'object' || Object.keys(object[property]).length === 0) {
      invalid = true;
    }
    for (const key in object[property]) {
      if (!object[property][key] || !lang.includes(key)) {
        invalid = true;
      }
    }
  }
  return invalid;
};

export const Root: React.FC<IRoot> = ({ locale, translate, children }) => {
  if (!lang.includes(locale)) {
    throw Error('locale props is invalid!');
  }
  if (!translate || isInvalidTranslate(translate)) {
    throw Error('translate props is invalid!');
  }

  return <RootContextProvider initialState={{ locale, translate }}>{children}</RootContextProvider>;
};
