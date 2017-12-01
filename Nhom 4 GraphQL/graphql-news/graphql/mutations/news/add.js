import {
    GraphQLNonNull,
} from 'graphql';

import { newsType, newsInputType } from '../../types/news';
import NewsModel from '../../../model/news';

export default {
    type: newsType,//type response
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(newsInputType)
        }
    },//params
    resolve(root, params) {
        const newsModal = new NewsModel(params.data);
        newsModal.view = 0;
        const newNews = newsModal.save();
        if (!newNews) {
            throw new Error('Error adding user');
        }
        return newNews
    }
}
