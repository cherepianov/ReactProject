import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = () => {

    let posts = [
    { id: 1, message: 'Это мой первый пост', likesCount: 15 },
    { id: 2, message: 'А это второй пост', likesCount: 20 },
    { id: 3, message: 'А это третий пост', likesCount: 20 },
    { id: 4, message: 'А это четвертый пост', likesCount: 20 },
    { id: 6, message: 'А это пятый пост', likesCount: 20 }
  ]

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts}/>
    </div>
  )
}

export default Profile;