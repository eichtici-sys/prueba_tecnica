import { userBody } from "@/helpers/api/user"
import { useCreateUser } from "@/hooks/use-user"
import useUser from "@/hooks/useUser"
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react"
import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

type Props = {}

const ModalUser = (props: Props) => {
  const { dialog, handleOpenDialog, handlecloseDialog, currentUser } = useUser()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()
  const createUser = useCreateUser()
  const onSubmit = handleSubmit(async (data) => {
    try {
      await toast.promise(
        new Promise(async (resolve, reject) => {
          try {
            const response = await createUser.mutateAsync(data as userBody)
            resolve(response)
          } catch (error) {
            reject(error)
          }
        }),
        {
          pending: "Ingresando nuevos datos",
          success: "Usuario creado correctamente",
          error: "Error al crear nuevo usuario",
        }
      )
      handlecloseDialog()
      setValue("name", "")
      setValue("lastname", "")
    } catch (error) {
      toast.error("Error inesperado")
    }
  })

  useEffect(() => {
    if (currentUser !== undefined) {
      setValue("name", currentUser.name)
      setValue("lastname", currentUser.lastname)
    } else {
      setValue("name", "")
      setValue("lastname", "")
    }
  }, [currentUser, setValue])
  return (
    <Modal
      isOpen={dialog}
      onOpenChange={handleOpenDialog}
      placement="top-center"
      onClose={handlecloseDialog}
    >
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1">
            Agregar Usuario
          </ModalHeader>
          <form onSubmit={onSubmit}>
            <ModalBody>
              <Input
                label="Nombre"
                placeholder="Ingresa nombre del usuario"
                variant="bordered"
                {...register("name", {
                  required: {
                    value: true,
                    message: "El Nombre es requerido",
                  },
                })}
              />
              {errors.name && (
                <span className="text-red-500 text-[12px]">
                  {errors.name.message?.toString()}
                </span>
              )}
              <Input
                label="Apellido"
                placeholder="Ingresa el Apellido del usuario"
                variant="bordered"
                {...register("lastname", {
                  required: {
                    value: true,
                    message: "El Apellido es requerido",
                  },
                })}
              />
              {errors.lastname && (
                <span className="text-red-500 text-[12px]">
                  {errors.lastname.message?.toString()}
                </span>
              )}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={handlecloseDialog}>
                Cancelar
              </Button>
              <Button color="primary" type="submit">
                Registrar
              </Button>
            </ModalFooter>
          </form>
        </>
      </ModalContent>
    </Modal>
  )
}

export default ModalUser
