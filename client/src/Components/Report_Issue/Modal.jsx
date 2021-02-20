import React, { useState, useEffect } from 'react';
import Modal from "@material-ui/core/Modal";
import Form from './Form';
import './form.css';

const CardModal = (props) => {

    const [temp, setTemp ] = useState(false);
    const onButton = () => setTemp(!temp);

    const { show, setShow } = props;

    useEffect(() =>
    setShow(false),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [temp])


    return(
        <div>
            <Modal open={show} onClose={onButton} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
              <Form/>
            </Modal>
        </div>
    );
};

export default CardModal;