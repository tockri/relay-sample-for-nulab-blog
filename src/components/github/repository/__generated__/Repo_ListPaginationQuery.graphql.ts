/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type Repo_ListPaginationQueryVariables = {
    a?: string | null | undefined;
    f?: number | null | undefined;
    id: string;
};
export type Repo_ListPaginationQueryResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"Repo_ListFragment">;
    } | null;
};
export type Repo_ListPaginationQuery = {
    readonly response: Repo_ListPaginationQueryResponse;
    readonly variables: Repo_ListPaginationQueryVariables;
};



/*
query Repo_ListPaginationQuery(
  $a: String
  $f: Int = 10
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...Repo_ListFragment_P3xnp
    id
  }
}

fragment Repo_CardFragment on Repository {
  id
  name
}

fragment Repo_ListFragment_P3xnp on User {
  repositories(first: $f, after: $a, orderBy: {field: CREATED_AT, direction: DESC}) {
    edges {
      node {
        id
        name
        ...Repo_CardFragment
        __typename
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
  id
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "a"
  },
  {
    "defaultValue": 10,
    "kind": "LocalArgument",
    "name": "f"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "a"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "f"
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": {
      "direction": "DESC",
      "field": "CREATED_AT"
    }
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "Repo_ListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": [
              {
                "kind": "Variable",
                "name": "a",
                "variableName": "a"
              },
              {
                "kind": "Variable",
                "name": "f",
                "variableName": "f"
              }
            ],
            "kind": "FragmentSpread",
            "name": "Repo_ListFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "Repo_ListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v4/*: any*/),
                "concreteType": "RepositoryConnection",
                "kind": "LinkedField",
                "name": "repositories",
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
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "name",
                            "storageKey": null
                          },
                          (v2/*: any*/)
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
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v4/*: any*/),
                "filters": [
                  "orderBy"
                ],
                "handle": "connection",
                "key": "Repo_ListPaginationQuery_repositories",
                "kind": "LinkedHandle",
                "name": "repositories"
              }
            ],
            "type": "User",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "94f933ab8334937db3c4b53ee468b180",
    "id": null,
    "metadata": {},
    "name": "Repo_ListPaginationQuery",
    "operationKind": "query",
    "text": "query Repo_ListPaginationQuery(\n  $a: String\n  $f: Int = 10\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...Repo_ListFragment_P3xnp\n    id\n  }\n}\n\nfragment Repo_CardFragment on Repository {\n  id\n  name\n}\n\nfragment Repo_ListFragment_P3xnp on User {\n  repositories(first: $f, after: $a, orderBy: {field: CREATED_AT, direction: DESC}) {\n    edges {\n      node {\n        id\n        name\n        ...Repo_CardFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n  id\n}\n"
  }
};
})();
(node as any).hash = '45201e6167aaf2b644061e127cd22bff';
export default node;
