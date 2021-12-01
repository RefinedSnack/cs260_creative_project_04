<template>
<div>
    <div class="Intro-content-container">
        <div class="Intro-content">
            <h1>Battle of the Boardgames!</h1>

            <h3><em>Which is your favorite?</em></h3>
        </div>
    </div>
    <!--Photo Bar-->
    <div class="photo-container-home">
        <div class="photo-home"><a class="anch-link2" href="https://www.amazon.com/Asmodee-SEV07-7-Wonders-Duel/dp/B014DMSTXK"><img class="photosize" src="../../public/images/7Wondersduelimage.jpg" alt="Picture of 7 Wonders Duel Boardgame"></a></div>
        <div class="photo-home"><a class="anch-link2" href="https://www.amazon.com/Rio-Grande-Games-Bohnanza-Duel/dp/B071RVLJNZ"><img class="photosize" src="../../public/images/Bohnanzaimage.jpg" alt="Picture of Bohnanza Boardgame"></a></div>
        <div class="photo-home"><a class="anch-link2" href="https://www.amazon.com/Catan-Studios-cantan2017/dp/B00U26V4VQ"><img class="photosize" src="../../public/images/Settlerpicture.jpg" alt="Picture of Setters of Catan Boardgame"></a></div>
    </div>
    <CommentForm formID="Home"/>
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

<style>
/*Home Page*/
.Intro-content-container {
    display: flex;
    margin: 25px 25px 25px 25px;
    justify-content: center;
}

.photo-container-home {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
}

.photo-home {
    width: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1rem 1rem 1rem 1rem;
    justify-content: center;
}

.photosize {
    width: 75%;
}
</style>
