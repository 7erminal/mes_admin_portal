import React, { useState, useContext } from "react";
import { Col, FloatingLabel, Modal, Row, Form } from "react-bootstrap";
import { DirectorIDs } from "../../resources/types/applicationTypes";
// @ts-ignore
import { ROUTES } from "./../../apis/endpoints"
import ApplicationContext from "../../resources/ApplicationContext";
import SecondaryButton from "./SecondaryButton";

type Props = {
    show: boolean
    handleClose: ()=>void
    onSubmit: ()=>void
}

const AddCredentialsModal: React.FC<Props> = ({show, handleClose, onSubmit})=>{
    const applicationContext = useContext(ApplicationContext)

    const onSubmit_ = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        onSubmit()
        handleClose()
    }

    return <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className="credential-header">
            <Modal.Title>Enter business credentials</Modal.Title>
        </Modal.Header>
    <Modal.Body>
        <Form onSubmit={onSubmit_}>
            <Row>
                <Col>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" value={applicationContext?.username} onChange={(e)=>applicationContext?.setUsername(e.target.value)} placeholder="Username" className="custom-input-login-r" required/>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={applicationContext?.password} onChange={(e)=>applicationContext?.setPassword(e.target.value)} placeholder="Password" className="custom-input-login-r" required/>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col>
                        <Form.Label>Sender ID</Form.Label>
                        <Form.Control type="text" value={applicationContext?.senderId} onChange={(e)=>applicationContext?.setSenderId(e.target.value)} placeholder="Sender ID" className="custom-input-login-r" required/>
                </Col>
            </Row>
            <SecondaryButton title="Add" type="submit" navigateTo={()=>{}} />
        </Form>
    </Modal.Body>
    <Modal.Footer>
        
    </Modal.Footer>
  </Modal>
}

export default AddCredentialsModal