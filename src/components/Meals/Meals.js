import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals'
import { Fragment } from 'react/cjs/react.development';

const Meals = () => {
    return <Fragment>
        <MealsSummary />
        <AvailableMeals />
    </Fragment>
};

export default Meals;