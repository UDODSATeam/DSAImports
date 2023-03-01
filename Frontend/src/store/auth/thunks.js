import { checkingCredentials, login, logout } from "./authSlice"
import { loginTest } from "./dataTest";


export const startLogin = ({email, password, cargos}) => {

    return async( dispatch ) => {
        dispatch( checkingCredentials() );

        //TODO: Colocar el metodo con su conexión al backend

        const {ok, uid, displayName} = await loginTest({email, password, cargos});

        if(!ok) return dispatch( logout( {errorMessage: 'Error en login'}) );
        

        // if( !ok ) return dispatch( logout( {errorMessage}) );

        //Si todo sale bien, se hace el login
        dispatch( login( {uid, displayName, email} ));
        console.log('Login Exitoso')

    }

}