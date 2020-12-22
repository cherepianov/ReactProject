import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';



const DialogItem = (props) => {
   let path = "/dialogs/" + props.id;
   return <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
            </div >
   }

const Message = (props) => {
   return (
   <div className={s.dialog}>{props.message}</div>
   )
}

const Dialogs = (props) => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            <DialogItem name="Molly" id="1" />
            <DialogItem name="Sveta" id="2" />
            <DialogItem name="Dasha" id="3" />
            <DialogItem name="Masha" id="4" />
            <DialogItem name="Olga" id="5" />
            <DialogItem name="Liza" id="6" />
            <DialogItem name="Anna" id="7" />
         </div>

         <div className={s.messages}>
            <Message message="Hi" />
            <Message message="How are you?" />
            <Message message="What is the weather today in Moscow?" />
         </div>
      </div>
   )
}
export default Dialogs;
