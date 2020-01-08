import React from 'react';
// @ts-ignore
import ReactTable from 'react-table';
import 'react-table/react-table.css';

interface IProps {
  data: any[];

}

const AppsDataTable: React.FC<IProps> = (props: IProps) => {

  const columns: any[] = [{
    Header: 'Id',
    accessor: 'id'
  }, {
    Header: 'Name',
    accessor: 'name'
  }, {
    Header: 'Active version',
    accessor: 'activeVersion'
  }, {
    Header: 'Versions',
    accessor: 'versionsCount'
  }, {
    Header: 'Date created',
    accessor: 'createdDateTime'
  }];

  console.log(`appsLuis data length = ${props.data.length}`)

  if (!ReactTable) {
    console.log(`react table empty`)
    return null;
  }
  return (

    <div >
      {
        (props.data.length > 0) &&

        <ReactTable
          data={props.data}
          columns={columns}
        />

      }

    </div>
  )
};

export default AppsDataTable;