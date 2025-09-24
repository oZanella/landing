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
                    <CardDescription>

                    </CardDescription>
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
            <CardContent>
                <div>
                    <CardTitle>Contrato Windel</CardTitle>
                    <Avatar>
                        <AvatarImage src="/images/avatarDeveloper.svg" alt="Avatar User" />
                        <AvatarFallback>Icon</AvatarFallback>
                    </Avatar>
                </div>
            </CardContent>
        </CardPadrao>
    );
}