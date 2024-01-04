import UiContext from "@/context/UiProvider"
import { useContext } from "react"

const useUi = () => {
  return useContext(UiContext)
}
export default useUi
