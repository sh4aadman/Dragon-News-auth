import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className="p-4 mt-5 bg-[#F3F3F3] space-y-5">
            <h2 className="text-xl font-semibold">Q-Zone</h2>
            <img src={qZone1} alt="kids-zone" />
            <img src={qZone2} alt="kids-zone" />
            <img src={qZone3} alt="kids-zone" />
        </div>
    );
};

export default QZone;