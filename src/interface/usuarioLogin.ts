export interface UsurioLogin {
    usuario: Usuario;
    token:   string;
}

export interface RegisterData{
    correo   :string,
    password :string,
    nombre   :string,
  
}

export interface Usuario {
    rol     : string;
    estado  : boolean;
    google  : boolean;
    nombre  : string;
    correo  : string;
    uid     : string;
    img?    : string
}


export interface LoginData{
    correo:string,
    password:string
}


// Generated by https://quicktype.io

export interface ErrorCreateUsers {
    errors: Error[];
}

export interface Error {
    value:    string;
    msg:      string;
    param:    string;
    location: string;
}
