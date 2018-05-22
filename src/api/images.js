import React, { Component } from 'react';
import axios from 'axios';
import constans from '../constans/config';


export default function fetchFromApi(query){
  return axios.get(`${constans.config.URL}/?key=${constans.config.KEY}&q=${query}&image_type=photo&safesearch=true`)
    .then(res=>res.data.hits)
    .catch(err=>console.log(err));
}
