export function getQuestion(templateId) {
  const data = JSON.parse(window.localStorage.getItem('question')) || {}
  return data[templateId] || {}
}

export function setQuestion(templateId, data) {
  const _data = JSON.parse(window.localStorage.getItem('question')) || {}
  _data[templateId] = data
  window.localStorage.setItem('question', JSON.stringify(_data))
}
