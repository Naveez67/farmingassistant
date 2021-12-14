import { Rating } from "@mui/material";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const Ratingmodel = ({setval,setop,setcal,addrating}) => {
  const [show, setShow] = useState(false);
  const [value, setValue] =useState(5);
  const handleClose = () => {setShow(false)};
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" 
        onClick={handleShow}>
        Add rating
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Give rating to the seller</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
              setval(newValue);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" 
             onClick={()=>{
              setcal(false)
              setop(false);
              setShow(false);
              addrating();
             }}>
            Close
          </Button>
          <Button variant="primary" 
             onClick={()=>{
                 setcal(true)
                 setop(true);
                 setShow(false);
                 addrating();
                }}

          >
            done
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Ratingmodel;
