export default {
    lang: 'zh-CN',
    title: 'Ashine33',
    description: 'Ashine Blog',
    base: '/ashine_blog/',
    themeConfig: {
        siteTitle: '前端',
        logo: '/study.svg',
        // siteTitle: false, // 禁用标题
        nav: [
            { text: '开始', link: '/typeScript'  },
            {
                text: '学习网站', items: [
                    {
                        text: '111',
                        link: 'https://github.com/Kidnapped33'
                    },],
            },
            { text: 'GitHub', link: 'https://github.com/Kidnapped33' },
            { text: '语雀', link: 'https://www.yuque.com/ashine33' },
            {
                text: '资源', items: [
                    { text: 'Vue3/Vue2', link: 'https://cn.vuejs.org/' },
                    { text: 'Antd', link: 'https://2x.antdv.com/' },
                ]
            },
            {
                text: '职联开发', items: [

                    { text: 'GitLab', link: 'https://git.dorjob.com/' },
                    { text: 'TAPD', link: 'https://www.tapd.cn/' },
                    // { text: '运维PC', link: 'https://d-api.dorjob.com'},
                    // { text: '平台PC', link: 'https://d-super.dorjob.com/' },
                    // { text: 'swagger_platform', link: 'https://d-api.dorjob.com/platform/swagger/index.html' },
                    // { text: 'swagger_mg', link: 'https://d-api.dorjob.com/mg/swagger/index.html' },
                    // { text: 'swagger_store', link: 'https://d-api.dorjob.com/store/swagger/index.html' },
                    // { text: 'swagger_staff', link: 'https://d-api.dorjob.com/staff/swagger/index.html' },
                ]
            },
            // { text: '联系我', link: '/' },
        ],
        
        sidebar: [
            // {
            //     text: 'Vue',
            //     collapsible: true,
                
            //     items: [
            //         { text: 'Vue2', link: '/vue'},
            //         { text: 'Vue3', link: '/typeScript'  },
            //         { text: 'pinia', link: '/vue' },
            //     ]
            // },
            {
                text: 'TypeScript',
                collapsible: true,
                items: [
                    { text: 'ts/js', link: '/typeScript' },
                ]
            },
            {
                text: 'Docker',
                collapsible: true,
                items: [
                    { text: '疑难杂症', link: '/docker/dockerQuestion' },
                ]
            },
            {
                text: '其他',
                collapsible: true,
                items: [
                    { text: 'SSR VS CSR', link: '/other/ssr_csr' },
                    { text: 'git', link: '/other/git' },
                ]
            },
            {
                text: '好物推荐',
                collapsible: true,
                items: [
                    { text: 'xxx', link: '/docker/dockerQuestion' },
                ]
            },
        ]
    },
    
}