'use-client';

import './Mail.css';
import Image from 'next/image';
import { useState } from 'react';

export const Mail = () => {
  const [hovered, setHovered] = useState(false);

  const handleHoverIn = () => {
    setHovered(true);
    // console.log('hovered');
  };
  const handleHoverOut = () => {
    setHovered(false);
  };
  return (
    <div
      onMouseOver={handleHoverIn}
      onMouseLeave={handleHoverOut}
      className='maildiv'
    >
      <a href='mailto:jasonebowman@hotmail.com'>
        {hovered && (
          <Image
            className='mailImg'
            src='/mail_icon-pink.svg'
            width={85}
            height={65}
            alt='mail icon butoon'
          />
        )}
        {!hovered && (
          <Image
            className='mailImg'
            src='/mail_icon.svg'
            width={85}
            height={65}
            alt='mail icon butoon'
          />
        )}
      </a>
    </div>
  );
};

export default Mail;
