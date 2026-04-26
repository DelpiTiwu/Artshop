<template>
  <section id="testimonials" class="testimonials">
    <div class="testimonials__container">
      <div class="testimonials__header">
        <h2 class="testimonials__title">Testimoni Pelanggan</h2>
        <p class="testimonials__subtitle">
          Pengalaman dan kepuasan pelanggan yang telah mempercayakan karya seni patung mereka kepada kami
        </p>
      </div>

      <div class="testimonials__slider" ref="slider">
        <div
          class="testimonials__track"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="testimonials__slide"
          >
            <div class="testimonials__card">
              <div class="testimonials__card-header">
                <div class="testimonials__avatar">
                  <img
                    :src="testimonial.avatar"
                    :alt="testimonial.name"
                    @error="handleAvatarError"
                  />
                </div>
                <div class="testimonials__info">
                  <h3 class="testimonials__name">{{ testimonial.name }}</h3>
                  <p class="testimonials__location">{{ testimonial.location }}</p>
                  <div class="testimonials__rating">
                    <font-awesome-icon
                      v-for="star in 5"
                      :key="star"
                      icon="star"
                      :class="{ 'testimonials__star--filled': star <= testimonial.rating }"
                    />
                  </div>
                </div>
              </div>
              <div class="testimonials__content">
                <p class="testimonials__text">"{{ testimonial.text }}"</p>
                <div class="testimonials__tags">
                  <span v-for="tag in testimonial.tags" :key="tag" class="testimonials__tag">
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="testimonials__controls">
        <button
          class="testimonials__btn testimonials__btn--prev"
          @click="previousSlide"
          :disabled="currentSlide === 0"
        >
          <font-awesome-icon icon="chevron-left" />
        </button>

        <div class="testimonials__dots">
          <button
            v-for="(_, index) in testimonials"
            :key="index"
            class="testimonials__dot"
            :class="{ 'testimonials__dot--active': currentSlide === index }"
            @click="goToSlide(index)"
          ></button>
        </div>

        <button
          class="testimonials__btn testimonials__btn--next"
          @click="nextSlide"
          :disabled="currentSlide === testimonials.length - 1"
        >
          <font-awesome-icon icon="chevron-right" />
        </button>
      </div>

      <div class="testimonials__stats">
        <div class="testimonials__stat">
          <h3>4.9</h3>
          <p>Rating Rata-rata</p>
        </div>
        <div class="testimonials__stat">
          <h3>1000+</h3>
          <p>Pelanggan Puas</p>
        </div>
        <div class="testimonials__stat">
          <h3>98%</h3>
          <p>Rekomendasi</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
const slider = ref(null)
let autoSlideInterval = null

const testimonials = ref([
  {
    name: 'Sarah Johnson',
    location: 'Melbourne, Australia',
    avatar: '/images/testimonials/avatar-1.jpg',
    rating: 5,
    text: 'Sangat puas dengan patung Garuda Wisnu Kencana yang saya pesan. Detail ukirannya sangat halus dan kayunya benar-benar berkualitas tinggi. Menjadi pusat perhatian di ruang tamu saya.',
    tags: ['Kualitas Tinggi', 'Ukiran Halus', 'Kayu Jati'],
  },
  {
    name: 'Bapak Made Sudana',
    location: 'Denpasar, Bali',
    avatar: '/images/testimonials/avatar-2.jpg',
    rating: 5,
    text: 'Pemesanan patung Ganesha untuk pura keluarga kami diselesaikan tepat waktu dengan hasil yang luar biasa sakral. Batu paras yang digunakan sangat bagus dan senimannya sangat paham akan pakem Bali.',
    tags: ['Sesuai Pakem', 'Tepat Waktu', 'Batu Paras'],
  },
  {
    name: 'Emma Williams',
    location: 'London, UK',
    avatar: '/images/testimonials/avatar-3.jpg',
    rating: 5,
    text: 'Memesan relief custom untuk dikirim ke London. Pengemasannya sangat aman, patung sampai tanpa cacat sedikitpun. Kualitas ekspor yang tidak perlu diragukan lagi. Very recommended!',
    tags: ['Pengiriman Aman', 'Kualitas Ekspor', 'Custom Design'],
  },
  {
    name: 'Ibu Ratna',
    location: 'Jakarta Selatan',
    avatar: '/images/testimonials/avatar-4.jpg',
    rating: 4,
    text: 'Pilar ukir Bali untuk gazebo halaman belakang rumah sudah terpasang. Hasilnya sangat rapi dan membuat suasana rumah jadi terasa seperti sedang liburan di villa Bali. Terima kasih Dimas Art Shop!',
    tags: ['Dekorasi Villa', 'Pilar Ukir', 'Sangat Rapi'],
  },
  {
    name: 'Michael Chen',
    location: 'Singapore',
    avatar: '/images/testimonials/avatar-5.jpg',
    rating: 5,
    text: 'Patung Buddha meditasi kayu suar yang saya beli sangat memberikan kesan tenang di ruangan yoga saya. Natural finish-nya menonjolkan serat kayu yang sangat indah.',
    tags: ['Kayu Suar', 'Natural Finish', 'Aura Tenang'],
  },
  {
    name: 'Desak Ayu',
    location: 'Ubud, Bali',
    avatar: '/images/testimonials/avatar-6.jpg',
    rating: 5,
    text: 'Sudah berlangganan bertahun-tahun dengan Dimas Art Shop untuk mengisi dekorasi villa kami di Ubud. Konsistensi kualitas dan pelayanan yang ramah membuat kami selalu kembali.',
    tags: ['Langganan Villa', 'Kualitas Konsisten', 'Pelayanan Ramah'],
  },
])

