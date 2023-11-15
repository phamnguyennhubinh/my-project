<!-- <template>
    <div class="scrolling-component" ref="scrollComponent">
        <re-post
        v-for="(post,index) in posts"
        :post="post"
        :key="index"
        />
    </div>
</template>

<script>
import getPosts from "@/utils/get-posts";
import RePost from "./RePost.vue";
import { onMounted, onUnmounted, ref } from 'vue';

export default {
    components: {
        RePost
    },
    setup () {
        const posts = ref(getPosts(10));
        const scrollComponent = ref(null);
        
        
        const handleScroll = () => {
            let element = scrollComponent.value;
            if(element.getBoundingClientRect().bottom < window.innerHeight) {
                loadMorePosts();
            }
        }

        const loadMorePosts = () => {
            let newPosts = getPosts(10);
            posts.value.push(...newPosts)
        }
        onMounted(() => {
            window.addEventListener("scroll", handleScroll)
        })
        onUnmounted(() => {
            window.removeEventListener("scroll", handleScroll)
        })
        return {
            posts,
            scrollComponent
        }
    }
}
</script> -->

<template>
    <div id="app">
      <infinite-loading
        @infinite-scroll="loadDataFromServer"
        :message="message"
        :noResult="noResult"
      >
        <div>
          <div
            v-for="repo in trendingRepos"
            :key="repo.id"
            style="margin-bottom: 20px"
          >
            <div>
              <img :src="repo.owner.avatar_url" alt="" style="height: 50px" />
            </div>
            <div>{{ repo.name }}</div>
          </div>
        </div>
      </infinite-loading>
    </div>
  </template>
  
  <script>
  import InfiniteLoading from "v3-infinite-loading";
  import axios from "axios";
  
  export default {
    name: "HelloWord",
  
    components: {
      InfiniteLoading
    },
  
    data() {
      return {
        trendingRepos: [],
        page: 1,
        noResult: false,
        message: "",
      };
    },
  
    methods: {
      async loadDataFromServer() {
        try {
          const result = await axios.get(
            `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${this.page}`
          );
          if (result.data.items.length) {
            this.trendingRepos.push(...result.data.items);
            this.page++;
          } else {
            this.noResult = true;
            this.message = "No result found";
          }
        } catch (err) {
          this.noResult = true;
          this.message = "Error loading data";
        }
      },
    },
  
    mounted() {
      this.loadDataFromServer();
    },
  };
  </script>
  
  
  
  