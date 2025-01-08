import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from "$env/static/private";
import { SPOTIFY_REDIRECT_URI } from "$lib/constants/spotify";
import { Spotify } from "arctic";

export const spotifyAuth = new Spotify(SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REDIRECT_URI);