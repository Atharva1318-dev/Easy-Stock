import Watchlist from './WatchList';
import Dashboard from './Dashboard';
import TopBar from './TopBar';

function Home({username}) {
    return (
        <>
            <TopBar></TopBar>
            <div className="row gx-0" style={{ background: "linear-gradient(135deg, #ffffff 0%, #dceeff 100%)" }}>
                <div className="col-8"><Dashboard username={username}/></div>
                <div className="col-4 border-end border-black"><Watchlist /></div>
            </div>
        </>
    );
}

export default Home;