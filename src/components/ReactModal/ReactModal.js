import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

const ReactModal = (props) => {
    console.log(props.details)
    const {strDrink, strDrinkThumb, strCategory, strInstructions, strAlcoholic, strGlass} = props.details;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <>
                <Button variant="primary" onClick={handleShow}>
                    Details
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{strDrink}</Modal.Title>
                    </Modal.Header>
                    <img src={strDrinkThumb} alt="" />
                    <Modal.Body>{strInstructions}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </>
        </div>
    );
};

export default ReactModal;