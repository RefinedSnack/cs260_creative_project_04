<template>
<div id="app">
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/Bohnanza">Bohnanza Duel</router-link> |
        <router-link to="/SevenWonders">Seven Wonders Duel</router-link> |
        <router-link to="/Catan">Catan</router-link>
    </div>
    <router-view />
    <!--Footer -->
    <div class="footer-container">
        <div class="footer">
            <a href="https://github.com/RefinedSnack/cs260_creative_project_04">Github Repository - By: Kylie Callway & Walter DeGering</a>
        </div>
    </div>
</div>
</template>

<script>

</script>

<style>
/*Title*/

.title {
    display: flex;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
    flex-direction: column;
}

.title-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#list {
    list-style-type: none;
}

/*Footer*/
.footer-container {
    background-color: #57CC99;
    margin-top: 50px;
}

.footer {
    margin-left: 100px;
}

/*Mobile */
@media only screen and (max-width: 400px) {

    .photo-container-home {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-wrap: wrap;
    }

}

/*Tablet*/
@media only screen and (min-width: 401px) and (max-width: 960px) {

    .photo-container-home {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }

    .forum-item {
        margin-left: 100px;
        margin-right: 100px;
    }

}

/*Desktop*/
@media only screen and (min-width: 961px) {

    .photo-container-home {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    .About-item {
        display: flex;
        flex-direction: row;
    }

    .anch-link {
        width: 100%;
        display: flex;
        justify-content: center;
    }
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
    background-color: #57CC99;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: White;
}
</style>
