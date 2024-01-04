"use client"
import NavBar from "@/components/Ui/NavBar"
import CardDash from "@/components/dashboard/CardDash"
import OrdersChart from "@/components/dashboard/OrdersChart"
import { useGetAllUsers } from "@/hooks/use-user"
import { Client, Order, Reports } from "@/icons/icons"
import { Card } from "@nextui-org/react"

export default function Home() {
  const { data: users, isLoading } = useGetAllUsers()
  return (
    <div className="p-2 relative grid grid-rows-[60px,1fr] h-full w-full">
      <NavBar title="Dashboard" />
      <div className=" overflow-y-auto">
        <div className="grid grid-cols-3 gap-5 mt-2">
          <CardDash
            icon={<Order className="h-3 w-3" />}
            title="Total de Ordenes"
            ammount={100}
            percent={12}
          />
          <CardDash
            icon={<Client className="h-3 w-3" />}
            title="Total de Clientes"
            ammount={isLoading ? 0 : users?.length}
            percent={4}
          />
          <CardDash
            icon={<Reports className="h-3 w-3" />}
            title="Total de Ordenes"
            ammount={90}
            percent={-0.5}
          />
        </div>
        <div className="p-7 h-auto">
          <Card className="h-auto mt-5 px-5 py-3">
            <h2 className="font-semibold text-xl">Ordenes de Servicio</h2>
            <OrdersChart />
          </Card>
        </div>
      </div>
    </div>
  )
}
