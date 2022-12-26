import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { Fragment } from 'react';
import Head from 'next/head';

import AuthForm from '../components/auth/auth-form';

function AuthPage() {

  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace('/');
      } 
    });
  }, [router]);



  return (
    <Fragment>
      <Head>
        <title>Authenticate</title>
        <meta name="description" content="Add your credentials here!" />
      </Head>
      <AuthForm />
    </Fragment>
  );
}

export default AuthPage;
