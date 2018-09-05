---
title: "/api/region/{$id}"
date: 2017-09-14T15:44:44-03:00
layout: none
type: exemplos-api
draft: false
---

```
{
  "region": {
    "name": "Butantã",
    "indicators": [
      {
        "value": "0.37",
        "year": 2016,
        "id": 4,
        "name": "Unidades Básicas de Saúde",
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/unidades-basicas-de-saude",
        "sources": [
          "IBGE (Instituto Brasileiro de Geografia e Estatísitca)",
          "SMS (Secretaria Municipal da Saúde)/CEInfo (Coordenadoria de Epidemiologia e Informação)"
        ],
        "formula": "Número total de unidades básicas de atendimento em saúde / População total *10000",
        "explanation": "Número de unidades básicas públicas de atendimento em saúde, por dez mil habitantes."
      },
      {
        "sources": [
          "SMS (Secretaria Municipal de Saúde)/SINASC (Sistema de Informações de Nascidos Vivos)"
        ],
        "formula": "Número total de nascidos vivos cujas mães fizeram menos de 7 consultas pré-natal / Número total de nascidos vivos *100",
        "explanation": "Percentual de nascidos vivos cujas mães fizeram menos de 7 consultas pré-natal.",
        "id": 113,
        "name": "Pré-natal insuficiente",
        "value": "13.48",
        "year": 2016,
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/pre-natal-insuficiente"
      },
      {
        "id": 132,
        "name": "Acervo de livros infanto-juvenis",
        "year": 2016,
        "value": "0.95",
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/acervo-de-livros-infanto-juvenis",
        "formula": "Número de livros infanto-juvenis disponíveis em acervos de bibliotecas / População na faixa etária de 7 a 14 anos",
        "sources": [
          "Relatório enviado pela Docs&Bytes a CSMB baseado na quantidade de acervo que compoem as categorias I e F"
        ],
        "explanation": "Número de livros infanto-juvenis disponíveis em acervos de bibliotecas municipais por habitante na faixa etária de 7 a 14 anos."
      },
      {
        "explanation": "Número de empregos por 10 mil habitantes.",
        "formula": "Número total de empregos / População total *10000",
        "sources": [
          "IBGE (Instituto Brasileiro de Geografia e Estatística) - Projeção Populacional",
          "Ministério do Trabalho e Emprego/Rais (Relação Anual de Informações Sociais)"
        ],
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/empregos",
        "id": 258,
        "name": "Empregos",
        "year": 2014,
        "value": "11802.68"
      },
      {
        "formula": "Número total de óbitos por causas mal definidas *100 / Número total de óbitos",
        "sources": [
          "SMS (Secretaria Municipal de Saúde)/SIM (Sistema de Informação sobre Mortalidade)/Pro-Aim (Programa de Aprimoramento das Informações de Mortalidade no Município de São Paulo)//CEInfo (Coordenação de Epidemiologia e Informação)"
        ],
        "explanation": "Porcentagem de óbitos por causas mal definidas na sua declaração.",
        "name": "Mortalidade por causas mal definidas",
        "id": 268,
        "year": 2016,
        "value": "0.61",
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/mortalidade-por-causas-mal-definidas"
      },
      {
        "sources": [
          "IBGE (Instituto Brasileiro de Geografia e Estatísitca)",
          "SMIT (Secretaria Municipal de Inovação e Tecnologia)"
        ],
        "formula": "Número total de telecentros / População total *10000",
        "explanation": "Número de telecentros públicos, por 10 mil habitantes.",
        "value": "0.19",
        "year": 2016,
        "name": "Telecentros",
        "id": 300,
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/telecentros"
      },
      {
        "formula": "Número total de equipamentos esportivos públicos / População total *10000",
        "sources": [
          "IBGE (Instituto Brasileiro de Geografia e Estatísitca)",
          "SEME (Secretaria Municipal de Esportes, Lazer e Recreação)"
        ],
        "explanation": "Número de equipamentos públicos municipais de esporte para cada 10 mil habitantes.",
        "year": 2016,
        "value": "0.37",
        "name": "Equipamentos esportivos",
        "id": 7,
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/equipamentos-esportivos"
      },
      {
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/leitos-hospitalares",
        "id": 5,
        "name": "Leitos hospitalares",
        "value": "8.76",
        "year": 2016,
        "explanation": "Proporção de leitos hospitalares públicos e privados disponíveis por mil habitantes.",
        "sources": [
          "IBGE (Instituto Brasileiro de Geografia e Estatísitca)",
          "CNES (Cadastro Nacional dos Estabelecimentos de Saúde)/SMS (Secretaria Municipal da Saúde)/SES (Secretaria de Estado da Saúde)"
        ],
        "formula": "Número total de leitos hospitalares / População total *1000"
      },
      {
        "id": 166,
        "name": "Mortes com bicicleta",
        "year": 2015,
        "value": "0.00",
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/mortes-com-bicicleta",
        "formula": "Total de mortes com bicicleta / População total *10000",
        "sources": [
          "IBGE (Instituto Brasileiro de Geografia e Estatísitca)",
          "SMS (Secretaria Municipal de Saúde)/SIM (Sistema de Informação sobre Mortalidade)/CET (Companhia de Engenharia de Trafego)/SMT (Secretaria Municipal de Mobilidade e Transportes)/SFMSP (Serviço Funerário do Município de São Paulo)"
        ],
        "explanation": "Número de mortes de ocupantes de bicicleta, por 10 mil habitantes."
      },
      {
        "id": 282,
        "name": "População em situação de rua - acolhidos*",
        "year": 2015,
        "value": "0.00",
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/populacao-em-situacao-de-rua-acolhidos",
        "formula": "Número total da população em situação de rua que foi acolhida / População total *100",
        "sources": [
          "SMADS/Fipe (Fundação Instituto de Pesquisas Econômicas)/Censo da População em Situação de Rua da Cidade de São Paulo 2015",
          "IBGE (Instituto Brasileiro de Geografia e Estatísitca)"
        ],
        "explanation": "Porcentagem da população em situação de rua em cada região sobre o total da cidade."
      },
      {
        "year": 2014,
        "value": "0.00",
        "id": 115,
        "name": "Mortalidade materna",
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/mortalidade-materna",
        "formula": "Número total de óbitos por causas maternas / Número total de nascidos vivos *10000",
        "sources": [
          "SMS (Secretaria Municipal de Saúde)/SINASC (Sistema de Informações de Nascidos Vivos)",
          "SMS (Secretaria Municipal de Saúde)/SIM (Sistema de Informação sobre Mortalidade)/CET (Companhia de Engenharia de Trafego)/SMT (Secretaria Municipal de Mobilidade e Transportes)/SFMSP (Serviço Funerário do Município de São Paulo)"
        ],
        "explanation": "Proporção de óbitos femininos por causas maternas, em relação aos nascidos vivos de mães residentes no município, por dez mil nascidos vivos."
      },
      {
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/mortes-no-transito",
        "year": 2015,
        "value": "12.98",
        "name": "Mortes no trânsito",
        "id": 76,
        "explanation": "Número de mortes em acidentes de trânsito, por 100 mil habitantes.",
        "formula": "Número de mortes em acidentes de trânsito ÷ População total × 100000",
        "sources": [
          "IBGE (Instituto Brasileiro de Geografia e Estatísitca)",
          "SMS (Secretaria Municipal de Saúde)/SIM (Sistema de Informação sobre Mortalidade)/CET (Companhia de Engenharia de Trafego)/SMT (Secretaria Municipal de Mobilidade e Transportes)/SFMSP (Serviço Funerário do Município de São Paulo)"
        ]
      },
      {
        "year": 2016,
        "value": "0.40",
        "name": "Atendimento nas pré-escolas municipais",
        "id": 242,
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/atendimento-nas-pre-escolas-municipais",
        "formula": "Número total de matrículas em pré-escolas municipais / População na faixa etária de 4 a 6 anos",
        "sources": [
          "SME (Secretaria Municipal de Educação)/Centro de Informações Educacionais"
        ],
        "explanation": "Número de matrículas nas pré-escolas (EMEIs) por habitante na faixa etária de 4 a 6 anos."
      },
      {
        "formula": "Número total de salas de cinema / População total *10000",
        "sources": [
          "IBGE (Instituto Brasileiro de Geografia e Estatísitca)",
          "Guia da Folha de São Paulo"
        ],
        "explanation": "Número de salas de cinema, municipais, estaduais, federais e particulares, por 10 mil habitantes.",
        "year": 2016,
        "value": "0.19",
        "id": 247,
        "name": "Cinemas",
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/cinemas"
      },
      {
        "explanation": "Número de mortes por doenças do aparelho circulatório, por dez mil habitantes. As principais causas de morte relacionadas ao aparelho circulatório são o AVC (acidente vascular cerebral), também conhecido como derrame, doença isquêmica do coração e infarto do miocárdio.",
        "formula": "Número total de óbitos por doenças do aparelho circulatório / População total *10000",
        "sources": [
          "IBGE (Instituto Brasileiro de Geografia e Estatísitca)",
          "SMS (Secretaria Municipal de Saúde)/SIM (Sistema de Informação sobre Mortalidade)/Pro-Aim (Programa de Aprimoramento das Informações de Mortalidade no Município de São Paulo)//CEInfo (Coordenação de Epidemiologia e Informação)"
        ],
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/mortalidade-por-doencas-do-aparelho-circulatorio",
        "id": 112,
        "name": "Mortalidade por doenças do aparelho circulatório",
        "year": 2016,
        "value": "30.63"
      },
      {
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/demanda-atendida-em-creches",
        "value": "88.78",
        "year": 2016,
        "id": 98,
        "name": "Demanda atendida em creches",
        "explanation": "Percentual de matrículas efetuadas em relação ao total de inscritos (matriculas + demanda não atendida) por vagas.",
        "sources": [
          "SME (Secretaria Municipal de Educação)/Centro de Informações Educacionais"
        ],
        "formula": "Número de matrículas efetuadas em creches municipais / Número total de inscritos em creches (matrículas efetuadas + vagas solicitadas) *100"
      },
      {
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/museus",
        "year": 2016,
        "value": "3.71",
        "id": 270,
        "name": "Museus",
        "explanation": "Número de museus, municipais, estaduais, federais e particulares, por 10 mil habitantes.",
        "formula": "Número total de museus / População total *10000",
        "sources": [
          "IBGE (Instituto Brasileiro de Geografia e Estatísitca)",
          "SMC (Secretaria Municipal de Cultura)/Guia da Folha de São Paulo"
        ]
      },
      {
        "explanation": "Número de mortes por homicídio, na faixa etária de 15 a 29 anos (inclusive) ocorridos no município, por 100 mil habitantes.",
        "sources": [
          "SMS (Secretaria Municipal de Saúde)/SIM (Sistema de Informação sobre Mortalidade)/Pro-Aim (Programa de Aprimoramento das Informações de Mortalidade no Município de São Paulo)//CEInfo (Coordenação de Epidemiologia e Informação)/Projeção: SMDU (Secretaria Municipal de Desenvolvimento Urbano)/Dipro (Departamento de Estatística e Produção de Informação)",
          "IBGE (Instituto Brasileiro de Geografia e Estatística) - Projeção Populacional"
        ],
        "formula": "Número total de mortes por homicídio de jovens homens com idade de 15 a 29 anos ÷ População masculina na faixa etária de 15 a 29 anos × 100000",
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/homicidio-juvenil",
        "value": "31.33",
        "year": 2015,
        "name": "Homicídio juvenil",
        "id": 156
      },
      {
        "value": "0.56",
        "year": 2016,
        "name": "Centros culturais, casas e espaços de cultura",
        "id": 131,
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/centros-culturais-casas-e-espacos-de-cultura",
        "sources": [
          "IBGE (Instituto Brasileiro de Geografia e Estatísitca)",
          "SMC (Secretaria Municipal de Cultura)/Guia da Folha de São Paulo"
        ],
        "formula": "Número de centros culturais, espaços e casas de cultura / População total *10000",
        "explanation": "Número de centros culturais, espaços e casas de cultura, municipais, estaduais, federais e particulares, por 10 mil habitantes."
      },
      {
        "explanation": "Número de livros disponíveis em acervos de bibliotecas municipais por habitante com 15 anos ou mais.",
        "sources": [
          "IBGE (Instituto Brasileiro de Geografia e Estatísitca)",
          "Relatório enviado pela Docs&Bytes a CSMB baseado na quantidade de acervo que compoem as categorias I e F"
        ],
        "formula": "Número total de livros para adultos disponíveis em bibliotecas municipais / População com 15 anos ou mais",
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/acervo-de-livros-para-adultos",
        "value": "0.43",
        "year": 2016,
        "id": 22,
        "name": "Acervo de livros para adultos"
      },
      {
        "explanation": "Percentual de matrículas sobre o total de procura por vaga em pré-escolas municipais (educação infantil).",
        "formula": "Número total de matrículas em pré-escolas municipais / Número total de inscritos em pré-escolas municipais (matrículas efetuadas + vagas solicitadas) *100",
        "sources": [
          "SME (Secretaria Municipal de Educação)/Centro de Informações Educacionais"
        ],
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/demanda-atendida-de-vagas-em-pre-escolas-municipais",
        "year": 2016,
        "value": "100.00",
        "id": 147,
        "name": "Demanda atendida de vagas em pré-escolas municipais"
      },
      {
        "name": "População em situação de rua",
        "id": 184,
        "value": "0.07",
        "year": 2015,
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/populacao-em-situacao-de-rua",
        "sources": [
          "SMADS/Fipe (Fundação Instituto de Pesquisas Econômicas)/Censo da População em Situação de Rua da Cidade de São Paulo 2015",
          "IBGE (Instituto Brasileiro de Geografia e Estatísitca)"
        ],
        "formula": "Número total de indivíduos em situação de rua / População total *100",
        "explanation": "Percentual da população em situação de rua em relação ao total da população.  *Moradores de rua: pessoas que não têm moradia e que pernoitam nas ruas, praças, calçadas, marquises, jardins, baixos de viadutos, terrenos baldios e áreas externas de imóveis."
      },
      {
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/mortalidade-por-neoplasias-cancer",
        "year": 2016,
        "value": "200.49",
        "name": "Mortalidade por neoplasias (câncer)",
        "id": 269,
        "explanation": "Número de mortes por neoplasias (câncer), por cem mil habitantes.",
        "formula": "Número de óbitos por neoplasias / População total *100000",
        "sources": [
          "IBGE (Instituto Brasileiro de Geografia e Estatísitca)",
          "SMS (Secretaria Municipal de Saúde)/SIM (Sistema de Informação sobre Mortalidade)/Pro-Aim (Programa de Aprimoramento das Informações de Mortalidade no Município de São Paulo)//CEInfo (Coordenação de Epidemiologia e Informação)"
        ]
      },
      {
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/mortalidade-especifica-por-aids",
        "id": 3718,
        "name": "Mortalidade específica por aids",
        "value": "0.56",
        "year": 2016,
        "explanation": "Número de óbitos pela síndrome da imunodeficiência adquirida (aids), por 10 mil habitantes, na população residente em determinado espaço geográfico, no ano considerado.",
        "sources": [
          "IBGE (Instituto Brasileiro de Geografia e Estatísitca)",
          "SMS (Secretaria Municipal de Saúde)/SIM (Sistema de Informação sobre Mortalidade)/Pro-Aim (Programa de Aprimoramento das Informações de Mortalidade no Município de São Paulo)//CEInfo (Coordenação de Epidemiologia e Informação)"
        ],
        "formula": "Número de óbitos de residentes por aids / População total *10000"
      },
      {
        "formula": "Número total de óbitos por causas externas / População total *100000",
        "sources": [
          "IBGE (Instituto Brasileiro de Geografia e Estatísitca)",
          "SMS (Secretaria Municipal de Saúde)/SIM (Sistema de Informação sobre Mortalidade)/Pro-Aim (Programa de Aprimoramento das Informações de Mortalidade no Município de São Paulo)//CEInfo (Coordenação de Epidemiologia e Informação)"
        ],
        "explanation": "Número de óbitos por causas externas (acidentes e violências), por cem mil habitantes.",
        "year": 2016,
        "value": "33.42",
        "id": 267,
        "name": "Mortalidade por causas externas",
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/mortalidade-por-causas-externas"
      },
      {
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/teatros",
        "value": "0.37",
        "year": 2016,
        "name": "Teatros",
        "id": 299,
        "explanation": "Número de salas de teatro, municipais, estaduais, federais e particulares,  por 10 mil habitantes.",
        "sources": [
          "IBGE (Instituto Brasileiro de Geografia e Estatísitca)",
          "SMC (Secretaria Municipal de Cultura)/Guia da Folha de São Paulo"
        ],
        "formula": "Número total de salas de teatro / População total *10000"
      },
      {
        "name": "Agressão a mulheres",
        "id": 153,
        "value": "1.17",
        "year": 2015,
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/agressao-a-mulheres",
        "sources": [
          "SMS (Secretaria Municipal de Saúde)/SIVVA (Sistema de Informação e Vigilância de Violências e Acidentes)/COVISA (Coordenação de Vigilância em Saúde)",
          "IBGE (Instituto Brasileiro de Geografia e Estatísitca)"
        ],
        "formula": "Número total de internações de mulheres residentes, de 20 a 59 anos, por causas relacionadas a possíveis agressões / População feminina na faixa etária de 20 a 59 anos *10000",
        "explanation": "Número de internações de mulheres de 20 a 59 anos por causas relacionadas a possíveis agressões, por 10 mil mulheres nessa faixa etária."
      },
      {
        "explanation": "Número de óbitos por homicídio, por 100 mil habitantes",
        "sources": [
          "SMS (Secretaria Municipal de Saúde)/SIM (Sistema de Informação sobre Mortalidade)/Pro-Aim (Programa de Aprimoramento das Informações de Mortalidade no Município de São Paulo)//CEInfo (Coordenação de Epidemiologia e Informação)/Projeção: SMDU (Secretaria Municipal de Desenvolvimento Urbano)/Dipro (Departamento de Estatística e Produção de Informação)",
          "IBGE (Instituto Brasileiro de Geografia e Estatísitca)"
        ],
        "formula": "Número total de óbitos por homicídio ÷ População total × 100000",
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/homicidios",
        "id": 158,
        "name": "Homicídios",
        "value": "7.42",
        "year": 2015
      },
      {
        "explanation": "Proporção de óbitos de crianças menores de um ano em cada mil crianças nascidas vivas de mães residentes.",
        "formula": "Número total de óbitos com menos de um ano de idade / Número total de nascidos vivos *1000",
        "sources": [
          "SMS (Secretaria Municipal de Saúde)/SINASC (Sistema de Informações de Nascidos Vivos)",
          "SMS (Secretaria Municipal de Saúde)/SIM (Sistema de Informação sobre Mortalidade)/Pro-Aim (Programa de Aprimoramento das Informações de Mortalidade no Município de São Paulo)//CEInfo (Coordenação de Epidemiologia e Informação)"
        ],
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/mortalidade-infantil",
        "year": 2016,
        "value": "7.81",
        "name": "Mortalidade infantil",
        "id": 6
      },
      {
        "year": 2016,
        "value": "1.15",
        "name": "Favelas",
        "id": 261,
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/favelas",
        "formula": "Número total de domicílios em favelas *100 / Número total de domicílios",
        "sources": [
          "SEHAB (Secretaria de Habitação)/HABITAsampa",
          "IBGE (Instituto Brasileiro de Geografia e Estatísitca)/Censo Demográfico 2010"
        ],
        "explanation": "Porcentagem de domicílios em favelas sobre o total de domicílios da região."
      },
      {
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/gravidez-na-adolescencia",
        "year": 2016,
        "value": "5.66",
        "name": "Gravidez na adolescência",
        "id": 114,
        "explanation": "Percentual de nascidos vivos cujas mães tinham 19 anos ou menos, sobre o total de nascidos vivos de mães residentes.",
        "formula": "Número total de nascidos vivos cujas mães tinham 19 anos ou menos / Número total de nascidos vivos *100",
        "sources": [
          "SMS (Secretaria Municipal de Saúde)/SINASC (Sistema de Informações de Nascidos Vivos)"
        ]
      },
      {
        "sources": [
          "SMS (Secretaria Municipal de Saúde)/SIVVA (Sistema de Informação e Vigilância de Violências e Acidentes)/COVISA (Coordenação de Vigilância em Saúde)",
          "IBGE (Instituto Brasileiro de Geografia e Estatística) - Projeção Populacional"
        ],
        "formula": "Número total de internações de crianças residentes, de até 14 anos por causas relacionadas a possíveis agressões / População na faixa etária de 0 a 14 anos *10000",
        "explanation": "Número de internações de crianças de 0 a 14 anos por causas relacionadas a possíveis agressões, por 10 mil crianças nessa faixa etária.",
        "id": 151,
        "name": "Agressão a crianças e adolescente",
        "value": "0.00",
        "year": 2015,
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/agressao-a-criancas-e-adolescente"
      },
      {
        "sources": [
          "SMS (Secretaria Municipal de Saúde)/SINASC (Sistema de Informações de Nascidos Vivos)",
          "SMS (Secretaria Municipal de Saúde)/SINASC (Sistema de Informações de Nascidos Vivos)/CEInfo (Coordenação de Epidemiologia e Informação)"
        ],
        "formula": "Número total de crianças com baixo peso ao nascer / Número total de nascidos vivos *100",
        "explanation": "Percentual de crianças nascidas vivas com menos de 2,5 kg, em relação ao total de nascidos vivos.",
        "id": 116,
        "name": "Baixo peso ao nascer",
        "value": "9.18",
        "year": 2016,
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/baixo-peso-ao-nascer"
      },
      {
        "year": 2016,
        "value": "0.28",
        "name": "Atendimento nas creches municipais",
        "id": 241,
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/atendimento-nas-creches-municipais",
        "formula": "Número de matrículas efetuadas em creches municipais / População na faixa etária de 0 a 3 anos",
        "sources": [
          "SME (Secretaria Municipal de Educação)/Centro de Informações Educacionais",
          "Fundação Seade (Fundação Sistema Estadual de Análise de Dados)"
        ],
        "explanation": "Número de matrículas nas creches (diretas, indiretas e conveniadas) por habitante na faixa etária de 0 a 3 anos."
      },
      {
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/mortes-com-automovel",
        "year": 2015,
        "value": "0.37",
        "name": "Mortes com automóvel",
        "id": 169,
        "explanation": "Número de mortes de ocupantes de automóveis e caminhonetes por 10 mil habitantes",
        "formula": "Total de mortes de ocupantes de automóveis e caminhonetes / População total *10000",
        "sources": [
          "IBGE (Instituto Brasileiro de Geografia e Estatísitca)",
          "SMS (Secretaria Municipal de Saúde)/SIM (Sistema de Informação sobre Mortalidade)/CET (Companhia de Engenharia de Trafego)/SMT (Secretaria Municipal de Mobilidade e Transportes)/SFMSP (Serviço Funerário do Município de São Paulo)"
        ]
      },
      {
        "explanation": "Número de mortes por atropelamentos, por 10 mil habitantes",
        "sources": [
          "IBGE (Instituto Brasileiro de Geografia e Estatísitca)",
          "SMS (Secretaria Municipal de Saúde)/SIM (Sistema de Informação sobre Mortalidade)/CET (Companhia de Engenharia de Trafego)/SMT (Secretaria Municipal de Mobilidade e Transportes)/SFMSP (Serviço Funerário do Município de São Paulo)"
        ],
        "formula": "Total de mortes por atropelamentos / População total *10000",
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/mortes-por-atropelamento",
        "id": 167,
        "name": "Mortes por atropelamento",
        "value": "0.74",
        "year": 2015
      },
      {
        "id": 296,
        "name": "Salas de show e concerto",
        "year": 2016,
        "value": "5.57",
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/salas-de-show-e-concerto",
        "formula": "Número total de salas de show e concerto / População total *100000",
        "sources": [
          "IBGE (Instituto Brasileiro de Geografia e Estatísitca)",
          "SMC (Secretaria Municipal de Cultura)/Guia da Folha de São Paulo"
        ],
        "explanation": "Número de salas de show e concerto, municipais, estaduais, federais e particulares,  por 100 mil habitantes."
      },
      {
        "explanation": "Número de mortes de ocupantes de motocicleta, por 10 mil habitantes.",
        "formula": "Total de mortes de ocupantes de motocicleta / População total *10000",
        "sources": [
          "IBGE (Instituto Brasileiro de Geografia e Estatísitca)",
          "SMS (Secretaria Municipal de Saúde)/SIM (Sistema de Informação sobre Mortalidade)/CET (Companhia de Engenharia de Trafego)/SMT (Secretaria Municipal de Mobilidade e Transportes)/SFMSP (Serviço Funerário do Município de São Paulo)"
        ],
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/mortes-com-motocicleta",
        "name": "Mortes com motocicleta",
        "id": 168,
        "year": 2015,
        "value": "0.19"
      },
      {
        "explanation": "Número de mortes por doenças do aparelho respiratório, por 10 mil habitantes.",
        "formula": "Número total de óbitos por doenças do aparelho respiratório / População total *10000",
        "sources": [
          "IBGE (Instituto Brasileiro de Geografia e Estatísitca)",
          "SMS (Secretaria Municipal de Saúde)/SIM (Sistema de Informação sobre Mortalidade)/Pro-Aim (Programa de Aprimoramento das Informações de Mortalidade no Município de São Paulo)//CEInfo (Coordenação de Epidemiologia e Informação)"
        ],
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/mortalidade-por-doencas-do-aparelho-respiratorio",
        "year": 2016,
        "value": "10.02",
        "id": 111,
        "name": "Mortalidade por doenças do aparelho respiratório"
      },
      {
        "sources": [
          "SMS (Secretaria Municipal de Saúde)/SIVVA (Sistema de Informação e Vigilância de Violências e Acidentes)/COVISA (Coordenação de Vigilância em Saúde)",
          "IBGE (Instituto Brasileiro de Geografia e Estatística) - Projeção Populacional"
        ],
        "formula": "Número total de internações de pessoas residentes, de 60 anos ou mais, por causas relacionadas a possível agressão / População com 60 anos ou mais *10000",
        "explanation": "Número de internações na rede pública, de pessoas de 60 anos ou mais, por causas relacionadas a possível agressão, por 10 mil habitantes nessa faixa etária.",
        "value": "1.93",
        "year": 2015,
        "id": 152,
        "name": "Agressão a idoso",
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/agressao-a-idoso"
      },
      {
        "explanation": "Média de idade com que as pessoas morreram, por local de residência. A média é obtida a partir da divisão da soma das idades ao morrer pelo total de óbitos por todas as idades, ocorridos em determinado ano e localidade.",
        "sources": [
          "SMS (Secretaria Municipal de Saúde)/SIM (Sistema de Informação sobre Mortalidade)/Pro-Aim (Programa de Aprimoramento das Informações de Mortalidade no Município de São Paulo)/CEInfo (Coordenação de Epidemiologia e Informação)"
        ],
        "formula": "Idade média ao morrer",
        "url_observatorio": "http://www.redesocialdecidades.org.br/br/SP/sao-paulo/regiao/+butanta/idade-media-ao-morrer",
        "name": "Idade média ao Morrer",
        "id": 3856,
        "value": "77.70",
        "year": 2016
      }
    ],
    "id": 649,
    "slug": "butanta",
    "subprefecture_id": 2,
    "subprefecture": {
      "longitude": "-46.738026",
      "site": "http://butanta.prefeitura.sp.gov.br",
      "acronym": "BT",
      "latitude": "-23.588369",
      "slug": "butanta",
      "email": "butantanap@prefeitura.sp.gov.br",
      "telephone": "+551133974600",
      "id": 2,
      "name": "Butantã",
      "address": "R. Ulpiano da Costa Manso, 201 - CEP 05538-000"
    },
    "variables": [
      {
        "value": "0.00",
        "year": 2014,
        "name": "Número total de óbitos por causas maternas",
        "id": 230,
        "source": "SIM/SMS - CET/SMT - SFMSP(2014 atualizado em 04 de novembro de 2015 - dados preliminares)"
      },
      {
        "year": 2015,
        "value": "36.00",
        "source": "SMADS/FIPE Censo da População em Situação de Rua da Cidade de São Paulo 2015",
        "id": 285,
        "name": "Número total de indivíduos em situação de rua"
      },
      {
        "year": 2016,
        "value": "649.00",
        "source": "SME/Centro de Informações Educacionais",
        "id": 77,
        "name": "Número de matrículas efetuadas em creches municipais"
      },
      {
        "id": 277,
        "name": "Número total de internações de crianças residentes, de até 14 anos por causas relacionadas a possíveis agressões",
        "source": "SIVVA - Sistema de Informação e Vigilância de Violências e Acidentes - COVISA - SMS/SP",
        "value": "0.00",
        "year": 2015
      },
      {
        "value": "2.00",
        "year": 2016,
        "name": "Número total de equipamentos esportivos públicos",
        "id": 60,
        "source": "Secretaria Municipal de Esportes, Lazer e Recreação / SEME."
      },
      {
        "year": 2015,
        "value": "0.00",
        "source": "SMADS/FIPE Censo da População em Situação de Rua da Cidade de São Paulo 2015",
        "name": "Número total da população em situação de rua que foi acolhida",
        "id": 512
      },
      {
        "year": 2015,
        "value": "7.00",
        "source": "SIM/SMS - CET/SMT - SFMSP",
        "id": 91,
        "name": "Número de mortes em acidentes de trânsito"
      },
      {
        "year": 2016,
        "value": "54.00",
        "source": "Sistema de Informações sobre Mortalidade/SIM/PRO-AIM - CEInfo -SMS-SP",
        "id": 226,
        "name": "Número total de óbitos por doenças do aparelho respiratório"
      },
      {
        "source": "SIM/SMS - CET/SMT - SFMSP",
        "id": 294,
        "name": "Total de mortes de ocupantes de automóveis e caminhonetes",
        "year": 2015,
        "value": "2.00"
      },
      {
        "id": 81,
        "name": "Número total de mortes por homicídio de jovens homens com idade de 15 a 29 anos",
        "source": "Sistema de Informações sobre Mortalidade – SIM/PRO-AIM – CEInfo –SMS-SP. Projeção: Secretaria Municipal de Desenvolvimento Urbano/SMDU- Departamento de Estatística e Produção de Informação/Dipro",
        "value": "2.00",
        "year": 2015
      },
      {
        "source": "Sistema de Informações sobre Mortalidade/SIM/PRO-AIM - CEInfo -SMS-SP",
        "id": 3767,
        "name": "Número de óbitos de residentes por aids",
        "year": 2016,
        "value": "3.00"
      },
      {
        "year": 2016,
        "value": "214.00",
        "source": "SEHAB/HABITAsampa",
        "name": "Número total de domicílios em favelas",
        "id": 545
      },
      {
        "value": "108.00",
        "year": 2016,
        "id": 508,
        "name": "Número de óbitos por neoplasias",
        "source": "Sistema de Informações sobre Mortalidade/SIM/PRO-AIM - CEInfo -SMS-SP"
      },
      {
        "source": "Secretaria Municipal de Inovação e Tecnologia/SMIT",
        "id": 576,
        "name": "Número total de telecentros",
        "year": 2016,
        "value": "1.00"
      },
      {
        "name": "Total de mortes de ocupantes de motocicleta",
        "id": 293,
        "source": "SIM/SMS - CET/SMT - SFMSP",
        "value": "1.00",
        "year": 2015
      },
      {
        "name": "Número total de óbitos por doenças do aparelho circulatório",
        "id": 227,
        "source": "Sistema de Informações sobre Mortalidade/SIM/PRO-AIM - CEInfo -SMS-SP",
        "value": "165.00",
        "year": 2016
      },
      {
        "value": "3.00",
        "year": 2016,
        "id": 573,
        "name": "Número total de salas de show e concerto",
        "source": "Secretaria Municipal de Cultura / Guia da Folha de São Paulo"
      },
      {
        "id": 557,
        "name": "Número total de óbitos por causas externas",
        "source": "Sistema de Informações sobre Mortalidade/SIM/PRO-AIM - CEInfo -SMS-SP",
        "value": "18.00",
        "year": 2016
      },
      {
        "value": "3.00",
        "year": 2016,
        "id": 558,
        "name": "Número total de óbitos por causas mal definidas",
        "source": "Sistema de Informações sobre Mortalidade/SIM/PRO-AIM - CEInfo -SMS-SP"
      },
      {
        "year": 2010,
        "value": "0.00",
        "source": "IBGE (Instituto Brasileiro de Geografia e Estatística) - Censo Demográfico 2010",
        "id": 92,
        "name": "Número total de indivíduos residentes em favelas"
      },
      {
        "source": "Relatório enviado pela Docs&Bytes a CSMB baseado na quantidade de acervo que compoem as categorias I e F",
        "id": 71,
        "name": "Número total de livros para adultos disponíveis em bibliotecas municipais",
        "year": 2016,
        "value": "19967.00"
      },
      {
        "year": 2016,
        "value": "472.00",
        "source": "Cadastro Nacional dos Estabelecimentos de Saúde/CNES, Secretaria Municipal da Saúde/SMS e Secretaria de Estado da Saúde/SES",
        "name": "Número total de leitos hospitalares",
        "id": 58
      },
      {
        "year": 2015,
        "value": "0.00",
        "source": "SIM/SMS - CET/SMT - SFMSP",
        "id": 214,
        "name": "Total de mortes com bicicleta"
      },
      {
        "source": "Fonte Básica: IBGE",
        "id": 19,
        "name": "População total",
        "year": 2016,
        "value": "53868.00"
      },
      {
        "source": "SIM/PRO-AIM - CEINFO - SMS-SP",
        "id": 3937,
        "name": "Idade média ao morrer",
        "year": 2016,
        "value": "77.70"
      },
      {
        "name": "Número total de inscritos em creches (matrículas efetuadas + vagas solicitadas)",
        "id": 78,
        "source": "SME/Centro de Informações Educacionais",
        "value": "731.00",
        "year": 2016
      },
      {
        "id": 280,
        "name": "Número total de internações de mulheres residentes, de 20 a 59 anos, por causas relacionadas a possíveis agressões",
        "source": "SIVVA - Sistema de Informação e Vigilância de Violências e Acidentes - COVISA - SMS/SP",
        "value": "2.00",
        "year": 2015
      },
      {
        "id": 548,
        "name": "Número total de empregos",
        "source": "Ministério do Trabalho e Emprego. Relação Anual de Informações Sociais – Rais.",
        "value": "63738.00",
        "year": 2014
      },
      {
        "year": 2016,
        "value": "2.00",
        "source": "Secretaria Municipal de Cultura / Guia da Folha de São Paulo",
        "name": "Número total de salas de teatro",
        "id": 575
      },
      {
        "source": "Sistema de Informações sobre Mortalidade – SIM/PRO-AIM – CEInfo –SMS-SP. Projeção: Secretaria Municipal de Desenvolvimento Urbano/SMDU- Departamento de Estatística e Produção de Informação/Dipro",
        "name": "Número total de óbitos por homicídio",
        "id": 82,
        "year": 2015,
        "value": "4.00"
      },
      {
        "value": "2.00",
        "year": 2016,
        "name": "Número total de unidades básicas de atendimento em saúde",
        "id": 57,
        "source": "Fonte: Secretaria Municipal da Saúde -  Coordenadoria de Epidemiologia e Informação /CEInfo"
      },
      {
        "value": "607.00",
        "year": 2016,
        "id": 270,
        "name": "Número total de inscritos em pré-escolas municipais (matrículas efetuadas + vagas solicitadas)",
        "source": "SME/Centro de Informações Educacionais"
      },
      {
        "id": 572,
        "name": "Número total de salas de cinema",
        "source": "Guia da Folha de São Paulo",
        "value": "1.00",
        "year": 2016
      },
      {
        "name": "Número total de atropelamentos",
        "id": 296,
        "source": "SIVVA - Sistema de Informação e Vigilância de Violências e Acidentes - COVISA - SMS/SP",
        "value": "2.00",
        "year": 2013
      },
      {
        "year": 2016,
        "value": "3535.00",
        "source": "Relatório enviado pela Docs&Bytes a CSMB baseado na quantidade de acervo que compoem as categorias I e F",
        "name": "Número de livros infanto-juvenis disponíveis em acervos de bibliotecas",
        "id": 250
      },
      {
        "year": 2016,
        "value": "607.00",
        "source": "FONTE: SME/Centro de Informações Educacionais",
        "name": "Número total de matrículas  em pré-escolas municipais",
        "id": 269
      },
      {
        "value": "2.00",
        "year": 2015,
        "name": "Número total de internações de pessoas residentes, de 60 anos ou mais, por causas relacionadas a possível agressão",
        "id": 279,
        "source": "SIVVA - Sistema de Informação e Vigilância de Violências e Acidentes - COVISA - SMS/SP"
      },
      {
        "id": 231,
        "name": "Número total de crianças com baixo peso ao nascer",
        "source": "SINASC/CEInfo/SMS-SPAtualizado em 18 de abril de 2017",
        "value": "47.00",
        "year": 2016
      },
      {
        "year": 2016,
        "value": "3.00",
        "source": "Secretaria Municipal de Cultura / Guia da Folha de São Paulo",
        "id": 249,
        "name": "Número de centros culturais, espaços e casas de cultura"
      },
      {
        "id": 555,
        "name": "Número total de museus",
        "source": "Fonte: Secretaria Municipal de Cultura / Guia da Folha de São Paulo",
        "value": "20.00",
        "year": 2016
      },
      {
        "name": "Número total de unidades esportivas públicas",
        "id": 577,
        "source": null,
        "value": "1.00",
        "year": 2012
      }
    ]
  }
}
```



