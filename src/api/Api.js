import axiosClient from './axiosClient';

const Api = {
    getImage: () => {
        const url = '/';
        return axiosClient.get(url);
    },
};

export default Api;