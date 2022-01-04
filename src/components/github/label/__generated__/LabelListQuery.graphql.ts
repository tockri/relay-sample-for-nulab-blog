/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type LabelListQueryVariables = {
    repoName: string;
};
export type LabelListQueryResponse = {
    readonly viewer: {
        readonly repository: {
            readonly labels: {
                readonly " $fragmentRefs": FragmentRefs<"LabelListFragment">;
            } | null;
        } | null;
    };
};
export type LabelListQuery = {
    readonly response: LabelListQueryResponse;
    readonly variables: LabelListQueryVariables;
};



/*
query LabelListQuery(
  $repoName: String!
) {
  viewer {
    repository(name: $repoName) {
      labels(first: 100) {
        ...LabelListFragment
      }
      id
    }
    id
  }
}

fragment LabelListFragment on LabelConnection {
  nodes {
    id
    name
    color
    description
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
    "name": "LabelListQuery",
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
                "concreteType": "LabelConnection",
                "kind": "LinkedField",
                "name": "labels",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "LabelListFragment"
                  }
                ],
                "storageKey": "labels(first:100)"
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
    "name": "LabelListQuery",
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
                "concreteType": "LabelConnection",
                "kind": "LinkedField",
                "name": "labels",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Label",
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
                        "name": "color",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "description",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "labels(first:100)"
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
    "cacheID": "3ccca44e776173a5cb7a9806efa8abbe",
    "id": null,
    "metadata": {},
    "name": "LabelListQuery",
    "operationKind": "query",
    "text": "query LabelListQuery(\n  $repoName: String!\n) {\n  viewer {\n    repository(name: $repoName) {\n      labels(first: 100) {\n        ...LabelListFragment\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment LabelListFragment on LabelConnection {\n  nodes {\n    id\n    name\n    color\n    description\n  }\n}\n"
  }
};
})();
(node as any).hash = '4a046dfe49672031624768b474b82794';
export default node;
