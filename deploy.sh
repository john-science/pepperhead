#!/usr/bin/env sh

# abort the script if there any errors
set -e

# build the latest code
npm run build

# go into build folder
cd dist

# push our changes to a new branch in the repo
git init
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:john-science/pepperhead.git main:gh-pages

# back out to main dir
cd -
