import { CardPadrao, CardHeader, CardDescription, CardTitle, CardFooter, CardAction, CardContent } from "@/components/ui-padrao/card-padrao";
import { Button } from "@/components/ui/button";


export default function Header() {
    return (
        <CardPadrao>
            <CardHeader>
                <div className="w-full flex flex-col items-center lg:items-start">
                    <CardTitle>
                        Windel Sistemas LTDA
                    </CardTitle>
                    <CardDescription>
                        Descrição do projeto sobre Card da Windel Sistemas
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
                    <Button>
                        sobre
                    </Button>
                    <Button>
                        sobre
                    </Button>

                </CardAction>
            </CardHeader>

        </CardPadrao>
    );
}