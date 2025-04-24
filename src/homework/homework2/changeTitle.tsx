import { useState } from 'react'

interface TitlePropsType {
  title: string
  changeTitle: (title: string) => void
}

export const ChangeTitle = (props: TitlePropsType) => {
  const [value, setValue] = useState<string>(props.title)

  const onClickCallback = () => {
    props.changeTitle(value)
  }

  return (
    <div>
      <input
        value={value}
        onChange={(event) => {
          setValue(event.target.value)
        }}
      />
      <button onClick={onClickCallback}>Save</button>
    </div>
  )
}
