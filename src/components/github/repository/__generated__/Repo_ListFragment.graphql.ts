/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type Repo_ListFragment = {
    readonly pageInfo: {
        readonly endCursor: string | null;
        readonly hasNextPage: boolean;
        readonly startCursor: string | null;
        readonly hasPreviousPage: boolean;
    };
    readonly nodes: ReadonlyArray<{
        readonly id: string;
        readonly name: string;
    } | null> | null;
    readonly " $refType": "Repo_ListFragment";
};
export type Repo_ListFragment$data = Repo_ListFragment;
export type Repo_ListFragment$key = {
    readonly " $data"?: Repo_ListFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"Repo_ListFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Repo_ListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "PageInfo",
      "kind": "LinkedField",
      "name": "pageInfo",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "endCursor",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "hasNextPage",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "startCursor",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "hasPreviousPage",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Repository",
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "RepositoryConnection",
  "abstractKey": null
};
(node as any).hash = '08ba674d6119686ecbc41aeed20bc901';
export default node;
