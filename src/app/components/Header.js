'use-client';
import Image from 'next/image';
import { useState } from 'react';
import { oldSchool } from '@/fonts';
import Link from 'next/link';

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
    <header className={`${oldSchool.className} header`}>
      <div className='header__h1div'>
        <h1 className='header__h1'>
          J
          <Link href='/credits' className='header__h1__link'>
            &
          </Link>
          SON E. BOWMAN
        </h1>
      </div>
      <div
        onMouseOver={handleHoverIn}
        onMouseLeave={handleHoverOut}
        className='header__maildiv'
      >
        <a href='mailto:jasonebowman@hotmail.com'>
          {hovered && (
            <Image
              className='header__mailImg'
              src='/mail_icon-pink.svg'
              width={85}
              height={65}
              alt='mail icon butoon'
            />
          )}
          {!hovered && (
            <Image
              className='header__mailImg'
              src='/mail_icon.svg'
              width={85}
              height={65}
              alt='mail icon butoon'
            />
          )}
        </a>
      </div>
    </header>
  );
};

export default Header;
