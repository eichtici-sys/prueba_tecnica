"use client"
import { UiProvider } from "@/context/UiProvider"
import React, { ReactNode } from "react"
import Aside from "../Aside"
import { UserProvider } from "@/context/UserProvider"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ToastContainer } from "react-toastify"

type Props = {
  children: ReactNode
}
const queryClient = new QueryClient()
const Body = ({ children }: Props) => {
  return (
    <UiProvider>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <body className="bg-backgroundColor font-manrope flex flex-row h-screen overflow-hidden">
            <Aside />
            <main className="w-full">{children}</main>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </body>
        </UserProvider>
      </QueryClientProvider>
    </UiProvider>
  )
}

export default Body
