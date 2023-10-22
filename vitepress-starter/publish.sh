#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git init
git add .
# git commit -m 'publish'
# 检查是否存在未推送的提交
if [ -n "$(git status --porcelain)" ]; then
  git commit -m 'publish'
  git push -u origin main
fi

# Jacqueline712/mondaylab-blog 替换为自己的用户名和对应的仓库名
# 意思为将main构建后的代码合并到gh-pages分支上，然后在gh-pages分支上部署~


# 检查 git push 的返回状态码
if [ $? -eq 0 ]; then
  cd -
  sh ./deploy.sh # 推送成功后自动部署
  # exit  # 推送成功后退出终端
else
  echo "推送失败，请检查错误信息"
  cd -
  exit 1  # 推送失败后退出终端，并返回非零状态码
fi
