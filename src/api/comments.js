import React, { Component } from 'react';
import axios from 'axios';
import constans from '../constans/config';


export  default function fetchComments(id) {
  return axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then(res=>res.data)
    .catch(err=>console.log(err));
}
