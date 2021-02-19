/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type DeleteEdgeClusterInput = {
    edgeClusterID: string;
    clientMutationId?: string | null;
};
export type DeleteEdgeClusterMutationVariables = {
    input: DeleteEdgeClusterInput;
};
export type DeleteEdgeClusterMutationResponse = {
    readonly deleteEdgeCluster: {
        readonly deletedEdgeClusterID: string;
    } | null;
};
export type DeleteEdgeClusterMutation = {
    readonly response: DeleteEdgeClusterMutationResponse;
    readonly variables: DeleteEdgeClusterMutationVariables;
};



/*
mutation DeleteEdgeClusterMutation(
  $input: DeleteEdgeClusterInput!
) {
  deleteEdgeCluster(input: $input) {
    deletedEdgeClusterID
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
    "concreteType": "DeleteEdgeClusterPayload",
    "kind": "LinkedField",
    "name": "deleteEdgeCluster",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deletedEdgeClusterID",
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
    "name": "DeleteEdgeClusterMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteEdgeClusterMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "88a3e54d9df0dcde62e2eb9340ca29dc",
    "id": null,
    "metadata": {},
    "name": "DeleteEdgeClusterMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteEdgeClusterMutation(\n  $input: DeleteEdgeClusterInput!\n) {\n  deleteEdgeCluster(input: $input) {\n    deletedEdgeClusterID\n  }\n}\n"
  }
};
})();
(node as any).hash = '438c132593e1db9d2bc0186bfc2fe6ad';
export default node;
