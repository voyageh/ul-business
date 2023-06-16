declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    UlMenu: typeof import(".")["UlMenu"];
    UlMenuItem: typeof import(".")["UlMenuItem"];
    UlForm: typeof import(".")["UlForm"];
    UlTable: typeof import(".")["UlTable"];
    UlUpload: typeof import(".")["UlUpload"];
  }
}

export {};
