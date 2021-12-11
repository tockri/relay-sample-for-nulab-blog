/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import ListPaginationQuery from "./ListPaginationQuery.graphql";
import { FragmentRefs } from "relay-runtime";
export type ListFragment = {
    readonly repositories: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly " $fragmentRefs": FragmentRefs<"CardFragment">;
            } | null;
        } | null> | null;
        readonly pageInfo: {
            readonly hasNextPage: boolean;
        };
    };
    readonly id: string;
    readonly " $refType": "ListFragment";
};
export type ListFragment$data = ListFragment;
export type ListFragment$key = {
    readonly " $data"?: ListFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ListFragment">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "repositories"
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "a"
    },
    {
      "defaultValue": 5,
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
      "operation": ListPaginationQuery,
      "identifierField": "id"
    }
  },
  "name": "ListFragment",
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
      "name": "__ListPaginationQuery_repositories_connection",
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
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "CardFragment"
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
      "storageKey": "__ListPaginationQuery_repositories_connection(orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"})"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
})();
(node as any).hash = '4bc505bf728ee5af5df9d06d636d85dc';
export default node;
