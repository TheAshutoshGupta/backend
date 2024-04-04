import { useState } from 'react'
import { UserProfileDetails } from "react-leetcode";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-full flex justify-center items-center'> 
      <UserProfileDetails userName='TheAshutoshGupta'/>
    </div>
      
    </>
  )
}

export default App
