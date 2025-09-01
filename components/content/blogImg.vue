<template>
    <img src="" alt="">
  </template>
  
  <style scoped>
  img {
    max-width: 100%;
    width: auto;
    height: auto;
    margin-top: -40px;
  }
  
  /* Mobile */
  @media (max-width:700px) {
    img {
      min-height: 300px;
      max-width: none; /* remove container limit */
      width: auto;     /* use intrinsic width (image resolution) */
      object-fit: cover;
      overflow-x: scroll;
    }
  }
  </style>
  