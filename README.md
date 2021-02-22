# Community 

## Background
Every community across the world will undoubtedly face times of hardship, whether it be natural disasters, the collapse of infrastructure, or public disturbances. With the COVID-19 pandemic harming many people's day-to-day lives, another burden has been added on the communities of the world as they continue to confront local issues while struggling to maintain a healthy lifestyle. In particular, the recent snowstorms and subsequent power outages in Texas made us think about how communities of people may be isolated from each other, potentially unaware of not only local disturbances and issues, but solutions to these disturbances, such as vaccination centers and food services. With **Community**, we strove to build an app that would help urban communities connect and thrive. 


## What it does

**Community** enables users to add reports for either issues or solutions to issues present in their local community. Users are able to create a new report and add a title that briefly summarizes the item of interest, a brief description of the item. The user is also prompted to drag the location of the incident onto the map using a pin. Then, the user is prompted to upload an image. These items are then displayed on the map and the feed. 

![Create Report](https://github.com/Hackathon-Squad/Community/raw/main/Assets/create_report.png)

_Users can create a new report_

Once the user has uploaded an image, they select a category for their issue/solution: public disturbances, natural disasters, food services, or vaccination centers. 

![Pin drag](https://github.com/Hackathon-Squad/Community/raw/main/Assets/seePin.png)
_User drags location to map_

After adding an item onto the map, the user has the option to view the complete map of events, helping them recognize any urban disturbances or areas of interest near them. Users are also able to view a complete feed of events on the left-hand side and can upvote events that they believe deserve more attention. This feed of issues can be filtered by a type of event and is sorted by number of upvotes.

![Feed Filter](https://github.com/Hackathon-Squad/Community/raw/main/Assets/filter.png)

_Users can filter the feed_

## How we built it


![Main Page](https://github.com/Hackathon-Squad/Community/raw/main/Assets/TechStack.jpg)

![Tech Stack](https://github.com/Hackathon-Squad/Community/raw/main/Assets/TechFlow.jpg)
__Our tech stack and flow__

[D3](https://d3js.org/)

[Express](https://expressjs.com/)

[Google Cloud](https://cloud.google.com/)

[Google Cloud Firestore](https://firebase.google.com/docs/firestore)

[Google Cloud Storage](https://cloud.google.com/storage)

[Mapbox](https://www.mapbox.com/)

[Material UI](https://material-ui.com/)

[Node.js](https://nodejs.org/en/)

[React](https://reactjs.org/)


**UI/UX**

For our design process, we created several design models of the different pages and options available on our web app. We designed models for the main page (that displays the map and the feed of posts), the page where users can add a post, and a page where users can drag the location of their new post onto the map. 

We chose a warm color scheme of greens, tans, and purples to create a fresh but cozy feeling. We designed the logo to feature cartoon, easily recognizable houses clustered together to instantly remind the user of home and community.

Several changes were made between our initial design and our final product. We pivoted from focusing on just issues in the local community to issues as well as solutions to these urban issues in terms of what people are able to add to the map/feed. During the process of adding a post, we allowed for the user to describe the post and drag a pin representing the post onto the map all within the same page. Nevertheless, our designs provided us with a solid foundation to begin developing the majority of our project. As both of our team's designers were completely new to using Figma, we were satisfied with the products that we designed. 


![Main Page](https://github.com/Hackathon-Squad/Community/raw/main/Assets/figmapage1.png)

_Our design for our main page_

![Second Page](https://github.com/Hackathon-Squad/Community/raw/main/Assets/figmapage2.png)

_Our design to report a new issue_

![ThirdPage](https://github.com/Hackathon-Squad/Community/raw/main/Assets/figmapage3.png)

_Our design to add a new issue to the map_

**Frontend**

The frontend was built around React, with Material UI as our main component library. We used dynamic rendering of components to display the issues/solutions in the feed, with an option to filter by type. We learned more about state management and organization of components as we assembled the project. 

MapBox was a crucial part of our frontend, as it allowed us to display both our map and the markers upon it. The map was rendered dynamically as the user panned and moved around the area, and the markers were made clickable, so the view focus would shift to that specific marker. Clicking on a feed item would perform the same transition. MapBox was used to render popups when the markers or the feed was clicked on to display more information about the issue or solution at the location. Transitions between the markers were created via the D3 library, combined with MapBox's built in viewport shifting.  We were also able to render and display markers on the map in 3-D, allowing us a more immersive experience in the map. 

**Backend**

The backend server was written in Node.js using Express. Images are saved in Google Cloud Storage and all the post information is stored in Google Cloud Firestore. 

## Setup
### Mapbox

To utilize mapbox, make a `.env` file in the `/client` directory and add the following:
```
REACT_APP_MAPBOX_ACCESS_TOKEN=YOUR_MAPBOX_ACCESS_TOKEN
```
Replace `YOUR_MAPBOX_ACCESS_TOKEN` with your access token from you mapbox account.

### GCP
Login to GCP and go to `IAM & ADMIN` > `Service Accounts` > dev account and create a json key and save it to your root folder as `community.json`. Then create a `config.env` file in the root directory with the following:
```
GOOGLE_APPLICATION_CREDENTIALS="community.json"
```

### Running
Run `npm install` in both the root and client folders. Then return to the root folder and run `npm run dev`. The server and client should both start and open in your browser when they are ready. 


## License
The MIT License (MIT)

Copyright (c) 2021 Advay, Anish, Melody, Nishant

_Made for SD Hacks 2021 (February 19 - 21, 2021)_
