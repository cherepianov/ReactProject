import {rerenderEntireTree} from '../render'

let store = {
let _state = {
   profilePage: {
      posts: [
         { id: 1, message: 'Это мой первый пост', likesCount: 15 },
         { id: 2, message: 'А это второй пост', likesCount: 20 },
         { id: 3, message: 'А это третий пост', likesCount: 20 },
         { id: 4, message: 'А это четвертый пост', likesCount: 20 },
         { id: 6, message: 'А это пятый пост', likesCount: 20 }
      ],
      newPostText: 'it-kamasutra.co'
   },
   dialogsPage: {
      messages: [
         { id: 1, message: 'Hi' },
         { id: 2, message: 'How are you?' },
         { id: 3, message: 'What is the weather today in Moscow?' },
         { id: 4, message: 'Yo' }
      ],
      dialogs: [
         { id: 1, name: 'Molly' },
         { id: 2, name: 'Sveta' },
         { id: 3, name: 'Dasha' },
         { id: 4, name: 'Masha' },
         { id: 5, name: 'Olga' },
         { id: 6, name: 'Liza' },
         { id: 7, name: 'Anna' }
      ]
   }
}
   rerenderEntireTree() {
      
   },
   addPost() {
      let newPost = {
         id: 5,
         message: state.profilePage.newPostText,
         likesCount: 0
      };
      state.profilePage.posts.push(newPost);
      rerenderEntireTree(state);
   },
   updateNewPostText (newText) {
   
      state.profilePage.newPostText = newText;
      rerenderEntireTree(state);
   }
}
window.store = store;

export default store;

