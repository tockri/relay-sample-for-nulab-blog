/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type MilestoneListFragment = {
    readonly nodes: ReadonlyArray<{
        readonly id: string;
        readonly title: string;
    } | null> | null;
    readonly " $refType": "MilestoneListFragment";
};
export type MilestoneListFragment$data = MilestoneListFragment;
export type MilestoneListFragment$key = {
    readonly " $data"?: MilestoneListFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"MilestoneListFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MilestoneListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Milestone",
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
          "name": "title",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "MilestoneConnection",
  "abstractKey": null
};
(node as any).hash = '51339ac562ecbb656d1e557960b74fe9';
export default node;
