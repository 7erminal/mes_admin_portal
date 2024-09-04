import React, { useContext, useState } from "react";
import { Col, ListGroup, Modal, Row } from "react-bootstrap";
import { DirectorIDs, UserBusiness } from "../resources/types/applicationTypes";
// @ts-ignore
import Api from "../apis/apis"
// @ts-ignore
import { ROUTES } from "../apis/endpoints.js"
import ApplicationContext from "../resources/ApplicationContext";
import ImagesModal from "./widgets/ImagesModal.js";
import ViewImageModal from "./widgets/ViewImageModal.js";

type Props = {
    show: boolean
    handleClose: ()=>void
    user: UserBusiness | undefined
}

const UserBusinessInformation: React.FC<Props> = ({show, handleClose, user})=>{
    const applicationContext = useContext(ApplicationContext)

    const [showImages, setShowImages] = useState(false);
    const [showImage, setShowImage] = useState(false)
    const [images, setImages] = useState<Array<DirectorIDs>>();

    const [imageUrl, setImageUrl] = useState("")

    const handleImagesModalClose = () => setShowImages(false);
    const handleImagesModalShow = () => setShowImages(true);

    const handleImageModalClose = () => setShowImage(false);
    const handleImageModalShow = () => {
        setImageUrl(`${ROUTES.baseUrlRoot}${user?.userIdFile}`)
        setShowImage(true);
    }
    
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

    const downloadFile= async (fileType: string, requestId: number)=> {
        var params = {
            "fileType": fileType,
            "requestId": requestId
        }
        await new Api().downloadFile(params, ROUTES.downloadFileUrl).then((response: any)=>{
            // setLoading(false)
            console.log("Response is ...")
            console.log(response)
            if(response.status==200){
                console.log("RESPONSE::: ")
                console.log(response.data)                   
            } else {

            }
          }).catch((error: any)=> {
            console.log("Error returned is ... ")
            console.log(error)
          })
    }

    const viewDirectorIDImages = async (businessDetailId_: number)=>{
        var params = {
            "id": businessDetailId_
        }
        await new Api().post_(params, ROUTES.viewDirectorIdsUrl).then((response: any)=>{
            // setLoading(false)
            console.log("Response is ...")
            console.log(response)
            if(response.status==200){
                console.log("RESPONSE::: ")
                console.log(response.data.Result)
                console.log(response.data)
                setImages(response.data.Result)    
                handleImagesModalShow()               
            } else {

            }
          }).catch((error: any)=> {
            console.log("Error returned is ... ")
            console.log(error)
          })
    }

    return <><Modal show={show} onHide={handleClose} size="lg">
    <Modal.Header closeButton>
      <Modal.Title>Details for {user?.created_by.full_name}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <ListGroup variant="flush">
            <ListGroup.Item className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">User ID</div>
                </div>
                <div>
                    <img src={`${ROUTES.baseUrlRoot}${user?.userIdFile}`} style={{width: '80px'}} className="user_id_image" onClick={handleImageModalShow} />
                </div>
            </ListGroup.Item>
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
                    <div className="fw-bold">Contact Numbers</div>
                </div>
                <div>
                    <b>{user?.created_by.phone_number} \ {user?.alternatePhoneNumber}</b>
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
            <ListGroup.Item className="d-flex justify-content-between align-items-start">
                <button className="btn-block primary-button" type="button" onClick={()=>downloadFile('CERT_OF_INCORPORATION', user!.businessDetailId)}>View Certificate of Incorporation</button>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-start">
                <button className="btn-block primary-button" type="button" onClick={()=>downloadFile('CERT_TO_COMMENCE', user!.businessDetailId)}>View Certificate to commence business</button>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-start">
                <button className="btn-block primary-button" type="button" onClick={()=>downloadFile('CERT_COMPANY_PROFILE', user!.businessDetailId)}>View Certificate for the company's profile</button>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold"><a href="#" className="default-black-link" onClick={()=>viewDirectorIDImages(user!.businessDetailId)}>View director ID images</a></div>
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
            <Col>
                <button type="button" className="btn btn-fill btn-secondary" onClick={handleClose}>Cancel</button>
            </Col>
        </Row>
    </Modal.Body>
  </Modal>
  <ImagesModal show={showImages} handleClose={handleImagesModalClose} images={images} />
  <ViewImageModal show={showImage} handleClose={handleImageModalClose} imageUrl={imageUrl} />
  </>
}

export default UserBusinessInformation