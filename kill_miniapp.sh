PID=$(ps -ef | grep "node server.js" | grep icpdepl | grep -v grep | awk '{ print $2 }')

for p in $PID
do
  echo Killing $p
  kill $p
done
