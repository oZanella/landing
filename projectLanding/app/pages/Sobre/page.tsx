import { CardTitle, CardContent } from "@/components/ui-padrao/card-padrao";

import { Separator } from "@/components/ui/separator";
import { CardPadraoMini } from "@/components/ui-padrao/card-padrao-mini";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";


export default function PageIndicacao() {
    return (

        <CardContent className="gap-4">
            <div className="flex flex-col gap-2 md:max-h-[65vh] md:overflow-auto scrollbar-thin">
                <div className="flex flex-col-reverse items-center gap-2 md:flex-row md:items-start">
                    <div className="flex-1 min-w-0 flex flex-col text-start gap-3 mb-2 md:text-left">
                        <CardPadraoMini>
                            <CardContent>
                                <div className="flex flex-col md:max-h-[65vh] md:overflow-auto scrollbar-thin">
                                    <div className="flex flex-col-reverse items-center md:flex-row md:items-start">
                                        <div className="flex-1 min-w-0 flex flex-col text-start gap-1 mb-2 md:text-left">
                                            <CardTitle className="flex flex-col md:items-start justify-center items-center md:gap-2">
                                                Informações sobre o Desenvolvimento
                                            </CardTitle>

                                            <Separator className="my-4" />

                                            <CardPadraoMini>
                                                <div className="flex flex-row gap-2 m-2 items-center justify-between">
                                                    <div className="flex flex-col items-center justify-center">
                                                        <CardTitle className="flex flex-col md:items-start justify-center items-center md:gap-2">
                                                            NextJS
                                                        </CardTitle>
                                                        <Avatar className="w-30 h-30">
                                                            <AvatarImage src="/images/logoW.svg" alt="Avatar User" />
                                                            <AvatarFallback></AvatarFallback>
                                                        </Avatar>
                                                    </div>
                                                    <div className="flex flex-col items-center justify-center">
                                                        <CardTitle className="flex flex-col md:items-start justify-center items-center md:gap-2">
                                                            Tailwind CSS
                                                        </CardTitle>
                                                        <Avatar className="w-30 h-30">
                                                            <AvatarImage src="/images/logoW.svg" alt="Avatar User" />
                                                            <AvatarFallback></AvatarFallback>
                                                        </Avatar>
                                                    </div>
                                                    <div className="flex flex-col items-center justify-center">
                                                        <CardTitle className="flex flex-col md:items-start justify-center items-center md:gap-2">
                                                            TypeScript
                                                        </CardTitle>
                                                        <Avatar className="w-30 h-30">
                                                            <AvatarImage src="/images/logoW.svg" alt="Avatar User" />
                                                            <AvatarFallback></AvatarFallback>
                                                        </Avatar>
                                                    </div>
                                                </div>
                                            </CardPadraoMini>

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
                    </div>
                </div>

                <div className="flex flex-col gap-1 mt-4">

                </div>

                <div className="flex flex-col gap-2">

                </div>
            </div>
        </CardContent>
    );
}