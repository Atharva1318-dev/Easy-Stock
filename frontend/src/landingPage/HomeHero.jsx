"use client"

import { useRef, useEffect } from "react"
import Typed from "typed.js"
import { Link } from "react-router-dom"
import "./HomeHero.css"
import Dashboard from '../Dashboard/Home';
import SplitText from "./SplitText";

export default function HomeHero({ username }) {

    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    console.log({ username });
    const taglineRef = useRef(null)

    useEffect(() => {
        const typed = new Typed(taglineRef.current, {
            strings: ["TRADE&nbsp;&nbsp;EASY, GROW&nbsp;&nbsp;FAST!"],
            typeSpeed: 60,
            backSpeed: 30,
            loop: true,
        })

        return () => {
            typed.destroy() // Cleanup on unmount
        }
    }, [])

    return (
        <div className="HomeHero container-fluid px-0 mt-2 mt-md-1 mb-5">
            <div className="row g-0 align-items-center">
                {/* Text Content Column */}
                <div className="col-12 col-lg-4 order-2 order-lg-1" style={{ padding: "0 0.045rem 0 0.05rem" }}>
                    <div className="px-1 px-md-0 py-4 py-md-5">
                        <SplitText
                            text="Seamless Trading Platform"
                            className="text-2xl display-5 fw-bold text-center"
                            delay={150}
                            animationFrom={{ opacity: 0, transform: 'translate3d(0,-50px,0)' }}
                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                            easing="easeOutCubic"
                            threshold={0.2}
                            rootMargin="-50px"
                            onLetterAnimationComplete={handleAnimationComplete}
                        />

                        <div className="mb-4">
                            <span className="fs-5 fs-md-4" style={{ color: "#7fb6ef" }} ref={taglineRef}></span>
                        </div>

                        <p className="text-muted lead mb-4">
                            Welcome to EasyStock, the simplest way to buy and sell stocks. Our platform is designed for beginners,
                            offering a seamless trading experience. Invest with confidence, and grow your wealth
                            effortlessly.
                        </p>

                        {username ? (
                            <Link
                                to="/home"
                                className="btn btn-lg px-4 py-2"
                                style={{
                                    backgroundColor: "#1E3A8A",
                                    color: "#7fb6ef",
                                    textDecoration: "none",
                                }}
                            >
                                Go to Dashboard
                            </Link>
                        ) : (
                            <button
                                className="btn btn-lg px-4 py-2"
                                style={{
                                    backgroundColor: "#1E3A8A",
                                    color: "#7fb6ef",
                                }}
                            >
                                Signup for free
                            </button>
                        )}
                    </div>
                </div>

                {/* Image Column */}
                <div className="col-12 col-lg-8 order-1 order-lg-2">
                    <img
                        src="https://res.cloudinary.com/dkpgnq7ym/image/upload/v1740296097/newHome_wiaspn.jpg"
                        alt="Hero Image"
                        className="img-fluid w-100 h-auto"
                        style={{
                            maxHeight: "600px",
                            objectFit: "cover",
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

