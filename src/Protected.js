import react,{useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function Login(props)
{
    let component = props.component
	const navigate=useNavigate();
	useEffect(()=>{
		if(localStorage.getItem('user-info')){
			navigate('/add')
		}
	},[])
	return(

		<>
			<component />			
		</>
	)
}
export default Login