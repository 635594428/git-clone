import request from '../../request'
import requestUrl from '../../requestUrl'
import requestParam from '../../requestParam'
import isInteger from 'lodash/isInteger'

// 获取列表
export function list (params) {
  return request({
    url: requestUrl('/lpgzh/lparticle/list'),
    method: 'get',
    params: requestParam(params, 'get')
  })
}
// 获取动态新闻
export function dynamicNotification (params) {
  return request({
    url: requestUrl('/lpgzh/lparticle/dynamicNotification'),
    method: 'get',
    params: requestParam(params, 'get')
  })
}

// 获取信息
export function info (id) {
  return request({
    url: requestUrl('/lpgzh/lparticle/info' + (isInteger(id) ? `/${id}` : '')),
    method: 'get',
    params: requestParam({}, 'get')
  })
}

// 添加
export function add (params) {
  return request({
    url: requestUrl('/lpgzh/lparticle/save'),
    method: 'post',
    data: requestParam(params)
  })
}
// 批量添加
export function saveAll (params) {
    return request({
        url: requestUrl('/lpgzh/lparticle/saveAll'),
        method: 'post',
        data: requestParam(params)
    })
}
// 修改
export function update (params) {
  return request({
    url: requestUrl('/lpgzh/lparticle/update'),
    method: 'post',
    data: requestParam(params)
  })
}

// 删除
export function del (params) {
  return request({
    url: requestUrl('/lpgzh/lparticle/delete'),
    method: 'post',
    data: requestParam(params, 'post', false)
  })
}
export function sort (params) {
  return request({
    url: requestUrl('/lpgzh/lparticle/sort'),
    method: 'post',
    data: requestParam(params, 'post', false)
  })
}