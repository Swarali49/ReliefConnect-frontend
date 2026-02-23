import Navbar from "../../components/layout/Navbar";
import { toast } from "react-toastify";

const donations = [
  { id: 1, item: "Rice Bags", quantity: "5", drive: "Flood Relief - Telangana", status: "Picked Up" },
  { id: 2, item: "Winter Jackets", quantity: "10", drive: "Cyclone Support - AP", status: "Pending Pickup" },
];

function DonorDashboard() {
  return (
    <>
      <Navbar />
      <main className="dashboard">
        <h1>Donor Dashboard</h1>

        <section className="dashboard__section">
          <h2>My Donations</h2>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Drive</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((d) => (
                <tr key={d.id}>
                  <td>{d.item}</td>
                  <td>{d.quantity}</td>
                  <td>{d.drive}</td>
                  <td>
  {d.status === "Picked Up" ? (
    <span className="badge badge--success">{d.status}</span>
  ) : (
    <span className="badge badge--warning">{d.status}</span>
  )}
</td>

                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="dashboard__section">
          <h2>List a New Donation</h2>
          <form className="form-inline">
            <input type="text" placeholder="Item name" />
            <input type="number" placeholder="Quantity" />
            <select>
              <option>Select Drive</option>
              <option>Flood Relief - Telangana</option>
              <option>Cyclone Support - AP</option>
            </select>
            <button
  type="button"
  className="btn primary"
  onClick={() => toast.success("Donation listed successfully")}
>
  Add Donation
</button>

          </form>
        </section>
      </main>
    </>
  );
}

export default DonorDashboard;
