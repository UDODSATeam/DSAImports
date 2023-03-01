import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "../../hooks";
import { startLogin } from '../../store/auth/thunks';

const form = {
    cargos: '',
    email: '',
    password: '',
}

export const LoginPage = () => {

    const dispatch = useDispatch();
    const { cargos, email, password, onInputChange, formState } = useForm(form);
    const { status } = useSelector(state => state.auth);

    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const onSubmit = (event) => {
        event.preventDefault();

        console.log(formState);
        dispatch(startLogin(formState));


    }

    return (
        <form onSubmit={onSubmit}>
            <div className='mx-6 md:flex h-screen md:justify-between'>
                <div className='flex flex-col gap-4 max-w-sm md:mx-auto md:w-1/2'>
                    <div className='flex justify-center items-center gap-4 font-roboto text-xl mt-20 mb-16'>
                        <img src="/LogoIcon.png" alt="LogoIcon" />
                        <h1>DSA Imports</h1>
                    </div>
                    <div>
                        <h2 className='font-roboto text-3xl font-bold mb-2'>DSA Imports</h2>
                        <p className='text-gray-500 text-center'>Por favor ingresa tus datos para acceder a tu cuenta</p>
                    </div>
                    <div className='flex flex-col gap-4 mb-7'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="cargo" className='text-gray-600 font-roboto'>Cargo</label>
                            <select
                                name="cargos"
                                id="cargo"
                                placeholder='Selecciona tu cargo'
                                className='border rounded-md py-2 px-4'
                                value={cargos}
                                onChange={onInputChange}
                            >
                                <option value="" >Selecciona tu cargo</option>
                                <option value="Admin">Admin</option>
                                <option value="Gerente">Gerente</option>
                                <option value="Vendedor">Vendedor</option>
                                <option value="Cobrador">Cobrador</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="email" className='text-gray-600 font-roboto'>Email</label>
                            <input
                                type="email"
                                placeholder='gerentudo@example.com'
                                name="email"
                                id='email'
                                value={email}
                                className='border rounded-md py-2 px-4' onChange={onInputChange}
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="password" className='text-gray-600 font-roboto'>Contraseña</label>
                            <input
                                type="password"
                                placeholder='*********'
                                name="password"
                                id="password"
                                value={password}
                                className='border rounded-md py-2 px-4' onChange={onInputChange}
                            />
                        </div>
                    </div>

                    <button
                        className='bg-black text-white font-roboto rounded-md p-3'
                        disabled={isAuthenticating}
                    >
                        Ingresar
                    </button>

                </div>

                <div className='bg-loginImage w-1/2 bg-contain bg-right bg-no-repeat'></div>
            </div>
        </form>
    )
}
