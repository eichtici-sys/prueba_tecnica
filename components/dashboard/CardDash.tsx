import { ArrowTrendUp } from "@/icons/icons"
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react"
import React, { ReactNode } from "react"

type Props = {
  icon: ReactNode
  title: string
  ammount: number
  percent: number
}

const CardDash = ({ icon, title, ammount, percent }: Props) => {
  const percentString = percent > 0 ? `+${percent}%` : `${percent}%`

  return (
    <>
      <Card className="max-w-[300px] w-full mx-auto h-[152px]">
        <CardHeader className="flex gap-2">
          <div className="bg-secondary w-4 h-4 flex items-center justify-center rounded-[4px]">
            {icon}
          </div>
          <span className="uppercase text-[12px]">{title}</span>
        </CardHeader>
        <CardBody>
          <h1 className="text-3xl font-black">{ammount}</h1>
        </CardBody>
        <CardFooter>
          <div className="flex gap-1 text-sm">
            {percent > 0 && <ArrowTrendUp className="w-5 h-5" />}
            <span
              className={`font-semibold ${
                percent > 0 ? "text-textSuccess" : "text-textError"
              }`}
            >
              {percentString}
            </span>
            <span className="font-extralight pl-2">mensual</span>
          </div>
        </CardFooter>
      </Card>
    </>
  )
}

export default CardDash
