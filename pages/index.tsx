import { NextPage } from "next"
import { useState } from "react"

import { ILuisApp, LuisApps, IValues, IFeatureFlags } from "dfb-luis-apps-lib"

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {
  const [apps, setApps] = useState([] as ILuisApp[])
  const [luisAuth, setLuisAuth] = useState({
    key: "",
    endpoint: "",
    versions: false,
    models: false
  })

  const getApps = async (
    key: string,
    endpoint: string,
    versions: boolean,
    models: boolean
  ): Promise<ILuisApp[]> => {
    const values: IValues = {
      endpoint: endpoint,
      key: key
    }
    const features: IFeatureFlags = {
      versions: versions,
      models: models
    }

    const apps: ILuisApp[] = await LuisApps.getApps(values, features)

    return apps
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()

    const apps = await getApps(
      luisAuth.key,
      luisAuth.endpoint,
      luisAuth.versions,
      luisAuth.models
    )
    console.log(JSON.stringify(apps))
    setApps(apps)
  }
  const handleChangeEndpoint = (event: React.FormEvent<HTMLInputElement>) => {
    setLuisAuth({
      versions: luisAuth.versions,
      models: luisAuth.models,
      endpoint: event.currentTarget.value,
      key: luisAuth.key
    })
  }

  const handleChangeKey = (event: React.FormEvent<HTMLInputElement>) => {
    setLuisAuth({
      versions: luisAuth.versions,
      models: luisAuth.models,
      endpoint: luisAuth.endpoint,
      key: event.currentTarget.value
    })
  }

  const handleClickVersionsOnly = (event: React.FormEvent<HTMLInputElement>) => {
    const checked = event.currentTarget.checked ? true : false

    setLuisAuth({
      versions: checked,
      models: false,
      endpoint: luisAuth.endpoint,
      key: luisAuth.key
    })
  }

  const handleClickVersionsAndModels = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const checked = event.currentTarget.checked ? true : false

    setLuisAuth({
      versions: checked,
      models: checked,
      endpoint: luisAuth.endpoint,
      key: luisAuth.key
    })
  }

  return (
    <div>
      <h6>Hello world! - user agent: {userAgent}</h6>
      <form onSubmit={handleSubmit} noValidate={true}>
        <input
          value={luisAuth.key}
          type="text"
          placeholder="LUIS key"
          onChange={handleChangeKey}
        />
        <br />
        <input
          value={luisAuth.endpoint}
          type="text"
          placeholder="LUIS Endpoint"
          onChange={handleChangeEndpoint}
        />
        <br />
        <input
          checked={luisAuth.versions}
          type="checkbox"
          onChange={handleClickVersionsOnly}
        />
        Versions only
        <br />
        <input
          checked={luisAuth.models}
          type="checkbox"
          onChange={handleClickVersionsAndModels}
        />
        Versions and models
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>Apps length {apps.length}</div>
      <div>{JSON.stringify(luisAuth)}</div>
    </div>
  )
}

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent

  return { userAgent }
}

export default Home
