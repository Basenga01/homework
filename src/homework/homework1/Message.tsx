import css from "./Message.module.css";
import {classnames} from "./utillits/classnames.ts";

export interface messageData {
  name: string;
  message: string;
  time: string;
  avatar: string;
  outgoing?: boolean;
}

console.log(classnames(["class1","class2"],{['left'] :true,['right']:false}))

export const Message = ({ name, message, time, avatar, outgoing}: messageData) => {
    classnames([css.messageContainer], {[css.messageContainer]: outgoing});
  return (
      <div className={classnames([css.container], {[css.containerOutgoing]: !outgoing})}>
      <div className={classnames([css.messageContainer], {[css.messageContainerOutgoing]: !outgoing})}>
          <div className={css.messageAvatarContainer}>
              <img src={avatar} alt="сольтуха" className={css.messageAvatar}/>
          </div>
          <div className={css.messageInfoContainer}>
              <div className={css.messageName}>{name}</div>
              <div className={css.messageInfo}>
                  <div className={css.messageText}>{message}</div>
                  <div className={css.messageTime}>{time}</div>
              </div>
              <div className={`${css.udolok} ${outgoing ? css.left : css.right}`}></div>
          </div>
      </div>
      </div>
  );
};

export default Message;
