<template>
    <a :href="href" target="_blank" rel="noopener noreferrer" class="btn">
      <slot></slot>
    </a>
  </template>
  
  <script setup>
  defineProps({
    href: {
      type: String,
      required: true
    }
  })
  </script>
  
  <style scoped> 
  .btn {
    all: unset;
    background-color: rgb(0, 0, 0);
    padding: 10px 14px;
    color: rgb(255, 255, 255);
    width: fit-content;
    height: 20px;
    cursor: pointer;
    border-radius: 20px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
  }
  .btn:hover {
    background-color: rgb(57, 57, 57);
  }
  </style>
  