import React from 'react';
import {FaTimes} from 'react-icons/fa';
import { useGlobalContext } from '../Context';

const  Modal =()=>{
    const {isModalOpen, closeModal} = useGlobalContext();
    return(
        <div className={ isModalOpen ? 'modal-overlay show' : 'modal-overlay'}>
            <div className='content-box'>
                <header className='header'>
                    <h1>SnazzyBar</h1>
                    <button className='close-btn' onClick={closeModal}><FaTimes/> </button>
                    </header>
                <p>Thanks for your patronage, your drink will be ready in 3minutes</p>
            </div>

        </div>
    )
}
export default Modal