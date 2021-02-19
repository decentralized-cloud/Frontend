/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EdgeClusterManagementContainer_user = {
    readonly edgeClusters: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
            } | null;
        } | null> | null;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"EdgeClustersView_user">;
    readonly " $refType": "EdgeClusterManagementContainer_user";
};
export type EdgeClusterManagementContainer_user$data = EdgeClusterManagementContainer_user;
export type EdgeClusterManagementContainer_user$key = {
    readonly " $data"?: EdgeClusterManagementContainer_user$data;
    readonly " $fragmentRefs": FragmentRefs<"EdgeClusterManagementContainer_user">;
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
          "edgeClusters"
        ]
      }
    ]
  },
  "name": "EdgeClusterManagementContainer_user",
  "selections": [
    {
      "alias": "edgeClusters",
      "args": null,
      "concreteType": "EdgeClusterTypeConnection",
      "kind": "LinkedField",
      "name": "__User_edgeClusters_connection",
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
      "name": "EdgeClustersView_user"
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = '2106af323ea62de887cb4d1acc5c241b';
export default node;
