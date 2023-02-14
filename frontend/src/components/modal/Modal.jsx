import React from 'react'

import "./modal.scss"

import { useContext } from 'react'
import { ModalContext } from '../trainresults/Results'

function Modal(props) {

    const modal_context = useContext(ModalContext)
  return (
    <div className='modal'>
        <div className='modalContainer'> 

             <h2 className='message'> {props.message}</h2>
             <div className='btn'>OK</div>
             </div>
              </div>
  )
}

export default Modal