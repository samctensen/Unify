import { SPOTIFY_API_SCOPE } from '$lib/constants/spotify';
import { spotifyAuth } from '$lib/server/spotifyAuth';
import { generateState } from "arctic";
import type { PageServerLoad, RequestEvent } from './$types';

export const load: PageServerLoad = async (event: RequestEvent) => {
	const state = generateState();
    const spotifyAuthUrl = spotifyAuth.createAuthorizationURL(state, null, SPOTIFY_API_SCOPE).toString()

	event.cookies.set("oauth_state", state, {
		path: "/",
		httpOnly: true,
		maxAge: 60 * 10,
		sameSite: "lax"
	});

    return {
		spotifyAuthUrl
	};
};