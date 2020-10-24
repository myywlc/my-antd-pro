import React from 'react';
// import Link from 'umi/link';
import Exception from '../components/Exception';

export default () => (
  <Exception
    type="404"
    // linkElement={Link}
    desc={'app.exception.description.404' }
    backText={'app.exception.back'}
  />
);
