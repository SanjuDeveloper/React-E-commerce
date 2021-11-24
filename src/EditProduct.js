import { Link, useParams,useNavigate } from 'react-router-dom'
import react,{useState,useEffect} from 'react';
import Header from './Header';

function EditProduct(props)
{
	const navigate=useNavigate();
	const params = useParams(); 
	const[datas,setData]=useState("");
	const[name,setName]=useState('');
	const[price,setPrice]=useState('');
	const[quantity,setQuantity]=useState('');
	const[description,setDescription]=useState('');
	const[image,setImage]=useState('');

	console.warn("props",params.id)
	useEffect( async ()=>{
		let result = await fetch('http://localhost:8000/api/singleproduct/'+params.id);
		result=await result.json();
		setData(result);
		setName(result.name);
		setPrice(result.price);
		setQuantity(result.quantity);
		setDescription(result.description);
		setImage(result.image);

	},[])
	async function updateProduct(id)
	{
		const formData = new FormData();
		formData.append('name',name);
		formData.append('price',price);
		formData.append('quantity',quantity);
		formData.append('description',description);
		formData.append('image',image);

		let result = await fetch("http://localhost:8000/api/updateProduct/"+id,{
			method:"post",			
			body:formData

		});
		console.warn(formData);
		alert("Product edited successfully");
		navigate('/ProductList');
	}

	return(
		<div>
			<Header />
			<div className="col-sm-6 offset-sm-3">
				<h1>Update product</h1>
				<br />
				<input type="text" onChange={(e)=>setName(e.target.value)} defaultValue={datas.name} className="form-control"></input>
				<br />
				<input type="text" onChange={(e)=>setPrice(e.target.value)}  defaultValue={datas.price} className="form-control"></input>
				<br />
				<input type="text" onChange={(e)=>setQuantity(e.target.value)}   defaultValue={datas.quantity} className="form-control"></input>
				<br />
				<input type="text" onChange={(e)=>setDescription(e.target.value)}    defaultValue={datas.description} className="form-control"></input>
				<br />
				<input type="file" onChange={(e)=>setImage(e.target.files[0])} defaultValue={datas.image} className="form-control"></input>
				<br />
				<img style={{width:100}} src={"http://localhost:8000/"+datas.image} />	
				<br />
				<button onClick={()=>{updateProduct(datas.id)}} class="btn btn-primary">Save</button>&nbsp;&nbsp;
				<Link to="/ProductList" ><button class="btn btn-danger">cancel</button></Link>
			</div>
		</div>
	)
}
export default EditProduct