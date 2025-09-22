import { CardPadrao, CardHeader, CardDescription, CardTitle, CardFooter, CardAction, CardContent } from "@/components/ui-padrao/card-padrao";
import { Button } from "@/components/ui/button";


export default function Header() {
    return (
        <CardPadrao>
            <CardHeader>
                <CardTitle>
                    Windel Sistemas LTDA
                </CardTitle>
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