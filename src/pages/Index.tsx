import { lazy, useEffect, useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/electron-vite.animate.svg'
import '../App.css'
import Demo from '@C/Demo'
const PageOne = lazy(() => import('./PageOne'))
function App() {
  const [count, setCount] = useState(0)
  const [chromeVersion, setChromeVersion] = useState<string>('')

  useEffect(() => {
    ;(async () => {
      const version = await window.ipcRenderer.invoke('get-chrome-version')
      setChromeVersion(version)
    })()
  }, [])

  return (
    <>
      <div>
        <a href="https://electron-vite.github.io" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
        <Demo />
      <h1>Vite + React</h1>
      <p>{import.meta.env.BASE_URL}</p>
      <p>{import.meta.env.VITE_APP_NAME}</p>
      <PageOne />
      <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      <p>Chrome版本: {chromeVersion}</p>
    </>
  )
}

export default App
