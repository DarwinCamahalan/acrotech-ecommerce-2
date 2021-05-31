import './styles.scss'

import client1 from '../../assets/client1.jpg'
import client2 from '../../assets/client2.jpg'
import client3 from '../../assets/client3.jpg'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const AboutPage = () => {
  const responsive = {
    all: {
      breakpoint: { max: 4000, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  }

  const dummyTxt =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga molestias veniam porro modi quod laborum ducimus facere reprehenderit obcaecati placeat.'

  const Cards = [
    {
      img: `${client1}`,
      name: 'Jericho Cruz',
      position: 'Co-Founder at Acro -Tech Inc.',
      description: `${dummyTxt}`,
    },
    {
      img: `${client2}`,
      name: 'Jericho Cruz',
      position: 'Co-Founder at Acro -Tech Inc.',
      description: `${dummyTxt}`,
    },
    {
      img: `${client3}`,
      name: 'Jericho Cruz',
      position: 'Co-Founder at Acro -Tech Inc.',
      description: `${dummyTxt}`,
    },
    {
      img: `${client2}`,
      name: 'Jericho Cruz',
      position: 'Co-Founder at Acro -Tech Inc.',
      description: `${dummyTxt}`,
    },
  ]
  return (
    <>
      <div className="header-bg-about"></div>
      <div className="about-page">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          swipeable={true}
          autoPlaySpeed={4000}
          className="container"
        >
          {Cards.map((Cards, key) => {
            return (
              <div className="card" key={key}>
                <div className="img">
                  <img src={Cards.img} alt={Cards.img} />
                </div>
                <h1>{Cards.name}</h1>
                <h5>{Cards.position}</h5>
                <p>{Cards.description}</p>
              </div>
            )
          })}
        </Carousel>
        <h3>About Acrotech</h3>
        <p className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque harum
          soluta numquam ex laborum ullam placeat maxime. Illo autem praesentium
          quasi eius vitae minus libero, saepe veniam magni aliquam molestiae
          asperiores neque consectetur laudantium sit aut harum, id, unde natus
          sequi sed error eaque? Laudantium temporibus ab, dignissimos ipsam
          eaque consequuntur architecto fugit quisquam repellendus quam commodi
          harum labore praesentium hic nam, a enim possimus dolorum illum quo
          assumenda suscipit error. Voluptates unde distinctio nulla
          exercitationem deleniti accusantium eum iure mollitia consequatur.
          Necessitatibus error architecto obcaecati, quibusdam, nemo quod neque
          ipsam fugit inventore vitae cumque magnam illum laborum qui
          voluptatibus.
        </p>
        <p className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque harum
          soluta numquam ex laborum ullam placeat maxime. Illo autem praesentium
          quasi eius vitae minus libero, saepe veniam magni aliquam molestiae
          asperiores neque consectetur laudantium sit aut harum, id, unde natus
          sequi sed error eaque? Laudantium temporibus ab, dignissimos ipsam
          eaque consequuntur architecto fugit quisquam repellendus quam commodi
          harum labore praesentium hic nam, a enim possimus dolorum illum quo
          assumenda suscipit error. Voluptates unde distinctio nulla
          exercitationem deleniti accusantium eum iure mollitia consequatur.
          Necessitatibus error architecto obcaecati, quibusdam, nemo quod neque
          ipsam fugit inventore vitae cumque magnam illum laborum qui
          voluptatibus.
        </p>
        <p className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque harum
          soluta numquam ex laborum ullam placeat maxime. Illo autem praesentium
          quasi eius vitae minus libero, saepe veniam magni aliquam molestiae
          asperiores neque consectetur laudantium sit aut harum, id, unde natus
          sequi sed error eaque? Laudantium temporibus ab, dignissimos ipsam
          eaque consequuntur architecto fugit quisquam repellendus quam commodi
          harum labore praesentium hic nam, a enim possimus dolorum illum quo
          assumenda suscipit error. Voluptates unde distinctio nulla
          exercitationem deleniti accusantium eum iure mollitia consequatur.
          Necessitatibus error architecto obcaecati, quibusdam, nemo quod neque
          ipsam fugit inventore vitae cumque magnam illum laborum qui
          voluptatibus.
        </p>
        <p className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque harum
          soluta numquam ex laborum ullam placeat maxime. Illo autem praesentium
          quasi eius vitae minus libero, saepe veniam magni aliquam molestiae
          asperiores neque consectetur laudantium sit aut harum, id, unde natus
          sequi sed error eaque? Laudantium temporibus ab, dignissimos ipsam
          eaque consequuntur architecto fugit quisquam repellendus quam commodi
          harum labore praesentium hic nam, a enim possimus dolorum illum quo
          assumenda suscipit error. Voluptates unde distinctio nulla
          exercitationem deleniti accusantium eum iure mollitia consequatur.
          Necessitatibus error architecto obcaecati, quibusdam, nemo quod neque
          ipsam fugit inventore vitae cumque magnam illum laborum qui
          voluptatibus.
        </p>
        <p className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque harum
          soluta numquam ex laborum ullam placeat maxime. Illo autem praesentium
          quasi eius vitae minus libero, saepe veniam magni aliquam molestiae
          asperiores neque consectetur laudantium sit aut harum, id, unde natus
          sequi sed error eaque? Laudantium temporibus ab, dignissimos ipsam
          eaque consequuntur architecto fugit quisquam repellendus quam commodi
          harum labore praesentium hic nam, a enim possimus dolorum illum quo
          assumenda suscipit error. Voluptates unde distinctio nulla
          exercitationem deleniti accusantium eum iure mollitia consequatur.
          Necessitatibus error architecto obcaecati, quibusdam, nemo quod neque
          ipsam fugit inventore vitae cumque magnam illum laborum qui
          voluptatibus.
        </p>
      </div>
    </>
  )
}

export default AboutPage

{
  /* <div className="content">
         
          <div className="title">
            <h1>About Us</h1>
            <hr />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea,
              aliquam.
            </p>
          </div>

          <div className="container">
         
            <div className="card">
           
              <div className="client-image">
                <img src={ClientImage} alt="Client Photo" />
              </div>

        
              <div className="info">
                <q>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit libero mollitia nam saepe voluptatum modi quasi iste.
                  Sunt cupiditate tenetur non ipsa, ducimus eum aperiam atque
                  libero, praesentium sequi esse.
                </q>
                <h5>
                  Jericho Cruz <span>Co-Founder at Acro-Tech Inc.</span>
                </h5>
              </div>

           
              <div className="card">
                <div className="client-image">
                  <img src={ClientImage} alt="Client Photo" />
                </div>
                <div className="info">
                  <h5>Jericho Cruz</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit libero mollitia nam saepe voluptatum modi quasi
                    iste. Sunt cupiditate tenetur non ipsa, ducimus eum aperiam
                    atque libero, praesentium sequi esse.
                  </p>
                </div>
              </div>
              <div className="info">
                <q>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit libero mollitia nam saepe voluptatum modi quasi iste.
                  Sunt cupiditate tenetur non ipsa, ducimus eum aperiam atque
                  libero, praesentium sequi esse.
                </q>
                <h5>
                  Jericho Cruz <span>Co-Founder at Acro-Tech Inc.</span>
                </h5>
              </div>
            </div>

            <div className="card">
              <div className="client-image">
                <img src={ClientImage} alt="Client Photo" />
              </div>
              <div className="info">
                <q>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit libero mollitia nam saepe voluptatum modi quasi iste.
                  Sunt cupiditate tenetur non ipsa, ducimus eum aperiam atque
                  libero, praesentium sequi esse.
                </q>
                <h5>
                  Jericho Cruz <span>Co-Founder at Acro-Tech Inc.</span>
                </h5>
              </div>
            </div>
          </div>
        </div> */
}
