# Relay sample

## Prepare

### 1. Install libraries

```shell
yarn
```

### 2. Install Watchman

Install Watchman from
https://facebook.github.io/watchman/docs/install.html

STRONGLY RECOMMEND for better developer experience.

### 3. Set `GITHUB_API_TOKEN`

```shell
cp .env.development.local.sample .env.development.local
```

Then edit `.env.development.local` to set your Github API Token into `GITHUB_API_TOKEN`

## Run

```shell
yarn dev
```
