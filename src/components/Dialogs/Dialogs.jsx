import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'



const Dialogs = (props) => {

   let newPostElement = React.createRef();

let AddPost = () => {
  let text = newPostElement.current.value;
  alert(text);
}


   let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />
   );
   let messagesElements = props.state.messages.map(m => <Message message={m.message} />);

   return (
      <div>
      <div>
<div><textarea ref={newPostElement}></textarea></div>
<div><button onClick={ () => {alert('hey!')} }>Add post</button></div>
</div>
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsElements}
         </div>

         <div className={s.messages}>
            {messagesElements}
         </div>
      </div>
      </div>
   )
}
export default Dialogs;
