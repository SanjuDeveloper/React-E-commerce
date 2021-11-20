import Header from './Header';
import {useNavigate} from 'react-router-dom';
import react,{useState,useEffect} from 'react';
function AddProduct()
{
	const navigate=useNavigate();
	const[name,setName]=useState('');
	const[price,setPrice]=useState('');
	const[quantity,setQuantity]=useState('');
	const[description,setDescription]=useState('');
	const[image,setImage]=useState('');

	async function addProduct()
	{
		console.warn(name,price,quantity,description,image)
		const formData = new FormData();
		formData.append('name',name);
		formData.append('price',price);
		formData.append('quantity',quantity);
		formData.append('description',description);
		formData.append('image',image);

		let result = await fetch("http://localhost:8000/api/addproduct",{
			method:"post",			
			body:formData

		});
		alert("product added successfully");
		navigate('/update');



	}
	return(

		<>		  
		   <Header />
			<div className="col-sm-6 offset-sm-3">
				<h1>Add Product</h1>
				<br />
				<input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter product name" className="form-control"></input>
				<br />
				<input type="text" onChange={(e)=>setPrice(e.target.value)} placeholder="Enter product price" className="form-control"></input>
				<br />
				<input type="text" onChange={(e)=>setQuantity(e.target.value)}  placeholder="Enter product quantity" className="form-control"></input>
				<br />
				<input type="text" onChange={(e)=>setDescription(e.target.value)}  placeholder="Enter product description" className="form-control"></input>
				<br />
				<input type="file" onChange={(e)=>setImage(e.target.files[0])} className="form-control"></input>
				<br />	
				<button onClick={addProduct} class="btn btn-primary">Save</button>
			</div>
		</>
	)
}
export default AddProduct