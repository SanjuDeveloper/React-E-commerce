import react,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Header from './Header';
function Login()
{
	const navigate=useNavigate();
	const [email,setEmail]=useState("");
	const [password,setPassword]=useState("");

	useEffect(()=>{
		if(localStorage.getItem('user-info')){
			navigate('/add')	
		}
	},[])


	async function login()
	{
		console.warn("data",email,password);
		let userInfo = {email,password};		
		let result = await fetch('http://localhost:8000/api/login',{
			method:"post",
			headers:{
				"content-type":"application/json",
				"Accept":"Application/JSON"
			},
			body:JSON.stringify(userInfo)
		});
		result=await result.json();
		//console.warn(result);
		localStorage.setItem("user-info",JSON.stringify(result));
		navigate('/add');
		

	}
	return(

		<>
			<Header />
			<div className="col-sm-6 offset-sm-3">

			<h1>Login Page</h1>
			<br />
			<input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" className="form-control"></input>
			<br />
			<input type="text" onChange={(e)=>setPassword(e.target.value) }  placeholder="Enter password" className="form-control"></input>
			<br />
				
			<button onClick={login} class="btn btn-success">Login</button>

			</div>			
		</>
	)
}
export default Login