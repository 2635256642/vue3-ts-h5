import request from '@/utils/request'

export function getBimList(query: any) {
  return request({
    url: '/V4.0.0/api/bim/get_bim_list',
    method: 'get',
    params: query
  })
}
