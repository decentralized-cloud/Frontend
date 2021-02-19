/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type EdgeClusterType = "K3S" | "%future added value";
export type UpdateEdgeClusterInput = {
    edgeClusterID: string;
    projectID: string;
    name: string;
    clusterSecret: string;
    clusterType: EdgeClusterType;
    clientMutationId?: string | null;
};
export type UpdateEdgeClusterMutationVariables = {
    input: UpdateEdgeClusterInput;
};
export type UpdateEdgeClusterMutationResponse = {
    readonly updateEdgeCluster: {
        readonly clientMutationId: string | null;
    } | null;
};
export type UpdateEdgeClusterMutation = {
    readonly response: UpdateEdgeClusterMutationResponse;
    readonly variables: UpdateEdgeClusterMutationVariables;
};



/*
mutation UpdateEdgeClusterMutation(
  $input: UpdateEdgeClusterInput!
) {
  updateEdgeCluster(input: $input) {
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
    "concreteType": "UpdateEdgeClusterPayload",
    "kind": "LinkedField",
    "name": "updateEdgeCluster",
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
    "name": "UpdateEdgeClusterMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateEdgeClusterMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6a3e34edce7dcbbec99f0f916878ef5e",
    "id": null,
    "metadata": {},
    "name": "UpdateEdgeClusterMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateEdgeClusterMutation(\n  $input: UpdateEdgeClusterInput!\n) {\n  updateEdgeCluster(input: $input) {\n    clientMutationId\n  }\n}\n"
  }
};
})();
(node as any).hash = 'cd48e3bd9598c3f85d3aa2803c4adb07';
export default node;
