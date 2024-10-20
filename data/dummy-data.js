import category from '../models/category';
import meal from '../models/meal';

export const CATEGORIES = [
    new Category('C1', 'Italian', '#f5428d'),
    new Category('C2', 'Indian', '#2596be'),
    new Category('C3', 'vegitarian', '#f5428d'), 
    new Category('C4', 'Italian', '#f5428d'),
    new Category('C5', 'Italian', '#2596be'),
    new Category('C6', 'Italian', '#f5428d'), 
    new Category('C4', 'Italian', '#f5428d'),
  

];

export const MEALS = [
    new Meal(
        'm1',
        ['c1','c2'],
        'Tomato Sauce',
        'affordable',
        'simple',
        '',
        20,

    )
]



