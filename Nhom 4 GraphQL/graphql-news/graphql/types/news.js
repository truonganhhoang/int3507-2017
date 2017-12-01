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

import { authorType } from './user';
import UserModel from '../../model/users';
import { categoryType } from './category';
import CategoryModel from '../../model/categorys';
import { commentType } from './comment';
import CommentModel from '../../model/comments'

export const newsType = new GraphQLObjectType({
    name: 'News',
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        title: {
            type: GraphQLString
        },
        image: {
            type: GraphQLString
        },
        content: {
            type: GraphQLString
        },
        author: {
            type: authorType,
            resolve(news) {
                return UserModel.findById(news.author_id).exec();
            }
        },
        view: {
            type: GraphQLInt
        },
        category: {
            type: categoryType,
            resolve(news) {
                return CategoryModel.findById(news.category_id).exec();
            }
        },
        createdAt: {
            type: GraphQLString
        },
        comment: {
            type: new GraphQLList(commentType),
            resolve(news) {
                return CommentModel.find({ news_id: news._id }).exec();
            }
        }
    })
})



export const newsInputType = new GraphQLInputObjectType({
    name: 'NewsInput',
    fields: () => ({
        title: {
            type: GraphQLString
        },
        image: {
            type: GraphQLString
        },
        content: {
            type: GraphQLString
        },
        author_id: {
            type: GraphQLString
        },
        category_id: {
            type: GraphQLString
        }
    })
})