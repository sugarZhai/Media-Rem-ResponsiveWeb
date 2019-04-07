export const isPC = () => {
  if (typeof window !== 'undefined') {
    const userAgentInfo = navigator.userAgent
    const Agents = ['Android', 'iPhone',
      'SymbianOS', 'Windows Phone',
      'iPad', 'iPod'
    ]
    let flag = true
    Agents.map(item => {
      if (userAgentInfo.indexOf(item) > 0) {
        flag = false
      }
    })
    return flag
  }
}

export const navInfo = [{
    icon: 'icon-dashboard fonts',
    txt: 'DASHBOARD'
  },
  {
    icon: 'icon-sitemap fonts',
    txt: 'AGENT'
  },
  {
    icon: 'icon-boat fonts',
    txt: 'MY CRUISE'
  },
  {
    icon: 'icon-life-bouy fonts',
    txt: 'HELP'
  },
]
export const historyInfo = [
  'bjstdmngbgr01/Acceptance_test..',
  'bjstdmngbgr02/Acceptance_test..',
  'bjstdmngbgr03/Acceptance_test..',
  'bjstdmngbgr04/Acceptance_test..',
  'bjstdmngbgr05/Acceptance_test..',
  'bjstdmngbgr06/Acceptance_test..',
  'bjstdmngbgr07/Acceptance_test..'
]
export const tabType = ['All', 'Physical', 'Virtual']
export const physicalInfo = [{
    img: '/static/img/windows.png',
    status: 'idle',
    desc: 'bjstdmngbgr01.thougntworks.com',
    browserInfo: [
      'Firefox',
      'Safari',
      'Chrome'
    ]
  },
  {
    img: '/static/img/windows.png',
    status: 'building',
    desc: 'bjstdmngbgr01.thougntworks.com',
    browserInfo: [
      'Firefox',
      'Safari',
      'Ubuntu'
    ]
  },
  {
    img: '/static/img/cent_os.png',
    status: 'building',
    desc: 'bjstdmngbgr05.thougntworks.com',
    browserInfo: [
      'Firefox',
      'Safari'
    ]
  },
]
export const virtualInfo = [{
    img: '/static/img/debin.png',
    status: 'building',
    desc: 'bjstdmngbgr08.thougntworks.com',
    browserInfo: [
      'Firefox',
      'Safari'
    ]
  },
  {
    img: '/static/img/suse.png',
    status: 'idle',
    desc: 'bjstdmngbgr11.thougntworks.com',
    browserInfo: [
      'Firefox',
      'Safari'
    ]
  },
  {
    img: '/static/img/ubuntu.png',
    status: 'idle',
    desc: 'bjstdmngbgr15.thougntworks.com',
    browserInfo: [
      'Safari'
    ]
  }
]