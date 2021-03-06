# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build:docs

# 进入生成的文件夹
cd dist-docs

git init
git add -A
echo -e "\n# commit build"
git commit -m 'deploy'
echo -e "\n# push Github"
git push -f git@github.com:uphg/tulip.git master:gh-pages
echo -e "\n# push Gitee"
git push -f git@gitee.com:uphg/tulip.git master:gh-pages
echo -e "\n# Exit the build folder"
cd -
