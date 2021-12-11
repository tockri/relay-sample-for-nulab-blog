/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type Repo_CardFragment = {
    readonly id: string;
    readonly name: string;
    readonly " $refType": "Repo_CardFragment";
};
export type Repo_CardFragment$data = Repo_CardFragment;
export type Repo_CardFragment$key = {
    readonly " $data"?: Repo_CardFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"Repo_CardFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Repo_CardFragment",
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
  "type": "Repository",
  "abstractKey": null
};
(node as any).hash = '6aa1df00cfa8a65fab2be66e722ba411';
export default node;
