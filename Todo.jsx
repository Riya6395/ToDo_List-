import React from "react";


const Todo =(props)=>{

    return (
    <>
    <div className='lists_div'>
    <i className='bx bxs-x-circle' onClick={()=>{props.onSelect(props.id)}} />
    <li>{props.text} </li>
    </div>
    </>
    );
}

export default Todo;
