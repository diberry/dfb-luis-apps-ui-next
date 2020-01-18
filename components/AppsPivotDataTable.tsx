import React, { useState, useEffect } from 'react';
// @ts-ignore
import ReactTable from 'react-table';
import 'react-table/react-table.css';
//import { IFull } from 'dfb-luis-apps-lib';

interface IProps {
  data: any[];
}

const AppsPivotDataTable: React.FC<IProps> = (props: IProps) => {

    console.log("AppsPivotDataTable");

  const [selectedData, setSelectedData] = useState([] as any[])
  //const [expandedRow, setExpandedRow] = useState(false)
  //const [selectedRow, setSelectedRow] = useState({})

  const columns: any[] = [{
    Header: 'App ID',
    accessor: 'appId'
  }, {
    Header: 'App Name',
    accessor: 'appName'
  }, {
    Header: '# Versions',
    accessor: 'appVersionsCount'
  },
  {
    Header: 'Version',
    accessor: 'version'
  },
  {
    Header: 'Model',
    accessor: 'modelName',
  },
  {
    Header: 'Model type',
    accessor: 'modeReadableType',
  }
];
/*
  const addRowToDataset = (dataset: any[], rowToAddInformationFrom: any) => {
    console.log(rowToAddInformationFrom);
    return dataset;
  }
  */

  const getTrProps = (state:any , rowInfo: any, column:any) => {

    console.log(state)
    console.log(column)

    if (rowInfo) {

      //setExpandedRow(!expandedRow);

      return {

        onClick: (e: any, handleOriginal: any) => {

          console.log(e)

          /*(if(expandedRow){
            setSelectedRow(rowInfo.original);
            setSelectedData(addRowToDataset(selectedData, selectedRow))
          } else {
            setSelectedRow({});
            setSelectedData(props.data);
          }*/

          // If you want to fire the original onClick handler, call the
          // 'handleOriginal' function.
          if (handleOriginal) {
            handleOriginal();
          }


        },
        style: {
          background: rowInfo.row.versionsCount === 0 ? 'red' : 'green',
          color: 'white'
        }
      }
    }
    return {};
  }


  const initializeTableData=(newTableData:any)=> {
    setSelectedData(newTableData)
  }

  // initialize dataset to original data set
  useEffect(() => {
    // Update the document title using the browser API
    initializeTableData(props.data)
    console.log(`appsDataTable data length = ${selectedData.length}`)
  }, [props.data]);


  if (!ReactTable) {
    console.log(`react table empty`)
    return null;
  }
//https://stackoverflow.com/questions/53292731/single-editable-table-row-on-add-or-edit

//https://stackoverflow.com/questions/50284049/react-this-undefined-when-adding-table-row

  return (

    <div >
      {
        (selectedData.length > 0) &&
        <div>
        <div>Pivot table</div>
        <ReactTable
          data={selectedData}
          columns={columns}
          filterable
          defaultSorted={[
            {
              id: "appName",
              desc: false
            }
          ]}
          defaultFilterMethod={(filter:any , row:any ) => {
            return String(row[filter.id]).toLowerCase().includes(filter.value.toLowerCase());}
          }
          SubComponent={(row: any) => {
            return (
              <div style={{ padding: "20px" }}>
              {JSON.stringify(row)}
              </div>
            );
          }}
          getTrProps={getTrProps}
        />
        </div>

      }

    </div>
  )
};

export default AppsPivotDataTable;