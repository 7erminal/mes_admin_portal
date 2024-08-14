import React, { useContext } from "react";
import { Col, ListGroup, Modal, Row } from "react-bootstrap";
import { UserBusiness } from "../resources/types/applicationTypes";
// @ts-ignore
import Api from "../apis/apis"
// @ts-ignore
import { ROUTES } from "../apis/endpoints.js"
import ApplicationContext from "../resources/ApplicationContext";

type Props = {
    show: boolean
    handleClose: ()=>void
    user: UserBusiness | undefined
}

const UserBusinessInformation: React.FC<Props> = ({show, handleClose, user})=>{
    const applicationContext = useContext(ApplicationContext)
    
    const authorize = async (command: string)=>{
        const params = {
            'businessId': user?.businessDetailId.toString(),
            'command': command
        }

        await new Api().post_(params, ROUTES.authorizeBusinessDetails).then((response: any)=>{
            // setLoading(false)
            console.log("Response is ...")
            console.log(response)
            if(response.status==200){
                console.log("RESPONSE::: ")
                console.log(response.data)
                applicationContext?.getUsers()
                    
            } else {

            }
          }).catch((error: any)=> {
            console.log("Error returned is ... ")
            console.log(error)
          })

          handleClose()
    }

    return <Modal show={show} onHide={handleClose} size="lg">
    <Modal.Header closeButton>
      <Modal.Title>Details for {user?.created_by.full_name}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <ListGroup variant="flush">
            <ListGroup.Item className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Business Name</div>
                </div>
                <div>
                    <b>{user?.companyName}</b>
                </div>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Business Registration Number</div>
                </div>
                <div>
                    <b>{user?.businessRegistrationNumber}</b>
                </div>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Nature of the Business</div>
                </div>
                <div>
                    <b>{user?.natureOfBusiness}</b>
                </div>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Postal Address</div>
                </div>
                <div>
                    <b>{user?.postalAddress}</b>
                </div>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Street Address</div>
                </div>
                <div>
                    <b>{user?.streetAddress}</b>
                </div>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Date requested</div>
                </div>
                <div>
                    <b>{user?.created_at}</b>
                </div>
            </ListGroup.Item>
        </ListGroup>
        <Row className="my-4">
            <Col>
                <button type="button" className="btn btn-fill btn-primary" onClick={()=>authorize("ACCEPT")}>Authorize</button>
            </Col>
            <Col>
                <button type="button" className="btn btn-fill btn-danger" onClick={()=>authorize("REJECT")}>Decline</button>
            </Col>
        </Row>
    </Modal.Body>
  </Modal>
}

export default UserBusinessInformation