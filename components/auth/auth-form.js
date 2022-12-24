import { useState, useRef, useContext } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import NotificationContext from '../../store/notification-context';

import classes from './auth-form.module.css';

async function createUser(email, password) {
 
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
}

function AuthForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const notificationCtx = useContext(NotificationContext);

  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event) {
    event.preventDefault();
    

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: Add validation

    if (isLogin) {
      notificationCtx.showNotification({
        title: 'Loging in...',
        message: 'You are being logged in into your account on our website',
        status: 'pending',
      });
      const result = await signIn('credentials', {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });
      console.log('result sign in', result)

      if (!result.error) {
        // set some auth state
        router.replace('/');
        notificationCtx.showNotification({
          title: 'Success!',
          message: result.email || 'Your are logged in!',
          status: 'success',
        });
        
      }
      if(result.error){
        notificationCtx.showNotification({
          title: 'Error!',
          message: result.error || 'Something went wrong!',
          status: 'error',
        });
      }
    } else {
      try {
        notificationCtx.showNotification({
          title: 'Creating your account...',
          message: 'Your account is currently being set up in a database.',
          status: 'pending',
        });
        const result = await createUser(enteredEmail, enteredPassword);
        console.log('result sign in', result);
        router.replace('/auth');
        notificationCtx.showNotification({
          title: 'Success!',
          message: result.message || 'Your comment was saved!',
          status: 'success',
        });
        emailInputRef.current.value="";
        passwordInputRef.current.value="";
      } catch (error) {
        console.log(error);
        notificationCtx.showNotification({
          title: 'Error!',
          message: error || 'Something went wrong!',
          status: 'error',
        });
      }
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
