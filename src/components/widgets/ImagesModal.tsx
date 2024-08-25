import React, { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { DirectorIDs } from "../../resources/types/applicationTypes";
// @ts-ignore
import { ROUTES } from "./../../apis/endpoints"

type Props = {
    show: boolean
    handleClose: ()=>void
    images: Array<DirectorIDs> | undefined
}

const ImagesModal: React.FC<Props> = ({show, handleClose, images})=>{
    const [activeImageIndex, setActiveImageIndex] = useState(0)

    return <Modal show={show} onHide={handleClose} centered>
    <Modal.Body>
        {
            images != undefined && images.length > 0 ?
            <img src={`${ROUTES.baseUrlRoot}${images[activeImageIndex].directorIds}`} /> : 'No images found'
        }
    </Modal.Body>
    <Modal.Footer>
        {
            images != undefined && images.length > 0 ?
        <Row style={{display: 'flex', justifyContent: 'space-between'}}>
            <Col><span className="btn-next-prev" onClick={activeImageIndex == 0 ? ()=>{} : ()=>setActiveImageIndex(activeImageIndex-1)}>Previous</span></Col>
            <Col><span className="btn-next-prev" onClick={activeImageIndex + 1 == images.length ? ()=>{} : ()=>setActiveImageIndex(activeImageIndex+1)}>Next</span></Col>
        </Row> : ''
        }
    </Modal.Footer>
  </Modal>
}

export default ImagesModal