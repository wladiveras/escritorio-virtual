import type { ILandingState } from "~/types";

export const useLandingStore = defineStore("landing", {
  state: (): ILandingState => {
    return {
      isLoading: false,
      header: {
        title: "Escritório Online",
        description: "Para quem busca praticidade e eficiência, tudo que você precisa em um só lugar..",
        content: {
          type: "carousel",
          src: "https://www.youtube.com/embed/hf1iUqZc4lc?si=Ft1nA9pjI710pjGX",
          carousel: [
            "https://picsum.photos/1920/1080?random=1",
            "https://picsum.photos/1920/1080?random=2",
            "https://picsum.photos/1920/1080?random=3",
            "https://picsum.photos/1920/1080?random=4",
            "https://picsum.photos/1920/1080?random=5",
            "https://picsum.photos/1920/1080?random=6",
          ],
        },
      },
      logos: {
        title: "Parceiros de confiança",
        icons: [
          "tabler:brand-disney",
          "tabler:brand-visa",
          "i-simple-icons-netlify",
          "tabler:brand-bluesky",
          "tabler:brand-airbnb",
        ],
      },
      services: {
        title: "Por Que Escolher Nossos Serviços?",
        description:
          "Opte pela excelência. oferecemos serviços de qualidade superior, com uma equipe experiente e uma abordagem personalizada. Confie em nós para cuidar de você da melhor maneira possível.",
        headline: "Serviços",
        items: [
          {
            title: "Escritório Virtual de Afiliados",
            description:
              "Tenha acesso a um escritório virtual completo, com endereço comercial, atendimento telefônico personalizado, gerenciamento de correspondências e muito mais. Aumente sua credibilidade e eficiência com nossos serviços de escritório virtual de afiliados.",
            icon: "line-md:confirm",
            to: "/order/checkout",
          },
          {
            title: "Afiliação",
            description:
              "Afiliando-se ao nosso serviço de escritório virtual, você pode vender produtos e aproveitar benefícios exclusivos, como descontos em serviços, eventos de networking e oportunidades de negócios.",
            icon: "line-md:confirm",
            to: "/order/checkout",
          },
          {
            title: "Sala de Reunião",
            description:
              "Realize reuniões e apresentações de alto nível em nossas salas de reunião modernas e bem equipadas. Oferecemos espaços confortáveis e profissionais para atender às suas necessidades de negócios.",
            icon: "line-md:confirm",
            to: "/order/checkout",
          },
          {
            title: "Coworking",
            description:
              "Trabalhe em um ambiente colaborativo e inspirador com nossa opção de coworking. Conheça outros profissionais, compartilhe ideias e aproveite a flexibilidade de um espaço de trabalho compartilhado.",
            icon: "line-md:confirm",
            to: "/order/checkout",
          },
          {
            title: "Serviços de Secretariado",
            description:
              "Conte com nossos serviços de secretariado para ajudar na organização e administração do seu negócio. Nossos profissionais qualificados estão prontos para fornecer suporte administrativo e garantir o bom funcionamento do seu escritório.",
            icon: "line-md:confirm",
            to: "/order/checkout",
          },
          {
            title: "Suporte Técnico",
            description:
              "Tenha tranquilidade com nosso suporte técnico especializado. Estamos aqui para ajudá-lo a resolver qualquer problema técnico que possa surgir.",
            icon: "line-md:confirm",
            to: "/order/checkout",
          },
        ],
      },
      plans: {
        title: "Box Surpresa Mensal",
        description:
          "Descubra uma jornada mensal de surpresas e encantos com nossa Box Mensal exclusiva. Receba uma seleção cuidadosamente escolhida de produtos de beleza e bem-estar diretamente em sua porta, oferecendo uma experiência de autocuidado excepcional a cada entrega. Mime-se ou presenteie alguém especial com uma assinatura hoje e embarque em uma jornada de descoberta e autocompaixão.",
        headline: "Planos",
        subscriptions: [
          {
            title: "Box Essencial",
            description:
              "Um plano cuidadosamente elaborado para atender às suas necessidades de beleza com carinho e atenção.",
            price: "$RS 70.99",
            align: "bottom",
            highlight: false,
            scale: false,
            button: {
              label: "Assinar",
              color: "gray",
              to: "/order/checkout",
              click: undefined,
            },
            features: [
              "2 produtos de beleza surpresa",
              "1 item de bem-estar",
              "Entrega mensal",
            ],
          },
          {
            title: "Box Plus",
            description:
              "O favorito de nossos clientes. Um plano para aqueles que desejam algo a mais, com excelente custo-benefício.",
            price: "$RS 90.99",
            align: "top",
            highlight: true,
            scale: true,
            button: {
              label: "Assinar",
              color: "primary",
              to: "/order/checkout",
              click: undefined,
            },
            features: [
              "3 produtos de beleza de marcas premium",
              "2 itens de bem-estar exclusivos",
              "Acessórios surpresa",
              "Entrega mensal com rastreamento",
            ],
          },
          {
            title: "Box Premium",
            description:
              "Um plano para os amantes de cuidados pessoais, com produtos de alta qualidade.",
            price: "$RS 120,99",
            align: "bottom",
            highlight: false,
            scale: false,
            button: {
              label: "Assinar",
              color: "gray",
              to: "/order/checkout",
              click: undefined,
            },
            features: [
              "4 a 5 produtos de beleza de luxo",
              "3 itens de bem-estar de alta qualidade da sua escolha",
              "Acessórios de edição limitada",
              "Brinde especial mensal",
              "Entrega prioritária com seguro",
            ],
          },
        ],
      },
      testimonials: {
        headline: "Depoimentos",
        title: "O Que Nossos Clientes Dizem",
        description:
          "Veja o que nossos clientes têm a dizer sobre nós. Suas palavras refletem nossa dedicação em fornecer serviços excepcionais e resultados impressionantes. Confira abaixo e descubra por que somos a escolha confiável para suas necessidades.",
        items: [
          {
            quote:
              "Estou extremamente satisfeita com os serviços da empresa. A equipe foi incrivelmente profissional e atenciosa em cada etapa do processo. Recomendo sem hesitação!",
            author: {
              name: "Ana Silva",
              description: "Empresária",
              avatar: {
                src: "https://i.pravatar.cc/120?img=1",
                loading: "lazy",
              },
            },
          },
          {
            quote:
              "Minha experiência com a empresa foi excepcional. Eles superaram todas as minhas expectativas, e os resultados foram simplesmente incríveis. Definitivamente voltarei!",
            author: {
              name: "Pedro Santos",
              description: "Estudante Universitário",
              avatar: {
                src: "https://i.pravatar.cc/120?img=59",
                loading: "lazy",
              },
            },
          },
          {
            quote:
              "A empresa me proporcionou uma experiência única e transformadora. Sua abordagem personalizada realmente fez a diferença para mim. Estou muito grato por sua dedicação e comprometimento.",
            author: {
              name: "Ricardo Costa",
              description: "Músico Profissional",
              avatar: {
                src: "https://i.pravatar.cc/120?img=55",
                loading: "lazy",
              },
            },
          },
          {
            quote:
              "Recebi tratamento da empresa recentemente e estou muito impressionada com os resultados. A equipe foi gentil, profissional e eficiente em todos os aspectos. Recomendo totalmente!",
            author: {
              name: "Sandra Lima",
              description: "Professora",
              avatar: {
                src: "https://i.pravatar.cc/120?img=49",
                loading: "lazy",
              },
            },
          },
        ],
      },
      promotion: {
        title: "Escritório Virtual de Afiliados",
        description:
          "Descubra o ápice do luxo com nosso Escritório Virtual de Afiliados por R$ 120/mês. Tenha acesso a um escritório virtual completo, com endereço comercial, atendimento telefônico personalizado, gerenciamento de correspondências e muito mais. Aumente sua credibilidade e eficiência com nosso escritório virtual de afiliados. Assine agora mesmo!",
        label: "Assine agora mesmo",
        path: "#pricing",
        src: "https://locaria.com/wp-content/uploads/2019/05/AdobeStock_249865970-1024x683.jpeg",
      },
      faq: {
        title: "Perguntas Frequentes (FAQ)",
        description:
          "Curiosidades? Dúvidas? Estamos aqui para ajudar! Confira nossas respostas às perguntas mais comuns sobre nossos serviços e descubra como podemos tornar sua jornada de beleza ainda mais incrível. Deixe-nos guiá-lo pelo caminho da confiança e do bem-estar.",
        items: [
          {
            label: "O que é um escritório virtual de afiliados?",
            content:
              "Um escritório virtual de afiliados é um serviço que oferece uma variedade de recursos e suporte para profissionais e empreendedores afiliados. Com um escritório virtual de afiliados, você pode ter um endereço comercial, atendimento telefônico personalizado, gerenciamento de correspondências e outras facilidades, sem a necessidade de um espaço físico.",
          },
          {
            label: "Como funciona a afiliação ao escritório virtual de afiliados?",
            content:
              "Ao se afiliar ao nosso serviço de escritório virtual de afiliados, você terá acesso a todos os recursos e benefícios oferecidos. Além disso, você poderá vender produtos e aproveitar descontos em serviços, eventos de networking e oportunidades de negócios exclusivas.",
          },
          {
            label: "Quais são os benefícios de ter um escritório virtual de afiliados?",
            content:
              "Os benefícios de ter um escritório virtual de afiliados incluem a credibilidade de um endereço comercial, atendimento telefônico profissional, gerenciamento eficiente de correspondências, flexibilidade de trabalhar em qualquer lugar, economia de custos em comparação com um escritório físico e acesso a uma comunidade de profissionais e empreendedores.",
          },
          {
            label: "Como posso me afiliar ao escritório virtual de afiliados?",
            content:
              "Para se afiliar ao nosso serviço de escritório virtual de afiliados, basta entrar em contato conosco e fornecer as informações necessárias. Nossa equipe terá prazer em ajudá-lo com o processo de afiliação.",
          },
          {
            label: "Quais são as opções de venda disponíveis no escritório virtual de afiliados?",
            content:
              "No escritório virtual de afiliados, você pode vender produtos ou serviços relacionados ao seu negócio. Através da afiliação, você terá acesso a recursos e suporte para impulsionar suas vendas e expandir seus negócios.",
          },
          {
            label: "Posso cancelar minha afiliação ao escritório virtual de afiliados?",
            content:
              "Sim, você pode cancelar sua afiliação ao escritório virtual de afiliados a qualquer momento. Entre em contato conosco para obter mais informações sobre o processo de cancelamento.",
          },
          {
            label: "Quanto custa a afiliação ao escritório virtual de afiliados?",
            content:
              "O custo da afiliação ao escritório virtual de afiliados pode variar dependendo dos recursos e benefícios incluídos. Entre em contato conosco para obter detalhes sobre os planos e preços disponíveis.",
          },
          {
            label: "Quais são os requisitos para se afiliar ao escritório virtual de afiliados?",
            content:
              "Os requisitos para se afiliar ao escritório virtual de afiliados podem variar. Entre em contato conosco para obter informações sobre os requisitos específicos e como você pode se tornar um afiliado.",
          },
          {
            label: "Quais são as formas de pagamento aceitas para a afiliação?",
            content:
              "Aceitamos várias formas de pagamento para a afiliação ao escritório virtual de afiliados. Entre em contato conosco para obter informações sobre as opções de pagamento disponíveis.",
          },
          {
            label: "Como posso obter mais informações sobre a afiliação ao escritório virtual de afiliados?",
            content:
              "Para obter mais informações sobre a afiliação ao escritório virtual de afiliados, entre em contato conosco. Nossa equipe terá prazer em responder a todas as suas perguntas e fornecer os detalhes necessários.",
          },
        ],
      },
    };
  },
  actions: {
    triggerStep(value: boolean) {
      this.isLoading = value;
    },
  },
});
