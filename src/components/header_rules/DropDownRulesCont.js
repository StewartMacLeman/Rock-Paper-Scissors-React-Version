import React from 'react';
import HowToPlay from './HowToPlay';
import HowToScore from './HowToScore';

const DropDownRulesCont = (props) => {
    return (
        <div className={props.hideRules ? "hide" : "rulesContainer"}>
            <HowToPlay />
            <HowToScore />
            <button  type="button" onClick={props.toggleRules}>Hide Rules!</button>
        </div>
    )
}

export default DropDownRulesCont;