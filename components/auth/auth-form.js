import { useState, useRef, useContext } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import NotificationContext from '../../store/notification-context';

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
      console.log('result sign in', result);

      if (!result.error) {
        // set some auth state
        router.replace('/');
        notificationCtx.showNotification({
          title: 'Success!',
          message: 'Your are logged in!',
          status: 'success',
        });
      }
      if (result.error) {
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

        router.replace('/auth');
        notificationCtx.showNotification({
          title: 'Success!',
          message: result.message || 'Your comment was saved!',
          status: 'success',
        });
        emailInputRef.current.value = '';
        passwordInputRef.current.value = '';
      } catch (error) {
        notificationCtx.showNotification({
          title: 'Error!',
          message: error.message || 'Something went wrong!',
          status: 'error',
        });
      }
    }
  }

  return (
    // <section className={classes.auth}>
    <section className="m-auto my-20 max-w-xl bg-veryDarkBlue py-8 px-2 md:p-6 rounded-lg shadow-lg ">
      <h1 className="text-white text-center text-lg uppercase mb-8">
        {isLogin ? 'Login' : 'Create a new account'}
      </h1>
      <form onSubmit={submitHandler}>
        <div className="mb-8">
          <label className="block text-white font-bold mb-2" htmlFor="email">
            Your Email:
          </label>
          <input
            className="rounded-sm w-full p-2"
            type="email"
            id="email"
            required
            ref={emailInputRef}
          />
        </div>
        <div className="mb-8">
          <label className="block text-white font-bold mb-2" htmlFor="password">
            Your Password:
          </label>
          <input
            className="rounded-sm w-full p-2"
            type="password"
            id="password"
            required
            ref={passwordInputRef}
            placeholder="min. 7 characters long"
          />
        </div>
        <div className="flex flex-col items-center">
          <button className="text-white uppercase bg-red-400 rounded-md py-2 mb-4 px-8 hover:bg-white hover:text-red-400 ">
            {isLogin ? 'Login' : 'Create Account'}
          </button>
          <button
            type="button"
            className="mt-2 mb-8 text-white pt-1 px-1 hover:text-red-400"
            onClick={switchAuthModeHandler}
          >
            {isLogin ? ' Switch to: CREATE ACCOUNT' : 'Switch to: LOGIN'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
