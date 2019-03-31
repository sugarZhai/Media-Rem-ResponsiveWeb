
const PATH_PREFIX_TEST = '' //根据测试环境对应网关分配
const PATH_PREFIX = ''

const env = typeof window === 'undefined' ? process.env.DEPLOY_ENV : window.DEPLOY_ENV
module.exports = {
  gwPath: env === 'test' ? PATH_PREFIX_TEST : PATH_PREFIX,
  env
}
