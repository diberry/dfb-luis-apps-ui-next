import React, { useState } from "react"
import { FormLuisAuthSettings } from "../libs/luisGetApps"

export type FormLuisAuthProps = {
  onSubmit: (x: FormLuisAuthSettings) => Promise<void>
}

export const FormLuisAuth = (formProps: FormLuisAuthProps) => {
  const [luisAuth, setLuisAuth] = useState({
    key: "",
    endpoint: "",
    versions: false,
    models: false
  })
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    formProps.onSubmit(luisAuth)
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
    <div className="container">
      <form onSubmit={handleSubmit} noValidate={true}>
        <input
          value={luisAuth.key}
          type="text"
          placeholder="LUIS key"
          onChange={handleChangeKey}
          onBlur={handleChangeKey}
        />
        <br />
        <input
          value={luisAuth.endpoint}
          type="text"
          placeholder="LUIS Endpoint"
          onChange={handleChangeEndpoint}
          onBlur={handleChangeEndpoint}
        />
        <br />
        <input
          checked={luisAuth.versions}
          type="checkbox"
          onChange={handleClickVersionsOnly}
          onBlur={handleClickVersionsOnly}
        />
        Versions only
        <br />
        <input
          checked={luisAuth.models}
          type="checkbox"
          onChange={handleClickVersionsAndModels}
          onBlur={handleClickVersionsAndModels}
        />
        Versions and models
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>Before fetch{JSON.stringify(luisAuth)}</div>
    </div>
  )
}
