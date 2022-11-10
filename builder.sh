#!/usr/bin/env bash

echo '------------------------------------'
echo '|        Сборка helpers            |'
echo '------------------------------------'

cd ./helpers || return

echo '------------------------------------'
echo 'Пакет "Utils"'
echo '------------------------------------'
cd ./utils && npm run build


echo ''
echo '------------------------------------'
echo '|        Сборка libraries          |'
echo '------------------------------------'

cd ../../library || return

echo '------------------------------------'
echo 'Библиотека "app"'
echo '------------------------------------'
cd ./app && npm run build && yarn build:types

echo '------------------------------------'
echo 'Библиотека "kit"'
echo '------------------------------------'
cd ../kit && npm run build && yarn build:types



echo '------------------------------------'
echo '|        Сборка packages            |'
echo '------------------------------------'

cd ../../packages || return

echo '------------------------------------'
echo 'Пакет "Errors"'
echo '------------------------------------'
cd ./errors && npm run build && yarn build:types
echo ''
echo 'Пакет "request"'
echo '------------------------------------'
cd ../request && npm run build && yarn build:types

echo '------------------------------------'
echo 'Пакет "Dialog"'
echo '------------------------------------'
cd ../dialog && npm run build && yarn build:types

echo '------------------------------------'
echo 'Пакет "Push"'
echo '------------------------------------'
cd ../push && npm run build && yarn build:types

echo '------------------------------------'
echo 'Пакет "Numeral"'
echo '------------------------------------'
cd ../numeral && npm run build && yarn build:types

echo '------------------------------------'
echo 'Пакет "Moment"'
echo '------------------------------------'
cd ../moment && npm run build && yarn build:types

echo '------------------------------------'
echo 'Пакет "Table"'
echo '------------------------------------'
cd ../table && npm run build && yarn build:types

echo '------------------------------------'
echo 'Пакет "Base data"'
echo '------------------------------------'
cd ../base && npm run build && yarn build:types



echo '------------------------------------'
echo '|        Сборка wrappers           |'
echo '------------------------------------'

cd ../../wrappers || return

echo '------------------------------------'
echo 'Пакет "Default"'
echo '------------------------------------'
cd ./default && npm run build && yarn build:types

echo '------------------------------------'
echo 'Пакет "Empty"'
echo '------------------------------------'
cd ../empty && npm run build && yarn build:types

echo '------------------------------------'
echo 'Пакет "Composite"'
echo '------------------------------------'
cd ../composite && npm run build && yarn build:types


echo '------------------------------------'
echo '|        Сборка widgets            |'
echo '------------------------------------'

cd ../../widgets || return

echo '------------------------------------'
echo 'Пакет "Profile"'
echo '------------------------------------'
cd ./profile && npm run build && yarn build:types

echo '------------------------------------'
echo 'Пакет "Gallery"'
echo '------------------------------------'
cd ../gallery && npm run build && yarn build:types

echo '------------------------------------'
echo 'Пакет "Store"'
echo '------------------------------------'
cd ../store && npm run build && yarn build:types



echo '------------------------------------'
echo 'Библиотека "design"'
echo '------------------------------------'
cd ../../library/design && npm run build && yarn build:types



echo '------------------------------------'
echo '|        Сборка modules            |'
echo '------------------------------------'

cd ../../modules || return

echo '------------------------------------'
echo 'Модуль "Attributes"'
echo '------------------------------------'
cd ./attributes && npm run build && yarn build:types

echo '------------------------------------'
echo 'Модуль "Brands"'
echo '------------------------------------'
cd ../brands && npm run build && yarn build:types

echo '------------------------------------'
echo 'Модуль "Categories"'
echo '------------------------------------'
cd ../categories && npm run build && yarn build:types

echo '------------------------------------'
echo 'Модуль "Error"'
echo '------------------------------------'
cd ../error && npm run build && yarn build:types

echo '------------------------------------'
echo 'Модуль "Groups"'
echo '------------------------------------'
cd ../groups && npm run build && yarn build:types

echo '------------------------------------'
echo 'Модуль "Gallery"'
echo '------------------------------------'
cd ../gallery && npm run build && yarn build:types

echo '------------------------------------'
echo 'Модуль "Main"'
echo '------------------------------------'
cd ../main && npm run build && yarn build:types

echo '------------------------------------'
echo 'Модуль "Product"'
echo '------------------------------------'
cd ../product && npm run build && yarn build:types

echo '------------------------------------'
echo 'Модуль "Products"'
echo '------------------------------------'
cd ../products && npm run build && yarn build:types

echo '------------------------------------'
echo 'Модуль "SignIn"'
echo '------------------------------------'
cd ../sign-in && npm run build && yarn build:types

echo '------------------------------------'
echo 'Модуль "Units"'
echo '------------------------------------'
cd ../units && npm run build && yarn build:types

echo '------------------------------------'
echo 'Модуль "Users"'
echo '------------------------------------'
cd ../users && npm run build && yarn build:types

echo '------------------------------------'
echo 'Модуль "User"'
echo '------------------------------------'
cd ../user && npm run build && yarn build:types

echo '------------------------------------'
echo 'Модуль "Checkout"'
echo '------------------------------------'
cd ../checkout && npm run build && yarn build:types

echo '------------------------------------'
echo 'Модуль "Checkouts"'
echo '------------------------------------'
cd ../checkouts && npm run build && yarn build:types

echo '------------------------------------'
echo 'Модуль "Comments"'
echo '------------------------------------'
cd ../comments && npm run build && yarn build:types

echo '------------------------------------'
echo 'Модуль "Store"'
echo '------------------------------------'
cd ../store && npm run build && yarn build:types

exit 0
