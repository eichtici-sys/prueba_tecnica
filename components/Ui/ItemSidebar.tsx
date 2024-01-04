import Link from "next/link"
import React, { ReactNode } from "react"

type Props = {
  icon: ReactNode
  label: string
  href: string
  pathname: string
}

const ItemSidebar = ({ icon, label, href, pathname }: Props) => {
  return (
    <Link
      href={href}
      className="flex flex-row w-full h-9 mb-4 hover:cursor-pointer group"
    >
      <div
        className={` w-1 ${
          pathname === href ? "bg-secondary" : "bg-primary"
        } h-full group-hover:bg-secondary transition-colors`}
      ></div>

      <div className="flex-1 pl-3.5 flex gap-3 flex-row items-center">
        {icon}
        <span className="text-sm">{label}</span>
      </div>
    </Link>
  )
}

export default ItemSidebar
