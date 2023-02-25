import React from 'react';

const LazyLearnArabic = React.lazy(() =>
  import(/* webpackChunkName: "LearnArabic" */ './learnArabic')
);

const LearnArabic = (props: Record<string, any>) => (
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <LazyLearnArabic {...props} />
  </React.Suspense>
);

export default LearnArabic