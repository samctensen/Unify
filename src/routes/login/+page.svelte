<script lang="ts">
    export let data: { spotifyAuthUrl: string };

    function openSpotifyAuthWindow() {
        const width = 500;
        const height = 700;
        const left = (window.innerWidth - width) / 2;
        const top = (window.innerHeight - height) / 2;
        const spotifyAuthWindow = window.open(
            data.spotifyAuthUrl,
            "SpotifyLogin",
            `width=${width},height=${height},top=${top},left=${left},resizable=yes`
        );
    }
</script>

<div class="login-container">
    <h1>Unify</h1>
    <button on:click={openSpotifyAuthWindow}>
        Login with Spotify
    </button>
</div>

<style>
    .login-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        text-align: center;
    }
    button {
        padding: 10px 20px;
        background-color: #1db954;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
    }
    button:hover {
        background-color: #1ed760;
    }
</style>
