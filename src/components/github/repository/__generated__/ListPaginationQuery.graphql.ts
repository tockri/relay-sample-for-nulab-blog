/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ListPaginationQueryVariables = {
    a?: string | null | undefined;
    f?: number | null | undefined;
    id: string;
};
export type ListPaginationQueryResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"ListFragment">;
    } | null;
};
export type ListPaginationQuery = {
    readonly response: ListPaginationQueryResponse;
    readonly variables: ListPaginationQueryVariables;
};



/*
query ListPaginationQuery(
  $a: String
  $f: Int = 5
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...ListFragment_P3xnp
    id
  }
}

fragment CardFragment on Repository {
  id
  name
}

fragment ListFragment_P3xnp on User {
  repositories(first: $f, after: $a, orderBy: {field: CREATED_AT, direction: DESC}) {
    edges {
      node {
        ...CardFragment
        id
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
    "defaultValue": 5,
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
    "name": "ListPaginationQuery",
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
            "name": "ListFragment"
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
    "name": "ListPaginationQuery",
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
                "key": "ListPaginationQuery_repositories",
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
    "cacheID": "df68c8618ab55585147ba70cc9a60933",
    "id": null,
    "metadata": {},
    "name": "ListPaginationQuery",
    "operationKind": "query",
    "text": "query ListPaginationQuery(\n  $a: String\n  $f: Int = 5\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...ListFragment_P3xnp\n    id\n  }\n}\n\nfragment CardFragment on Repository {\n  id\n  name\n}\n\nfragment ListFragment_P3xnp on User {\n  repositories(first: $f, after: $a, orderBy: {field: CREATED_AT, direction: DESC}) {\n    edges {\n      node {\n        ...CardFragment\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n  id\n}\n"
  }
};
})();
(node as any).hash = '4bc505bf728ee5af5df9d06d636d85dc';
export default node;
