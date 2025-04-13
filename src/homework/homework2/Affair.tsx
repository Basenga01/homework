import {AffairType} from "./Homework2.tsx";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: AffairType // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {}// need to fix
    return (
        <div>
            {props.affair.name}
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
