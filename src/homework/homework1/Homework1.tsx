import Message from "./Message.tsx";
import css from "./Message.module.css";

export const Homework1 = () => {
  return (
    <div className={css.message}>
      <Message
        outgoing
        avatar={
          "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg"
        }
        name={"Boris"}
        time={"14:88"}
        message={"Вкл/выкл пробовал?"}
      />
      <Message
        avatar={
          "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg"
        }
        name={"Boris"}
        time={"14:88"}
        message={"гойда"}
      />
      <Message
        outgoing
        avatar={
          "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg"
        }
        name={"Boris"}
        time={"14:88"}
        message={"Аллоха"}
      />
    </div>
  );
};

export default Homework1;
