import { CardPadrao, CardHeader, CardDescription, CardTitle, CardFooter, CardAction, CardContent } from "@/components/ui-padrao/card-padrao";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/themes-toggle";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { CardMiniPadrao } from "@/components/ui-padrao/card-mini-padrao";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui-padrao/avatar-padrao";


export default function PageBlog() {
    return (
        <CardPadrao>
            <CardHeader>
                <div className="w-full flex flex-col">
                    <CardTitle>
                        <a
                            href="/"
                        >
                            Windel Sistemas LTDA
                        </a>
                    </CardTitle>
                </div>
                <CardAction>
                    <Link href="/pageBlog">
                        <Button>Blog</Button>
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
            <CardContent className="flex flex-row mt-10 p-1 items-center justify-center">
                <div className="flex flex-row gap-4">
                    <CardMiniPadrao className="flex flex-row gap-2">
                        <CardHeader>
                            <div className="flex flex-row justify-center items-center">
                                <Avatar className="w-50 h-20 shrink-0 rounded-sm">
                                    <AvatarImage src="/images/picapenismaluco.png" alt="Avatar User" />
                                    <AvatarFallback>Icon Header Card</AvatarFallback>
                                </Avatar>
                            </div>
                        </CardHeader>
                    </CardMiniPadrao>
                    <CardMiniPadrao className="flex flex-row gap-2">
                        <CardHeader>
                            <div className="flex flex-row justify-center items-center">
                                <Avatar className="w-50 h-20 shrink-0 rounded-sm">
                                    <AvatarImage src="/images/picapenismaluco.png" alt="Avatar User" />
                                    <AvatarFallback>Icon Header Card</AvatarFallback>
                                </Avatar>
                            </div>
                        </CardHeader>
                    </CardMiniPadrao>
                    <CardMiniPadrao className="flex flex-row gap-2">
                        <CardHeader>
                            <div className="flex flex-row justify-center items-center">
                                <Avatar className="w-50 h-20 shrink-0 rounded-sm">
                                    <AvatarImage src="/images/picapenismaluco.png" alt="Avatar User" />
                                    <AvatarFallback>Icon Header Card</AvatarFallback>
                                </Avatar>
                            </div>
                        </CardHeader>
                    </CardMiniPadrao>
                </div>
            </CardContent >
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
        </CardPadrao >
    )
}