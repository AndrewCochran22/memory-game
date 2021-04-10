import React from 'react';
import './MemoryCard.css';

class MemoryCard extends React.Component {
     render() {
        let innerClass = "MemoryCard__inner "; 
        if (this.props.isFlipped === true) {
            innerClass += "flipped";
        }
        return (
            <div className="MemoryCard" onClick={this.props.pickCard}>
                <div className={innerClass}>
                    <div className="MemoryCard__back">
                        <img src="https://www.digitalcrafts.com/img/logo-wrench-white.png" alt="DC Logo"/>
                    </div>
                    <div className="MemoryCard__front">
                        {this.props.symbol}
                    </div>
                </div>
            </div>
        )
    }
}

export default MemoryCard