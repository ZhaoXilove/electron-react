// @ts-ignore
import { ClickToComponent } from 'click-to-react-component'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import App from './App.tsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <ClickToComponent editor="vscode" />
    <App />
  </QueryClientProvider>
)

if (window.ipcRenderer) {
  // Use contextBridge
  window.ipcRenderer.on('main-process-message', (_event, message) => {
    console.log(message)
  })
}
