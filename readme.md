# CLOUD COMPUTING LAB - Progetto 1

## Assignment
1. Code a service backed by a database e.g., CRUD operations against a table/document
   - The programming language is at your choice
   - You can reuse a code that you have at your disposal
   - The service can be very simple if you like
2. Create a (multi-stage) dockerfile for the service and build a small image for the service
- As for the database, you can use an image for the Docker hub repository
3. Create a docker-compose file with
   - A managed volume or a bind mount volume for the database
   - A virtual network
   - A suitable restart policy for the service
   - Resource limitation (select some amount of cpu and ram)
   - Deploy on the remote and check the application works correctly
   - Write a readme.txt file with the commands (to compile and deploy)
   - Submit a zip archive with project files, readme, dockerfile, docker-compose.yml

## Esecuzione

1) copiare la cartella sulla macchina di produzione, assicurarsi della presenza dei file .env
2) lanciare docker-compose --compatibility up, se non si vuole vedere output aggiungere -d
3) testare l applicazione sulla porta 4002, nel file request.rest ci sono tutte le chiamate possibili da poter eseguire che rielenco di seguito:
    - GET http://localhost:4002 -> check running up
    - GET http://localhost:4002/items -> lista di tutti gli item    
    - GET http://localhost:4002/items/1 ->prende l'item con id=1
    - POST http://localhost:4002/items/add -> aggiunge un item, parametri obbligatori da inviare name, price, weight 