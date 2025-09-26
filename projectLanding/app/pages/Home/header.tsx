import { CardPadrao, CardHeader, CardDescription, CardTitle, CardFooter, CardAction, CardContent } from "@/components/ui-padrao/card-padrao";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui-padrao/avatar-padrao"
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/themes-toggle";
import { Facebook, Instagram, Linkedin } from "lucide-react";


export default function Header() {
    return (
        <CardPadrao>
            <CardHeader>
                <div className="w-full flex flex-col">
                    <CardTitle>
                        Windel Sistemas LTDA
                    </CardTitle>
                </div>
                <CardAction>
                    <Button>
                        Blog
                    </Button>
                    <Button>
                        Projeto
                    </Button>
                    <Button>
                        Fotos
                    </Button>
                    <ModeToggle />
                </CardAction>
            </CardHeader>
            <CardContent className="flex flex-col mt-10">
                <div className="flex flex-col">
                    <div className="flex flex-col-reverse items-center gap-2 md:flex-row md:items-start">
                        <div className="flex-1 min-w-0 flex flex-col text-start gap-2 mb-2 md:text-left">
                            <CardTitle className="flex flex-col items-start mb-8 md:gap-2">
                                Modelo de portfólio!
                            </CardTitle>
                            <p className="text-base leading-relaxed break-words">
                                Somos uma empresa desenvolvedora de softwares de gestão que desde 2001 vem crescendo e se especializando em ajudar a administrar os negócios dos nossos mais de 8 mil usuários de forma organizada e prática.
                            </p>
                            <p className="text-base leading-relaxed break-words">
                                Nossa gama de produtos se adapta a diferentes ramos de atividades e portes de empresa nos permitindo atender com excelência as micro, pequenas e médias empresas dos segmentos de indústria, comércio e serviços.
                            </p>
                            <p className="text-base leading-relaxed break-words">
                                A otimização dos processos e tarefas diárias é realizada através de um sistema de gestão formado por módulos integrados, utilizados conforme a necessidade do cliente.
                            </p>
                        </div>
                        <div className="flex-shrink-0 mx-auto md:mx-0 md:ml-6">
                            <Avatar className="w-40 h-40 md:w-40 md:h-40">
                                <AvatarImage src="/images/avatarDeveloper.svg" alt="Avatar User" />
                                <AvatarFallback>Icon</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                    <div className="flex flex-col text-start gap-2">
                        <p className="leading-relaxed break-words">
                            Desde sua abertura, a empresa vem aumentando sua equipe, que conta hoje com 13 unidades de negócios e mais de 100 profissionais atualizados constantemente na velocidade exigida pelo mercado, proporcionando a seus clientes, produtos e serviços com excelência e confiabilidade.                      </p>
                        <p className="leading-relaxed break-words">
                            Juntos somos mais fortes.
                        </p>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <div className="flex flex-row justify-between items-center w-full mt-6 text-sm text-[#1C1C1C] dark:text-[#D4D4D4]">
                    <p>© 2025 Windel Web</p>
                    <div className="flex gap-4 text-[#1C1C1C] dark:text-[#D4D4D4]">
                        <a href="https://www.instagram.com/windelsistemas/#" target="_blank" rel="noopener noreferrer">
                            <Instagram className="cursor-pointer hover:scale-110 transition" />
                        </a>
                        <a href="https://www.facebook.com/windelsistemas" target="_blank" rel="noopener noreferrer">
                            <Facebook className="cursor-pointer hover:scale-110 transition" />
                        </a>
                        <a href="https://www.linkedin.com/company/windel-sistemas/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="cursor-pointer hover:scale-110 transition" />
                        </a>
                    </div>
                </div>
            </CardFooter>

        </CardPadrao>
    );
}