import React, { useState, useEffect }  from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import logo from "../../images/logo.png";

const NavBarItem = ({ title, classprops }) => (
    <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
      const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);


    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <img src={logo} alt="logo" className="w-1/3 cursor-pointer"  />
            </div>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                <li className="bg-[#45c0c3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#f666b0]">
                    <Link to="/">Trang Chủ</Link>
                </li>
                <li className="bg-[#45c0c3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#f666b0]">
                    <Link to="/Homepage">Thông tin</Link>
                </li>
                <li className="bg-[#45c0c3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#f666b0]">
                    <Link to="/Cryptocurrencies">Danh Sách Coin</Link>
                </li>
                <li className="bg-[#45c0c3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#f666b0]">
                    <Link to="/News">Tin Tức</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;