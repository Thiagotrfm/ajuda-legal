import IMAGES from "../assets";

const LOCALES = {
  id: "occupation",
  title: "EM QUE ATUAMOS?",
  options: [
    {
      id: "family",
      image: IMAGES.familia,
      title: "DIREITO DE FAMÍLIA",
      text:
        "Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Mé faiz elementum girarzis, nisi eros vermeio. Aenean aliquam molestie leo, vitae iaculis nisl. In elementis mé pra quem é amistosis quis leo.\n\nManduma pindureta quium dia nois paga. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Atirei o pau no gatis, per gatis num morreus. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.\n\nSapien in monti palavris qui num significa nadis i pareci latim.  Casamentiss faiz malandris se pirulitá. Delegadis gente finis, bibendum egestas augue arcu ut est. Leite de capivaris, leite de mula manquis sem cabeça.",
    },
    {
      id: "labor",
      image: IMAGES.trabalho,
      title: "DIREITO DO TRABALHO",
      text:
        "Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Mé faiz elementum girarzis, nisi eros vermeio. Aenean aliquam molestie leo, vitae iaculis nisl. In elementis mé pra quem é amistosis quis leo.\n\nManduma pindureta quium dia nois paga. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Atirei o pau no gatis, per gatis num morreus. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.\n\nSapien in monti palavris qui num significa nadis i pareci latim.  Casamentiss faiz malandris se pirulitá. Delegadis gente finis, bibendum egestas augue arcu ut est. Leite de capivaris, leite de mula manquis sem cabeça.",
    },
    {
      id: "consumeer",
      image: IMAGES.consumidor,
      title: "DIREITO DO CONSUMIDOR",
      text:
        "Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Mé faiz elementum girarzis, nisi eros vermeio. Aenean aliquam molestie leo, vitae iaculis nisl. In elementis mé pra quem é amistosis quis leo.\n\nManduma pindureta quium dia nois paga. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Atirei o pau no gatis, per gatis num morreus. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.\n\nSapien in monti palavris qui num significa nadis i pareci latim.  Casamentiss faiz malandris se pirulitá. Delegadis gente finis, bibendum egestas augue arcu ut est. Leite de capivaris, leite de mula manquis sem cabeça.",
    },
    {
      id: "foresight",
      image: IMAGES.previdencia,
      title: "DIREITO PREVIDENCIÁRIO",
      text:
        "Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Mé faiz elementum girarzis, nisi eros vermeio. Aenean aliquam molestie leo, vitae iaculis nisl. In elementis mé pra quem é amistosis quis leo.\n\nManduma pindureta quium dia nois paga. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Atirei o pau no gatis, per gatis num morreus. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.\n\nSapien in monti palavris qui num significa nadis i pareci latim.  Casamentiss faiz malandris se pirulitá. Delegadis gente finis, bibendum egestas augue arcu ut est. Leite de capivaris, leite de mula manquis sem cabeça.",
    },
    {
      id: "civil",
      image: IMAGES.civil,
      title: "DIREITO CIVIL",
      text:
        "Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Mé faiz elementum girarzis, nisi eros vermeio. Aenean aliquam molestie leo, vitae iaculis nisl. In elementis mé pra quem é amistosis quis leo.\n\nManduma pindureta quium dia nois paga. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Atirei o pau no gatis, per gatis num morreus. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.\n\nSapien in monti palavris qui num significa nadis i pareci latim.  Casamentiss faiz malandris se pirulitá. Delegadis gente finis, bibendum egestas augue arcu ut est. Leite de capivaris, leite de mula manquis sem cabeça.",
    },
    {
      id: "criminal",
      image: IMAGES.penal,
      title: "DIREITO PENAL",
      text:
        "Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Mé faiz elementum girarzis, nisi eros vermeio. Aenean aliquam molestie leo, vitae iaculis nisl. In elementis mé pra quem é amistosis quis leo.\n\nManduma pindureta quium dia nois paga. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Atirei o pau no gatis, per gatis num morreus. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.\n\nSapien in monti palavris qui num significa nadis i pareci latim.  Casamentiss faiz malandris se pirulitá. Delegadis gente finis, bibendum egestas augue arcu ut est. Leite de capivaris, leite de mula manquis sem cabeça.",
    },
    {
      id: "minority",
      image: IMAGES.minorias,
      title: "DIREITO DAS MINORIAS",
      text:
        "Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Mé faiz elementum girarzis, nisi eros vermeio. Aenean aliquam molestie leo, vitae iaculis nisl. In elementis mé pra quem é amistosis quis leo.\n\nManduma pindureta quium dia nois paga. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Atirei o pau no gatis, per gatis num morreus. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.\n\nSapien in monti palavris qui num significa nadis i pareci latim.  Casamentiss faiz malandris se pirulitá. Delegadis gente finis, bibendum egestas augue arcu ut est. Leite de capivaris, leite de mula manquis sem cabeça.",
    },
    {
      id: "guidance",
      image: IMAGES.orientacao,
      title: "ORIENTAÇÃO JURÍDICA",
      text:
        "Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Mé faiz elementum girarzis, nisi eros vermeio. Aenean aliquam molestie leo, vitae iaculis nisl. In elementis mé pra quem é amistosis quis leo.\n\nManduma pindureta quium dia nois paga. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Atirei o pau no gatis, per gatis num morreus. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.\n\nSapien in monti palavris qui num significa nadis i pareci latim.  Casamentiss faiz malandris se pirulitá. Delegadis gente finis, bibendum egestas augue arcu ut est. Leite de capivaris, leite de mula manquis sem cabeça.",
    },
  ],
};

export default LOCALES;
