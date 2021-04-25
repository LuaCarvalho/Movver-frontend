// Estes enums represetam todas as rotas da aplicação.
// Será mais facil selecionar as rotas nos componentes usando esses enums do que simples strings 

//Todas as rotas públicas
export enum authRoutes {
  AUTH_LOGIN = "Entrar",
  AUTH_REGISTER = "Registrar",
}

//As principais rotas privadas
export enum mainRoutes {
  MAIN = "Rotas Principais",

  HOME = "Inicio",
  PROFILE = "Perfil",
  FIND_DRIVER = "Encontrar motoristas",
}

//As subrotas
export enum secondaryRoutes {
  SECONDARY = "Rotas secundarias",

  FREIGHTAGE = "Frete",
  FREIGHTAGE_START = "Inicio do Frete",
  PROFILE_SETTINGS = "Configurações do Perfil"
}