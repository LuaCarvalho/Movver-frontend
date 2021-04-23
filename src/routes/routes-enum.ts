// Estes enums represetam todas as rotas da aplicação.
// Será mais facil selecionar as rotas nos componentes usando esses enums do que simples strings 

//Todas as rotas públicas
export enum authRoutes {
  AUTH_LOGIN = "Login",
  AUTH_REGISTER = "Register",
}

//As principais rotas privadas
export enum mainRoutes {
  MAIN = "Main",
  
  HOME = "Home",
  PROFILE  ="Profile",
  FIND_DRIVER = "Find driver",
}

//As subrotas
export enum secondaryRoutes {
  SECONDARY = "Secondary",

  FREIGHTAGE = "Freightage",
  FREIGHTAGE_START = "Freightage start",
  PROFILE_SETTINGS = "Profile settings"
}