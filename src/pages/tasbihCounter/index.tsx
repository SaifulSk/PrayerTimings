import React from 'react';

const LazyTasbihCounter = React.lazy(() =>
  import(/* webpackChunkName: "TasbihCounter" */ './tasbihCounter')
);

const TasbihCounter = (props: Record<string, any>) => (
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <LazyTasbihCounter {...props} />
  </React.Suspense>
);

export default TasbihCounter