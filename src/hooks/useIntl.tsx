import { useContext } from 'react';
import { RootContext } from '../contexts/RootContext';

const render = (str: string, obj: { [key: string]: string }): string => {
  return Object.keys(obj).reduce((acc, c) => {
    return acc.split(`{${c}}`).join(obj[c]);
  }, str);
};

export const useIntl = () => {
  const { state, changeLang } = useContext(RootContext);
  const { locale, translate } = state;

  const t = (key: string, params?: { [key: string]: string }): string => {
    if (!locale) return key;

    if (params) {
      let msg = (translate[key] && translate[key][locale]) || key;
      return render(msg, params);
    }

    return (translate[key] && translate[key][locale]) || key;
  };

  return {
    t,
    lang: locale,
    changeLang,
  };
};
