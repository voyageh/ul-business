declare module "vue" {
  export interface GlobalComponents {
    UlMenu: typeof import("./es")["UlMenu"];
    UlMenuItem: typeof import("./es")["UlMenuItem"];
    UlForm: typeof import("./es")["UlForm"];
    UlTable: typeof import("./es")["UlTable"];
    UlUpload: typeof import("./es")["UlUpload"];
  }
}

export {};
