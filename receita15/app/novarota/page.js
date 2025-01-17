import PAgina from "../diretorio2/page";
import { MariaPrea } from "./componentes";
import { AAAA } from "./novodiretorio/aaa";

export default function NovaRotaHome() {
    return (
        <div>
            <h1>Nova Rota, Nova Página</h1>
            <MariaPrea texto="MAria preá dinâmica" />
            <AAAA />
            <PAgina />
        </div>
    )
}