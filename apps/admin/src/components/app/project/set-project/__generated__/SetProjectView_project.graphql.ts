/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SetProjectView_project = {
    readonly id: string;
    readonly name: string;
    readonly " $refType": "SetProjectView_project";
};
export type SetProjectView_project$data = SetProjectView_project;
export type SetProjectView_project$key = {
    readonly " $data"?: SetProjectView_project$data;
    readonly " $fragmentRefs": FragmentRefs<"SetProjectView_project">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SetProjectView_project",
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
(node as any).hash = '792965a0e2f354b4dcdf3cc005ce6dc6';
export default node;
