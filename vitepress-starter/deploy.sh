#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

# Jacqueline712/mondaylab-blog 替换为自己的用户名和对应的仓库名
# 意思为将main构建后的代码合并到gh-pages分支上，然后在gh-pages分支上部署~
# git push -f https://github.com/coderxchao/blog.git main:gh-pages

# 因为有些git版本默认创建的分支为master分支，有的为main分支，所以这里直接创建并切换到gh-pages分支
git checkout -b gh-pages
# git push -f https://github.com/coderxchao/blog.git
git push --set-upstream https://github.com/coderxchao/blog.git gh-pages

cd -
