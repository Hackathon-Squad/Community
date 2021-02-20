# Community

## Mapbox

To utilize mapbox, make a `.env` file in the `/client` directory and add the following:

```
REACT_APP_MAPBOX_ACCESS_TOKEN=YOUR_MAPBOX_ACCESS_TOKEN
```

Replace `YOUR_MAPBOX_ACCESS_TOKEN` with your access token from you mapbox account.

## GCP

Login to GCP and go to `IAM & ADMIN` > `Service Accounts` > dev account and create a json key and save it to your root folder as `community.json`. Then create a `config.env` file in the root directory with the following:

```
GOOGLE_APPLICATION_CREDENTIALS="community.json"
```

Routes:
`/posts`
`/create-event`
