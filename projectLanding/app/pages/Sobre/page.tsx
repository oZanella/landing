import { CardTitle, CardContent } from "@/components/ui-padrao/card-padrao";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui-padrao/avatar-padrao"

import { Separator } from "@/components/ui/separator";


export default function PageIndicacao() {
    return (

        <CardContent className="gap-4">
            <div className="flex flex-col gap-2 md:max-h-[65vh] md:overflow-auto scrollbar-thin">
                <div className="flex flex-col-reverse items-center gap-2 md:flex-row md:items-start">
                    <div className="flex-1 min-w-0 flex flex-col text-start gap-3 mb-2 md:text-left">
                        <CardTitle className="flex flex-col md:items-start mb-0 justify-center items-center md:gap-2">
                            Refêrencias do Projeto
                        </CardTitle>
                        <Separator className="my-4" />
                    </div>
                </div>
                <div className="flex flex-col-reverse items-center gap-2 md:flex-row md:items-start">
                    <div className="flex-1 min-w-0 flex flex-col text-start gap-3 mb-2 md:text-left">
                        <CardTitle className="flex flex-col md:items-start mb-0 justify-center items-center md:gap-2">
                            Conheça o Desenvolvedor
                        </CardTitle>
                        <Separator className="my-4" />
                    </div>
                </div>
            </div>
        </CardContent>
    );
}