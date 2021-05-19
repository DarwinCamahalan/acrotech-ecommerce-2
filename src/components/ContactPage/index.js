import './styles.scss'
import emailjs from 'emailjs-com'

import bg from '../../assets/slide-content/1.jpg'
const ContactPage = () => {
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
    document.querySelector('.prompt').style.display = 'block'
    setTimeout(() => {
      document.querySelector('.prompt').style.display = 'none'
    }, 5000)
  }

  return (
    <>
      <div className="prompt">
        <h1>
          Successfully Sent <i class="fas fa-check-circle"></i>
        </h1>
      </div>
      <div className="contact-img">
        <img src={bg} alt={bg} />
      </div>
      <div className="contact-page">
        <div className="form">
          <h1>Contact Us</h1>
          <form onSubmit={sendEmail}>
            <input type="text" placeholder="Full Name" name="from_name" />
            <input type="email" placeholder="Email" name="to_name" />
            <textarea
              name="message"
              id=""
              cols="40"
              rows="10"
              placeholder="Your Message"
            ></textarea>
            <input type="submit" value="Send Enquiry" className="contact-btn" />
          </form>
        </div>
      </div>
    </>
  )
}

export default ContactPage
