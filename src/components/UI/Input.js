import classes from './Input.module.css'

const Input = (props)=>{
   return( 
     <div className={classes.input} >
       <label>{props.label}</label>
       <input onChange={props.onChange} type={props.type} value={props.value}  min= '1'/>
     </div>
     )
}


export default Input