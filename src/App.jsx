import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// IMPORT ASSETS (Pastikan file gambar ada di folder src/assets)
import gbrAkun1 from '/assets/akun1.jpg'; 
import gbrAkun2 from '/assets/akun2.jpg'; 
import gbrAkun3 from '/assets/akun3.jpg';
import gbrAkun4 from '/assets/akun4.jpg';
import gbrAkun5 from '/assets/akun5.jpg';
import gbrAkunff1 from '/assets/akunff1.jpg';
import gbrAkunff1_1 from '/assets/akunff1_1.jpg';
import gbrAkunff1_2 from '/assets/akunff1_2.jpg';
import './App.css';

function App() {
  const nomorWA = "6281536702867";
  
  // STATE
  const [searchTerm, setSearchTerm] = useState(""); 
  const [showButton, setShowButton] = useState(false); 
  const [selectedAkun, setSelectedAkun] = useState(null); 
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // DATA DAFTAR AKUN
  const listAkun = [
    { 
      id: 1, 
      nama: "Akun Sultan MLBB (729 Skins)", 
      harga: "Rp 1.500.000", 
      fitur: "Rank Mythical Glory, Collector Full", 
      deskripsi: "Akun pribadi aman 100%. Login Moonton (sepaket email). Skin Collector melimpah, Emblem Max, Winrate mantap.",
      fotoProfil:gbrAkun1,
      gambar: gbrAkun1, 
      isReady: true, 
      pesan: "Halo Rizal, saya mau beli Akun Sultan MLBB" 
    },
    { 
      id: 2, 
      nama: "Akun Mobile Legends 2", 
      harga: "Rp 850.000", 
      fitur: "Rank Legend 3, Spek liat ss/chat admin", 
      deskripsi: "Akun spek standar cocok buat push rank. Skin Epic banyak. Akun aman anti hackback.",
      fotoProfil: gbrAkun2,
      gambar: gbrAkun2, 
      isReady: false, 
      pesan: "Halo Rizal, saya mau beli Akun ML harga 850rb" 
    },
    { 
      id: 3, 
      nama: "Akun Mobile Legends 3", 
      harga: "Rp 900.000", 
      fitur: "Rank Imortal, Skin cek ss/chat admin", 
      deskripsi: "Akun Rank Tinggi (Immortal). Skin KOF & Limited. Cocok untuk pamer di lobby!",
      fotoProfil: gbrAkun3,
      gambar: gbrAkun3, 
      isReady: true, 
      pesan: "Halo Rizal, saya mau beli Akun ML harga 900rb" 
    },
    {
      id: 4,
      nama: "Akun Mobile Legends 4",
      harga: "Rp 1.000.000",
      fitur: "Kolektor Juragan",
      deskripsi: "Akun bekas jesnolimit",
      fotoProfil: gbrAkun4,
      gambar: gbrAkun4,
      isReady:true,
      pesan:"Halo Rizal,saya mau beli akun ml harga 1jt kol jur"
    },
    {
      id: 5,
      nama: "Akun Mobile Legends 5",
      harga: "Rp 500.000",
      fitur: "Skinn 200",
      deskripsi: "Akun bekas jesnolimit",
      fotoProfil: gbrAkun5,
      gambar: gbrAkun5,
      isReady:true,
      pesan:"Halo Rizal ganteng "
    },
    {
      id: 6,
      nama: "Akun FF 6",
      harga: "Rp 300.000",
      fitur: "Akun ff Old",
      deskripsi: "Akun bekas Gm",
      fotoProfil: gbrAkunff1,
      gambar: [gbrAkunff1_1,gbrAkunff1_2],
      isReady:true,
      pesan:"Halo bang.Saya mau beli akun ff harga 300k"
    }
  ];

  // DATA TESTIMONI
  const testimoni = [
    { id: 1, nama: "Andi Pratama", ulasan: "Awalnya ragu, pas beli ternyata prosesnya cepet banget. Akun aman 100%!", bintang: "⭐⭐⭐⭐⭐" },
    { id: 2, nama: "Budi Jagoan", ulasan: "Adminnya ramah, nanya-nanya spek dijawab detail. Recommended seller!", bintang: "⭐⭐⭐⭐⭐" },
    { id: 3, nama: "Siska Amelia", ulasan: "Akun sultan beneran, sesuai gambar. Gak nyesel beli di Rizall Storeee.", bintang: "⭐⭐⭐⭐⭐" },
    { id: 4, nama: "Rizky Ramadhan", ulasan: "Proses ganti data dibantu sampai selesai. Mantap bang Rizal!", bintang: "⭐⭐⭐⭐⭐" },
    { id: 5, nama: "Uknow", ulasan: "kak rizal ganteng. Mantap kak Rizal!", bintang: "⭐⭐⭐⭐⭐" }

  ];

  // LOGIKA FILTER PENCARIAN
  const filteredAkun = listAkun.filter((akun) =>
    akun.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // LOGIKA SCROLL (BACK TO TOP)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShowButton(true);
      else setShowButton(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      {/* NAVBAR */}
      <Navbar />
      
      {/* HERO SECTION */}
      <section id="home">
        <Hero />
      </section>

      {/* SECTION DAFTAR AKUN + SEARCH BAR */}
      <section id="services" className="services-section">
        <div className="container">
          <h2 className="section-title">Koleksi Akun Tersedia</h2>

          <div className="search-container">
            <input 
              type="text" 
              placeholder="Cari akun impianmu (contoh: Sultan)..." 
              className="search-input"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="grid-akun">
            {filteredAkun.length > 0 ? (
              filteredAkun.map((akun) => (
                <div key={akun.id} className="card-akun" onClick={() => setSelectedAkun(akun)}>
                  <div className={`badge-status ${akun.isReady ? 'ready' : 'sold'}`}>
                    {akun.isReady ? 'Ready Stock' : 'Sold Out'}
                  </div>
                  <img src={akun.fotoProfil} alt={akun.nama} className="img-akun" />
                  <div className="card-body">
                    <h3>{akun.nama}</h3>
                    <p className="fitur">{akun.fitur}</p>
                    <p className="harga">{akun.harga}</p>
                    <button className="btn-detail">Lihat Detail</button>
                  </div>
                </div>
              ))
            ) : (
              <p className="not-found">Akun yang kamu cari tidak ditemukan...</p>
            )}
          </div>
        </div>
      </section>

      {/* MODAL POPUP DETAIL */}
{selectedAkun && (
  <div className="modal-overlay" onClick={() => { setSelectedAkun(null); setActiveImageIndex(0); }}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-modal" onClick={() => { setSelectedAkun(null); setActiveImageIndex(0); }}>&times;</button>
      
      <div className="modal-body">
        {/* BAGIAN GALERI GAMBAR */}
        <div className="modal-galeri">
          <img 
  src={Array.isArray(selectedAkun.gambar) ? selectedAkun.gambar[activeImageIndex] : selectedAkun.gambar} 
  alt={selectedAkun.nama} 
  className="modal-img" 
/>
          
          {/* Menampilkan foto-foto kecil di bawahnya */}
          {Array.isArray(selectedAkun.gambar) && selectedAkun.gambar.length > 1 && (
            <div className="thumbnail-container">
              {selectedAkun.gambar.map((img, index) => (
                <img 
                  key={index} 
                  src={img} 
                  className={`thumb ${activeImageIndex === index ? 'active-thumb' : ''}`}
                  onClick={() => setActiveImageIndex(index)}
                />
              ))}
            </div>
          )}
        </div>

        <div className="modal-info">
          <h2>{selectedAkun.nama}</h2>
          <p className="modal-harga">{selectedAkun.harga}</p>
          <hr />
          <div className="modal-desc-text">
            <h4>Fitur Utama:</h4>
            <p>{selectedAkun.fitur}</p>
            <h4>Deskripsi Lengkap:</h4>
            <p>{selectedAkun.deskripsi}</p>
          </div>
          <a href={`https://wa.me/${nomorWA}`} target="_blank" rel="noopener noreferrer">
            <button className="btn-beli-modal">Lanjut ke WhatsApp</button>
          </a>
        </div>
      </div>
    </div>
  </div>
)}
                  

      {/* SECTION CARA ORDER */}
      <section id="order" className="order-section">
        <div className="container">
          <h2 className="section-title">Cara Order</h2>
          <div className="order-steps">
            <div className="step-card">
              <div className="step-number">1</div>
              <h4>Pilih Akun</h4>
              <p>Cari akun impianmu di daftar koleksi kami.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h4>Hubungi Admin</h4>
              <p>Klik tombol beli untuk langsung chat WhatsApp admin.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h4>Bayar & Terima</h4>
              <p>Lakukan pembayaran dan akun akan langsung dikirim.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION TESTIMONI */}
      <section id="testi" className="testi-section">
        <div className="container">
          <h2 className="section-title">Testimoni Pembeli</h2>
          <div className="grid-testi">
            {testimoni.map((item) => (
              <div key={item.id} className="card-testi">
                <p className="bintang">{item.bintang}</p>
                <p className="ulasan">"{item.ulasan}"</p>
                <h4 className="nama-pembeli">- {item.nama}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-info">
            <h3>RIZALL STOREEE</h3>
            <p>Jasa jual beli akun game terpercaya, aman, dan anti hackback. Transaksi kilat admin ramah.</p>
          </div>
          <div className="footer-pay">
            <h4>Metode Pembayaran</h4>
            <div className="pay-icons">
              <span className="badge-pay">DANA</span>
              <span className="badge-pay">GOPAY</span>
              <span className="badge-pay">QRIS</span>
              <span className="badge-pay">BANK</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Rizall Storeee. All Rights Reserved.</p>
        </div>
      </footer>

      {/* TOMBOL BACK TO TOP */}
      {showButton && (
        <button className="back-to-top" onClick={scrollToTop}>↑</button>
      )}

    </div> 
  );
}

export default App;