import { CardTitle, CardContent } from "@/components/ui-padrao/card-padrao";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui-padrao/avatar-padrao"

import { Separator } from "@/components/ui/separator";


export default function PageIndicacao() {
    return (

        <CardContent className="gap-4">
            <div className="flex flex-col gap-2">
                <div className="flex flex-col-reverse items-center gap-2 md:flex-row md:items-start">
                    <div className="flex-1 min-w-0 flex flex-col text-start gap-3 mb-2 md:text-left">
                        <CardTitle className="flex flex-col md:items-start mb-0 justify-center items-center md:gap-2">
                            Seja um Parceiro Windel
                        </CardTitle>
                        <Separator className="my-4" />
                    </div>
                </div>
                <p className="text-base leading-relaxed break-words">
                    Gostamos de parcerias onde todos ganham e crescem! Foi pensando nisto que criamos 3 modalidades onde nosso parceiro, além de ajudar seus clientes a alancar os resultados através do uso de um sistema de gestão.
                </p>
                <div className="flex flex-col gap-1 mt-4">
                    <p className="text-base leading-relaxed break-words font-bold">
                        Agora conheça algumas vantagens que oferecemos em nosso sistema!
                    </p>
                    <p className="text-base leading-relaxed break-words">
                        Na Windel, sabemos que administrar uma empresa exige organização, praticidade e ferramentas eficazes para manter tudo sob controle. Pensando nisso, desenvolvemos um sistema de gestão integrado que é fácil de usar, acessível e, acima de tudo, eficiente!
                    </p>
                    <p className="text-base leading-relaxed break-words mt-4 font-bold">
                        Veja algumas das funcionalidades que farão a diferença para o seu cliente:
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <p>
                        • <strong>Emissão de Documentos Fiscais com TEF/POS Integrado:</strong> Facilite as transações e garanta a conformidade fiscal de maneira simples.
                    </p>
                    <p>
                        • <strong>Controle de Cadastros e Financeiro:</strong> Gerencie clientes, fornecedores e todas as finanças da sua empresa com facilidade.
                    </p>
                    <p>
                        • <strong>Gestão de Compras e Vendas:</strong> Organize seus processos de compra e venda para obter melhores resultados.
                    </p>
                    <p>
                        • <strong>App Força de Vendas:</strong> Otimize as vendas externas com um aplicativo prático e intuitivo.
                    </p>
                    <p>
                        • <strong>Integração com E-commerce:</strong> Conecte seu sistema de gestão com sua loja online para uma operação fluida e sem complicações.
                    </p>
                    <p>
                        • <strong>Dashboard e Relatórios:</strong> Acompanhe o desempenho do seu negócio em tempo real com indicadores claros e precisos.
                    </p>
                    <p>
                        • <strong>Controle de Lotes e Manufatura:</strong> Mantenha total controle sobre a produção e o estoque de seus produtos.
                    </p>
                </div>
                <p className="text-base leading-relaxed break-words mt-4">
                    Nosso sistema foi desenvolvido para oferecer uma gestão integrada que simplifica seu dia a dia, independentemente do tamanho da sua empresa ou da empresa do seu cliente. Venha fazer parte deste time de parceiros e tenha benefícios exclusivos.
                </p>
            </div>
            <div>
                <Avatar className="w-full h-40 rounded-2xl p-1">
                    <AvatarImage src="/images/imgIndicacao.png" alt="Avatar User" />
                    <AvatarFallback>Icon</AvatarFallback>
                </Avatar>
            </div>
        </CardContent>

    );
}