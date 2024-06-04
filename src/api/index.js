import request from '@/utils/request'

// 获取模版列表
export function gameTemplate(page = 1, size = 20) {
  return request({
    url: `/game/template`,
    method: 'post',
    data: {
      page,
      size
    }
  })
}

// 游戏模板详情

export function gameTemplateDetail(templateId) {
  return request({
    url: `/game/template/detail?templateId=${templateId}`,
    method: 'get'
  })
}

// 开始游戏
export function gamePlay(templateId) {
  return request({
    url: `/game/play`,
    method: 'post',
    data: {
      templateId
    }
  })
}

// 下一幕
export function playNext(data) {
  return request({
    url: `game/play/next`,
    method: 'post',
    data: data
  })
}
