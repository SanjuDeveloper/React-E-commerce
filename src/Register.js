import react,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Header from './Header';
function Register()
{
	const [name,setName]=useState("");
	const [email,setemail]=useState("");
	const [password,setPassword]=useState("");
	const navigate=useNavigate();
	useEffect(()=>{
		if(localStorage.getItem('user-info')){
			navigate('/add')
		}
	},[])

	async function signup()
	{
		let formValues = {name,email,password};
		console.warn(formValues);
		let result = await fetch("http://localhost:8000/api/register",{
			method:"post",
			headers:{
				"content-type":"application/json",
				"Accept":"Application/JSON"
			},
			body:JSON.stringify(formValues)
		});
		result=await result.json();
		console.warn(result);
		localStorage.setItem("user-info",JSON.stringify(result));
		navigate('/add');
	}
	return(
		<>		  
		   <Header />
			<div className="col-sm-6 offset-sm-3">
				<h1>User Sign up Page</h1>
				<br />
				<input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter user name" className="form-control"></input>
				<br />
				<input type="text" onChange={(e)=>setemail(e.target.value)} placeholder="Enter user email" className="form-control"></input>
				<br />
				<input type="password" onChange={(e)=>setPassword(e.target.value)}  placeholder="Enter user password" className="form-control"></input>
				<br />	
				<button onClick={signup} class="btn btn-primary">Sign up</button>
			</div>
		</>
	)
}
export default Register