import axios from "axios";

const API_HOST = "https://jsonplaceholder.typicode.com";

class PostsAPI {
  getPosts() {
    const url = `${API_HOST}/posts`;
    return axios.get(url);
  }

  getPostsByUser(userId: number) {
    const url = `${API_HOST}/users/${userId}/posts`;
    return axios.get(url);
  }

  getUser(userId: number) {
    const url = `${API_HOST}/users/${userId}`;
    return axios.get(url);
  }

  getComments(postId: number) {
    const url = `${API_HOST}/posts/${postId}/comments`;
    return axios.get(url);
  }
}

export default new PostsAPI();
