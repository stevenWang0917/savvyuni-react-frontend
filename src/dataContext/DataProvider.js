import React, { useState, useEffect } from 'react';
import { getItems, edit, addTag, deleteOne, getItem } from '../axios-helper/helpers'
import { DataContext } from './DataContext';

export const DataProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState({});

  useEffect(()=>{
    getItems(setItems);
  }, [])

  const handleEdit = (id, data) => edit(id, data, setItems);

  const handleAddTag = (data) => addTag(data, setItems);

  const handleDelete = (id) => deleteOne(id, setItems);

  const handleItem = (id) => getItem(id, items, setItem);

  return(
    <DataContext.Provider
      value={{
        items,
        item,
        handleEdit,
        handleAddTag,
        handleDelete,
        handleItem
      }} >
        { children }
    </DataContext.Provider>
  )

}