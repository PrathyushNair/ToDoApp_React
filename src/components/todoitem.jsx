import React from "react"
import styles from "../components/style.module.css"
let Todoitem=({el,deleteitem,length})=>{
    return(
        <div style={{display:"flex"}}>
             <div className={styles.indidiv} key={el.id} onClick={()=>{
            
        }}>{el.value}</div>
        <button style={{color:"white",border:"none",backgroundColor: length%2===0 ? "green":"red"}} onClick={()=>deleteitem(el.id)}>Remove</button>
        </div>
       
    )
        
    
}
export default Todoitem