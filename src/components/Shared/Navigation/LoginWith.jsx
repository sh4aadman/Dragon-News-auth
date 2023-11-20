import { FaGithub, FaGoogle } from "react-icons/fa"

const LoginWith = () => {
    return (
        <div>
            <h2 className="text-[#403F3F] font-semibold text-xl">Login With</h2>
            <div className="flex flex-col gap-3 mt-4">
                <button className="border flex gap-2 justify-center items-center rounded text-blue-500 border-blue-500"><FaGoogle></FaGoogle> Login with Google</button>
                <button className="border flex gap-2 justify-center items-center rounded border-black"><FaGithub></FaGithub> Login with Github</button>
            </div>
        </div>
    );
};

export default LoginWith;