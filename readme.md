# Originally, It's is solito-lib. This repo create for universal lib

## Platform Support & Resposive
  - Resposive support
  - SSR
  - React Native (EXPO) <android, ios>
  - Next JS

## Step to clone and use this
  - git clone <this repo> <project name>
  - replace all text from `universallib` to `<project name>`
  - add this code in Podfile
    ```
    use_flipper!({ 'Flipper'=> '0.135.0' })

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
  - use `Fbflipper application`

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
