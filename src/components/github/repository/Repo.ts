// noinspection GraphQLUnresolvedReference,GraphQLSchemaValidation

import { graphql } from 'react-relay'

export const repoListFragment = graphql`
  fragment Repo_ListFragment on User
  @argumentDefinitions(
    first: { type: "Int!", defaultValue: 5 }
    after: { type: "String" }
  )
  @refetchable(queryName: "Repo_ListPaginationQuery") {
    repositories(first: $first, after: $after)
      @connection(key: "Repo_list_repositories") {
      pageInfo {
        endCursor
        hasNextPage
        startCursor
        hasPreviousPage
      }
      edges {
        node {
          id
          name
        }
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
