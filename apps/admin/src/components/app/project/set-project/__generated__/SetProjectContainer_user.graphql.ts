/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SetProjectContainer_user = {
    readonly id: string;
    readonly project?: {
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"SetProjectView_project">;
    } | null;
    readonly " $refType": "SetProjectContainer_user";
};
export type SetProjectContainer_user$data = SetProjectContainer_user;
export type SetProjectContainer_user$key = {
    readonly " $data"?: SetProjectContainer_user$data;
    readonly " $fragmentRefs": FragmentRefs<"SetProjectContainer_user">;
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
      "name": "isUpdating"
    },
    {
      "kind": "RootArgument",
      "name": "projectId"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "SetProjectContainer_user",
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
              "name": "projectID",
              "variableName": "projectId"
            }
          ],
          "concreteType": "Project",
          "kind": "LinkedField",
          "name": "project",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "SetProjectView_project"
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
(node as any).hash = '292912f7c41785ba36f07f482508ac69';
export default node;
