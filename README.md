# Food Trucks Finder

This app fetches food trucks located in San Francisco that are open and within a selected mile radius of the user. It makes use of data from [Mobile Food Schedule](https://data.sfgov.org/Economy-and-Community/Mobile-Food-Schedule/jjew-r69b/about_data), a [Node.js](https://nodejs.org/) backend server utilizing the [http](https://nodejs.org/docs/latest/api/http.html) API, [Create React App](https://create-react-app.dev/) with [Typescript](https://www.typescriptlang.org/) support, [React](https://react.dev/) for the view, and [Tailwind](https://tailwindcss.com/) for styling.

## Getting started

Clone the repo:

```bash
git clone https://github.com/rabyyuson/food-trucks-finder.git
```

Install the dependencies:

```bash
npm install
```

Edit the `.env` file as needed then start the backend and frontend servers:

```bash
npm run dev
```

Both the backend and frontend servers will run and the client applicaation will be accessible via [localhost](http://localhost:3000).

## Note

The app makes use of the Geolocation API which utilizes the devices' Location Services. Be sure to enable it before interacting with the app to ensure correctness in the returned results. You can find more information on how to enable it from this [Wikihow](https://www.wikihow.com/Enable-Location-Services-on-Google-Chrome) article.

### Future updates

1. It would be nice to use other frameworks such as [ExpressJS](https://expressjs.com/) or [NextJS](https://nextjs.org/) to handle our backend server. The current implementation is limited to just spinning up an http server. If we want to continue creating our own server, we will have to factor in creating a secure server such as [https](https://nodejs.org/api/https.html) and other security concerns plus features that goes with it such as routing, CORS handling, response handling etc.
2. Our app only has 1 test which is very basic and does not capture all scenarios. We would want to perform comprehensive testing to ensure that all test cases we wanted covered are included and performs exactly how we wanted it to perform.
3. It would be great to add integration with Map api such as [Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript) to visually display the location of the food truck and can be interacted with by the user.

### To production readiness

1. Add in thorough test driven development use cases and incorporate other end-to-end automated testing tools such as [Cypress](https://www.cypress.io/).
2. Incorporate CI/CD tooling such as [CircleCI](https://circleci.com/) to automatically perform testing and deployment processes to ensure code quality and robust error tracking.
3. Measure app performance and identify areas of inefficiencies and address them. Identify and address bottlenecks by removing unnecessary http requests, optimizing asset files, performing code optimizations such as code splitting, lazy loading, and optimization of the critical render path.
4. Enforce security measures by auditing the application's implementation. Identify the backend server for flaws and cases where there might be data leaks and address them. Identify the CORS policy and enforce the principle of least privilege.
5. Identify areas of improvements in the frontend code such as looking for places to make use of custom hooks such as useReducer for components that makes heavy use of states. Check for edge cases on mobile responsiveness to see if there are situations where the app is preventing the user from accessing essential features and address them accordingly.

### Impactful features

The first feature that I would add that would tremendously improve the application is the ability to buy or make food reservation through this app. Whether that is through exposing the ability to contact the food truck owner, or having some form of partnership with them to allow them to receive orders through the app, I believe it would make the customers and food truck owners' lives so much easier.

Another feature that I would like to add would be the ability for the food truck owners to reach out and connect with their customers through the app. Maybe there is a special that they are offering on that day or even a discount, whatever it is I believe it will allow them to be more efficient while at the same time making them even more profitable which is a win-win to both the customers and food truck owners.