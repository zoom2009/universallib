# Originally, It's is solito-lib. This repo create for universal lib
  - Many Components provided
    - Layout, Button, Form Input, Skeleton, Spinner Overlay, Camera, Image Picker, Cache Image, Map, Animation, Alert, Modal, Toast and more.
    - Take a look all provided components at `package/app/components`
  - tailwind className base
  - tailwind resposive className `sm, md, lg, xl, 2xl`
  - Logics & Validate function
  - Theme

## Platform Support & Resposive
  - Resposive support
  - SSR
  - React Native (EXPO) <Android, IOS>
  - Next JS

## Step to SETUP
  - git clone <this repo> <project name>
  - replace all text from `universallib` to `<project name>`
  - add this code in Podfile
    ```
    use_flipper!({ 'Flipper'=> '0.135.0' }) // may be this version not work, You can fix error by follow error message.

    installer.target_installation_results.pod_target_installation_results
      .each do |pod_name, target_installation_result|
      target_installation_result.resource_bundle_targets.each do |resource_bundle_target|
        resource_bundle_target.build_configurations.each do |config|
          config.build_settings['CODE_SIGNING_ALLOWED'] = 'NO'
        end
      end
    end
    ```
  - remove `app/expo/eas.json` file
  - remove `extra.eas.projectId` at `app/expo/app.json` file
  - run script `eas build:configure` at `app/expo/`
  - run script `pod install` at `expo/ios`

## How to run project
  - go root path
  - run script `yarn web` for run next js
  - run script `yarn native` for run ios

## How to debug
  - use `Fbflipper` application => https://fbflipper.com/

## How to build & deploy
  - Android & IOS
    - run script `eas build` at `app/expo/`
    - run script `eas submit` at `app/expo/`
  - Next JS
    - run script `yarn build` at `app/next/`
    - push to versel or copy next `build` folder to your server
   
## How to add some package
  - React Native
    - run script `yarn add <package-name>` at `app/expo/`
  - Next JS
    - run script `yarn add <package-name>` at `app/next/`
  - Both (React Native & Next JS)
    -  run script `yarn add <package-name>` at `package/app/`
   
## More INFO
  - https://solito.dev

## Check-out Demo Screen for example

> demo video
  https://youtu.be/D8QucYNgXYw

> demo web
  https://universallib-next.vercel.app
