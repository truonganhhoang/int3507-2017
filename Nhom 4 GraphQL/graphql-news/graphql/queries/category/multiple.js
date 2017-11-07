import {
    GraphQLID,
    GraphQLNonNull,
    GraphQLList
} from 'graphql';
import { categoryType } from '../../types/category';
import categoryModel from '../../../model/categorys';

export default {
    type: new GraphQLList(categoryType),
    resolve() {
        const categorys = categoryModel.find().exec();
        if (!categorys) {
            throw new Error('Error');
        }
        return categorys;
    }
}