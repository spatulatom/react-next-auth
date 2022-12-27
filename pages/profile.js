import { getSession } from 'next-auth/react';

import UserProfile from '../components/profile/user-profile';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Fragment, useEffect } from 'react';

function ProfilePage(props) {
  const router = useRouter();
  const { data: session, status } = useSession();

  // alternative way of protecting routes with useRouter which
  // has to be in useEffect since it must be executed on client side
  // const [loding, setLoading] = useState(false);
  // useEffect(() => {
  //   getSession().then((session) => {
  // setLoading(true)
  //     if (session) {
  // setLoading(false);
  //       router.replace('/profile');
  //     } else {
  // setLoading(false)
  //       router.replace('/');
  //     }
  //   });
  // }, []);

  // if(loading){
  //   return <p>Loading</p>
  // }

  if (status === 'loading') {
    return (
      <div className="text-center pt-12 ">
        <i class="fa-solid fa-spinner fa-2xl fa-spin"></i>
      </div>
    );
  }
  // or props.session
  if (session) {
    return (
      <Fragment>
        <Head>
          <title>User Profile</title>
          <meta
            name="description"
            content="See your details/change your password!"
          />
        </Head>
        <UserProfile email={props.email} />
      </Fragment>
    );
  }
  // this if check is not really needed since we redirectin on the server
  if (!props.session) {
    // the code below reloads the whole app
    // window.location.href = '/auth';
    return;
  }
}

// export async function getServerSideProps(context) {
//   const session = await getSession({ req: context.req });
//   console.log('context', context)

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { session },
//   };
// }

export const getServerSideProps = async (context) => {
  const { req, res } = context;
  const session = await getSession({ req: req });

  if (!session) {
    return {
      redirect: { destination: '/', permanent: false },
    };
    //   serverSideProps has to return at least empty objecy
    //   return{props:{}}
  }

  const userEmail = session.user.email;
  console.log('USER EMAIL', userEmail);

  return {
    props: { email: userEmail, session },
  };
};

export default ProfilePage;
