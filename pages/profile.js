import { getSession } from 'next-auth/react';

import UserProfile from '../components/profile/user-profile';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  console.log('router', router)
  if (status === 'authenticated') {
    return <UserProfile/>
  }
  if(status==="unauthenticated"){
    router.replace('/')
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

export default ProfilePage;
