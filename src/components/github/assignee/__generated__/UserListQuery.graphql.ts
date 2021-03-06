/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type UserListQueryVariables = {
    repoName: string;
};
export type UserListQueryResponse = {
    readonly viewer: {
        readonly repository: {
            readonly assignableUsers: {
                readonly " $fragmentRefs": FragmentRefs<"UserListFragment">;
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
        ...UserListFragment
      }
      id
    }
    id
  }
}

fragment UserListFragment on UserConnection {
  nodes {
    id
    name
    login
    avatarUrl
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
v2 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 100
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
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
              {
                "alias": null,
                "args": (v2/*: any*/),
                "concreteType": "UserConnection",
                "kind": "LinkedField",
                "name": "assignableUsers",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "UserListFragment"
                  }
                ],
                "storageKey": "assignableUsers(first:100)"
              }
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
              {
                "alias": null,
                "args": (v2/*: any*/),
                "concreteType": "UserConnection",
                "kind": "LinkedField",
                "name": "assignableUsers",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
                    "selections": [
                      (v3/*: any*/),
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
                "storageKey": "assignableUsers(first:100)"
              },
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8f460a2e0d2c56e84c275f5f86321ce2",
    "id": null,
    "metadata": {},
    "name": "UserListQuery",
    "operationKind": "query",
    "text": "query UserListQuery(\n  $repoName: String!\n) {\n  viewer {\n    repository(name: $repoName) {\n      assignableUsers(first: 100) {\n        ...UserListFragment\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment UserListFragment on UserConnection {\n  nodes {\n    id\n    name\n    login\n    avatarUrl\n  }\n}\n"
  }
};
})();
(node as any).hash = 'bffb8c7eedd52541a373d7dc1369574f';
export default node;
