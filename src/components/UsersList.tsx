import React, { useState } from "react";
import { UserBusiness } from "../resources/types/applicationTypes";
import UserBusinessInformation from "./UserBusinessInformation";

type Props = {
    title: string
    users: Array<UserBusiness> | undefined | null
    filter: number
}

const UsersList: React.FC<Props> = ({title, users, filter})=>{

    const [showUserDetails, setShowUserDetails] = useState(false)
    const [user, setUser] = useState<UserBusiness>()

    const handleClose = () => setShowUserDetails(false);

    const viewUser = (ui: UserBusiness)=>{
        // Redirect the user if verified or not verified

        if(ui.created_by.is_verified==1){

        } else {
            setUser(ui)
            setShowUserDetails(true);
        }
    }

    return <div className="row">
    <div className="col-md-12">
      <div className="card ">
        <div className="card-header">
          <h4 className="card-title"> {title}</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table tablesorter " id="">
              <thead className=" text-primary">
                <tr>
                  <th>
                    #
                  </th>
                  <th>
                    Owner
                  </th>
                  <th>
                    Company name
                  </th>
                  <th className="text-center">
                    Nature of Business
                  </th>
                  <th className="text-center">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                    users?.filter((ui: UserBusiness)=>filter==2 || ui.created_by.is_verified == filter).map((ui: UserBusiness, i: number)=>{
                      console.log("is verified is "+ui.created_by.is_verified)
                        return <tr key={i} className="user-business-tile" onClick={()=>viewUser(ui)}>
                        <td>
                          {ui.businessDetailId}
                        </td>
                        <td>
                          {ui.created_by.full_name}
                        </td>
                        <td>
                          {ui.companyName}
                        </td>
                        <td className="text-center">
                          {ui.natureOfBusiness}
                        </td>
                        <td className="text-center">
                          {ui.created_by.is_verified == 0 ? "Not Verified" : "Verified"}
                        </td>
                      </tr>
                    })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <UserBusinessInformation show={showUserDetails} handleClose={handleClose} user={user!} />
  </div>
}

export default UsersList