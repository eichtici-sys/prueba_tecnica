import {
  PrismaClientInitializationError,
  PrismaClientKnownRequestError,
  PrismaClientRustPanicError,
  PrismaClientUnknownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/library"
import { AxiosError } from "axios"

export function handleServerError(error: unknown) {
  if (
    error instanceof PrismaClientValidationError ||
    error instanceof PrismaClientUnknownRequestError ||
    error instanceof PrismaClientKnownRequestError ||
    error instanceof PrismaClientInitializationError ||
    error instanceof PrismaClientRustPanicError
  ) {
    return error.message.split("\n")
  }

  if (error instanceof AxiosError) {
    return error.message.split("\n")
  }

  if (error instanceof Error) {
    return error.message
  }

  return String(error).split("\n")
}
