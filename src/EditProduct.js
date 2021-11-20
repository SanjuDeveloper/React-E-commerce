import {useNavigate} from 'react-router-dom';
import react,{useEffect} from 'react';
import Header from './Header';
function EditProduct()
{
	const navigate=useNavigate();
	return(
		<div>
			<Header />
			<h1>editProduct Page</h1>
		</div>
	)
}
export default EditProduct