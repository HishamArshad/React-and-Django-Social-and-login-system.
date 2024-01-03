import React, { useRef, useContext } from 'react';
import { observer, useObservable, Show } from "@legendapp/state/react";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { persistObservable } from "@legendapp/state/persist"
import { Navigate } from 'react-router-dom';
import { ObservablePersistLocalStorage } from "@legendapp/state/persist-plugins/local-storage"
import { Context } from '../context';
const Login = observer(function Login() {
  const {states} = useContext(Context)
  const renderCount = ++useRef(0).current;
 
  const tf = useObservable({
     boolean: false
  });
 
    const handleGoogleSignIn = async (credentials) => {
      const clientId = credentials.clientId;
      const select_by = credentials.selectBy;
      const credential = credentials.credential;

      try {
        const response = await fetch('http://localhost:8000/api/google/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            credential,
            clientId,
            select_by,
          }),
        });
        states.bool.set(true)
        if (response.ok) {
          const data = await response.json();
          states.token.set(data.token)
          tf.boolean.set(true)
        } else {
          console.log('Login Failed');
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    };

   
    if(tf.boolean.get()) {
      return <Navigate to='/home'/>
    }
  return (
    <>
      <p>Render Count: {renderCount}</p>

            <div>
            <GoogleOAuthProvider clientId="491131327205-foeif4n807dfsf3iishrt86a6s8v23pr.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                  handleGoogleSignIn(credentialResponse);
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
                useOneTap
              />
            </GoogleOAuthProvider>
          </div>
 
    </>
  );
});

export default Login;
