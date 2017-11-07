import userMutation from './user';
import newsMutation from './news';
import commentMutation from './comment';

export default {
    ...userMutation,
    ...newsMutation,
    ...commentMutation
}
