'use client';

import { I18nextProvider } from 'react-i18next';
import initTranslations from '@/app/i18n';
import { createInstance, i18n as I18nInstance } from 'i18next';
import React, { ReactNode } from 'react';

interface TranslationsProviderProps {
  children: ReactNode;
  locale: string;
  namespaces: string[];
  resources: Record<string, any>;
}

const TranslationsProvider: React.FC<TranslationsProviderProps> = ({
  children,
  locale,
  namespaces,
  resources,
}) => {
  const i18n: I18nInstance = createInstance();

  initTranslations(locale, namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default TranslationsProvider;
