import {Constants} from "../common/Constants";
import {HttpReconstruction} from "./http";

/**
 * 获取故事列表
 * @param albumId
 * @param data
 */
export const getStoryList = (albumId, data) => {
    const token = Constants.SERVER_KEY;
    return new HttpReconstruction().request({
        headers: {
            key: `${token}`
        },
        url: `${apiConfig.version}/${albumId}`,
        method: 'GET',
        data: data,
        noLoading: false
    })
};
