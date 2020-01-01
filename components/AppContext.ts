import React from "react"
import { ILuisApp } from "dfb-luis-apps-lib"

type ContextProps = {
  apps: ILuisApp[]
  key: string
  endpoint: string
}

const AppContext = React.createContext<Partial<ContextProps>>({})

export { AppContext }
