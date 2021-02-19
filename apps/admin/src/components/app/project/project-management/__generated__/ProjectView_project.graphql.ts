/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ProjectView_project = {
    readonly id: string;
    readonly name: string;
    readonly " $refType": "ProjectView_project";
};
export type ProjectView_project$data = ProjectView_project;
export type ProjectView_project$key = {
    readonly " $data"?: ProjectView_project$data;
    readonly " $fragmentRefs": FragmentRefs<"ProjectView_project">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProjectView_project",
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
    }
  ],
  "type": "Project",
  "abstractKey": null
};
(node as any).hash = 'f5306345a572afd986685b9206f9d160';
export default node;
