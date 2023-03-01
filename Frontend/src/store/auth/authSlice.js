import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', // checking, not-authenticated, authenticated
        uid: null,
        email: null,
        displayName: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, { payload }) => {

            state.status = 'authenticated', // checking, not-authenticated, authenticate;
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.errorMessage = null;
            
        },
        logout: (state, { payload }) => {

            state.status = 'not-authenticated'; // checking, not-authenticated, authenticate;
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.errorMessage = payload?.errorMessage; // Si viene un error, se lee. Si no, no se lee.

        },
        checkingCredentials: ( state ) => {
            state.status = 'checking';
        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;