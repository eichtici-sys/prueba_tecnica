"use client"
import NavBar from "@/components/Ui/NavBar"
import TableNext from "@/components/Ui/TableNext"
import { Button } from "@nextui-org/react"
import React from "react"

type Props = {}

const Page = (props: Props) => {
  const columns = [
    {
      key: "date",
      display: "Fecha",
      render: (item: any) => item.date,
    },
    {
      key: "status",
      display: "Estado",
      render: (item: any) => item.status,
    },
    {
      key: "clientId",
      display: "Cliente",
      render: (item: any) => item.clientId,
    },
    {
      key: "actions",
      display: "Acciones",
    },
  ]
  return (
    <div className="p-2 relative grid grid-rows-[60px,1fr] h-full w-full">
      <NavBar title="Ordenes" />
      <div className="text-black">
        <div className="w-full flex justify-end mt-3 h-auto">
          <Button onPress={() => {}}>Añadir Orden</Button>
        </div>
        <TableNext
          data={[]}
          columns={columns}
          emptyLabel="No has agregado ninguna orden"
          totalLabel="Usuarios"
          onEdit={() => {}}
          onDelete={() => {}}
        />
        {/* <ModalUser /> */}
      </div>
    </div>
  )
}

export default Page
