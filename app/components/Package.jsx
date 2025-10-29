export default function Package() {
  return (
    <section className="block package-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="section-head text-center">
              <h2>Dubai Holiday Package</h2>
              <p>
                Explore the magic of Dubai with our carefully curated holiday
                packages
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4">
       
          <div className="col-sm-6 col-md-4">
            <div className="card border overflow-hidden">
              <figure className="card-img">
                <img
                  width="300"
                  height="225"
                  src="https://aapkatourism.com/wp-content/uploads/2025/09/dubai4-300x225.jpg"
                  className="w-100 wp-post-image"
                  alt=""
                  decoding="async"
                  srcSet="https://aapkatourism.com/wp-content/uploads/2025/09/dubai4-300x225.jpg 300w, https://aapkatourism.com/wp-content/uploads/2025/09/dubai4-1024x768.jpg 1024w, https://aapkatourism.com/wp-content/uploads/2025/09/dubai4-768x576.jpg 768w, https://aapkatourism.com/wp-content/uploads/2025/09/dubai4.jpg 1280w"
                  sizes="(max-width: 300px) 100vw, 300px"
                />
                <div className="price">Rs. 59999 </div>
              </figure>
              <div className="card-body">
                <h4>4 Nights 5 Days DUBAI Dream Tour</h4>
                <p>
                The 4 Nights 5 Days Dubai Dream Tour with Shine Asia Global offers an exciting and luxurious holiday experience. Stay in premium 3 & 4 star hotels with breakfast, enjoy a Desert Safari buffet dinner, a Dhow Cruise buffet dinner, and witness the stunning Burj Khalifa and fountain view. Explore the vibrant city through a Dubai City Tour, with flight tickets and UAE visa included.
                </p>
                <p>This package combines adventure, comfort, and sightseeing for a complete Dubai experience — all organized with seamless transfers and top-notch service.</p>

                <a href="#" className="btn btn-primary w-100 d-block">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
