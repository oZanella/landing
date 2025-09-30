import { CardPadrao, CardHeader, CardTitle, CardFooter, CardAction, CardContent } from "@/components/ui-padrao/card-padrao";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui-padrao/avatar-padrao"
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/themes-toggle";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";


export default function PageProjeto() {
    return (
        <CardPadrao>
            <CardHeader>
                <div className="flex flex-col w-full items-center justify-center md:flex-row md:items-start md:justify-between">
                    <CardTitle>
                        <Link href="/">
                            Windel Sistemas LTDA
                        </Link>
                    </CardTitle>
                </div>
                <CardAction>
                    <Link href="/pageBlog">
                        <Button >Blog</Button>
                    </Link>
                    <Link href="/pageProjeto">
                        <Button>
                            Projeto
                        </Button>
                    </Link>
                    <Link href="/pageFotos">
                        <Button>
                            Fotos
                        </Button>
                    </Link>
                    <ModeToggle />
                </CardAction>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col-reverse items-center gap-2 md:flex-row md:items-start">
                        <div className="flex-1 min-w-0 flex flex-col text-start gap-3 mb-2 md:text-left">
                            <CardTitle className="flex flex-col items-start mb-0 md:gap-2">
                                Quem é o autor do projeto?
                            </CardTitle>
                            <Separator className="my-4" />
                            <p className="text-base leading-relaxed break-words">
                                Biografia do autor
                            </p>
                        </div>
                        <div className="flex-shrink-0 md:mx-0 md:ml-6">
                            <Avatar className="w-40 h-40 mb-10 border-1 border-transparent dark:border-white rounded-full md:mb-0">
                                <AvatarImage src="/images/fotoPerfil.png" alt="Avatar User" />
                                <AvatarFallback>Icon</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>

                </div>
            </CardContent>
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