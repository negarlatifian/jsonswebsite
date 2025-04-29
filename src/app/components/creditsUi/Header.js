'use-client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { oldSchool, inter } from '@/fonts';
import './headerCredits.css';

const Header = () => {
  const [hovered, setHovered] = useState(false);

  const handleHoverIn = () => {
    setHovered(true);
    // console.log('hovered');
  };
  const handleHoverOut = () => {
    setHovered(false);
  };
  return (
    <header className={`${inter.className} header`}>
      <div className='header__h1div'>
        <h1 className='header__h1'>&</h1>
      </div>
      <div
        onMouseOver={handleHoverIn}
        onMouseLeave={handleHoverOut}
        className='header__backdiv'
      >
        <a href='/'>
          {hovered && (
            <Image
              className='header__backImg'
              src='/back--pink.svg'
              width={85}
              height={65}
              alt='back button hovered'
            />
          )}
          {!hovered && (
            <Image
              className='header__backImg'
              src='/back.svg'
              width={85}
              height={65}
              alt='back button '
            />
          )}
        </a>
      </div>
    </header>
  );
};

export default Header;
