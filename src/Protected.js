import react,{useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Addproduct from './Addproduct';
import EditProduct from './EditProduct';

function Protected(props)
{
	//let component = props.component
	let compFromProp = props.compRefr
	let compReturn;
	const navigate=useNavigate();
	useEffect(()=>{
		if(!localStorage.getItem('user-info')){
			navigate('/login')	
		}
	},[])

	if(compFromProp === "login"){
		compReturn = <Login />
	}else if(compFromProp == "Addproduct"){
		compReturn = <Addproduct />
	}else if(compFromProp === "EditProduct"){
		compReturn = <EditProduct />
	}else if(compFromProp === "Register"){
		compReturn = <Register />
	}
	return(

		compReturn

		// <>
		// 	<component />			
		// </>
	)
}
export default Protected