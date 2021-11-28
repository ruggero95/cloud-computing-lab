#!/bin/sh
retval="n"
RESULT="Connection refused"

check(){
case "$RESULT" in
  *refused*) retval="n" ;;
  *)         retval="s" ;;
esac
}

while  [ "$retval" != "s" ]
do
    echo 'waiting for database'
    sleep 1
   
    RESULT=$(wget  http://db:3306 -nc 2>&1)
    
    check
done
  npm run knex:migrate:latest
  npm run knex:seed:run
  node build/index