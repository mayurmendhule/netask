import React from 'react';
import vg from "../assets/2.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"


const Home = () => {
    return (
        <>
            <div className='home' id='home'>
                <main >
                    <h1>TEchStart.</h1>
                    <p>Solution to all your Problems</p>
                </main>
            </div>

            <div className='home2'>
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        We are your one and only solution to the tech problem you face every day.
                        We are leading tech company whose aim is to increase the problem solving ability in children.
                    </p>
                </div>
            </div>

            <div className='home3' id="about">
                <div>
                    <h1>Who we are?</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Quisquam a sint cum recusandae repellendus provident placeat
                         eum, quam, voluptas nemo pariatur. 
                         Omnis a qui, quisquam illum similique cumque 
                         iure iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                         Est, autem optio consequuntur adipisci quam perferendis aspernatur 
                         odio vel dicta soluta consectetur, earum, atque distinctio officia! 
                         Voluptas laudantium error aperiam quia quod quisquam minus, 
                         dolores similique molestiae, nihil doloremque possimus veritatis!
                         Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                         A modi itaque reprehenderit possimus neque nostrum ipsum laborum 
                         vel tempora culpa facilis ipsa iure nulla, consequatur esse eius 
                         saepe error similique. Ipsum omnis atque beatae ullam possimus! 
                         Praesentium facere ipsum odio obcaecati, incidunt, delectus porro 
                         quo quisquam repudiandae, sequi harum consequatur.
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                         Consectetur praesentium minus aliquam minima dolorem id maiores eos non, 
                         cupiditate animi perspiciatis libero quidem beatae iusto 
                         sapiente unde aperiam cum accusamus!
                    </p>
                </div>
            </div>


        <div className='home4' id='brands'>
            <div>
                <h1>Brands</h1>
                <article>
                    <div>
                        <AiFillGoogleCircle />
                        <p>Google</p>
                    </div>
                    <div style={{animationDelay: "0.5s",

                    }}>
                        <AiFillAmazonCircle/>
                        <p>Amazon</p>
                    </div>
                    <div style={{animationDelay: "0.7s",

                    }}>
                        <AiFillYoutube />
                        <p>YouTube</p>
                    </div>
                    <div style={{animationDelay: "1s",

                    }}>
                        <AiFillInstagram />
                        <p>Instagram</p>
                    </div>
                </article>
            </div>
        </div>
        </>
    )
}

export default Home;