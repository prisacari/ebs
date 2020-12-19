export interface ITranslate {
  [translationKey: string]: {
    [language: string]: string;
  };
}

export type Locale = 'ro' | 'en' | 'ru';

export interface IRoot {
  locale: Locale;
  translate: ITranslate;
}
