"use client";

import { CircleUserRound, Clock, Mail, Phone } from "lucide-react";
import { useRouter } from "next/navigation";

const RightBar = () => {
    const router = useRouter();

    return ( 
        <div className="p-8 flex flex-col gap-4 w-full">
          <div className="h-1/3 p-5 w-full gap-4 bg-gray-400 text-white uppercase flex flex-row">
            <div className="my-auto">
              <CircleUserRound size={30} className="text-white"/>
            </div>
            <div className="flex flex-col w-full gap-2">
              <div className="w-full font-bold">
                need 24/7 support
              </div>
              <div 
                  className="w-full bg-blue-500 rounded-lg text-center p-2 cursor-pointer hover:bg-blue-500/80"
                  onClick={() => router.push('/Contact')}
              >
                contact us
              </div>
            </div>
          </div>
          <div className="h-2/3 p-5 w-full gap-4 bg-gray-200 text-white flex flex-col">
            <div className="flex flex-row gap-4">
              <div>
                <Phone size={30} className="text-blue-400"/>
              </div>
              <div>
                <span className="uppercase text-black font-bold font-sans">call sales now</span>
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div>
                <Clock size={30} className="text-blue-400"/>
              </div>
              <div className="flex flex-col gap-1">
                <span className="uppercase text-black font-bold font-sans">sales hours</span>
                <span className="text-xs text-zinc-400 font-bold font-sans">7am - 7pm CST</span>
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div>
                <Mail size={30} className="text-blue-400"/>
              </div>
              <div className="flex flex-col gap-1">
                <span className="uppercase text-black font-bold font-sans">mailing address</span>
                <span className="text-xs text-zinc-400 font-bold font-sans">verceldeploy@outlook.com</span>
              </div>
            </div>
          </div>
        </div>
     );
}
 
export default RightBar;