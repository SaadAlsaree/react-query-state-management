import { useUserState, useToggle, usePostState } from './state/user';

export default function App() {
   const { setData, resetData } = useUserState();
   const { setData: setToggle, data: ToggleData } = useToggle();
   const { setData: setPost, resetData: resetPost, data: PostData } = usePostState();

   const handelTheme = () => {
      if (PostData === 'Dark') setPost('Light');
      else setPost('Dark');
      setToggle(!ToggleData);
   };

   const handelReset = () => {
      resetPost();
      resetData();
   };

   console.log(PostData);
   return (
      <div>
         <UserCard />
         <input onChange={(e) => setData({ name: e.target.value })} />
         <button onClick={handelReset}>Reset</button>

         <button onClick={handelTheme}>Theme</button>

         <h1> {PostData}</h1>
      </div>
   );
}

function UserCard() {
   const { data } = useUserState();
   return (
      <>
         <h1 className='text-xl font-bold'>{data?.name}</h1>
      </>
   );
}
