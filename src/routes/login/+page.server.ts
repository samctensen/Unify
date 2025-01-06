import { env } from '$env/dynamic/private';
import { SPOTIFY_API_SCOPE, SPOTIFY_AUTH_URL, SPOTIFY_REDIRECT_URI } from '$lib/constants/spotify';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const spotifyAuthUrl = `${SPOTIFY_AUTH_URL}?
		response_type=code&
		client_id=${env.SPOTIFY_CLIENT_ID}&
		scope=${encodeURIComponent(SPOTIFY_API_SCOPE)}&
		redirect_uri=${encodeURIComponent(SPOTIFY_REDIRECT_URI)}`;

    return {
		spotifyAuthUrl
	};
};