import PocketBase from 'pocketbase';

const pb = new PocketBase('https://soluxe-admin.pockethost.io');

...

const authData = await pb.collection('users').authWithPassword(
    'anita',
    'soluxe2023',
);

// after the above you can also access the auth data from the authStore
console.log(pb.authStore.isValid);
console.log(pb.authStore.token);
console.log(pb.authStore.model.id);

// "logout" the last authenticated account
pb.authStore.clear();


export const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <form>
        <input name="email" placeholder="email" type="email" />
        <input name="password" placeholder="password" type="password" />
        <button type="submit">Login</button>
      </form>
    </>
  )
}