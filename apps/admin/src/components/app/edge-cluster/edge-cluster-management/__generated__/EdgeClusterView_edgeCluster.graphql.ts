/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EdgeClusterType = "K3S" | "%future added value";
export type EdgeClusterView_edgeCluster = {
    readonly id: string;
    readonly name: string;
    readonly clusterType: EdgeClusterType;
    readonly clusterSecret: string;
    readonly " $refType": "EdgeClusterView_edgeCluster";
};
export type EdgeClusterView_edgeCluster$data = EdgeClusterView_edgeCluster;
export type EdgeClusterView_edgeCluster$key = {
    readonly " $data"?: EdgeClusterView_edgeCluster$data;
    readonly " $fragmentRefs": FragmentRefs<"EdgeClusterView_edgeCluster">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EdgeClusterView_edgeCluster",
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
  "type": "EdgeCluster",
  "abstractKey": null
};
(node as any).hash = 'c25439ddde93abae3a23979806f3a239';
export default node;
