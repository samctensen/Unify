import { SPOTIFY_API_URL } from '$lib/constants/spotify';
import { spotifyAuth } from '$lib/server/spotifyAuth';
import type { OAuth2Tokens } from 'arctic';
import type { PageServerLoad, RequestEvent } from "./$types";

export const load: PageServerLoad = async (event: RequestEvent) => {
	const code = event.url.searchParams.get('code');
    const state = event.url.searchParams.get('state');
    const storedState = event.cookies.get("oauth_state") ?? null;
    if (code === null || state === null || storedState === null || state !== storedState) {
        throw new Error('Invalid OAuth state or missing parameters');
    }
    let tokens: OAuth2Tokens;
	try {
		tokens = await spotifyAuth.validateAuthorizationCode(code, null);
        const accessToken = tokens.accessToken();
	    const spotifyUserResponse = await fetch(`${SPOTIFY_API_URL}/v1/me`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        const user = await spotifyUserResponse.json();
        console.log(user)
	} catch {
		throw new Error('Error during Spotify OAuth process');
	}
};