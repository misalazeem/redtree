import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import ReactSkillBar from 'react-skillbars';

const SkillArea = () => {
    const [skillBar, setSkillBar] = useState(false);
    const development = [
        { type: 'Investment Strategy Development', level: 100 }
    ];
    const designing = [
        { type: 'Risk Management', level: 90 }
    ];
    const marketing = [
        { type: 'Portfolio Optimization', level: 95 }
    ];
    return (
        <div className="skill__area-right">
        <ScrollTrigger onEnter={()=> setSkillBar(true)} onExit={()=> setSkillBar(false)}>
                <div className="skill__area-right-title">
                    <h2>My Skills</h2> 
                </div>
                <div className="skill__area-right-skill">
                    <div className="skill__area-right-skill-item">
                        <div className="skill__area-right-skill-item-content">
                            <h6>Investment Strategy Development</h6> 
                            <div className="skill__area-right-skill-item-count">
                                <>{skillBar && <CountUp start={0} end={80} duration={4} delay={0}></CountUp>}%</>
                            </div>
                        </div>
                        <div className="skill__area-right-skill-item-bar">
                            {skillBar && <ReactSkillBar skills={development} height={16} animationDuration={2500} />}
                        </div>
                    </div>
                    <div className="skill__area-right-skill-item">
                        <div className="skill__area-right-skill-item-content">
                            <h6>Risk Management</h6> 
                            <div className="skill__area-right-skill-item-count">
                                <>{skillBar && <CountUp start={0} end={70} duration={4} delay={0}></CountUp>}%</>
                            </div>
                        </div>
                        <div className="skill__area-right-skill-item-bar">
                            {skillBar && <ReactSkillBar skills={designing} height={16} animationDuration={2500} />}
                        </div>
                    </div>
                    <div className="skill__area-right-skill-item">
                        <div className="skill__area-right-skill-item-content">
                            <h6>Portfolio Optimization</h6> 
                            <div className="skill__area-right-skill-item-count">
                                <>{skillBar && <CountUp start={0} end={75} duration={4} delay={0}></CountUp>}%</>
                            </div>
                        </div>
                        <div className="skill__area-right-skill-item-bar">
                            {skillBar && <ReactSkillBar skills={marketing} height={16} animationDuration={2500} />}
                        </div>
                    </div>
                </div>
        </ScrollTrigger>        
        </div>
    );
};

export default SkillArea;