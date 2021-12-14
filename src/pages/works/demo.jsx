import React,{useState} from 'react';
import { Modal,Button} from 'react-bootstrap';
import './howworks.css'
const Demo = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
    return ( <div>
       <h1 className="maintitle1 " onClick={()=>{
           setShow(true);
        }}>Demo...</h1>

         <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Demo video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
         />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div> );
}
 
export default Demo;