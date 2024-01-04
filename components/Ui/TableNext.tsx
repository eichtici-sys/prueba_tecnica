import {
  Chip,
  Input,
  Pagination,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react"
import React, { MouseEvent, ReactNode, useCallback, useState } from "react"
import { BiSearch } from "react-icons/bi"

import { FaEyeSlash } from "react-icons/fa"
import { EyeIcon } from "./EyeIcon"
import { EditIcon } from "./EditIcon"
import { DeleteIcon } from "./DeleteIcon"

type Props = {
  columns: ColumnsProps[]
  data: any[]
  isLoading?: boolean
  emptyLabel?: string
  totalLabel?: string
  allowsSorting?: boolean
  onEdit?: (row: any) => void
  onDelete?: (row: any) => void
  useView?: boolean
  onView?: (id: number) => void
  useRounded?: boolean
}

export type ColumnsProps = {
  key: string
  display: string
  render?: (data: any) => ReactNode
}

export const TableNext = ({
  columns,
  data,
  isLoading = false,
  emptyLabel = "No existen registros",
  totalLabel = "Registros",
  allowsSorting = false,
  onEdit,
  onDelete,
  useView = false,
  onView,
  useRounded = true,
}: Props) => {
  const [page, setPage] = useState(1)
  const [filterValue, setFilterValue] = useState("")
  const rowsPerPage = 10
  const classWrapper = `max-h-[382px] ${useRounded ? "" : "rounded-none"}`
  const hasSearchFilter = Boolean(filterValue)
  const filteredItems = React.useMemo(() => {
    let filteredUsers = data?.length > 0 ? [...data] : []

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(filterValue.toLowerCase())
      )
    }

    return filteredUsers
  }, [data, filterValue, hasSearchFilter])

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage

    return filteredItems.slice(start, end)
  }, [page, filteredItems, rowsPerPage])

  const pages = Math.ceil(filteredItems.length / rowsPerPage)

  const onSearchChange = useCallback((value: any) => {
    setFilterValue(value)
    setPage(1)
  }, [])

  const onClear = useCallback(() => {
    setFilterValue("")
    setPage(1)
  }, [])

  const renderCell = useCallback(
    (row: any, columnKey: any) => {
      const cellValue = row[columnKey]

      switch (columnKey) {
        case "status":
          return (
            <div className="flex justify-center">
              <Chip
                className="capitalize"
                color={row.status === "COMPLETED" ? "success" : "default"}
                size="sm"
                variant="flat"
              >
                <span className="flex gap-1 items-center">
                  {row.status === "NOT_COMPLETED" ? (
                    <EyeIcon />
                  ) : (
                    <FaEyeSlash />
                  )}
                  {cellValue}
                </span>
              </Chip>
            </div>
          )

        case "actions":
          return (
            <div className="relative flex items-center justify-center gap-2">
              {useView && (
                <>
                  <Tooltip content="Ver detalles">
                    <span
                      className="text-lg text-default-400 cursor-pointer active:opacity-50"
                      onClick={onView ? () => onView(row.id) : () => {}}
                    >
                      <EyeIcon />
                    </span>
                  </Tooltip>
                </>
              )}
              <Tooltip content="Editar">
                <span
                  className="text-lg text-default-400 cursor-pointer active:opacity-50"
                  onClick={onEdit ? () => onEdit(row) : () => {}}
                >
                  <EditIcon />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Eliminar">
                <span
                  className="text-lg text-danger cursor-pointer active:opacity-50"
                  onClick={onDelete ? () => onDelete(row) : () => {}}
                >
                  <DeleteIcon />
                </span>
              </Tooltip>
            </div>
          )
        default:
          return cellValue
      }
    },
    [onEdit, onDelete, onView, useView]
  )
  return (
    <>
      <div className="flex flex-col gap-4 my-2">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Buscar"
            startContent={<BiSearch />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
        </div>
      </div>
      <Table
        classNames={{
          th: ["text-center text-white dark:bg-default-100 bg-darkText"],
          wrapper: [classWrapper],
        }}
        isHeaderSticky
        color={"primary"}
        selectionMode="single"
        bottomContent={
          <div className="py-2 px-2 flex justify-between items-center">
            <span className="w-[30%] text-small text-default-400">
              {`Total: ${items.length} ${totalLabel}`}
            </span>
            <Pagination
              isCompact
              showControls
              showShadow
              color="secondary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        }
      >
        <TableHeader>
          {columns.map((item) => (
            <TableColumn
              key={item.key}
              allowsSorting={allowsSorting}
              className=" bg-primary"
            >
              {item.display}
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody
          items={items}
          isLoading={isLoading}
          loadingContent={<Spinner />}
          emptyContent={emptyLabel}
        >
          {items.map((row) => (
            <TableRow key={row.id}>
              {(columnKey) => (
                <TableCell>{renderCell(row, columnKey)}</TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

export default TableNext
