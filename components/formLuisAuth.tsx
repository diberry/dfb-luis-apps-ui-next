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
    models: false,
    pivot: true,
    mockData: true
  } as FormLuisAuthSettings)

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
      key: luisAuth.key,
      pivot: luisAuth.pivot,
      mockData: luisAuth.mockData
    })
  }

  const handleChangeKey = (event: React.FormEvent<HTMLInputElement>) => {
    setLuisAuth({
      versions: luisAuth.versions,
      models: luisAuth.models,
      endpoint: luisAuth.endpoint,
      key: event.currentTarget.value,
      pivot: luisAuth.pivot,
      mockData: luisAuth.mockData
    })
  }

  const handleClickVersionsOnly = (event: React.FormEvent<HTMLInputElement>) => {
    const checked = event.currentTarget.checked ? true : false

    setLuisAuth({
      versions: checked,
      models: false,
      endpoint: luisAuth.endpoint,
      key: luisAuth.key,
      pivot: luisAuth.pivot,
      mockData: luisAuth.mockData
    })
  }

  const handleClickPivotTable = (event: React.FormEvent<HTMLInputElement>) => {
    const checked = event.currentTarget.checked ? true : false

    setLuisAuth({
      versions: luisAuth.versions,
      models: luisAuth.models,
      endpoint: luisAuth.endpoint,
      key: luisAuth.key,
      pivot: checked,
      mockData: luisAuth.mockData
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
      key: luisAuth.key,
      pivot: luisAuth.pivot,
      mockData: luisAuth.mockData
    })
  }

  const handleClickMockData = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const checked = event.currentTarget.checked ? true : false

    setLuisAuth({
      versions: luisAuth.versions,
      models: luisAuth.models,
      endpoint: luisAuth.endpoint,
      key: luisAuth.key,
      pivot: luisAuth.pivot,
      mockData: checked
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
        <input
          checked={luisAuth.pivot}
          type="checkbox"
          onChange={handleClickPivotTable}
          onBlur={handleClickPivotTable}
        />
        Pivot table
        <br />
        <input
          checked={luisAuth.mockData}
          type="checkbox"
          onChange={handleClickMockData}
          onBlur={handleClickMockData}
        />
        Mock data
        <br />
        <button type="submit">Submit</button>
      </form>
      <hr></hr>
      <div>{JSON.stringify(luisAuth)}</div>
      <hr></hr>
    </div>
  )
}
