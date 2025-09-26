import { CardPadrao, CardHeader, CardDescription, CardTitle, CardFooter, CardAction, CardContent } from "@/components/ui-padrao/card-padrao";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui-padrao/avatar-padrao"
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/themes-toggle";


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
                                Um modelo de portfólio limpo, rápido e leve criado com Next.js, Vercel e Tailwind CSS.
                            </p>
                            <p className="text-base leading-relaxed break-words">
                                O Nextfolio tem tudo o que você precisa para um portfólio: blog MDX, SEO, RSS, feeds Atom e JSON, análises, incorporações de Tweets e YouTube, KaTeX e muito mais.
                            </p>
                            <p className="text-base leading-relaxed break-words">
                                O Nextfolio é de código aberto e totalmente personalizável, facilitando a adição de mais recursos.
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
                            Implante seu site Nextfolio com o Vercel em minutos e siga as instruções de configuração na postagem Introdução.                        </p>
                        <p className="leading-relaxed break-words">
                            Construído e mantido pela Sirius.
                        </p>
                    </div>
                </div>
            </CardContent>



        </CardPadrao>
    );
}