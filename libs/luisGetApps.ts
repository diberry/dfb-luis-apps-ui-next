import { IValues, IFeatureFlags, LuisDataTable } from "dfb-luis-apps-lib"

export type FormLuisAuthSettings = {
  key: string
  endpoint: string
  versions: boolean
  models: boolean,
  pivot: boolean,
  mockData: boolean
}

export const getLuisApps = async (
  formLuisAuthSettings: FormLuisAuthSettings
): Promise<any> => {

  try{
    const values: IValues = {
      endpoint: formLuisAuthSettings.endpoint,
      key: formLuisAuthSettings.key,
      retryDelay: 4000
    }
    const features: IFeatureFlags = {
      versions: formLuisAuthSettings.versions,
      models: formLuisAuthSettings.models,
      mockData: formLuisAuthSettings.mockData,
      pivot: formLuisAuthSettings.pivot
    }

    const data =  await LuisDataTable.getDataTable(values, features);

    return data;

  } catch (ex){
    console.log(JSON.stringify(ex))
  }

}

