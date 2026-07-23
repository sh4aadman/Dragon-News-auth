import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router";

function FindSocial() {
  return (
    <section className="mt-8 mb-5">
      <h2 className="font-semibold text-xl text-primary">Find Us On</h2>
      <section className="mt-5">
        <section className="p-4 border border-base-200 rounded-t-lg divide-y">
          <Link className="flex items-center gap-2" to="/facebook">
            <FaFacebook className="text-3xl text-base-200 bg-[#3B599C] rounded-full border-base-200" />{" "}
            <span className="font-medium text-base-300 leading-7">
              Facebook
            </span>
          </Link>
        </section>
        <section className="p-4 border-x border-base-200">
          <Link className="flex items-center gap-2" to="/twitter">
            <FaTwitter className="text-3xl text-base-200 bg-[#58A7DE] rounded-full border-base-200" />{" "}
            <span className="font-medium text-base-300 leading-7">Twitter</span>
          </Link>
        </section>
        <section className="p-4 border border-base-200 rounded-b-lg">
          <Link className="flex items-center gap-2" to="/instagram">
            <FaInstagram className="text-3xl text-base-200 bg-linear-to-r from-[#D82D7E] to-[#FBA756] rounded-full border-base-200" />{" "}
            <span className="font-medium text-base-300 leading-7">
              Instagram
            </span>
          </Link>
        </section>
      </section>
    </section>
  );
}

export default FindSocial;
