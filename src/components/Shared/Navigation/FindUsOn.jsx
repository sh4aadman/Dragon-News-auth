import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUsOn = () => {
    return (
        <div className="mt-9">
            <h2 className="text-[#403F3F] text-xl font-semibold">Find Us On</h2>
            <div className="mt-5">
                <div className="flex gap-2 items-center p-4 border rounded-t-lg">
                    <FaFacebook />
                    <Link className="text-[#706F6F]" to=''>Facebook</Link>
                </div>
                <div className="flex gap-2 items-center p-4 border-x">
                    <FaTwitter />
                    <Link className="text-[#706F6F]" to=''>Twitter</Link>
                </div>
                <div className="flex gap-2 items-center p-4 border rounded-b-lg">
                    <FaInstagram></FaInstagram>
                    <Link className="text-[#706F6F]" to=''>Instagram</Link>
                </div>
            </div>
        </div>
    );
};

export default FindUsOn;