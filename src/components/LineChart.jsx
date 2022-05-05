
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import millify from 'millify';

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory.data.history[i].price);
    coinTimestamp.push((coinHistory.data.history[i].timestamp*1000));
  }
  console.log(coinPrice);
  console.log(coinTimestamp);


  const data1 = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd'
      }
    ]
  }

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Thông Tin </Title>
        <Col className="price-container">
          <p  className="text-white">biến động 24h: {coinHistory?.data?.change}%</p>
          <p  className="text-white"> {coinName} giá: {millify(currentPrice,{precision: 3})} $</p>
        </Col>
      </Row>
    </>
  );
};

export default LineChart;