const nextSlide = () => {
  if (currentSlide.value < testimonials.value.length - 1) {
    currentSlide.value++
  } else {
    currentSlide.value = 0
  }
}

const previousSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  } else {
    currentSlide.value = testimonials.value.length - 1
  }
}

const goToSlide = (index) => {
  currentSlide.value = index
}

const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval)
    autoSlideInterval = null
  }
}

onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  stopAutoSlide()
})

const handleAvatarError = (event) => {
  // Fallback ke gambar online jika gambar lokal tidak ditemukan
  const fallbackImages = [
    'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
  ]

  // Ambil index dari src untuk menentukan fallback yang sesuai
  const currentSrc = event.target.src
  const avatarIndex = currentSrc.match(/avatar-(\d+)\.jpg/)
  if (avatarIndex) {
    const index = parseInt(avatarIndex[1]) - 1
    if (fallbackImages[index]) {
      event.target.src = fallbackImages[index]
    }
  }
}
</script>

<style scoped>
.testimonials {
  padding: 6rem 0;
  background: white;
}

.testimonials__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.testimonials__header {
  text-align: center;
  margin-bottom: 4rem;
}

.testimonials__title {
  font-family: 'Big Shoulders Stencil', cursive;
  font-size: 3rem;
  font-weight: 800;
  color: #2c3e50;
  margin-bottom: 1rem;
  position: relative;
  letter-spacing: 2px;
}

.testimonials__title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(135deg, #c77d46 0%, #e6b999 100%);
  border-radius: 2px;
}

.testimonials__subtitle {
  font-size: 1.2rem;
  color: #34495e;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.testimonials__slider {
  position: relative;
  overflow: hidden;
  margin-bottom: 3rem;
}

.testimonials__track {
  display: flex;
  transition: transform 0.5s ease;
}

.testimonials__slide {
  min-width: 100%;
  padding: 0 1rem;
}

.testimonials__card {
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0f0;
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.testimonials__card::before {
  content: '"';
  position: absolute;
  top: -10px;
  left: 30px;
  font-size: 6rem;
  color: #c77d46;
  font-family: serif;
  line-height: 1;
}

.testimonials__card-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.testimonials__avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #c77d46;
  flex-shrink: 0;
}

.testimonials__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.testimonials__info {
  flex: 1;
}

.testimonials__name {
  font-family: 'Oswald', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
}

.testimonials__location {
  color: #5a6c7d;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.testimonials__rating {
  display: flex;
  gap: 0.2rem;
}

.testimonials__rating .fa-icon {
  font-size: 16px;
  transition: all 0.3s ease;
}

.testimonials__star--filled {
  color: #c77d46;
}

.testimonials__star:not(.testimonials__star--filled) {
  color: #e0e0e0;
}

.testimonials__content {
  margin-left: 95px;
}

.testimonials__text {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #34495e;
  margin-bottom: 2rem;
  font-style: italic;
}

.testimonials__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.testimonials__tag {
  background: linear-gradient(135deg, #c77d46 0%, #e6b999 100%);
  color: #2c3e50;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.testimonials__controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 4rem;
}

.testimonials__btn {
  background: linear-gradient(135deg, #c77d46 0%, #e6b999 100%);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2c3e50;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(199, 125, 70, 0.3);
}

.testimonials__btn .fa-icon {
  font-size: 18px;
  transition: all 0.3s ease;
}

.testimonials__btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(199, 125, 70, 0.4);
}

.testimonials__btn:hover:not(:disabled) .fa-icon {
  transform: scale(1.1);
}

.testimonials__btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.testimonials__dots {
  display: flex;
  gap: 0.5rem;
}

.testimonials__dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: #e0e0e0;
  cursor: pointer;
  transition: all 0.3s ease;
}

.testimonials__dot--active {
  background: linear-gradient(135deg, #c77d46 0%, #e6b999 100%);
  transform: scale(1.2);
}

.testimonials__stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  text-align: center;
}

.testimonials__stat {
  padding: 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 20px;
  border: 1px solid #e0e0e0;
}

.testimonials__stat h3 {
  font-family: 'Big Shoulders Stencil', cursive;
  font-size: 3rem;
  font-weight: 800;
  color: #c77d46;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
}

.testimonials__stat p {
  font-size: 1.1rem;
  color: #5a6c7d;
  font-weight: 600;
}

@media (max-width: 768px) {
  .testimonials__title {
    font-size: 2rem;
  }

  .testimonials__card {
    padding: 2rem;
  }

  .testimonials__card-header {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .testimonials__content {
    margin-left: 0;
  }

  .testimonials__card::before {
    left: 50%;
    transform: translateX(-50%);
  }

  .testimonials__stats {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .testimonials__stat h3 {
    font-size: 2rem;
  }
}
</style>
