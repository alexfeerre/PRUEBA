<template>
    <div>
      <main>
        <header>
          <div id="logowrap">
            <img src="https://picsum.photos/500/312" alt="Logo de campusMVP" />
          </div>
        </header>
        <section id="galeria" class="grid-gallery">
          <header>
            <h1>Cursos y libros de campusMVP</h1>
          </header>
          <article v-for="(item, index) in images" :key="index">
            <a :href="item.link" target="_blank">
              <figure>
                <img :src="item.src" alt="Gallery Image" class="grid-gallery__image" />
                <figcaption>{{ item.caption }}</figcaption>
              </figure>
            </a>
          </article>
        </section>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          { src: '/image2.jpg', link: '#', caption: 'Descripción de la imagen' },
          { src: 'https://picsum.photos/500/301', link: '#', caption: 'Descripción de la imagen' },
          { src: '/image2.jpg', link: '#', caption: 'Descripción de la imagen' },
          { src: 'https://picsum.photos/500/301', link: '#', caption: 'Descripción de la imagen' },
          { src: '/image2.jpg', link: '#', caption: 'Descripción de la imagen' },
          { src: '/image2.jpg', link: '#', caption: 'Descripción de la imagen' },
          { src: 'https://picsum.photos/500/301', link: '#', caption: 'Descripción de la imagen' },
          { src: '/image2.jpg', link: '#', caption: 'Descripción de la imagen' },
          { src: 'https://picsum.photos/500/301', link: '#', caption: 'Descripción de la imagen' },
          { src: '/image2.jpg', link: '#', caption: 'Descripción de la imagen' },
        ]
      };
    }
  }
  </script>
  
  <style scoped>

  .grid{
    width: 100%;
  }
  .grid-gallery {
    display: grid;
    gap: 1rem;
    grid-auto-flow: row dense;
  }
  
  .grid-gallery__item {
    display: block;
  }
  
  .grid-gallery__image {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  </style>
  