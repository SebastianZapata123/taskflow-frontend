import Navbar from "../components/Navbar/Navbar";
import "../views/dashboard.css";
import Dragzone from "../components/Dragzone/Dragzone";

function Dashboard() {
  return (
    <>
      <Navbar />;<div className="view"> </div>
      <Dragzone />
    </>
  );
}

export default Dashboard;
