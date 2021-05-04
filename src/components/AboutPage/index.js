import './styles.scss'
import ClientImage from '../../assets/test.jpg'
const AboutPage = () => {
  return (
    <div className="testimonials">
      <div className="content">
        {/* TITLE OF THE CARDS */} 
        <div className="title">
          <h1>Testimonials</h1>
          <hr />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea,
            aliquam.
          </p>
        </div>

        <div className="container">
          {/* THE CARD ITSELF */}
          <div className="card">
            {/* CLIENT IMAGE */}
            <div className="client-image">
              <img src={ClientImage} alt="Client Photo" />
            </div>

            {/* CARD TEXT */}
            <div className="info">
              <h5>Jericho Cruz</h5>
              <q>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit libero mollitia nam saepe voluptatum modi quasi iste.
                Sunt cupiditate tenetur non ipsa, ducimus eum aperiam atque
                libero, praesentium sequi esse.
              </q>
            </div>
          </div>

          {/* BELOW IS REPITION OF THE ACTUAL TEXT IN THE TOP SAME STYLING AND CONTENT */}
          <div className="card">
            <div className="client-image">
              <img src={ClientImage} alt="Client Photo" />
            </div>
            <div className="info">
              <h5>Jericho Cruz</h5>
              <q>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit libero mollitia nam saepe voluptatum modi quasi iste.
                Sunt cupiditate tenetur non ipsa, ducimus eum aperiam atque
                libero, praesentium sequi esse.
              </q>
            </div>
          </div>

          <div className="card">
            <div className="client-image">
              <img src={ClientImage} alt="Client Photo" />
            </div>
            <div className="info">
              <h5>Jericho Cruz</h5>
              <q>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit libero mollitia nam saepe voluptatum modi quasi iste.
                Sunt cupiditate tenetur non ipsa, ducimus eum aperiam atque
                libero, praesentium sequi esse.
              </q>
            </div>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default AboutPage