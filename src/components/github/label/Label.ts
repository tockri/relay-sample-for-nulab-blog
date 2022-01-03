import { useEffect } from 'react'
import {
  graphql,
  PreloadedQuery,
  usePreloadedQuery,
  useQueryLoader,
} from 'react-relay'
import { LabelListQuery } from './__generated__/LabelListQuery.graphql'

const labelListQuery = graphql`
  query LabelListQuery($repoName: String!) {
    viewer {
      repository(name: $repoName) {
        labels(first: 100) {
          edges {
            node {
              id
              name
              color
              description
            }
          }
        }
      }
    }
  }
`

type IssueLabel = {
  readonly id: string
  readonly name: string
  readonly color: string
  readonly description: string
}

export const useLabelListLoader = (
  repoName: string | null
): PreloadedQuery<LabelListQuery> | null => {
  const [preload, load] = useQueryLoader<LabelListQuery>(labelListQuery)
  useEffect(() => {
    if (repoName) {
      load({ repoName: repoName })
    }
  }, [repoName])
  return (repoName && preload) || null
}

export const useLabels = (
  preloaded: PreloadedQuery<LabelListQuery>
): ReadonlyArray<IssueLabel> => {
  const result = usePreloadedQuery<LabelListQuery>(labelListQuery, preloaded)
  return (
    result.viewer?.repository?.labels?.edges?.map((edge) => ({
      id: edge?.node?.id || '',
      name: edge?.node?.name || '',
      color: edge?.node?.color || '',
      description: edge?.node?.description || '',
    })) ?? []
  )
}
