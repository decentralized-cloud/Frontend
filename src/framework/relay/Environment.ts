import { Environment, Network, RecordSource, Store, RequestParameters, Variables } from 'relay-runtime';

import '../../globalConfig';

const fetchQuery = async (request: RequestParameters, variables: Variables) => {
  const response = await fetch(window._env_.API_GATEWAY_PUBLIC_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: request.text,
      variables,
    }),
  });

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }

  const result = await response.json();

  if (result.errors && result.errors.length > 0) {
    throw new Error(result.errors.map((error: Error) => error.message).reduce((reduction: string, message: string) => `${reduction}\n${message}`));
  }

  return result;
};

// Create a network layer from the fetch function
const relayEnvironment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default relayEnvironment;
