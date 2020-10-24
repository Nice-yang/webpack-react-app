export const menuData = [
  {
    name: 'Dashboard',
    icon: 'DashboardOutlined',
    link: '#/dashboard',
  },
  {
    name: 'Demo',
    icon: 'HomeOutlined',
    link: '#/',
  },
  {
    name: '测试',
    icon: 'ExperimentOutlined',
    children: [
      {
        name: '测试-context',
        icon: 'MailOutlined',
        link: '#/test',
      },
      {
        name: 'TODO',
        icon: 'TableOutlined',
        link: '#/todo',
      }
    ]
  }
]