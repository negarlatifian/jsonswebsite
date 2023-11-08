'use client';
import React from 'react';
import './credits.css';

import Header from '../components/creditsUi/Header';
import CreditsP from '../components/creditsUi/CreditsP';

const page = () => {
  return (
    <section className='credits__section'>
      <Header />
      <CreditsP />
    </section>
  );
};

export default page;
