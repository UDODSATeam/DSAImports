import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { DSARoutes } from "../dsaimports/routes/DSARoutes";


export const AppRouter = () => {

    const {status} = useSelector( state => state.auth );

    // const status = 'not-authenticated'; //authenticated (demás rutas), not-authenticated (login)
    
    return (
        <Routes>

            {
                (status === 'authenticated')
                    ? <Route path="/*" element={ <DSARoutes /> } />
                    : <Route path="/auth/*" element={ <AuthRoutes /> } />
            }

            <Route path='/*' element={ <Navigate to='/auth/login' />} />

            {/* Login */}
            {/* <Route path="/auth/*" element={ <AuthRoutes /> } /> */}

            {/* MainApp */}
            {/* <Route path="/*" element={ <DSARoutes /> } /> */}

        </Routes>
    )
}
