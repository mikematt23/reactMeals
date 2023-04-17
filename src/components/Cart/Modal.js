import classes from './Modal.module.css'
import { Fragment } from 'react'
import { createPortal } from 'react-dom'
const BackDrop = (props)=>{
  return <div className={classes.backdrop} onClick={props.onCartHandler} ></div>
}
const ModalOverlay = (props)=>{
  return <div className={classes.modal} >
    <div className={classes.content}>{props.children}</div>
  </div>
}

const Modal = (props)=>{
  const portalElement = document.getElementById("overlays")
  return (
    <Fragment>
      {createPortal(<BackDrop onCartHandler = {props.onCartHandler}/>,portalElement)}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    </Fragment>
  )
} 

export default Modal 