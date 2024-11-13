import Usuario from "@/core/usuario/model/Usuario";
import TerminalUtil from "../util/TerminalUtil";
import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario";

export default async function registrarUsuario() {
    TerminalUtil.titulo("Registrar Usuário")

    const id = await TerminalUtil.campoRequerido('Id: ', '1')

    const nome = await TerminalUtil.campoRequerido('Nome: ', 'Clovis Gargione Rodrigues')

    const email = await TerminalUtil.campoRequerido('Email: ', 'clovis.gargione@gmail.com')

    const senha = await TerminalUtil.campoRequerido('Senha: ', '123456')

    const usuario: Usuario = {id, nome, email, senha}

    await new RegistrarUsuario().executar(usuario)

    TerminalUtil.sucesso('Usuário registrado com sucesso')

    await TerminalUtil.esperarEnter()
}