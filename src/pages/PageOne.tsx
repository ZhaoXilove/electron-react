import { css } from '@linaria/core'
import { styled } from '@linaria/react'
import { useBoolean } from 'ahooks'

const Button = styled.button`
  height: 2rem;
  padding: 0 0.5rem;
  border-radius: 0.25rem;
  cursor: pointer;

  border: 1px red solid;
  color: #ffffff;
  background-color: #222;
  &:hover {
    background-color: #333;
  }
  &:active {
    background-color: green;
  }
`

const title = css`
  font-size: 24px;
  font-weight: bold;
`

const PageOne = () => {
  const [state, { toggle, setTrue, setFalse }] = useBoolean(true)
  const handleClick = () => {
    console.log(1)
  }
  return (
    <div>
      <p className={title}>Effects：{JSON.stringify(state)}</p>
      <p>
        <button type="button" onClick={toggle}>
          Toggle
        </button>
        <button type="button" onClick={setFalse} style={{ margin: '0 16px' }}>
          Set false
        </button>
        <button type="button" onClick={setTrue}>
          Set true
        </button>
        <Button onClick={handleClick}>I am clickable! 🫧</Button>
      </p>
    </div>
  )
}

export default PageOne
