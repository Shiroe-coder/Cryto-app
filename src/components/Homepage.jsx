import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from './Loader';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
 
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <>
      <div  className="flex flex-1 justify-start items-start flex-col mf:mr-10">
        <h1 className="text-3xl sm:text-5xl text-white text-gradient font-semibold bg-gradient-to-r from-[#45c0c3] to-[#f666b0] py-1">
          
        </h1>
      </div>
      <div className="home-heading-container">
        <h2 className="text-3xl sm:text-3xl text-white text-gradient font-semibold bg-gradient-to-r from-[#45c0c3] to-[#f666b0] py-1">
          Top 10 đồng Coin 
        </h2>
        <Title level={3} className="text-white "><Link to="/cryptocurrencies">xem thêm</Link></Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <h2 className="text-3xl sm:text-3xl text-white text-gradient font-semibold bg-gradient-to-r from-[#45c0c3] to-[#f666b0] py-1">
          Tin tức mới nhất
        </h2>
        <Title level={3} className="text-white "><Link to="/news">xem thêm</Link></Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;