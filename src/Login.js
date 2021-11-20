import react,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Header from './Header';
function Login()
{
	const navigate=useNavigate();
	useEffect(()=>{
		if(localStorage.getItem('user-info')){
			navigate('/add')	
		}
	},[])
	return(

		<>
			<Header />
			<h1>Login Page</h1>
		</>
	)
}
export default Login