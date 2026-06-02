import "../style/Footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="logo">
            <img src={logo} alt="Logo" />
            <span className="logo-video">
              <b>Video</b>
            </span>
            <span className="logo-belajar">
              <b>Belajar</b>
            </span>
          </div>
          <p className="footer-tagline">
            Gali Potensi Anda Melalui Pembelajaran Video di VideoBelajar!
          </p>
          <p className="footer-address">
            Jl. Raya Kamboja Desa Kragan, Kecamatan Gedangan, Kabupaten Sidoarjo
          </p>
          <p className="footer-phone">+62-821-3133-4965</p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h6>Kategori</h6>
            <a href="#">Digital &amp; Teknologi</a>
            <a href="#">Pemasaran</a>
            <a href="#">Pengembangan Bisnis</a>
            <a href="#">Desain</a>
          </div>
          <div className="footer-col">
            <h6>Perusahaan</h6>
            <a href="#">Tentang Kami</a>
            <a href="#">Menjadi Instruktur</a>
            <a href="#">Kebijakan Privasi</a>
            <a href="#">Karier Lowongan</a>
          </div>
          <div className="footer-col">
            <h6>Komunitas</h6>
            <a href="#">Toki Tokowi</a>
            <a href="#">Blog</a>
          </div>
        </div>
      </div>

      {/* Copyright & Social Media */}
      <div className="copyright">
        <p>@2026 Irfan Dwi Arfianto All Rights Reserved.</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/irfan-dwi-arfianto-617955353/"
            className="social-icon"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fa fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/irfdw_172/"
            className="social-icon"
          >
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fa fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
