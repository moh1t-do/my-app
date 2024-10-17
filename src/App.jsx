import { useEffect, useState } from 'react'

export default function App() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setShow(pshow => !pshow);
    }, 5000);
    return () => clearInterval(interval);
  }, [])
  return (
    <>
      {show && <MyComponent />}
    </>
  )
}

function MyComponent() {
  useEffect(() => {
    console.log('My Component mounted');
    return () => {
      console.log('My Component unmounted');
    }
  }, [])
  return <div>
    My Component
  </div>
}