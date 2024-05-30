export function checkDevice() {
  // js判断是否是苹果设备
  function checkIsAppleDevice() {
    var u = navigator.userAgent
    // var app = navigator.appVersion
    var ios = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    var iPad = u.indexOf('iPad') > -1
    var iPhone = u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1
    if (ios || iPad || iPhone) {
      return true
    } else {
      return false
    }
  }
  if (checkIsAppleDevice()) {
    return 'IOS'
  } else {
    return 'Android'
  }
}
