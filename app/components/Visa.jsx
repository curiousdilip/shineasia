export default function Visa() {
  return (
    <section className="block visa-req-section bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="section-head text-center">
              <h2>About Shine Asia Travel</h2>
              <p>
                Your trusted partner in creating unforgettable travel
                experiences across Dubai and beyond
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4 align-items-center">
          <div className="col-md-6">
            <h3>Meet Your Dubai Travel Expert</h3>
            <p>
              With 10 years of experience in the travel industry and deep
              knowledge of Dubai's culture, attractions, and hidden gems, our
              expert guides ensure you get the most authentic and memorable
              experience possible. We don't just show you Dubai - we help you
              live it.
            </p>
            <div className="row g-4">
              <div className="col-6">
                <div className="icon-box">
                  <figure className="icon">
                    <i className="bi bi-people"></i>
                  </figure>
                  <h4 className="fw-bold">5000+</h4>
                  <p>Happy Travelers</p>
                </div>
              </div>
              <div className="col-6">
                <div className="icon-box">
                  <figure className="icon">
                    <i className="bi bi-trophy"></i>
                  </figure>
                  <h4 className="fw-bold">10+</h4>
                  <p>Years Experience</p>
                </div>
              </div>
              <div className="col-6">
                <div className="icon-box">
                  <figure className="icon">
                    <i className="bi bi-globe"></i>
                  </figure>
                  <h4 className="fw-bold">100+</h4>
                  <p>Licensed & Insured</p>
                </div>
              </div>
              <div className="col-6">
                <div className="icon-box">
                  <figure className="icon">
                    <i className="bi bi-heart"></i>
                  </figure>
                  <h4 className="fw-bold">4.9/5</h4>
                  <p>Customer Rating</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <figure>
              <img
                src="./dubai.jpg"
                alt="#"
                className="rounded w-100 h-100 object-fit-cover"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
