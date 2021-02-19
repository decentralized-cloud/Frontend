/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SetProjectQueryVariables = {
    projectId: string;
    isUpdating: boolean;
};
export type SetProjectQueryResponse = {
    readonly user: {
        readonly " $fragmentRefs": FragmentRefs<"SetProjectContainer_user">;
    } | null;
};
export type SetProjectQuery = {
    readonly response: SetProjectQueryResponse;
    readonly variables: SetProjectQueryVariables;
};



/*
query SetProjectQuery(
  $projectId: ID!
  $isUpdating: Boolean!
) {
  user {
    ...SetProjectContainer_user
    id
  }
}

fragment SetProjectContainer_user on User {
  id
  project(projectID: $projectId) @include(if: $isUpdating) {
    id
    ...SetProjectView_project
  }
}

fragment SetProjectView_project on Project {
  id
  name
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "isUpdating"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "projectId"
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SetProjectQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SetProjectContainer_user"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "SetProjectQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "condition": "isUpdating",
            "kind": "Condition",
            "passingValue": true,
            "selections": [
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "projectID",
                    "variableName": "projectId"
                  }
                ],
                "concreteType": "Project",
                "kind": "LinkedField",
                "name": "project",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f2d223c25574faaef92ba3255409aa90",
    "id": null,
    "metadata": {},
    "name": "SetProjectQuery",
    "operationKind": "query",
    "text": "query SetProjectQuery(\n  $projectId: ID!\n  $isUpdating: Boolean!\n) {\n  user {\n    ...SetProjectContainer_user\n    id\n  }\n}\n\nfragment SetProjectContainer_user on User {\n  id\n  project(projectID: $projectId) @include(if: $isUpdating) {\n    id\n    ...SetProjectView_project\n  }\n}\n\nfragment SetProjectView_project on Project {\n  id\n  name\n}\n"
  }
};
})();
(node as any).hash = 'cc40fc2e4490098f49152ef08ea66cfe';
export default node;
