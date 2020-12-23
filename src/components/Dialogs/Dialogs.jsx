import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Dialogs = (props) => {

   let dialogs = [
      { id: 1, name: 'Molly' },
      { id: 2, name: 'Sveta' },
      { id: 3, name: 'Dasha' },
      { id: 4, name: 'Masha' },
      { id: 5, name: 'Olga' },
      { id: 6, name: 'Liza' },
      { id: 7, name: 'Anna' }
   ]

   let messages = [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How are you?' },
      { id: 3, message: 'What is the weather today in Moscow?' },
      { id: 4, message: 'Yo' }
   ]

   let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />
   );
   let messagesElements = messages.map(m => <Message message={m.message} />);

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsElements}
         </div>

         <div className={s.messages}>
            {messagesElements}
         </div>
      </div>
   )
}
export default Dialogs;
