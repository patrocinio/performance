echo Installing node
curl -sL https://rpm.nodesource.com/setup_12.x | sudo -E bash -
yum install -y node
node -version
