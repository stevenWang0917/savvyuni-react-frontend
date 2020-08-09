import Axios from 'axios';
import { API } from './config.api'

export const getItems = async(setter) => {
  try{
    const res = await Axios.get(`${API}/jobs`);
    setter(res.data);
  }catch(e){
    console.log(e)
  }
}

export const getItem = async(id, items, setter) => {
  const item = items.find(e => e.id === id)
  setter(item);
}

export const edit = async(id, data, setter) => {
  try{
    await Axios.put(`${API}/update/content/${id}`, data);
    getItems(setter);
  }catch(e){
    console.log(e)
  }
}

export const addTag = async(data, setter) => {
  try{
    await Axios.put(`${API}/update/tag`, {tag: data});
    getItems(setter);
  }catch(e){
    console.log(e)
  }
}

export const deleteOne = async(id, setter) => {
  try{
    await Axios.put(`${API}/delete/${id}`, id);
    getItems(setter);
  }catch(e){
    console.log(e)
  }
}