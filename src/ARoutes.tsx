import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion"; 

import HomePage from "./pages/HomePage";
import ManageUsers from "./pages/ManageUsersPage";
import Loading from "./components/widgets/Loading";
import ApplicationContext from "./resources/ApplicationContext";

const ARoutes: React.FC = () => {
  const applicationContext = useContext(ApplicationContext)

  return <AnimatePresence>
              <Routes>
                  {/* <Route path="*" element={<NotFoundPage />} /> */}
                  {/* <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} /> */}
                  <Route path='/' element={<HomePage />} />
                  <Route path='/manage-users' element={<ManageUsers />} />
              </Routes>
              <Loading show={applicationContext!.loading}/>
          </AnimatePresence>
}

export default ARoutes;