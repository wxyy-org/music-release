import { defineConfig } from 'vitepress'
import fs from 'node:fs'

// 当前版本：同步时由 sync-docs.sh 注入 .vitepress/version.json；本地开发缺失时显示 dev
let version = 'dev'
try {
	version = JSON.parse(fs.readFileSync(new URL('./version.json', import.meta.url), 'utf8')).version ?? 'dev'
} catch {
	/* 本地开发未注入版本文件 */
}

export default defineConfig({
	title: 'music-online 用户手册',
	description: 'music-online 在线音乐播放器：下载、安装、功能指南与常见问题',
	cleanUrls: true,
	// changelog.md 由同步脚本注入，本地开发时缺失，放宽死链检查
	ignoreDeadLinks: true,
	themeConfig: {
		nav: [
			{ text: '首页', link: '/' },
			{ text: '快速上手', link: '/guide/quickstart' },
			{ text: '更新日志', link: '/changelog' },
			{
				text: `v${version}`,
				link: 'https://github.com/wxyy-org/music-release/releases/latest'
			}
		],
		sidebar: [
			{
				text: '指南',
				items: [
					{ text: '快速上手', link: '/guide/quickstart' },
					{ text: '功能指南', link: '/guide/features' },
					{ text: 'MP3 下载', link: '/guide/mp3-download' },
					{ text: '应用内更新', link: '/guide/self-update' },
					{ text: '常见问题（FAQ）', link: '/guide/faq' }
				]
			},
			{
				text: '其他',
				items: [{ text: '更新日志', link: '/changelog' }]
			}
		],
		outline: { label: '本页目录' },
		docFooter: { prev: '上一篇', next: '下一篇' },
		returnToTopLabel: '回到顶部',
		darkModeSwitchLabel: '主题',
		sidebarMenuLabel: '菜单',
		outlineTitle: '本页目录'
	}
})
