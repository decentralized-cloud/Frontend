/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type DeleteProjectInput = {
    projectID: string;
    clientMutationId?: string | null;
};
export type DeleteProjectMutationVariables = {
    input: DeleteProjectInput;
};
export type DeleteProjectMutationResponse = {
    readonly deleteProject: {
        readonly deletedProjectID: string;
    } | null;
};
export type DeleteProjectMutation = {
    readonly response: DeleteProjectMutationResponse;
    readonly variables: DeleteProjectMutationVariables;
};



/*
mutation DeleteProjectMutation(
  $input: DeleteProjectInput!
) {
  deleteProject(input: $input) {
    deletedProjectID
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
    "concreteType": "DeleteProjectPayload",
    "kind": "LinkedField",
    "name": "deleteProject",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deletedProjectID",
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
    "name": "DeleteProjectMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteProjectMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e578341ff20fe41c812c151d7a2f00e4",
    "id": null,
    "metadata": {},
    "name": "DeleteProjectMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteProjectMutation(\n  $input: DeleteProjectInput!\n) {\n  deleteProject(input: $input) {\n    deletedProjectID\n  }\n}\n"
  }
};
})();
(node as any).hash = '49fbb3f3f6547aa2e57e69a644b7606f';
export default node;
