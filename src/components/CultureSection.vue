<template>
  <section id="culture" class="culture">
    <div class="culture__container">
      <div class="culture__header">
        <h2 class="culture__title">Profil & Identitas</h2>
        <p class="culture__subtitle">
          Mengenal sejarah, dedikasi, dan filosofi di balik mahakarya Dimas Art Shop
        </p>
      </div>

      <div class="culture__history">
        <p>
          Berdiri sebagai pusat pelestarian dan pengembangan seni ukir, <strong>Dimas Art Shop</strong> telah mendedikasikan diri untuk menghasilkan mahakarya patung berkualitas tinggi. Berakar pada kekayaan budaya lokal, setiap pahatan tidak hanya mewakili estetika visual, tetapi juga nilai spiritual dan filosofis yang mendalam.
        </p>
        <p>
          Kami percaya bahwa setiap material kayu dan batu memiliki jiwanya sendiri. Tugas kami adalah memunculkan keindahan tersebut ke permukaan dengan ketelitian maestro pengrajin kami, memastikan setiap karya dapat menjadi pilar estetika maupun spiritual di kehidupan pelanggan kami.
        </p>
      </div>

      <div class="culture__grid">
        <div
          v-for="(item, index) in cultureItems"
          :key="index"
          class="culture__card"
          :class="{ 'culture__card--featured': item.featured }"
        >
          <div class="culture__card-image">
            <img
              :src="item.image"
              :alt="item.title"
              @error="handleImageError($event, item.fallbackImage)"
            />
            <div class="culture__card-overlay">
              <button class="culture__card-btn" @click="openModal(item)">
                <font-awesome-icon icon="expand" size="lg" />
              </button>
            </div>
          </div>
          <div class="culture__card-content">
            <h3 class="culture__card-title">{{ item.title }}</h3>
            <p class="culture__card-description">
              {{ item.featured ? item.fullDescription : item.description }}
            </p>
            <div class="culture__card-tags">
              <span v-for="tag in item.tags" :key="tag" class="culture__tag">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="selectedItem" class="culture__modal" @click="closeModal">
      <div class="culture__modal-content" @click.stop>
        <button class="culture__modal-close" @click="closeModal">
          <font-awesome-icon icon="times" size="lg" />
        </button>
        <div class="culture__modal-body">
          <img :src="selectedItem.image" :alt="selectedItem.title" class="culture__modal-image" />
          <div class="culture__modal-text">
            <h3 class="culture__modal-title">{{ selectedItem.title }}</h3>
            <p class="culture__modal-description">{{ selectedItem.fullDescription }}</p>
            <div class="culture__modal-tags">
              <span v-for="tag in selectedItem.tags" :key="tag" class="culture__tag">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const selectedItem = ref(null)

const cultureItems = ref([
  {
    title: 'Patung Dekorasi',
    description: 'Memperindah sudut rumah atau villa Anda dengan sentuhan artistik',
    fullDescription:
      'Kami menyediakan berbagai jenis patung dekorasi untuk mempercantik ruangan, taman, atau villa Anda. Dikerjakan dengan detail yang halus dan menggunakan bahan berkualitas untuk menjamin keawetan dan nilai estetika.',
    image: '/images/culture/budaya-dekorasi.jpg',
    fallbackImage:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tags: ['Dekorasi', 'Estetika', 'Villa'],
    featured: true,
  },
  {
    title: 'Kebutuhan Ibadah',
    description: 'Patung sakral untuk keperluan pura atau tempat suci lainnya',
    fullDescription:
      'Patung-patung yang kami buat tidak hanya sekadar pajangan, tetapi juga memenuhi standar pembuatan patung sakral untuk keperluan peribadatan dan budaya Bali. Setiap pahatan dilakukan dengan doa dan ketelitian.',
    image: '/images/culture/budaya-ibadah.jpg',
    fallbackImage:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tags: ['Sakral', 'Budaya', 'Spiritual'],
    featured: false,
  },
  {
    title: 'Pesanan Custom',
    description: 'Wujudkan desain patung impian Anda bersama pengrajin kami',
    fullDescription:
      'Anda memiliki desain patung sendiri? Pengrajin kami siap mewujudkannya. Kami melayani pembuatan patung custom sesuai dengan ukuran, bahan, dan detail yang Anda inginkan.',
    image: '/images/culture/budaya-custom.jpg',
    fallbackImage:
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tags: ['Custom', 'Desain', 'Unik'],
    featured: false,
  },
  {
    title: 'Kualitas Ekspor',
    description: 'Standar kualitas terbaik yang telah diakui hingga mancanegara',
    fullDescription:
      'Dimas Art Shop telah melayani pemesanan patung hingga ke luar negeri. Kami menjamin standar kualitas, pengemasan, dan material yang tahan lama untuk dikirim ke berbagai negara.',
    image: '/images/culture/budaya-ekspor.jpg',
    fallbackImage:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tags: ['Ekspor', 'Premium', 'Kualitas'],
    featured: false,
  },
  {
    title: 'Bahan Berkualitas',
    description: 'Menggunakan kayu dan batu pilihan terbaik',
    fullDescription:
      'Kami hanya menggunakan material pilihan terbaik seperti kayu jati, kayu suar, batu paras, dan batu padas untuk memastikan setiap karya tahan lama dan memiliki tekstur yang indah.',
    image: '/images/culture/budaya-bahan.jpg',
    fallbackImage:
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tags: ['Material', 'Kayu', 'Batu'],
    featured: false,
  },
  {
    title: 'Detail Ukiran',
    description: 'Pahatan yang presisi dan penuh karakter',
    fullDescription:
      'Keunggulan karya Dimas Art Shop terletak pada detail ukiran yang sangat diperhatikan. Setiap lekuk wajah, pakaian, dan ornamen dipahat dengan tingkat ketelitian yang tinggi oleh maestro ukir.',
    image: '/images/culture/budaya-ukiran.jpg',
    fallbackImage:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tags: ['Ukiran', 'Presisi', 'Detail'],
    featured: false,
  },
])

