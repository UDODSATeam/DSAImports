import { Navigate, Route, Routes } from "react-router-dom"
import { DSARoutes } from "../dsaimports/routes/DSARoutes";
// import { AuthRoutes } from "../auth/routes/AuthRoutes";


export const AppRouter = () => {

    const status = 'authenticated'; //authenticated (demás rutas), not-authenticated (login)

    return (
        <Routes>

            {
                (status === 'authenticated')
                    ? <Route path="/*" element={ <DSARoutes /> } />
                    : <Route path="/auth/*" />
            }

            <Route path='/*' element={ <Navigate to='/auth/login' />} />

            {/* Login */}
            {/* <Route path="/auth/*" element={ <AuthRoutes /> } /> */}

            {/* MainApp */}
            {/* <Route path="/*" element={ <DSARoutes /> } /> */}

        </Routes>
    )
}
