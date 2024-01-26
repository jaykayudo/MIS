import { useEffect } from 'react';
import {Route, Routes, BrowserRouter, useNavigate} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import AuthCover from '../components/authcover/AuthCover';
import Paths from './constant';

const Login = lazy(()=>(import('../pages/login/Login')));
const ForgotPassword = lazy(()=>(import('../pages/forgotpassword/ForgotPassword')));
const CreatePassword = lazy(()=>(import('../pages/createpassword/CreatePassword')));

const NotFound = ()=>{
    const navigate = useNavigate();
    useEffect(()=>{
        navigate(Paths.login)
    },[])
    
    return (
        <></>
    )
}

const LoginRouter = ()=>{
    return (
            <BrowserRouter>
            <AuthCover>
            <Suspense>
                <Routes>
                    <Route path={Paths.login} element={<Login />}/>
                    <Route path={Paths.forgotpassword} element={<ForgotPassword />}/>
                    <Route path={Paths.createpassword} element={<CreatePassword />}/>
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Suspense>
            </AuthCover> 
            </BrowserRouter>
        
    )
}
export default LoginRouter;