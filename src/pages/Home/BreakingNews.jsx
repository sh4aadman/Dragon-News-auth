import Marquee from "react-fast-marquee"

const BreakingNews = () => {
    return (
        <div className="flex gap-5 bg-[#F3F3F3] p-4 mt-7">
            <button className="bg-[#D72050] text-xl text-white py-2 px-6">Latest</button>
            <Marquee className="text-lg font-semibold" pauseOnHover={true} speed={100}>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default BreakingNews;