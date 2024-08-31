.PHONY: all build up down logs

all: build up
COMPOSE_FILE = docker-compose.dev.yml
SVELTEKIT_SERVICE = sveltekit

up:
	@echo "Starting Docker containers..."
	docker compose -f docker-compose.dev.yml up -d --build

up-prod:
	@echo "Starting Docker containers in prod mode..."
	docker compose -f docker-compose.prod.yml up -d --build

down:
	@echo "Stopping Docker containers..."
	docker compose -f ./docker-compose.dev.yml down

down-prod:
	@echo "Stopping Docker containers..."
	docker compose -f ./docker-compose.prod.yml down

logs:
	@echo "Fetching logs from Docker containers..."
	docker compose -f ./docker-compose.yml logs -f

# Clean up volumes
clean:
	@echo "Cleaning up Docker volumes..."
	docker compose -f docker/docker-compose.yml down -v

# SVELTEKIT
typegen:
	npx --prefix sveltekit pocketbase-typegen --db ./pocketbase/pb_data/data.db --out ./sveltekit/src/lib/types/pocketbase-types.ts

restart-sk:
	@echo "Restarting SvelteKit service..."
	@docker compose -f $(COMPOSE_FILE) stop $(SVELTEKIT_SERVICE)
	@docker compose -f $(COMPOSE_FILE) start $(SVELTEKIT_SERVICE)

#POCKETBASE
ssh-pocketbase:
	@docker exec -it -w /pb pocketbase /bin/sh
