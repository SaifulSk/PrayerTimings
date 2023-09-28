import React from 'react';

const LazyDuas = React.lazy(() =>
  import(/* webpackChunkName: "Duas" */ './duas')
);

const Duas = (props: Record<string, any>) => (
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <LazyDuas {...props} />
  </React.Suspense>
);

export default Duas