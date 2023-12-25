import React,{useState} from 'react'
import './CSS/LoginSignup.css'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';

const LoginSignup = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name:"",
    email:"",
    pass:"",
  });

  const [errorMsg,setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission=()=>{
    if(!values.name||!values.email||!values.pass){
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass).then(
      async(res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user,{
          displayName: values.name,
        });
      navigate("/signup");
      }
    )
    .catch((err) => {
      setSubmitButtonDisabled(false);
      setErrorMsg(err.message)});
  }
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
            <input type='text' placeholder='Your Name'
            onChange={(event)=>
              setValues((prev) => ({...prev, name: event.target.value }))}
            />
            <input type='email' placeholder='Email Address'
            onChange={(event)=>
              setValues((prev) => ({...prev, email: event.target.value }))}
            />
            <input type='password' placeholder='Password'
            onChange={(event)=>
              setValues((prev) => ({...prev, pass: event.target.value }))}
            />
        </div>
        <b>{errorMsg}</b>
        <button onClick={handleSubmission}
        disabled={submitButtonDisabled}
        >Continue</button>
        <p className='loginsignup-login'>Already have an account? <span><Link to="/signup">Login here</Link></span></p>
        <div className='loginsignup-agree'>
            <input type='checkbox' name='' id=''/>
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
