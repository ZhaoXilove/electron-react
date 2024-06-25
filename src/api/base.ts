import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig, AxiosRequestHeaders } from 'axios'
import qs from 'qs'

/**
 * @description AxiosConfig  解决新版Axios Type不能分配问题
 */
export interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders
}

/**
 * @description 处理AxiosError
 */
function handleAxiosError(message: string) {
  throw new Error(message)
}

/**
 * @description 默认异常处理
 */
function handleUnexpectedError(error: string) {
  throw new Error(error)
}

/**
 * @description Axios实例
 */
export const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json',
  },
})

/**
 * @description 请求拦截器用于添加token或其他headers
 */
axiosInstance.interceptors.request.use(
  (config: AdaptAxiosRequestConfig) => {
    // 在这里添加任何headers或token
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

/**
 * @description 响应拦截器用于处理错误
 */
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  (error) => {
    // 在这里处理和记录错误
    console.error('请求失败:', error.message)
    return Promise.reject(error)
  }
)

/**
 * @description 封装POST请求方法
 * @param url
 * !toast return Data<T>
 */
export const post = async <T>(url: string, data: T): Promise<any> => {
  try {
    const response = await axiosInstance.post(url, data)
    return response
  } catch (error) {
    if (axios.isAxiosError(error)) {
      handleAxiosError(error.message)
    } else {
      handleUnexpectedError('请求失败')
    }
  }
}

type Parameters = Record<string, string>

/**
 * @description 封装GET请求方法
 * @param url
 * !toast return unknown
 */
export const get = async (url: string, parameters: Parameters = {}): Promise<unknown> => {
  try {
    const urlWithQuery = `${url}${qs.parse(parameters)}`
    return await axiosInstance.get(urlWithQuery)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      handleAxiosError(error.message)
    } else {
      handleUnexpectedError('请求失败')
    }
  }
}
