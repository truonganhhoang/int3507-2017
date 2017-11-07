import {
    GraphQLNonNull,
} from 'graphql';

import { commentType, commentInputType } from '../../types/comment';
import CommentModel from '../../../model/comments';

export default {
    type: commentType,//type response
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(commentInputType)
        }
    },//params
    resolve(root, params) {
        const comentModal = new CommentModel(params.data);
        const newComment = comentModal.save();
        if (!newComment) {
            throw new Error('Error adding comment');
        }
        return newComment
    }
}
