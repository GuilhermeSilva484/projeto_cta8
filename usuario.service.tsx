import axios from "axios";


export const axionsInstance = axios.create({
  baseURL: "http://localhost:3000",
});

export class usuarioService {

    listarUsuarios() {
        return axionsInstance.get("/usuarios");

        }
    }
