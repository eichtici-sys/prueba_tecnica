import { handleServerError } from "@/helpers/error"
import prisma from "@/prisma/client"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const data = await req.json()

  try {
    const newUser = await prisma.user.create({
      data: {
        ...data,
      },
    })
    console.log(newUser)
    return NextResponse.json(newUser)
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: handleServerError(error) },
      { status: 500 }
    )
  }
}

export async function DELETE(req: NextRequest) {
  const params = req.nextUrl.searchParams
  const id = params.get("id")
  try {
    await prisma.user.delete({
      where: {
        id: Number(id),
      },
    })

    return NextResponse.json({ message: "Eliminado" }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: handleServerError(error) },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const users = await prisma.user.findMany()
    return NextResponse.json(users)
  } catch (error) {
    return NextResponse.json(
      { message: handleServerError(error) },
      { status: 500 }
    )
  }
}
