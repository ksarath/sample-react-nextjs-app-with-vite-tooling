import { Link } from 'react-router-dom'

import classes from './Post.module.css';

function Post({ postId, author, body }: { postId: string, author: string, body: string }) {
  return (
    <li className={classes.post}>
      <Link to={postId}>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
      </Link>
    </li>
  );
}

export default Post;
