import React, { useState, Component, memo } from 'react';
import RocketCore from './RocketCore';

//TODO Work Here
export const FunctionalRocket = memo(() => {
  const [initialLaunchTime] = useState(Date.now());

  return <RocketCore initialLaunchTime={initialLaunchTime} />;
})
