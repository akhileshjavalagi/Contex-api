import React from 'react'

import {useContext} from "react"
import { AuthContext } from '../contexts/AuthContext'

const Login = () => {

 const {loginstatus} = useContext(AuthContext)

 

  return (
    <div>
        
        <h1>
            {console.log(loginstatus)}
            Login status :{loginstatus.token}

        </h1></div>
  )
}

export default Login