/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type EdgeClusterType = "K3S" | "%future added value";
export type CreateEdgeClusterInput = {
    projectID: string;
    name: string;
    clusterSecret: string;
    clusterType: EdgeClusterType;
    clientMutationId?: string | null;
};
export type CreateEdgeClusterMutationVariables = {
    input: CreateEdgeClusterInput;
};
export type CreateEdgeClusterMutationResponse = {
    readonly createEdgeCluster: {
        readonly clientMutationId: string | null;
    } | null;
};
export type CreateEdgeClusterMutation = {
    readonly response: CreateEdgeClusterMutationResponse;
    readonly variables: CreateEdgeClusterMutationVariables;
};



/*
mutation CreateEdgeClusterMutation(
  $input: CreateEdgeClusterInput!
) {
  createEdgeCluster(input: $input) {
    clientMutationId
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateEdgeClusterPayload",
    "kind": "LinkedField",
    "name": "createEdgeCluster",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientMutationId",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateEdgeClusterMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateEdgeClusterMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4eb1f3a44f6e17382508e9ad1396a307",
    "id": null,
    "metadata": {},
    "name": "CreateEdgeClusterMutation",
    "operationKind": "mutation",
    "text": "mutation CreateEdgeClusterMutation(\n  $input: CreateEdgeClusterInput!\n) {\n  createEdgeCluster(input: $input) {\n    clientMutationId\n  }\n}\n"
  }
};
})();
(node as any).hash = '5b2809bfd17c3394940acec22d599e23';
export default node;
