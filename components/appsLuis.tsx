import React, { useState, useEffect } from "react"
import AppsDataTable from './appsDataTable'
import AppsPivotDataTable from './AppsPivotDataTable'

interface IProps {
    data: any;
    pivot: boolean;
  }

export const Apps: React.FC<IProps> = (props: IProps) => {

 console.log(JSON.stringify(props));

 const [nestedData, setNestedData] = useState([] as any[])
 const [pivotData, setPivotData] = useState([] as any[])

  // initialize dataset to original data set
  useEffect(() => {
    // Update the document title using the browser API
    console.log(`pivot = ${props.pivot}`)
    if(props.pivot){
      setPivotData(props.data.apps)
    } else {
      setNestedData(props.data.apps)
    }
  }, [props]);


return (
    <div className="container">

        {(nestedData?.length>0) && <AppsDataTable data={nestedData}></AppsDataTable>}
        {(pivotData?.length>0) && <AppsPivotDataTable data={pivotData}></AppsPivotDataTable>}
    </div>
  )
}
