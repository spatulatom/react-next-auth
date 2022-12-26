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
  if (!session) {
    window.location.href = '/auth';
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
      props: { email: 'Error getting your email address from database!' },
    };
  }

  const userEmail = session.user.email;
  console.log('USER EMAIL', userEmail);

  return {
    props: { email: userEmail },
  };
};

export default ProfilePage;
