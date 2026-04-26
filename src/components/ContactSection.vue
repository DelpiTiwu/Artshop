<template>
  <section id="contact" class="contact">
    <div class="contact__container">
      <div class="contact__header">
        <h2 class="contact__title">Hubungi Kami</h2>
        <p class="contact__subtitle">
          Konsultasikan kebutuhan seni patung Anda dengan kami. Kami siap mewujudkan karya seni terbaik untuk Anda.
        </p>
      </div>

      <div class="contact__content">
        <div class="contact__info">
          <div class="contact__info-card">
            <div class="contact__info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path
                  d="M8 12L10.5 14.5L16 9"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h3>Pesan Sekarang</h3>
            <p>
              Dapatkan penawaran terbaik untuk pembuatan patung custom dengan kualitas premium
            </p>
          </div>

          <div class="contact__info-card">
            <div class="contact__info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61 4.79 5.5 7.5 5.5C9.24 5.5 10.73 6.5 11.5 8C12.27 6.5 13.76 5.5 15.5 5.5C18.21 5.5 21 7.61 21 10Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h3>Lokasi Kami</h3>
            <p>Jl. Gn. Tangkuban Perahu, Jl. Pengubengan Kauh<br />Kerobokan Kelod, Kec. Kuta Utara<br />Kabupaten Badung, Bali 80361</p>
          </div>

          <div class="contact__info-card">
            <div class="contact__info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06679 2.16708 8.43376 2.48353C8.80073 2.79999 9.03996 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.89391 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9625 21.2094 15.2099 21.5265 15.5834C21.8437 15.9569 22.0122 16.4308 22 16.92Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h3>Hubungi Kami</h3>
            <p>0812-3456-7890<br />info@dimasartshop.com<br />order@dimasartshop.com</p>
          </div>
        </div>

        <div class="contact__form-container">
          <form class="contact__form" @submit.prevent="submitForm">
            <div class="contact__form-header">
              <h3>Kirim Pesan</h3>
              <p>Ada pertanyaan atau ingin konsultasi pesanan? Kirim pesan langsung ke WhatsApp kami</p>
            </div>

            <div class="contact__form-grid" style="grid-template-columns: 1fr; gap: 1.5rem;">
              <div class="contact__form-group">
                <label for="name">Nama Anda *</label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  required
                  placeholder="Masukkan nama Anda"
                />
              </div>

              <div class="contact__form-group">
                <label for="package">Topik / Kategori *</label>
                <select id="package" v-model="form.package" required>
                  <option value="">Pilih Topik</option>
                  <option value="Tanya Patung Dekorasi">Tanya Patung Dekorasi</option>
                  <option value="Tanya Kebutuhan Ibadah">Tanya Kebutuhan Ibadah</option>
                  <option value="Tanya Pesanan Custom">Tanya Pesanan Custom</option>
                  <option value="Pertanyaan Umum Lainnya">Pertanyaan Umum Lainnya</option>
                </select>
              </div>

              <div class="contact__form-group">
                <label for="message">Pesan Anda *</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="4"
                  required
                  placeholder="Tulis pertanyaan atau detail kebutuhan Anda di sini..."
                ></textarea>
              </div>
            </div>

            <div class="contact__form-actions">
              <button type="submit" class="btn btn--primary" :disabled="isSubmitting">
                <span v-if="!isSubmitting">Kirim via WhatsApp</span>
                <span v-else>Membuka WhatsApp...</span>
                <svg v-if="!isSubmitting" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="margin-left: 0.5rem">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const isSubmitting = ref(false)

const form = ref({
  name: '',
  package: '',
  message: '',
})

const submitForm = () => {
  isSubmitting.value = true
  
  const textMessage = `Halo Dimas Art Shop, perkenalkan saya ${form.value.name}.\n\nTopik: ${form.value.package}\n\nPesan: ${form.value.message}`;
  const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(textMessage)}`;
  
  // Membuka tab WhatsApp baru
  window.open(whatsappUrl, '_blank');
  
  // Reset form setelah sedikit delay
  setTimeout(() => {
    isSubmitting.value = false;
    form.value = {
      name: '',
      package: '',
      message: '',
    };
  }, 1000);
}
</script>

<style scoped>
.contact {
  padding: 6rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.contact__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.contact__header {
  text-align: center;
  margin-bottom: 4rem;
}

.contact__title {
  font-family: 'Big Shoulders Stencil', cursive;
  font-size: 3rem;
  font-weight: 800;
  color: #333;
  margin-bottom: 1rem;
  position: relative;
  letter-spacing: 2px;
}

.contact__title::after {
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

.contact__subtitle {
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.contact__content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: start;
}

.contact__info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact__info-card {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0f0;
  text-align: center;
}

.contact__info-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #c77d46 0%, #e6b999 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: #333;
}

.contact__info-card h3 {
  font-family: 'Oswald', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
  letter-spacing: 0.5px;
}

.contact__info-card p {
  color: #666;
  line-height: 1.6;
}

.contact__form-container {
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0f0;
}

.contact__form-header {
  text-align: center;
  margin-bottom: 2rem;
}

.contact__form-header h3 {
  font-family: 'Oswald', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
}

.contact__form-header p {
  color: #666;
  font-size: 1.1rem;
}

.contact__form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.contact__form-group {
  display: flex;
  flex-direction: column;
}

.contact__form-group--full {
  grid-column: span 2;
}

.contact__form-group label {
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.contact__form-group input,
.contact__form-group select,
.contact__form-group textarea {
  padding: 1rem;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
}

.contact__form-group input:focus,
.contact__form-group select:focus,
.contact__form-group textarea:focus {
  outline: none;
  border-color: #c77d46;
  box-shadow: 0 0 0 3px rgba(199, 125, 70, 0.1);
}

.contact__date-inputs {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.contact__date-inputs span {
  color: #666;
  font-weight: 500;
}

.contact__checkbox-group {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}

.contact__checkbox {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.contact__checkbox:hover {
  background-color: #f8f9fa;
}

.contact__checkbox input[type='checkbox'] {
  width: 18px;
  height: 18px;
  accent-color: #c77d46;
}

.contact__checkbox span {
  font-size: 0.9rem;
  color: #666;
}

.contact__form-actions {
  text-align: center;
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
  min-width: 200px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.btn--primary {
  background: linear-gradient(135deg, #c77d46 0%, #e6b999 100%);
  color: #333;
  box-shadow: 0 4px 15px rgba(199, 125, 70, 0.3);
}

.btn--primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(199, 125, 70, 0.4);
}

.btn--primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

@media (max-width: 768px) {
  .contact__title {
    font-size: 2rem;
  }

  .contact__content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact__form-container {
    padding: 2rem;
  }

  .contact__form-grid {
    grid-template-columns: 1fr;
  }

  .contact__form-group--full {
    grid-column: span 1;
  }

  .contact__checkbox-group {
    grid-template-columns: 1fr;
  }

  .contact__date-inputs {
    flex-direction: column;
    align-items: stretch;
  }

  .contact__date-inputs span {
    text-align: center;
  }
}
</style>
