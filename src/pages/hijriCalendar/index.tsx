import React from 'react';

const LazyHijriCalendar = React.lazy(() =>
  import(/* webpackChunkName: "HijriCalendar" */ './hijriCalendar')
);

const HijriCalendar = (props: Record<string, any>) => (
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <LazyHijriCalendar {...props} />
  </React.Suspense>
);

export default HijriCalendar