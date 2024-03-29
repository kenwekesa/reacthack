import React from 'react'

import "./modal.scss"

import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoadingmodalContext } from '../../pages/users/Users'
import { MessagemodalContext } from '../../pages/signup/Signup'

function Loadingmodal(props) {

  const modal_context = useContext(LoadingmodalContext)
  const message_modal_context = useContext(MessagemodalContext)

  let navigate = useNavigate()

  let ok_modal = (f) =>
  {
    message_modal_context.setModalVisibility(false)
    if(!f)
    {
    navigate('/')
    }
  }
  return (
    <div className='modal'>
      {props.type==="load"?
        <div className='modalContainer'> 
                <div className="image">
                    <img src={require('../../images/loading.gif')} alt="Load" />
                </div>
             <h2 className='message'> {props.message}</h2>
             
             </div>
             :
             props.type==="success"?

             <div className='modalContainer'> 
                <div className="image">
                    <img width="350" height= "250" src={require('../../images/success.gif')} alt="Load" />
                </div>
             <h2 className='message success'> {props.message}</h2>
             <div className='btn' onClick={()=>ok_modal(null)}>OK</div>
             
             </div>
             :
             <div className='modalContainer'> 
                <div className="image">
                    <img width="200" height= "150" src={require('../../images/error.gif')} alt="Load" />
                </div>
             <h2 className='message error'> {props.message}</h2>
             <div className='btn' onClick={()=>ok_modal("error")}>OK</div>
             
             </div>
}

              </div>
  )
}

export default Loadingmodal