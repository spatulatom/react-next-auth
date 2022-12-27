import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';
import { Fragment } from 'react';
import Head from 'next/head';

import AuthForm from '../components/auth/auth-form';

function AuthPage(props) {

//  another way for redirecting is to use useEffect + loading state
// and render for ex spinner while loading - so we dont see the page for 
// that biref moment while figuring out whether we ha a session
// const [loadin, setLoading] = useState(true)
  // useEffect(() => {
  //   getSession().then((session) => {
  //     if (session) {
  //       router.replace('/');
  //     }else{
    // setloadong(false)
  // }
  //   });
  // }, [router]);
  // if(loading){return <p>Loading</p>}

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

export const getServerSideProps = async (context) => {
  const { req, res } = context;
  const session = await getSession({ req: req });

  if (session) {
    return {
      redirect: { destination: '/', permanent: false },
    };
  }
  return {
    props: {},
  };
};
