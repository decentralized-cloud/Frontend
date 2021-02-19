/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EdgeClusterType = "K3S" | "%future added value";
export type SetEdgeClusterView_edgeCluster = {
    readonly id: string;
    readonly name: string;
    readonly clusterType: EdgeClusterType;
    readonly clusterSecret: string;
    readonly " $refType": "SetEdgeClusterView_edgeCluster";
};
export type SetEdgeClusterView_edgeCluster$data = SetEdgeClusterView_edgeCluster;
export type SetEdgeClusterView_edgeCluster$key = {
    readonly " $data"?: SetEdgeClusterView_edgeCluster$data;
    readonly " $fragmentRefs": FragmentRefs<"SetEdgeClusterView_edgeCluster">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SetEdgeClusterView_edgeCluster",
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
(node as any).hash = '1f7674ce5de144037dd5a4e1288aefd7';
export default node;
