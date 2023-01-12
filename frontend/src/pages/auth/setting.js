import React from 'react'
import Table from '../../components/Table'
import {createColumnHelper} from '@tanstack/react-table'

const Setting = () => {
  
  const columnHelper = createColumnHelper();
    const Person = [
        {
          firstName: 'tanner',
          lastName: 'linsley',
          age: 24,
          visits: 100,
          status: 'In Relationship',
          progress: 50,
        },
        {
          firstName: 'Tanjong',
          lastName: 'Sabtu',
          age: 40,
          visits: 40,
          status: 'Single',
          progress: 80,
        },
        {
          firstName: 'joe',
          lastName: 'dirte',
          age: 45,
          visits: 20,
          status: 'Complicated',
          progress: 10,
        },
        {
          firstName: 'tanner',
          lastName: 'linsley',
          age: 24,
          visits: 100,
          status: 'In Relationship',
          progress: 50,
        },
        {
          firstName: 'Tanjong',
          lastName: 'Sabtu',
          age: 40,
          visits: 40,
          status: 'Single',
          progress: 80,
        },
        {
          firstName: 'joe',
          lastName: 'dirte',
          age: 45,
          visits: 20,
          status: 'Complicated',
          progress: 10,
        },
        {
          firstName: 'tanner',
          lastName: 'linsley',
          age: 24,
          visits: 100,
          status: 'In Relationship',
          progress: 50,
        },
        {
          firstName: 'Tanjong',
          lastName: 'Sabtu',
          age: 40,
          visits: 40,
          status: 'Single',
          progress: 80,
        },
        {
          firstName: 'joe',
          lastName: 'dirte',
          age: 45,
          visits: 20,
          status: 'Complicated',
          progress: 10,
        },
        {
          firstName: 'tanner',
          lastName: 'linsley',
          age: 24,
          visits: 100,
          status: 'In Relationship',
          progress: 50,
        },
        {
          firstName: 'Tanjong',
          lastName: 'Sabtu',
          age: 40,
          visits: 40,
          status: 'Single',
          progress: 80,
        },
        {
          firstName: 'joe',
          lastName: 'dirte',
          age: 45,
          visits: 20,
          status: 'Complicated',
          progress: 10,
        },
      ]

      const columns = [
        columnHelper.accessor('firstName', {
            header: 'First Name',
          cell: info => info.getValue(),
          footer: info => info.column.id,
        }),
        columnHelper.accessor(row => row.lastName, {
          id: 'lastName',
          cell: info => <i>{info.getValue()}</i>,
          header: () => <span>Last Name</span>,
          footer: info => info.column.id,
        }),
        columnHelper.accessor('age', {
          header: () => 'Age',
          cell: info => info.renderValue(),
          footer: info => info.column.id,
        }),
        columnHelper.accessor('visits', {
          header: () => <span>Visits</span>,
          footer: info => info.column.id,
        }),
        columnHelper.accessor('status', {
          header: 'Status',
          footer: info => info.column.id,
        }),
        columnHelper.accessor('progress', {
          header: 'Profile Progress',
          footer: info => info.column.id,
        }),
      ]
  return (
    <>

    <div className='bg-white rounded-md shadow-md p-5'>
      <h2 className='text-lg font-semibold'>Setting</h2>
      <div>
        <Table data={Person} columns={columns} />
          
      </div>
    </div>
    </>

  )
}

export default Setting