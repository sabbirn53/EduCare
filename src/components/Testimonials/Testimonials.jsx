import "./Testimonials.css"
import next_icon from "../../assets/next-icon.png"
import prev_icon from "../../assets/back-icon.png"
import user_1 from "../../assets/user-1.png"
import user_2 from "../../assets/user-2.png"
import user_3 from "../../assets/user-3.png"
import user_4 from "../../assets/user-4.png"
import { useRef } from "react"
const Testimonials = () => {

    const slider = useRef()

    let tx = 0

    const slideForward = () => {
        if (tx > -50) {
            tx -=25;
        }

        slider.current.style.transform =`translateX(${tx}%)`
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx +=25;
        }

        slider.current.style.transform =`translateX(${tx}%)`
    }


    return (
        <div className="testimonials">
            <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
            <img src={prev_icon} alt="" className="back-btn" onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Julia Santos</h3>
                                    <span>Curitiba,PR</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at EduCare was one of the best decisions I've made.The supportive community, facilities and commitement truely excellence</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>William Passos</h3>
                                    <span>Apucarana,PR</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro molestias tenetur, sit molestiae sint modi. Corrupti, totam non omnis perferendis exercitationem eius impedit velit sit ullam beatae suscipit! Quis, ea fuga quaerat fugiat commodi reiciendis. Sit minus blanditiis dolorem? Laudantium.</p>

                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Amanda Cristina</h3>
                                    <span>Londrina,PR</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at EduCare was one of the best decisions I've made.The supportive community, facilities and commitement truely excellence</p>

                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Hazel Harris</h3>
                                    <span>Pinhais,PR</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, rerum eum animi quam provident soluta autem repellendus ab id quaerat cumque quibusdam, eaque nihil exercitationem doloribus. Delectus, culpa? Voluptatum nobis itaque ullam distinctio deserunt consectetur soluta, voluptas repellat sapiente reprehenderit.</p>

                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials