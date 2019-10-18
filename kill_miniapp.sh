PID=$(ps | grep "node server.js" | grep -v grep | awk '{ print $1 }')

for p in $PID
do
  echo Killing $p
  kill $p
done
