import React, {useContext} from 'react';
import {Routes, Route,Navigate} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routs";
import {Context} from "../index";



const AppRoute = () => {
   const {user} = useContext(Context);
   console.log(user)
    return (

            <Routes>
                {user.isAuth && authRoutes.map(({path, Component}) => <Route key={path} path={path} element={Component} exact/>)
                }


                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component} exact/>
                )}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>

    );
};

export default AppRoute;
