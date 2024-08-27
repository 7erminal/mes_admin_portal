import React from "react";
import { Modal } from "react-bootstrap";
// @ts-ignore
import { ROUTES } from "./../../apis/endpoints"

type Props = {
    show: boolean
    handleClose: ()=>void
    imageUrl: string
}

const ViewImageModal: React.FC<Props> = ({show, handleClose, imageUrl})=>{
    return <Modal show={show} onHide={handleClose} centered>
    <Modal.Body>
        <img src={imageUrl} />
    </Modal.Body>
  </Modal>
}

export default ViewImageModal