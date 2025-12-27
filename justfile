build:
    docker-compose build

up: build stop && logs
    docker-compose up -d

stop:
    docker-compose down

logs:
    docker-compose logs -f
