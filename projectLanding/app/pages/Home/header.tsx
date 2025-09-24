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
                        Project
                    </Button>
                    <Button>
                        Photos
                    </Button>
                    <ModeToggle />
                </CardAction>
            </CardHeader>
            <CardContent className="flex flex-col mt-15">
                <div className="flex flex-col gap-2">
                    <CardTitle className="items-start" >Contrato Windel</CardTitle>
                    <p>
                        A clean, fast, and lightweight portfolio template built with Next.js, Vercel, and Tailwind CSS.
                        Nextfolio has everything you need for a portfolio: MDX blog, SEO, RSS, Atom & JSON feeds, analytics, Tweet & YouTube embeds, KaTeX and more.
                        Nextfolio is open-source and fully customizable, making it easy to add more features.
                        Deploy your Nextfolio site with Vercel in minutes and follow the set up instructions in the Getting Started post.
                        Built and maintained by Sirius.
                    </p>
                </div>
                <div>
                    <Avatar>
                        <AvatarImage src="/images/avatarDeveloper.svg" alt="Avatar User" />
                        <AvatarFallback>Icon</AvatarFallback>
                    </Avatar>
                </div>
            </CardContent>
        </CardPadrao>
    );
}