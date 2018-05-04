import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class SubscriptionCard extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className="plan-title">
                    <h3>{this.props.title}</h3>
                </div>

                <div className="plan-price">
                    <span className="dollar-sign">
                        $
                    </span>
                    <span>
                        {this.props.price}
                    </span>
                </div>

                <p className="plan-description">
                    {this.props.description}
                </p>
                
                <div className="plan-button">
                    <Link to={`checkout/${this.props.title.toLowerCase()}`} className="button">{this.props.button}</Link>
                </div>

            </div>
        );
    }
}

SubscriptionCard.propTypes = {};

export default SubscriptionCard;
