import { ReactNode, createContext, useState } from "react"

type UiContextProps = {
  isShowMenu: boolean
  handleChangeShowMenu: () => void
}

const UiContext = createContext<UiContextProps>({
  isShowMenu: true,
  handleChangeShowMenu: () => {},
})

type UiProviderProps = {
  children: ReactNode
}

const UiProvider = ({ children }: UiProviderProps) => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(true)
  const handleChangeShowMenu = () => {
    setIsShowMenu(!isShowMenu)
  }
  const contextValue: UiContextProps = {
    isShowMenu,
    handleChangeShowMenu,
  }
  return (
    <UiContext.Provider value={contextValue}>{children}</UiContext.Provider>
  )
}

export { UiProvider }

export default UiContext
