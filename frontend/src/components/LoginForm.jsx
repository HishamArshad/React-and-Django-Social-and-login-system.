import { useRef, useState ,useContext} from "react";
import { useMyContext } from './Context';
import { observer, useObservable, Show, Memo } from "@legendapp/state/react";
import axios from 'axios';
import Login from './Login';
import { Navigate } from "react-router-dom"; 
import { Context } from "../context";
 
import { useLoginMutation } from "../redux/api";

const LoginForm = () => {
  const {states} = useContext(Context)
  const [login, { isLoading }] = useLoginMutation();
  const [redirect, setRedirect] = useState(false);
 
 
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await login(credentials);
      const tokens = result.data.token;
      console.log(tokens);
      setRedirect(true);
 
      states.token.set(tokens)
      states.bool.set(true)

    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  if (states.bool.get()) {
    return <Navigate to='/home'/>
  }
      
 

 
 
 
  return (
    <div>
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-24 flex justify-center flex-col">
        <div className='mb-5 text-center flex flex-col items-center'>
            <Login />
            </div>
        
  <div className="mb-5">
    <label
      htmlFor="email"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Your email
    </label>
    <input
      type="email"
      id="email"
      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      placeholder="name@flowbite.com"
      required=""
      onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
    />
  </div>
  <div className="mb-5">
    <label
      htmlFor="password"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Your password
    </label>
    <input
      type="password"
      id="password"
      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      required=""
      onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
    />
  </div>
  
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input
        id="terms"
        type="checkbox"
        defaultValue=""
        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
        required=""
      />
    </div>
    <label
      htmlFor="terms"
      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      I agree with the{" "}
      <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
        terms and conditions
      </a>
    </label>
  </div>
  <button
    type="submit"
 
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Register new account
  </button>
</form>
    </div>
  )
}

export default LoginForm