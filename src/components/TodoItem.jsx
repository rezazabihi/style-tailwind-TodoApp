/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
// import styled from '@emotion/styled';
const TodoItem=({name, name2 , handleComplete  ,handleDelete} ) =>{

  const OnDelete = () => {
handleDelete();
  };
  const OnComplete = () => {
    handleComplete();
  };
  
   
//   const Button = styled.button`
//   padding: 32px;
//   background-color: hotpink;
//   font-size: 24px;
//   border-radius: 4px;
//   color: black;
//   font-weight: bold;
//   &:hover {
//     color: white;
//   }
// `

// render(<Button>This my button component.</Button>)
  return (
    
    <div className="justify-center items-center my-6 min-w-80 flex">
    <p className=' mx-2 m-1 text-violet-950'> {name}</p>
    <p className=' mx-2 m-1 text-violet-950'>{name2}</p>
      <button
        onClick={OnDelete}
          className="flex m-1 bg-red-800 hover:bg-red-500 text-white font-bold py-2 px-3 border-b-2 border-x-red-9 rounded rounded-b-md"
      >
        delete
      </button>

      <button
        onClick={OnComplete}
        className="flex m-1 bg-blue-900 hover:bg-blue-400 text-white font-bold py-2 px-3 border-b-2  rounded rounded-b-md"
      >
        complete
      </button>
    </div>
  );
};

export default TodoItem;
