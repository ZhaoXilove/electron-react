import { useState, useEffect } from 'react'

function ExampleComponent() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState('')

  useEffect(() => {
    fetchData() // Simulating data fetching

    return () => {
      // Cleanup
    }
  }, [])

  const fetchData = () => {
    // Simulating data fetching delay
    setTimeout(() => {
      setLoading(false)
      setData('Some data')
    }, 2000) // Simulating 2 seconds delay
  }

  return <div>{loading ? <div>加载中...</div> : <div>Data: {data}</div>}</div>
}

export default ExampleComponent
