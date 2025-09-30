import { CardPadrao, CardHeader, CardTitle, CardFooter, CardAction, CardContent } from "@/components/ui-padrao/card-padrao";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/themes-toggle";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PageBlog() {
    return (
        <CardPadrao className="h-60 flex flex-col justify-end items-end">
            <CardHeader className="w-full">
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
            <CardContent className="flex flex-col md:mt-10 h-full">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col-reverse items-center gap-2 md:flex-row md:items-start">
                        <div className="flex-1 min-w-0 flex flex-col text-start gap-2 md:text-left">
                            <CardTitle className="flex flex-col items-start mb-8 md:gap-2">
                                Segue nossas últimas postagens!
                            </CardTitle>
                        </div>
                    </div>
                    <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>3 Sinais de Que Sua Empresa Precisa de um Sistema de Gestão</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <Link href={"https://www.windel.com.br/noticia/3-sinais-de-que-sua-empresa-precisa-de-um-sistema-de-gestao"}>Ter um sistema de gestão ERP completo deixa de ser apenas uma opção e passa a ser uma necessidade para manter a organização, evitar erros e sustentar o crescimento. veja os 3 principais sinais de que já é hora de investir em um sistema de gestão como o da Windel Sistemas.</Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Datas sazonais pro segundo semestre de 2025: por que empreendedores devem aproveitar essas oportunidades?</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <Link href={"https://www.windel.com.br/noticia/datas-sazonais-pro-segundo-semestre-de-2025-por-que-empreendedores-devem-aproveitar-essas-oportunidades"}>Para quem empreende, cada data comemorativa é uma chance de vender mais, fortalecer a marca e criar conexão com o público. Ao planejar ações com base no calendário sazonal, é possível antecipar campanhas, alinhar estoques e preparar ofertas personalizadas que despertam o interesse do consumidor no momento certo.
                                    Seja uma promoção no Dia do Consumidor, uma ação temática no Dia das Mães ou conteúdos especiais em datas como Black Friday, estar atento ao calendário ajuda a criar campanhas relevantes, gerar engajamento e alavancar as vendas.
                                    Mais do que vendas, essas datas permitem contar histórias, humanizar a marca e se destacar no mercado. Por isso, se você ainda não planejou o seu 2025 com base nas datas sazonais, agora é a hora de começar!
                                </Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Adeus, Cupom Fiscal em Papel! NFC-e em Santa Catarina é Obrigatória. Prepare-se!</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <Link href={"https://www.windel.com.br/noticia/adeus-cupom-fiscal-em-papel-nfc-e-em-santa-catarina-e-obrigatoria-prepare-se"}>Santa Catarina, 15 de junho de 2025 – O varejo catarinense se prepara para uma mudança significativa em 2025: a substituição definitiva do tradicional Emissor de Cupom Fiscal (ECF) e do Programa Aplicativo Fiscal (PAF-ECF) pela moderna Nota Fiscal de Consumidor Eletrônica (NFC-e), modelo 65. A medida, que visa modernizar a comunicação entre o contribuinte e o Fisco, trará mais agilidade, segurança e economia para os estabelecimentos comerciais.
                                    A nova regra, estabelecida pelo Ato DIAT nº 56/2024, determina um cronograma de adesão obrigatória que se estende ao longo do próximo ano. Para os consumidores, a principal mudança será a possibilidade de receber e consultar suas notas fiscais de forma eletrônica, diretamente no portal da Secretaria de Estado da Fazenda (SEF/SC), utilizando a chave de acesso ou o QR Code impresso no Documento Auxiliar da NFC-e (DANFE-NFC-e).
                                </Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Sistema de gestão na nuvem</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <Link href={"https://www.windel.com.br/noticia/sistema-de-gestao-na-nuvem"}>Os sistemas de gestão na nuvem (ERP Cloud) surgem como a solução ideal para quem busca mais controle, escalabilidade e autonomia operacional.
                                </Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>A jornada multicanal do cliente</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <Link href={"https://www.windel.com.br/noticia/a-jornada-multicanal-do-cliente"}>Como os Consumidores Navegam por Diversos Canais Antes da Compra
                                </Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger>A importância do controle de estoque para a saúde do seu negócio</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <Link href={"https://www.windel.com.br/noticia/a-importancia-do-controle-de-estoque-para-a-saude-do-seu-negocio"}>Santa Catarina, 15 de junho de 2025 – O varejo catarinense se prepara para uma mudança significativa em 2025: a substituição definitiva do tradicional Emissor de Cupom Fiscal (ECF) e do Programa Aplicativo Fiscal (PAF-ECF) pela moderna Nota Fiscal de Consumidor Eletrônica (NFC-e), modelo 65. A medida, que visa modernizar a comunicação entre o contribuinte e o Fisco, trará mais agilidade, segurança e economia para os estabelecimentos comerciais.
                                    A nova regra, estabelecida pelo Ato DIAT nº 56/2024, determina um cronograma de adesão obrigatória que se estende ao longo do próximo ano. Para os consumidores, a principal mudança será a possibilidade de receber e consultar suas notas fiscais de forma eletrônica, diretamente no portal da Secretaria de Estado da Fazenda (SEF/SC), utilizando a chave de acesso ou o QR Code impresso no Documento Auxiliar da NFC-e (DANFE-NFC-e).
                                </Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-7">
                            <AccordionTrigger>O que é Fluxo de Caixa e por que ele é essencial para a saúde financeira da sua empresa?</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <Link href={"https://www.windel.com.br/noticia/o-que-e-fluxo-de-caixa-e-por-que-ele-e-essencial-para-a-saude-financeira-da-sua-empresa"}>Manter o controle financeiro de uma empresa é um dos desafios mais importantes para garantir sua sustentabilidade e crescimento. Entenda mais sobre nesse artigo.</Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-8">
                            <AccordionTrigger>Sua empresa está sem sistema de gestão? Sua empresa está correndo riscos desnecessários.</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <Link href={"https://www.windel.com.br/noticia/sua-empresa-esta-sem-sistema-de-gestao-sua-empresa-esta-correndo-riscos-desnecessarios"}>Sem um ERP eficiente, sua empresa pode enfrentar desafios que impactam diretamente o crescimento e a lucratividade. Veja o que acontece quando você não tem a Windel ao seu lado.</Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-9">
                            <AccordionTrigger>Atenção contribuinte, a Fazenda define prazo para adesão à NFC-e em SC.</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <Link href={"https://www.windel.com.br/noticia/atencao-contribuinte-a-fazenda-define-prazo-para-adesao-a-nfc-e-em-sc"}>Em 23 de setembro de 2024 a Sefaz SC divulgou o ATO DIAT Nº 056/2024 onde os estabelecimentos usuários de Equipamento Emissor de Cupom Fiscal (ECF) e do Programa Aplicativo Fiscal PAF-ECF ficam obrigados à emissão de Nota Fiscal de Consumidor Eletrônica (NFC-e), em substituição ao cupom fiscal emitido por ECF.</Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-9">
                            <AccordionTrigger>Imposto de Renda 2024: Fique por dentro!</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <Link href={"https://www.windel.com.br/noticia/imposto-de-renda-2024-fique-por-dentro"}>A Receita Federal anunciou as novas regras e facilidades para a Declaração do Imposto de Renda de Pessoa Física (IRPF) de 2024, referente ao ano-base 2023.</Link>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </CardContent>
            <CardFooter className="w-full">
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
    );
}