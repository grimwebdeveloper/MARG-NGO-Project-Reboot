import React from 'react'
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { TiDocumentText } from "react-icons/ti";
import Link from 'next/link';

const GenericCard = () => {
  return (
    <div className="bg-white">
          <div className="p-2 mb-4">
            <img src="https://www.nanhikali.org/wp-content/uploads/2024/10/new-story-nk.jpg" alt="" />
            <div className="px-5 pt-5 text-left leading-6">
              <h3 className="font-semibold">Uniting for Change: How Four Women Are Transforming Lives Through Football</h3>
              <p className="text-sm text-[#7c7b79]">In the heart of Gujarat, four remarkable women from diverse backgrounds came together, united by a shared vision—to redefine their lives and the futures of the young girls […]</p>
            </div>
          </div>
          <div className="flex justify-between bg-[#fafafa] px-7 py-2 text-[#7c7b79] text-[16px]">
            <span className=" flex items-center gap-2">
              <AiFillHeart className="text-[18px] text-red-600"/>
              <span>14</span>
            </span>
            <span className="flex items-center gap-2 border-l border-[#7c7b79] pl-2">
              <Link href={"#"} className="flex items-center gap-2 p-2">
                <TiDocumentText />
                Read more
              </Link>
            </span>
            
          </div>
        </div>
  )
}

export default GenericCard