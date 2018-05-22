import React, { Component } from 'react';
import axios from 'axios';
import constans from '../constans/config'


export default function fetchUsers () {
  return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.data)
    .catch(err=>console.log(err))
}
