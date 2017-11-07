import {
    GraphQLNonNull,
} from 'graphql';

import { userType, userInputType } from '../../types/user';
import UserModel from '../../../model/users';

export default {
    type: userType,//type response
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(userInputType)
        }
    },//params
    resolve(root, params) {
        const uModel = new UserModel(params.data);
        uModel.flag_active = false;
        const newUser = uModel.save();
        if (!newUser) {
            throw new Error('Error adding user');
        }
        return newUser
    }
}
