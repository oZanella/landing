import { CardPadrao, CardHeader, CardDescription, CardTitle, CardFooter, CardAction } from "@/components/ui-padrao/card-padrao";


export default function Header() {
    return (
        <CardPadrao variant="elevated">
            <CardHeader>
                <CardTitle>
                    Windel Sistemas LTDA
                </CardTitle>
                <CardDescription>
                    Conheça o Windel em uma demonstração guiada por nossos consultores!
                </CardDescription>
                <CardAction>
                    Blog
                </CardAction>
                <CardAction>
                    Blog
                </CardAction>
                <CardFooter>
                    Sobre
                </CardFooter>
                <CardFooter>
                    Contato
                </CardFooter>
            </CardHeader>
        </CardPadrao>
    );
}