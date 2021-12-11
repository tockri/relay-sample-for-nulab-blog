/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CardFragment = {
    readonly id: string;
    readonly name: string;
    readonly " $refType": "CardFragment";
};
export type CardFragment$data = CardFragment;
export type CardFragment$key = {
    readonly " $data"?: CardFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CardFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CardFragment",
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
(node as any).hash = 'cf27134e0c8b3ca474272772c1025def';
export default node;
