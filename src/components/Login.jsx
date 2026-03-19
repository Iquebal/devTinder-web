import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
const navigate = useNavigate();
    const [emailId, setEmailId] = useState("virat@gmail.com");
    const [password, setPassword] = useState("Test@123");
    const dispatch = useDispatch();
    const {error, setError} = useState("");

    const handleLogin = async () => {
     
    try{
      
      const res = await  axios.post(BASE_URL + "/login" , {emailId, password

      }, { withCredentials: true }
    );
      // console.log(res.data);
       dispatch(addUser(res.data));
      return navigate("/")
    }
    catch(err){
      setError(err?.response?.data || "Something went wrong");
     
    }
       }

    return (
        <div className="flex justify-center my-10">
       <div className="card bg-neutral  w-96">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Login</h2>
      <div>
        <fieldset className="fieldset">
  <legend className="fieldset-legend text-white">Email ID {emailId}</legend>
  <input type="text" className="input"  value={emailId} onChange={(e) => setEmailId(e.target.value)}/>
 
</fieldset>
      </div>
      <div>
        <fieldset className="fieldset">
  <legend className="fieldset-legend text-white">Password</legend>
  <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)}/>
 
</fieldset>
      </div>
      <div className="text-red-500">{error}</div>
    <div className="card-actions justify-end">
     
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  </div>
</div></div>
    )
}

export default Login;