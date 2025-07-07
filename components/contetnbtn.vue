<template>
    <button class="btn">
        <slot> </slot>
    </button>
    </template>
    
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
        }
        .btn:hover {
            background-color: rgb(57, 57, 57);
        }
    </style>
    