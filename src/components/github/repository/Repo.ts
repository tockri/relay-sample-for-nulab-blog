// noinspection GraphQLUnresolvedReference,GraphQLSchemaValidation

import { graphql } from 'react-relay'

export const repoListFragment = graphql`
  fragment Repo_ListFragment on User
  @argumentDefinitions(
    f: { type: "Int", defaultValue: 10 }
    a: { type: "String" }
  )
  @refetchable(queryName: "Repo_ListPaginationQuery") {
    repositories(
      first: $f
      after: $a
      orderBy: { field: CREATED_AT, direction: DESC }
    ) @connection(key: "Repo_ListPaginationQuery_repositories") {
      edges {
        node {
          id
          name
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`

export const repoListQuery = graphql`
  query Repo_ListQuery {
    viewer {
      ...Repo_ListFragment
    }
  }
`
