import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Results from './components/Results';
import Issues from './components/Issues';
import Features from './components/Features';
import Field from './components/Field';
import CTA from './components/CTA';
import CaseStudy from './components/CaseStudy';
import Example from './components/Example';
import Consultants from './components/Consultants';
import Support from './components/Support';
import Choice from './components/Choice';
import ConsultantFlow from './components/ConsultantFlow';
import PlanPrice from './components/PlanPrice';
import ContractFlow from './components/ContractFlow';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="container" id="top">
      <Header />

      <div id="js-overlay" className=""></div>

      <main>
        <Hero />

        {/* Scrolling logo placeholder */}
        <div className="scrolling-logo"></div>

        {/* Data-driven results */}
        <Results />

        {/* Problems solved */}
        <Issues />

        {/* 4 Features */}
        <Features />

        {/* Service areas */}
        <Field />

        {/* CTA Section */}
        <CTA />

        {/* Case Studies */}
        <CaseStudy />

        {/* Self case example */}
        <Example />

        {/* SEO Consultants */}
        <Consultants />

        {/* Support structure */}
        <Support />

        {/* Two support methods */}
        <Choice />

        {/* CTA Section */}
        <CTA />

        {/* Consulting Flow */}
        <ConsultantFlow />

        {/* Plan and Price */}
        <PlanPrice />

        {/* Contract Flow */}
        <ContractFlow />

        {/* FAQ */}
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default App;
