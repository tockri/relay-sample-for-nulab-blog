import { useEffect } from 'react'
import {
  graphql,
  PreloadedQuery,
  useFragment,
  usePreloadedQuery,
  useQueryLoader,
} from 'react-relay'
import { LabelListFragment$key } from './__generated__/LabelListFragment.graphql'
import { LabelListQuery } from './__generated__/LabelListQuery.graphql'

const labelListFragment = graphql`
  fragment LabelListFragment on LabelConnection {
    nodes {
      id
      name
      color
      description
    }
  }
`

const labelListQuery = graphql`
  query LabelListQuery($repoName: String!) {
    viewer {
      repository(name: $repoName) {
        labels(first: 100) {
          ...LabelListFragment
        }
      }
    }
  }
`

export const useLabelListPreload = (
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

export type LabelListItem = {
  readonly id: string
  readonly name: string
  readonly color: string
  readonly description: string | null
}

export const useLabels = (
  preloaded: PreloadedQuery<LabelListQuery>
): ReadonlyArray<LabelListItem> => {
  const result = usePreloadedQuery<LabelListQuery>(labelListQuery, preloaded)
  const labels = useFragment<LabelListFragment$key>(
    labelListFragment,
    result.viewer?.repository?.labels ?? null
  )

  return labels?.nodes?.flatMap((node) => (node && [node]) || []) ?? []
}
