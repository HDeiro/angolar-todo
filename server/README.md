# To Dos Golang REST API 

## How to Start

### Dependencies 

For this project, do you need install: 

* Golang
* Postgresql
* Librarys

### Go Install Process

For install golang in you computer, you need follow this steps:

Remove any version of golang in you computer
```
sudo apt-get purge golang*
```
Remove any config file from golang
```
sudo rm -rf /usr/lib/go-1.6/ /usr/lib/go-1.6/src/ /usr/lib/go-1.6/src/runtime/ /usr/lib/go-1.6/src/runtime/race
```
Download the last version of golang
```
curl -O https://dl.google.com/go/go1.12.6.linux-amd64.tar.gz
```
Unzip 
```
sudo tar -C /usr/local -xzf go1.11.1.linux-amd64.tar.gz
```
Create folder /go, some ambient variables and storage this data in a bash file
```
mkdir -p ~/go; echo "export GOPATH=$HOME/go" >> ~/.bashrc
echo "export PATH=$PATH:$HOME/go/bin:/usr/local/go/bin" >> ~/.bashrc
```
run this bash
```
source ~/.bashrc
```
Ready for go!!

### Installation of Dependencies 

* gorilla/mux — A powerful URL router and dispatcher. We use this package to match URL paths with their handlers.
* jinzhu/gorm — The fantastic ORM library for Golang, aims to be developer friendly. We use this ORM(Object relational mapper) 		package to interact smoothly with our database
* dgrijalva/jwt-go — Used to sign and verify JWT tokens
* joho/godotenv — Used to load .env files into the project

To install any of this package, open terminal and run

go get github.com/{package-name}

### How Use

After all the process of install, you need go to the api folder and use this code

`go run main.go`
