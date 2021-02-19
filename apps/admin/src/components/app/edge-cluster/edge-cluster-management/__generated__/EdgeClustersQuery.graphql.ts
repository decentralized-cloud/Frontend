/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EdgeClustersQueryVariables = {};
export type EdgeClustersQueryResponse = {
    readonly user: {
        readonly " $fragmentRefs": FragmentRefs<"EdgeClusterManagementContainer_user">;
    } | null;
};
export type EdgeClustersQuery = {
    readonly response: EdgeClustersQueryResponse;
    readonly variables: EdgeClustersQueryVariables;
};



/*
query EdgeClustersQuery {
  user {
    ...EdgeClusterManagementContainer_user
    id
  }
}

fragment EdgeClusterManagementContainer_user on User {
  edgeClusters(first: 1000) {
    edges {
      node {
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  ...EdgeClustersView_user
}

fragment EdgeClusterView_edgeCluster on EdgeCluster {
  id
  name
  clusterType
  clusterSecret
}

fragment EdgeClustersView_user on User {
  edgeClusters(first: 1000) {
    edges {
      node {
        id
        ...EdgeClusterView_edgeCluster
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1000
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "EdgeClustersQuery",
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
            "name": "EdgeClusterManagementContainer_user"
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "EdgeClustersQuery",
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
            "alias": null,
            "args": (v0/*: any*/),
            "concreteType": "EdgeClusterTypeConnection",
            "kind": "LinkedField",
            "name": "edgeClusters",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "EdgeClusterTypeEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "EdgeCluster",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      },
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
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "endCursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasNextPage",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "edgeClusters(first:1000)"
          },
          {
            "alias": null,
            "args": (v0/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "User_edgeClusters",
            "kind": "LinkedHandle",
            "name": "edgeClusters"
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "16b777061fd2777b2142e7c140d263bd",
    "id": null,
    "metadata": {},
    "name": "EdgeClustersQuery",
    "operationKind": "query",
    "text": "query EdgeClustersQuery {\n  user {\n    ...EdgeClusterManagementContainer_user\n    id\n  }\n}\n\nfragment EdgeClusterManagementContainer_user on User {\n  edgeClusters(first: 1000) {\n    edges {\n      node {\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  ...EdgeClustersView_user\n}\n\nfragment EdgeClusterView_edgeCluster on EdgeCluster {\n  id\n  name\n  clusterType\n  clusterSecret\n}\n\nfragment EdgeClustersView_user on User {\n  edgeClusters(first: 1000) {\n    edges {\n      node {\n        id\n        ...EdgeClusterView_edgeCluster\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '66cc05a973f1bdb3ac209be5c08d0667';
export default node;
