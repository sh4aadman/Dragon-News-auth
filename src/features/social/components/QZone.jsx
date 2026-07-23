import qZone1 from "../../../assets/images/qZone1.png"
import qZone2 from "../../../assets/images/qZone2.png"
import qZone3 from "../../../assets/images/qZone3.png"

function QZone() {
  return (
    <section className="p-4 mt-5 bg-base-100 space-y-5 rounded-sm">
      <h2 className="text-xl font-semibold text-primary leading-7">Q-Zone</h2>
      <img src={qZone1} alt="q-zone-1" />
      <img src={qZone2} alt="q-zone-2" />
      <img src={qZone3} alt="q-zone-3" />
    </section>
  );
}

export default QZone;
