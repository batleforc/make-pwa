git pull
docker container stop makepwa
docker container rm makepwa
docker build -t batlefroc/makepwa .
docker run -p 8080:8080 -d --network weebo --name makepwa batlefroc/makepwa 
sleep 2s
docker logs makepwa