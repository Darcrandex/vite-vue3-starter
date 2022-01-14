import axios from 'axios'

const isDev = import.meta.env.DEV
const devProxyPrefix = import.meta.env['VITE_APP_PROXY_PREFIX']
const VITE_APP_CUSTOM_PROXY_PATTEN: string = import.meta.env[
  'VITE_APP_CUSTOM_PROXY_PATTEN'
] as string
const regxCustomProxy = new RegExp(VITE_APP_CUSTOM_PROXY_PATTEN)
const regxHttp = /^http(s?):\/\//

export function withProxy(url = ''): string {
  if (regxHttp.test(url)) {
    return url
  }

  if (regxCustomProxy.test(url)) {
    const originRequestUrl = url.replace(regxCustomProxy, '')
    return isDev ? url : originRequestUrl
  } else {
    return isDev ? `${devProxyPrefix}${url}` : url
  }
}

const axiosInstance = axios.create({
  timeout: 10000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
})

axiosInstance.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('token')
  config.headers = Object.assign({}, config.headers)
  token && (config.headers['Authorization'] = `Bearer ${token}`)
  config.url = withProxy(config.url)

  return config
})

axiosInstance.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    if (err && typeof err.toJSON === 'function') {
      const { useError } = err.toJSON().config || {}
      useError && console.error('网络异常', err)
    }

    return Promise.reject(err)
  }
)

export default axiosInstance
