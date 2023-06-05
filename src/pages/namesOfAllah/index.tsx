import React from 'react';

const LazyNamesOfAllah = React.lazy(() =>
  import(/* webpackChunkName: "NamesOfAllah" */ './namesOfAllah')
);

const NamesOfAllah = (props: Record<string, any>) => (
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <LazyNamesOfAllah {...props} />
  </React.Suspense>
);

export default NamesOfAllah