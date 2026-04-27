<template>
  <section id="home" class="hero">
    <div class="hero__background">
      <div class="hero__overlay"></div>
      <div class="hero__image-container">
        <img
          :src="heroImage"
          alt="Galeri Seni Patung Bali"
          class="hero__bg-image"
        />
      </div>
    </div>

    <div class="hero__content">
      <div class="hero__container">
        <ScrollAnimation animation="fadeInUp" :delay="200">
          <div class="hero__text">
            <h1 class="hero__title">
              <span class="hero__title--main">Dimas Art Shop</span>
              <span class="hero__title--sub">Galeri Seni & Kerajinan Patung Bali</span>
            </h1>
            <p class="hero__description">
              Pusat kerajinan patung Bali berkualitas dengan nilai seni dan estetika tinggi. Menghadirkan keindahan karya seni ukir untuk dekorasi rumah, villa, hotel, hingga kebutuhan spiritual Anda.
            </p>
            <div class="hero__buttons">
              <button class="btn btn--primary" @click="scrollToSection('attractions')">
                <span>Lihat Katalog</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button class="btn btn--secondary" @click="openWhatsApp">
                <span>Hubungi Kami</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="margin-left: 0.5rem">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </button>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeInUp" :delay="600">
          <div class="hero__stats">
            <div class="hero__stat">
              <h3>500+</h3>
              <p>Karya Terjual</p>
            </div>
            <div class="hero__stat">
              <h3>50+</h3>
              <p>Pengrajin Lokal</p>
            </div>
            <div class="hero__stat">
              <h3>1000+</h3>
              <p>Pelanggan Puas</p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>



    <div class="hero__scroll-indicator">
      <div class="hero__scroll-arrow" @click="scrollToSection('culture')">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M7 13L12 18L17 13M7 6L12 11L17 6"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ScrollAnimation from './ScrollAnimation.vue'

// Ganti path ke lokasi hero-banner.jpg yang sudah disimpan user
const heroImage = ref('/images/hero/hero-banner.jpg')

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const openWhatsApp = () => {
  window.open('https://wa.me/6281237205762?text=Halo%20Dimas%20Art%20Shop,%20saya%20ingin%20bertanya%20mengenai%20produk%20patung%20dan%20kerajinan.', '_blank');
}
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero__background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.hero__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%);
  z-index: 2;
}

.hero__image-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.hero__bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero__content {
  position: relative;
  z-index: 3;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

.hero__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero__text {
  color: white;
}

.hero__title {
  margin-bottom: 1.5rem;
}

.hero__title--main {
  display: block;
  font-family: 'Big Shoulders Stencil', cursive;
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #c77d46 0%, #e6b999 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 2px;
}

.hero__title--sub {
  display: block;
  font-family: 'Oswald', sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  color: #e6b999;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  letter-spacing: 1px;
}

.hero__description {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  color: #e8e8e8;
  max-width: 500px;
}

.hero__buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-family: 'Oswald', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.btn--primary {
  background: linear-gradient(135deg, #c77d46 0%, #e6b999 100%);
  color: #fff;
  box-shadow: 0 4px 15px rgba(199, 125, 70, 0.3);
}

.btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(199, 125, 70, 0.4);
}

.btn--secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn--secondary:hover {
  background: white;
  color: #333;
  transform: translateY(-2px);
}

.hero__stats {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.hero__stat {
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.hero__stat h3 {
  font-family: 'Big Shoulders Stencil', cursive;
  font-size: 2.5rem;
  font-weight: 800;
  color: #c77d46;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
}

.hero__stat p {
  font-family: 'Oswald', sans-serif;
  font-size: 1rem;
  color: #e8e8e8;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.hero__video-controls {
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 4;
  display: flex;
  gap: 0.5rem;
}

.hero__control-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.hero__control-btn:hover {
  background: rgba(0, 0, 0, 0.7);
  transform: scale(1.05);
}

.hero__control-btn:active {
  transform: scale(0.95);
}

.hero__scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
}

.hero__scroll-arrow {
  color: white;
  cursor: pointer;
  animation: bounce 2s infinite;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.hero__scroll-arrow:hover {
  opacity: 1;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@media (max-width: 768px) {
  .hero__container {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .hero__title--main {
    font-size: 2.5rem;
  }

  .hero__title--sub {
    font-size: 1.2rem;
  }

  .hero__description {
    font-size: 1rem;
  }

  .hero__buttons {
    justify-content: center;
  }

  .hero__stats {
    flex-direction: row;
    justify-content: space-around;
  }

  .hero__stat {
    padding: 1rem;
  }

  .hero__stat h3 {
    font-size: 1.8rem;
  }

  .hero__video-controls {
    top: 1rem;
    right: 1rem;
  }

  .hero__control-btn {
    width: 40px;
    height: 40px;
  }
}
</style>
