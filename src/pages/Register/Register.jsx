import Navbar from "../../components/Shared/Home/Navbar";

const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        console.log(form.get('name'))
    }

    return (
        <div className="bg-[#f2f2f2] max-w-6xl mx-auto custom-class">
            <div className="pt-1">
                <Navbar></Navbar>
            </div>
            <div className="py-32">
                <div className="w-1/2 mx-auto p-16 bg-white">
                    <h2 className="text-[#403F3F] font-semibold text-4xl text-center">Register your account</h2>
                    <hr className="my-12 max-w-lg mx-auto" />
                    <form onSubmit={handleRegister} className="space-y-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#403F3F] font-semibold text-xl mb-3">Your Name</span>
                            </label>
                            <input type="name" name="name" placeholder="Enter your name" className="input input-bordered rounded" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#403F3F] font-semibold text-xl mb-3">Photo URL</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="Enter your photo URL" className="input input-bordered rounded" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#403F3F] font-semibold text-xl mb-3">Email</span>
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
                            <button className="bg-[#403F3F] text-white font-semibold text-lg py-4 rounded">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;