set -e

mkdir dist/styles &&
npx stylus -c src/lib/_styles/components -o dist/styles &&
npx stylus src/lib/_styles/common -o dist/styles &&

cd dist
mv style.css styles/index.css
cd -
