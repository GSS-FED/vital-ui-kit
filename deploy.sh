#!/bin/sh
set -xe

export PACKAGE_VERSION=$(node -p -e "require('./package.json').version")
export NPM_PACKAGE_VERSION=$(npm view vital-ui-kit version)

# check version number before deploy
if [ $PACKAGE_VERSION = $NPM_PACKAGE_VERSION ]; then
  echo "Not deploy current master commit to npm (prevent hotfix build)"
  exit 0
  
else
  DEPLOY_FOLDER="deploy"
  DEPLOY_BRANCH="build"

  # Clear and re-create the deploy directory
  rm -rf $DEPLOY_FOLDER || exit 0

  # Setup git
  git config --global user.name $GH_USER
  git config --global user.email $GH_EMAIL

  # Screenshot master branch with release tag
  git tag -a "v${PACKAGE_VERSION}" -m "Deployed with ${BUILD_TAG}"

  # Push new tag
  git remote add origin-pages "https://${GH_TOKEN}@${GH_REPO}" > /dev/null 2>&1
  git push --tag --force origin-pages || exit 1

  # Git clone
  git clone -b $DEPLOY_BRANCH --single-branch "https://${GH_REPO}" $DEPLOY_FOLDER

  # Clean up directorys / files from last build (except .git/*)
  find ./$DEPLOY_FOLDER -type d ! -path "*/.git*" ! -path "./$DEPLOY_FOLDER" | xargs rm -rf
  find ./$DEPLOY_FOLDER -type f ! -path "*/.git/*" | xargs rm -rf

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
fi
