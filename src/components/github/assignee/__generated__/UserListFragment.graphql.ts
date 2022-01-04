/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type UserListFragment = {
    readonly nodes: ReadonlyArray<{
        readonly id: string;
        readonly name: string | null;
        readonly login: string;
        readonly avatarUrl: unknown;
    } | null> | null;
    readonly " $refType": "UserListFragment";
};
export type UserListFragment$data = UserListFragment;
export type UserListFragment$key = {
    readonly " $data"?: UserListFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"UserListFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
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
          "name": "login",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "avatarUrl",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "UserConnection",
  "abstractKey": null
};
(node as any).hash = 'e239752f4564255833f450c421eb3a57';
export default node;
