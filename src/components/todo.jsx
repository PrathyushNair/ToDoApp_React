import React from 'react'
import Todolist from "./todolist"
import styles from "../components/style.module.css"
import { v4 as uuidv4 } from 'uuid';
let Tinput=()=>{
    const [input,setInput]=React.useState("")
    const [list,setList]=React.useState([])
    let getinput=(e)=>{
       setInput(e.target.value)
        
    }
let deleteitem=(id)=>{
    setList(list.filter((el)=>el.id!==id))
}  
    
return (
        <div>
            <input className={styles.inputt}value={input} onChange={getinput} placeholder="Enter Task"></input>
            <button className={styles.bt} onClick={()=>{
                console.log(input)
                list.push({id:uuidv4(),value:input}) ///Doubt here
                setList(list)
                console.log(list)
                setInput("")
            }}>Add Task
            </button>
            <div>
            <h3>Total task:{list.length}</h3>
            {list.map((el)=>(
               <div style={{width:"40%",margin:"auto",marginBottom:"25px",backgroundColor:list.length%2===0 ? " green":" red"}}>
                   <Todolist el={el} deleteitem={deleteitem} listlen={list.length}></Todolist>
                </div>
            ))}
            
            </div>
           
        </div>
        
    )
}
export default Tinput