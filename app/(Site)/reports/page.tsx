import NavBar from "@/components/Ui/NavBar"
import React from "react"

type Props = {}

const Page = (props: Props) => {
  return (
    <div className="p-2 relative grid grid-rows-[60px,1fr] h-full w-full">
      <NavBar title="Reportes" />
      <div></div>
    </div>
  )
}

export default Page
