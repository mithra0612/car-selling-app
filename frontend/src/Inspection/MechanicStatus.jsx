import React from "react";
import { User, Clock, X, Mail, Phone, Info } from "lucide-react";

export default function StatusMechanic({onDisplay}) {
  const Data = {
    Name: "Mechanic",
    Email: "Mechanic@gmail.com",
    Phone: 987654321,
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative w-[840px] bg-white shadow-lg h-[430px] rounded-xl">
        <X onClick={onDisplay} className="absolute top-3 right-3 cursor-pointer w-8 h-8" />
        <div className="flex flex-col gap-5 p-12">
          <div className="flex items-center gap-5 justify-between">
            <div className="flex gap-4 items-center text-xl">
              <User
                className="w-12 h-12 rounded-full p-2 bg-gray-200"
              />
              <p className="font-semibold">{Data.Name}</p>
            </div>
            <div className="flex gap-4 text-xl items-center">
              <p className="font-semibold">Inspection Status</p>
              <Clock className="w-6 h-6 text-yellow-500" />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-medium ml-3 text-xl flex items-center gap-3">
              <Info className="w-6 h-6" /> Details
            </p>
            <p className="ml-12 text-lg flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <span className="font-medium">Email:</span> {Data.Email}
            </p>
            <p className="ml-12 text-lg flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <span className="font-medium">Phone No: </span>
              {Data.Phone}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-medium ml-3 text-xl flex items-center gap-3">
              <Info className="w-6 h-6" /> Details From Car Inspection
            </p>
            <p className="ml-12 text-lg leading-10">
              The mechanic has been sent for inspection, and we kindly ask for
              your patience for two days while the evaluation is completed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
