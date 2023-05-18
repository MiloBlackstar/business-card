import Face from "./face.jpeg"
import Mail from "./Mail.png"
import Linkedin from "./linkedin.png"
import Twitter from "./Twitter Icon.png"
import Facebook from "./Facebook Icon.png"
import Instagram from "./Instagram Icon.png"
import Github from "./GitHub Icon.png"

export default function Main() {
  return (
    <main>
      <div className="card-container">
        <div className="image-container">
          <img className="user-img"src={Face} />
        </div>
        <div className="content">
          <p className="name">Kamil Wilangowski</p>
          <p className="title">Frontend Developer</p>
          <p class="website">kamilwilangowski.website</p>
          <div className="button-space">
            <button className="email-btn"><p><span><img src={Mail}></img></span>Email</p></button>
            <button className="linkedin-btn"><p><span><img src={Linkedin}></img></span>LinkedIn</p></button>
          </div>
          <div className="about-me-space">
            <h2>About</h2>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h2>Interests</h2>
            <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
          </div>
        </div>
        <div className="footer">
          <img className="twt" src={Twitter} />
          <img className="fb" src={Facebook} />
          <img className="ig" src={Instagram} />
          <img className="gh" src={Github} />
        </div>
      </div>
    </main>
  )
}