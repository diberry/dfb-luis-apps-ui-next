import { ILuisApp, LuisApps, IValues, IFeatureFlags } from "dfb-luis-apps-lib"

export type FormLuisAuthSettings = {
  key: string
  endpoint: string
  versions: boolean
  models: boolean
}

export const getLuisApps = async (
  formLuisAuthSettings: FormLuisAuthSettings
): Promise<LuisApps[]> => {
  const values: IValues = {
    endpoint: formLuisAuthSettings.endpoint,
    key: formLuisAuthSettings.key,
    retryDelay: 4000
  }
  const features: IFeatureFlags = {
    versions: formLuisAuthSettings.versions,
    models: formLuisAuthSettings.models
  }

  const apps: ILuisApp[] = await LuisApps.getApps(values, features)

  return apps
}
