import { Link,  useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Shared/Home/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const { signInUser } = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');

        signInUser(email, password)
            .then(response => {
                console.log(response.user)

                navigate(location.state ? location.state : '/')
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="bg-[#f2f2f2] max-w-6xl mx-auto custom-class">
            <div className="pt-1">
                <Navbar></Navbar>
            </div>
            <div className="py-32">
                <div className="w-1/2 mx-auto p-16 bg-white">
                    <h2 className="text-[#403F3F] font-semibold text-4xl text-center">Log in your account</h2>
                    <hr className="my-12 max-w-lg mx-auto" />
                    <form onSubmit={handleLogin} className="space-y-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#403F3F] font-semibold text-xl mb-3">Email Address</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered rounded" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#403F3F] font-semibold text-xl mb-3">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter your password" className="input input-bordered  rounded" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="bg-[#403F3F] text-white font-semibold text-lg py-4 rounded">Login</button>
                        </div>
                    </form>
                    <p className="text-center font-semibold text-[#706F6F] mt-7">Don’t Have An Account ? <Link className="text-[#F75B5F]" to='/register'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;