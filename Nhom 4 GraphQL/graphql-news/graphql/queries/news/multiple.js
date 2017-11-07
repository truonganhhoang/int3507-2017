import {
    GraphQLID,
    GraphQLNonNull,
    GraphQLList
} from 'graphql';
import { newsType } from '../../types/news';
import newsModel from '../../../model/news';

export default {
    type: new GraphQLList(newsType),
    resolve() {
        const news = newsModel.find().exec();
        if (!news) {
            throw new Error('Error');
        }
        return news;
    }
}