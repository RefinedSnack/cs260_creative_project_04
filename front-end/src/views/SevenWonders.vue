<template>
<div>
    <div class="title-container">
        <div class="title">
            <h1>7 Wonders Duel</h1>
        </div>
    </div>

    <div class="game-container">
        <div class="game-img">
            <a href="https://www.amazon.com/Asmodee-SEV07-7-Wonders-Duel/dp/B014DMSTXK/ref=sr_1_1?crid=2MER3F34UN843&dchild=1&keywords=7+wonders+duel&qid=1632366665&sprefix=7+%2Caps%2C221&sr=8-1"></a>
            <img src="../../public/images/7Wondersduelimage.jpg" alt="Photo of 7 Wonder's Duel Boardgame">
        </div>
        <div class="game-body">
            <p>7 Wonders Duel is a 2 player version of 7 Wonders. It is often looked
                at as one of the best 2 player games! There are still 3 rounds. You
                each play a city and also take turns controlling a neighboring city!

                Try this out for your next board game date night!
            </p>
        </div>
        <div class="game-score">
            <ul id="list">
                <li>Game Score: 9/10</li>
                <li>Best Number of Players: 2</li>
                <li>Average Play Time: 1 hour</li>
            </ul>
        </div>
    </div>
    <CommentForm formID="SevenWonders">
    </CommentForm>
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
