import { graphql } from 'react-relay'

export const repoListFragment = graphql`
  fragment Repo_ListFragment on RepositoryConnection {
    pageInfo {
      endCursor
      hasNextPage
      startCursor
      hasPreviousPage
    }
    nodes {
      id
      name
    }
  }
`

export const repoListQuery = graphql`
  query Repo_ListQuery($first: Int!, $after: String) {
    viewer {
      repositories(first: $first, after: $after) {
        ...Repo_ListFragment
      }
    }
  }
`
