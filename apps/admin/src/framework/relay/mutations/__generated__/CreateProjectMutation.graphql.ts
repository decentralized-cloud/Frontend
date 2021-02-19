/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CreateProjectInput = {
    name: string;
    clientMutationId?: string | null;
};
export type CreateProjectMutationVariables = {
    input: CreateProjectInput;
};
export type CreateProjectMutationResponse = {
    readonly createProject: {
        readonly clientMutationId: string | null;
    } | null;
};
export type CreateProjectMutation = {
    readonly response: CreateProjectMutationResponse;
    readonly variables: CreateProjectMutationVariables;
};



/*
mutation CreateProjectMutation(
  $input: CreateProjectInput!
) {
  createProject(input: $input) {
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
    "concreteType": "CreateProjectPayload",
    "kind": "LinkedField",
    "name": "createProject",
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
    "name": "CreateProjectMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateProjectMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b6d22867445f6feb0dd6b4dd67bef705",
    "id": null,
    "metadata": {},
    "name": "CreateProjectMutation",
    "operationKind": "mutation",
    "text": "mutation CreateProjectMutation(\n  $input: CreateProjectInput!\n) {\n  createProject(input: $input) {\n    clientMutationId\n  }\n}\n"
  }
};
})();
(node as any).hash = '49650b94567d5e44eef40eb0e87a7bc3';
export default node;
