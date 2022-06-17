#!/usr/bin/env sh

echo '------------------------------------'
echo '|        Сборка helpers            |'
echo '------------------------------------'

cd ./helpers || return

echo ''
echo 'Пакет "Default"'
echo '------------------------------------'
cd ./utils && npx yarn build


echo ''
echo '------------------------------------'
echo '|        Сборка libraries          |'
echo '------------------------------------'

cd ../../library || return

echo 'Библиотека "app"'
echo '------------------------------------'
cd ./app && npx yarn build && yarn build:types

echo 'Библиотека "kit"'
echo '------------------------------------'
cd ../kit && npx yarn build && yarn build:types

#echo 'Библиотека "design"'
#echo '------------------------------------'
#cd ../design && npx yarn build && yarn build:types


echo '------------------------------------'
echo '|        Сборка packages            |'
echo '------------------------------------'

cd ../../packages || return

echo ''
echo 'Пакет "Errors"'
echo '------------------------------------'
cd ./errors && npx yarn build && yarn build:types
echo ''
echo 'Пакет "request"'
echo '------------------------------------'
cd ../request && npx yarn build && yarn build:types
echo ''
echo 'Пакет "Dialog"'
echo '------------------------------------'
cd ../dialog && npx yarn build && yarn build:types
echo ''
echo 'Пакет "Push"'
echo '------------------------------------'
cd ../push && npx yarn build && yarn build:types
echo ''
echo 'Пакет "Numeral"'
echo '------------------------------------'
cd ../numeral && npx yarn build && yarn build:types


echo '------------------------------------'
echo '|        Сборка wrappers           |'
echo '------------------------------------'

cd ../../wrappers || return

echo ''
echo 'Пакет "Default"'
echo '------------------------------------'
cd ./default && npx yarn build && yarn build:types

echo ''
echo 'Пакет "Empty"'
echo '------------------------------------'
cd ../empty && npx yarn build && yarn build:types

echo ''
echo 'Пакет "Composite"'
echo '------------------------------------'
cd ../composite && npx yarn build && yarn build:types


echo '------------------------------------'
echo '|        Сборка widgets            |'
echo '------------------------------------'

cd ../../widgets || return

echo ''
echo 'Пакет "bucket"'
echo '------------------------------------'
cd ./bucket && npx yarn build && yarn build:types

echo ''
echo 'Пакет "profile"'
echo '------------------------------------'
cd ../profile && npx yarn build && yarn build:types


echo ''
echo '------------------------------------'
echo '|        Сборка modules            |'
echo '------------------------------------'

cd ../../modules || return

echo 'Модуль "attributes"'
echo '------------------------------------'
cd ./attributes && npx yarn build && yarn build:types

echo 'Модуль "brands"'
echo '------------------------------------'
cd ../brands && npx yarn build && yarn build:types

echo 'Модуль "categories"'
echo '------------------------------------'
cd ../categories && npx yarn build && yarn build:types

echo 'Модуль "error"'
echo '------------------------------------'
cd ../error && npx yarn build && yarn build:types

echo 'Модуль "groups"'
echo '------------------------------------'
cd ../groups && npx yarn build && yarn build:types

echo 'Модуль "images"'
echo '------------------------------------'
cd ../images && npx yarn build && yarn build:types

echo 'Модуль "main"'
echo '------------------------------------'
cd ../main && npx yarn build && yarn build:types

echo 'Модуль "product"'
echo '------------------------------------'
cd ../product && npx yarn build && yarn build:types

echo 'Модуль "products"'
echo '------------------------------------'
cd ../products && npx yarn build && yarn build:types

echo 'Модуль "sign-in"'
echo '------------------------------------'
cd ../sign-in && npx yarn build && yarn build:types

echo 'Модуль "utils"'
echo '------------------------------------'
cd ../units && npx yarn build && yarn build:types

echo 'Модуль "users"'
echo '------------------------------------'
cd ../users && npx yarn build && yarn build:types

exit 0
