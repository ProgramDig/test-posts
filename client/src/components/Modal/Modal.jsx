import React from 'react';
import classes from './Modal.module.sass'

const Modal = () => {
    return (
        <div>
            <div id="modal1" className="modal">
                <div className="modal-content">
                    <h4>Оновити пост</h4>
                    <p>A bunch of text</p>
                </div>
                <div className="modal-footer">
                    <button className={`btn modal-close waves-effect red darken-1 ${classes.btn}`}>Відміна</button>
                    <button className={`btn`}>Оновити</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;