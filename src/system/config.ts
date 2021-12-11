export const Config = {
  githubApiToken: ():string => {
    const token = process.env.NEXT_PUBLIC_GITHUB_API_TOKEN
    if (token) {
      return token
    } else {
      throw `Env variable NEXT_PUBLIC_GITHUB_API_TOKEN is not set.`
    }
  }
}
