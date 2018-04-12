const foursquare = require("react-foursquare-es5-mod")({
  clientID: process.env.REACT_APP_FSQ_CLIENT_ID,
  clientSecret: process.env.REACT_APP_FSQ_CLIENT_PRIVATE_KEY
});

const fsqApi = params =>
  foursquare.venues.suggestCompletion(params);

export default fsqApi;
