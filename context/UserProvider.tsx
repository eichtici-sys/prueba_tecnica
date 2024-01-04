import { User } from "@prisma/client"
import { ReactNode, createContext, useState } from "react"

type UserContextProps = {
  dialog: boolean
  handleOpenDialog: () => void
  currentUser: User | undefined
  handlecloseDialog: () => void
  handleChangeCurrent: (value: User) => void
}

const UserContext = createContext<UserContextProps>({
  dialog: false,
  handleOpenDialog: () => {},
  currentUser: undefined,
  handlecloseDialog: () => {},
  handleChangeCurrent: (value: User) => {},
})

type UserProviderProps = {
  children: ReactNode
}

const UserProvider = ({ children }: UserProviderProps) => {
  const [dialog, setDialog] = useState<boolean>(false)
  const [currentUser, setCurrentUser] = useState<User | undefined>(undefined)
  const handleOpenDialog = () => {
    setDialog(true)
  }
  const handlecloseDialog = () => {
    setDialog(false)
    setTimeout(() => {
      setCurrentUser(undefined)
    }, 300)
  }
  const handleChangeCurrent = (value: User) => {
    setCurrentUser(value)
  }
  const contextValue: UserContextProps = {
    dialog,
    handleOpenDialog,
    currentUser,
    handlecloseDialog,
    handleChangeCurrent,
  }
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  )
}

export { UserProvider }

export default UserContext
