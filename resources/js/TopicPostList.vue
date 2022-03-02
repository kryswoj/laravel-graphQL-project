<template>
    <div class="container w-full md:w-3/4 lg:w-3/5 xl:1/2 my-20">
        <h2 class="text-4xl">
            <router-link
                :to="{ name: 'index' }"
                class="text-gray-600 hover:text-gray-900"
            >
                All Posts
            </router-link>
            <span class="text-gray-600">/</span>
            {{ topic.name }}
        </h2>
        <div v-if="$apollo.loading"></div>
        <div v-else>
            <post-list-item
                v-for="post in topic.posts"
                :key="post.id"
                :post="post"
                class="mt-10"
            />
        </div>
    </div>
</template>

<script>
import gql from "graphql-tag";
import PostListItem from "./components/PostListItem.vue"

export default {
    components: {
        PostListItem,
    },

    apollo: {
        topic: {
            query: gql`
                query($slug: String!) {
                    topic(slug: $slug) {
                        id
                        name
                        posts {
                            id
                            title
                            lead
                            created_at
                            user {
                                id
                                name
                            }
                            topic {
                                name
                                slug
                            }
                        }
                    }
                }
            `,
            variables() {
                return {
                    slug: this.$route.params.slug
                }
            }
        },
    },
};
</script>
s
