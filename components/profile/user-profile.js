import ProfileForm from './profile-form';
import classes from './user-profile.module.css';
import { getSession } from 'next-auth/react';
import { useContext } from 'react';
import NotificationContext from '../../store/notification-context';

function UserProfile(props) {
  const notificationCtx = useContext(NotificationContext);

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   getSession().then((session) => {
  //     if (!session) {
  //       window.location.href = '/auth';
  //     } else {
  //       setIsLoading(false);
  //     }
  //   });
  // }, []);

  // if (isLoading) {
  //   return <p className={classes.profile}>Loading...</p>;
  // }

  async function changePasswordHandler(passwordData) {
    notificationCtx.showNotification({
      title: 'Changing your password...',
      message: 'Your password is being updated in the database!',
      status: 'pending',
    });

    try {
      const response = await fetch('/api/user/change-password', {
        method: 'POST',
        body: JSON.stringify(passwordData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      if (response.ok) {
        notificationCtx.showNotification({
          title: 'Success!',
          message: data.message || 'Your password has been updated!',
          status: 'success',
        });
      } else {
        throw new Error(data.message);
      }
    } catch (err) {
      notificationCtx.showNotification({
        title: 'Error!',
        message: err.message || 'Something went wrong!',
        status: 'error',
      });
    }
  }

  return (
    <section className="m-auto text-center my-12 mx-1">
      <h1 className=" text-3xl md:text-5xl uppercase mb-4">Your User Profile</h1>
      <h2 className="text-xl">Your email: {props.email}</h2>
      <ProfileForm onChangePassword={changePasswordHandler} />
    </section>
  );
}

export default UserProfile;
