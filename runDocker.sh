#!/bin/bash

# Baixa a imagem
docker pull mongo

# Remove o container, se existir
docker stop crud-mongoose
docker container rm crud-mongoose

# Gera o container
docker run --name crud-mongoose -p 27017:27017 -d mongo
