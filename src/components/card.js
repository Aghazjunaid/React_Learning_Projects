import React from 'react'
import './App.css'

function Card() {
    return (
        <>
            <div className="headSection">
                <div className="headSection_1">Reliable, efficient delivery</div>
                <div className="headSection_2">Powered by Technology</div>
                <div className="headSection_3">Our Artificial Intelligence powered tools use millions of project data</div>
                <div className="headSection_4">points to ensure that your project is successful</div>
            </div>
            <div className="card">
                <div className="card_1">
                    <div className="card_1_heading">Supervisor</div>
                    <div className="card_1_body">Monitors activity to identify project roadblocks</div>
                    {/* <div>
                        <img src="public/card1.jgp" alt="BigCo Inc. logo"/>
                    </div> */}
                </div>
                <div className="middleCard">
                    <div className="card_2">
                        <div className="card_1_heading">Team Builder</div>
                        <div className="card_1_body">Monitors activity to identify project roadblocks</div>
                    </div>
                    <div className="card_3">
                        <div className="card_1_heading">Karma</div>
                        <div className="card_1_body">Monitors activity to identify project roadblocks</div>
                    </div>
                </div>
                <div className="card_4">
                    <div className="card_1_heading">Calculator</div>
                    <div className="card_1_body">Monitors activity to identify project roadblocks</div>
                </div>

            </div>
        </>
    )
}

export default Card
