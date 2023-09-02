import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../firebase/config';
import { Loader } from '../Components/General/Loader';
import { faL } from '@fortawesome/free-solid-svg-icons';

const PasswordResetForm = ({ onClose }) => {
  const [email, setEmail] = useState("")
  const [isLoading, setisLoading] = useState(true)


  const resetPasswod = (e) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        isLoading(false)
        toast.success("Check your mail for reset link", {
          autoClose: 1000, // Close the toast after 3 seconds
          hideProgressBar: true,
          closeOnClick: true,
        });
      })
      .catch((error) => {
        toast.error("error.message", {
          autoClose: 1000, // Close the toast after 3 seconds
          hideProgressBar: true,
          closeOnClick: true,
        });
        isLoading(false)
      });
  }

  return (
    <>
    {isLoading && <Loader /> }
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
        <div className="bg-white w-96 p-4 rounded-lg z-50">
          <h1 className="text-2xl font-semibold mb-4">Reset Password</h1>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full border-b border-gray-300 focus:border-gray-500 outline-none px-2 py-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type='submit' onClick={resetPasswod} className="w-full bg-red-500 text-white py-2 rounded-md mb-2">Reset Password</button>
          <p className="text-sm">
            Already have an account? <a href="#" className="underline" onClick={onClose}>Cancel</a>
          </p>
        </div>
      </div>
    </>
  )
}

const LoginForm = ({ setShowLogin, setShowReset }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setisLoading] = useState(false)

  const navigate = useNavigate();

  //login with mail
  const loginUser = (e) => {
    e.preventDefault()
    setisLoading(true)

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setisLoading(false)
      toast.success("Login Successful", {
        autoClose: 1000, // Close the toast after 3 seconds
        hideProgressBar: true,
        closeOnClick: true,
      });
      navigate('/')
    })
    .catch((error) => {
      toast.error(error.message, {
        autoClose: 1000, // Close the toast after 3 seconds
        hideProgressBar: true,
        closeOnClick: true,
      });
      setisLoading(false)
    });
  }

  //login with google
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        toast.success("Login Successful", {
          autoClose: 1000, // Close the toast after 3 seconds
          hideProgressBar: true,
          closeOnClick: true,
        });
        navigate("/")
      }).catch((error) => {
        toast.error(error.message, {
          autoClose: 1000, // Close the toast after 3 seconds
          hideProgressBar: true,
          closeOnClick: true,
        });
      });
  }

  return (
    <>
      {isLoading && <Loader /> }
      <form onSubmit={loginUser} className="flex h-full flex-col md:items-start items-center justify-between">
      <h1 className="md:text-4xl text-xl text-center font-bold mb-4">Log in to Exclusive</h1>
      <p className="text-sm text-gray-600 mb-4 text-center">Enter your details below</p>
      <div className="md:w-10/12 w-full mb-4">
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="w-full border-b border-gray-300 focus:border-gray-500 outline-none px-2 py-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="md:w-10/12 w-full mb-4">
        <input
          type="password"
          placeholder="Password"
          className="w-full border-b border-gray-300 focus:border-gray-500 outline-none px-2 py-1"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='flex md:w-10/12 w-full flex-col justify-between items-center'>
          <button type='submit' className="w-full bg-red-500 text-white py-2 rounded-md mb-2">Login</button>
          <button onClick={googleLogin} className="w-full border border-black text-black py-2 rounded-md flex items-center justify-center">
            <FontAwesomeIcon className='mr-2 text-blue-600' icon={faGoogle} /> Sign In with Google
          </button>

        <p className="text-sm text-red-500">
          <a href="#" className="underline" onClick={() => setShowReset(true)}>Forgot Password?</a>
        </p>
      </div>
      <p className="text-sm">
        Don't have an account? <a href="#" className="underline" onClick={() => setShowLogin(false)}>Sign Up</a>
      </p>
      </form>
    </>
  );
}

const SignupForm = ({ setShowLogin }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpassword, setConfirmPassword] = useState("")
  const [isLoading, setisLoading] = useState(false)

  const navigate = useNavigate()

  const registerUser = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', { name, email, password, confirmpassword });
    if (password !== confirmpassword){
      toast.error('Password does not match!', {
        autoClose: 1000, // Close the toast after 3 seconds
        hideProgressBar: true,
        closeOnClick: true,
      });
    }
    setisLoading(true)
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          setisLoading(false)
          toast.success('Registeration Succesful!', {
            autoClose: 1000, // Close the toast after 3 seconds
            hideProgressBar: true,
            closeOnClick: true,
          });
          navigate("/login")
        })
        .catch((error) => {
          toast.error(error.message, {
            autoClose: 1000, // Close the toast after 3 seconds
            hideProgressBar: true,
            closeOnClick: true,
          });
          setisLoading(false)
        });
  };

  return (
    <>
      {isLoading && <Loader /> }
      <form onSubmit={registerUser} className="flex flex-col md:items-start items-center justify-between h-auto">
          <h1 className="md:text-4xl text-xl text-center font-bold mb-2">Create an Account</h1>
          <p className="text-sm text-gray-600 mb-4 text-center">Enter your details below</p>
          {/* <div className="md:w-10/12 w-full mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border-b border-gray-300 focus:border-gray-500 outline-none px-2 py-1"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div> */}
          <div className="md:w-10/12 w-full mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full border-b border-gray-300 focus:border-gray-500 outline-none px-2 py-1"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="md:w-10/12 w-full mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full border-b border-gray-300 focus:border-gray-500 outline-none px-2 py-1"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="md:w-10/12 w-full mb-4">
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border-b border-gray-300 focus:border-gray-500 outline-none px-2 py-1"
              required
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="md:w-10/12 w-full bg-red-500 text-white py-2 rounded-md mb-2">Create Account</button>
          {/* <button className="md:w-10/12 w-full border border-black text-black py-2 rounded-md flex items-center justify-center">
            <FontAwesomeIcon className='mr-2 text-blue-600' icon={faGoogle} /> Sign Up with Google
          </button> */}
          <p className="text-sm">
            Already have an account? <a href="#" className="underline" onClick={() => setShowLogin(true)}>Login</a>
          </p>
      </form>
    </>
  );
};

export const Auth = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showReset, setShowReset] = useState(false);

  return (
    <div className='md:h-96 my-28 h-auto w-full flex flex-col md:flex-row items-center justify-between'>
      <div className='w-11/12 md:w-[48%] h-full bg-[#CBE4E8] flex items-center justify-center'>
        <img className='md:h-64 h-12 w-auto object-contain' src='./img/trolley.png' alt="Logo" />
      </div>
      <div className='w-11/12 md:w-[48%] h-full'>
        {showLogin ? <LoginForm setShowLogin={setShowLogin} setShowReset={setShowReset} /> : <SignupForm setShowLogin={setShowLogin} />}
        {showReset && <PasswordResetForm onClose={() => setShowReset(false)} />}
      </div>
    </div>
  );
};
