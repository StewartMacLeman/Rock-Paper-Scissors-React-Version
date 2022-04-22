import React, {useState} from 'react';
import DropDownRulesCont from './DropDownRulesCont';

const Header = () => {
    const [showRules, setShowRules] = useState(false);
    const [hideRules, setHideRules] = useState(true);

    const toggleRules = () => {
        setShowRules(showRules => !showRules);
        setHideRules(hideRules => !hideRules);
    }
  return (
    <header className="header">
      <h1 className="titleStyle">Rock-Paper-Scissors</h1>
      <button className={!showRules ? "" : "hide"} type="button" onClick={toggleRules}>Show Rules!</button>
      <DropDownRulesCont toggleRules={toggleRules} hideRules={hideRules}/>
    </header>
  );
};

export default Header;
