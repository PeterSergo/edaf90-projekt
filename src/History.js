import { useLoaderData } from 'react-router-dom';


function handleRemove(id) {
    //remove the movie from the server's 'orders' array by sending a DELETE request
    fetch(`http://localhost:8080/orders/${id}`, {
      method: "DELETE",
    });
}

export default async function History() {
    const orderHistory = useLoaderData();
    const movies = [...Object.entries(orderHistory)];
    return (
        <div>
            <h1>Beställningshistorik</h1>
            <div className="p-3">
                {movies.map((film) => (
                    <div
                        className="row text-primary mt-2 p-3 border border-primary rounded-3"
                        key={film["imdbID"]}
                    >
                        <div className="col p-1" key={film["imdbID"]}>
                            {film["Title"]}
                        </div>
                        <button
                            type="button p-1"
                            className="btn-close"
                            aria-label="Close"
                            onClick={() => handleRemove(film["imdbID"],)}
                        ></button>
                    </div>
                ))}
            </div>
        </div>
    );
}