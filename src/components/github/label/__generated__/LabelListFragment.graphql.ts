/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type LabelListFragment = {
    readonly nodes: ReadonlyArray<{
        readonly id: string;
        readonly name: string;
        readonly color: string;
        readonly description: string | null;
    } | null> | null;
    readonly " $refType": "LabelListFragment";
};
export type LabelListFragment$data = LabelListFragment;
export type LabelListFragment$key = {
    readonly " $data"?: LabelListFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"LabelListFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LabelListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Label",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
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
          "name": "color",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "description",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "LabelConnection",
  "abstractKey": null
};
(node as any).hash = '5197392de16dd95d29bcf8abcaa0d67b';
export default node;
