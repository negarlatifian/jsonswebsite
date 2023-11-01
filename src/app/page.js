import Image from 'next/image';
import { oldSchool } from '@/fonts';
// import Mail from '/mail_icon.svg';

export default function Home() {
  return (
    <main className=''>
      <section className={`${oldSchool.className} header`}>
        <div className='header__h1div'>
          <h1 className='header__h1'>J&SON E. BOWMAN</h1>
        </div>
        <div className='header__maildiv'>
          <Image
            className='header__mailImg'
            src='/mail_icon.svg'
            width={85}
            height={65}
            alt='mail icon butoon'
          />
        </div>
      </section>
    </main>
  );
}
