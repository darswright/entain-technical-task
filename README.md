# Entain Tech Test By Simon Wright

I setup the project using Create React App. I extended the default linter by installing the Airbnb linting config which is a popular coding standards setup in the industry along with Prettier code formatter. I also used Chakra UI component library to layout a basic UI for the app.

### Some Issues

The requirements brief specified that there should be five races shown at all time. Based on the API endpoint supplied - `https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10` - some of the race categories can be short of five. One way to try and solve this would be to increase the amount of races returned from the API, though this will not guarantee five races for every category. A better solution might be to make a specific API call to each category when a category tab is clicked by the user. I played around trying to guess the query string to add that would do this but was unsuccessful.

Finally, I wanted to write some basic tests for my three components but encountered some issues with mocking the data and was unable to find a solution as I'm not very experienced in this department.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
