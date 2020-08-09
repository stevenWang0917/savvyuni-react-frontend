import React from 'react';
import { DataContext } from './DataContext';

export const DataWrapper = Component => props => (
  <DataContext.Consumer>
    { context => <Component { ...props } { ...context } />}
  </DataContext.Consumer>
)