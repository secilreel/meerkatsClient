# Meerkats -- Event-planning Simplified for Friends

This app solves the issue of clutter in event-planning among friends. Premised on that users would like to create, share, and update their attendance quickly within their social circles, it helps organizers keep the event at the center of their event-planning.

Meerkats is built with React.js and employs some of the best practices of web-development such as JWT, React Router & Context, unit-testing, and integration-testing. It makes fetch calls to the Meerkats Server for each action, such as adding, removing, or updating events.

In this app, a user need to register for an account. After registration, the user is directed to the events page where ze can see all the events. By clicking on each event, the user can see further details about each event such as detailed description, location, date, and participants. Within a detailed view of an event, a user can change zir participation - ze can update attendance or add zirself as a participant to the event. The user can also remove any event from zir event list.

In order to take a closer peek at how the application works, you can login to the live site:
https://secilreel-meerkats-app.now.sh/
with the demo account.
username: secil
password: pass1

Developers who want to contribute to this project, you can clone the code and add new features such as adding friends, creating groups from friends, and more. I have already left some breadcrumbs: you can see that friend-api-service is up and running. Code along and send me a merge request. Let's build a clean and efficient events planning to give a chance to our users time to enjoy their friends!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

