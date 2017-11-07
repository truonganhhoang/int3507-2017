import {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
    GraphQLList,
    GraphQLEnumType,
    GraphQLBoolean
} from 'graphql';

import CommentModal from '../../model/comments';

export const commentType = new GraphQLObjectType({
    name: 'Comment',
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        comment_id: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        content: {
            type: GraphQLString
        }
    })
})



export const commentInputType = new GraphQLInputObjectType({
    name: 'CommentInput',
    fields: () => ({
        news_id: {
            type: GraphQLString
        },
        comment_id: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        content: {
            type: GraphQLString
        }
    })
})