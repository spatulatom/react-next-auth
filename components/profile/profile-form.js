import { useRef } from 'react';

function ProfileForm(props) {
  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredOldPassword = oldPasswordRef.current.value;
    const enteredNewPassword = newPasswordRef.current.value;

    // optional: Add validation

    props.onChangePassword({
      oldPassword: enteredOldPassword,
      newPassword: enteredNewPassword,
    });
    oldPasswordRef.current.value = '';
    newPasswordRef.current.value = '';
  }

  return (
    <form className="max-w-lg m-auto my-4" onSubmit={submitHandler}>
      <div className="mb-2">
        <label
          className="font-bold mb-1 text-gray-900 block"
          htmlFor="old-password"
        >
          Current Password:
        </label>
        <input
          className="block min-w-full rounded-sm p-1.5 border-2 border-veryDarkBlue bg-slate-200"
          type="password"
          id="old-password"
          ref={oldPasswordRef}
        />
      </div>
      <div className="mb-2">
        <label
          className="font-bold mb-1 text-gray-900 block"
          htmlFor="new-password"
        >
          New Password:
        </label>
        <input
          className="block min-w-full rounded-sm p-1.5 border-2 border-veryDarkBlue bg-slate-200"
          type="password"
          id="new-password"
          ref={newPasswordRef}
        />
      </div>

      <div className="mt-8">
        <button className="cursor-pointer px-4 py-4 rounded-lg border-2 border-red-400 bg-red-400 text-white hover:text-red-400 hover:bg-white">
          Change Password
        </button>
      </div>
    </form>
  );
}

export default ProfileForm;
