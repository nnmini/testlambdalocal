# Setup 
 
 create a new directory in your laptop.</br>
 open directory in vscode IDE</br>
 open terminal in vscode</br>
 follow below steps.</br>
 
# Setup Serverless

## Create a service 
```
sls create --template aws-nodejs --path helloService

```
this will create serverless yml file in the root directory.

## Setup Node Project

```
cd helloService
npm init -y

```
## Install NPM packages
here serverless@1.63.0 version is worth to note. if we use latest, it is throwing an error like </br>
<b>missing aws lambda trace data for x-ray. ensure active tracing is enabled and no subsegments are created outside the function handler</b>
```
npm install -D serverless@1.63.0
npm install aws-sdk
```
add your backend code in js file. and start test it.
## How to run
```
AWS_PROFILE=<your aws profilename> serverless invoke local -f hello
```
here hello is function name.

## How to pass the event to lambda function
```
AWS_PROFILE=<your aws profilename> serverless invoke local -f hello -p <eventfile>
```
