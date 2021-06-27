import React from "react";

export default function dashboardNav() {
  return (
    <div className="container">
      <h3 className="text-center text-dark mt-5 mb-5 display-3">
        ADMIN DASHBOARD
      <hr />
      </h3>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div
            class="card"
            style={{
              borderRadius: "10px",
              borderColor: "#D2EAF3",
              backgroundColor: "#D2EAF3",
              width: "20rem",
            }}
          >
            <div class="card-body text-center">
              <h5 class="card-title fw-bold ">EDITOR</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div class="text-center">
                <button type="button" class="btn btn-outline-dark">
                  MANAGE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div
            class="card"
            style={{
              borderRadius: "10px",
              borderColor: "#D2EAF3",
              backgroundColor: "#D2EAF3",
              width: "20rem",
            }}
          >
            <div class="card-body text-center">
              <h5 class="card-title fw-bold">REVIEWER</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div class="text-center">
                <button type="button" class="btn btn-outline-dark">
                  MANAGE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div
            class="card"
            style={{
              borderRadius: "10px",
              borderColor: "#D2EAF3",
              backgroundColor: "#D2EAF3",
              width: "20rem",
            }}
          >
            <div class="card-body text-center">
              <h5 class="card-title fw-bold">RESEARCHER</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div class="text-center">
                <button type="button" class="btn btn-outline-dark">
                  MANAGE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <br></br>
          <div
            class="card"
            style={{
              borderRadius: "10px",
              borderColor: "#D2EAF3",
              backgroundColor: "#D2EAF3",
              width: "20rem",
            }}
          >
            <div class="card-body text-center">
              <h5 class="card-title fw-bold">WORKSHOP CONDUCTOR</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div class="text-center">
                <button type="button" class="btn btn-outline-dark">
                  MANAGE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <br></br>
          <div
            class="card"
            style={{
              borderRadius: "10px",
              borderColor: "#D2EAF3",
              backgroundColor: "#D2EAF3",
              width: "20rem",
            }}
          >
            <div class="card-body text-center">
              <h5 class="card-title fw-bold">ADTENDEE</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div class="text-center">
                <button type="button" class="btn btn-outline-dark">
                  MANAGE
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12">
          <br></br>
          <div
            class="card"
            style={{
              borderRadius: "10px",
              borderColor: "#D2EAF3",
              backgroundColor: "#D2EAF3",
              width: "20rem",
            }}
          >
            <div class="card-body text-center">
              <h5 class="card-title fw-bold">CONFERENCE DETAILS</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div class="text-center">
                <button type="button" class="btn btn-outline-dark">
                  MANAGE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <hr />
    </div>
  );
}
