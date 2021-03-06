import { API } from './apiTypes'

const api: API = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  search: query => [
    {
      id: 'pavel-andrejkiv',
      name: 'Pavel',
      surname: 'Andrejkiv',
      birthYear: '1972',
      photo: 'https://www.hlidacstatu.cz/Photo/pavel-andrejkiv',
      description:
        'Pavel Andrejkiv (*1972 ),zastupitel (od 2014)  - Zastupitelstvo města Karlových Varů\nradní (od 2015)  - Rada města Karlových Varů.4 firem, ve kterých se angažuje, v roce 2019 získaly zakázky za celkem 12 mil. Kč.',
      currentParty: null,
    },
    {
      id: 'andrej-babis',
      name: 'Andrej',
      surname: 'Babiš',
      birthYear: '1954',
      photo: 'https://www.hlidacstatu.cz/Photo/andrej-babis',
      description:
        'Andrej Babiš (*1954 ),poslanec (od 2017)  - Poslanecká sněmovna PČR (2017 - 2021)\nposlanec (od 2013 do 2017)  - Poslanecká sněmovna PČR (2013 - 2017).Andrej Babiš mezi roky 2012-18 sponzoroval 2 polit. strany v celkové výši 19 mil. Kč. Nejvyšší sponzorský dar byl ve výši 3 mil. Kč.204 firem, ve kterých se angažuje, v roce 2019 získaly zakázky za celkem 20 mld. Kč.',
      currentParty: 'KSČ',
    },
    {
      id: 'andrej-gjuric',
      name: 'Andrej',
      surname: 'Gjurič',
      birthYear: '1938',
      photo: 'https://www.hlidacstatu.cz/Photo/andrej-gjuric',
      description: 'Andrej Gjurič (*1938 )',
      currentParty: null,
    },
    {
      id: 'andrej-grega',
      name: 'Andrej',
      surname: 'Grega',
      birthYear: '1950',
      photo: 'https://www.hlidacstatu.cz/Photo/andrej-grega',
      description:
        'Andrej Grega (*1950 )Je angažován v 2 firmách, které v roce 2019 získaly zakázky za celkem 17 mil. Kč.Andrej Grega v roce 2014 sponzoroval ČSSD v celkové výši 20 000  Kč. Nejvyšší sponzorský dar byl ve výši 20 000  Kč.',
      currentParty: null,
    },
    {
      id: 'andrej-kiska',
      name: 'Andrej',
      surname: 'Kiska',
      birthYear: '1963',
      photo: 'https://www.hlidacstatu.cz/Photo/andrej-kiska',
      description: 'Andrej Kiska (*1963 )',
      currentParty: null,
    },
    {
      id: 'andrej-koudelka',
      name: 'Andrej',
      surname: 'Koudelka',
      birthYear: '1951',
      photo: 'https://www.hlidacstatu.cz/Photo/andrej-koudelka',
      description: 'Ing. Andrej Koudelka (*1951 ),zastupitel (od 2018)  - Praha 12.',
      currentParty: null,
    },
  ],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  fetchDetail: id => ({
    id: 'andrej-babis',
    namePrefix: '',
    nameSuffix: '',
    name: 'Andrej',
    surname: 'Babiš',
    birthDate: '1954-09-02T00:00:00',
    deathDate: null,
    status: 'Politik',
    photo: 'https://www.hlidacstatu.cz/Photo/andrej-babis',
    description:
      'Andrej Babiš (*1954 ),poslanec (od 2017)  - Poslanecká sněmovna PČR (2017 - 2021)\nposlanec (od 2013 do 2017)  - Poslanecká sněmovna PČR (2013 - 2017).204 firem, ve kterých se angažuje, v roce 2019 získaly zakázky za celkem 20 mld. Kč.Andrej Babiš mezi roky 2012-18 sponzoroval 2 polit. strany v celkové výši 19 mil. Kč. Nejvyšší sponzorský dar byl ve výši 3 mil. Kč.',
    companyConnection:
      'Angažoval se v 2 státních firmách. Angažoval se také v 204 soukr.firmách, tyto firmy získaly od státu od 2016 celkem 5229 smluv v celkové výši 56 mld. Kč.',
    roles: [
      { role: 'člen strany', dateFrom: '1980-01-01T00:00:00', dateTo: null, organisation: 'KSČ' },
      { role: 'zakladatel', dateFrom: '2011-01-01T00:00:00', dateTo: null, organisation: 'ANO 2011, o.s.' },
      {
        role: 'člen strany',
        dateFrom: '1980-01-01T00:00:00',
        dateTo: null,
        organisation: 'Komunistická strana Slovenska',
      },
      { role: 'předseda', dateFrom: '2012-01-01T00:00:00', dateTo: null, organisation: 'ANO 2011, o.s.' },
      { role: 'předseda', dateFrom: '2012-01-01T00:00:00', dateTo: null, organisation: 'Předsednictvo' },
      { role: 'kandidát', dateFrom: '2013-01-01T00:00:00', dateTo: null, organisation: 'ANO 2011 (ANO)' },
      {
        role: 'poslanec',
        dateFrom: '2013-01-01T00:00:00',
        dateTo: '2017-01-01T00:00:00',
        organisation: 'Poslanecká sněmovna PČR (2013 - 2017)',
      },
      {
        role: 'člen',
        dateFrom: '2013-01-01T00:00:00',
        dateTo: '2017-01-01T00:00:00',
        organisation: 'Poslanecký klub ANO 2011',
      },
      {
        role: '1. místopředseda',
        dateFrom: '2014-01-01T00:00:00',
        dateTo: '2017-01-01T00:00:00',
        organisation: 'Vláda České republiky',
      },
      {
        role: 'ministr',
        dateFrom: '2014-01-01T00:00:00',
        dateTo: '2017-01-01T00:00:00',
        organisation: 'Vláda ČR (min. předseda Bohuslav Sobotka) - Ministerstvo financí',
      },
      {
        role: 'člen',
        dateFrom: '2013-01-01T00:00:00',
        dateTo: '2014-01-01T00:00:00',
        organisation: 'Rozpočtový výbor - Poslanecká sněmovna PČR (2013 - 2017)',
      },
      {
        role: 'člen',
        dateFrom: '2017-01-01T00:00:00',
        dateTo: null,
        organisation: 'Kontrolní výbor - Poslanecká sněmovna PČR (2013 - 2017)',
      },
      { role: 'kandidát', dateFrom: '2017-01-01T00:00:00', dateTo: null, organisation: 'ANO 2011' },
      { role: 'premiér', dateFrom: '2017-01-01T00:00:00', dateTo: null, organisation: 'Vláda České republiky' },
      {
        role: 'poslanec',
        dateFrom: '2017-01-01T00:00:00',
        dateTo: null,
        organisation: 'Poslanecká sněmovna PČR (2017 - 2021)',
      },
    ],
    insolvencyPerson: {
      debtorCount: 0,
      debtorLink: 'https://www.hlidacstatu.cz/insolvence/hledat?Q=dluznici.osobaId:andrej-babis',
      creditorCount: 0,
      creditorLink: 'https://www.hlidacstatu.cz/insolvence/hledat?Q=veritele.osobaId:andrej-babis',
      bailiffCount: 0,
      bailiffLink: 'https://www.hlidacstatu.cz/insolvence/hledat?Q=spravci.osobaId:andrej-babis',
    },
    insolvencyCompany: {
      debtorCount: 9,
      debtorLink: 'https://www.hlidacstatu.cz/insolvence/hledat?Q=osobaiddluznik:andrej-babis',
      creditorCount: 534,
      creditorLink: 'https://www.hlidacstatu.cz/insolvence/hledat?Q=osobaidveritel:andrej-babis',
      bailiffCount: 0,
      bailiffLink: 'https://www.hlidacstatu.cz/insolvence/hledat?Q=osobaidspravce:andrej-babis',
    },
    source: 'https://www.hlidacstatu.cz/osoba/andrej-babis',
    sponsor: [
      { party: 'ANO 2011', donatedAmount: 50000.0, year: 2015, source: null },
      { party: 'ANO 2011', donatedAmount: 50000.0, year: 2014, source: null },
      {
        party: 'ANO 2011',
        donatedAmount: 50000.0,
        year: 2016,
        source: 'https://www.hlidacstatu.cz/ucty/transakce/E0240468669B1CB5493A2475DA477597',
      },
      { party: 'ANO 2011', donatedAmount: 500000.0, year: 2017, source: 'https://udhpsh.cz/5290-2/' },
      { party: 'ANO 2011', donatedAmount: 5082.0, year: 2017, source: 'https://udhpsh.cz/5290-2/' },
      { party: 'ANO 2011', donatedAmount: 50000.0, year: 2017, source: 'https://udhpsh.cz/5290-2/' },
      { party: 'ANO 2011', donatedAmount: 2500000.0, year: 2012, source: 'https://udhpsh.cz/5290-2/' },
      { party: 'ANO 2011', donatedAmount: 2000000.0, year: 2012, source: 'https://udhpsh.cz/5290-2/' },
      { party: 'ANO 2011', donatedAmount: 2000000.0, year: 2012, source: 'https://udhpsh.cz/5290-2/' },
      { party: 'ANO 2011', donatedAmount: 2000000.0, year: 2012, source: 'https://udhpsh.cz/5290-2/' },
      { party: 'ANO 2011', donatedAmount: 2000000.0, year: 2012, source: 'https://udhpsh.cz/5290-2/' },
      { party: 'ANO 2011', donatedAmount: 2000000.0, year: 2012, source: 'https://udhpsh.cz/5290-2/' },
      { party: 'ANO 2011', donatedAmount: 2000000.0, year: 2012, source: 'https://udhpsh.cz/5290-2/' },
      { party: 'ANO 2011', donatedAmount: 1000000.0, year: 2012, source: 'https://udhpsh.cz/5290-2/' },
      { party: 'ANO 2011', donatedAmount: 1000000.0, year: 2012, source: 'https://udhpsh.cz/5290-2/' },
      { party: 'ANO 2011', donatedAmount: 1000000.0, year: 2012, source: 'https://udhpsh.cz/5290-2/' },
      { party: 'ANO 2011', donatedAmount: 1000000.0, year: 2012, source: 'https://udhpsh.cz/5290-2/' },
      { party: 'ANO', donatedAmount: 50000.0, year: 2018, source: 'https://udhpsh.cz/5290-2/' },
      { party: 'ANO', donatedAmount: 19400.0, year: 2018, source: 'https://udhpsh.cz/5290-2/' },
    ],
    valid: true,
    currentParty: 'KSČ',
  }),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  fetchDemagog: id => ({
    data: {
      speakers: [
        {
          id: '183',
          firstName: 'Andrej',
          lastName: 'Babiš',
          stats: { misleading: 112, true: 355, untrue: 133, unverifiable: 166 },
        },
      ],
    },
  }),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  fetchNews: (fullName, party, searchQuery) => ({
    articles: [
      {
        id: 71852094,
        source: 'forum24.cz',
        title: 'Babiš má dnes výročí. Před 37 lety se stal estébákem Burešem. Připomeňte si, jak udal Rakušany',
        url:
          'https://www.forum24.cz/babis-ma-dnes-vyroci-pred-37-lety-se-stal-estebakem-buresem-pripomente-si-jak-udal-rakusany/',
        published: '2019-11-11T13:14:56+01:00',
        shares: 12550,
        perex:
          'Babiš má dnes výročí. Před 37 lety se stal estébákem Burešem. Připomeňte si, jak udal Rakušany↵↵Andrej Babiš Stb↵↵/SPIS AGENTA BUREŠE V TEXTU/ Zatímco většina národa se teprve chystá na oslavy 30 let od pádu totalitního komunistického',
        text: 'text',
      },
      {
        id: 72674846,
        source: 'zpravy.aktualne.cz',
        title: 'Babiš je ve střetu zájmů, potvrdila konečná verze auditu Evropské komise',
        url:
          'https://zpravy.aktualne.cz/domaci/babis-je-ve-stretu-zajmu-potvrdila-konecna-verze-auditu-evro/r~9aa81d3a145611eaa24cac1f6b220ee8/',
        published: '2019-12-01T17:22:17+01:00',
        shares: 11871,
        perex:
          'Babiš je ve střetu zájmů, potvrdila konečná verze auditu Evropské komise↵↵Český premiér Andrej Babiš je podle konečné verze auditu Evropské komise ve střetu zájmů. S odvoláním na dva zdroje obeznámené s průběhem řízení a obsahem dokumentu',
        text: 'text',
      },
      {
        id: 73331083,
        source: 'zpravy.aktualne.cz',
        title: 'Milion chvilek zvažuje žalobu na Filipa. Spojil je s útokem na nemocnici v, Benešově',
        url:
          'https://zpravy.aktualne.cz/domaci/milion-chvilek-zvazuje-zalobu-na-filipa-spojil-je-s-utokem/r~ea0477ee20b711ea9b40ac1f6b220ee8/',
        published: '2019-12-17T13:05:08+01:00',
        shares: 11725,
        perex:
          'Milion chvilek zvažuje žalobu na Filipa. Spojil je s útokem na nemocnici v Benešově↵↵Spolek Milion chvilek, který pravidelně v Praze i dalších českých městech pořádá demonstrace proti premiéru Andreji Babišovi, zvažuje, že se bude právně',
        text: 'text',
      },
    ],
    topic_map: { test: [73331083] }, // eslint-disable-line @typescript-eslint/camelcase
  }),
}

export default api
