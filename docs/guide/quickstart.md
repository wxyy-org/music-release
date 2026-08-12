# 快速上手

music-online 是一个**单文件、双击即用**的在线音乐播放器——不需要安装 Node、数据库或任何环境。

## 1. 下载

到 [Releases 页面](https://github.com/wxyy-org/music-release/releases/latest) 下载对应平台的文件：

| 文件 | 你的设备 |
| --- | --- |
| `music-online-windows-amd64.exe` | Windows 10/11 64 位 |
| `music-online-darwin-arm64.zip` | macOS Apple Silicon（M1/M2/M3/M4） |
| `music-online-darwin-amd64.zip` | macOS Intel 芯片 |

macOS 用户下载 zip 后解压得到可执行文件。

## 2. 启动

**双击运行即可。** 程序默认监听 `31004` 端口，启动后自动打开浏览器进入播放器页面。

- **Windows**：静默后台运行，没有黑窗口；日志写在 exe 同目录的 `music-online.log`
- **macOS**：如果提示"无法打开，因为无法验证开发者"，见 [常见问题 → macOS 无法打开](/guide/faq#macos-提示无法打开)

如果端口被旧版本占用，新启动的程序会**自动接管**（关闭旧进程再启动），无需手动处理。

## 3. 开机自启（可选）

想让播放器开机自动运行并带崩溃守护，在终端执行一次：

```bash
# macOS
./music-online-darwin-arm64 -install

# 卸载自启
./music-online-darwin-arm64 -uninstall
```

Windows 在 exe 所在目录打开终端（PowerShell / CMD）执行同样的命令：

```powershell
.\music-online-windows-amd64.exe -install
.\music-online-windows-amd64.exe -uninstall
```

注册后：系统负责开机拉起，内置守护进程负责崩溃自动重启。

## 4. 更换端口（可选）

默认端口被其他程序占用时：

```bash
./music-online-darwin-arm64 -port 8080
```

## 下一步

- [功能指南](/guide/features)：搜索、播放、主题、语言
- [MP3 下载](/guide/mp3-download)：默认关闭，需在设置中开启
- [应用内更新](/guide/self-update)：新版本一键升级
