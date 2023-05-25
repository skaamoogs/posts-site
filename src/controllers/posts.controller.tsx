import PostsAPI from "../api/posts.api";
import { IComment, IPost, IUserInfo } from "../interfaces";

const RESPONSE_DELAY = 1000;

class PostsController {
  protected API = PostsAPI;

  getPosts = async () => {
    try {
      const response = await this.API.getPosts();
      if (response.status === 200) {
        await new Promise((resolve) => setTimeout(resolve, RESPONSE_DELAY));
        return response.data as IPost[];
      } else {
        console.log(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  getPostsByUser = async (userId: number) => {
    try {
      const response = await this.API.getPostsByUser(userId);
      if (response.status === 200) {
        await new Promise((resolve) => setTimeout(resolve, RESPONSE_DELAY));
        console.log(response.data);
        return response.data as IPost[];
      } else {
        console.log(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  getUser = async (userId: number) => {
    try {
      const response = await this.API.getUser(userId);
      if (response.status === 200) {
        await new Promise((resolve) => setTimeout(resolve, RESPONSE_DELAY));
        console.log(response.data);
        return response.data as IUserInfo[];
      } else {
        console.log(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  getComments = async (postId: number) => {
    try {
      const response = await this.API.getComments(postId);
      await new Promise((resolve) => setTimeout(resolve, RESPONSE_DELAY));
      if (response.status === 200) {
        console.log(response.data);
        return response.data as IComment[];
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export default new PostsController();
