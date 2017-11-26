import {
    GraphQLID,
    GraphQLNonNull,
    GraphQLList
} from 'graphql';
import { userType } from '../../types/user';
import userModel from '../../../model/users';

export default {
    type: new GraphQLList(userType),
    resolve() {
        const users = userModel.find().exec();
        console.log(users)
        if (!users) {
            throw new Error('Error');
        }
        return users;
    }
}
