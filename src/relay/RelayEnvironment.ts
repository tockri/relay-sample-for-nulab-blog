import {Environment, FetchFunction, Network, RecordSource, Store} from "relay-runtime";
import {Config} from "../system/config";

const fetchRelay: FetchFunction = async (params, variables) => {
  console.debug(
      `fetching query ${params.name} with ${JSON.stringify(variables)}`
  )
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${Config.githubApiToken()}`
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  })
  return await response.json()
}

export const RelayEnvironment = new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
})
