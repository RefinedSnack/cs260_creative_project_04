<template>
<div class="comment-form">
  <form>
    <div class="form-group">
      <label for="username">Username: </label>
      <input type="text" class="form-control" id="username" v-model="username">
      <p></p>
      <label for="rating">Rating (1-10): </label>
      <input type="text" class="form-control" id="rating" v-model="rating">
      <p></p>
      <label for="content">Comment: </label>
      <textarea class="form-control" rows="5" id="content" v-model="content">
            </textarea>
    </div>
    <button class="delete-button" v-on:click="onSubmit()">Submit</button>
  </form>
  <div class="Comments">
  <div class="Comment" v-for="(comment, index) in comments" :key="index">
    <div class="comment-data">
      <p id="review">{{ comment.content }}</p>
      <p id="rating">Rating: {{ comment.rating }}</p>
      <p id="author">Posted by {{ comment.author }} @ {{ time(comment.time) }}</p>
    </div>
    <div class="comment-control">
      <button class="delete-button" v-on:click="deleteComment(comment._id)">Delete</button>
      <button class="replace-button" v-on:click="editComment(comment._id)">Replace</button>
    </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CommentForm',
  components: {
    //  StarRating
  },
  data() {
    return {
      content: '',
      username: '',
      comments: [],
      rating: 0
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
          author: this.username,
          rating: this.rating
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
        time: Date.now(),
        rating: this.rating
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
.Comment {
  background-color: #D3FAD7;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 20px;
  padding: 20px 20px 20px 20px;
  font-style: italic;
  color: #22577A;
}

.Comments  {
margin-top: 50px;
margin-bottom: 50px;
}

</style>
