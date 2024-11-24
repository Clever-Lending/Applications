import {AuthConfig} from "./interfaces/auth-config.interface";

export const AUTH_CONFIG: AuthConfig = {
  domain: "https://clever-learning-centers.us.auth0.com",
  clientId: "AmxbLTF4gQqQkszYu9GZpIBsa1Gpj6sL",
  authorizationParams: {
    audience: "http://localhost:3010",
  },
  apiUri: "http://localhost:3010",
  appUri: "http://localhost:4200",
  errorPath: "/error",
};
