"use client"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  {
    name: "Ene 01",
    total: 4000,
  },
  {
    name: "Ene 02",
    total: 3000,
  },
  {
    name: "Ene 03",
    total: 2000,
  },
  {
    name: "Ene 04",
    total: 2780,
  },
  {
    name: "Ene 05",
    total: 1890,
  },
]

type Props = {}

const OrdersChart = (props: Props) => {
  return (
    <div className="w-full h-[400px] p-10 flex justify-center">
      <>
        <AreaChart
          width={800}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total"
            stroke="#3FA8DF"
            fill="#3FA8DF"
          />
        </AreaChart>
      </>
    </div>
  )
}

export default OrdersChart
