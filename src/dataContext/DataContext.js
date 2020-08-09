import React from 'react';

export const DataContext = React.createContext({
  items: [],
  item: {},
  handleEdit: () => {},
  handleAddTag: () => {},
  handleDelete: () => {},
  handleItem: () => {}
})