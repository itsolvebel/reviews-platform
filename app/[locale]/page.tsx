import React from 'react';
import initTranslations from '@/app/i18n';
import TranslationsProvider from './component/TranslationsProvider';
import Hero from './component/LandingPage/Hero';
import Navibar from './component/shared/Navibar/Navibar';
import Footer from './component/shared/Footer/Footer';
import Feedback from './component/LandingPage/Feedback';
import Reputation from './component/LandingPage/Reputation';
import EntireReputationInOnePlace from './component/LandingPage/EntireReputationInOnePlace';
import WhyItSolve from './component/LandingPage/WhyItSolve';
import PioneeringPlatform from './component/LandingPage/PioneeringPlatform';
import UndeniableValueBanner from './component/LandingPage/UndeniableValueBanner';
import SolveApi from './component/LandingPage/SolveApi';

interface HomeProps {
  params: {
    locale: string;
  };
}

const i18nNamespaces = ['landingPage', 'common'];

export default async function Home({ params: { locale } }: HomeProps) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main>
        <Navibar />
        <Hero />
        <Feedback />
        <Reputation />
        <EntireReputationInOnePlace />
        <WhyItSolve />
        <PioneeringPlatform />
        <UndeniableValueBanner />
        <SolveApi />
        <Footer />
      </main>
    </TranslationsProvider>
  );
}
