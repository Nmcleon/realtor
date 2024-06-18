import React, { useEffect, useState } from 'react';
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import Spinner from '../components/Spinner';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

export default function Slider() {
  const navigate = useNavigate();
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchListings() {
      const listingsRef = collection(db, 'listings');
      const q = query(listingsRef, orderBy('timestamp', 'desc'), limit(4));
      try {
        const querySnapshot = await getDocs(q);
        let listings = [];
        querySnapshot.forEach((doc) => {
          listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setListings(listings);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching listings:', error);
        setLoading(false); // Ensure loading state is properly managed on error
      }
    }
    fetchListings();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (!listings || listings.length === 0) {
    return <p>No listings available.</p>;
  }

  return (
    <>
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ type: 'progressbar' }}
        effect="fade"
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3000 }}
      >
        {listings.map(({ data, id }) => (
          <SwiperSlide key={id}>
            <div
              style={{
                background: `url(${data.imgUrls[0]}) center, no-repeat`,
                backgroundSize: 'cover',
              }}
              className="relative w-full h-[300px] overflow-hidden cursor-pointer"
              onClick={() => {
                console.log('Navigating to:', data.type, id);
                navigate(`/category/${data.type}/${id}`);
              }}
            ></div>
            <p className="text-[#f1faee] absolute left-1 top-3 font-medium max-w-[90%] bg-[#457b9d] shadow-lg opacity-90 p-2 rounded-br-3xl">
              {data.name}
            </p>
            <p className="text-[#f1faee] absolute left-1 bottom-1 font-semibold max-w-[90%] bg-[#e63946] shadow-lg opacity-90 p-2 rounded-tr-3xl">
              ${data.discountedPrice ?? data.regularPrice}
              {data.type === 'rent' && ' / month'}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
