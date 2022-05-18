import React from "react";

import  Todoitem from "./todoitem"
let Todolist=({el,deleteitem,listlen})=>{

    return(
      <Todoitem el={el} deleteitem={deleteitem} length={listlen}></Todoitem>
    )
}
export default Todolist