for p in {30000..30009}
do
  echo Starting miniapp at $p
  PORT_NUMBER=$p npm start > /tmp/miniapp-$p.log &
done
