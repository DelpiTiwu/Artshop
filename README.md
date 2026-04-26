# 🗿 Dimas Art Shop - Galeri Digital & Katalog Patung Bali

Dimas Art Shop adalah *Single Page Application* (SPA) interaktif yang dirancang sebagai galeri portofolio digital dan katalog produk untuk sebuah usaha pengrajin patung dan seni ukir Bali. Website ini dilengkapi dengan integrasi pesanan langsung (*Direct-Order*) via WhatsApp.

## ✨ Fitur Utama

- **Hero Section:** Banner utama interaktif dengan Call-to-Action.
- **Profil & Identitas:** Menampilkan narasi sejarah, dedikasi, dan filosofi di balik mahakarya Dimas Art Shop.
- **Katalog Produk:** Grid produk yang menampilkan spesifikasi material (seperti Kayu Jati, Kayu Suar, dll) beserta harga secara terstruktur.
- **Galeri Portofolio:** *Lightbox gallery* yang menampilkan hasil akhir dan dokumentasi proses pembuatan karya seni.
- **Testimoni:** Ulasan dari pelanggan mancanegara maupun domestik.
- **Direct-Order WhatsApp:** Sistem *checkout* sederhana yang mengotomatiskan konversi detail pesanan pelanggan langsung ke *chat* WhatsApp pengelola toko.

## 🚀 Tech Stack

- **Frontend Framework**: Vue 3 (Composition API)
- **Build Tool**: Vite
- **Styling**: CSS3 (Modern styling, Flexbox/Grid, CSS Variables)
- **Icons**: Font Awesome

## 📦 Instalasi & Menjalankan secara Lokal

1. **Clone repository ini**
   ```bash
   git clone <repository-url-anda>
   cd landingpage-destination
   ```

2. **Install dependencies**
   Pastikan Anda sudah menginstal Node.js, kemudian jalankan:
   ```bash
   npm install
   ```

3. **Jalankan *Development Server***
   ```bash
   npm run dev
   ```

4. **Buka di Browser**
   Buka URL lokal yang muncul di terminal (biasanya `http://localhost:5173`).

## ⚙️ Mengubah Nomor WhatsApp (Penting!)
Sebelum Anda mempublikasikan website ini untuk bisnis sungguhan, pastikan Anda mengganti nomor **dummy** WhatsApp (`6281234567890`) ke nomor admin Anda. 
Anda dapat mencari teks `6281234567890` di dalam *file* berikut:
- `src/components/HeroSection.vue`
- `src/components/AttractionsSection.vue`
- `src/components/ContactSection.vue`

## 🚀 Deployment (Publikasi)

Proyek ini sangat mudah di-deploy secara gratis menggunakan layanan seperti **Vercel** atau **Netlify**.
1. Hubungkan repository GitHub ini ke Vercel/Netlify.
2. Pengaturan otomatis (Framework: Vue, Build command: `npm run build`, Output directory: `dist`).
3. Deploy!

---

*Dibuat untuk mempromosikan dan melestarikan mahakarya seni ukir dan patung Nusantara.*
