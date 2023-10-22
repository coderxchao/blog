#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git init
git add .
git commit -m 'publish'

# Jacqueline712/mondaylab-blog 替换为自己的用户名和对应的仓库名
# 意思为将main构建后的代码合并到gh-pages分支上，然后在gh-pages分支上部署~
git push -u origin main

cd -
