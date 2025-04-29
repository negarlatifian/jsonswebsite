import localFont from 'next/font/local';

const urban = localFont({
  src: [
    {
      path: '/fonts/UrbanGroteskTRIAL-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '/fonts/UrbanGroteskTRIAL-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '/fonts/UrbanGroteskTRIAL-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/UrbanGroteskTRIAL-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
});

const oldSchool = localFont({
  src: '/fonts/OldschoolGroteskVarTrial.ttf',
});

const inter = localFont({
  // src: '/fonts/Inter-VariableFont.ttf',
  src: '/fonts/Inter-VariableFont.ttf',
});

export { oldSchool, urban, inter };
