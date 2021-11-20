import Header from './Header';
import {useNavigate} from 'react-router-dom';
import react,{useState,useEffect} from 'react';
function ProductList()
{
	return(

		<>		  
		   <Header />
			<div className="col-sm-6 offset-sm-3">
                <h1>List Product</h1>
		    </div>
		</>
	)
}
export default ProductList