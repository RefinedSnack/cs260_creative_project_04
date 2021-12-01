<template>
<div>
    <div class="title-container">
        <div class="title">
            <h1>Settler's of Catan</h1>
        </div>
    </div>
    <div class="game-container">
        <div class="game-img">
            <a href="https://www.amazon.com/Catan-Studios-cantan2017/dp/B00U26V4VQ/ref=sr_1_2?crid=1X1LXIF85LVCA&dchild=1&keywords=settlers+of+catan&qid=1632366437&sprefix=settlers+of+ca%2Caps%2C390&sr=8-2"><img src="../../public/images/Settlerpicture.jpg" alt="Picture of Settler's of Catan"></a>
        </div>
        <div class="game-body">
            <p>
                Settlers of Catan Review:

                How do You Use The Catan to Cook A Car?

                The most basic way to cook Catan is to start with your oven, and with some patience, build up the heat from the ground (ground-shaking from the first half of the stove top), and place it to low to make sure there isn't any more.

                The method is to heat your pot down to about 225 degrees F, but remember, you want at least 20 minutes of air in a single boil. If your cooking temperatures reach this high, you'll want to avoid heat exchanges with other ingredients. Instead, heat your pot down to 165 degree F or lower with whatever ingredients you will need.
            </p>
        </div>

        <div class="game-score">
            <ul id="list">
                <li>Game Score: 8/10</li>
                <li>Best Number of Players: 3-4</li>
                <li>Average Play Time: 1 hour</li>
            </ul>
        </div>
    </div>
    <CommentForm formID="Catan">
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
