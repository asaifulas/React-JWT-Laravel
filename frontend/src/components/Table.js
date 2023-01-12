import React, { useReducer, useState } from 'react'
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
  } from '@tanstack/react-table'
      
function Table({data, columns}) {
//const [data, setData] = useState(data1)
const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <div className="p-2">
       <table className='min-w-full divide-y divide-gray-200 table-fixed'>
        <thead className='bg-gray-200 dark:bg-gray-700'>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase'>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
              <th className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase'>
                ACTION
              </th>
            </tr>
          ))}
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className='hover:bg-gray-100 dark:hover:bg-gray-700'>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
              <td className='flex space-x-2'>
              <h2 className='text-green-600 hover:text-green-500 cursor-pointer text-md hover:scale-95 active:scale-105'>Variables</h2>
              <h2 className='text-yellow-600 hover:text-yellow-500 cursor-pointer text-md hover:scale-95 active:scale-105'>Edit</h2>
              <h2 className='text-red-600 hover:text-red-500 cursor-pointer text-md hover:scale-95 active:scale-105'>Delete</h2>
              </td>
            </tr>
          ))}
        </tbody>
        
      </table>
      <div className="flex items-center gap-2">
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              table.setPageIndex(page)
            }}
            className="border p-1 rounded w-16"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={e => {
            table.setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Table