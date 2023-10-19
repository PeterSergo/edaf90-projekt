import React from "react";

function MediaViewer({ value, submit }) {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              {value !== "empty" ? (
                <>
                  <h4 className="card-title">{value["Title"]}</h4>
                  <p className="card-text">Year: {value["Year"]}</p>
                  <p className="card-text">
                    IMDB rating: {value["imdbRating"]}
                  </p>
                  {value["Ratings"] ? (
                    value["Ratings"].map((rating, index) => (
                      <p key={index} className="card-text">
                        Rating {index + 1}: {rating.Source} - {rating.Value}
                      </p>
                    ))
                  ) : (
                    <p className="card-text">No ratings available</p>
                  )}
                  <form onSubmit={submit}>
                    <button type="submit" className="btn btn-primary">
                      Add to cart
                    </button>
                  </form>
                </>
              ) : (
                <p className="card-text">Inget resultat hittades</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaViewer;
