import SectionOne from './SectionOne.jsx';
import SectionTwo from './SectionTwo.jsx';
import { watchlist } from './data';
import { DoughnutChart } from './DoughnutChart.jsx';


function Watchlist() {

    const data = {
        labels: watchlist.map((e) => (e.name)),
        datasets: [
            {
                label: 'Price',
                data: watchlist.map((e) => (e.price)),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div style={{ fontSize: "small", overflow: "hidden" }} className='container pt-5'>
            <div className="card shadow-sm mb-4">
                <div className="card-header bg-white">
                    <h5 className="mb-0">Watchlist</h5>
                </div>
                <div className="card-body p-0">
                    <ul className="list-group list-group-flush ps-0" style={{ listStyle: "none" }}>
                        {watchlist.map((e, idx) => {
                            return (<SectionTwo stock={e} key={idx} id={e.name} />)
                        })}
                    </ul>
                </div>
            </div>
            <DoughnutChart data={data}></DoughnutChart>
        </div>
    );
}

export default Watchlist;