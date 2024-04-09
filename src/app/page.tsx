"use client";

import Card from "@/components/views/Home/Card";
import Chart from "@/components/views/Home/Chart";
import { RiTruckLine, RiPinDistanceLine, RiMoneyEuroCircleLine } from '@remixicon/react';
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
    <div className="flex flex-col gap-8 md:py-6 md:pr-6 w-full">
      <div>
        <h1 className="text-3xl font-bold">Hello<span className="font-thin">, pikushe 👋🏻</span></h1>
      </div>
      <div className="flex flex-row gap-1 md:gap-4 w-full md:w-3/4">
        <Card>
          <div className="p-4 bg-[#3a3b64] rounded-full">
            <RiTruckLine size={35} color="#7367f0" />
          </div>
          <div className="flex flex-col text-center gap-1 w-full">
            <h1 className="text-xl md:text-4xl">9</h1>
            <h4 className="text-xs md:text-sm">Total Jobs</h4>
          </div>
        </Card>
        <Card>
          <div className="p-4 bg-[#64633a] rounded-full">
            <RiPinDistanceLine size={35} color="#ebf55a" />
          </div>
          <div className="flex flex-col text-center gap-1 w-full">
            <h1 className="text-xl md:text-4xl">3,554<span className="text-xl">Km</span></h1>
            <h4 className="text-xs md:text-sm">Total Distance</h4>
          </div>
        </Card>
        <Card>
          <div className="p-4 bg-[#3b643a] rounded-full">
            <RiMoneyEuroCircleLine size={35} color="#2ac926" />
          </div>
          <div className="flex flex-col text-center gap-1 w-full">
            <h1 className="text-xl md:text-4xl">250,310<span className="text-xl">€</span></h1>
            <h4 className="text-xs md:text-sm">Total Profit</h4>
          </div>
        </Card>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row h-fit w-full md:justify-between">
        <div className="flex flex-col gap-4 w-full md:w-[540px] h-full bg-surface-700 p-4 rounded-lg items-center">
          <h4>Your weekly Jobs</h4>
          <Chart data={JobsData} />
        </div>
        <div className="flex flex-col gap-4 w-full md:w-[540px] h-full bg-surface-700 p-4 rounded-lg items-center">
          <h4>Your weekly distance</h4>
          <Chart data={DistanceData} />
        </div>
        <div className="flex flex-col gap-4 w-full md:w-[540px] h-full bg-surface-700 p-4 rounded-lg items-center">
          <h4>Your weekly profit</h4>
          <Chart data={ProfitData} />
        </div>
      </div>

      <div>
        
      </div>
    </div>
  );
}