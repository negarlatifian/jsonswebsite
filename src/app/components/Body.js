'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useState } from 'react';
import './Body.css';
import { urban } from '@/fonts';
import { oldSchool } from '@/fonts';
import Mail from './Mail';

const Video = dynamic(() => import('./VideoPlayer.js'));
const Body = () => {
  const [hovered, setHovered] = useState(false);

  const handleHoverIn = () => {
    setHovered(true);
  };
  const handleHoverOut = () => {
    setHovered(false);
  };
  return (
    <section className={`${urban.className} body__container`}>
      <div className='video__container'>
        <Video />
        <div className='video__caption'>
          <p>
            Untitled (Performance for Cyber Broadcast).
            <br /> Commissioned by Franklin Furnace,
            <br /> New York City, USA. 1998.
            <br />
            <br />
            Video: Courtesy of Frankin Furnace.
          </p>
        </div>
      </div>
      <div className='bio__container'>
        <ul className='bio__container__ul'>
          <li className='bio__container__li--1st'>
            <p className='bio__p bio__p--large'>
              I am an artist with a curatorial practice.
              <br />
              <br /> My artworks and projects address the coercion of publics
              through participatory methods. I am non-monogamous with media. I
              rarely make anything that is exhibited in my name. I set up
              conditions. Projects begin with phantasies that are then developed
              by the constituents that I work with. These are then further
              conditioned by artisanship.
            </p>
            <Mail className='bio__mail--mobile' />
          </li>
          <li className='bio__container__li bio__container__li__video'>
            <Video />
            <div className='video__caption'>
              <p>
                Untitled (Performance for Cyber Broadcast).
                <br /> Commissioned by Franklin Furnace,
                <br /> New York City, USA. 1998.
                <br />
                <br />
                Video: Courtesy of Frankin Furnace.
              </p>
            </div>
          </li>
          <li className='bio__ul__li bio__container__li--last'>
            <Link
              href='https://www.corahillebrand.se/'
              className={`bio__link ${hovered && 'bio__link--hovered'}`}
              onMouseOver={handleHoverIn}
              onMouseLeave={handleHoverOut}
            >
              <ul className='bio__link__ul'>
                <li className='bio__ul__li'>
                  <h2 className={`${oldSchool.className} bio__h2`}>
                    TALK TO THE HAND
                  </h2>
                  <p className='bio__p bio__p--small'>
                    17 November — 9 December 2023
                  </p>
                </li>
                <li className='bio__ul__li'>
                  <p className='bio__p bio__p--small'>
                    Vernissage 17 November 17.00–20.00
                  </p>
                  <p className='bio__p bio__p--small'>Live performance 18.00</p>
                </li>
                <li className='bio__ul__li'>
                  <p className='bio__p bio__p--small'>
                    Galleri Cora Hillerbrand
                  </p>
                  <p className='bio__p bio__p--small'>Gothenburg, Sweden</p>
                </li>
                <li className='bio__ul__li'>
                  <p className='bio__p bio__p--small bio__p__last'>
                    An exhibition of prototypes for new thoughts and for
                    previous thoughts being re-thought.
                  </p>
                </li>
              </ul>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Body;
