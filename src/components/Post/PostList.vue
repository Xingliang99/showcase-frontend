<template>
    <div>
        <post-component v-for="post in posts" :key="post.id" :post="post"></post-component>
    </div>
</template>
  
<script>
import PostCard from './PostCard.vue';

export default {
    name: 'PostsList',
    components: {
        PostCard
    },
    data() {
        return {
            posts: [
                // 示例数据
                { id: 1, authorName: 'User1', authorAvatar: 'path/to/avatar1.jpg', date: '2021-01-01', content: 'This is the first post.', image: 'path/to/image1.jpg', likes: 10 },
                //   { id: 1, authorName: 'User1', authorAvatar: 'path/to/avatar1.jpg', date: '2021-01-01', content: 'This is the first post.', image: 'path/to/image1.jpg', likes: 10 },
                //   { id: 1, authorName: 'User1', authorAvatar: 'path/to/avatar1.jpg', date: '2021-01-01', content: 'This is the first post.', image: 'path/to/image1.jpg', likes: 10 },
                // 更多帖子...
            ]
        };
    }
};
</script>
  