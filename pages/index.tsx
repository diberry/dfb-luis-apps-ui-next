import React from "react";
import { NextPage } from "next"
import { useState } from "react"
import { FormLuisAuthSettings, getLuisApps } from "../libs/luisGetApps"
import { FormLuisAuth } from "../components/formLuisAuth"
import { LuisApps, ILuisApp } from "dfb-luis-apps-lib"
import { Apps } from '../components/appsLuis'
import { MockDataFull } from './MockData';

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {

  const test = true

  const [apps, setApps] = useState([] as LuisApps[])

  console.log(new Date().toLocaleString() + " " + JSON.stringify(userAgent))

  const onSubmit = async (
    formLuisAuthSettings: FormLuisAuthSettings
  ): Promise<any> => {

    var luisApps:LuisApps[] = [];

    if (!test){
      luisApps = await getLuisApps(formLuisAuthSettings)
    } else {
      luisApps = MockDataFull;
    }

    console.log(new Date().toLocaleString() + " " + JSON.stringify(luisApps))

    setApps(luisApps)
  }

  console.log(`index data length apps = ${apps.length}`)

  return (
    <div>
      <FormLuisAuth onSubmit={onSubmit} />
      <Apps data={apps}></Apps>
    </div>
  )
}

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent

  return { userAgent }
}

export default Home
