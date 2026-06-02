import { NavLink } from "react-router";
import CardCollection from "../components/CardCollection";
import heroBg from "../assets/Belajar-Online.jpg";
import "../style/Home.css";
import Footer from "../components/Footer";
const HomePage = () => {
  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>
            Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
            Interaktif!
          </h1>
          <p>
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
            pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
            berpartisipasi dalam latihan interaktif yang akan meningkatkan
            pemahaman Anda.
          </p>
          <NavLink href="" className="btn-hero">
            Temukan Video Course untuk Dipelajari!
          </NavLink>
        </div>
      </section>
      <section className="collect">
        <h3>Koleksi Video Pembelajaran Unggulan</h3>
        <p className="collect-sub">
          Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
        </p>
        <nav className="filter-nav">
          <a href="" className="active">
            Semua Kelas
          </a>
          <a href="">Pemasaran</a>
          <a href="">Desain</a>
          <a href="">Pengembangan Diri</a>
          <a href="">Bisnis</a>
        </nav>
      </section>
      <CardCollection />
      <section
        className="newsletter"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="newsletter-inner">
          <p className="nl-label">NEWSLETTER</p>
          <h3>Mau Belajar Lebih Banyak?</h3>
          <p className="nl-desc">
            Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
            spesial dari program-program terbaik hariesok.id
          </p>
          <div className="nl-form">
            <input type="email" placeholder="Masukkan email kamu..." />
            <button type="button">Subscribe</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
