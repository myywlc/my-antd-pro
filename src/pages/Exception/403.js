import React from 'react';
import Exception from '../../components/Exception';

const Exception403 = () => (
  <Exception
    type="403"
    desc={'app.exception.description.403'}
    // linkElement={Link}
    backText={'app.exception.back'}
  />
);

export default Exception403;
