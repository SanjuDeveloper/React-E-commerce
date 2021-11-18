import Header from './Header';
import {useNavigate} from 'react-router-dom';
import react,{useEffect} from 'react';
function AddProduct()
{
	const navigate=useNavigate();
	useEffect(()=>{
		if(! localStorage.getItem('user-info')){
			navigate('/login')
		}
	},[])
	return(

		<>
			<Header />
			<h1>AddProduct Page</h1>
		</>
	)
}
export default AddProduct