<template>
    <main>
        <header-image :source="'/image1.jpg'"/>
        <section class="container">
            <h1>{{title}}</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, consequuntur sit at ex temporibus ullam ducimus doloribus! Similique, ex. Dolores corporis id consectetur praesentium ipsum et expedita fugiat nam magni!
            </p>
        </section>
        <section class="container cards-section">
            <article-card 
                v-for="(article, index) in articles"
                :key="index"
                :article="article"
            />
        </section>
    </main>
</template>

<script setup>
 import { ref } from 'vue';
 const title= ref('Página de inicio');
const articles = ref ([
    {
        id:1,
        title:"Artículo 1",
        url:"/image1.jpg"
    },
    {
        id:2,
        title:"Artículo 2",
        url:"https://picsum.photos/500/301"
    },
    {
        id:3,
        title:"Artículo 3",
        url:"https://picsum.photos/500/302"
    },
    {
        id:4,
        title:"Artículo 4",
        url:"https://picsum.photos/500/303"
    }
])
</script>

<style lang="postcss">
    .cards-section{
        display: flex;
        justify-content: space-between;
    }
</style>
