import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';

import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../services/cryptoApi';
import Loader from './Loader';
import LineChart from './LineChart';

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timeperiod, setTimeperiod] = useState('7d');
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId, timeperiod });
  const cryptoDetails = data?.data?.coin;

  if (isFetching) return <Loader />;

  

  const stats = [
    { title: 'giá tiền USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Hạng', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    { title: 'khối lượng giao dịch 24h', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`, icon: <ThunderboltOutlined /> },
    { title: 'vốn hóa thị trường', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'Giá cao nhất từng đạt', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Số lượng thị trường', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'số lượng trao đổi', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Tổng cung', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Nguồn cung luân chuyển', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];

  return (
    <Col className="coin-detail-container">
      <Col className="coin-heading-container">
        <h1  className="text-white text-3xl sm:text-5xl py-2 text-gradient font-semibold bg-gradient-to-r from-[#45c0c3] to-[#f666b0] ">
          {data?.data?.coin.name} ({data?.data?.coin.symbol})
        </h1>
        <p className="text-white">{cryptoDetails.name} xem thống kê giá trị, vốn hóa thị trường và nguồn cung</p>
      </Col>

      <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails.price)} coinName={cryptoDetails.name} />
      <Col className="stats-container">
        <Col className="coin-value-statistics">
          <Col className="coin-value-statistics-heading">
            <Title level={3} className="coin-details-heading">Thống kê giá trị {cryptoDetails.name}</Title>
            <p className="text-white">Tổng quan số liệu thống kê của {cryptoDetails.name} chẳng hạn như tiền tệ cơ sở và định giá, xếp hạng và khối lượng giao dịch.</p>
          </Col>
          {stats.map(({ icon, title, value }) => (
            <Col className="coin-stats">
              <Col className="coin-stats-name">
                <p className="text-white">{icon}</p>
                <p className="text-white">{title}</p>
              </Col>
              <p className="text-white">{value}</p>
            </Col>
          ))}
        </Col>
        <Col className="other-stats-info">
          <Col className="coin-value-statistics-heading">
            <Title level={3} className="coin-details-heading">Thông tin thống kê khác</Title>
            <p className="text-white">Tổng quan số liệu thống kê của {cryptoDetails.name} chẳng hạn như tiền tệ cơ sở và định giá, xếp hạng và khối lượng giao dịch.</p>
          </Col>
          {genericStats.map(({ icon, title, value }) => (
            <Col className="coin-stats">
              <Col className="coin-stats-name">
                <p className="text-white">{icon}</p>
                <p className="text-white">{title}</p>
              </Col>
              <p className="text-white">{value}</p>
            </Col>
          ))}
        </Col>
      </Col>
      <Col className="coin-desc-link">
        <Row className="coin-desc">
          <Title level={3} className="coin-details-heading">Tìm hiểu về {cryptoDetails.name}:</Title>
          <p className="text-white">{HTMLReactParser(cryptoDetails.description)}</p>
        </Row>
        <Col className="coin-links">
          <Title level={3} className="coin-details-heading">{cryptoDetails.name} Links</Title>
          <p className="text-white">{cryptoDetails.links?.map((link) => (
            <Row className="coin-link" key={link.name}>
              <p className="text-white">{link.type}</p>
              <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
            </Row>
          ))}
          </p>
        </Col>
      </Col>
    </Col>
  );
};

export default CryptoDetails;