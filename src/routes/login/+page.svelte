<script lang="ts">
    export let data: { spotifyAuthUrl: string };
</script>

<div class="login-container">
    <h1>Unify</h1>
    <button on:click={() => (window.location.href = data.spotifyAuthUrl)}>
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
