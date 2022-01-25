import {Cliente} from "./Cliente.js";
import {Diretor} from "./Funcionarios/Diretor.js";
import {Gerente} from "./Funcionarios/Gerente.js";
import {SistemaAutenticacao} from "./Funcionarios/SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Maria", 5000, 12345678901);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Laís", 12345678902, "456")

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);