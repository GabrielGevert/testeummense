<p align="center"><img src="https://www.ummense.com/img/header/ummense.png"></p>

# Teste Prático de Laravel 10 + Sanctum + Vue 3 + Axios + Vuex + VueRouter + Tailwindcss

``` bash
Teste realizado para o processo seletivo de desenvolvedor na empresa Ummense.
```

> Crud de usuários + Register/login + Auth

## Baixar o projeto
Primeiro passo, clonar o projeto:
``` bash
# Clonar
git clone https://github.com/GabrielGevert/testeummense.git

```

## Configuração - Backend

``` bash
# Acessar backend (já na pasta raiz do projeto) (api)
cd api

# Instalar dependências do projeto
composer install

# Configurar variáveis de ambiente (DB_)
cp .env.example .env
php artisan key:generate
# /api/.env

# Criar migrations (tabelas)
php artisan migrate --seed

# Iniciar backend
php artisan serve

[http://127.0.0.1:8000] <- url e porta padrão
```


## Configuração - Frontend
``` bash
# Acessar frontend (já na pasta raiz do projeto) (frontend)
#Primeiro, abra um novo terminal para não desligar o backend

cd frontend

# Atualizar dependências
npm install

# Rodar em ambiente local localhost:3000
npm run dev

[http://127.0.0.1:3000/] <- url e porta padrão (Abrir para começar aplicação)
```

## Agradeço a oportunidade de participar do processo seletivo!
