/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import Repo_ListPaginationQuery from "./Repo_ListPaginationQuery.graphql";
import { FragmentRefs } from "relay-runtime";
export type RepoListFragment = {
    readonly repositories: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly name: string;
            } | null;
        } | null> | null;
        readonly pageInfo: {
            readonly hasNextPage: boolean;
            readonly endCursor: string | null;
        };
    };
    readonly id: string;
    readonly " $refType": "RepoListFragment";
};
export type RepoListFragment$data = RepoListFragment;
export type RepoListFragment$key = {
    readonly " $data"?: RepoListFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"RepoListFragment">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "repositories"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "a"
    },
    {
      "defaultValue": 10,
      "kind": "LocalArgument",
      "name": "f"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "f",
        "cursor": "a",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "f",
          "cursor": "a"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": Repo_ListPaginationQuery,
      "identifierField": "id"
    }
  },
  "name": "RepoListFragment",
  "selections": [
    {
      "alias": "repositories",
      "args": [
        {
          "kind": "Literal",
          "name": "orderBy",
          "value": {
            "direction": "DESC",
            "field": "CREATED_AT"
          }
        }
      ],
      "concreteType": "RepositoryConnection",
      "kind": "LinkedField",
      "name": "__Repo_ListPaginationQuery_repositories_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "RepositoryEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Repository",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v1/*: any*/),
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
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
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
              "name": "hasNextPage",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "__Repo_ListPaginationQuery_repositories_connection(orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"})"
    },
    (v1/*: any*/)
  ],
  "type": "User",
  "abstractKey": null
};
})();
(node as any).hash = 'e9c38fe8a9a3e4e076a96bfcf688e4ca';
export default node;
