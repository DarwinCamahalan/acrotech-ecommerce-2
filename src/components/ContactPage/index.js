import './styles.scss'
import emailjs from 'emailjs-com'
import { useHistory } from 'react-router-dom'
import sideImage from '../../assets/worker3.jpeg'
const ContactPage = () => {
  const history = useHistory()
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_e1jzkx3',
        'template_90vai6r',
        e.target,
        'user_wC0X1OMRPWvT0Rc402HN5'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
    document.body.style.overflow = 'hidden'
    document.querySelector('.prompt').style.display = 'block'
    setTimeout(() => {
      document.body.style.overflow = 'unset'
      document.querySelector('.prompt').style.display = 'none'
      history.push('/')
    }, 3000)
  }

  return (
    <>
      <div className="prompt">
        <h1>
          Successfully Sent <i class="fas fa-check-circle"></i>
        </h1>
        <img src="https://i.gifer.com/ZKZg.gif" alt="spinner" />
        <p>Redirecting to Home Page... </p>
      </div>

      <div className="header-bg-contact"></div>
      <div className="contact-page">
        <div className="form">
          <form onSubmit={sendEmail}>
            <h1>Contact Us</h1>
            <label>Name</label>
            <input type="text" name="from_name" required />
            <label>Email</label>
            <input
              type="email"
              name="to_name"
              className="contact-email"
              required
            />
            <label>Message</label>
            <textarea name="message" id="" required></textarea>
            <input type="submit" value="Send Message" className="contact-btn" />
          </form>
        </div>
        <div className="img">
          <img src={sideImage} alt={sideImage} />
        </div>
      </div>
    </>
  )
}

export default ContactPage
