import React,{Button} from "@chakra-ui/react"
import { useContext } from 'react'
import { ThemeModeContext } from "../Contexts/ThemeModeContext"
export default function ToggleMode() {
    const{ToggleMode}=useContext(ThemeModeContext)
  return (
    <Button onClick={ToggleMode}>ToggleMode</Button>
  )
}
