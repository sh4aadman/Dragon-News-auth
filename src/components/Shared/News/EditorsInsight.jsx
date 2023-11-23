import editorsInsight1 from '../../../assets/editorsInsight1.png'
import editorsInsight2 from '../../../assets/editorsInsight2.png'
import editorsInsight3 from '../../../assets/editorsInsight3.png'
import { SlCalender } from "react-icons/sl";


const EditorsInsight = () => {
    return (
        <div className="mt-7">
            <h2 className="text-2xl font-semibold">Editors insight</h2>
            <div className="grid grid-cols-3 gap-6 mt-5">
                <div>
                    <img className="bg-[#D9D9D9] w-full" src={editorsInsight1} alt="news-image" />
                    <h4 className="text-[#403F3F] text-xl font-semibold mt-5">21 The Most Stylish Wedding Guest Dresses For Spring</h4>
                    <div className='text-[#9F9F9F] font-medium flex gap-2 items-center mt-5'>
                        <SlCalender></SlCalender>
                        <p>Jan 4, 2022</p>
                    </div>
                </div>
                <div>
                    <img className="bg-[#D9D9D9] w-full" src={editorsInsight2} alt="news-image" />
                    <h4 className="text-[#403F3F] text-xl font-semibold mt-5">21 The Most Stylish Wedding Guest Dresses For Spring</h4>
                    <div className='text-[#9F9F9F] font-medium flex gap-2 items-center mt-5'>
                        <SlCalender></SlCalender>
                        <p>Jan 4, 2022</p>
                    </div>
                </div>
                <div>
                    <img className="bg-[#D9D9D9] w-full" src={editorsInsight3} alt="news-image" />
                    <h4 className="text-[#403F3F] text-xl font-semibold mt-5">21 The Most Stylish Wedding Guest Dresses For Spring</h4>
                    <div className='text-[#9F9F9F] font-medium flex gap-2 items-center mt-5'>
                        <SlCalender></SlCalender>
                        <p>Jan 4, 2022</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditorsInsight;