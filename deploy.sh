#!/bin/sh
set -xe

DEPLOY_FOLDER="deploy"
DEPLOY_BRANCH="build"

# Clear and re-create the deploy directory
rm -rf $DEPLOY_FOLDER || exit 0

# Setup git
git config --global user.name $GH_USER
git config --global user.email $GH_EMAIL

# Screenshot master branch with release tag
export PACKAGE_VERSION=$(node -p -e "require('./package.json').version")
git tag -a "v${PACKAGE_VERSION}" -m "Deployed with ${BUILD_TAG}"

# Push new tag
git remote add origin-pages "https://${GH_TOKEN}@${GH_REPO}" > /dev/null 2>&1
git push --tag --force origin-pages || exit 1

# Git clone
git clone -b $DEPLOY_BRANCH --single-branch "https://${GH_REPO}" $DEPLOY_FOLDER

# Clean up files from last build(except .git)
find ./$DEPLOY_FOLDER/{.??,}* ! -path "./${DEPLOY_FOLDER}/.git/*" ! -name ".git" | xargs rm -rf

# Copy built files
cp -R ./build/. ./$DEPLOY_FOLDER
cp ./package.json ./$DEPLOY_FOLDER/package.json

# Commit built files
cd $DEPLOY_FOLDER
git add -A .
git commit -m "Built at Travis-${TRAVIS_BUILD_NUMBER} (${TRAVIS_COMMIT_RANGE})"

# Push to deploy branch
git remote add origin-pages "https://${GH_TOKEN}@${GH_REPO}" > /dev/null 2>&1
git push --set-upstream origin-pages $DEPLOY_BRANCH

# Publish to npm
echo "Deploying v${PACKAGE_VERSION} to npm..."
echo "//registry.npmjs.org/:_authToken=\${NPM_TOKEN}" > "${TRAVIS_BUILD_DIR}/${DEPLOY_FOLDER}"/.npmrc
npm publish || exit 1
