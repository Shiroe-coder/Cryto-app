import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(e) => handleChange(e, name)}
        className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
);

const Welcome = () => {
    const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message } = formData;

        e.preventDefault();

        if (!addressTo || !amount || !keyword || !message) return;

        sendTransaction();
    };

    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-white text-gradient font-semibold bg-gradient-to-r from-[#45c0c3] to-[#f666b0] py-1">
                         ETHEREUM
                    </h1>
                    <p className="text-left font-semibold mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                        
                    </p>
                    <p className="text-left  text-xl  mt-5 text-white font-light md:w-12/12 w-11/12 text-base">
                       Chuyển Tiền Bằng Trang chúng tôi <br/> để nhận món quà bất ngờ
                    </p>
                    {!currentAccount && (
                        <button
                            type="button"
                            onClick={connectWallet}
                            className="flex flex-row justify-center items-center my-5 bg-[#45c0c3] hover:bg-[#f666b0] p-3 rounded-full cursor-pointer "
                        >
                            <AiFillPlayCircle className="text-white mr-2" />
                            <p className=" text-white text-base font-semibold">
                                Kết nối ví Metamask
                            </p>
                        </button>
                    )}

                    <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
                        <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
                            Uy Tín
                        </div>
                        <div className={companyCommonStyles}>An Toàn</div>
                        <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
                            Giá Rẻ
                        </div>
                        <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
                            Web 3.0
                        </div>
                        <div className={companyCommonStyles}>Ethereum</div>
                        <div className={`rounded-br-2xl ${companyCommonStyles}`}>
                            Blockchain
                        </div>
                    </div>
                </div>

                <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
                    <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
                        <div className="flex justify-between flex-col w-full h-full">
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                                    <SiEthereum fontSize={21} color="#fff" />
                                </div>
                                <BsInfoCircle fontSize={17} color="#fff" />
                            </div>
                            <div>
                                <p className="text-white font-light text-sm">
                                    {shortenAddress(currentAccount)}
                                </p>
                                <p className="text-white font-semibold text-lg mt-1">
                                    Ethereum
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                        <Input placeholder="Ví nhận" name="addressTo" type="text" handleChange={handleChange} />
                        <Input placeholder="Số Tiền (ETH)" name="amount" type="number" handleChange={handleChange} />
                        <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
                        <Input placeholder="Lời nhắn" name="message" type="text" handleChange={handleChange} />

                        <div className="h-[1px] w-full bg-gray-400 my-2" />

                        {isLoading
                            ? <Loader />
                            : (
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                                >
                                    Gửi
                                </button>
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;