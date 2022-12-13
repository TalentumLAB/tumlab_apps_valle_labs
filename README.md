# Tumlab Apps

## Contents
  * [Description](#Description)
  * [Prerequisites](#Prerequisites)
  * [Add_new_apps](#Add_new_apps)
  * [Build_image](#Build_image)
  * [Push_image](#Push_image)
  * [Start_app](#Start_app)

## Description
This repository contains the software and configurations necessary to show in a web page hosted in docker, all the applications that run in the tumlab

## Prerequisites
-   Docker-compose v2.12.1 or later
-   Docker v19.03.8 or later
-   Internet connection to push images in dockerhub

## Add_new_apps

To add applications, we must modify the code of the [apps.js](#apps.js) file and add a new key, the images for the new app must be included in the img folder

## Build_image
To build the image, we must execute the following command locating ourselves in the project folder

```
docker build -t bilinguismotalentum/tumlab-apps:{tagname} .
```

## Push_image

```
docker push bilinguismotalentum/tumlab-apps:{tagname}
```

## Start_app
-   Execute command
```
docker compose -p "Tumlab_apps" -d up
```