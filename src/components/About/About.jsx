import "./About.css"
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"


const About = ({setPlayerState}) => {
  return (
    <div className="about">
        <div className="about-left">
            <img src={about_img} alt="" className="about-img" />
            <img src={play_icon} alt="" className="play-icon" onClick={() => setPlayerState(true)}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow’s Leaders</h2>
            <p>Leadership is a crucial skill that extends beyond the boardroom—it is essential for success in all aspects of life. Universities play a pivotal role in nurturing tomorrow’s leaders by providing students with the knowledge, skills, and experiences they need to lead effectively.</p>

          <p> By integrating leadership development into their curriculum and fostering a culture of leadership, universities play a crucial role in developing the next generation of leaders who will drive positive change in the world.</p>
        </div>
    </div>
  )
}

export default About