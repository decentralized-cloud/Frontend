/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SetEdgeClusterQueryVariables = {
    edgeClusterId: string;
    isUpdating: boolean;
};
export type SetEdgeClusterQueryResponse = {
    readonly user: {
        readonly " $fragmentRefs": FragmentRefs<"SetEdgeClusterContainer_user">;
    } | null;
};
export type SetEdgeClusterQuery = {
    readonly response: SetEdgeClusterQueryResponse;
    readonly variables: SetEdgeClusterQueryVariables;
};



/*
query SetEdgeClusterQuery(
  $edgeClusterId: ID!
  $isUpdating: Boolean!
) {
  user {
    ...SetEdgeClusterContainer_user
    id
  }
}

fragment SetEdgeClusterContainer_user on User {
  id
  edgeCluster(edgeClusterID: $edgeClusterId) @include(if: $isUpdating) {
    id
    ...SetEdgeClusterView_edgeCluster
  }
}

fragment SetEdgeClusterView_edgeCluster on EdgeCluster {
  id
  name
  clusterType
  clusterSecret
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "edgeClusterId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "isUpdating"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SetEdgeClusterQuery",
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
            "name": "SetEdgeClusterContainer_user"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SetEdgeClusterQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v1/*: any*/),
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
                    "name": "edgeClusterID",
                    "variableName": "edgeClusterId"
                  }
                ],
                "concreteType": "EdgeCluster",
                "kind": "LinkedField",
                "name": "edgeCluster",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "clusterType",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "clusterSecret",
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
    "cacheID": "ef8557a61f889118573f92e88e65cc99",
    "id": null,
    "metadata": {},
    "name": "SetEdgeClusterQuery",
    "operationKind": "query",
    "text": "query SetEdgeClusterQuery(\n  $edgeClusterId: ID!\n  $isUpdating: Boolean!\n) {\n  user {\n    ...SetEdgeClusterContainer_user\n    id\n  }\n}\n\nfragment SetEdgeClusterContainer_user on User {\n  id\n  edgeCluster(edgeClusterID: $edgeClusterId) @include(if: $isUpdating) {\n    id\n    ...SetEdgeClusterView_edgeCluster\n  }\n}\n\nfragment SetEdgeClusterView_edgeCluster on EdgeCluster {\n  id\n  name\n  clusterType\n  clusterSecret\n}\n"
  }
};
})();
(node as any).hash = '8786457e9c6a17bfce8f051e6365c57b';
export default node;
