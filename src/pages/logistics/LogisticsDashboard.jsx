import Navbar from "../../components/layout/Navbar";

const pickups = [
  { id: 1, donor: "Anil Kumar", address: "Hyderabad", item: "Rice Bags", status: "Pending Pickup" },
  { id: 2, donor: "Sara R", address: "Secunderabad", item: "Jackets", status: "Scheduled" },
];

const inventory = [
  { id: 1, item: "Food Kits", quantity: 40, location: "Warehouse A" },
  { id: 2, item: "Blankets", quantity: 25, location: "Warehouse B" },
];

function LogisticsDashboard() {
  return (
    <>
      <Navbar />
      <main className="dashboard">
        <h1>Logistics Dashboard</h1>

        <section className="dashboard__section">
          <h2>Pending Pickups</h2>
          <table>
            <thead>
              <tr>
                <th>Donor</th>
                <th>Address</th>
                <th>Item</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {pickups.map((p) => (
                <tr key={p.id}>
                  <td>{p.donor}</td>
                  <td>{p.address}</td>
                  <td>{p.item}</td>
                  <td>
  {p.status === "Pending Pickup" ? (
    <span className="badge badge--warning">{p.status}</span>
  ) : (
    <span className="badge badge--info">{p.status}</span>
  )}
</td>

                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="dashboard__section">
          <h2>Inventory Overview</h2>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((i) => (
                <tr key={i.id}>
                  <td>{i.item}</td>
                  <td>{i.quantity}</td>
                  <td>{i.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}

export default LogisticsDashboard;
