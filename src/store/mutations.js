import {
     USER_INFO
} from './mutation-type'
import {
    setLocalStore,  
} from '../../config/global'
 

export default {
     // 7.保存用户信息到本地
     [USER_INFO](state, {
        userInfo
    }) {
        // 7.1 把外界传来的userInfo保存到state中的userInfo
        state.userInfo = userInfo;
        // 7.2 保存到本地缓存中
       setLocalStore(USER_INFO, state.userInfo);
    },
}