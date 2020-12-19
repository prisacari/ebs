import React, { useCallback } from 'react';
import { render } from 'react-dom';
import { Root, useIntl } from 'ebs-intl';

const languages = ['ro', 'ru', 'en'];
const translate = {
  templates: {
    ro: 'Salut, {name}. Ce mai faci, {name}?',
    ru: 'Привет, {name}. Как поживаете, {name}?',
    en: 'Hello, {name}. How are you, {name}?',
  },
  hello: {
    ro: 'Salut!',
    ru: 'Привет',
    en: 'Hello',
  },
};

const App = () => {
  const { t, lang, changeLang } = useIntl();

  const handleChange = useCallback(
    e => {
      changeLang(e.target.value);
    },
    [changeLang],
  );

  return (
    <div>
      <select value={lang} onChange={handleChange}>
        {languages.map(item => (
          <option value={item} key={item}>
            {item.toUpperCase()}
          </option>
        ))}
      </select>
      <div>{t('templates', { name: 'Johy Davis :)' })}</div>
      <div>{t('hello')}</div>
    </div>
  );
};

render(
  <Root locale={languages[0]} translate={translate}>
    <App />
  </Root>,
  document.getElementById('root'),
);
