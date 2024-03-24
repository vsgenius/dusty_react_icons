import React from 'react';

import { data } from '../JSON/icons';

function Icon() {
  return (
    <>
      {data.map((elem, index) => (
        <i key={index} className={elem}></i>
      ))}
    </>
  );
}

export { Icon };
