"use client"
import useUi from "@/hooks/useUi"
import { Hamburger, SortBars } from "@/icons/icons"
import { User } from "@nextui-org/react"
import React from "react"

type Props = {
  title: string
}

const NavBar = ({ title }: Props) => {
  const { handleChangeShowMenu, isShowMenu } = useUi()
  return (
    <div className="w-full items-center flex justify-between py-3">
      <div className="flex gap-4 items-center">
        <div onClick={handleChangeShowMenu} className="hover:cursor-pointer">
          {isShowMenu ? (
            <SortBars className="w-5 h-5" />
          ) : (
            <Hamburger className="w-5 h-5" />
          )}
        </div>
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <div className="px-6">
        <User
          avatarProps={{ radius: "full", src: "/Image-profile.png" }}
          description={"Admin"}
          name={"Oscar e"}
        >
          {"Admin"}
        </User>
      </div>
    </div>
  )
}

export default NavBar
