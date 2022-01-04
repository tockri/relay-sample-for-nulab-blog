import { useEffect } from 'react'
import {
  graphql,
  PreloadedQuery,
  useFragment,
  usePreloadedQuery,
  useQueryLoader,
} from 'react-relay'
import { MilestoneListFragment$key } from './__generated__/MilestoneListFragment.graphql'
import { MilestoneListQuery } from './__generated__/MilestoneListQuery.graphql'

const milestoneListFragment = graphql`
  fragment MilestoneListFragment on MilestoneConnection {
    nodes {
      id
      title
    }
  }
`

const milestoneListQuery = graphql`
  query MilestoneListQuery($repoName: String!) {
    viewer {
      repository(name: $repoName) {
        milestones(first: 100) {
          ...MilestoneListFragment
        }
      }
    }
  }
`

export const useMilestoneListPreload = (
  repoName: string | null
): PreloadedQuery<MilestoneListQuery> | null => {
  const [preload, load] = useQueryLoader<MilestoneListQuery>(milestoneListQuery)
  useEffect(() => {
    if (repoName) {
      load({ repoName })
    }
  }, [repoName])
  return (repoName && preload) || null
}

export type MilestoneListItem = {
  id: string
  title: string
}

export const useMilestoneList = (
  preload: PreloadedQuery<MilestoneListQuery>
): ReadonlyArray<MilestoneListItem> => {
  const result = usePreloadedQuery(milestoneListQuery, preload)
  const milestones = useFragment<MilestoneListFragment$key>(
    milestoneListFragment,
    result?.viewer?.repository?.milestones || null
  )
  return milestones?.nodes?.flatMap((node) => (node ? [node] : [])) ?? []
}
