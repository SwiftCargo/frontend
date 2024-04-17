"use client";

import InformationCard from "@/components/views/Home/InformationCard";
import Chart from "@/components/views/Home/Chart";

import { RiTruckLine, RiPinDistanceLine, RiMoneyEuroCircleLine } from '@remixicon/react';
import Image from "next/image";
import HomeCarousel from "@/components/views/Home/Carousel";
export default function Home() {
  const DistanceData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: '#620314',
        tension: 0.4
      },
    ]
  };
  const JobsData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        data: [4, 2, 7, 3, 8, 1, 2],
        fill: false,
        borderColor: '#620314',
        tension: 0.4
      },
    ]
  };
  const ProfitData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        data: [20.000, 10.000, 1.000, 4.000, 36.000, 12.000, 45.000],
        fill: false,
        borderColor: '#620314',
        tension: 0.4
      },
    ]
  };
  return (
    <div className="flex flex-col gap-4 justify-between md:py-6 md:pr-6 w-full">
      <div className="flex flex-row gap-2 ">
        <div className="flex flex-col md:flex-row gap-2 w-full">
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-3xl font-bold">Hello<span className="font-thin">, pikushe 👋🏻</span></h1>
            </div>
            <div className="flex flex-row gap-1.5 justify-between w-full">
              <InformationCard>
                <div className="p-4 bg-[#3a3b64] rounded-full">
                  <RiTruckLine size={35} color="#7367f0" />
                </div>
                <div className="flex flex-col text-center gap-1 w-full">
                  <h1 className="text-xl md:text-4xl">9</h1>
                  <h4 className="text-xs md:text-sm">Total Jobs</h4>
                </div>
              </InformationCard>
              <InformationCard>
                <div className="p-4 bg-[#64633a] rounded-full">
                  <RiPinDistanceLine size={35} color="#ebf55a" />
                </div>
                <div className="flex flex-col text-center gap-1 w-full">
                  <h1 className="text-xl md:text-4xl">3,554<span className="text-xl">Km</span></h1>
                  <h4 className="text-xs md:text-sm">Total Distance</h4>
                </div>
              </InformationCard>
              <InformationCard>
                <div className="p-4 bg-[#3b643a] rounded-full">
                  <RiMoneyEuroCircleLine size={35} color="#2ac926" />
                </div>
                <div className="flex flex-col text-center gap-1 w-full">
                  <h1 className="text-xl md:text-4xl">250,310<span className="text-xl">€</span></h1>
                  <h4 className="text-xs md:text-sm">Total Profit</h4>
                </div>
              </InformationCard>
            </div>
          </div>
          <div className="flex items-start md:items-end w-full md:w-1/2 ">
            <div className="flex flex-col gap-4 bg-surface-700 p-4 rounded-lg w-full justify-center">
              <h1 className="text-center">Progress</h1>
              <div className="flex flex-col gap-2">
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div className="bg-primary-400 h-2.5 rounded-full " style={{ width: '15%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>



      <div className="flex flex-col gap-2 sm:flex-row h-fit w-full md:justify-between">
        <div className="flex flex-col gap-4 w-full md:w-1/2 h-full bg-surface-700 p-4 rounded-lg items-center">
          <h4>Your weekly Jobs</h4>
          <Chart data={JobsData} />
        </div>
        <div className="flex flex-col gap-4 w-full md:w-1/2 h-full bg-surface-700 p-4 rounded-lg items-center">
          <h4>Your weekly distance</h4>
          <Chart data={DistanceData} />
        </div>
        <div className="flex flex-col gap-4 w-full md:w-1/2 h-full bg-surface-700 p-4 rounded-lg items-center">
          <h4>Your weekly profit</h4>
          <Chart data={ProfitData} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-2 w-full">
        <div className="flex flex-col gap-2 bg-surface-700 w-full h-full rounded-lg p-4">
          <h1 className="">Latest Jobs</h1>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-400">
              <thead className="text-xs text-gray-400 uppercase bg-surface-600 ">
                <tr>
                  <th scope="col" className="px-6 py-3">ID</th>
                  <th scope="col" className="px-6 py-3">Cargo</th>
                  <th scope="col" className="px-6 py-3">Date</th>
                  <th scope="col" className="px-6 py-3">Source</th>
                  <th scope="col" className="px-6 py-3">Price</th>
                  <th scope="col" className="px-6 py-3"><span className="sr-only">View</span></th>
                </tr>
              </thead>
              <tbody>
                <tr className=" border-b bg-surface-700 border-gray-700 hover:bg-surface-600">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
                    42123
                  </th>
                  <td className="px-6 py-4">
                    Car
                  </td>
                  <td className="px-6 py-4">
                    10/04/2024
                  </td>
                  <td className="px-6 py-4">
                    Calais
                  </td>
                  <td className="px-6 py-4">
                    €2999
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-primary-500 hover:underline">View</a>
                  </td>
                </tr>
                <tr className=" border-b bg-surface-700 border-gray-700 hover:bg-surface-600">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
                    42034
                  </th>
                  <td className="px-6 py-4">
                    Oil
                  </td>
                  <td className="px-6 py-4">
                    15/03/2024
                  </td>
                  <td className="px-6 py-4">
                    Calais
                  </td>
                  <td className="px-6 py-4">
                    €2999
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-primary-500 hover:underline">View</a>
                  </td>
                </tr>
                <tr className=" border-b border-gray-700 bg-surface-700 hover:bg-surface-600">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
                    41500
                  </th>
                  <td className="px-6 py-4">
                    Oil
                  </td>
                  <td className="px-6 py-4">
                    15/03/2024
                  </td>
                  <td className="px-6 py-4">
                    Calais
                  </td>
                  <td className="px-6 py-4">
                    €2999
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-primary-500 hover:underline">View</a>
                  </td>
                </tr>
                <tr className=" border-b border-gray-700 bg-surface-700 hover:bg-surface-600">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
                    41494
                  </th>
                  <td className="px-6 py-4">
                    Oil
                  </td>
                  <td className="px-6 py-4">
                    14/03/2024
                  </td>
                  <td className="px-6 py-4">
                    Calais
                  </td>
                  <td className="px-6 py-4">
                    €2999
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-primary-500 hover:underline">View</a>
                  </td>
                </tr>
                <tr className=" bg-surface-700 hover:bg-surface-600">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
                    41450
                  </th>
                  <td className="px-6 py-4">
                    Train
                  </td>
                  <td className="px-6 py-4">
                    12/03/2024
                  </td>
                  <td className="px-6 py-4">
                    Calais
                  </td>
                  <td className="px-6 py-4">
                    €2999
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-primary-500 hover:underline">View</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full md:w-1/2 h-full">
          <HomeCarousel />
        </div>
      </div>

    </div>
  );
}