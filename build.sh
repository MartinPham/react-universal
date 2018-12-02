echo "Start building app" > build.log
yarn >> build.log
yarn build >> build.log
cp build/.htaccess.bin build/.htaccess >> build.log
echo "App built" >> build.log
rm -rf public
cp -r build public
echo "App published" >> build.log