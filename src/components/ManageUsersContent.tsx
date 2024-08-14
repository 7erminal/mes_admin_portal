import React, { useContext, useEffect, useState } from "react";
import Sidebar from "./SideBar";
import TopNav from "./TopNav";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import Footer from "./Footer";
// @ts-ignore
import Api from "../apis/apis"
// @ts-ignore
import { ROUTES } from "../apis/endpoints.js"
import { UserBusiness } from "../resources/types/applicationTypes.js";
import UsersList from "./UsersList.js";
import ApplicationContext from "../resources/ApplicationContext.js";

const ManageUsersContent: React.FC = ()=>{
    const applicationContext = useContext(ApplicationContext)

    useEffect(()=>{
        applicationContext?.getUsers()
    },[])

    return <>
    <Sidebar page="users" />
    <div className="main-panel">
        <TopNav />
        <div className="modal modal-search fade" id="searchModal" role="dialog" aria-labelledby="searchModal" aria-hidden="true">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="SEARCH" />
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <i className="tim-icons icon-simple-remove"></i>
                </button>
                </div>
            </div>
            </div>
        </div>
        {/* <!-- End Navbar --> */}
        <div className="content">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h5 className="title">User stats</h5>
                <p className="category">Authorize and manage users for the customer portal</p>
              </div>
              <div className="card-body all-icons"> 
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card card-chart">
                        <div className="card-header">
                            <h5 className="card-category">Total Verified Users</h5>
                            <h3 className="card-title"><i className="tim-icons icon-bell-55 text-primary"></i> {applicationContext?.userBusiness?.filter((ui: UserBusiness)=>ui.created_by.is_verified==1).length}</h3>
                        </div>
                        <div className="card-body">
                            <div className="chart-area">
                            <canvas id="chartLinePurple"></canvas>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card card-chart">
                        <div className="card-header">
                            <h5 className="card-category">Total Unverified Users</h5>
                            <h3 className="card-title"><i className="tim-icons icon-delivery-fast text-info"></i> {applicationContext?.userBusiness?.filter((ui: UserBusiness)=>ui.created_by.is_verified==0).length}</h3>
                        </div>
                        <div className="card-body">
                            <div className="chart-area">
                            <canvas id="CountryChart"></canvas>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card card-chart">
                        <div className="card-header">
                            <h5 className="card-category">Verified Today</h5>
                            <h3 className="card-title"><i className="tim-icons icon-send text-success"></i> {applicationContext?.userBusiness?.filter((ui: UserBusiness)=>ui.created_by.is_verified==1).length}</h3>
                        </div>
                        <div className="card-body">
                            <div className="chart-area">
                            <canvas id="chartLineGreen"></canvas>
                            </div>
                        </div>
                        </div>
                    </div>
                    Extend
                </div>
            </div>
                </div>
            </div>
            </div>

            <Row>
                    <Col md={12} xs={12}>
                        <Tabs
                            defaultActiveKey="Verified Users"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                            fill
                            >
                            <Tab eventKey="Verified Users" title="Verified Users">
                                <UsersList title="Verified Users" users={applicationContext?.userBusiness?.filter((ub: UserBusiness)=>ub.active!=6)} filter={1} />
                            </Tab>
                            <Tab eventKey="profile" title="Unverified Users">
                                <UsersList title="Unverified Users" users={applicationContext?.userBusiness?.filter((ub: UserBusiness)=>ub.active!=6)} filter={0} />
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
        </div>
        <Footer />
</div>

    </>
}

export default ManageUsersContent