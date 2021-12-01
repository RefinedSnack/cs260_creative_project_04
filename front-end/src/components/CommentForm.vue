<template>
<div class="comment-form">
    <form>
        <div class="form-group">
            <label for="username">Username: </label>
            <input type="text" class="form-control" id="username" v-model="username">
            <p></p>
            <label for="content">Comment: </label>
            <textarea class="form-control" rows="5" id="content" v-model="content">
            </textarea>
        </div>
        <button class="delete-button" v-on:click="onSubmit()">Submit</button>
    </form>

        <div class="Comment" v-for="(comment, index) in comments" :key="index">
            <div class="comment-data">
                <p>{{ comment.content }}</p>
                <p>Posted by {{ comment.author }} @ {{ time(comment.time) }}</p>
            </div>
            <div class="comment-control">
                <button class="delete-button" v-on:click="deleteComment(comment._id)">Delete</button>
                <button class="replace-button" v-on:click="editComment(comment._id)">Replace</button>
            </div>
        </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'CommentForm',
    components: {},
    data() {
        return {
            content: '',
            username: '',
            comments: [],
        }
    },
    props: {
        formID: String
    },
    created() {
        this.getComments();
    },
    methods: {
        //get comment async sets loating to true
        getComments() {
            axios.get('/api/comment/' + this.formID)
                .then(response => {
                    this.comments = response.data;
                })
                .catch(error => {
                    console.log(error);
                })
        },
        onSubmit() {
            try {
                console.log(this.formID, this.author, this.content);
                let postString = 'api/comment/' + this.formID;
                axios.post(postString, {
                    content: this.content,
                    time: Date.now(),
                    author: this.username
                });

            } catch (error) {
                console.log(error);
            }
            this.getComments();
        },
        deleteComment(commentID) {
            axios.delete('/api/comment/' + commentID);
            this.getComments();
        },
        editComment(commentID) {
            axios.put('/api/comment/' + commentID, {
                content: this.content,
                author: this.username,
                time: Date.now()
            });
            this.getComments();
        },
        time(input) {
            var date = new Date(input);
            let time = date.toLocaleString();
            return time;
        },
    }
}
</script>

<style>

</style>