const openModal = (item) => {
  selectedItem.value = item
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedItem.value = null
  document.body.style.overflow = 'auto'
}

const handleImageError = (event, fallbackImage) => {
  event.target.src = fallbackImage
}
</script>

<style scoped>
.culture {
  padding: 6rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.culture__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.culture__header {
  text-align: center;
  margin-bottom: 4rem;
}

.culture__title {
  font-family: 'Big Shoulders Stencil', cursive;
  font-size: 3rem;
  font-weight: 800;
  color: #333;
  margin-bottom: 1rem;
  position: relative;
  letter-spacing: 2px;
}

.culture__title::after {
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

.culture__subtitle {
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.culture__history {
  max-width: 800px;
  margin: 0 auto 4rem auto;
  text-align: center;
  color: #444;
  font-size: 1.1rem;
  line-height: 1.8;
}

.culture__history p {
  margin-bottom: 1.5rem;
}

.culture__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  align-items: stretch;
}

.culture__card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 400px;
}

.culture__card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.culture__card--featured {
  grid-column: span 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 300px;
  height: auto;
}

.culture__card-image {
  position: relative;
  height: 240px;
  overflow: hidden;
  flex-shrink: 0;
}

.culture__card--featured .culture__card-image {
  height: 100%;
}

.culture__card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.culture__card:hover .culture__card-image img {
  transform: scale(1.1);
}

.culture__card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.culture__card:hover .culture__card-overlay {
  opacity: 1;
}

.culture__card-btn {
  background: rgba(199, 125, 70, 0.9);
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.culture__card-btn:hover {
  background: #c77d46;
  transform: scale(1.1);
}

.culture__card-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 160px;
}

.culture__card--featured .culture__card-content {
  padding: 2.5rem;
  justify-content: center;
}

.culture__card-title {
  font-family: 'Oswald', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.75rem;
  line-height: 1.3;
  letter-spacing: 0.5px;
}

.culture__card-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
  flex: 1;
  display: flex;
  align-items: flex-start;
}

.culture__card--featured .culture__card-description {
  flex: 0 1 auto;
  margin-bottom: 2rem;
  font-size: 1.05rem;
}

.culture__card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
}

.culture__tag {
  background: linear-gradient(135deg, #c77d46 0%, #e6b999 100%);
  color: #fff;
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  white-space: nowrap;
}

.culture__modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 2rem;
}

.culture__modal-content {
  background: white;
  border-radius: 16px;
  max-width: 1000px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.culture__modal-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  z-index: 1;
  transition: all 0.3s ease;
}

.culture__modal-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  min-height: 500px;
}

.culture__modal-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px 0 0 16px;
}

.culture__modal-text {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.culture__modal-title {
  font-family: 'Oswald', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  flex-shrink: 0;
  letter-spacing: 0.5px;
}

.culture__modal-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
}

.culture__modal-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
  flex-shrink: 0;
}

@media (min-width: 769px) and (max-width: 1024px) {
  .culture__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .culture__card--featured {
    grid-column: span 2;
  }
}

@media (min-width: 1025px) {
  .culture__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .culture__card--featured {
    grid-column: span 2;
  }
}

@media (max-width: 768px) {
  .culture__title {
    font-size: 2rem;
  }

  .culture__grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 0.5rem;
  }

  .culture__card {
    min-height: 350px;
  }

  .culture__card--featured {
    grid-column: span 1;
    display: flex;
    flex-direction: column;
    min-height: 350px;
    height: auto;
  }

  .culture__card-image {
    height: 200px;
  }

  .culture__card-content {
    padding: 1.25rem;
    min-height: 150px;
  }

  .culture__card-title {
    font-size: 1.3rem;
  }

  .culture__modal {
    padding: 1rem;
  }

  .culture__modal-content {
    max-width: 100%;
    border-radius: 12px;
  }

  .culture__modal-body {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .culture__modal-image {
    height: 250px;
    border-radius: 12px 12px 0 0;
  }

  .culture__modal-text {
    padding: 1.5rem;
  }

  .culture__modal-title {
    font-size: 1.5rem;
  }
}

/* Font Awesome Icons Styling */
.culture__card-btn .fa-icon,
.culture__modal-close .fa-icon {
  transition: all 0.3s ease;
  color: inherit;
}

.culture__card-btn:hover .fa-icon {
  transform: scale(1.1);
}

.culture__modal-close:hover .fa-icon {
  transform: scale(1.1);
}
</style>
