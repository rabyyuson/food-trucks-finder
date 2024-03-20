# Food Trucks Finder

This app fetches 5 food trucks located in San Francisco that are open and within a 5 mile radius of the user. It makes use of data from [Mobile Food Schedule](https://data.sfgov.org/Economy-and-Community/Mobile-Food-Schedule/jjew-r69b/about_data), a [Node.js](https://nodejs.org/) backend server utilizing the [http](https://nodejs.org/docs/latest/api/http.html) API, [Create React App](https://create-react-app.dev/) with [Typescript](https://www.typescriptlang.org/) support, [React](https://react.dev/) for the view, and [Tailwind](https://tailwindcss.com/) for styling.

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
