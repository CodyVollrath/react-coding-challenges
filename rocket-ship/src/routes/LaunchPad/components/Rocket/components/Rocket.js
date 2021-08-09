import React, { useState, Component } from 'react';
import RocketCore from './RocketCore';

//TODO Work Here
export const FunctionalRocket = () =>  {
  const [initialLaunchTime] = useState(Date.now());

  return <RocketCore initialLaunchTime={initialLaunchTime} />;
}
