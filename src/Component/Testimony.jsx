import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosStar } from "react-icons/io";

const Testimony = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const oursTestimony = [
    {
      name: "Sakura",
      testimony:
        "Pilihan barangnya sangat lengkap dan variatif, sehingga saya selalu bisa menemukan apa yang saya butuhkan dengan mudah. Mulai dari produk sehari-hari hingga barang yang spesifik, semuanya tersedia di satu tempat. Selain itu, variasi produknya memberikan banyak opsi bagi saya untuk memilih sesuai dengan selera dan kebutuhan. Benar-benar memudahkan dan membuat pengalaman belanja jadi lebih menyenangkan!",
    },
    {
      name: "Sompit",
      testimony:
        "Harganya benar-benar terjangkau dan sangat ramah di kantong! Saya merasa bisa mendapatkan produk berkualitas tinggi tanpa harus khawatir dengan anggaran. Dibandingkan tempat lain, harga di sini jauh lebih bersahabat, sehingga saya bisa berbelanja dengan lebih tenang dan puas. Sangat direkomendasikan untuk siapa pun yang ingin belanja hemat tanpa mengorbankan kualitas!",
    },
    {
      name: "Hariel Potter",
      testimony:
        "Pelayanannya benar-benar luar biasa dan sangat memuaskan! Dari awal hingga akhir, saya merasa dilayani dengan baik, ramah, dan profesional. Setiap pertanyaan saya dijawab dengan jelas, dan semua kebutuhan saya dipenuhi dengan cepat. Saya sangat terkesan dengan tingkat perhatian yang diberikan kepada pelanggan. Pengalaman ini membuat saya ingin kembali lagi!",
    },
    {
      name: "Nahfud ND",
      testimony:
        "Membership ini memberikan nilai tambah dalam belanja saya. Diskon setiap hari, layanan yang cepat, dan promo-promo menarik. Sangat cocok buat yang ingin hemat tanpa mengurangi kualitas barang yang dibeli!",
    },
    {
      name: "Mulyono Plat AD",
      testimony:
        "Setelah bergabung menjadi member, saya bisa menikmati potongan harga setiap kali berbelanja! Selain itu, saya sering mendapatkan informasi promo eksklusif lebih dulu dibandingkan yang lain. Rasanya sangat menguntungkan dan membuat saya semakin loyal.",
    },
  ];

  return (
    <div className="slider-container bg-green-800 text-center p-10  text-white">
      <h1 className="text-3xl font-extrabold">
        10000+ customer di seluruh dunia puas dengan layanan kami
      </h1>
      <Slider {...settings}>
        {oursTestimony.map((testimony, index) => (
          <div key={index} className="px-60 py-10">
            <p className="pt-10">{testimony.testimony}</p>
            <h3 className="font-bold mt-4">{testimony.name}</h3>
            <p className="text-sm">{testimony.rating}</p>
            <div className="flex justify-center pt-10">
              <IoIosStar className="text-2xl text-yellow-400" />
              <IoIosStar className="text-2xl text-yellow-400" />
              <IoIosStar className="text-2xl text-yellow-400" />
              <IoIosStar className="text-2xl text-yellow-400" />
              <IoIosStar className="text-2xl text-yellow-400" />
              <IoIosStar className="text-2xl text-yellow-400" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimony;
