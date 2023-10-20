import { useLoaderData } from "react-router-dom";

export default function History() {
  const orderHistory = useLoaderData();

  const orders = [...Object.entries(orderHistory)];
  return (
    <div>
      <h1>Beställningshistorik</h1>
      <div className="p-3">
        {orders.map((order) => (
          <div
            className="row text-primary mt-2 p-3 border border-primary rounded-3"
            key={order[0]}
          >
            <div>
              Beställningstid:{" "}
              {new Date(
                Object.values(order)[1]["Timestamp"]
              ).toLocaleDateString("it-IT")}{" "}
              {new Date(
                Object.values(order)[1]["Timestamp"]
              ).toLocaleTimeString("it-IT")}
            </div>
            <div className="col p-1" key={order[0]}>
              {Object.values(order)[1]["Order"].map((movie) => (
                <div className="col p-1" key={`${movie["imdbID"]}${order[0]}`}>
                  {movie["Title"]}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
