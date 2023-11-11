import React from 'react';
import { createPortal } from 'react-dom';

const ModalRegister = ({ children }) => {
    return createPortal(
        <div className='bg-slate-300 absolute top-0 left-0 h-full w-full z-20 bg-opacity-90'>
           { children }
        </div>,
        document.getElementById('register-account')
    )
}

export { ModalRegister }