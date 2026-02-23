import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const drives = [
  { id: 1, name: "Flood Relief - Telangana", status: "Ongoing", itemsNeeded: "Food, Blankets" },
  { id: 2, name: "Cyclone Support - AP", status: "Planning", itemsNeeded: "Clothes, Medicines" },
];

function AdminDashboard() {
  return (
    <>
      <Navbar />
      <main className="dashboard">
        <h1>Admin Dashboard</h1>

        <section className="dashboard__cards">
          <div className="card">
            <h3>Total Drives</h3>
            <p>5</p>
          </div>
          <div className="card">
            <h3>Active Donations</h3>
            <p>23</p>
          </div>
          <div className="card">
            <h3>Pending Deliveries</h3>
            <p>8</p>
          </div>
        </section>

        <section className="dashboard__section">
          <h2>Ongoing Drives</h2>
          <table>
            <thead>
              <tr>
                <th>Drive</th>
                <th>Status</th>
                <th>Items Needed</th>
              </tr>
            </thead>
            <tbody>
              {drives.map((drive) => (
                <tr key={drive.id}>
                  <td>{drive.name}</td>
                  <td>{drive.status}</td>
                  <td>{drive.itemsNeeded}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
         <section className="landing__impact">...</section>
      <Footer />
      </main>
    </>
  );
}

export default AdminDashboard;
