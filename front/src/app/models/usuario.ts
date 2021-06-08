export interface IUsuario {
    id?: number;
    nome?: string;
    email?: string;
}

export class Usuario implements IUsuario {
    constructor(
        public id?: number,
        public nome?: string,
        public email?: string
    ) { }
}