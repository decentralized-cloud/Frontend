/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ProjectsQueryVariables = {};
export type ProjectsQueryResponse = {
    readonly user: {
        readonly " $fragmentRefs": FragmentRefs<"ProjectManagementContainer_user">;
    } | null;
};
export type ProjectsQuery = {
    readonly response: ProjectsQueryResponse;
    readonly variables: ProjectsQueryVariables;
};



/*
query ProjectsQuery {
  user {
    ...ProjectManagementContainer_user
    id
  }
}

fragment ProjectManagementContainer_user on User {
  projects(first: 1000) {
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
  ...ProjectsView_user
}

fragment ProjectView_project on Project {
  id
  name
}

fragment ProjectsView_user on User {
  projects(first: 1000) {
    edges {
      node {
        id
        ...ProjectView_project
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
    "name": "ProjectsQuery",
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
            "name": "ProjectManagementContainer_user"
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
    "name": "ProjectsQuery",
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
            "concreteType": "ProjectTypeConnection",
            "kind": "LinkedField",
            "name": "projects",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ProjectTypeEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Project",
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
            "storageKey": "projects(first:1000)"
          },
          {
            "alias": null,
            "args": (v0/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "User_projects",
            "kind": "LinkedHandle",
            "name": "projects"
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3e3a3f85b9beec464dbe367fcba654aa",
    "id": null,
    "metadata": {},
    "name": "ProjectsQuery",
    "operationKind": "query",
    "text": "query ProjectsQuery {\n  user {\n    ...ProjectManagementContainer_user\n    id\n  }\n}\n\nfragment ProjectManagementContainer_user on User {\n  projects(first: 1000) {\n    edges {\n      node {\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  ...ProjectsView_user\n}\n\nfragment ProjectView_project on Project {\n  id\n  name\n}\n\nfragment ProjectsView_user on User {\n  projects(first: 1000) {\n    edges {\n      node {\n        id\n        ...ProjectView_project\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'fc11ae6709a2c25261aae1d3c9674f2c';
export default node;
