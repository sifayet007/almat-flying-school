import { IconStar } from '@tabler/icons-react';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
interface IStudent {
    image: StaticImageData,
    name: string,
    rating: number
    review: string

}

const StudentCard = ({ student }: { student: IStudent }) => {
    return (
        <div
            className="lg:max-w-[390px] flex items-center gap-2.5 bg-white shadow-md rounded-xl p-[10px] border border-transparent hover:border-blue-400 hover:shadow-blue-200 transition"
        >
            <div className="w-[110px] h-[110px] relative">
                <Image
                    src={student.image}
                    alt={student.name}
                    fill
                    className="object-cover rounded-[20px]"
                />
            </div>
            <div className="max-w-[240px]">
                <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-[18px]">{student.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                        <IconStar className="text-red-500 mr-1" size={16} />
                        {student.rating}
                        <FcGoogle size={16} />
                    </div>
                </div>
                <p className="text-gray-600 text-[12px] mt-2">{student.review}</p>
            </div>
        </div>
    );
};

export default StudentCard;