/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type UserListQueryVariables = {
    repoName: string;
};
export type UserListQueryResponse = {
    readonly viewer: {
        readonly repository: {
            readonly assignableUsers: {
                readonly edges: ReadonlyArray<{
                    readonly node: {
                        readonly id: string;
                        readonly name: string | null;
                        readonly avatarUrl: unknown;
                    } | null;
                } | null> | null;
            };
        } | null;
    };
};
export type UserListQuery = {
    readonly response: UserListQueryResponse;
    readonly variables: UserListQueryVariables;
};



/*
query UserListQuery(
  $repoName: String!
) {
  viewer {
    repository(name: $repoName) {
      assignableUsers(first: 100) {
        edges {
          node {
            id
            name
            avatarUrl
          }
        }
      }
      id
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "repoName"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "repoName"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": [
    {
      "kind": "Literal",
      "name": "first",
      "value": 100
    }
  ],
  "concreteType": "UserConnection",
  "kind": "LinkedField",
  "name": "assignableUsers",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "UserEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "User",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            (v2/*: any*/),
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
              "name": "avatarUrl",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": "assignableUsers(first:100)"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "Repository",
            "kind": "LinkedField",
            "name": "repository",
            "plural": false,
            "selections": [
              (v3/*: any*/)
            ],
            "storageKey": null
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
    "name": "UserListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "Repository",
            "kind": "LinkedField",
            "name": "repository",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "493452f9fcf1b7859f0c4d6ac31dcb78",
    "id": null,
    "metadata": {},
    "name": "UserListQuery",
    "operationKind": "query",
    "text": "query UserListQuery(\n  $repoName: String!\n) {\n  viewer {\n    repository(name: $repoName) {\n      assignableUsers(first: 100) {\n        edges {\n          node {\n            id\n            name\n            avatarUrl\n          }\n        }\n      }\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'd2091f5efe0ba041b5b63077cfa604ab';
export default node;
