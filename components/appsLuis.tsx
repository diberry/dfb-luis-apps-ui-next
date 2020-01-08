import React from "react"
import AppsDataTable from './appsDataTable'

interface IProps {
    data: any[];
  }

export const Apps: React.FC<IProps> = (props: IProps) => {

console.log(`appsLuis data length = ${props.data.length}`)

return (
    <div className="container">
        AppsLuis
        <AppsDataTable data={props.data}></AppsDataTable>
    </div>
  )
}
