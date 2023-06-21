#!/bin/sh

CUR=$(pwd)

CURRENT=$(cd $(dirname $0);pwd)
echo "${CURRENT}"

cd "${CURRENT}"
git pull --prune
result=$?
if [ $result -ne 0 ]; then
  cd "${CUR}"
  exit $result
fi

cd "${CURRENT}"/package
result=$?
if [ $result -ne 0 ]; then
  cd "${CUR}"
  exit $result
fi
echo ""
pwd
pnpm install && pnpm up -r && pnpm build && rm -rf node_modules && pnpm install --production && git add node_modules -f
result=$?
if [ $result -ne 0 ]; then
  cd "${CUR}"
  exit $result
fi

cd "${CURRENT}"/tests/commonjs
result=$?
if [ $result -ne 0 ]; then
  cd "${CUR}"
  exit $result
fi
echo ""
pwd
pnpm install && pnpm up -r && rm -rf dist && pnpm build && pnpm package && rm -rf node_modules && pnpm install --production && git add node_modules dist -f
result=$?
if [ $result -ne 0 ]; then
  cd "${CUR}"
  exit $result
fi

cd "${CURRENT}"/tests/esm
result=$?
if [ $result -ne 0 ]; then
  cd "${CUR}"
  exit $result
fi
echo ""
pwd
pnpm install && pnpm up -r && rm -rf dist && pnpm build && pnpm package && rm -rf node_modules && pnpm install --production && git add node_modules dist -f
result=$?
if [ $result -ne 0 ]; then
  cd "${CUR}"
  exit $result
fi

cd "${CURRENT}"
result=$?
if [ $result -ne 0 ]; then
  cd "${CUR}"
  exit $result
fi
git commit -am "Bumps node modules" && git push
result=$?
if [ $result -ne 0 ]; then
  cd "${CUR}"
  exit $result
fi

cd "${CUR}"
