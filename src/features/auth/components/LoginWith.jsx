import { FaGithub, FaGoogle } from "react-icons/fa";

function LoginWith() {
  return (
    <>
      <h2 className="font-semibold text-primary text-xl leading-7">
        Login With
      </h2>
      <section className="grid grid-cols-1 gap-3 mt-4">
        <button className="py-2 border flex gap-2 justify-center items-center rounded text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"><FaGoogle />Login with Google</button>
        <button className="py-2 border flex gap-2 justify-center items-center rounded text-primary border-black hover:bg-black hover:text-white"><FaGithub />Login with Github</button>
      </section>
    </>
  );
}

export default LoginWith;
