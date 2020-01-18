import React from "react";
import { NextPage } from "next"
import { useState } from "react"
import { FormLuisAuthSettings, getLuisApps } from "../libs/luisGetApps"
import { FormLuisAuth } from "../components/formLuisAuth"
//import { LuisApps } from "dfb-luis-apps-lib"
import { Apps } from '../components/appsLuis'

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {

  const [apps, setApps] = useState([] as any[])
  const [pivot, setPivot] = useState(true);

  console.log(new Date().toLocaleString() + " " + JSON.stringify(userAgent))

  const onSubmit = async (
    formLuisAuthSettings: FormLuisAuthSettings
  ): Promise<any> => {

    var luisApps:any[] = [];
    luisApps = await getLuisApps(formLuisAuthSettings)

    setApps(luisApps)
    setPivot(formLuisAuthSettings.pivot)
  }

  return (
    <div>
      <FormLuisAuth onSubmit={onSubmit} />
      <Apps data={apps} pivot={pivot}></Apps>
    </div>
  )
}

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent

  return { userAgent }
}

export default Home
