export default function VisaNeed() {
  return (
    <section className="block visa-need-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="section-head text-center">
              <h2>Not Sure Which Visa Fits Your Needs?</h2>
              <p>
                Our visa experts are here to help you choose the perfect visa
                option for your Dubai journey. Get personalized advice and fast
                processing guaranteed.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-3 g-lg-4 justify-content-center">
          <div className="col-sm-6 col-md-3">
            <div className="icon-text-box">
              <figure className="icon">
                <i className="bi bi-phone"></i>
              </figure>
              <h4 className="fw-bold">Phone Call</h4>
              <p>Speak directly with our experts</p>
              <a href="tel:+971564387701" className="btn btn-light w-100">
                Call +971564387701
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="icon-text-box">
              <figure className="icon">
                <i className="bi bi-envelope"></i>
              </figure>
              <h4 className="fw-bold">Email Support</h4>
              <p>Detailed queries via email</p>
              <a href="mailto:hi@test.com" className="btn btn-light w-100">
                Send Email
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="icon-text-box">
              <figure className="icon">
                <i className="bi bi-headphones"></i>
              </figure>
              <h4 className="fw-bold">Live Support</h4>
              <p>24/7 online assistance</p>
              <a href="tel:+971564387701" className="btn btn-light w-100">
                Get Help
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
