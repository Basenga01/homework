import { AffairType } from './Homework2.tsx'
import { useState } from 'react'
import { ChangeTitle } from './changeTitle.tsx'

type AffairPropsType = {
  affair: AffairType
  deleteAffairCallback: (_id: number) => void
  changeAffairTitleCallback: (_id: number, title: string) => void
}

function Affair(props: AffairPropsType) {
  const [changed, setChanged] = useState<boolean>(false)
  const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id)
  }
  const onChangeAffairTitle = (title: string) => {
    props.changeAffairTitleCallback(props.affair._id, title)
  }
  return (
    <div>
      {changed ? (
        <ChangeTitle title={props.affair.name} changeTitle={onChangeAffairTitle} />
      ) : (
        props.affair.name
      )}
      <button
        onClick={() => {
          setChanged((prevState) => !prevState)
        }}
      >
        Change
      </button>
      <button onClick={deleteCallback}>Del</button>
    </div>
  )
}

export default Affair
