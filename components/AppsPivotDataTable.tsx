import React, { useState, useEffect } from 'react';
// @ts-ignore
import ReactTable from 'react-table';
import 'react-table/react-table.css';
//import { IFull } from 'dfb-luis-apps-lib';
//import matchSorter from 'match-sorter';

interface IProps {
    data: any[];
}

const AppsPivotDataTable: React.FC<IProps> = (props: IProps) => {

    console.log("AppsPivotDataTable");

    const [selectedData, setSelectedData] = useState([] as any[])
    //const [expandedRow, setExpandedRow] = useState(false)
    //const [selectedRow, setSelectedRow] = useState({})

    /*
      const addRowToDataset = (dataset: any[], rowToAddInformationFrom: any) => {
        console.log(rowToAddInformationFrom);
        return dataset;
      }
      */
    /*
        const getTrProps = (state: any, rowInfo: any, column: any) => {

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
    /*if (handleOriginal) {
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
*/


    const initializeTableData = (newTableData: any) => {
        setSelectedData(newTableData)
    }

    // initialize dataset to original data set
    useEffect(() => {
        // Update the document title using the browser API
        initializeTableData(props.data)
        console.log(`appsDataTable data length = ${props.data.length}`)
    }, [props.data]);


    if (!ReactTable) {
        console.log(`react table empty`)
        return null;
    }
    //https://stackoverflow.com/questions/53292731/single-editable-table-row-on-add-or-edit

    //https://stackoverflow.com/questions/50284049/react-this-undefined-when-adding-table-row
    //https://codesandbox.io/s/github/tannerlinsley/react-table/tree/v6/examples/pivoting-options


    //pivotBy={["appName", "version"]}

    /*

                        defaultFilterMethod={(filter: any, row: any) => {

                            const rowValue = String(row[filter.id]).toLowerCase();
                            const searchFor = filter.value.toLowerCase();
                            const testResult = rowValue.includes(searchFor)

                            console.log(`${testResult} = ${rowValue}.includes ${searchFor})`);
                            return testResult;
                            }
                        }


                                                defaultSorted={[
                            {
                                id: "appName",
                                desc: false
                            }, {
                                id: "version",
                                desc: false
                            }, { id: "modelName", desc: false }

                        ]}


                        SubComponent={(row: any) => {
                            return (
                                <div style={{ padding: "20px" }}>
                                    {JSON.stringify(row)}
                                </div>
                            );
                        }}
                        getTrProps={getTrProps}
                        collapseOnSortingChange={false}
    */
    /*
    const filterAllSubrowsVersion =  (filter: any, row: any, column: any) =>{
     const id = filter.pivotId || filter.id;

     console.log(`column ${JSON.stringify(column)}`);

     const searchFor = filter.value.toLowerCase();
     const matchSorterFilter = matchSorter(row._subRows, searchFor, { keys: [id] });

     console.log(`${id} matchSorterFilter = ${matchSorterFilter}`);

     const finalTest = matchSorterFilter || true;
     return finalTest;
 }*/
    const dataIncludesTerm = (data: string, term: string) => {
        return data != undefined
            ? String(data).toLowerCase().includes(term.toLowerCase())
            : true;
    }
    const defaultFilterMethod = (filter: any, row: any, column: any) => {

        if(Array.isArray(row))console.log("row is array");

        const searchTerm = filter.value.toLowerCase();
        const id = filter.pivotId || filter.id || column.id;
        const data = row[id];

        const result = dataIncludesTerm(data, searchTerm);
        console.log(`${id} defaultFilterMethod = ${data}, ${searchTerm} final ${result}`);

        return result;
    }/*
    const defaultRowFilterMethod = (filter: any, row: any, column: any) => {

        return defaultFilterMethod(filter, row, column);
    }
    const filterPivotRow = (filter: any, row: any, column: any) => {

        const id = filter.pivotId || filter.id || column.id;

        const searchFor = filter.value.toLowerCase();


        if (Array.isArray(row)){
            const matchSorterFilter = matchSorter(row, searchFor, { keys: [id] });
            const matchResult = matchSorterFilter || true;
            console.log(`row defaultRowPivot ${id} = ${matchSorterFilter.length}`);
            return matchResult;

        } else {
            const matchSorterFilter = matchSorter([row], searchFor, { keys: [id] });
            const matchResult = matchSorterFilter || true;
            console.log(`1 defaultRowPivot ${id} = ${matchResult}`);
            return matchResult;
        }



    }
*/
    return (

        <div >
            {
                (selectedData.length > 0) &&
                <div>
                    <div>Pivot table</div>
                    <ReactTable
                        data={selectedData}
                        filterable
                        defaultPageSize={10}
                        pivotBy={["appName"]}
                        defaultSorted={[
                            { id: "appName", desc: false },
                            { id: "version", desc: false }
                        ]}
                        defaultFilterMethod = {defaultFilterMethod}
                        collapseOnSortingChange={false}
                        columns={[{
                            Header: 'App ID',
                            id: "appId",
                            accessor: (d:any) => d.appId
                        }, {
                            Header: 'App Name',
                            accessor: 'appName'
                        },
                        {
                            Header: 'Version',
                            accessor: "version"
                        }
                        ,
                        {
                            Header: 'Model',
                            accessor: "modelName"
                        }
                        ,
                        {
                            Header: 'ModelReadableType',
                            accessor: "modelReadableType"
                        }
                        ]}
                    />
                </div>

            }

        </div>
    )
};

export default AppsPivotDataTable;