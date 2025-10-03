"use client";

import { CardTitle, CardContent } from "@/components/ui-padrao/card-padrao";
import { Separator } from "@/components/ui/separator";
import { CardPadraoMini } from "@/components/ui-padrao/card-padrao-mini";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { useTheme } from "next-themes";

export default function PageIndicacao() {

    const { theme } = useTheme();

    const tecnologiasUsadas = [
        {
            nome: 'NextJS',
            logoLight: '/images/nextjsThemeDark.svg',
            logoDark: '/images/nextjsThemeLight.svg'
        },
        {
            nome: 'React',
            logoLight: '/images/react.svg',
            logoDark: '/images/react.svg'
        },
        {
            nome: 'TypeScript',
            logoLight: '/images/typescript.svg',
            logoDark: '/images/typescript.svg'
        },
        {
            nome: 'Tailwind CSS',
            logoLight: '/images/tailwindcss.svg',
            logoDark: '/images/tailwindcss.svg'

        }
    ]

    return (

        <CardContent className="gap-4">
            <div className="flex flex-col gap-2 md:max-h-[65vh] md:overflow-auto scrollbar-thin">
                <div className="flex items-center gap-2 md:flex-row md:items-start">
                    <div className="flex-1 min-w-0 flex flex-col text-start gap-3 md:text-left">
                        <CardPadraoMini>
                            <CardContent>
                                <div className="flex flex-col md:max-h-[65vh] md:overflow-auto scrollbar-thin">
                                    <div className="flex items-center md:flex-row md:items-start">
                                        <div className="flex-1 flex flex-col text-start md:text-left mt-4 md:mt-0">
                                            <CardTitle className="flex flex-col justify-center items-center md:items-start md:justify-center md:gap-2">
                                                Arquitetura do Sistema
                                            </CardTitle>

                                            <Separator className="my-4" />

                                            <CardPadraoMini>
                                                <div className="flex flex-col md:flex-row gap-10 md:gap-2 m-2 p-2 md:p-4 items-center justify-between">
                                                    {
                                                        tecnologiasUsadas.map((item, index) => (
                                                            <div key={index} className="flex flex-col items-center justify-center">
                                                                <CardTitle className="flex flex-col md:items-start justify-center items-center md:gap-2">
                                                                    {item.nome}
                                                                </CardTitle>
                                                                <Avatar className="w-20 h-20 mt-5 ">
                                                                    <AvatarImage src={theme === "light" ? item.logoDark : item.logoLight} alt={item.nome} />
                                                                    <AvatarFallback></AvatarFallback>
                                                                </Avatar>
                                                            </div>
                                                        ))
                                                    }
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
                                <div className="flex flex-col md:max-h-[65vh] md:overflow-auto scrollbar-thin">
                                    <div className="flex items-center md:flex-row md:items-start">
                                        <div className="flex-1 flex flex-col text-start md:text-left mt-4 md:mt-0">
                                            <CardTitle className="flex flex-col justify-center items-center md:items-start md:justify-center md:gap-2">
                                                Arquitetura do Sistema
                                            </CardTitle>

                                            <Separator className="my-4" />

                                            <CardPadraoMini>
                                                <div className="flex flex-col md:flex-row gap-10 md:gap-2 m-2 p-2 md:p-4 items-center justify-between">
                                                    <div className="flex flex-col items-center justify-center">


                                                    </div>
                                                </div>
                                            </CardPadraoMini>

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