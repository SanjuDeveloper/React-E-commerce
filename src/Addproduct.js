import Header from './Header';
import {useNavigate} from 'react-router-dom';
import react,{useEffect} from 'react';
function AddProduct()
{
	const navigate=useNavigate();
	return(

		<>
			<Header />
			<h1>AddProduct Page</h1>
		</>
	)
}
export default AddProduct