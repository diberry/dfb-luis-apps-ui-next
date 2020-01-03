import { NextPage } from "next"
import { useState } from "react"
import { FormLuisAuthSettings, getLuisApps } from "../libs/luisGetApps"
import { FormLuisAuth } from "../components/formLuisAuth"
import { LuisApps } from "dfb-luis-apps-lib"

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {
  const [apps, setApps] = useState([] as LuisApps[])
  const [luisAuth, setLuisAuth] = useState({} as FormLuisAuthSettings)

  const onSubmit = async (
    formLuisAuthSettings: FormLuisAuthSettings
  ): Promise<any> => {
    setLuisAuth(formLuisAuthSettings)
    const luisApps = await getLuisApps(formLuisAuthSettings)

    console.log(JSON.stringify(luisApps))

    setApps(luisApps)
  }

  return (
    <div>
      <h6>Hello world! - user agent: {userAgent}</h6>
      <FormLuisAuth onSubmit={onSubmit} />
      <div>Apps length {apps.length}</div>
      <div>After fetch{JSON.stringify(luisAuth)}</div>
      <div>After fetch{JSON.stringify(apps)}</div>
    </div>
  )
}

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent

  return { userAgent }
}

export default Home
