# Online Store

Challenge to create an e-commerce online store for Devs United heavily influenced by [Anson Calder](https://ansoncalder.com/)

## Demo

- [Screenshots](./screenshots/README.md)
- [Demo](https://online-store.christopher-caldwell.net)

While using the demo, refreshing the page will return 403. I have to setup edge workers to get this to work, and they cost a small amount of $. So if you get an unauthorized screen, just go back to the root URL.

## Caveats

This took **a lot** of time. I ran out of time, and still don't have the bandwidth to flesh the details out properly. So with that, there are some things to note:

- Only done for mobile
- Check out is the last screen in the flow
- Maybe has some rough edges

## Setup

### API

Begin by installing the UI and API dependencies.

```shell
cd ui
yarn
cd ../api
yarn install-dependencies
cd ..
```

Next step is copying the env, to a new `.env.local`. THe values here are not really important, as this is not being deployed.

```shell
# From root
cp api/env/.env.example api/env/.env.local
```

You may need dummy AWS credentials for this to work, see [this guide](https://www.serverless.com/framework/docs/getting-started) for a better explanation.

### UI

For convenience, a one command script has been added to the root in order to run the project.

```shell
# Root level cmd
yarn start
```

This will begin the local API as well as the UI dev servers.

## Stack

The API is a serverless GraphQL process running on AWS Lambda. It is mainly for local use, as it's not deployed anywhere.

The UI is using Next SSG for a completely static shop. This is unlikely to be a scalable solution, as products change frequently. A CMS would be used, and clients would be making these requests at load, or via some other DevOps solution. To keep it simpler, this is all static.
