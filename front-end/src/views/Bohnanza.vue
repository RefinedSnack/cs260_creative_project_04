<template>
<div>
    <div class="title-container">
        <div class="title">
            <h1>Bohnanza Duel</h1>
        </div>
    </div>

    <div class="game-container">
        <div class="game-img">
            <a href="https://www.amazon.com/Rio-Grande-Games-Bohnanza-Duel/dp/B071RVLJNZ/ref=sr_1_2?dchild=1&keywords=bohnanza&qid=1632366617&sr=8-2"><img src="../../public/images/Bohnanzaimage.jpg" alt="Photo of Bohnanza Boardgame"></a>
        </div>
        <div class="game-body">
            <p>Get ready to go Bohnanza about beans!! In this game you grow beans!
                This is a 2 player version of the originally Bohnanza bean growing game.
                You race to grow beans and turn them into coins! The player with the
                most coins wins the game! Bring your A game to this quick and fun
                date night game!
            </p>
        </div>

        <div class="game-score">
            <ul id="list">
                <li>Game Score: 9/10</li>
                <li>Best Number of Players: 2</li>
                <li>Average Play Time: 30 Minutes</li>
            </ul>
        </div>
    </div>
    <CommentForm formID="Bohnanza"></CommentForm>
</div>
</template>

<script>
import CommentForm from '../components/CommentForm.vue'

export default {
    components: {
        CommentForm
    },
}
</script>

<style scoped>
p,
ul,
h3 {
    color: #22577A;
}

#list {
    font-size: 40px;
}

.game-container {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}

.game-score,
.game-body,
.game-img {
    display: flex;
    flex-direction: row;
    padding: 50px;
    justify-content: center;
}

ul {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.game-img img {
    width: 50%;
}

.game-score {
    background-color: #D3FAD7;
}

.game-img {
    width: 33%;
    order: -2;
    justify-content: center;
}

.game-score {
    width: 33%;
    order: -1;
}

.game-body {
    width: 60%;
    order: 1;
    font-size: 2em;
}
</style>
