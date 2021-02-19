/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UpdateProjectInput = {
    projectID: string;
    name: string;
    clientMutationId?: string | null;
};
export type UpdateProjectMutationVariables = {
    input: UpdateProjectInput;
};
export type UpdateProjectMutationResponse = {
    readonly updateProject: {
        readonly clientMutationId: string | null;
    } | null;
};
export type UpdateProjectMutation = {
    readonly response: UpdateProjectMutationResponse;
    readonly variables: UpdateProjectMutationVariables;
};



/*
mutation UpdateProjectMutation(
  $input: UpdateProjectInput!
) {
  updateProject(input: $input) {
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
    "concreteType": "UpdateProjectPayload",
    "kind": "LinkedField",
    "name": "updateProject",
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
    "name": "UpdateProjectMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateProjectMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4ed5d693ce3195a812604eba3c900a2c",
    "id": null,
    "metadata": {},
    "name": "UpdateProjectMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateProjectMutation(\n  $input: UpdateProjectInput!\n) {\n  updateProject(input: $input) {\n    clientMutationId\n  }\n}\n"
  }
};
})();
(node as any).hash = '794e7ee169ef98a5f7f58dc2104d3a3c';
export default node;
