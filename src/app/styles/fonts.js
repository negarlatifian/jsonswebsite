import localFont from 'next/font/local';

const urban = localFont({
  src: [
    {
      path: './fonts/UrbanGroteskTRIAL-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/UrbanGroteskTRIAL-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/UrbanGroteskTRIAL-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/UrbanGroteskTRIAL-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
});

const grotesk = localFont({ src: '/fonts/OldschoolGroteskVarTrial.ttf' });

export { grotesk, urban };
