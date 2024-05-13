<template>
    <nav>
        <ul>
            <li>
                <NuxtLink to="/">Home<Icon name="mdi:account-badge" color="black" />
</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about">About</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/users">Usuarios (fetch)</NuxtLink>
            </li>
            <li>
                <Icon name="mdi:account-badge" />

            </li>
        </ul>
        <button
            class="user"
            @click="panelActive = !panelActive"><img src="https://picsum.photos/500/301" class="foto">
        </button>
         <div
            class="panel"
            
            v-show="panelActive">
        </div>
    </nav>
</template>

<script setup>
    import { ref } from 'vue'
    const panelActive = ref(false)
</script>
<style lang="postcss">
    *{
        font-family: "Roboto Mono";
    }
    nav{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        position: relative;
        padding: 0 30px;
    }
    ul{
        @apply flex p-4;
        
        li{
            @apply p-4;
        }
        
    }
    .panel{
        width: 20%;
        height: 200px;
        position: absolute;
        right: 0;
        top: 88px;
        background-image:url(https://i.pinimg.com/736x/40/04/24/400424dad5da756a03e9d9c2ca758ffa.jpg) ;
        object-fit: scale-down;
    }
    .foto{
        width: 50px;
        height: 50px;
        overflow: hidden;
        border-radius: 50px;
        top: 20%;
        img{
            width: 100%;
            height: 100%;
            object-fit: scale-down;        }
        :hover{
            cursor:pointer;
        }
    }
</style>