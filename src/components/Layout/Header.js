import { Fragment } from 'react'; 

import mealsImage from '../../assets/meals.jpg'

const Header = props => {
    return <Fragment>
        <header>
            <h1>ReactMeals</h1>
            <button>Cart</button>
        </header>
        <div>
            <img src={mealsImage} />
        </div>

    </Fragment>
};

export default Header;