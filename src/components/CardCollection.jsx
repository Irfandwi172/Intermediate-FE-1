import img1 from "../assets/images.jpg";
import img2 from "../assets/images 2.jpg";
import img3 from "../assets/images 3.jpg";
import img4 from "../assets/images 4.jpg";
import img5 from "../assets/images 5.jpg";
import img6 from "../assets/images 6.jpg";
import img7 from "../assets/image7.jpg";
import img8 from "../assets/image8.jpg";
import img9 from "../assets/image9.jpg";
import orang1 from "../assets/orang.png";
import orang2 from "../assets/orang1.png";
import orang3 from "../assets/orang2.png";
import orang4 from "../assets/orang3.png";
import orang5 from "../assets/orang4.png";
import orang6 from "../assets/orang5.png";
import orang7 from "../assets/orang6.png";
import orang8 from "../assets/orang7.png";
import orang9 from "../assets/orang8.png";
import "../style/CardCollection.css";

const courses = [
  {
    id: 1,
    image: img1,
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    instructorImg: orang1,
    instructorName: "Jenna Ortega",
    instructorJob: "Gojek",
    rating: 3.5,
    reviewCount: 86,
    price: "Rp 300K",
  },
  {
    id: 2,
    image: img2,
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    instructorImg: orang2,
    instructorName: "Jenna Ortega",
    instructorJob: "Gojek",
    rating: 3.5,
    reviewCount: 86,
    price: "Rp 300K",
  },
  {
    id: 3,
    image: img3,
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    instructorImg: orang3,
    instructorName: "Jenna Ortega",
    instructorJob: "Gojek",
    rating: 3.5,
    reviewCount: 86,
    price: "Rp 300K",
  },
  {
    id: 4,
    image: img4,
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    instructorImg: orang4,
    instructorName: "Jenna Ortega",
    instructorJob: "Gojek",
    rating: 3.5,
    reviewCount: 86,
    price: "Rp 300K",
  },
  {
    id: 5,
    image: img5,
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    instructorImg: orang5,
    instructorName: "Jenna Ortega",
    instructorJob: "Gojek",
    rating: 3.5,
    reviewCount: 86,
    price: "Rp 300K",
  },
  {
    id: 6,
    image: img6,
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    instructorImg: orang6,
    instructorName: "Jenna Ortega",
    instructorJob: "Gojek",
    rating: 3.5,
    reviewCount: 86,
    price: "Rp 300K",
  },
  {
    id: 7,
    image: img7,
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    instructorImg: orang7,
    instructorName: "Jenna Ortega",
    instructorJob: "Gojek",
    rating: 3.5,
    reviewCount: 86,
    price: "Rp 300K",
  },
  {
    id: 8,
    image: img8,
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    instructorImg: orang8,
    instructorName: "Jenna Ortega",
    instructorJob: "Gojek",
    rating: 3.5,
    reviewCount: 86,
    price: "Rp 300K",
  },
  {
    id: 9,
    image: img9,
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    instructorImg: orang9,
    instructorName: "Jenna Ortega",
    instructorJob: "Gojek",
    rating: 3.5,
    reviewCount: 86,
    price: "Rp 300K",
  },
];

const CourseCard = ({
  image,
  title,
  description,
  instructorImg,
  instructorName,
  instructorJob,
  price,
}) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt={title} />
      </div>
      <div className="card-body">
        <h5>{title}</h5>
        <p>{description}</p>
        <div className="card-footer">
          <div className="instructor">
            <div className="instructor-avatar">
              <img src={instructorImg} alt={instructorName} />
            </div>
            <div className="instructor-info">
              <h6>{instructorName}</h6>
              <p>
                Senior Accountant di <b>{instructorJob}</b>
              </p>
            </div>
          </div>
          <div className="rate-price">
            <div className="rating">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="rating-count">
                <u>3.5 (86)</u>
              </span>
            </div>
            <h3 className="price">{price}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardCollection = () => {
  return (
    <div className="card-grid">
      {courses.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  );
};

export default CardCollection;
