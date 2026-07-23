import { format } from "date-fns";
import sideNews1 from "../../../assets/images/editorsInsight1.png";
import sideNews2 from "../../../assets/images/editorsInsight2.png";
import sideNews3 from "../../../assets/images/editorsInsight3.png";
import { date } from "../../../utils/constants";
import { SlCalender } from "react-icons/sl";

function FavouriteNews() {
  return (
    <section className="space-y-4 mt-8">
      <section className="space-y-5">
        <img className="w-full" src={sideNews1} alt="side-news" />
        <h2 className="text-xl font-semibold text-primary">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h2>
        <section className="flex items-center gap-5">
          <p className="font-medium text-primary">Sports</p>
          <section className="font-medium text-base-content leading-6 flex gap-2 items-center">
            <SlCalender className="text-2xl" />
            <p>{format(date, "MMMM d, yyyy")}</p>
          </section>
        </section>
      </section>
      <section className="space-y-5">
        <img className="w-full" src={sideNews2} alt="side-news" />
        <h2 className="text-xl font-semibold text-primary">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h2>
        <section className="flex items-center gap-5">
          <p className="font-medium text-primary">Sports</p>
          <section className="font-medium text-base-content leading-6 flex gap-2 items-center">
            <SlCalender className="text-2xl" />
            <p>{format(date, "MMMM d, yyyy")}</p>
          </section>
        </section>
      </section>
      <section className="space-y-5">
        <img className="w-full" src={sideNews3} alt="side-news" />
        <h2 className="text-xl font-semibold text-primary">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h2>
        <section className="flex items-center gap-5">
          <p className="font-medium text-primary">Sports</p>
          <section className="font-medium text-base-content leading-6 flex gap-2 items-center">
            <SlCalender className="text-2xl" />
            <p>{format(date, "MMMM d, yyyy")}</p>
          </section>
        </section>
      </section>
    </section>
  );
}

export default FavouriteNews;
