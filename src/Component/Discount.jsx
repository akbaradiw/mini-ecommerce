import React from "react";
import human from "../assets/caricaricari.jpg";
import { Link } from "react-router-dom";
import { CiDiscount1 } from "react-icons/ci";

const Discount = () => {
  return (
    <div className="grid grid-cols-2 ">
      <div className="bg-green-800 text-white p-10 py-40">
        <div className="flex justify-end">
          <CiDiscount1 className="text-5xl  pb-4" />
          <h1 className="text-4xl pb-4   font-extrabold">Get Discount</h1>
          <CiDiscount1 className="text-5xl pb-4" />
        </div>

        <p className="pb-4">
          Bergabunglah sekarang sebagai anggota membership kami dan rasakan
          manfaatnya setiap hari! Dengan menjadi member, Anda akan mendapatkan
          potongan harga eksklusif yang tersedia setiap hari, akses ke penawaran
          khusus yang tidak tersedia bagi pelanggan biasa, serta berbagai
          keuntungan menarik lainnya. Nikmati pengalaman berbelanja yang lebih
          hemat dan penuh keuntungan dengan berbagai promo yang dirancang khusus
          untuk para member. Jangan lewatkan kesempatan ini, daftarkan diri Anda
          sekarang dan jadilah bagian dari komunitas eksklusif kami yang selalu
          mendapatkan nilai lebih di setiap pembelian!
        </p>
        <div className="pt-6">
          <Link
            to="/"
            className="text-white font-semibold border-8 border-double border-white bg-green-800 hover:bg-white shadow-md hover:text-green-800 px-3 py-2 rounded-md text-sm sm:text-base md:text-lg"
          >
            Join Membership
          </Link>
        </div>
      </div>
      <div>
        <img src={human} alt="woman" width="100%" />
      </div>
    </div>
  );
};

export default Discount;
