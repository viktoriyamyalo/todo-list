import React, {Component} from 'react';

class SubscriptionCard extends Component {
    render() {
        return (
            <div>
                <div>
                    <h3>{this.props.title}</h3>
                </div>

                <div>
                    <span>
                        $
                    </span>
                    <span>
                        {this.props.price}
                    </span>
                </div>

                <p>
                    {this.props.description}
                </p>
                
                <div>
                    <a href="#">{this.props.button}</a>
                </div>

            </div>
        );
    }
}

SubscriptionCard.propTypes = {};

export default SubscriptionCard;
