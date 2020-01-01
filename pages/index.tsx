import { NextPage } from 'next';

import { ILuisApp, LuisApps, IValues, IFeatureFlags} from 'dfb-luis-apps-lib';

const Home: NextPage<{ userAgent: string, apps: string}> = ({ userAgent, apps}) => {
  return (
  <div>
    <h1>Hello world! - user agent: {userAgent}</h1>
    <div>{apps}</div>
  </div>
  )
};

Home.getInitialProps = async ({ req }) => {

  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;

  const key = '';
  const endpoint = 'https://diberry-luis-free-f0-s0-authoring.cognitiveservices.azure.com/';

  const values: IValues = {
    endpoint: endpoint,
    key: key,
  };
  const features: IFeatureFlags = {
    versions: false,
    models: false,
  };

  const appsReturned: ILuisApp[] = await LuisApps.getApps(values, features);

  const apps = JSON.stringify(appsReturned);
  console.log(apps);

  return { userAgent, apps };
};

export default Home;

