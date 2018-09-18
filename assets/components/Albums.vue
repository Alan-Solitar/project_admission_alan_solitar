<template>
  <div class="container">
      <section class="filter">
        <input @change="filter" v-model="name" type="text">
      </section>
      <section class="album-list">
        <article class="album" v-for="album in filteredAlbums" :key="album.id">
                <span v-html="album.description"></span>
                <img :src="album.photos[0].url"  height=100 width=100 alt="">
        </article>
      </section>
  </div>
</template>

<script>
export default {
    name: 'Albums',
    data() {
        return {
            name: '',
            filteredAlbums: [],
        }
    },
    computed: {
        albums() {
            return this.$store.getters.albums
        },
    },
    created() {
        this.$store.dispatch('get')
    },
    methods: {
        filter() {
            const filteredAlbums = this.albums.filter((album) => {
                const { tags } = album
                return tags.includes(this.name)
            })
            this.filteredAlbums = filteredAlbums
        },
    },
}
</script>

<style scoped>

</style>
