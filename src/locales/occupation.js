import IMAGES from "../assets";

const LOCALES = {
  id: "occupation",
  title: "EM QUE ATUAMOS?",
  options: [
    {
      id: "family",
      image: [IMAGES.familia],
      title: "DIREITO DE FAMÍLIA",
      text:
        "O Direito de Família é uma ramificação do Direito Civil que trata das relações familiares e das obrigações e direitos decorrentes dessas relações em si, como por exemplo: união estável, casamento, regime de bens, divórcio, alimentos/pensão, inventário, tipos de herança, guarda, adoção, filiação, relações de parentesco, curatela, tutela, bem de família, dentre outros vários direitos resguardados em nossa legislação civil.\n\n O Direito, que sempre deve ser atualizado para proteger seus cidadãos, se adequou aos tempos modernos e, com isso, o conceito de “família” mudou bastante. Hoje, no Brasil, não existe tão somente a “família tradicional brasileira” dentro do Direito de Família, mas há outras modalidades de família: (i) união estável, (ii) monoparental (mãe ou pai solteiro), (iii) multiparental, composta, pluriparental ou mosaico (membros provenientes de outras famílias), (iv) parental ou anaparental (todos possuem vínculo sanguíneo), (v) eudemonista (união de indivíduos por afinidade), (vi) homoafetiva (união de pessoas do mesmo sexo) e (vii) homoparentalidade (família homoafetiva com a adoção de filhos).",
      description:
        'O Direito de Família é uma ramificação do Direito Civil que trata das relações familiares e das obrigações e direitos decorrentes dessas relações. O direito de família não engloba apenas a "família tradicional brasileira", pois os tempos modernos fizeram surgir outras modalidades de família, as quais também estão protegidas pela lei.',
    },
    {
      id: "labor",
      image: [IMAGES.trabalho],
      title: "DIREITO DO TRABALHO",
      text:
        "Esta área do Direito se ocupa com o vínculo entre empregado e o empregador. Todos sabemos o quão complexa pode ser tal relação. Somos humanos e, quando trabalhamos, ficamos sujeitos a vários fatores emocionais, econômicos e sociais, portanto o Direito do Trabalho busca a harmonia e solução dos conflitos trabalhistas.\n\n No âmbito do Direito no Trabalho a parte mais frágil da relação precisa ser protegida! E esse polo é ocupado, sem dúvidas, pela figura do(a) trabalhador(a), que deve ter seus direitos trabalhistas garantidos, como o décimo terceiro salário, férias, recolhimento de percentual referente ao Fundo de Garantia por Tempo de Serviço (FGTS) e à Previdência Social (INSS), entre outros.",
      description:
        "Esta área do Direito se ocupa com o vínculo entre empregado e o empregador. Todos sabemos o quão complexa pode ser tal relação. Somos humanos e, quando trabalhamos, ficamos sujeitos a vários fatores emocionais, econômicos e sociais, portanto o Direito do Trabalho busca a harmonia e solução dos conflitos trabalhistas.",
    },
    {
      id: "consumeer",
      image: [IMAGES.consumidor],
      title: "DIREITO DO CONSUMIDOR",
      text:
        "O Direito do Consumidor tem como base o CDC - Código de Defesa do Consumidor (Lei nº 8078/1990), onde estabelece que qualquer relação jurídica entre fornecedor de bens, materiais ou serviços e um consumidor final, encontra-se protegida pela Lei acima na esfera civil, administrativa e penal.\n\n O consumidor é toda pessoa física ou jurídica que adquire ou utiliza um produto ou serviço. Já o fornecedor é qualquer pessoa física ou jurídica, pública ou privada, nacional ou estrangeira que desenvolve atividades de produção, montagem, criação, construção, transformação, importação, exportação, distribuição ou comercialização de produtos ou prestação de serviços. A lei determina que o consumidor sempre é o elo mais fraco em uma relação de consumo, sendo, portanto, mais favorável ao comprador, e não ao fornecedor.",
      description:
        "O Direito do Consumidor tem como base o CDC - Código de Defesa do Consumidor (Lei nº 8078/1990), onde estabelece que qualquer relação jurídica entre fornecedor de bens, materiais ou serviços e um consumidor final, encontra-se protegida pela Lei acima na esfera civil, administrativa e penal.",
    },
    {
      id: "foresight",
      image: [IMAGES.previdencia],
      title: "DIREITO PREVIDENCIÁRIO",
      text:
        "O Direito Previdenciário é o ramo do Direito que trata de assuntos relacionados à seguridade social. Esta, por sua vez, é o conjunto de ações destinadas a assegurar os direitos relativos à saúde, à previdência social e à assistência social. Um dos objetivos dessa área é fiscalizar e garantir o controle da previdência social, pois é este instituto que permitirá, futuramente, a aposentadoria dos trabalhadores.\n\n A previdência social garante aos trabalhadores brasileiros amparo em caso de incapacidade física ou mental, doenças, desemprego, gravidez, acidentes, entre outros acontecimentos que possam impedir a continuação da relação de emprego. Por isso, é muito importante a atuação dentro do Direito Previdenciário, pois é ele que contribuirá para a proteção de seus beneficiários.",
      description:
        "O Direito Previdenciário é o ramo do Direito que trata de assuntos relacionados à seguridade social. Um dos objetivos dessa área é fiscalizar e garantir o controle da previdência social, pois é este instituto que permitirá, futuramente, a aposentadoria dos trabalhadores.",
    },
    {
      id: "civil",
      image: [IMAGES.civil],
      title: "DIREITO CIVIL",
      text:
        "O Direito Civil é o ramo do Direito mais abrangente e compreende os direitos e obrigações das pessoas físicas e jurídicas nas relações privadas. Sua finalidade fundamental é a de regular a vida em sociedade. Ele engloba, inclusive, temas desde o nascimento até a morte de uma pessoa, por exemplo. \n\n Todos os dias realizamos diversos atos da vida, como comprar um veículo, pagar um boleto, casar/divorciar, adquirir um produto, receber uma herança, entre outros. Todas essas situações estão protegidas pela Lei Civil. Portanto, sempre que estivermos diante de um problema nessas relações, devemos procurar o Direito Civil para a solução, pois ele se manifesta nas seguintes vertentes: (i) obrigações, (ii) contratos, (iii) responsabilidade civil, (iv) direitos reais, (v) direito de família e (vi) sucessões.",
      description:
        "O Direito Civil é o ramo do Direito mais abrangente e compreende os direitos e obrigações das pessoas físicas e jurídicas nas relações privadas. Sua finalidade fundamental é a de regular a vida em sociedade. Ele engloba, inclusive, temas desde o nascimento até a morte de uma pessoa, por exemplo.",
    },
    {
      id: "criminal",
      image: [IMAGES.penal],
      title: "DIREITO PENAL",
      text:
        "A liberdade é o bem mais precioso dos seres humanos. Sem ela, nos deparamos com a limitação do direito de ir e vir.  O Direito Penal é o ramo do Direito o qual garante que a liberdade dos indivíduos apenas seja restringida em último caso, a fim de se evitar injustiças e ao mesmo tempo proteger a sociedade.\n\n No Ajuda Legal, compreendemos que o Estado Democrático de Direito é um norte a ser buscado e efetivado e, portanto, faremos de tudo para garantir que ninguém seja condenado sem o devido processo legal e que a presunção de inocência seja garantida a todos. Portanto, estamos prontos para prestar o melhor auxílio e defender a liberdade e a lei para todos.",
      description:
        "A liberdade é o bem mais precioso dos seres humanos. Sem ela, nos deparamos com a limitação do direito de ir e vir.  O Direito Penal é o ramo do Direito o qual garante que a liberdade dos indivíduos apenas seja restringida em último caso, a fim de se evitar injustiças e ao mesmo tempo proteger a sociedade.",
    },
    {
      id: "minority",
      image: [IMAGES.minorias1, IMAGES.minorias2],
      title: "DIREITO DAS MINORIAS",
      text:
        "No Núcleo de Minorias, o objetivo central é contribuir para a restauração da dignidade da pessoa humana, seja ela LGBTI+, deficiente, negra, vítima de violência doméstica, moradora de rua, bem como quaisquer outros casos que se encaixem no âmbito das Minorias.\n\n Sabemos que constantemente os direitos fundamentais dessas pessoas são silenciados e até mesmo ocultados pela sociedade, o que acarreta a omissão, por parte do Estado, do tratamento prioritário que é necessário a estes casos.\n\nEsse Núcleo atua de forma a estabelecer e compreender as situações que os integrantes dessas Minorias possam vivenciar e, diante disso, traça estratégias de defesa para que a justiça seja garantida a todas as pessoas!",
      description:
        "No Núcleo de Minorias, o objetivo central é contribuir para a restauração da dignidade da pessoa humana, seja ela LGBTI+, deficiente, negra, vítima de violência doméstica, moradora de rua, bem como quaisquer outros casos que se encaixem no âmbito das Minorias.",
    },
    /*     {
      id: "guidance",
      image: IMAGES.orientacao,
      title: "ORIENTAÇÃO JURÍDICA",
      text:
        "Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Mé faiz elementum girarzis, nisi eros vermeio. Aenean aliquam molestie leo, vitae iaculis nisl. In elementis mé pra quem é amistosis quis leo.\n\nManduma pindureta quium dia nois paga. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Atirei o pau no gatis, per gatis num morreus. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.\n\nSapien in monti palavris qui num significa nadis i pareci latim.  Casamentiss faiz malandris se pirulitá. Delegadis gente finis, bibendum egestas augue arcu ut est. Leite de capivaris, leite de mula manquis sem cabeça.",
      description:
        "Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Mé faiz elementum girarzis, nisi eros vermeio. Aenean aliquam molestie leo, vitae iaculis nisl. In elementis mé pra quem é amistosis quis leo.",
    }, */
  ],
};

export default LOCALES;
