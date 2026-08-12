# music-release

music-online 的发布仓库：这里提供各平台的安装包下载与完整的用户文档。

## 下载

前往 [Releases](https://github.com/wxyy-org/music-release/releases/latest) 下载最新版：

| 文件 | 平台 |
| --- | --- |
| `music-online-windows-amd64.exe` | Windows 64 位（双击即用） |
| `music-online-darwin-arm64.zip` | macOS Apple Silicon（M 系列芯片） |
| `music-online-darwin-amd64.zip` | macOS Intel |

解压后双击运行即可，默认监听 `31004` 端口并自动打开浏览器。详见 [快速上手](docs/guide/quickstart.md)。

## 用户文档

`docs/` 目录是一个完整的 VitePress 文档站，克隆后可直接运行查看：

```bash
git clone https://github.com/wxyy-org/music-release.git
cd music-release/docs
pnpm install   # 或 npm install
pnpm dev       # 或 npm run dev
```

也可以直接在线阅读（GitHub 会渲染 Markdown）：

- [快速上手](docs/guide/quickstart.md)
- [功能指南](docs/guide/features.md)
- [MP3 下载](docs/guide/mp3-download.md)
- [应用内更新](docs/guide/self-update.md)
- [常见问题](docs/guide/faq.md)
- [更新日志](docs/changelog.md)
