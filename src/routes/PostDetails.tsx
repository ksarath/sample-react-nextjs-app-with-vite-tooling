import { useLoaderData, Link } from 'react-router-dom';
import { Post as PostData } from '../types/Post';

import Modal from '../components/Modal';
import classes from './PostDetails.module.css';

function PostDetails() {
  const post = useLoaderData() as PostData;

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;

export async function loader({ params }: any): Promise<PostData> {
  const postId = (params as { id: string }).id
  const response = await fetch(`http://localhost:8080/posts/${postId}`);
  const resData = await response.json();
  console.log(resData.post)
  return resData.post;
}