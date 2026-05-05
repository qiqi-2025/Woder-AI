# 阿里云 OSS 部署指南

## 📋 前置准备

### 1. 创建阿里云 OSS Bucket

1. 登录 [阿里云控制台](https://console.aliyun.com/)
2. 进入 **对象存储 OSS**
3. 点击 **创建 Bucket**
4. 配置：
   - **Bucket 名称**：例如 `woder-ai-website`（全局唯一，用小写字母+数字）
   - **地域**：选择离用户近的地域（如 `华东 1-杭州`）
   - **读写权限**：私有（我们会通过 GitHub Actions 上传）
   - **存储类型**：标准存储
5. 点击 **确定**

### 2. 配置静态网站托管

1. 进入刚创建的 Bucket
2. 左侧菜单 **基础设置** → **静态页面**
3. 点击 **配置**：
   - **默认首页**：`index.html`
   - **默认 404 页**：`404.html`
4. 点击 **保存**

### 3. 获取访问凭证

#### 3.1 创建 RAM 用户（推荐）

1. 进入 **RAM 访问控制**
2. 点击 **用户** → **创建用户**
3. 用户名：例如 `github-deployer`
4. 访问方式：勾选 **OpenAPI 调用访问**
5. 点击 **确定**，**立即复制 AccessKey ID 和 AccessKey Secret**（只出现一次！）

#### 3.2 授权

1. 进入刚创建的用户
2. 点击 **权限管理** → **新增授权**
3. 选择权限：`AliyunOSSFullAccess`（或者自定义最小权限）
4. 点击 **确定**

### 4. 配置 GitHub Secrets

1. 进入 GitHub 仓库：`https://github.com/qiqi-2025/Woder-AI`
2. 点击 **Settings** → **Secrets and variables** → **Actions**
3. 点击 **New repository secret**，添加以下 4 个：

| Secret 名称 | 值示例 | 说明 |
|------------|--------|------|
| `ALIYUN_ACCESS_KEY_ID` | `LTAI5t...` | RAM 用户的 AccessKey ID |
| `ALIYUN_ACCESS_KEY_SECRET` | `xxxxx...` | RAM 用户的 AccessKey Secret |
| `ALIYUN_OSS_BUCKET` | `woder-ai-website` | Bucket 名称 |
| `ALIYUN_OSS_ENDPOINT` | `oss-cn-hangzhou.aliyuncs.com` | Bucket 所在地域 endpoint |

#### Endpoint 参考

| 地域 | Endpoint |
|------|----------|
| 华东 1-杭州 | `oss-cn-hangzhou.aliyuncs.com` |
| 华东 2-上海 | `oss-cn-shanghai.aliyuncs.com` |
| 华北 1-青岛 | `oss-cn-qingdao.aliyuncs.com` |
| 华北 2-北京 | `oss-cn-beijing.aliyuncs.com` |
| 华南 1-深圳 | `oss-cn-shenzhen.aliyuncs.com` |

### 5. 配置 CDN（可选，但推荐）

如果希望国内访问更快：

1. 进入 **CDN 控制台**
2. 点击 **域名管理** → **添加域名**
3. 配置：
   - **加速域名**：你的域名（如 `www.woder-ai.com`）
   - **业务类型**：图片小文件
   - **加速区域**：仅中国内地
   - **源站类型**：OSS 域名
   - **源站地址**：选择你的 Bucket
4. 点击 **确定**
5. 等待 CNAME 配置生效（可能需要备案）

### 6. 绑定自定义域名（可选）

如果要用自己的域名：

1. 在 OSS Bucket → **域名管理** → **绑定用户域名**
2. 输入你的域名
3. 按提示配置 CNAME 记录
4. **注意**：国内 CDN 需要域名备案

---

## 🚀 部署

完成以上配置后：

1. 提交代码并推送到 GitHub：
   ```bash
   git add .
   git commit -m "Configure Aliyun OSS deployment"
   git push
   ```

2. GitHub Actions 会自动触发部署
3. 在 GitHub → Actions 查看部署进度
4. 部署完成后，访问 OSS 域名即可看到网站

---

## 📝 访问地址

- **OSS 默认域名**：`https://<bucket>.<endpoint>/`
  - 例如：`https://woder-ai-website.oss-cn-hangzhou.aliyuncs.com/`

- **CDN 加速域名**（如果配置了）：`https://你的域名/`

---

## ⚠️ 注意事项

1. **不要提交敏感信息**：AccessKey 等凭证只放在 GitHub Secrets
2. **缓存问题**：更新后如果看不到变化，强制刷新浏览器（Ctrl+F5）
3. **备案**：如果使用自定义域名且 CDN 在中国内地，需要域名备案
4. **费用**：OSS 存储 + CDN 流量会产生费用，但个人网站很低（每月几块钱）
