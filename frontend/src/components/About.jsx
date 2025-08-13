import React from 'react'
import { HiOutlineArrowRight } from "react-icons/hi";
import {Link}  from 'react-router-dom'


const About = () => {
  return (
    
    <section className="about">
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">About us</h1>
                    <p>
                        The Only thing we're Serious About is Foodc
                    </p>
                </div>
                <p className="mid">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum excepturi nobis nihil, inventore voluptatum cumque rerum, dolores optio repellat dolore beatae id? Ut explicabo pariatur libero corporis aut. Quae, adipisci sequi? Vitae cumque odio dignissimos voluptate quos officia repellat. Magni similique sit ab asperiores placeat officia cum dolor, ullam repellendus?</p>
                <Link to={"/menu"}>Explore Menu
                <span>                <HiOutlineArrowRight />
                </span>
                </Link>
            </div>
            <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>

    </section>
  )
}

export default About