To Dos Golang REST API 

How to Start

#Go Install Process

For install golang in you computer, you need follow this steps:

//Remove any version of golang in you computer
```
sudo apt-get purge golang*
```
//Remove any config file from golang
```
sudo rm -rf /usr/lib/go-1.6/ /usr/lib/go-1.6/src/ /usr/lib/go-1.6/src/runtime/ /usr/lib/go-1.6/src/runtime/race
```
//Download the last version of golang
```
curl -O https://dl.google.com/go/go1.12.6.linux-amd64.tar.gz
```
//Unzip 
```
sudo tar -C /usr/local -xzf go1.11.1.linux-amd64.tar.gz
```
//Create folder /go, some ambient variables and storage this data in a bash file
```
mkdir -p ~/go; echo "export GOPATH=$HOME/go" >> ~/.bashrc
echo "export PATH=$PATH:$HOME/go/bin:/usr/local/go/bin" >> ~/.bashrc
```
//run this bash
```
source ~/.bashrc
```
Ready for go!!

2#Instalação do postgresql
3#Importação das dependencias
4#Como Utilizar
