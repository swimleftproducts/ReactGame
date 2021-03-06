import React, { Component } from 'react';

class BackgroundDetail extends Component {
  render() {
    return (
      <div
        className="mt-4 container"
        onClick={() => {
          this.props.onClick('');
        }}
      >
        <div className="row align-items-center">
          <img
            src={this.props.imgSrc}
            style={{ height: '75vh', borderRadius: '1rem' }}
            className="col-12 col-md-10 img-fluid"
            alt="..."
          />

          <div className="col-12  col-md-2  justify-content-between">
            <div className="p-0 border-2 border-secondary eh-position card card-eh">
              <div className="card-body m-0 p-0 ">
                <p className="card-text p-2">{this.props.text}</p>
                <div className="card-footer text-muted">click to return</div>
                <div className="p-0 row  text-center">
                  <button
                    onClick={() => {
                      this.props.setUserPage('HintsWeapon');
                    }}
                    className="col-12 p-1 m-0 btn btn-block btn-primary btn-lg  "
                  >
                    Hints
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BackgroundDetail;
