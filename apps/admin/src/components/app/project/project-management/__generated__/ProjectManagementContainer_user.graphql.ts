/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ProjectManagementContainer_user = {
    readonly projects: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
            } | null;
        } | null> | null;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"ProjectsView_user">;
    readonly " $refType": "ProjectManagementContainer_user";
};
export type ProjectManagementContainer_user$data = ProjectManagementContainer_user;
export type ProjectManagementContainer_user$key = {
    readonly " $data"?: ProjectManagementContainer_user$data;
    readonly " $fragmentRefs": FragmentRefs<"ProjectManagementContainer_user">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "projects"
        ]
      }
    ]
  },
  "name": "ProjectManagementContainer_user",
  "selections": [
    {
      "alias": "projects",
      "args": null,
      "concreteType": "ProjectTypeConnection",
      "kind": "LinkedField",
      "name": "__User_projects_connection",
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
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "id",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
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
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ProjectsView_user"
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = 'd15a6fccecea5fe06710e5c10fe96c42';
export default node;
