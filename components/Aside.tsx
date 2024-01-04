import useUi from "@/hooks/useUi"
import Image from "next/image"
import React from "react"
import ItemSidebar from "./Ui/ItemSidebar"
import {
  Columns,
  Configurations,
  Logout,
  Orders,
  Reports,
  User,
} from "@/icons/icons"
import { usePathname } from "next/navigation"

type Props = {}

const Aside = (props: Props) => {
  const { isShowMenu } = useUi()
  const pathname = usePathname()

  return (
    <aside
      className={`${isShowMenu ? " w-64" : " w-0"} h-full p-2 transition-all`}
    >
      <div className="bg-primary rounded-2xl w-full h-full flex flex-col">
        <div className="p-4 mb-2">
          <Image
            src={"/logo.png"}
            width={200}
            height={100}
            alt="Logo Image"
            className=" w-28 h-10"
          />
        </div>
        <div className=" overflow-y-auto w-full text-white">
          <span className="uppercase text-sm pl-4">Menú</span>
          <div className="flex flex-col mt-3">
            <ItemSidebar
              href="/"
              label="Dashboard"
              icon={<Columns className=" w-4 h-4" />}
              pathname={pathname}
            />
            <ItemSidebar
              href="/orders"
              label="Ordenes"
              icon={<Orders className=" w-4 h-4" />}
              pathname={pathname}
            />
            <ItemSidebar
              href="/users"
              label="Usuarios"
              icon={<User className=" w-4 h-4" />}
              pathname={pathname}
            />
            <ItemSidebar
              href="/reports"
              label="Reportes"
              icon={<Reports className=" w-4 h-4" />}
              pathname={pathname}
            />
          </div>
          <div className="my-3 w-full px-4">
            <div className=" h-0.5 bg-backgroundColor"></div>
          </div>
          <div className="mt-3">
            <span className="uppercase text-sm pl-4">Otro</span>
            <div className="flex flex-col mt-3">
              <ItemSidebar
                href="/configurations"
                label="Configuración"
                icon={<Configurations className=" w-4 h-4" />}
                pathname={pathname}
              />
              <ItemSidebar
                href="/logout"
                label="Cerrar Sesión"
                icon={<Logout className=" w-4 h-4" />}
                pathname={pathname}
              />
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Aside
