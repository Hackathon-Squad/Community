import React, { useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import Form from "./Form";
import "./form.css";

const CardModal = ({ show, setShow }) => {
  const [temp, setTemp] = useState(false);
  const onButton = () => {
    setTemp(!temp);
    console.log("temp : ");
    console.log(temp);
  };

  // useEffect(() =>
  // setShow(false),
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // [temp])

  return (
    <div>
      <Modal
        open={show}
        onClose={onButton}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Form show={show} setShow={setShow} />
      </Modal>
    </div>
  );
};

export default CardModal;
