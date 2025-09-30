import { CardPadrao, CardHeader, CardTitle, CardFooter, CardAction, CardContent } from "@/components/ui-padrao/card-padrao";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/themes-toggle";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Page() {
    return (
        <CardPadrao className="h-60 flex flex-col justify-end items-end">
            <CardHeader className="w-full">
                <div className="w-full flex md:flex-col ">
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
                                <p>Ter um sistema de gestão ERP completo deixa de ser apenas uma opção e passa a ser uma necessidade para manter a organização, evitar erros e sustentar o crescimento. veja os 3 principais sinais de que já é hora de investir em um sistema de gestão como o da Windel Sistemas.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Datas sazonais pro segundo semestre de 2025: por que empreendedores devem aproveitar essas oportunidades?</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>Para quem empreende, cada data comemorativa é uma chance de vender mais, fortalecer a marca e criar conexão com o público. Ao planejar ações com base no calendário sazonal, é possível antecipar campanhas, alinhar estoques e preparar ofertas personalizadas que despertam o interesse do consumidor no momento certo.
                                    Seja uma promoção no Dia do Consumidor, uma ação temática no Dia das Mães ou conteúdos especiais em datas como Black Friday, estar atento ao calendário ajuda a criar campanhas relevantes, gerar engajamento e alavancar as vendas.
                                    Mais do que vendas, essas datas permitem contar histórias, humanizar a marca e se destacar no mercado. Por isso, se você ainda não planejou o seu 2025 com base nas datas sazonais, agora é a hora de começar!
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Adeus, Cupom Fiscal em Papel! NFC-e em Santa Catarina é Obrigatória. Prepare-se!</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>Santa Catarina, 15 de junho de 2025 – O varejo catarinense se prepara para uma mudança significativa em 2025: a substituição definitiva do tradicional Emissor de Cupom Fiscal (ECF) e do Programa Aplicativo Fiscal (PAF-ECF) pela moderna Nota Fiscal de Consumidor Eletrônica (NFC-e), modelo 65. A medida, que visa modernizar a comunicação entre o contribuinte e o Fisco, trará mais agilidade, segurança e economia para os estabelecimentos comerciais.
                                    A nova regra, estabelecida pelo Ato DIAT nº 56/2024, determina um cronograma de adesão obrigatória que se estende ao longo do próximo ano. Para os consumidores, a principal mudança será a possibilidade de receber e consultar suas notas fiscais de forma eletrônica, diretamente no portal da Secretaria de Estado da Fazenda (SEF/SC), utilizando a chave de acesso ou o QR Code impresso no Documento Auxiliar da NFC-e (DANFE-NFC-e).
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Adeus, Cupom Fiscal em Papel! NFC-e em Santa Catarina é Obrigatória. Prepare-se!</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>Santa Catarina, 15 de junho de 2025 – O varejo catarinense se prepara para uma mudança significativa em 2025: a substituição definitiva do tradicional Emissor de Cupom Fiscal (ECF) e do Programa Aplicativo Fiscal (PAF-ECF) pela moderna Nota Fiscal de Consumidor Eletrônica (NFC-e), modelo 65. A medida, que visa modernizar a comunicação entre o contribuinte e o Fisco, trará mais agilidade, segurança e economia para os estabelecimentos comerciais.
                                    A nova regra, estabelecida pelo Ato DIAT nº 56/2024, determina um cronograma de adesão obrigatória que se estende ao longo do próximo ano. Para os consumidores, a principal mudança será a possibilidade de receber e consultar suas notas fiscais de forma eletrônica, diretamente no portal da Secretaria de Estado da Fazenda (SEF/SC), utilizando a chave de acesso ou o QR Code impresso no Documento Auxiliar da NFC-e (DANFE-NFC-e).
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>Adeus, Cupom Fiscal em Papel! NFC-e em Santa Catarina é Obrigatória. Prepare-se!</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>Santa Catarina, 15 de junho de 2025 – O varejo catarinense se prepara para uma mudança significativa em 2025: a substituição definitiva do tradicional Emissor de Cupom Fiscal (ECF) e do Programa Aplicativo Fiscal (PAF-ECF) pela moderna Nota Fiscal de Consumidor Eletrônica (NFC-e), modelo 65. A medida, que visa modernizar a comunicação entre o contribuinte e o Fisco, trará mais agilidade, segurança e economia para os estabelecimentos comerciais.
                                    A nova regra, estabelecida pelo Ato DIAT nº 56/2024, determina um cronograma de adesão obrigatória que se estende ao longo do próximo ano. Para os consumidores, a principal mudança será a possibilidade de receber e consultar suas notas fiscais de forma eletrônica, diretamente no portal da Secretaria de Estado da Fazenda (SEF/SC), utilizando a chave de acesso ou o QR Code impresso no Documento Auxiliar da NFC-e (DANFE-NFC-e).
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger>Adeus, Cupom Fiscal em Papel! NFC-e em Santa Catarina é Obrigatória. Prepare-se!</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>Santa Catarina, 15 de junho de 2025 – O varejo catarinense se prepara para uma mudança significativa em 2025: a substituição definitiva do tradicional Emissor de Cupom Fiscal (ECF) e do Programa Aplicativo Fiscal (PAF-ECF) pela moderna Nota Fiscal de Consumidor Eletrônica (NFC-e), modelo 65. A medida, que visa modernizar a comunicação entre o contribuinte e o Fisco, trará mais agilidade, segurança e economia para os estabelecimentos comerciais.
                                    A nova regra, estabelecida pelo Ato DIAT nº 56/2024, determina um cronograma de adesão obrigatória que se estende ao longo do próximo ano. Para os consumidores, a principal mudança será a possibilidade de receber e consultar suas notas fiscais de forma eletrônica, diretamente no portal da Secretaria de Estado da Fazenda (SEF/SC), utilizando a chave de acesso ou o QR Code impresso no Documento Auxiliar da NFC-e (DANFE-NFC-e).
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-7">
                            <AccordionTrigger>Adeus, Cupom Fiscal em Papel! NFC-e em Santa Catarina é Obrigatória. Prepare-se!</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>Santa Catarina, 15 de junho de 2025 – O varejo catarinense se prepara para uma mudança significativa em 2025: a substituição definitiva do tradicional Emissor de Cupom Fiscal (ECF) e do Programa Aplicativo Fiscal (PAF-ECF) pela moderna Nota Fiscal de Consumidor Eletrônica (NFC-e), modelo 65. A medida, que visa modernizar a comunicação entre o contribuinte e o Fisco, trará mais agilidade, segurança e economia para os estabelecimentos comerciais.
                                    A nova regra, estabelecida pelo Ato DIAT nº 56/2024, determina um cronograma de adesão obrigatória que se estende ao longo do próximo ano. Para os consumidores, a principal mudança será a possibilidade de receber e consultar suas notas fiscais de forma eletrônica, diretamente no portal da Secretaria de Estado da Fazenda (SEF/SC), utilizando a chave de acesso ou o QR Code impresso no Documento Auxiliar da NFC-e (DANFE-NFC-e).
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-8">
                            <AccordionTrigger>Adeus, Cupom Fiscal em Papel! NFC-e em Santa Catarina é Obrigatória. Prepare-se!</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>Santa Catarina, 15 de junho de 2025 – O varejo catarinense se prepara para uma mudança significativa em 2025: a substituição definitiva do tradicional Emissor de Cupom Fiscal (ECF) e do Programa Aplicativo Fiscal (PAF-ECF) pela moderna Nota Fiscal de Consumidor Eletrônica (NFC-e), modelo 65. A medida, que visa modernizar a comunicação entre o contribuinte e o Fisco, trará mais agilidade, segurança e economia para os estabelecimentos comerciais.
                                    A nova regra, estabelecida pelo Ato DIAT nº 56/2024, determina um cronograma de adesão obrigatória que se estende ao longo do próximo ano. Para os consumidores, a principal mudança será a possibilidade de receber e consultar suas notas fiscais de forma eletrônica, diretamente no portal da Secretaria de Estado da Fazenda (SEF/SC), utilizando a chave de acesso ou o QR Code impresso no Documento Auxiliar da NFC-e (DANFE-NFC-e).
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-9">
                            <AccordionTrigger>Adeus, Cupom Fiscal em Papel! NFC-e em Santa Catarina é Obrigatória. Prepare-se!</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>Santa Catarina, 15 de junho de 2025 – O varejo catarinense se prepara para uma mudança significativa em 2025: a substituição definitiva do tradicional Emissor de Cupom Fiscal (ECF) e do Programa Aplicativo Fiscal (PAF-ECF) pela moderna Nota Fiscal de Consumidor Eletrônica (NFC-e), modelo 65. A medida, que visa modernizar a comunicação entre o contribuinte e o Fisco, trará mais agilidade, segurança e economia para os estabelecimentos comerciais.
                                    A nova regra, estabelecida pelo Ato DIAT nº 56/2024, determina um cronograma de adesão obrigatória que se estende ao longo do próximo ano. Para os consumidores, a principal mudança será a possibilidade de receber e consultar suas notas fiscais de forma eletrônica, diretamente no portal da Secretaria de Estado da Fazenda (SEF/SC), utilizando a chave de acesso ou o QR Code impresso no Documento Auxiliar da NFC-e (DANFE-NFC-e).
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-10">
                            <AccordionTrigger>Adeus, Cupom Fiscal em Papel! NFC-e em Santa Catarina é Obrigatória. Prepare-se!</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>Santa Catarina, 15 de junho de 2025 – O varejo catarinense se prepara para uma mudança significativa em 2025: a substituição definitiva do tradicional Emissor de Cupom Fiscal (ECF) e do Programa Aplicativo Fiscal (PAF-ECF) pela moderna Nota Fiscal de Consumidor Eletrônica (NFC-e), modelo 65. A medida, que visa modernizar a comunicação entre o contribuinte e o Fisco, trará mais agilidade, segurança e economia para os estabelecimentos comerciais.
                                    A nova regra, estabelecida pelo Ato DIAT nº 56/2024, determina um cronograma de adesão obrigatória que se estende ao longo do próximo ano. Para os consumidores, a principal mudança será a possibilidade de receber e consultar suas notas fiscais de forma eletrônica, diretamente no portal da Secretaria de Estado da Fazenda (SEF/SC), utilizando a chave de acesso ou o QR Code impresso no Documento Auxiliar da NFC-e (DANFE-NFC-e).
                                </p>
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