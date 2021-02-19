/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SetEdgeClusterContainer_user = {
    readonly id: string;
    readonly edgeCluster?: {
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"SetEdgeClusterView_edgeCluster">;
    } | null;
    readonly " $refType": "SetEdgeClusterContainer_user";
};
export type SetEdgeClusterContainer_user$data = SetEdgeClusterContainer_user;
export type SetEdgeClusterContainer_user$key = {
    readonly " $data"?: SetEdgeClusterContainer_user$data;
    readonly " $fragmentRefs": FragmentRefs<"SetEdgeClusterContainer_user">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "edgeClusterId"
    },
    {
      "kind": "RootArgument",
      "name": "isUpdating"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "SetEdgeClusterContainer_user",
  "selections": [
    (v0/*: any*/),
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
            (v0/*: any*/),
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "SetEdgeClusterView_edgeCluster"
            }
          ],
          "storageKey": null
        }
      ]
    }
  ],
  "type": "User",
  "abstractKey": null
};
})();
(node as any).hash = '27f10ba23dad2dad629ffa182f919b13';
export default node;
