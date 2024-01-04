"use client"
import NavBar from "@/components/Ui/NavBar"
import TableNext from "@/components/Ui/TableNext"
import ModalUser from "@/components/dashboard/ModalUser"
import { useGetAllUsers } from "@/hooks/use-user"
import useUser from "@/hooks/useUser"
import { Button } from "@nextui-org/react"
import React from "react"

type Props = {}

const Page = (props: Props) => {
  const { handleOpenDialog } = useUser()
  const { data: users } = useGetAllUsers()
  const columns = [
    {
      key: "name",
      display: "Nombre",
      render: (item: any) => item.name,
    },
    {
      key: "lastname",
      display: "Descripción",
      render: (item: any) => item.lastname,
    },

    {
      key: "actions",
      display: "Acciones",
    },
  ]
  return (
    <div className="p-2 relative grid grid-rows-[60px,1fr] h-full w-full">
      <NavBar title="Usuarios" />
      <div className="text-black">
        <div className="w-full flex justify-end mt-3 h-auto">
          <Button onPress={handleOpenDialog}>Añadir Usuario</Button>
        </div>
        <TableNext
          data={users}
          columns={columns}
          emptyLabel="No has agregado ningun usuario"
          totalLabel="Usuarios"
          onEdit={() => {}}
          onDelete={() => {}}
        />
        <ModalUser />
      </div>
    </div>
  )
}

export default Page
