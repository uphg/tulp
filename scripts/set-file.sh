set -e

cd dist
rm -rf font favicon.ico
mv style.css main.css
cd -