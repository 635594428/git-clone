import request from '../../request'
import requestUrl from '../../requestUrl'
import requestParam from '../../requestParam'
import isInteger from 'lodash/isInteger'

// 获取列表
export function list (params) {
  return request({
    url: requestUrl('/lppc/lparticle/list'),
    method: 'get',
    params: requestParam(params, 'get')
  })
}
// 获取动态新闻
export function dynamicNotification (params) {
  return request({
    url: requestUrl('/lppc/lparticle/dynamicNotification'),
    method: 'get',
    params: requestParam(params, 'get')
  })
}

// 获取信息
export function info (id) {
  return request({
    url: requestUrl('/lppc/lparticle/info' + (isInteger(id) ? `/${id}` : '')),
    method: 'get',
    params: requestParam({}, 'get')
  })
}

// 添加
export function add (params) {
  return request({
    url: requestUrl('/lp/lparticle/save'),
    method: 'post',
    data: requestParam(params)
  })
}
// 批量添加
export function saveAll (params) {
    return request({
        url: requestUrl('/lp/lparticle/saveAll'),
        method: 'post',
        data: requestParam(params)
    })
}
// 修改
export function update (params) {
  return request({
    url: requestUrl('/lp/lparticle/update'),
    method: 'post',
    data: requestParam(params)
  })
}

// 删除
export function del (params) {
  return request({
    url: requestUrl('/lp/lparticle/delete'),
    method: 'post',
    data: requestParam(params, 'post', false)
  })
}
export function sort (params) {
  return request({
    url: requestUrl('/lp/lparticle/sort'),
    method: 'post',
    data: requestParam(params, 'post', false)
  })
}
export function searchHomeArticles (params) {
  return request({
    url: requestUrl('/lppc/lparticle/searchHomeArticles'),
    method: 'get',
    data: requestParam(params, 'get', false)

  })
}