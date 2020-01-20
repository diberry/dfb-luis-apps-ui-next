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

    const [expanded, setExpanded] = useState({})
    const [resized, setResized] = useState([])
    const [filtered, setFiltered] = useState([])
    const [selectedData, setSelectedData] = useState([] as any[])

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
    }
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
                        pivotBy={["appName","version", "modelReadableType"]}
                        collapseOnFilteringChange={false}
                        defaultSorted={[
                            { id: "appName", desc: false },
                            { id: "version", desc: false }
                        ]}
                        defaultFilterMethod = {defaultFilterMethod}
                        collapseOnSortingChange={false}
                                  // Controlled props
                          expanded={expanded}
                          resized={resized}
                          filtered={filtered}
                          // Callbacks
                          onExpandedChange={(expanded:any) => setExpanded( expanded )}
                          onResizedChange={(resized:any) => setResized( resized )}
                          onFilteredChange={(filtered:any) => setFiltered( filtered )}
                        columns={[{
                            Header: 'App ID',
                            id: "appId",
                            accessor: (d:any) => d.appId,
                            show: false

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