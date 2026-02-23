import Navbar from "../../components/layout/Navbar";
import { useState } from "react";
import { toast } from "react-toastify";

const drivesNearYou = [
  { id: 1, name: "Flood Relief - Telangana", location: "Hyderabad", items: "Food, Clothes" },
  { id: 2, name: "Cyclone Support - AP", location: "Vijayawada", items: "Blankets, Medicines" },
];

const myRequests = [
  { id: 1, item: "Food Kit", drive: "Flood Relief - Telangana", status: "Approved" },
  { id: 2, item: "Blanket", drive: "Cyclone Support - AP", status: "Out for Delivery" },
];

function RecipientDashboard() {
  const [rating, setRating] = useState(0);

  return (
    <>
      <Navbar />
      <main className="dashboard">
        <h1>Recipient Dashboard</h1>

        {/* Active drives */}
        <section className="dashboard__section">
          <h2>Active Drives Near You</h2>
          <div className="cards-row">
            {drivesNearYou.map((d) => (
              <div className="card" key={d.id}>
                <h3>{d.name}</h3>
                <p>{d.location}</p>
                <p>Items Available: {d.items}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Request items */}
        <section className="dashboard__section">
          <h2>Request Items</h2>
          <form className="form-inline">
            <select>
              <option>Select Drive</option>
              <option>Flood Relief - Telangana</option>
              <option>Cyclone Support - AP</option>
            </select>
            <input type="text" placeholder="Item needed (e.g., Food Kit)" />
            <input type="number" placeholder="Quantity" />
            <select>
              <option>Urgency</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
            <button
              type="button"
              className="btn primary"
              onClick={() => toast.success("Request submitted")}
            >
              Submit Request
            </button>
          </form>
        </section>

        {/* My requests */}
        <section className="dashboard__section">
          <h2>My Requests</h2>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Drive</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {myRequests.map((r) => (
                <tr key={r.id}>
                  <td>{r.item}</td>
                  <td>{r.drive}</td>
                  <td>
                    {r.status === "Approved" || r.status === "Delivered" ? (
                      <span className="badge badge--success">{r.status}</span>
                    ) : (
                      <span className="badge badge--info">{r.status}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Feedback + rating */}
        <section className="dashboard__section">
          <h2>Share Your Feedback</h2>
          <div className="feedback-card">
            <p>How was your experience using ReliefConnect?</p>

            <div className="feedback-rating">
              <span>Rate us:</span>
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  className={`rating-star ${
                    value <= rating ? "rating-star--active" : ""
                  }`}
                  onClick={() => setRating(value)}
                >
                  ★
                </button>
              ))}
              {rating > 0 && <span className="rating-value">{rating}/5</span>}
            </div>

            <textarea
              className="feedback-text"
              placeholder="Write your feedback (optional)"
              rows={3}
            />
            <button
              type="button"
              className="btn primary"
              onClick={() => {
                toast.success(
                  rating > 0
                    ? `Thank you for rating us ${rating}/5!`
                    : "Thank you for your feedback!"
                );
              }}
            >
              Submit Feedback
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default RecipientDashboard;
