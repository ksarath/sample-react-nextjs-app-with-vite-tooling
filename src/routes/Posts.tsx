import { Outlet } from 'react-router-dom';

import { Post as PostData } from '../types/Post';

import PostsList from '../components/PostsList';

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export async function loader(): Promise<PostData[]> {
  const response = await fetch('http://localhost:8080/posts');
  const resData = await response.json();
  console.log(resData.posts)
  return resData.posts;
}
