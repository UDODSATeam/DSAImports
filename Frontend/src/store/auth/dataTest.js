//! ARCHIVO PARA PRUEBAS DE LOGIN

export const gerente = {
    uid: '123456',
    userType: 1,
    email: 'gerentudo@dsaimports.com',
    password: 'testing1',
    displayName: 'Angel Mouzaber'
}

export const vendedor = {
    uid: '654321',
    userType: 2,
    email: 'vendedorudo@dsaimports.com',
    password: 'testing2',
    displayName: 'David Gamboa'
}

export const loginTest = async ({ email, password, cargos }) => {

    return (
        (cargos === 'Gerente' && email === gerente.email && password === gerente.password)
        ?
        {...gerente, ok: true}
        :
        (vendedor.email === email && vendedor.password === password) ? {...vendedor, ok: true} : {ok: false}
    )
}