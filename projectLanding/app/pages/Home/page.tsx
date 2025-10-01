'use client'

import { CardPadrao, CardHeader, CardTitle, CardFooter, CardAction, CardContent } from "@/components/ui-padrao/card-padrao";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui-padrao/avatar-padrao"
import { ModeToggle } from "@/components/ui/themes-toggle";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import PageIndicacao from "../Indicacao/page";
import { Button } from "@/components/ui/button";
import PageBlog from "../Blog/page";


export default function PageHome() {

    const [tab, setTab] = useState<'pagehome' | 'pageblog' | 'pageindicacao' | 'pagefotos'>('pagehome')

    return (
        <CardPadrao>
            <CardHeader>
                <div className="flex flex-col w-full items-center justify-center md:flex-row md:items-start md:justify-between">
                    <CardTitle>
                        <Button variant="ghost" onClick={() => setTab('pagehome')}>
                            Windel Sistemas LTDA
                        </Button>
                    </CardTitle>
                </div>
                <Tabs defaultValue="account">
                    <TabsList>
                        <TabsTrigger onClick={() => setTab('pageblog')} value={"pageblog"}>Blog</TabsTrigger>
                        <TabsTrigger onClick={() => setTab('pageindicacao')} value={"pageindicacao"}>Indicação Premiada</TabsTrigger>
                        <TabsTrigger onClick={() => setTab('pagefotos')} value={"pagefotos"}>Fotos</TabsTrigger>
                        <ModeToggle />
                    </TabsList>
                </Tabs>
            </CardHeader>

            {tab === 'pagehome' && <CardContent >
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col-reverse items-center gap-2 md:flex-row md:items-start">
                        <div className="flex-1 min-w-0 flex flex-col text-start gap-3 mb-2 md:text-left">
                            <CardTitle className="flex flex-col md:items-start mb-0 justify-center items-center md:gap-2">
                                Conheça a nossa história da Windel
                            </CardTitle>
                            <Separator className="my-4" />
                            <p className="text-base leading-relaxed break-words">
                                Somos uma empresa desenvolvedora de softwares de gestão que desde 2001 vem crescendo e se especializando em ajudar a administrar os negócios dos nossos mais de 8 mil usuários de forma organizada e prática.
                            </p>
                        </div>
                        <div className="flex-shrink-0 md:mx-0 md:ml-6">
                            <Avatar className="w-40 h-40">
                                <AvatarImage src="/images/logoW.svg" alt="Avatar User" />
                                <AvatarFallback>Icon</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                    <p className="text-base leading-relaxed break-words">
                        Nossa gama de produtos se adapta a diferentes ramos de atividades e portes de empresa nos permitindo atender com excelência as micro, pequenas e médias empresas dos segmentos de indústria, comércio e serviços.
                    </p>
                    <p className="text-base leading-relaxed break-words">
                        A otimização dos processos e tarefas diárias é realizada através de um sistema de gestão formado por módulos integrados, utilizados conforme a necessidade do cliente.
                    </p>
                    <div className="flex flex-col text-start gap-2">
                        <p className="leading-relaxed break-words">
                            Desde sua abertura, a empresa vem aumentando sua equipe, que conta hoje com 13 unidades de negócios e mais de 100 profissionais atualizados constantemente na velocidade exigida pelo mercado, proporcionando a seus clientes, produtos e serviços com excelência e confiabilidade.                      </p>
                        <p className="leading-relaxed break-words font-bold">
                            Juntos somos mais fortes.
                        </p>
                    </div>
                </div>
            </CardContent>}

            {tab === 'pageindicacao' && <PageIndicacao />}

            {tab === 'pageblog' && <PageBlog />}

            <CardFooter>
                <div className="flex flex-row justify-between items-center w-full mt-6 text-sm text-[#1C1C1C] dark:text-[#D4D4D4] ">
                    <p>© 2025 Windel Web</p>
                    <div className="flex gap-4 text-[#1C1C1C] dark:text-[#D4D4D4]">
                        <Link href="https://www.instagram.com/windelsistemas/#" target="_blank" rel="noopener noreferrer">
                            <Instagram className="cursor-pointer hover:scale-110 transition" />
                        </Link>
                        <Link href="https://www.facebook.com/windelsistemas" target="_blank" rel="noopener noreferrer">
                            <Facebook className="cursor-pointer hover:scale-110 transition" />
                        </Link>
                        <Link href="https://www.linkedin.com/company/windel-sistemas/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="cursor-pointer hover:scale-110 transition" />
                        </Link>
                    </div>
                </div>
            </CardFooter>
        </CardPadrao >
    );
}