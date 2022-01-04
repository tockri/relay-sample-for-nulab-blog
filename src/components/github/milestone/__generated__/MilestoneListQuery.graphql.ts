/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type MilestoneListQueryVariables = {
    repoName: string;
};
export type MilestoneListQueryResponse = {
    readonly viewer: {
        readonly repository: {
            readonly milestones: {
                readonly " $fragmentRefs": FragmentRefs<"MilestoneListFragment">;
            } | null;
        } | null;
    };
};
export type MilestoneListQuery = {
    readonly response: MilestoneListQueryResponse;
    readonly variables: MilestoneListQueryVariables;
};



/*
query MilestoneListQuery(
  $repoName: String!
) {
  viewer {
    repository(name: $repoName) {
      milestones(first: 100) {
        ...MilestoneListFragment
      }
      id
    }
    id
  }
}

fragment MilestoneListFragment on MilestoneConnection {
  nodes {
    id
    title
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
    "name": "MilestoneListQuery",
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
                "concreteType": "MilestoneConnection",
                "kind": "LinkedField",
                "name": "milestones",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "MilestoneListFragment"
                  }
                ],
                "storageKey": "milestones(first:100)"
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
    "name": "MilestoneListQuery",
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
                "concreteType": "MilestoneConnection",
                "kind": "LinkedField",
                "name": "milestones",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Milestone",
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
                    "selections": [
                      (v3/*: any*/),
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
                "storageKey": "milestones(first:100)"
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
    "cacheID": "abc4b60cc5e41284953ea4be3ed7f99c",
    "id": null,
    "metadata": {},
    "name": "MilestoneListQuery",
    "operationKind": "query",
    "text": "query MilestoneListQuery(\n  $repoName: String!\n) {\n  viewer {\n    repository(name: $repoName) {\n      milestones(first: 100) {\n        ...MilestoneListFragment\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment MilestoneListFragment on MilestoneConnection {\n  nodes {\n    id\n    title\n  }\n}\n"
  }
};
})();
(node as any).hash = '8298081b593cb226251f5651d0f0a091';
export default node;
