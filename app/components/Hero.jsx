export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6 col-lg-6 mb-4 mb-md-0">
            <div className="hero-content-wrap">
              <h1>
                Discover Your Next Adventure with <span>Shine Asia Travel</span>
              </h1>
              <p className="content">
                Please share your details through the form below, and our team
                will get in touch with you shortly!
              </p>
            </div>
            <div className="hero-btn-wrap">
              <a
                className="btn btn-primary"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdnyfJvnPd8sdRiwFPpGfuMGbvzjgq8SsqLF5KwgnM0-1IyGQ/viewform"
              >
                Book Now
              </a>
            </div>
          </div>

          <div className="col-md-6 col-lg-6">
            <div className="form-wrap">
              <h3>Planning your Dubai Holiday?</h3>

              <form className="wpcf7-form init" noValidate>
                <div className="row g-3">
                  <div className="col-sm-6 col-md-6">
                    <input
                      type="text"
                      name="full_name"
                      className="form-control"
                      placeholder="Full Name"
                      required
                    />
                  </div>

                  <div className="col-sm-6 col-md-6">
                    <input
                      type="text"
                      name="contact_number"
                      className="form-control"
                      placeholder="Phone Number"
                      required
                    />
                  </div>

                  <div className="col-sm-12 col-md-12">
                    <input
                      type="email"
                      name="email_address"
                      className="form-control"
                      placeholder="Email Address"
                      required
                    />
                  </div>

                  <div className="col-sm-6 col-md-6">
                    <select name="adults" className="form-select" required>
                      <option value="">No. of Adults *</option>
                      {[...Array(10)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-sm-6 col-md-6">
                    <select name="children" className="form-select">
                      <option value="">No. of Children</option>
                      {[...Array(10)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-sm-12 col-md-12">
                    <select name="package" className="form-select" required>
                      <option value="">Package Name *</option>
                      <option value="5 Nights 6 Days Any Date DUBAI Holiday Package">
                        5 Nights 6 Days Any Date DUBAI Holiday Package
                      </option>
                      <option value="3 Nights 4 Days ( without visa ) DUBAI Holiday Any Date Package">
                        3 Nights 4 Days (without visa) DUBAI Holiday Any Date
                        Package
                      </option>
                      <option value="4 Nights 5 Days DUBAI Holiday Any Date Package">
                        4 Nights 5 Days DUBAI Holiday Any Date Package
                      </option>
                      <option value="3 Nights 4 Days DUBAI Holiday Any Date Package">
                        3 Nights 4 Days DUBAI Holiday Any Date Package
                      </option>
                    </select>
                  </div>

                  <div className="col-sm-12 col-md-12">
                    <textarea
                      name="message"
                      className="form-control"
                      placeholder="Message Here..."
                      rows="5"
                    ></textarea>
                  </div>

                  <div className="col-sm-12 col-md-12">
                    <input
                      type="submit"
                      value="Submit"
                      className="btn btn-primary"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
