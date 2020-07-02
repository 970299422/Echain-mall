
import axios from '@/utils/http';

export function register(data) {
    return axios({
        url: 'api/user/register',
        method: 'post',
        data
    })
}

// 发送邮件验证码
export function sendMailCode(data) {
    return axios({
        url: 'sendMailCode',
        method: 'post',
        data
    })
}

// 发送手机验证码
export function sendPhoneCode(data) {
    return axios({
        url: 'sendPhoneCode',
        method: 'post',
        data
    })
}

export function login(data) {
    return axios({
        url: 'api/user/login',
        method: 'post',
        data
    })
}

// 邮件重置密码
export function resetMailPasswd(data) {
    return axios({
        url: 'mailReset',
        method: 'post',
        data
    })
}

// 手机重置密码
export function resetPhonePasswd(data) {
    return axios({
        url: 'phoneReset',
        method: 'post',
        data
    })
}

