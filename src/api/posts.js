import React, { Component } from 'react';
import axios from 'axios';
import constans from '../constans/config'





export  default function fetchPosts (id) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then(res=>res.data)
    .catch(err=>console.log(err));
}
export  function update (post) {
  return axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`,  {post} )
    .then(res=>res.data.post)
    .catch(err=>console.log(err));
}
export  function create(post) {
  return axios.post(`https://jsonplaceholder.typicode.com/posts/`, post)
    .then(res=>res.data)
    .catch(err=>console.log(err));
}
