
import { CardPadraoMini, CardContent, CardTitle } from "@/components/ui-padrao/card-padrao-mini";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";



export default function PageIndicacao() {
    return (

        <CardContent className="gap-4">
            <CardPadraoMini>
                <CardContent>
                    <div className="flex flex-col gap-2 md:max-h-[65vh] md:overflow-auto scrollbar-thin">
                        <div className="flex flex-col-reverse items-center gap-2 md:flex-row md:items-start">
                            <div className="flex-1 min-w-0 flex flex-col text-start gap-1 mb-2 md:text-left">
                                <CardTitle className="flex flex-col md:items-start mb-0 justify-center items-center md:gap-2">
                                    Desenvolvedor do Projeto
                                </CardTitle>
                                <Separator className="my-4" />
                                <p className="font-bold">Todo o conteúdo, incluindo informações e imagens, foi obtido a partir do site oficial e utilizado para fins de referência.</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </CardPadraoMini>

            <Separator className="my-4" />

            <CardPadraoMini>
                <CardContent>
                    <div className="flex flex-col gap-2 md:max-h-[65vh] md:overflow-auto scrollbar-thin">
                        <div className="flex flex-col-reverse items-center gap-2 md:flex-row md:items-start">
                            <div className="flex-1 min-w-0 flex flex-col text-start gap-1 mb-2 md:text-left">
                                <CardTitle className="flex flex-col md:items-start mb-0 justify-center items-center md:gap-2">
                                    Linguagens utilizadas no Projeto
                                </CardTitle>
                                <Separator className="my-4" />
                                <p className="font-bold">Todo o conteúdo, incluindo informações e imagens, foi obtido a partir do site oficial e utilizado para fins de referência.</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </CardPadraoMini>

            <Separator className="my-4" />

            <CardPadraoMini>
                <CardContent>
                    <div className="flex flex-col gap-2 md:max-h-[65vh] md:overflow-auto scrollbar-thin">
                        <div className="flex flex-col-reverse items-center gap-2 md:flex-row md:items-start">
                            <div className="flex-1 min-w-0 flex flex-col text-start gap-1 mb-2 md:text-left">
                                <CardTitle className="flex flex-col md:items-start mb-0 justify-center items-center md:gap-2">
                                    Refêrencias do Projeto
                                </CardTitle>
                                <Separator className="my-4" />
                                <p className="font-bold">Conteúdo e imagens fornecidos pelo site oficial, utilizados apenas como referência.</p>
                                <Link href={'https://www.windel.com.br/'}>https://www.windel.com.br</Link>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </CardPadraoMini>
        </CardContent >
    );
}