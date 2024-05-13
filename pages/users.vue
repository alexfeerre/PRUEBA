<template> 
    <div> 
        <header-image :source="'https://picsum.photos/1024/201?grayscale'" /> 
        <main class="container">
        <h1>Traer usuarios de una API</h1> 
    <p> 
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque vero harum nisi, ipsam mollitia consequuntur temporibus quis maxime rerum ex, voluptatem ea ipsa ut eveniet vitae nesciunt, eligendi sapiente. Est?
    </p> 
    <section class="container cards-section">
        <user-card 
            v-for="(user, index) in data" 
            :key="index" 
            :user="user" 
    /> 
    </section> 
    </main> 
</div> 
</template> 
<script setup> 
    const { data } = await useFetch('https://fakestoreapi.com/users', { 
        lazy: true, 
        server: false, 
    }) 
</script> 
    
    