import { useLoaderData } from 'react-router-dom';

import { Post as PostData } from '../types/Post';
import Post from './Post';
import classes from './PostsList.module.css';

function PostsList() {
  const posts = useLoaderData() as PostData[];

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            post.id && <Post key={post.body} author={post.author} body={post.body} postId={post.id} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
