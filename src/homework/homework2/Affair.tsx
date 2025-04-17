import { AffairType } from "./Homework2.tsx";
import { useState } from "react";

type AffairPropsType = {
  affair: AffairType;
  deleteAffairCallback: (_id: number) => void;
};

function Affair(props: AffairPropsType) {
  const [changed, setChanged] = useState<boolean>(false);

  const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id);
  };
  return (
    <div>
      {changed ? (
        <div>
          <input />
          <button></button>
        </div>
      ) : (
        props.affair.name
      )}
      <button
        onClick={() => {
          setChanged((prevState) => !prevState);
        }}
      >
        Change
      </button>
      <button onClick={deleteCallback}>Del</button>
    </div>
  );
}

export default Affair;
