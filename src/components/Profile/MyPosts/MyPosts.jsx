import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
    props.updateNewPostText('');
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My MyPosts</h3>
      <div>
        <div><textarea onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText} />
        </div>
        <div><button onClick={addPost}>Add post</button>
        </div>
      </div>

      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  )

}

export default MyPosts;


// Думаю я понял концепцию. В state мы не можем импортировать функцию renderEntireTree, 
// но мы можем ее туда передать через subscribe, который вызывается в index.js. 
// После чего, созданная функция renderEntireTree в state переопределяется на ту,
//  которую мы передали в subscribe. 
//  И теперь, когда мы добавляем пост, в state вызывается эта функция renderEntireTree 