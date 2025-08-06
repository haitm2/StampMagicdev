import AsyncStorage from "@react-native-async-storage/async-storage"

const discovery = [
  {
    "image": require("../assets/mostvalue/most_value_world.jpg"),
    "title": "The 10 Most Valuable Stamps In the World",
    "contents": [
      {
        "text": "The Top 10 Most Valuable Stamps in the World:",
        "type": "title"
      },
      {
        "text": "1. British Guiana 1c Magenta (1856)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/stamp-identifier/world_1.jpg",
        "type": "image"
      },
      {
        "text": "Sold for $9.48 million, this is the most expensive stamp ever sold. It's the only known example in existence, making it truly one of a kind.",
        "type": "normal"
      },
      {
        "text": "2. Treskilling Yellow (1855)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/stamp-identifier/world_2.jpg",
        "type": "image"
      },
      {
        "text": "A rare color error from Sweden, this stamp was sold for around $2.6 million. Only one example is known to exist.",
        "type": "normal"
      },
      {
        "text": "3. The Sicilian Error of Color (1859)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/stamp-identifier/world_3.jpg",
        "type": "image"
      },
      {
        "text": "This color error stamp from the Kingdom of Sicily fetched around $2.6 million at auction. It is notable for its vivid color and pristine condition.",
        "type": "normal"
      },
      {
        "text": "4. Baden 9 Kreuzer Error (1851)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/stamp-identifier/world_4.jpg",
        "type": "image"
      },
      {
        "text": "A German color error stamp, the Baden 9 Kreuzer was printed in green instead of pink. Valued at approximately €1.31 million.",
        "type": "normal"
      },
      {
        "text": "5. Inverted Jenny (1918)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/stamp-identifier/world_5.jpg",
        "type": "image"
      },
      {
        "text": "This famous misprint of a biplane flying upside down has sold for up to $1.6 million. Only 100 stamps were ever released with this error.",
        "type": "normal"
      },
      {
        "text": "6. 1c Benjamin Franklin Z-Grill (1868)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/stamp-identifier/world_6.jpg",
        "type": "image"
      },
      {
        "text": "Known for its unique grill pattern, the Z-Grill is one of the rarest U.S. stamps. Only two copies are known to exist. Estimated value: $935,000.",
        "type": "normal"
      },
      {
        "text": "7. 3c George Washington B-Grill (1867)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/stamp-identifier/world_7.jpg",
        "type": "image"
      },
      {
        "text": "Another rare U.S. grill stamp, this one features George Washington and is valued at approximately $900,000.",
        "type": "normal"
      },
      {
        "text": "8. Tiflis Stamp (1857)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/stamp-identifier/world_8.jpg",
        "type": "image"
      },
      {
        "text": "Issued in the Russian Empire for use in Tiflis (modern-day Tbilisi, Georgia), this stamp has fetched prices up to $700,000.",
        "type": "normal"
      },
      {
        "text": "9. 24c Declaration of Independence (1869)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/stamp-identifier/world_9.jpg",
        "type": "image"
      },
      {
        "text": "A rare U.S. stamp featuring a rendition of the Declaration of Independence, it sold for $625,000 at auction.",
        "type": "normal"
      },
      {
        "text": "10. Hawaiian Missionaries (1851)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/stamp-identifier/world_10.jpg",
        "type": "image"
      },
      {
        "text": "These are the first stamps ever issued by the Kingdom of Hawaii. Depending on condition, prices can reach up to $600,000.",
        "type": "normal"
      },
      {
        "text": "❝ Stamp prices may vary over time depending on market demand and preservation quality.",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/mostvalue/most_value_us.jpg"),
    "title": "The Rarest US Stamps",
    "contents": [
      {
        "text": "The 5 Rarest U.S. Stamps:",
        "type": "title"
      },
      {
        "text": "1. Alexandria “Blue Boy” Postmaster’s Provisional (1847)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/stamp-identifier/us_1.jpg",
        "type": "image"
      },
      {
        "text": "A unique blue provisional stamp from Alexandria, VA—only one known. Affixed to its original letter, it sold for $1.18 million in 2019.",
        "type": "normal"
      },
      {
        "text": "2. 1¢ Benjamin Franklin Z‑Grill (1868)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/stamp-identifier/us_2.jpg",
        "type": "image"
      },
      {
        "text": "Only two known examples exist. One sold for $930,000 in 1998; estimated today at ~$4.4 million.",
        "type": "normal"
      },
      {
        "text": "3. 3¢ Washington B‑Grill (1867)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/stamp-identifier/us_3.jpg",
        "type": "image"
      },
      {
        "text": "Only four known on cover, sold as a set for around $1 million in 2008.",
        "type": "normal"
      },
      {
        "text": "4. 5¢ Jefferson A‑Grill (1868)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/stamp-identifier/us_4.jpg",
        "type": "image"
      },
      {
        "text": "Very limited run (~2,000 printed), with fewer than 5 examples known. One sold for $340,000 in 2019.",
        "type": "normal"
      },
      {
        "text": "5. Inverted Jenny (24¢ airmail, 1918)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/stamp-identifier/us_5.jpg",
        "type": "image"
      },
      {
        "text": "Famous airplane‑invert error. Only a single sheet of 100 exists. Latest sale of $2,006,000 in Nov 2023.",
        "type": "normal"
      },
      {
        "text": "❝ U.S. stamp values can shift over time based on rarity, condition, and provenance.",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/mostvalue/most_value_uk.jpg"),
    "title": "The Most Valuable UK Stamps",
    "contents": [
      {
        "text": "The Most Valuable UK Stamps:",
        "type": "title"
      },
      {
        "text": "1. 1841 Penny Red Plate 77",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/stamp-identifier/uk_1.jpg",
        "type": "image"
      },
      {
        "text": "This rare variant from plate 77—one of only five known—sold for £495,000 in 2016, making it one of the most valuable British stamps.",
        "type": "normal"
      },
      {
        "text": "2. 6d Pale Purple Edward VII (IR Official)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/stamp-identifier/uk_2.jpg",
        "type": "image"
      },
      {
        "text": "An Inland Revenue overprint withdrawn on issue—with only 19 sheets produced—this was sold for £410,000 in 2010; other examples have exceeded £100k.",
        "type": "normal"
      },
      {
        "text": "3. Penny Black imprimatur (Plate 1)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/stamp-identifier/uk_3.jpg",
        "type": "image"
      },
      {
        "text": "A prime corner imprimatur from the first plate test prints—sold for £216,000 in 2011.",
        "type": "normal"
      },
      {
        "text": "4. 2d Tyrian Plum, 1910",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/stamp-identifier/uk_4.jpg",
        "type": "image"
      },
      {
        "text": "Unissued after Edward VII’s death; only about a dozen survive. One sold from the Chartwell Collection for $159,500 (~£125k).",
        "type": "normal"
      },
      {
        "text": "5. £1 Postal Union Congress, 1929",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/stamp-identifier/uk_5.jpg",
        "type": "image"
      },
      {
        "text": "A finely engraved commemorative featuring St George and the Dragon—sold for $950 (~£750) in 2007.",
        "type": "normal"
      },
      {
        "text": "❝ Stamp values depend heavily on rarity, condition, and historical context, and can change over time.",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/mostvalue/most_value_ca.jpg"),
    "title": "Top most valuable Canadian stamps",
    "contents": [
      {
        "text": "The Most Valuable Canadian Stamps:",
        "type": "title"
      },
      {
        "text": "1. 1851 12d Black \"Black Empress\" (Queen Victoria)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/stamp-identifier/ca_1.jpg",
        "type": "image"
      },
      {
        "text": "One of Canada’s rarest classic stamps—mint examples sold for around $225,000 in 2013. Only about 120–130 copies are believed to exist.",
        "type": "normal"
      },
      {
        "text": "2. 1868 2¢ Large Queen on Laid Paper",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/stamp-identifier/ca_2.jpg",
        "type": "image"
      },
      {
        "text": "Only three used examples are known. One fetched $215,000 in 2014; catalog values reach up to $250,000.",
        "type": "normal"
      },
      {
        "text": "3. 1851 3d Vermillion Beaver (First animal stamp)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/stamp-identifier/ca_3.jpg",
        "type": "image"
      },
      {
        "text": "Canada’s first animal-illustration stamp, the 1851 3d Vermillion beaver sold for $120,000 in 2014.",
        "type": "normal"
      },
      {
        "text": "4. 1927 London‑to‑London Flight 25¢ Airmail Stamp",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/stamp-identifier/ca_4.jpg",
        "type": "image"
      },
      {
        "text": "Only 100 printed; approximately 13 unused singles survive. Mint stamps trade between $50,000 and $100,000.",
        "type": "normal"
      },
      {
        "text": "5. 1927 60¢ Airmail Overprint (Francesco de Pinedo Flight)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/stamp-identifier/ca_5.jpg",
        "type": "image"
      },
      {
        "text": "Only 300 printed, with just 33 mint known today. Used on flights by famed aviator de Pinedo; highly desired by collectors.",
        "type": "normal"
      },
      {
        "text": "❝ Stamp values may change over time due to market demands and condition.",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/mostvalue/most_value_au.jpg"),
    "title": "Top 5 most expensive AU stamps",
    "contents": [
      {
        "text": "The trading card market has seen a surge in popularity and value in recent years, with some cards reaching astronomical prices.\nHere are the top 5 most expensive sports cards TCG in the world, along with detailed information and their current market value:",
        "type": "title"
      },
      {
        "text": "1. 1909-11 T206 Honus Wagner",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/stamp-identifier/au_1.jpg",
        "type": "image"
      },
      {
        "text": "Price: Approximately $7.25 million (as of 2023)\nRarity: Extremely rare, with only a handful of known copies in existence.\nSignificance: Honus Wagner was a legendary baseball player, and the card's scarcity and historical importance make it one of the most coveted collectibles in the world.",
        "type": "normal"
      },
      {
        "text": "2. 1986-87 Fleer Michael Jordan Rookie Card",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/stamp-identifier/au_2.jpg",
        "type": "image"
      },
      {
        "text": "Price: Approximately $2 million (as of 2023)\nRarity: Highly sought-after due to Michael Jordan's iconic status in basketball.\nSignificance: This is Jordan's rookie card, marking the beginning of his legendary career.",
        "type": "normal"
      },
      {
        "text": "3. 1952 Topps Mickey Mantle Rookie Card",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/stamp-identifier/au_3.jpg",
        "type": "image"
      },
      {
        "text": "Price: Approximately $1.5 million (as of 2023)\nRarity: Another iconic rookie card, featuring one of the greatest baseball players of all time.\nSignificance: Mantle's card is highly collectible due to his exceptional career and the card's historical value.",
        "type": "normal"
      },
      {
        "text": "4. 1954 Topps Ted Williams",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/stamp-identifier/au_4.jpg",
        "type": "image"
      },
      {
        "text": "Price: Approximately $1 million (as of 2023)\nRarity: A relatively rare card featuring another legendary baseball player.\nSignificance: Williams card is highly valued due to his exceptional career and the card's historical importance.",
        "type": "normal"
      },
      {
        "text": "5. 1968 Topps PSA 10 Jim Brown Rookie Card",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/stamp-identifier/au_5.jpg",
        "type": "image"
      },
      {
        "text": "Price: Approximately $1 million (as of 2023)\nRarity: A rare rookie card of a legendary NFL running back.\nSignificance: Brown's card is highly collectible due to his exceptional career and the card's historical value.",
        "type": "normal"
      },
      {
        "text": "❝ Please note that these prices are estimates and can fluctuate based on market conditions and the specific condition of the card. Additionally, there are other valuable sports cards that may not be included in this list due to their rarity or recent sales.",
        "type": "title"
      }
    ]
  }
]

const it_discovery = [
  {
    "image": require("../assets/mostvalue/most_value_world.jpg"),
    "title": "Le 5 carte M.T.G più costose",
    "contents": [
      {
        "text": "Le 5 carte di Magic: The Gathering più costose al mondo sono:",
        "type": "title"
      },
      {
        "text": "1. L'Unico Anello (Numero di serie 001/001)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/theonering.jpg",
        "type": "image"
      },
      {
        "text": "Questa carta del set Il Signore degli Anelli: Racconti della Terra di Mezzo è la carta più costosa mai venduta, con un la sbalorditiva cifra di 2 milioni di $. È una carta unica nel suo genere con numero di serie e elementi di design unici.",
        "type": "normal"
      },
      {
        "text": "2. Black Lotus (Alpha)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/blacklotus.jpg",
        "type": "image"
      },
      {
        "text": "Una carta classica del primo set del gioco, Alpha, Black Lotus è molto ricercata per la sua rarità e il suo potente effetto. Può attingere per tre mana di qualsiasi colore. I prezzi di Black Lotus variano a seconda delle condizioni, ma è costantemente una delle carte più costose. Le vendite recenti sono andate da $ 500.000 a $ 800.000.",
        "type": "normal"
      },
      {
        "text": "3. Copia Artefatto (Alpha)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/copyartifact.jpg",
        "type": "image"
      },
      {
        "text": "Un'altra carta del set Alpha, Copia Artefatto ti consente di copiare qualsiasi artefatto o incantesimo sul campo di battaglia. La sua rarità e il suo potente effetto lo rendono molto prezioso. I prezzi per Copia Artefatto in genere vanno da $ 50.000 a $ 100.000.",
        "type": "normal"
      },
      {
        "text": "4. Mox Sapphire (Alpha)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/moxsapphire.jpg",
        "type": "image"
      },
      {
        "text": "Una potente fonte di mana che attinge al mana blu, Mox Sapphire è una delle carte più ambite del gioco. È molto ricercata sia dai collezionisti che dai giocatori. I prezzi di Mox Sapphire possono variare notevolmente, ma in genere si ritiene che valga circa $ 50.000.",
        "type": "normal"
      },
      {
        "text": "5. Mox Ruby (Alpha)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/moxruby.jpg",
        "type": "image"
      },
      {
        "text": "Simile a Mox Sapphire, Mox Ruby è una potente fonte di mana che attinge al mana rosso. È un'altra carta molto ricercata, con prezzi che in genere vanno da $ 40.000 a $ 50.000.",
        "type": "normal"
      },
      {
        "text": "❝ È importante notare che i prezzi di queste carte possono variare nel tempo in base alle condizioni di mercato e alla disponibilità di esempi di alta qualità.",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/mostvalue/most_value_us.jpg"),
    "title": "Le 5 carte Y.G.O più costose",
    "contents": [
      {
        "text": "Le 5 carte Yu-Gi-Oh più costose al mondo, nel 2023, sono:",
        "type": "title"
      },
      {
        "text": "1. Black Luster Soldier (acciaio inossidabile)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/blackluster.jpg",
        "type": "image"
      },
      {
        "text": "Valore stimato: $ 10.000.000. Questa carta è una articolo promozionale unico nel suo genere, dato al vincitore di un torneo di Yu-Gi-Oh!. La sua rarità e il materiale unico lo rendono estremamente prezioso.",
        "type": "normal"
      },
      {
        "text": "2. Tyler il Grande Guerriero",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/tyler.jpg",
        "type": "image"
      },
      {
        "text": "Valore stimato: $311.211. Questa carta era una carta premio di un torneo di Yu-Gi-Oh! ed è estremamente rara. Il suo alto valore è dovuto alla sua rarità e al suo potente effetto.",
        "type": "normal"
      },
      {
        "text": "3. Illustrazione alternativa Gemini Elf T3-04",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/geminielf.jpg",
        "type": "image"
      },
      {
        "text": "Valore stimato: $254.791. Questa carta è una variante rara della carta Gemini Elf, con un'illustrazione alternativa unica. Il suo alto valore è dovuto alla sua rarità e alla sua natura da collezione.",
        "type": "normal"
      },
      {
        "text": "4. Drago Bianco Occhi Blu (LOB 1a Edizione)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/blueeyes.jpg",
        "type": "image"
      },
      {
        "text": "Valore stimato: $85.000. Questa carta è una classica carta Yu-Gi-Oh! molto ricercata dai collezionisti. Il suo alto valore è dovuto alla sua rarità e al suo status iconico.",
        "type": "normal"
      },
      {
        "text": "5. Dark Magician (LOB 1a edizione)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/darkmagician.jpg",
        "type": "image"
      },
      {
        "text": "Valore stimato: $ 85.000. Questa carta è un'altra carta classica di Yu-Gi-Oh! molto ricercata dai collezionisti. Il suo alto valore è dovuto alla sua rarità e al suo status iconico.",
        "type": "normal"
      },
      {
        "text": "❝ Si prega di notare che questi valori sono stime e possono variare nel tempo. Inoltre, il valore di una carta Yu-Gi-Oh! la carta può essere influenzata da fattori quali le sue condizioni, la sua classificazione e la sua provenienza.",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/mostvalue/most_value_uk.jpg"),
    "title": "Le 5 carte P.K.M più costose",
    "contents": [
      {
        "text": "I prezzi delle carte P.K.M possono variare in base a vari fattori, tra cui rarità, condizioni e domanda di mercato. Ecco le 5 carte P.K.M più costose all'inizio del 2024, insieme ai loro prezzi approssimativi e dettagli chiave:",
        "type": "title"
      },
      {
        "text": "1. Illustratore P.i.k.a.c.h.u (1998)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/pikachu.jpg",
        "type": "image"
      },
      {
        "text": "Prezzo: $5.275.000\nRarità: carta promozionale rilasciata per la rivista Corocoro\nCaratteristiche principali: illustrazione unica nel suo genere, classificata PSA 10, acquistata dallo YouTuber Logan Paul",
        "type": "normal"
      },
      {
        "text": "2. Shadowless Base Set Holo Charizard (1999)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/charizard.jpg",
        "type": "image"
      },
      {
        "text": "Prezzo: $420.000\nRarità: Set base, olografico, prima edizione, versione senza ombre\nCaratteristiche principali: Iconico P.K.M, molto richiesto dai collezionisti, classificato PSA 10",
        "type": "normal"
      },
      {
        "text": "3. 1998 Japanese Promo Trophy P.i.k.a.c.h.u Silver 2nd-2nd Tournament",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/pikachu2.jpg",
        "type": "image"
      },
      {
        "text": "Prezzo: $444.000\nRarità: carta promozionale assegnata come premio del torneo\nCaratteristiche principali: design del trofeo d'argento, raro e molto ricercato",
        "type": "normal"
      },
      {
        "text": "4. 1998 P.K.M Blastoise #009/165R Presentazione commissionata Galaxy Star Ologramma",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/blastoise.jpg",
        "type": "image"
      },
      {
        "text": "Prezzo: $360.000\nRarità: Scheda di presentazione commissionata con un design unico\nCaratteristiche principali: Ologramma Galaxy Star, uno dei pochi esempi noti",
        "type": "normal"
      },
      {
        "text": "5. Umbreon Gold Star (2005)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/umbreon.jpg",
        "type": "image"
      },
      {
        "text": "Prezzo: $ 180.000\nRarità: giapponese 70.000 punti PLAY Promo\nGrado: PSA 10\nMese di vendita: febbraio 2024",
        "type": "normal"
      },
      {
        "text": "❝ Nota che i prezzi possono cambiare nel tempo e che nuove carte potrebbero rivelarsi le più costose. È sempre una buona idea controllare i risultati delle aste recenti per le informazioni più aggiornate.",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/mostvalue/most_value_ca.jpg"),
    "title": "Le 5 carte Sport più costose",
    "contents": [
      {
        "text": "Il mercato delle carte collezionabili ha visto un'impennata di popolarità e valore negli ultimi anni, con alcune carte che hanno raggiunto prezzi astronomici.\nEcco le 5 carte sportive TCG più costose al mondo, insieme a informazioni dettagliate e al loro attuale valore di mercato:",
        "type": "title"
      },
      {
        "text": "1. 1909-11 T206 Honus Wagner",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/wagner.jpg",
        "type": "image"
      },
      {
        "text": "Prezzo: circa 7,25 milioni di $ (al 2023)\nRarità: estremamente rara, con solo una manciata di copie note esistenti.\nImportanza: Honus Wagner era un giocatore di baseball leggendario e la rarità e l'importanza storica della carta la rendono uno degli oggetti da collezione più ambiti al mondo.",
        "type": "normal"
      },
      {
        "text": "2. 1986-87 Fleer Michael Jordan Rookie Card",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/jordan.jpg",
        "type": "image"
      },
      {
        "text": "Prezzo: circa 2 milioni di $ (al 2023)\nRarità: molto ricercato per lo status iconico di Michael Jordan nel basket.\nImportanza: questa è la carta da principiante di Jordan, che segna l'inizio della sua leggendaria carriera.",
        "type": "normal"
      },
      {
        "text": "3. 1952 Topps Mickey Mantle Rookie Card",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/mickey.jpg",
        "type": "image"
      },
      {
        "text": "Prezzo: circa 1,5 milioni di $ (al 2023)\nRarità: un'altra iconica carta da principiante, raffigurante uno dei più grandi giocatori di baseball di tutti i tempi.\nImportanza: la carta di Mantle è altamente collezionabile per la sua eccezionale carriera e il valore storico della carta.",
        "type": "normal"
      },
      {
        "text": "4. 1954 Topps Ted Williams",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/topp.jpg",
        "type": "image"
      },
      {
        "text": "Prezzo: circa 1 milione di $ (al 2023)\nRarità: una carta relativamente rara raffigurante un altro giocatore di baseball leggendario.\nImportanza: la carta Williams è molto apprezzata per la sua eccezionale carriera e per l'importanza storica della carta.",
        "type": "normal"
      },
      {
        "text": "5. 1968 Topps PSA 10 Jim Brown Rookie Card",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/jim.jpg",
        "type": "image"
      },
      {
        "text": "Prezzo: circa 1 milione di $ (al 2023)\nRarità: una rara carta da principiante di un leggendario running back della NFL.\nImportanza: la carta di Brown è altamente collezionabile per la sua eccezionale carriera e il valore storico della carta.",
        "type": "normal"
      },
      {
        "text": "❝ Si prega di notare che questi prezzi sono stime e possono variare in base alle condizioni di mercato e alle condizioni specifiche della carta. Inoltre, ci sono altre carte sportive di valore che potrebbero non essere incluse in questa lista a causa della loro rarità o delle vendite recenti.",
        "type": "title"
      }
    ]
  }
]

const vi_discovery = [
  {
    "image": require("../assets/mostvalue/most_value_world.jpg"),
    "title": "Top 5 thẻ M.T.G đắt nhất",
    "contents": [
      {
        "text": "Top 5 thẻ Magic: The Gathering đắt nhất trên thế giới:",
        "type": "title"
      },
      {
        "text": "1. The One Ring (Serial Number 001/001)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/theonering.jpg",
        "type": "image"
      },
      {
        "text": "Thẻ này từ bộ Lord of the Rings: Tales of Middle-earth là thẻ đắt nhất từng được bán, đạt mức giá kỷ lục 2 triệu USD. Đây là thẻ có số serial duy nhất với thiết kế đặc biệt.",
        "type": "normal"
      },
      {
        "text": "2. Black Lotus (Alpha)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/blacklotus.jpg",
        "type": "image"
      },
      {
        "text": "Thẻ cổ điển từ bộ đầu tiên của trò chơi, Alpha. Black Lotus rất được săn đón do độ hiếm và hiệu ứng mạnh mẽ. Giá của Black Lotus thay đổi tùy thuộc vào tình trạng nhưng luôn nằm trong danh sách những thẻ đắt nhất. Các giao dịch gần đây dao động từ 500.000 USD đến 800.000 USD.",
        "type": "normal"
      },
      {
        "text": "3. Copy Artifact (Alpha)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/copyartifact.jpg",
        "type": "image"
      },
      {
        "text": "Một thẻ khác từ bộ Alpha, Copy Artifact cho phép bạn sao chép bất kỳ artifact hoặc enchantment nào trên bàn chơi. Độ hiếm và hiệu ứng mạnh mẽ của nó làm tăng giá trị đáng kể. Giá thường dao động từ 50.000 USD đến 100.000 USD.",
        "type": "normal"
      },
      {
        "text": "4. Mox Sapphire (Alpha)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/moxsapphire.jpg",
        "type": "image"
      },
      {
        "text": "Một nguồn mana mạnh mẽ cung cấp mana màu xanh, Mox Sapphire là một trong những thẻ được săn đón nhất trong trò chơi. Nó rất được ưa chuộng bởi cả nhà sưu tập và người chơi. Giá trị của Mox Sapphire có thể dao động lớn, nhưng thường khoảng 50.000 USD.",
        "type": "normal"
      },
      {
        "text": "5. Mox Ruby (Alpha)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/moxruby.jpg",
        "type": "image"
      },
      {
        "text": "Tương tự Mox Sapphire, Mox Ruby là nguồn mana mạnh mẽ cung cấp mana màu đỏ. Đây cũng là một thẻ rất được săn đón, với giá trị dao động từ 40.000 USD đến 50.000 USD.",
        "type": "normal"
      },
      {
        "text": "❝ Lưu ý rằng giá của những thẻ này có thể biến động theo thời gian dựa trên điều kiện thị trường và chất lượng của các phiên bản.",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/mostvalue/most_value_us.jpg"),
    "title": "Top 5 thẻ Y.G.O đắt nhất",
    "contents": [
      {
        "text": "5 lá bài Yu-Gi-Oh đắt nhất thế giới tính đến năm 2023 là:",
        "type": "title"
      },
      {
        "text": "1.Black Luster Soldier (Stainless Steel)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/blackluster.jpg",
        "type": "image"
      },
      {
        "text": "Giá trị ước tính: 10.000.000 đô la. Lá bài này là một vật phẩm khuyến mại độc nhất vô nhị được trao cho người chiến thắng trong giải đấu Yu-Gi-Oh!. Độ hiếm và chất liệu độc đáo của nó khiến nó cực kỳ có giá trị.",
        "type": "normal"
      },
      {
        "text": "2. Tyler the Great Warrior",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/tyler.jpg",
        "type": "image"
      },
      {
        "text": "Giá trị ước tính: 311.211 đô la. Lá bài này là lá bài giải thưởng từ một giải đấu Yu-Gi-Oh! và cực kỳ hiếm. Giá trị cao của nó là do độ hiếm và hiệu ứng mạnh mẽ của nó.",
        "type": "normal"
      },
      {
        "text": "3. Alternate Artwork Gemini Elf T3-04",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/geminielf.jpg",
        "type": "image"
      },
      {
        "text": "Giá trị ước tính: 254.791 đô la. Lá bài này là một biến thể hiếm của lá bài Gemini Elf, với tác phẩm nghệ thuật thay thế độc đáo. Giá trị cao của nó là do tính hiếm và tính chất sưu tầm của nó.",
        "type": "normal"
      },
      {
        "text": "4. Blue-Eyes White Dragon (LOB 1st Edition)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/blueeyes.jpg",
        "type": "image"
      },
      {
        "text": "Giá trị ước tính: 85.000 đô la. Lá bài này là lá bài Yu-Gi-Oh! cổ điển được nhiều nhà sưu tập săn đón. Giá trị cao của nó là do tính hiếm và tính biểu tượng của nó.",
        "type": "normal"
      },
      {
        "text": "5. Dark Magician (LOB 1st Edition)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/darkmagician.jpg",
        "type": "image"
      },
      {
        "text": "Giá trị ước tính: 85.000 đô la. Lá bài này là một lá bài Yu-Gi-Oh! cổ điển khác được các nhà sưu tập săn đón. Giá trị cao của nó là do tính hiếm và tính biểu tượng của nó.",
        "type": "normal"
      },
      {
        "text": "❝ Xin lưu ý rằng các giá trị này là ước tính và có thể thay đổi theo thời gian. Ngoài ra, giá trị của thẻ Yu-Gi-Oh! có thể bị ảnh hưởng bởi các yếu tố như tình trạng, phân loại và xuất xứ của thẻ.",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/mostvalue/most_value_uk.jpg"),
    "title": "Top 5 thẻ P.K.M đắt nhất",
    "contents": [
      {
        "text": "Giá của thẻ P.K.M có thể dao động dựa trên nhiều yếu tố, bao gồm độ hiếm, tình trạng và nhu cầu thị trường. Sau đây là 5 thẻ P.K.M đắt nhất tính đến đầu năm 2024, cùng với giá xấp xỉ và các thông tin chi tiết chính:",
        "type": "title"
      },
      {
        "text": "1. Illustrator P.i.k.a.c.h.u (1998)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/pikachu.jpg",
        "type": "image"
      },
      {
        "text": "Giá: 5.275.000 đô la\nĐộ hiếm: Thẻ quảng cáo được phát hành cho tạp chí Corocoro\nCác tính năng chính: Hình minh họa độc nhất vô nhị, được phân loại PSA 10, được YouTuber Logan Paul mua",
        "type": "normal"
      },
      {
        "text": "2. Shadowless Base Set Holo Charizard (1999)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/charizard.jpg",
        "type": "image"
      },
      {
        "text": "Giá: 420.000 đô la\nĐộ hiếm: Bộ cơ bản, ảnh ba chiều, phiên bản đầu tiên, phiên bản không bóng\nCác tính năng chính: P.K.M mang tính biểu tượng, nhu cầu cao trong số các nhà sưu tập, được xếp loại PSA 10",
        "type": "normal"
      },
      {
        "text": "3. 1998 Japanese Promo Trophy P.i.k.a.c.h.u Silver 2nd-2nd Tournament",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/pikachu2.jpg",
        "type": "image"
      },
      {
        "text": "Giá: 444.000 đô la\nĐộ hiếm: Thẻ khuyến mại được trao tặng như một giải thưởng của giải đấu\nĐặc điểm chính: Thiết kế cúp bạc, hiếm và được săn đón nhiều",
        "type": "normal"
      },
      {
        "text": "4. 1998 P.K.M Blastoise #009/165R Commissioned Presentation Galaxy Star Hologram",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/blastoise.jpg",
        "type": "image"
      },
      {
        "text": "Giá: 360.000 đô la\nĐộ hiếm: Thẻ trình bày được thiết kế theo yêu cầu với thiết kế độc đáo\nCác tính năng chính: Ảnh ba chiều Galaxy Star, một trong số ít ví dụ được biết đến",
        "type": "normal"
      },
      {
        "text": "5. Umbreon Gold Star (2005)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/umbreon.jpg",
        "type": "image"
      },
      {
        "text": "Giá: 180.000 đô la\nĐộ hiếm: Nhật Bản 70.000 điểm CHƠI Khuyến mại\nĐiểm: PSA 10\nTháng bán: Tháng 2 năm 2024",
        "type": "normal"
      },
      {
        "text": "❝ Xin lưu ý rằng giá có thể thay đổi theo thời gian và thẻ mới có thể trở thành loại đắt nhất. Luôn là một ý tưởng hay khi kiểm tra kết quả đấu giá gần đây để biết thông tin mới nhất.",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/mostvalue/most_value_ca.jpg"),
    "title": "Top 5 thẻ Thể Thao đắt nhất",
    "contents": [
      {
        "text": "Thị trường thẻ bài giao dịch đã chứng kiến ​​sự gia tăng về mức độ phổ biến và giá trị trong những năm gần đây, với một số thẻ đạt đến mức giá trên trời.\nSau đây là 5 thẻ bài TCG thể thao đắt nhất thế giới, cùng với thông tin chi tiết và giá trị thị trường hiện tại của chúng:",
        "type": "title"
      },
      {
        "text": "1. 1909-11 T206 Honus Wagner",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/wagner.jpg",
        "type": "image"
      },
      {
        "text": "Giá: Khoảng 7,25 triệu đô la (tính đến năm 2023)\nĐộ hiếm: Cực kỳ hiếm, chỉ có một số ít bản sao được biết đến còn tồn tại.\nÝ nghĩa: Honus Wagner là một cầu thủ bóng chày huyền thoại, và sự khan hiếm cùng tầm quan trọng về mặt lịch sử của tấm thẻ này khiến nó trở thành một trong những đồ sưu tầm được thèm muốn nhất trên thế giới.",
        "type": "normal"
      },
      {
        "text": "2. 1986-87 Fleer Michael Jordan Rookie Card",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/jordan.jpg",
        "type": "image"
      },
      {
        "text": "Giá: Khoảng 2 triệu đô la (tính đến năm 2023)\nĐộ hiếm: Rất được săn đón vì vị thế biểu tượng của Michael Jordan trong làng bóng rổ.\nÝ nghĩa: Đây là thẻ tân binh của Jordan, đánh dấu sự khởi đầu sự nghiệp huyền thoại của anh.",
        "type": "normal"
      },
      {
        "text": "3. 1952 Topps Mickey Mantle Rookie Card",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/mickey.jpg",
        "type": "image"
      },
      {
        "text": "Giá: Khoảng 1,5 triệu đô la (tính đến năm 2023)\nĐộ hiếm: Một tấm thẻ tân binh mang tính biểu tượng khác, có hình một trong những cầu thủ bóng chày vĩ đại nhất mọi thời đại.\nÝ nghĩa: Tấm thẻ của Mantle có giá trị sưu tầm cao do sự nghiệp đặc biệt của anh ấy và giá trị lịch sử của tấm thẻ.",
        "type": "normal"
      },
      {
        "text": "4. 1954 Topps Ted Williams",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/topp.jpg",
        "type": "image"
      },
      {
        "text": "Giá: Khoảng 1 triệu đô la (tính đến năm 2023)\nĐộ hiếm: Một tấm thẻ tương đối hiếm có hình một cầu thủ bóng chày huyền thoại khác.\nÝ nghĩa: Thẻ Williams được đánh giá cao vì sự nghiệp đặc biệt của ông và tầm quan trọng lịch sử của tấm thẻ.",
        "type": "normal"
      },
      {
        "text": "5. 1968 Topps PSA 10 Jim Brown Rookie Card",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/jim.jpg",
        "type": "image"
      },
      {
        "text": "Giá: Khoảng 1 triệu đô la (tính đến năm 2023)\nĐộ hiếm: Một tấm thẻ tân binh hiếm có của một cầu thủ chạy cánh huyền thoại của NFL.\nÝ nghĩa: Tấm thẻ của Brown có giá trị sưu tầm cao do sự nghiệp đặc biệt của anh ấy và giá trị lịch sử của tấm thẻ.",
        "type": "normal"
      },
      {
        "text": "❝ Xin lưu ý rằng giá này là giá ước tính và có thể thay đổi tùy theo điều kiện thị trường và tình trạng cụ thể của thẻ. Ngoài ra, còn có những thẻ thể thao giá trị khác có thể không được đưa vào danh sách này do chúng hiếm hoặc mới được bán gần đây.",
        "type": "title"
      }
    ]
  }
]

const ja_discovery = [
  {
    "image": require("../assets/mostvalue/most_value_world.jpg"),
    "title": "最も高価な M.T.G カード トップ 5",
    "contents": [
      {
        "text": "世界で最も高価なマジック：ザ・ギャザリング カードのトップ 5 は次のとおりです。",
        "type": "title"
      },
      {
        "text": "1. The One Ring (Serial Number 001/001)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/theonering.jpg",
        "type": "image"
      },
      {
        "text": "『ロード オブ ザ リング: 中つ国の物語』セットのこのカードは、これまで販売されたカードの中で最も高額で、200 万ドルという驚異的な価格で落札されました。ユニークなデザイン要素を持つ、シリアル番号付きの唯一無二のカードです。",
        "type": "normal"
      },
      {
        "text": "2. Black Lotus (Alpha)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/blacklotus.jpg",
        "type": "image"
      },
      {
        "text": "ゲームの最初のセットであるアルファからのクラシック カードである Black Lotus は、その希少性と強力な効果により、非常に人気があります。任意の色のマナ 3 つをタップできます。Black Lotus の価格は状態によって異なりますが、常に最も高価なカードの 1 つです。最近の販売価格は 50 万ドルから 80 万ドルの範囲です。",
        "type": "normal"
      },
      {
        "text": "3. Copy Artifact (Alpha)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/copyartifact.jpg",
        "type": "image"
      },
      {
        "text": "アルファ セットの別のカードである Copy Artifact は、戦場にあるあらゆるアーティファクトやエンチャントをコピーできます。その希少性と強力な効果により、非常に価値があります。Copy Artifact の価格は通常、50,000 ドルから 100,000 ドルの範囲です。",
        "type": "normal"
      },
      {
        "text": "4. Mox Sapphire (Alpha)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/moxsapphire.jpg",
        "type": "image"
      },
      {
        "text": "タップして青マナを生み出す強力なマナ源である「モックス・サファイア」は、ゲーム内で最も切望されるカードの 1 つです。コレクターやプレイヤーの間で非常に人気があります。「モックス・サファイア」の価格は大きく異なりますが、一般的に 50,000 ドル程度の価値があると考えられています。",
        "type": "normal"
      },
      {
        "text": "5. Mox Ruby (Alpha)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/moxruby.jpg",
        "type": "image"
      },
      {
        "text": "モックス・サファイアと同様に、モックス・ルビーはタップして赤マナを生み出す強力なマナ源です。これも非常に人気のあるカードで、価格は通常 40,000 ドルから 50,000 ドルです。",
        "type": "normal"
      },
      {
        "text": "❝ これらのカードの価格は、市場の状況や高品質なカードの入手状況に応じて、時間の経過とともに変動する可能性があることに留意することが重要です。",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/mostvalue/most_value_us.jpg"),
    "title": "最も高価な Y.G.O カード トップ 5",
    "contents": [
      {
        "text": "2023年現在、世界で最も高価な遊戯王カードトップ5は次のとおりです。",
        "type": "title"
      },
      {
        "text": "1.Black Luster Soldier (Stainless Steel)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/blackluster.jpg",
        "type": "image"
      },
      {
        "text": "推定価値: 10,000,000 ドル。このカードは、遊戯王トーナメントの優勝者に贈られたユニークなプロモーション アイテムです。その希少性とユニークな素材により、非常に価値があります。",
        "type": "normal"
      },
      {
        "text": "2. Tyler the Great Warrior",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/tyler.jpg",
        "type": "image"
      },
      {
        "text": "推定価値: 311,211 ドル。このカードは Yu-Gi-Oh! トーナメントの賞品カードであり、非常に希少です。その希少性と強力な効果により、価値が高くなっています。",
        "type": "normal"
      },
      {
        "text": "3. Alternate Artwork Gemini Elf T3-04",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/geminielf.jpg",
        "type": "image"
      },
      {
        "text": "推定価値: 254,791 ドル。このカードは、ユニークな別のアートワークを備えた、ジェミニ エルフ カードの珍しいバリエーションです。その高い価値は、その希少性と収集性によるものです。",
        "type": "normal"
      },
      {
        "text": "4. Blue-Eyes White Dragon (LOB 1st Edition)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/blueeyes.jpg",
        "type": "image"
      },
      {
        "text": "推定価値: 85,000 ドル。このカードは、コレクターの間で非常に人気のある古典的な Yu-Gi-Oh! カードです。その高い価値は、その希少性と象徴的なステータスによるものです。",
        "type": "normal"
      },
      {
        "text": "5. Dark Magician (LOB 1st Edition)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/darkmagician.jpg",
        "type": "image"
      },
      {
        "text": "推定価値: 85,000 ドル。このカードは、コレクターの間で非常に人気のある、もう 1 つのクラシックな Yu-Gi-Oh! カードです。その高い価値は、その希少性と象徴的なステータスによるものです。",
        "type": "normal"
      },
      {
        "text": "❝ これらの値は推定値であり、時間の経過とともに変動する可能性があることにご注意ください。また、遊戯王カードの価値は、カードの状態、グレード、由来などの要因によって影響を受ける可能性があります。",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/mostvalue/most_value_uk.jpg"),
    "title": "最も高価な P.K.M カード トップ 5",
    "contents": [
      {
        "text": "P.K.M カードの価格は、希少性、状態、市場の需要など、さまざまな要因によって変動します。2024 年初頭時点で最も高価な P.K.M カードのトップ 5 を、おおよその価格と主な詳細とともに以下に示します。",
        "type": "title"
      },
      {
        "text": "1. イラストレーター P.i.k.a.c.h.u (1998)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/pikachu.jpg",
        "type": "image"
      },
      {
        "text": "価格: 5,275,000 ドル\n希少性: コロコロ誌向けにリリースされたプロモーション カード\n主な特徴: ユニークなイラスト、PSA 10 グレード、YouTuber の Logan Paul が購入",
        "type": "normal"
      },
      {
        "text": "2. シャドウレスベースセット ホロ Charizard (1999)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/charizard.jpg",
        "type": "image"
      },
      {
        "text": "価格: 420,000 ドル\n希少性: 基本セット、ホログラフィック、初版、シャドウレス バージョン\n主な特徴: 象徴的な P.K.M、コレクターの間で高い需要、PSA 10 グレード",
        "type": "normal"
      },
      {
        "text": "3. 1998年 日本プロモトロフィー P.i.k.a.c.h.u シルバー 2位-2位トーナメント",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/pikachu2.jpg",
        "type": "image"
      },
      {
        "text": "価格: 444,000 ドル\n希少性: トーナメント賞品として贈られるプロモーション カード\n主な特徴: シルバー トロフィー デザイン、希少で非常に人気があります",
        "type": "normal"
      },
      {
        "text": "4. 1998 P.K.M Blastoise #009/165R 委託プレゼンテーション ギャラクシースターホログラム",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/blastoise.jpg",
        "type": "image"
      },
      {
        "text": "価格: 360,000 ドル\n希少性: ユニークなデザインの委託プレゼンテーション カード\n主な特徴: ギャラクシー スター ホログラム、数少ない既知の例の 1 つ",
        "type": "normal"
      },
      {
        "text": "5. Umbreon ゴールドスター (2005)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/umbreon.jpg",
        "type": "image"
      },
      {
        "text": "価格: 180,000 ドル\n希少性: 日本の 70,000 ポイント PLAY プロモ\nグレード: PSA 10\n販売月: 2024 年 2 月",
        "type": "normal"
      },
      {
        "text": "❝ 価格は時間の経過とともに変化する可能性があり、新しいカードが最も高価になる可能性があることにご注意ください。最新の情報を得るには、最近のオークション結果を確認することをお勧めします。",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/mostvalue/most_value_ca.jpg"),
    "title": "最も高価なスポーツカードトップ5",
    "contents": [
      {
        "text": "トレーディング カード市場は近年、人気と価値が急上昇しており、一部のカードは天文学的な価格に達しています。\nここでは、世界で最も高価なスポーツ カード TCG のトップ 5 を、詳細情報と現在の市場価値とともに紹介します。",
        "type": "title"
      },
      {
        "text": "1. 1909-11 T206 Honus Wagner",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/wagner.jpg",
        "type": "image"
      },
      {
        "text": "価格: 約 725 万ドル (2023 年現在)\n希少性: 極めて希少で、現存するコピーはほんの一握りです。\n重要性: ホーナス・ワグナーは伝説的な野球選手であり、カードの希少性と歴史的重要性から、このカードは世界で最も切望される収集品の 1 つとなっています。",
        "type": "normal"
      },
      {
        "text": "2. 1986-87 Fleer Michael Jordan ルーキーカード",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/jordan.jpg",
        "type": "image"
      },
      {
        "text": "価格: 約 200 万ドル (2023 年現在)\n希少性: マイケル ジョーダンはバスケットボール界の象徴的な存在であるため、非常に人気があります。\n重要性: これはジョーダンのルーキー カードであり、彼の伝説的なキャリアの始まりを示しています。",
        "type": "normal"
      },
      {
        "text": "3. 1952 Topps Mickey Mantle ルーキーカード",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/mickey.jpg",
        "type": "image"
      },
      {
        "text": "価格: 約 150 万ドル (2023 年現在)\n希少性: 史上最高の野球選手の 1 人をフィーチャーした、もう 1 つの象徴的なルーキー カード。\n重要性: マントルのカードは、彼の並外れたキャリアとカードの歴史的価値により、収集価値が非常に高いです。",
        "type": "normal"
      },
      {
        "text": "4. 1954 Topps Ted Williams",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/topp.jpg",
        "type": "image"
      },
      {
        "text": "価格: 約 100 万ドル (2023 年現在)\n希少性: 伝説の野球選手をフィーチャーした比較的珍しいカード。\n重要性: ウィリアムズのカードは、彼の並外れたキャリアとカードの歴史的重要性により、高く評価されています。",
        "type": "normal"
      },
      {
        "text": "5. 1968 Topps PSA 10 Jim ルーキーカード",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/jim.jpg",
        "type": "image"
      },
      {
        "text": "価格: 約 100 万ドル (2023 年現在)\n希少性: 伝説の NFL ランニングバックの珍しいルーキー カード。\n重要性: ブラウンのカードは、彼の並外れたキャリアとカードの歴史的価値により、収集価値が非常に高いです。",
        "type": "normal"
      },
      {
        "text": "❝ これらの価格は推定値であり、市場の状況やカードの特定の状態に基づいて変動する可能性があることにご注意ください。また、希少性や最近販売されたため、このリストに含まれていない可能性のある他の貴重なスポーツカードもあります。",
        "type": "title"
      }
    ]
  }
]

const hi_discovery = [
  {
    "image": require("../assets/mostvalue/most_value_world.jpg"),
    "title": "शीर्ष 5 सबसे महंगे MTG कार्ड",
    "contents": [
      {
        "text": "दुनिया के शीर्ष 5 सबसे महंगे मैजिक: द गैदरिंग कार्ड हैं:",
        "type": "title"
      },
      {
        "text": "1. The One Ring (क्रम संख्या 001/001)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/theonering.jpg",
        "type": "image"
      },
      {
        "text": "लॉर्ड ऑफ द रिंग्स: टेल्स ऑफ मिडल-अर्थ सेट का यह कार्ड अब तक बिका सबसे महंगा कार्ड है, जिसकी कीमत 2 मिलियन डॉलर है। यह एक अनोखा सीरियल नंबर वाला कार्ड है जिसमें अनोखे डिज़ाइन तत्व हैं।",
        "type": "normal"
      },
      {
        "text": "2. Black Lotus (Alpha)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/blacklotus.jpg",
        "type": "image"
      },
      {
        "text": "खेल के पहले सेट, अल्फा, ब्लैक लोटस का एक क्लासिक कार्ड अपनी दुर्लभता और शक्तिशाली प्रभाव के कारण अत्यधिक मांग में है। यह किसी भी रंग के तीन मैना के लिए टैप कर सकता है। ब्लैक लोटस की कीमतें स्थिति के आधार पर अलग-अलग होती हैं, लेकिन यह लगातार सबसे महंगे कार्डों में से एक है। हाल ही में बिक्री $500,000 से $800,000 तक रही है।",
        "type": "normal"
      },
      {
        "text": "3. Copy Artifact (Alpha)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/copyartifact.jpg",
        "type": "image"
      },
      {
        "text": "अल्फा सेट का एक और कार्ड, कॉपी आर्टिफैक्ट आपको युद्ध के मैदान में किसी भी आर्टिफैक्ट या जादू की नकल करने की अनुमति देता है। इसकी दुर्लभता और शक्तिशाली प्रभाव इसे अत्यधिक मूल्यवान बनाते हैं। कॉपी आर्टिफैक्ट की कीमतें आम तौर पर $50,000 से $100,000 तक होती हैं।",
        "type": "normal"
      },
      {
        "text": "4. Mox Sapphire (Alpha)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/moxsapphire.jpg",
        "type": "image"
      },
      {
        "text": "एक शक्तिशाली मैना स्रोत जो नीले मैना के लिए टैप करता है, मोक्स सैफायर खेल में सबसे प्रतिष्ठित कार्डों में से एक है। यह कलेक्टरों और खिलाड़ियों द्वारा समान रूप से अत्यधिक मांग की जाती है। मोक्स सैफायर की कीमतें व्यापक रूप से भिन्न हो सकती हैं, लेकिन आम तौर पर इसे लगभग $50,000 का माना जाता है।",
        "type": "normal"
      },
      {
        "text": "5. Mox Ruby (Alpha)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/moxruby.jpg",
        "type": "image"
      },
      {
        "text": "मोक्स सैफायर की तरह ही, मोक्स रूबी भी एक शक्तिशाली मैना स्रोत है जो लाल मैना के लिए टैप करता है। यह एक और अत्यधिक मांग वाला कार्ड है, जिसकी कीमत आम तौर पर $40,000 से $50,000 तक होती है।",
        "type": "normal"
      },
      {
        "text": "यह ध्यान रखना महत्वपूर्ण है कि इन कार्डों की कीमतें बाजार की स्थितियों और उच्च गुणवत्ता वाले नमूनों की उपलब्धता के आधार पर समय के साथ उतार-चढ़ाव कर सकती हैं।",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/mostvalue/most_value_us.jpg"),
    "title": "शीर्ष 5 सबसे महंगे YGO कार्ड",
    "contents": [
      {
        "text": "2023 तक दुनिया के शीर्ष 5 सबसे महंगे Yu-Gi-Oh कार्ड हैं:",
        "type": "title"
      },
      {
        "text": "1.Black Luster Soldier (स्टेनलेस स्टील)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/blackluster.jpg",
        "type": "image"
      },
      {
        "text": "अनुमानित मूल्य: $10,000,000. यह कार्ड एक अनोखा प्रमोशनल आइटम है जो Yu-Gi-Oh! टूर्नामेंट के विजेता को दिया गया था। इसकी दुर्लभता और अनूठी सामग्री इसे बेहद मूल्यवान बनाती है।",
        "type": "normal"
      },
      {
        "text": "2. Tyler the Great Warrior",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/tyler.jpg",
        "type": "image"
      },
      {
        "text": "अनुमानित मूल्य: $311,211. यह कार्ड Yu-Gi-Oh! टूर्नामेंट का पुरस्कार कार्ड था और यह अत्यंत दुर्लभ है। इसका उच्च मूल्य इसकी दुर्लभता और इसके शक्तिशाली प्रभाव के कारण है।",
        "type": "normal"
      },
      {
        "text": "3. वैकल्पिक कलाकृति Gemini Elf T3-04",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/geminielf.jpg",
        "type": "image"
      },
      {
        "text": "अनुमानित मूल्य: $254,791. यह कार्ड जेमिनी एल्फ कार्ड का एक दुर्लभ संस्करण है, जिसमें एक अद्वितीय वैकल्पिक कलाकृति है। इसका उच्च मूल्य इसकी दुर्लभता और इसके संग्रहणीय स्वभाव के कारण है।",
        "type": "normal"
      },
      {
        "text": "4. Blue-Eyes White Dragon (LOB 1st संस्करण)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/blueeyes.jpg",
        "type": "image"
      },
      {
        "text": "अनुमानित मूल्य: $85,000. यह कार्ड एक क्लासिक Yu-Gi-Oh! कार्ड है जिसे कलेक्टरों द्वारा बहुत पसंद किया जाता है। इसका उच्च मूल्य इसकी दुर्लभता और इसकी प्रतिष्ठित स्थिति के कारण है।",
        "type": "normal"
      },
      {
        "text": "5. Dark Magician (LOB 1st Edition)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/darkmagician.jpg",
        "type": "image"
      },
      {
        "text": "अनुमानित मूल्य: $85,000. यह कार्ड एक और क्लासिक Yu-Gi-Oh! कार्ड है जिसे कलेक्टरों द्वारा बहुत पसंद किया जाता है। इसका उच्च मूल्य इसकी दुर्लभता और इसकी प्रतिष्ठित स्थिति के कारण है।",
        "type": "normal"
      },
      {
        "text": "❝ कृपया ध्यान दें कि ये मूल्य अनुमानित हैं और समय के साथ उतार-चढ़ाव कर सकते हैं। इसके अतिरिक्त, Yu-Gi-Oh! कार्ड का मूल्य इसकी स्थिति, इसकी ग्रेडिंग और इसके स्रोत जैसे कारकों से प्रभावित हो सकता है।",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/mostvalue/most_value_uk.jpg"),
    "title": "शीर्ष 5 सबसे महंगे POKE कार्ड",
    "contents": [
      {
        "text": "पी.के.एम. कार्ड की कीमतें दुर्लभता, स्थिति और बाजार की मांग सहित विभिन्न कारकों के आधार पर उतार-चढ़ाव कर सकती हैं। यहाँ 2024 की शुरुआत में शीर्ष 5 सबसे महंगे पी.के.एम. कार्ड दिए गए हैं, साथ ही उनकी अनुमानित कीमतें और मुख्य विवरण भी दिए गए हैं:",
        "type": "title"
      },
      {
        "text": "1. Illustrator P.i.k.a.c.h.u (1998)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/pikachu.jpg",
        "type": "image"
      },
      {
        "text": "कीमत: $5,275,000\nदुर्लभता: कोरोकोरो पत्रिका के लिए प्रचार कार्ड जारी किया गया\nमुख्य विशेषताएं: एक-एक तरह का चित्रण, PSA 10 ग्रेड, YouTuber Logan Paul द्वारा खरीदा गया",
        "type": "normal"
      },
      {
        "text": "2. छाया रहित बेस सेट होलो Charizard (1999)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/charizard.jpg",
        "type": "image"
      },
      {
        "text": "मूल्य: $420,000\nदुर्लभता: बेस सेट, होलोग्राफिक, प्रथम संस्करण, छाया रहित संस्करण\nमुख्य विशेषताएं: प्रतिष्ठित P.K.M, संग्रहकर्ताओं के बीच उच्च मांग, PSA 10 ग्रेड",
        "type": "normal"
      },
      {
        "text": "3. 1998 Japanese Promo Trophy P.i.k.a.c.h.u Silver 2nd-2nd Tournament",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/pikachu2.jpg",
        "type": "image"
      },
      {
        "text": "मूल्य: $444,000\nदुर्लभता: टूर्नामेंट पुरस्कार के रूप में दिया जाने वाला प्रमोशनल कार्ड\nमुख्य विशेषताएं: सिल्वर ट्रॉफी डिज़ाइन, दुर्लभ और अत्यधिक मांग वाला",
        "type": "normal"
      },
      {
        "text": "4. 1998 P.K.M Blastoise #009/165R कमीशन प्रस्तुति गैलेक्सी स्टार होलोग्राम",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/blastoise.jpg",
        "type": "image"
      },
      {
        "text": "कीमत: $360,000\nदुर्लभता: एक अद्वितीय डिजाइन के साथ कमीशन प्रेजेंटेशन कार्ड\nमुख्य विशेषताएं: गैलेक्सी स्टार होलोग्राम, कुछ ज्ञात उदाहरणों में से एक",
        "type": "normal"
      },
      {
        "text": "5. Umbreon Gold Star (2005)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/umbreon.jpg",
        "type": "image"
      },
      {
        "text": "कीमत: $180,000\nदुर्लभता: जापानी 70,000 पॉइंट प्ले प्रोमो\nग्रेड: PSA 10\nबिक्री का महीना: फ़रवरी 2024",
        "type": "normal"
      },
      {
        "text": "❝ कृपया ध्यान दें कि समय के साथ कीमतें बदल सकती हैं, और नए कार्ड सबसे महंगे हो सकते हैं। सबसे अद्यतित जानकारी के लिए हाल ही में नीलामी के परिणामों की जांच करना हमेशा एक अच्छा विचार है।",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/mostvalue/most_value_ca.jpg"),
    "title": "शीर्ष 5 सबसे महंगे स्पोर्ट कार्ड",
    "contents": [
      {
        "text": "हाल के वर्षों में ट्रेडिंग कार्ड बाजार में लोकप्रियता और मूल्य में उछाल देखा गया है, कुछ कार्ड खगोलीय कीमतों तक पहुंच गए हैं। यहां दुनिया के शीर्ष 5 सबसे महंगे स्पोर्ट्स कार्ड TCG हैं, साथ ही विस्तृत जानकारी और उनका वर्तमान बाजार मूल्य भी दिया गया है:",
        "type": "title"
      },
      {
        "text": "1. 1909-11 T206 Honus Wagner",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/wagner.jpg",
        "type": "image"
      },
      {
        "text": "मूल्य: लगभग $7.25 मिलियन (2023 तक)\nदुर्लभता: अत्यंत दुर्लभ, अस्तित्व में केवल मुट्ठी भर ज्ञात प्रतियाँ।\nमहत्व: होनस वैगनर एक महान बेसबॉल खिलाड़ी थे, और कार्ड की दुर्लभता और ऐतिहासिक महत्व इसे दुनिया में सबसे प्रतिष्ठित संग्रहणीय वस्तुओं में से एक बनाता है।",
        "type": "normal"
      },
      {
        "text": "2. 1986-87 Fleer Michael Jordan रूकी कार्ड",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/jordan.jpg",
        "type": "image"
      },
      {
        "text": "मूल्य: लगभग $2 मिलियन (2023 तक)\nदुर्लभता: बास्केटबॉल में माइकल जॉर्डन की प्रतिष्ठित स्थिति के कारण अत्यधिक मांग।\nमहत्व: यह जॉर्डन का रूकी कार्ड है, जो उसके महान करियर की शुरुआत को दर्शाता है।",
        "type": "normal"
      },
      {
        "text": "3. 1952 Topps Mickey Mantle रूकी कार्ड",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/mickey.jpg",
        "type": "image"
      },
      {
        "text": "मूल्य: लगभग $1.5 मिलियन (2023 तक)\nदुर्लभता: एक और प्रतिष्ठित रूकी कार्ड, जिसमें सभी समय के सबसे महान बेसबॉल खिलाड़ियों में से एक शामिल है।\nमहत्व: मेंटल का कार्ड उनके असाधारण करियर और कार्ड के ऐतिहासिक मूल्य के कारण अत्यधिक संग्रहणीय है।",
        "type": "normal"
      },
      {
        "text": "4. 1954 Topps Ted Williams",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/topp.jpg",
        "type": "image"
      },
      {
        "text": "मूल्य: लगभग 1 मिलियन डॉलर (2023 तक)\nदुर्लभता: एक अन्य महान बेसबॉल खिलाड़ी की विशेषता वाला एक अपेक्षाकृत दुर्लभ कार्ड।\nमहत्व: विलियम्स कार्ड को उनके असाधारण करियर और कार्ड के ऐतिहासिक महत्व के कारण अत्यधिक महत्व दिया जाता है।",
        "type": "normal"
      },
      {
        "text": "5. 1968 Topps PSA 10 Jim Brown रूकी कार्ड",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/jim.jpg",
        "type": "image"
      },
      {
        "text": "मूल्य: लगभग $1 मिलियन (2023 तक)\nदुर्लभता: एक महान NFL रनिंग बैक का एक दुर्लभ रूकी कार्ड.\nमहत्व: ब्राउन का कार्ड उनके असाधारण करियर और कार्ड के ऐतिहासिक मूल्य के कारण अत्यधिक संग्रहणीय है।",
        "type": "normal"
      },
      {
        "text": "❝ कृपया ध्यान दें कि ये कीमतें अनुमानित हैं और बाजार की स्थितियों और कार्ड की विशिष्ट स्थिति के आधार पर उतार-चढ़ाव हो सकता है। इसके अतिरिक्त, ऐसे अन्य मूल्यवान स्पोर्ट्स कार्ड भी हैं जो अपनी दुर्लभता या हाल ही में हुई बिक्री के कारण इस सूची में शामिल नहीं हो सकते हैं।",
        "type": "title"
      }
    ]
  }
]

const nl_discovery = [
  {
    "image": require("../assets/mostvalue/most_value_world.jpg"),
    "title": "Top 5 duurste M.T.G-kaarten",
    "contents": [
      {
        "text": "De top 5 duurste Magic: The Gathering-kaarten ter wereld zijn:",
        "type": "title"
      },
      {
        "text": "1. The One Ring (serienummer 001/001)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/theonering.jpg",
        "type": "image"
      },
      {
        "text": "Deze kaart uit de Lord of the Rings: Tales of Middle-earth-set is de duurste kaart ooit verkocht, goed voor maar liefst $2 miljoen. Het is een unieke kaart met serienummer en unieke designelementen.",
        "type": "normal"
      },
      {
        "text": "2. Black Lotus (Alpha)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/blacklotus.jpg",
        "type": "image"
      },
      {
        "text": "Black Lotus is een klassieke kaart uit de eerste set van het spel, Alpha, en is zeer gewild vanwege zijn zeldzaamheid en krachtige effect. Je kunt er drie mana van elke kleur mee tappen. De prijzen voor Black Lotus variëren afhankelijk van de staat, maar het is consequent een van de duurste kaarten. Recente verkopen varieerden van $ 500.000 tot $ 800.000.",
        "type": "normal"
      },
      {
        "text": "3. Copy Artifact (Alpha)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/copyartifact.jpg",
        "type": "image"
      },
      {
        "text": "Een andere kaart uit de Alpha-set, Copy Artifact, waarmee je elk artefact of betovering op het slagveld kunt kopiëren. De zeldzaamheid en het krachtige effect maken het zeer waardevol. Prijzen voor Copy Artifact variëren doorgaans van $ 50.000 tot $ 100.000.",
        "type": "normal"
      },
      {
        "text": "4. Mox Sapphire (Alpha)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/moxsapphire.jpg",
        "type": "image"
      },
      {
        "text": "Mox Sapphire is een krachtige manabron die blauwe mana aanboort en een van de meest begeerde kaarten in het spel is. Het is zeer gewild bij verzamelaars en spelers. Prijzen voor Mox Sapphire kunnen sterk variëren, maar worden over het algemeen geschat op een waarde van ongeveer $ 50.000.",
        "type": "normal"
      },
      {
        "text": "5. Mox Ruby (Alpha)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/moxruby.jpg",
        "type": "image"
      },
      {
        "text": "Mox Ruby is vergelijkbaar met Mox Sapphire en is een krachtige manabron die tapt voor rode mana. Het is een andere zeer gewilde kaart, met prijzen die doorgaans variëren van $ 40.000 tot $ 50.000.",
        "type": "normal"
      },
      {
        "text": "❝ Het is belangrijk om op te merken dat de prijzen voor deze kaarten in de loop van de tijd kunnen fluctueren op basis van marktomstandigheden en de beschikbaarheid van hoogwaardige exemplaren.",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/mostvalue/most_value_us.jpg"),
    "title": "Top 5 duurste Y.G.O-kaarten",
    "contents": [
      {
        "text": "De top 5 duurste Yu-Gi-Oh-kaarten ter wereld, in 2023, zijn:",
        "type": "title"
      },
      {
        "text": "1. Black Luster Soldier (roestvrij staal)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/blackluster.jpg",
        "type": "image"
      },
      {
        "text": "Geschatte waarde: $10.000.000. Deze kaart is een uniek promotieartikel dat werd gegeven aan een winnaar van een Yu-Gi-Oh!-toernooi. De zeldzaamheid en het unieke materiaal maken het extreem waardevol.",
        "type": "normal"
      },
      {
        "text": "2. Tyler the Great Warrior",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/tyler.jpg",
        "type": "image"
      },
      {
        "text": "Geschatte waarde: $311.211. Deze kaart was een prijskaart van een Yu-Gi-Oh!-toernooi en is extreem zeldzaam. De hoge waarde is te danken aan de zeldzaamheid en het krachtige effect.",
        "type": "normal"
      },
      {
        "text": "3. Alternatief artwork Gemini Elf T3-04",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/geminielf.jpg",
        "type": "image"
      },
      {
        "text": "Geschatte waarde: $254.791. Deze kaart is een zeldzame variant van de Gemini Elf-kaart, met een uniek alternatief artwork. De hoge waarde is te danken aan de zeldzaamheid en het verzamelbare karakter ervan.",
        "type": "normal"
      },
      {
        "text": "4. Blue-Eyes White Dragon (LOB 1e editie)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/blueeyes.jpg",
        "type": "image"
      },
      {
        "text": "Geschatte waarde: $85.000. Deze kaart is een klassieke Yu-Gi-Oh! kaart die zeer gewild is bij verzamelaars. De hoge waarde is te danken aan de zeldzaamheid en de iconische status.",
        "type": "normal"
      },
      {
        "text": "5. Dark Magician (LOB 1e editie)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/darkmagician.jpg",
        "type": "image"
      },
      {
        "text": "Geschatte waarde: $85.000. Deze kaart is een andere klassieke Yu-Gi-Oh!-kaart die zeer gewild is bij verzamelaars. De hoge waarde is te danken aan de zeldzaamheid en de iconische status.",
        "type": "normal"
      },
      {
        "text": "❝ Houd er rekening mee dat deze waarden schattingen zijn en in de loop van de tijd kunnen fluctueren. Bovendien is de waarde van een Yu-Gi-Oh! kaart kan worden beïnvloed door factoren zoals de staat, de classificatie en de herkomst.",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/mostvalue/most_value_uk.jpg"),
    "title": "Top 5 duurste P.K.M-kaarten",
    "contents": [
      {
        "text": "De prijzen van P.K.M-kaarten kunnen fluctueren op basis van verschillende factoren, waaronder zeldzaamheid, conditie en marktvraag. Hier zijn de top 5 duurste P.K.M-kaarten begin 2024, samen met hun geschatte prijzen en belangrijkste details:",
        "type": "title"
      },
      {
        "text": "1. Illustrator P.i.k.a.c.h.u (1998)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/pikachu.jpg",
        "type": "image"
      },
      {
        "text": "Prijs: $5.275.000\nZeldzaamheid: Promotionele kaart uitgebracht voor Corocoro magazine\nBelangrijkste kenmerken: Unieke illustratie, PSA 10-classificatie, gekocht door YouTuber Logan Paul",
        "type": "normal"
      },
      {
        "text": "2. Shadowless Base Set Holo Charizard (1999)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/charizard.jpg",
        "type": "image"
      },
      {
        "text": "Prijs: $420.000\nZeldzaamheid: Basisset, holografisch, eerste editie, schaduwloze versie\nBelangrijkste kenmerken: Iconische P.K.M, grote vraag onder verzamelaars, PSA 10-gegradeerd",
        "type": "normal"
      },
      {
        "text": "3. 1998 Japanse Promo Trophy P.i.k.a.c.h.u Silver 2nd-2nd Tournament",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/pikachu2.jpg",
        "type": "image"
      },
      {
        "text": "Prijs: $444.000\nZeldzaamheid: Promotionele kaart toegekend als toernooiprijs\nBelangrijkste kenmerken: Zilveren trofee-ontwerp, zeldzaam en zeer gewild",
        "type": "normal"
      },
      {
        "text": "4. 1998 P.K.M Blastoise #009/165R Commissioned Presentation Galaxy Star Hologram",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/blastoise.jpg",
        "type": "image"
      },
      {
        "text": "Prijs: $360.000\nZeldzaamheid: Commissioned presentation card met een uniek ontwerp\nBelangrijkste kenmerken: Galaxy Star hologram, een van de weinige bekende voorbeelden",
        "type": "normal"
      },
      {
        "text": "5. Umbreon Gold Star (2005)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/umbreon.jpg",
        "type": "image"
      },
      {
        "text": "Prijs: $180.000\nZeldzaamheid: Japanse 70.000 punten SPEEL Promo\nKlasse: PSA 10\nMaand Verkocht: februari 2024",
        "type": "normal"
      },
      {
        "text": "❝ Houd er rekening mee dat prijzen in de loop van de tijd kunnen veranderen en dat nieuwe kaarten de duurste kunnen blijken te zijn. Het is altijd een goed idee om de recente veilingresultaten te controleren voor de meest actuele informatie.",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/mostvalue/most_value_ca.jpg"),
    "title": "Top 5 duurste sportkaarten",
    "contents": [
      {
        "text": "De markt voor ruilkaarten is de laatste jaren enorm populair geworden en heeft een enorme waarde, waarbij sommige kaarten astronomische prijzen hebben bereikt.\nHier zijn de top 5 duurste sportkaarten van TCG ter wereld, samen met gedetailleerde informatie en hun huidige marktwaarde:",
        "type": "title"
      },
      {
        "text": "1. 1909-11 T206 Honus Wagner",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/wagner.jpg",
        "type": "image"
      },
      {
        "text": "Prijs: Ongeveer $ 7,25 miljoen (vanaf 2023)\nZeldzaamheid: Extreem zeldzaam, met slechts een handvol bekende exemplaren in omloop.\nBelang: Honus Wagner was een legendarische honkbalspeler, en de schaarste en historische betekenis van de kaart maken het een van de meest begeerde verzamelobjecten ter wereld.",
        "type": "normal"
      },
      {
        "text": "2. 1986-87 Fleer Michael Jordan Rookie Card",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/jordan.jpg",
        "type": "image"
      },
      {
        "text": "Prijs: Ongeveer $ 2 miljoen (vanaf 2023)\nZeldzaamheid: Zeer gewild vanwege Michael Jordans iconische status in basketbal.\nBelangrijkheid: Dit is Jordans rookiekaart, die het begin markeert van zijn legendarische carrière.",
        "type": "normal"
      },
      {
        "text": "3. 1952 Topps Mickey Mantle Rookie Card",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/mickey.jpg",
        "type": "image"
      },
      {
        "text": "Prijs: Ongeveer $ 1,5 miljoen (vanaf 2023)\nZeldzaamheid: Nog een iconische rookie-kaart, met een van de beste honkballers aller tijden.\nBelang: Mantle's kaart is zeer verzamelobject vanwege zijn uitzonderlijke carrière en de historische waarde van de kaart.",
        "type": "normal"
      },
      {
        "text": "4. 1954 Topps Ted Williams",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/topp.jpg",
        "type": "image"
      },
      {
        "text": "Prijs: Ongeveer $ 1 miljoen (vanaf 2023)\nZeldzaamheid: Een relatief zeldzame kaart met een andere legendarische honkbalspeler.\nBelang: Williams-kaart is zeer gewaardeerd vanwege zijn uitzonderlijke carrière en het historische belang van de kaart.",
        "type": "normal"
      },
      {
        "text": "5. 1968 Topps PSA 10 Jim Brown Rookie Card",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/jim.jpg",
        "type": "image"
      },
      {
        "text": "Prijs: Ongeveer $ 1 miljoen (vanaf 2023)\nZeldzaamheid: Een zeldzame rookie-kaart van een legendarische NFL-runningback.\nBelang: Browns kaart is zeer verzamelobject vanwege zijn uitzonderlijke carrière en de historische waarde van de kaart.",
        "type": "normal"
      },
      {
        "text": "❝ Houd er rekening mee dat deze prijzen schattingen zijn en kunnen fluctueren op basis van marktomstandigheden en de specifieke staat van de kaart. Daarnaast zijn er nog andere waardevolle sportkaarten die mogelijk niet in deze lijst zijn opgenomen vanwege hun zeldzaamheid of recente verkopen.",
        "type": "title"
      }
    ]
  }
]

const pt_discovery = [
  {
    "image": require("../assets/mostvalue/most_value_world.jpg"),
    "title": "Top 5 das cartas de M.T.G mais caras",
    "contents": [
      {
        "text": "Os 5 cards mais caros de Magic: The Gathering do mundo são:",
        "type": "title"
      },
      {
        "text": "1. O Um Anel (N.º de Série 001/001)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/theonering.jpg",
        "type": "image"
      },
      {
        "text": "Esta carta do conjunto Senhor dos Anéis: Contos da Terra Média é a carta mais cara alguma vez vendida, alcançando a incrível quantia de 2 milhões de dólares. É uma carta numerada numa série única com elementos de design únicos.",
        "type": "normal"
      },
      {
        "text": "2. Lótus Negro (Alfa)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/blacklotus.jpg",
        "type": "image"
      },
      {
        "text": "Uma carta clássica do primeiro conjunto do jogo, Alpha, Black Lotus é muito procurada devido à sua raridade e efeito poderoso. Pode ser virada para três manas de qualquer cor. Os preços para Black Lotus variam consoante a condição, mas é consistentemente um dos cartões mais caros.",
        "type": "normal"
      },
      {
        "text": "3. Copiar Artefacto (Alfa)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/copyartifact.jpg",
        "type": "image"
      },
      {
        "text": "Outra carta do conjunto Alpha, Copy Artifact permite copiar qualquer artefacto ou encantamento no campo de batalha. A sua raridade e efeito poderoso tornam-no altamente valioso. Os preços para Copy Artifact variam geralmente entre 50.000 e 100.000 dólares.",
        "type": "normal"
      },
      {
        "text": "4. Mox Safira (Alfa)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/moxsapphire.jpg",
        "type": "image"
      },
      {
        "text": "Uma poderosa fonte de mana que se transforma em mana azul, Mox Sapphire é uma das cartas mais cobiçadas do jogo. É muito procurada por colecionadores e jogadores. Os preços de Mox Sapphire podem variar muito, mas é geralmente considerada como válida cerca de US$ 50.000.",
        "type": "normal"
      },
      {
        "text": "5. Mox Ruby (Alfa)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/moxruby.jpg",
        "type": "image"
      },
      {
        "text": "Semelhante ao Mox Sapphire, o Mox Ruby é uma fonte de mana poderosa que se transforma em mana vermelho. É outra carta muito procurada, com preços tipicamente que variam entre $40.000 e $50.000.",
        "type": "normal"
      },
      {
        "text": "❝ É importante notar que os preços destes cartões podem variar ao longo do tempo com base nas condições de mercado e na disponibilidade de exemplares de alta qualidade.",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/mostvalue/most_value_uk.jpg"),
    "title": "Os 5 cartões P.K.M mais caros",
    "contents": [
      {
        "text": "Os preços dos cartões P.K.M podem flutuar com base em vários fatores, incluindo raridade, condição e procura do mercado. Aqui estão os 5 cartões P.K.M mais caros no início de 2024, juntamente com os seus preços aproximados e detalhes importantes:",
        "type": "title"
      },
      {
        "text": "1. Ilustrador P.i.k.a.c.h.u (1998)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/pikachu.jpg",
        "type": "image"
      },
      {
        "text": "Preço: 5.275.000 dólares\nRaridade: Cartão promocional lançado para a revista Corocoro\nPrincipais características: Ilustração única, classificação PSA 10, adquirida pelo YouTuber Logan Paul",
        "type": "normal"
      },
      {
        "text": "2. Conjunto base sem sombras Holo Charizard (1999)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/charizard.jpg",
        "type": "image"
      },
      {
        "text": "Preço: 420.000 dólares\nRaridade: Conjunto básico, holográfico, primeira edição, versão sem sombras\nPrincipais características: P.K.M icónico, elevada procura entre colecionadores, classificação PSA 10",
        "type": "normal"
      },
      {
        "text": "3. Troféu Promocional Japonês de 1998 P.i.k.a.c.h.u Prata 2º-2º Torneio",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/pikachu2.jpg",
        "type": "image"
      },
      {
        "text": "Preço: $444.000\nRaridade: Cartão promocional atribuído como prémio de torneio\nPrincipais características: Design de troféu prateado, raro e muito procurado",
        "type": "normal"
      },
      {
        "text": "4. 1998 P.K.M Blastoise #009/165R Comissionado Apresentação Galáxia Holograma Estelar",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/blastoise.jpg",
        "type": "image"
      },
      {
        "text": "Preço: 360.000 dólares\nRaridade: Cartão de apresentação encomendado com um design único\nPrincipais características: Holograma Galaxy Star, um dos poucos exemplos conhecidos",
        "type": "normal"
      },
      {
        "text": "5. Umbreon Gold Star (2005)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/umbreon.jpg",
        "type": "image"
      },
      {
        "text": "Preço: $180.000\nRaridade: Japonês 70.000 Pontos JOGAR Promo\nClassificação: PSA 10\nMês de venda: Fevereiro de 2024",
        "type": "normal"
      },
      {
        "text": "❝ Note que os preços podem mudar ao longo do tempo, e as novas cartas podem surgir como as mais caras. É sempre uma boa ideia verificar os resultados dos leilões recentes para obter as informações mais atualizadas.",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/mostvalue/most_value_us.jpg"),
    "title": "Top 5 dos cartões Y.G.O mais caros",
    "contents": [
      {
        "texto": "As 5 cartas de Yu-Gi-Oh mais caras do mundo, em 2023, são:",
        "type": "title"
      },
      {
        "texto": "1. Soldado de brilho preto (aço inoxidável)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/blackluster.jpg",
        "type": "image"
      },
      {
        "text": "Valor estimado: $10.000.000. Esta carta é um item promocional único que foi entregue ao vencedor de um torneio de Yu-Gi-Oh!. A sua raridade e material único tornam-no extremamente valioso.",
        "type": "normal"
      },
      {
        "texto": "2. Tyler, o Grande Guerreiro",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/tyler.jpg",
        "type": "image"
      },
      {
        "text": "Valor estimado: $311.211. Esta carta foi uma carta prémio de um torneio de Yu-Gi-Oh! e é extremamente rara. O seu elevado valor deve-se à sua raridade e ao seu poderoso efeito.",
        "type": "normal"
      },
      {
        "texto": "3. Arte alternativa Gemini Elf T3-04",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/geminielf.jpg",
        "type": "image"
      },
      {
        "text": "Valor estimado: $254.791. Esta carta é uma variante rara da carta Gemini Elf, com uma arte alternativa única. O seu elevado valor deve-se à sua raridade e à sua natureza colecionável.",
        "type": "normal"
      },
      {
        "texto": "4. Dragão Branco de Olhos Azuis (LOB 1ª Edição)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/blueeyes.jpg",
        "type": "image"
      },
      {
        "text": "Valor estimado: $85.000. Esta carta é uma carta clássica de Yu-Gi-Oh! que é muito procurada por colecionadores. O seu elevado valor deve-se à sua raridade e ao seu estatuto icónico.",
        "type": "normal"
      },
      {
        "texto": "5. Dark Magician (LOB 1ª Edição)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/darkmagician.jpg",
        "type": "image"
      },
      {
        "text": "Valor estimado: $85.000. Esta carta é outra carta clássica de Yu-Gi-Oh! que é muito procurada por colecionadores. O seu elevado valor deve-se à sua raridade e ao seu estatuto icónico.",
        "type": "normal"
      },
      {
        "texto": "❝ Note que estes valores são estimativas e podem variar ao longo do tempo. Além disso, o valor de uma carta de Yu-Gi-Oh! pode ser afetado por fatores como a sua condição, a sua classificação e a sua proveniência. ",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/mostvalue/most_value_ca.jpg"),
    "title": "Os 5 cartões desportivos mais caros",
    "contents": [
      {
        "text": "O mercado de cartões colecionáveis ​​tem registado um aumento de popularidade e valor nos últimos anos, com alguns cartões a atingirem preços astronómicos. \nAqui estão os 5 cartões desportivos TCG mais caros do mundo, juntamente com informações detalhadas e as suas valores actuais.",
        "type": "title"
      },
      {
        "text": "1. 1909-11 T206 Honus Wagner",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/wagner.jpg",
        "type": "image"
      },
      {
        "text": "Preço: Aproximadamente 7,25 milhões de dólares (em 2023)\nRaridade: Extremamente raro, com apenas um punhado de cópias conhecidas existentes. \nSignificado: Honus Wagner foi um lendário jogador de basebol, e a escassez e importância histórica do cartão o tornam é um dos itens colecionáveis ​​​​mais cobiçados do mundo.",
        "type": "normal"
      },
      {
        "text": "2. Cartão de novato Fleer Michael Jordan 1986-87",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/jordan.jpg",
        "type": "image"
      },
      {
        "text": "Preço: Aproximadamente 2 milhões de dólares (em 2023)\nRaridade: Muito procurado devido ao estatuto icónico de Michael Jordan no basquetebol. \nSignificado: Este é o cartão de rookie de Jordan, marcando o início da sua lendária carreira .",
        "type": "normal"
      },
      {
        "text": "3. Cartão de novato Topps Mickey Mantle de 1952",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/mickey.jpg",
        "type": "image"
      },
      {
        "text": "Preço: Aproximadamente 1,5 milhões de dólares (em 2023)\nRaridade: Outro cartão de novato icónico, com um dos maiores jogadores de basebol de todos os tempos. \nSignificado: O cartão de Mantle é altamente colecionável devido à sua carreira excepcional e ao valor histórico.",
        "type": "normal"
      },
      {
        "text": "4. 1954 Topps Ted Williams",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/topp.jpg",
        "type": "image"
      },
      {
        "text": "Preço: Aproximadamente 1 milhão de dólares (em 2023)\nRaridade: Um card relativamente raro com outro jogador de basebol lendário. \nSignificado: O card de Williams é muito valorizado devido à sua carreira excecional e à importância histórica do cartão.",
        "type": "normal"
      },
      {
        "text": "5. Cartão de novato Topps PSA 10 Jim Brown de 1968",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/jim.jpg",
        "type": "image"
      },
      {
        "text": "Preço: Aproximadamente 1 milhão de dólares (em 2023)\nRaridade: Um raro cartão de rookie de um lendário running back da NFL. \nImportância: O cartão de Brown é altamente colecionável devido à sua carreira excecional e ao valor histórico do cartão.",
        "type": "normal"
      },
      {
        "text": "❝ Note que estes preços são estimativas e podem variar com base nas condições de mercado e na condição específica do cartão. Além disso, existem outros cartões desportivos valiosos que podem não estar incluídos nesta lista devido à sua raridade ou vendas recentes .",
        "type": "title"
      }
    ]
  }
]

const es_discovery = [
  {
    "image": require("../assets/mostvalue/most_value_world.jpg"),
    "title": "Las 5 cartas de M.T.G más caras",
    "contents": [
      {
        "text": "Las 5 cartas de Magic: The Gathering más caras del mundo son:",
        "type": "title"
      },
      {
        "text": "1. El Anillo Único (Número de serie 001/001)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/theonering.jpg",
        "type": "image"
      },
      {
        "text": "Esta carta de la colección El Señor de los Anillos: Cuentos de la Tierra Media es la carta más cara jamás vendida, alcanzando un es una carta con un asombroso valor de 2 millones de dólares. Es una carta numerada en serie única en su tipo con elementos de diseño únicos.",
        "type": "normal"
      },
      {
        "text": "2. Black Lotus (Alpha)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/blacklotus.jpg",
        "type": "image"
      },
      {
        "text": "Black Lotus, una carta clásica de la primera colección del juego, Alpha, es muy buscada debido a su rareza y su poderoso efecto. Puede girarse para obtener tres manás de cualquier color. Los precios de Black Lotus varían según la condición, pero es consistentemente una de las cartas más caras. Las ventas recientes han oscilado entre $500,000 y $800,000.",
        "type": "normal"
      },
      {
        "text": "3. Copiar artefacto (Alfa)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/copyartifact.jpg",
        "type": "image"
      },
      {
        "text": "Otra carta del set Alfa, Copiar artefacto te permite copiar cualquier artefacto o encantamiento en el campo de batalla. Su rareza y su poderoso efecto la hacen muy valiosa. Los precios de Copiar artefacto suelen oscilar entre $50,000 y $100,000.",
        "type": "normal"
      },
      {
        "text": "4. Zafiro Mox (Alfa)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/moxsapphire.jpg",
        "type": "image"
      },
      {
        "text": "Zafiro Mox, una poderosa fuente de maná que se activa para generar maná azul, es una de las cartas más codiciadas del juego. Es muy buscada tanto por coleccionistas como por jugadores. Los precios de Zafiro Mox pueden variar ampliamente, pero generalmente se considera que vale alrededor de $50,000.",
        "type": "normal"
      },
      {
        "text": "5. Mox Ruby (Alpha)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/moxruby.jpg",
        "type": "image"
      },
      {
        "text": "Similar a Mox Sapphire, Mox Ruby es una poderosa fuente de maná que se activa para generar maná rojo. Es otra carta muy buscada, con precios que suelen oscilar entre $40,000 y $50,000.",
        "type": "normal"
      },
      {
        "text": "❝ Es importante tener en cuenta que los precios de estas cartas pueden fluctuar con el tiempo según las condiciones del mercado y la disponibilidad de ejemplares de alta calidad.",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/mostvalue/most_value_us.jpg"),
    "title": "Las 5 cartas de Y.G.O más caras del mundo",
    "contents": [
      {
        "text": "Las 5 cartas de Yu-Gi-Oh más caras del mundo, a partir de 2023, son:",
        "type": "title"
      },
      {
        "text": "1. Soldado Black Luster (acero inoxidable)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/blackluster.jpg",
        "type": "image"
      },
      {
        "text": "Valor estimado: $10,000,000. Esta carta es una Artículo promocional único que se le entregó a un ganador de un torneo de Yu-Gi-Oh!. Su rareza y material único lo hacen extremadamente valioso.",
        "type": "normal"
      },
      {
        "text": "2. Tyler el Gran Guerrero",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/tyler.jpg",
        "type": "image"
      },
      {
        "text": "Valor estimado: $311,211. Esta carta fue una carta de premio de un torneo de Yu-Gi-Oh! y es extremadamente rara. Su alto valor se debe a su rareza y su poderoso efecto.",
        "type": "normal"
      },
      {
        "text": "3. Ilustración alternativa Elfo Géminis T3-04",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/geminielf.jpg",
        "type": "image"
      },
      {
        "text": "Valor estimado: $254,791. Esta carta es una variante rara de la carta Elfo Géminis, con una ilustración alternativa única. Su alto valor se debe a su rareza y su naturaleza coleccionable.",
        "type": "normal"
      },
      {
        "text": "4. Dragón blanco de ojos azules (LOB 1.ª edición)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/blueeyes.jpg",
        "type": "image"
      },
      {
        "text": "Valor estimado: $85 000. Esta carta es una carta clásica de Yu-Gi-Oh! muy buscada por los coleccionistas. Su alto valor se debe a su rareza y su estatus icónico.",
        "type": "normal"
      },
      {
        "text": "5. Dark Magician (LOB 1st Edition)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/darkmagician.jpg",
        "type": "image"
      },
      {
        "text": "Valor estimado: $85,000. Esta carta es otra carta clásica de Yu-Gi-Oh! muy buscada por los coleccionistas. Su alto valor se debe a su rareza y su estatus icónico.",
        "type": "normal"
      },
      {
        "text": "❝ Tenga en cuenta que estos valores son estimaciones y pueden fluctuar con el tiempo. Además, el valor de una carta de Yu-Gi-Oh! La tarjeta puede verse afectada por factores como su condición, su clasificación y su procedencia.",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/mostvalue/most_value_uk.jpg"),
    "title": "Las 5 cartas P.K.M más caras",
    "contents": [
      {
        "text": "Los precios de las cartas P.K.M pueden fluctuar en función de varios factores, como la rareza, el estado y la demanda del mercado. Estas son las 5 cartas P.K.M más caras a principios de 2024, junto con sus precios aproximados y detalles clave:",
        "type": "title"
      },
      {
        "text": "1. Illustrator P.i.k.a.c.h.u (1998)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/pikachu.jpg",
        "type": "image"
      },
      {
        "text": "Precio: $5,275,000\nRareza: Tarjeta promocional lanzada para la revista Corocoro\nCaracterísticas principales: Ilustración única, calificación PSA 10, comprada por el YouTuber Logan Paul",
        "type": "normal"
      },
      {
        "text": "2. Charizard holográfico del Shadowless Base Set (1999)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/charizard.jpg",
        "type": "image"
      },
      {
        "text": "Precio: $420,000\nRareza: Base Set, holográfico, primera edición, versión sin sombras\nCaracterísticas principales Características: P.K.M icónico, alta demanda entre coleccionistas, grado PSA 10",
        "type": "normal"
      },
      {
        "text": "3. Trofeo promocional japonés P.i.k.a.c.h.u Plata 2.º-2.º torneo de 1998",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/pikachu2.jpg",
        "type": "image"
      },
      {
        "text": "Precio: $444,000\nRareza: Tarjeta promocional otorgada como premio de torneo\nCaracterísticas principales: Diseño de trofeo plateado, rara y muy buscada",
        "type": "normal"
      },
      {
        "text": "4. 1998 P.K.M Blastoise #009/165R Holograma de presentación Galaxy Star encargado",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/blastoise.jpg",
        "type": "image"
      },
      {
        "text": "Precio: $360,000\nRareza: Tarjeta de presentación encargada con un diseño único\nCaracterísticas principales: Holograma Galaxy Star, uno de los pocos ejemplos conocidos",
        "type": "normal"
      },
      {
        "text": "5. Umbreon Gold Star (2005)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/umbreon.jpg",
        "type": "image"
      },
      {
        "text": "Precio: $180,000\nRareza: japonesa Promoción PLAY de 70,000 puntos\nGrado: PSA 10\nMes de venta: febrero de 2024",
        "type": "normal"
      },
      {
        "text": "❝ Ten en cuenta que los precios pueden cambiar con el tiempo y que las cartas nuevas pueden resultar las más caras. Siempre es una buena idea consultar los resultados de subastas recientes para obtener la información más actualizada.",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/mostvalue/most_value_ca.jpg"),
    "title": "Las 5 cartas deportivas más caras",
    "contents": [
      {
        "text": "El mercado de las cartas coleccionables ha experimentado un aumento de popularidad y valor en los últimos años, y algunas cartas han alcanzado precios astronómicos.\nA continuación, se muestran las 5 cartas deportivas más caras del mundo de TCG, junto con información detallada y su valor de mercado actual:",
        "type": "title"
      },
      {
        "text": "1. 1909-11 T206 Honus Wagner",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/wagner.jpg",
        "type": "image"
      },
      {
        "text": "Precio: Aproximadamente $7,25 millones (a partir de 2023)\nRareza: Extremadamente rara, con solo un puñado de copias conocidas en existencia.\nImportancia: Honus Wagner fue un jugador de béisbol legendario, y la escasez de la tarjeta y su importancia histórica la convierten en uno de los objetos de colección más codiciados del mundo.",
        "type": "normal"
      },
      {
        "text": "2. 1986-87 Fleer Michael Jordan Rookie Card",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/jordan.jpg",
        "type": "image"
      },
      {
        "text": "Precio: Aproximadamente 2 millones de dólares (a partir de 2023)\nRareza: Muy buscada debido al estatus icónico de Michael Jordan en el baloncesto.\nImportancia: Esta es la tarjeta de novato de Jordan, que marca el comienzo de su legendaria carrera.",
        "type": "normal"
      },
      {
        "text": "3. Tarjeta de novato de Mickey Mantle de Topps de 1952",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/mickey.jpg",
        "type": "image"
      },
      {
        "text": "Precio: aproximadamente 1,5 millones de dólares (a partir de 2023)\nRareza: otra tarjeta de novato icónica, con uno de los mejores jugadores de béisbol de todos los tiempos.\nImportancia: la tarjeta de Mantle es muy coleccionable debido a su carrera excepcional y al valor histórico de la tarjeta.",
        "type": "normal"
      },
      {
        "text": "4. 1954 Topps Ted Williams",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/topp.jpg",
        "type": "image"
      },
      {
        "text": "Precio: Aproximadamente $1 millón (a partir de 2023)\nRareza: Una tarjeta relativamente rara que presenta a otro jugador de béisbol legendario.\nImportancia: La tarjeta de Williams es muy valorada debido a su carrera excepcional y la importancia histórica de la tarjeta.",
        "type": "normal"
      },
      {
        "text": "5. 1968 Topps PSA 10 Jim Brown Rookie Card",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/jim.jpg",
        "type": "image"
      },
      {
        "text": "Precio: Aproximadamente $1 millón (a partir de 2023)\nRareza: Una tarjeta de novato rara de un corredor legendario de la NFL.\nImportancia: La tarjeta de Brown es altamente coleccionable debido a su carrera excepcional y el valor histórico de la tarjeta.",
        "type": "normal"
      },
      {
        "text": "❝ Tenga en cuenta que estos precios son estimaciones y pueden fluctuar según las condiciones del mercado y la condición específica de la tarjeta. Además, existen otras tarjetas deportivas valiosas que pueden no estar incluidas en esta lista debido a su rareza o ventas recientes.",
        "type": "title"
      }
    ]
  }
]

const de_discovery = [
  {
    "image": require("../assets/mostvalue/most_value_world.jpg"),
    "title": "Top 5 der teuersten M.T.G-Karten",
    "contents": [
      {
        "text": "Die 5 teuersten Magic: The Gathering-Karten der Welt sind:",
        "type": "title"
      },
      {
        "text": "1. Der Eine Ring (Seriennummer 001/001)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/theonering.jpg",
        "type": "image"
      },
      {
        "text": "Diese Karte aus dem Set Herr der Ringe: Geschichten aus Mittelerde ist die teuerste Karte, die jemals verkauft wurde. Sie erzielte einen atemberaubenden Preis von 2 Millionen Dollar. Es handelt sich um eine einzigartige Karte mit Seriennummer und einzigartigen Designelementen.",
        "type": "normal"
      },
      {
        "text": "2. Black Lotus (Alpha)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/blacklotus.jpg",
        "type": "image"
      },
      {
        "text": "Eine klassische Karte aus dem ersten Set des Spiels, Alpha. Black Lotus ist aufgrund seiner Seltenheit und starken Wirkung sehr begehrt. Man kann damit drei Mana jeder Farbe erhalten. Die Preise für Black Lotus variieren je nach Zustand, aber es ist durchweg eine der teuersten Karten. Die jüngsten Verkäufe lagen zwischen 500.000 und 800.000 US-Dollar.",
        "type": "normal"
      },
      {
        "text": "3. Artefakt kopieren (Alpha)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/copyartifact.jpg",
        "type": "image"
      },
      {
        "text": "Eine weitere Karte aus dem Alpha-Set, Artefakt kopieren, ermöglicht es Ihnen, jedes Artefakt oder jede Verzauberung auf dem Schlachtfeld zu kopieren. Seine Seltenheit und starke Wirkung machen es sehr wertvoll. Die Preise für Artefakt kopieren liegen normalerweise zwischen 50.000 und 100.000 US-Dollar.",
        "type": "normal"
      },
      {
        "text": "4. Mox Sapphire (Alpha)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/moxsapphire.jpg",
        "type": "image"
      },
      {
        "text": "Mox Sapphire ist eine mächtige Manaquelle, die blaues Mana erschließt, und eine der begehrtesten Karten im Spiel. Sie ist bei Sammlern und Spielern gleichermaßen begehrt. Die Preise für Mox Sapphire können stark variieren, aber im Allgemeinen wird ihr Wert auf etwa 50.000 US-Dollar geschätzt.",
        "type": "normal"
      },
      {
        "text": "5. Mox Ruby (Alpha)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/moxruby.jpg",
        "type": "image"
      },
      {
        "text": "Ähnlich wie Mox Sapphire ist Mox Ruby eine mächtige Manaquelle, die rotes Mana anzapft. Es ist eine weitere sehr begehrte Karte, deren Preise normalerweise zwischen 40.000 und 50.000 US-Dollar liegen.",
        "type": "normal"
      },
      {
        "text": "❝ Es ist wichtig zu beachten, dass die Preise für diese Karten im Laufe der Zeit je nach Marktbedingungen und Verfügbarkeit hochwertiger Exemplare schwanken können.",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/mostvalue/most_value_us.jpg"),
    "title": "Top 5 der teuersten Y.G.O-Karten",
    "contents": [
      {
        "text": "Die 5 teuersten Yu-Gi-Oh-Karten der Welt sind im Jahr 2023:",
        "type": "title"
      },
      {
        "text": "1.Black Luster Soldier (Stainless Steel)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/blackluster.jpg",
        "type": "image"
      },
      {
        "text": "Geschätzter Wert: 10.000.000 $. Diese Karte ist ein einzigartiger Werbeartikel. die einem Gewinner eines Yu-Gi-Oh!-Turniers verliehen wurde. Ihre Seltenheit und ihr einzigartiges Material machen sie extrem wertvoll.",
        "type": "normal"
      },
      {
        "text": "2. Tyler der Große Krieger",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/tyler.jpg",
        "type": "image"
      },
      {
        "text": "Geschätzter Wert: 311.211 $. Diese Karte war eine Preiskarte eines Yu-Gi-Oh!-Turniers und ist extrem selten. Ihr hoher Wert ist auf ihre Seltenheit und ihre starke Wirkung zurückzuführen.",
        "type": "normal"
      },
      {
        "text": "3. Alternatives Artwork Gemini Elf T3-04",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/geminielf.jpg",
        "type": "image"
      },
      {
        "text": "Geschätzter Wert: 254.791 $. Diese Karte ist eine seltene Variante der Gemini Elf-Karte mit einem einzigartigen alternativen Artwork. Ihr hoher Wert ist auf ihre Seltenheit und ihren Sammlercharakter zurückzuführen.",
        "type": "normal"
      },
      {
        "text": "4. Blauäugiger weißer Drache (LOB 1. Ausgabe)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/blueeyes.jpg",
        "type": "image"
      },
      {
        "text": "Geschätzter Wert: 85.000 $. Diese Karte ist eine klassische Yu-Gi-Oh!-Karte, die bei Sammlern sehr begehrt ist. Ihr hoher Wert ist auf ihre Seltenheit und ihren Kultstatus zurückzuführen.",
        "type": "normal"
      },
      {
        "text": "5. Dark Magician (LOB 1. Ausgabe)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/darkmagician.jpg",
        "type": "image"
      },
      {
        "text": "Geschätzter Wert: 85.000 $. Diese Karte ist eine weitere klassische Yu-Gi-Oh!-Karte, die bei Sammlern sehr begehrt ist. Ihr hoher Wert ist auf ihre Seltenheit und ihren Kultstatus zurückzuführen.",
        "type": "normal"
      },
      {
        "text": "❝ Bitte beachten Sie, dass es sich bei diesen Werten um Schätzungen handelt und diese im Laufe der Zeit schwanken können. Außerdem beträgt der Wert einer Yu-Gi-Oh! Karte kann durch Faktoren wie ihren Zustand, ihre Bewertung und ihre Herkunft beeinflusst werden.",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/mostvalue/most_value_uk.jpg"),
    "title": "Top 5 der teuersten P.K.M-Karten",
    "contents": [
      {
        "text": "Die Preise von P.K.M-Karten können aufgrund verschiedener Faktoren schwanken, darunter Seltenheit, Zustand und Marktnachfrage. Hier sind die Top 5 der teuersten P.K.M-Karten ab Anfang 2024, zusammen mit ihren ungefähren Preisen und wichtigen Details:",
        "type": "title"
      },
      {
        "text": "1. Illustrator P.i.k.a.c.h.u (1998)",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/pikachu.jpg",
        "type": "image"
      },
      {
        "text": "Preis: 5.275.000 $\nSeltenheit: Werbekarte für das Corocoro-Magazin\nHauptmerkmale: Einzigartige Illustration, PSA 10-Bewertung, gekauft von YouTuber Logan Paul",
        "type": "normal"
      },
      {
        "text": "2. Shadowless Base Set Holo Charizard (1999)",
        "type": "normal"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/charizard.jpg",
        "type": "image"
      },
      {
        "text": "Preis: 420.000 $\nSeltenheit: Base Set, holografisch, Erstausgabe, schattenlose Version\nHauptmerkmale: Ikonisches P.K.M, hohe Nachfrage unter Sammlern, PSA 10-Bewertung",
        "type": "normal"
      },
      {
        "text": "3. 1998 Japanische Promo-Trophäe P.i.k.a.c.h.u Silber 2.-2. Turnier",
        "type": "normal"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/pikachu2.jpg",
        "type": "image"
      },
      {
        "text": "Preis: 444.000 $\nSeltenheit: Werbekarte als Turnierpreis verliehen\nHauptmerkmale: Silbernes Trophäendesign, selten und sehr begehrt",
        "type": "normal"
      },
      {
        "text": "4. 1998 P.K.M Blastoise #009/165R In Auftrag gegebenes Präsentations-Hologramm \"Galaxy Star\"",
        "type": "normal"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/blastoise.jpg",
        "type": "image"
      },
      {
        "text": "Preis: 360.000 $\nSeltenheit: In Auftrag gegebene Präsentationskarte mit einzigartigem Design\nHauptmerkmale: Galaxy Star-Hologramm, eines der wenigen bekannten Beispiele",
        "type": "normal"
      },
      {
        "text": "5. Umbreon Gold Star (2005)",
        "type": "normal"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/umbreon.jpg",
        "type": "image"
      },
      {
        "text": "Preis: 180.000 $\nRarität: Japanische 70.000-Punkte-PLAY-Promo\nKlasse: PSA 10\nVerkaufsmonat: Februar 2024",
        "type": "normal"
      },
      {
        "text": "❝ Bitte beachten Sie, dass sich die Preise im Laufe der Zeit ändern können und neue Karten möglicherweise die teuersten sind. Es ist immer eine gute Idee, die neuesten Auktionsergebnisse zu prüfen, um die aktuellsten Informationen zu erhalten.",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/mostvalue/most_value_ca.jpg"),
    "title": "Top 5 der teuersten Sportkarten",
    "contents": [
      {
        "text": "Der Sammelkartenmarkt hat in den letzten Jahren einen enormen Popularitäts- und Wertzuwachs erlebt, wobei einige Karten astronomische Preise erreichen.\nHier sind die Top 5 der teuersten Sammelkarten für Sportkarten der Welt, zusammen mit detaillierten Informationen und ihrem aktuellen Marktwert:",
        "type": "title"
      },
      {
        "text": "1. 1909-11 T206 Honus Wagner",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/wagner.jpg",
        "type": "image"
      },
      {
        "text": "Preis: Ungefähr 7,25 Millionen US-Dollar (Stand 2023)\nSeltenheit: Extrem selten, es existieren nur eine Handvoll bekannter Exemplare.\nBedeutung: Honus Wagner war ein legendärer Baseballspieler, und die Seltenheit und historische Bedeutung der Karte machen sie zu einem der begehrtesten Sammlerstücke der Welt.",
        "type": "normal"
      },
      {
        "text": "2. 1986-87 Fleer Michael Jordan Rookie Card",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/jordan.jpg",
        "type": "image"
      },
      {
        "text": "Preis: Ungefähr 2 Millionen US-Dollar (Stand 2023)\nSeltenheit: Sehr begehrt aufgrund von Michael Jordans Kultstatus im Basketball.\nBedeutung: Dies ist Jordans Rookie-Karte, die den Beginn seiner legendären Karriere markiert.",
        "type": "normal"
      },
      {
        "text": "3. 1952 Topps Mickey Mantle Rookie Card",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/mickey.jpg",
        "type": "image"
      },
      {
        "text": "Preis: Ungefähr 1,5 Millionen US-Dollar (Stand 2023)\nRarität: Eine weitere ikonische Rookie-Karte mit einem der größten Baseballspieler aller Zeiten.\nBedeutung: Mantles Karte ist aufgrund seiner außergewöhnlichen Karriere und des historischen Werts der Karte sehr sammelwürdig.",
        "type": "normal"
      },
      {
        "text": "4. 1954 Topps Ted Williams",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/topp.jpg",
        "type": "image"
      },
      {
        "text": "Preis: Ungefähr 1 Million US-Dollar (Stand 2023)\nRarität: Eine relativ seltene Karte mit einem anderen legendären Baseballspieler.\nBedeutung: Die Williams-Karte ist aufgrund seiner außergewöhnlichen Karriere und der historischen Bedeutung der Karte sehr wertvoll.",
        "type": "normal"
      },
      {
        "text": "5. 1968 Topps PSA 10 Jim Brown Rookie Card",
        "type": "title"
      },
      {
        "text": "https://storage.bhs.cloud.ovh.net/v1/AUTH_948ebf6d457f4ea4802e51b22bfce599/colnect/tcg/jim.jpg",
        "type": "image"
      },
      {
        "text": "Preis: Ungefähr 1 Million US-Dollar (Stand 2023)\nRarität: Eine seltene Rookie-Karte eines legendären NFL-Runningbacks.\nBedeutung: Browns Karte ist aufgrund seiner außergewöhnlichen Karriere und des historischen Werts der Karte ein begehrtes Sammlerstück.",
        "type": "normal"
      },
      {
        "text": "❝ Bitte beachten Sie, dass es sich bei diesen Preisen um Schätzungen handelt und diese je nach Marktbedingungen und dem spezifischen Zustand der Karte schwanken können. Darüber hinaus gibt es weitere wertvolle Sportkarten, die aufgrund ihrer Seltenheit oder kürzlich erfolgten Verkäufe möglicherweise nicht in dieser Liste enthalten sind.",
        "type": "title"
      }
    ]
  }
]

const it_tips = [
  {
    "image": require("../assets/tips/tip1.jpg"),
    "title": "Come identificare una carta TCG",
    "contents": [
      {
        "text": "TCG sta per Trading Card Game. Questi giochi spesso presentano carte collezionabili con personaggi, abilità e illustrazioni unici. Ecco come puoi identificare una carta TCG:",
        "type": "title"
      },
      {
        "text": "1. Costruzione della carta:",
        "type": "title"
      },
      {
        "text": "Carta: le carte TCG sono solitamente realizzate in cartoncino di alta qualità.\nFoiling: molte carte hanno accenti foil, che possono essere lucidi o strutturati.\nBordi: i bordi della carta sono spesso distinti e possono variare a seconda del gioco o del set.",
        "type": "normal"
      },
      {
        "text": "2. Testo e illustrazioni:",
        "type": "title"
      },
      {
        "text": "Testo: la carta avrà un testo che descrive il personaggio, le sue abilità e qualsiasi regola speciale.\nIllustrazione: l'illustrazione sulla carta è spesso correlata al personaggio o al tema del gioco.",
        "type": "normal"
      },
      {
        "text": "3. Indicatori specifici del gioco:",
        "type": "title"
      },
      {
        "text": "Simboli: ogni gioco TCG ha il suo set di simboli che rappresentano diverse azioni, tipi o attributi.\nSegnalini del set: molte carte hanno un simbolo o un codice che indica il set da cui provengono.",
        "type": "normal"
      },
      {
        "text": "4. Indicatori di rarità:",
        "type": "normal"
      },
      {
        "text": "Simboli: alcune carte hanno simboli che indicano la loro rarità, come comune, non comune, raro o ultra-raro.",
        "type": "title"
      },
      {
        "text": "Risorse online:",
        "type": "title"
      },
      {
        "text": "Se non sei sicuro di una carta specifica, puoi spesso trovare informazioni online usando motori di ricerca o forum dedicati al TCG.\nSiti Web come TCGplayer o eBay possono anche fornire dettagli sui set di carte e sulle rarità.",
        "type": "normal"
      }
    ]
  },
  {
    "image": require("../assets/tips/tip2.jpg"),
    "title": "I migliori consigli per acquistare e vendere carte TCG",
    "contents": [
      {
        "text": "Acquistare e vendere carte del Gioco di Carte Collezionabili (TCG) può essere un hobby divertente e potenzialmente redditizio. Ecco alcuni dei migliori consigli per aiutarti a orientarti nel mercato:",
        "type": "title"
      },
      {
        "text": "\nPer gli acquirenti:",
        "type": "title"
      },
      {
        "text": "1. Ricerca e istruzione:",
        "type": "title"
      },
      {
        "text": "Impara le basi: comprendi le meccaniche del gioco, i tipi di carte e i livelli di rarità.\nCerca i valori delle carte: usa risorse online come TCGplayer, eBay e PriceCharting per tenere traccia dei prezzi delle carte.\nIdentifica i venditori legittimi: fai attenzione alle carte contraffatte. Cerca venditori affidabili con feedback positivi.",
        "type": "normal"
      },
      {
        "text": "2. Imposta un budget:",
        "type": "title"
      },
      {
        "text": "Determina il tuo limite di spesa: decidi quanto sei disposto a investire in carte.\nDai priorità ai tuoi acquisti: concentrati sulle carte che sono in linea con i tuoi obiettivi di collezione e il tuo budget.",
        "type": "normal"
      },
      {
        "text": "3. Controlla le condizioni della carta:",
        "type": "title"
      },
      {
        "text": "Controlla se presenta segni di usura: cerca graffi, ammaccature, pieghe e sbiancamenti.\nValuta le carte: se stai acquistando carte di valore elevato, prendi in considerazione di farle valutare da un professionista.",
        "type": "normal"
      },
      {
        "text": "4. Valuta l'acquisto in blocco:",
        "type": "title"
      },
      {
        "text": "Risparmia denaro: acquistare carte in blocco può spesso portare a sconti.\nAumenta la tua collezione: è un ottimo modo per espandere rapidamente la tua collezione.",
        "type": "normal"
      },
      {
        "text": "5Sii paziente:",
        "type": "title"
      },
      {
        "text": "Aspetta le offerte: i prezzi fluttuano. Sii paziente e aspetta che arrivino delle buone offerte.\nEvita gli acquisti d'impulso: non affrettarti ad acquistare carte che non desideri veramente.",
        "type": "normal"
      },
      {
        "text": "\nPer i venditori:",
        "type": "title"
      },
      {
        "text": "1. Valuta la tua collezione:",
        "type": "title"
      },
      {
        "text": "Identifica le carte di valore: determina quali carte vale la pena vendere e il loro valore approssimativo.\nOrganizza la tua collezione: categorizza le carte in base a set, rarità e condizioni.",
        "type": "normal"
      },
      {
        "text": "2. Scegli una piattaforma di vendita:",
        "type": "title"
      },
      {
        "text": "Mercati online: prendi in considerazione eBay, TCGplayer e Facebook Marketplace.\nNegozi locali: verifica presso i negozi di giochi locali che acquistano e vendono carte.",
        "type": "normal"
      },
      {
        "text": "3. Imposta prezzi competitivi:",
        "type": "title"
      },
      {
        "text": "Cerca prezzi di mercato: usa strumenti online per confrontare i prezzi di carte simili.\nConsidera le condizioni: adatta i prezzi in base alle condizioni della carta.",
        "type": "normal"
      },
      {
        "text": "4. Scatta foto di alta qualità:",
        "type": "title"
      },
      {
        "text": "Chiare e dettagliate: mostra il fronte, il retro e le imperfezioni della carta.\nUsa una buona illuminazione: assicurati che le foto siano ben illuminate.",
        "type": "normal"
      },
      {
        "text": "5. Fornisci descrizioni accurate:",
        "type": "title"
      },
      {
        "text": "Condizioni dettagliate della carta: sii onesto su eventuali usure o danni.\nIncludi informazioni rilevanti: menziona il set, la rarità e la classificazione della carta (se applicabile).",
        "type": "normal"
      },
      {
        "text": "6. Imballa e spedisci in sicurezza:",
        "type": "title"
      },
      {
        "text": "Proteggi le carte: usa un imballaggio appropriato per evitare danni durante la spedizione.\nConsidera l'assicurazione: acquista un'assicurazione per le carte di valore elevato per proteggerle da smarrimento o danneggiamento.",
        "type": "normal"
      },
      {
        "text": "\nSeguendo questi suggerimenti, puoi migliorare la tua esperienza di acquisto e vendita TCG e prendere decisioni informate.",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/tips/tip3.jpg"),
    "title": "Come riconoscere le carte TCG false",
    "contents": [
      {
        "text": "Individuare le carte collezionabili false può essere complicato, ma con un occhio attento e un po' di conoscenza, puoi ridurre significativamente il rischio di acquistare articoli contraffatti. Ecco alcuni fattori chiave da cercare:\n",
        "type": "normal"
      },
      {
        "text": "Ispezione visiva:",
        "type": "title"
      },
      {
        "text": "Qualità del cartoncino: le carte originali hanno spesso un cartoncino più spesso e resistente. Le carte false possono sembrare più sottili o più fragili.\nQualità di stampa: fai attenzione alla nitidezza delle immagini, alla chiarezza del testo e alla qualità di stampa complessiva. Le carte false possono avere elementi sfocati o distorti.\nEffetti olografici: se la carta presenta elementi olografici, esaminali attentamente. I veri effetti olografici dovrebbero essere vivaci, coerenti e avere una certa profondità. Gli ologrammi falsi possono apparire piatti o avere una lucentezza metallica.\nBordi e angoli: controlla i bordi della carta. Le carte vere hanno solitamente bordi e angoli puliti e nitidi. Le carte false possono avere bordi ruvidi o irregolari.\nSimbolo e numero del set: verifica che il simbolo e il numero del set corrispondano alla carta autentica. I falsari potrebbero commettere errori o utilizzare informazioni non corrette.",
        "type": "normal"
      },
      {
        "text": "Testo e tipografia:",
        "type": "title"
      },
      {
        "text": "Carattere e spaziatura: confronta il carattere e la spaziatura del testo sulla tua carta con esempi autentici. Le carte false potrebbero avere caratteri non corretti o spaziature non coerenti.\nGrammatica e ortografia: controlla eventuali errori grammaticali o ortografici. Le carte autentiche sono attentamente corrette.",
        "type": "normal"
      },
      {
        "text": "Confronto con carte autentiche:",
        "type": "title"
      },
      {
        "text": "Confronto affiancato: se possibile, confronta la carta sospettata di essere falsa con una carta autentica dello stesso set e rarità. Cerca eventuali discrepanze di colore, consistenza o dettagli.\nRisorse online: usa risorse online affidabili come TCGplayer o i siti Web ufficiali delle società di carte collezionabili per confrontare la tua carta con immagini autentiche.",
        "type": "normal"
      },
      {
        "text": "Reputazione del venditore:",
        "type": "title"
      },
      {
        "text": "Fonti affidabili: acquista carte da venditori affidabili o direttamente dal produttore. Evita di acquistare da fonti sconosciute o da venditori con una storia di vendita di prodotti contraffatti.",
        "type": "normal"
      },
      {
        "text": "\nRicorda: sebbene queste linee guida possano aiutarti a individuare le carte false, è sempre una buona idea essere cauti e fare delle ricerche. Se non sei sicuro dell'autenticità di una carta, consulta collezionisti esperti o esperti del settore.",
        "type": "normal"
      }
    ]
  },
  {
    "image": require("../assets/tips/tip4.jpg"),
    "title": "Le migliori carte TCG che ogni nuovo collezionista dovrebbe possedere",
    "contents": [
      {
        "text": "Nota: sebbene questa lista sia un ottimo punto di partenza, è importante ricordare che le carte migliori per un nuovo collezionista dipendono dalle sue preferenze personali e dal gioco di carte collezionabili (TCG) specifico a cui è interessato.",
        "type": "normal"
      },
      {
        "text": "P.K.M TCG",
        "type": "title"
      },
      {
        "text": "Set base Charizard: l'iconico drago sputafuoco è un must per ogni collezionista di P.K.M.\nIllustratore P.i.k.a.c.h.u: questa rara carta promozionale è molto ricercata e può essere piuttosto costosa.\nSet base Blastoise: un altro classico P.K.M iniziale, Blastoise è una scelta popolare per i collezionisti.\nIllustrazione alternativa Charizard VMAX: questa straordinaria la versione full-art di Charizard è una recente aggiunta al P.K.M TCG ed è rapidamente diventata la preferita dei collezionisti.",
        "type": "normal"
      },
      {
        "text": "Yu-Gi-Oh! TCG",
        "type": "title"
      },
      {
        "text": "Drago Bianco Occhi Blu: una carta mostro classica che è stata un punto fermo del Yu-Gi-Oh! TCG sin dal suo inizio.\nMago Nero: un'altra carta mostro iconica che è altamente collezionabile.\nRagazza Maga Nera: una popolare carta mostro femminile che è spesso abbinata a Mago Nero.\nSlifer il Drago del Cielo: una delle carte divinità egizie e una potente carta mostro.",
        "type": "normal"
      },
      {
        "text": "Magic: The Gathering",
        "type": "title"
      },
      {
        "text": "Loto Nero: una potente carta artefatto che produce mana ed è una delle carte più costose del gioco.\nRichiamo Ancestrale: una potente carta che ti consente di pescare tre carte.\nTimetwister: una potente carta che rimescola la tua libreria e quelle del tuo avversario.\nAngelo Serra: una potente carta creatura che può volare e rigenerarsi.",
        "type": "normal"
      },
      {
        "text": "Altri TCG degni di nota",
        "type": "title"
      },
      {
        "text": "Drago Ball Super TCG: Son Goku, Vegeta e altri personaggi popolari del franchise di Dragon Ball.\nYu-Gi-Oh! GX: Elemental Heroes, Destiny Heroes e altri archetipi popolari.P.K.M GO TCG: Carte basate sul famoso gioco per dispositivi mobili P.K.M GO.",
        "type": "normal"
      },
      {
        "text": "Ricorda: quando inizi una collezione, concentrati sulle carte che ti piacciono e che rientrano nel tuo budget. Non sentirti obbligato ad acquistare le carte più costose. La gioia del collezionismo sta spesso nel trovare e apprezzare le carte che hanno un significato personale.",
        "type": "normal"
      }
    ]
  }
]

const vi_tips = [
  {
    "image": require("../assets/tips/tip1.jpg"),
    "title": "Cách nhận dạng thẻ TCG",
    "contents": [
      {
        "text": "TCG là viết tắt của Trading Card Game. Những trò chơi này thường có các thẻ sưu tầm với các nhân vật, khả năng và hình ảnh minh họa độc đáo. Sau đây là cách bạn thường có thể nhận dạng thẻ TCG:",
        "type": "title"
      },
      {
        "text": "1. Cấu trúc thẻ:",
        "type": "title"
      },
      {
        "text": "Giấy: Thẻ TCG thường được làm bằng bìa cứng chất lượng cao.\nDán giấy bạc: Nhiều thẻ có điểm nhấn bằng giấy bạc, có thể bóng hoặc có họa tiết.\nBorders: Đường viền của thẻ thường khác biệt và có thể thay đổi tùy theo trò chơi hoặc bộ.",
        "type": "normal"
      },
      {
        "text": "2. Văn bản và hình ảnh minh họa:",
        "type": "title"
      },
      {
        "text": "Văn bản: Thẻ sẽ có văn bản mô tả nhân vật, khả năng của nhân vật và bất kỳ quy tắc đặc biệt nào.\nẢnh minh họa: Hình minh họa trên thẻ thường liên quan đến nhân vật hoặc chủ đề trò chơi.",
        "type": "normal"
      },
      {
        "text": "3. Chỉ báo cụ thể của trò chơi:",
        "type": "title"
      },
      {
        "text": "Biểu tượng: Mỗi trò chơi TCG đều có bộ biểu tượng riêng đại diện cho các hành động, loại hoặc thuộc tính khác nhau.\nĐánh dấu bộ: Nhiều thẻ có biểu tượng hoặc mã chỉ ra bộ mà chúng xuất phát.",
        "type": "normal"
      },
      {
        "text": "4. Đánh dấu độ hiếm:",
        "type": "normal"
      },
      {
        "text": "Biểu tượng: Một số lá bài có biểu tượng cho biết độ hiếm của chúng, chẳng hạn như phổ biến, không phổ biến, hiếm hoặc cực hiếm.",
        "type": "title"
      },
      {
        "text": "Tài nguyên trực tuyến:",
        "type": "title"
      },
      {
        "text": "Nếu bạn không chắc chắn về một lá bài cụ thể, bạn thường có thể tìm thông tin trực tuyến bằng cách sử dụng công cụ tìm kiếm hoặc diễn đàn TCG chuyên dụng.\nCác trang web như TCGplayer hoặc eBay cũng có thể cung cấp thông tin chi tiết về bộ bài và độ hiếm.",
        "type": "normal"
      }
    ]
  },
  {
    "image": require("../assets/tips/tip2.jpg"),
    "title": "Những mẹo hàng đầu để mua và bán thẻ TCG",
    "contents": [
      {
        "text": "Mua và bán thẻ trò chơi thẻ bài giao dịch (TCG) có thể là một sở thích thú vị và có khả năng sinh lời. Sau đây là một số mẹo hàng đầu giúp bạn điều hướng thị trường:",
        "type": "title"
      },
      {
        "text": "\nDành cho người mua:",
        "type": "title"
      },
      {
        "text": "1. Nghiên cứu và giáo dục:",
        "type": "title"
      },
      {
        "text": "Tìm hiểu những điều cơ bản: Hiểu cơ chế trò chơi, loại thẻ và mức độ hiếm.\nNghiên cứu giá trị thẻ: Sử dụng các nguồn trực tuyến như TCGplayer, eBay và PriceCharting để theo dõi giá thẻ.\nXác định người bán hợp pháp: Hãy cảnh giác với thẻ giả. Tìm kiếm người bán có uy tín và phản hồi tích cực.",
        "type": "normal"
      },
      {
        "text": "2. Đặt ngân sách:",
        "type": "title"
      },
      {
        "text": "Xác định giới hạn chi tiêu của bạn: Quyết định số tiền bạn sẵn sàng đầu tư vào thẻ.\nƯu tiên mua hàng của bạn: Tập trung vào các thẻ phù hợp với mục tiêu sưu tập và ngân sách của bạn.",
        "type": "normal"
      },
      {
        "text": "3. Kiểm tra tình trạng thẻ:",
        "type": "title"
      },
      {
        "text": "Kiểm tra tình trạng hao mòn: Tìm kiếm các vết xước, vết lõm, vết nhăn và vết trắng.\nPhân loại thẻ: Nếu bạn đang mua thẻ có giá trị cao, hãy cân nhắc việc phân loại thẻ một cách chuyên nghiệp.",
        "type": "normal"
      },
      {
        "text": "4. Cân nhắc mua số lượng lớn:",
        "type": "title"
      },
      {
        "text": "Tiết kiệm tiền: Mua thẻ số lượng lớn thường có thể dẫn đến giảm giá.\nTăng bộ sưu tập của bạn: Đây là cách tuyệt vời để mở rộng bộ sưu tập của bạn một cách nhanh chóng.",
        "type": "normal"
      },
      {
        "text": "5Hãy kiên nhẫn:",
        "type": "title"
      },
      {
        "text": "Chờ các giao dịch: Giá cả dao động. Hãy kiên nhẫn và chờ các giao dịch tốt xuất hiện.\nTránh mua hàng bốc đồng: Đừng vội mua những thẻ mà bạn không thực sự muốn.",
        "type": "normal"
      },
      {
        "text": "\nĐối với người bán:",
        "type": "title"
      },
      {
        "text": "1. Đánh giá bộ sưu tập của bạn:",
        "type": "title"
      },
      {
        "text": "Xác định thẻ có giá trị: Xác định thẻ nào đáng bán và giá trị gần đúng của chúng.\nSắp xếp bộ sưu tập của bạn: Phân loại thẻ theo bộ, độ hiếm và tình trạng.",
        "type": "normal"
      },
      {
        "text": "2. Chọn nền tảng bán hàng:",
        "type": "title"
      },
      {
        "text": "Thị trường trực tuyến: Cân nhắc eBay, TCGplayer và Facebook Marketplace.\nCửa hàng địa phương: Kiểm tra với các cửa hàng trò chơi địa phương mua và bán thẻ.",
        "type": "normal"
      },
      {
        "text": "3. Đặt giá cạnh tranh:",
        "type": "title"
      },
      {
        "text": "Nghiên cứu giá thị trường: Sử dụng các công cụ trực tuyến để so sánh giá của các loại thẻ tương tự.\nXem xét tình trạng: Điều chỉnh giá dựa trên tình trạng của thẻ.",
        "type": "normal"
      },
      {
        "text": "4. Chụp ảnh chất lượng cao:",
        "type": "title"
      },
      {
        "text": "Rõ ràng và chi tiết: Hiển thị mặt trước, mặt sau của thẻ và bất kỳ khuyết điểm nào.\nSử dụng ánh sáng tốt: Đảm bảo ảnh được chiếu sáng tốt.",
        "type": "normal"
      },
      {
        "text": "5. Cung cấp mô tả chính xác:",
        "type": "title"
      },
      {
        "text": "Chi tiết tình trạng thẻ: Hãy trung thực về bất kỳ vết mòn hoặc hư hỏng nào.\nBao gồm thông tin có liên quan: Đề cập đến bộ thẻ, độ hiếm và phân loại (nếu có) của thẻ.",
        "type": "normal"
      },
      {
        "text": "6. Đóng gói và vận chuyển an toàn:",
        "type": "title"
      },
      {
        "text": "Bảo vệ thẻ: Sử dụng bao bì phù hợp để tránh hư hỏng trong quá trình vận chuyển.\nCân nhắc bảo hiểm: Mua bảo hiểm cho thẻ có giá trị cao để bảo vệ chống mất mát hoặc hư hỏng.",
        "type": "normal"
      },
      {
        "text": "\nBằng cách làm theo các mẹo này, bạn có thể nâng cao trải nghiệm mua và bán TCG của mình và đưa ra quyết định sáng suốt.",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/tips/tip3.jpg"),
    "title": "Cách phát hiện thẻ TCG giả",
    "contents": [
      {
        "text": "Phát hiện thẻ giao dịch giả có thể rất khó khăn, nhưng với con mắt tinh tường và một số kiến ​​thức, bạn có thể giảm đáng kể nguy cơ mua phải hàng giả. Sau đây là một số yếu tố chính cần lưu ý:\n",
        "type": "normal"
      },
      {
        "text": "Kiểm tra trực quan:",
        "type": "title"
      },
      {
        "text": "Chất lượng giấy bìa cứng: Thẻ thật thường có giấy bìa cứng dày hơn, bền hơn. Thẻ giả có thể mỏng hơn hoặc mỏng manh hơn.\nChất lượng in: Hãy chú ý đến độ sắc nét của hình ảnh, độ rõ nét của văn bản và chất lượng in tổng thể. Thẻ giả có thể có các thành phần bị mờ hoặc méo.\nHiệu ứng ba chiều: Nếu thẻ có các thành phần ba chiều, hãy kiểm tra kỹ chúng. Hiệu ứng ba chiều thực sự phải sống động, đồng nhất và có chiều sâu nhất định. Thẻ giả ảnh ba chiều có thể phẳng hoặc có ánh kim.\nViền và góc: Kiểm tra các cạnh của thẻ. Thẻ thật thường có viền và góc sạch sẽ, sắc nét. Thẻ giả có thể có các cạnh thô hoặc không đều.\nBiểu tượng và số bộ: Xác minh rằng biểu tượng và số bộ khớp với thẻ thật. Người làm giả có thể mắc lỗi hoặc sử dụng thông tin không chính xác.",
        "type": "normal"
      },

      {
        "text": "Văn bản và kiểu chữ:",
        "type": "title"
      },

      {
        "text": "Phông chữ và khoảng cách: So sánh phông chữ và khoảng cách của văn bản trên thẻ của bạn với các ví dụ thực tế. Thẻ giả có thể có phông chữ không chính xác hoặc khoảng cách không nhất quán.\nNgữ pháp và chính tả: Kiểm tra xem có lỗi ngữ pháp hoặc chính tả nào không. Thẻ thật được hiệu đính cẩn thận.",
        "type": "normal"
      },
      {
        "text": "So sánh với Thẻ thật:",
        "type": "title"
      },
      {
        "text": "So sánh cạnh nhau: Nếu có thể, hãy so sánh thẻ nghi ngờ là giả với thẻ thật cùng bộ và độ hiếm. Tìm bất kỳ sự khác biệt nào về màu sắc, kết cấu hoặc chi tiết.\nTài nguyên trực tuyến: Sử dụng các tài nguyên trực tuyến có uy tín như TCGplayer hoặc các trang web chính thức của các công ty thẻ giao dịch để so sánh thẻ của bạn với hình ảnh thật.",
        "type": "normal"
      },
      {
        "text": "Uy tín của người bán:",
        "type": "title"
      },
      {
        "text": "Nguồn đáng tin cậy: Mua thẻ từ những người bán có uy tín hoặc trực tiếp từ nhà sản xuất. Tránh mua từ những nguồn không rõ ràng hoặc những người bán có tiền sử bán hàng giả.",
        "type": "normal"
      },
      {
        "text": "\nHãy nhớ: Mặc dù những hướng dẫn này có thể giúp bạn phát hiện ra thẻ giả, nhưng bạn vẫn nên thận trọng và tìm hiểu kỹ. Nếu bạn không chắc chắn về tính xác thực của thẻ, hãy tham khảo ý kiến ​​của những người sưu tập hoặc chuyên gia có kinh nghiệm trong lĩnh vực này.",
        "type": "normal"
      }
    ]
  },
  {
    "image": require("../assets/tips/tip4.jpg"),
    "title": "Những lá bài TCG hàng đầu mà mọi nhà sưu tập mới nên sở hữu",
    "contents": [
      {
        "text": "Lưu ý: Mặc dù danh sách này là điểm khởi đầu tuyệt vời, nhưng điều quan trọng cần nhớ là những lá bài tốt nhất cho nhà sưu tập mới phụ thuộc vào sở thích cá nhân của họ và trò chơi thẻ bài giao dịch (TCG) cụ thể mà họ quan tâm.",
        "type": "normal"
      },
      {
        "text": "P.K.M TCG",
        "type": "title"
      },
      {
        "text": "Bộ cơ bản Charizard: Con rồng phun lửa mang tính biểu tượng là vật phẩm không thể thiếu đối với bất kỳ nhà sưu tập P.K.M nào.\nP.i.k.a.c.h.u Illustrator: Lá bài khuyến mại hiếm này rất được săn đón và có thể khá đắt.\nBộ cơ bản Blastoise: Một P.K.M khởi đầu cổ điển khác, Blastoise là lựa chọn phổ biến của các nhà sưu tập.\nCharizard VMAX Alt Nghệ thuật: Phiên bản nghệ thuật đầy đủ tuyệt đẹp này của Charizard là một bổ sung gần đây cho P.K.M TCG và đã nhanh chóng trở thành sản phẩm yêu thích của các nhà sưu tập.",
        "type": "normal"
      },
      {
        "text": "Yu-Gi-Oh! TCG",
        "type": "title"
      },
      {
        "text": "Blue-Eyes White Dragon: Một lá bài quái vật kinh điển đã trở thành yếu tố chính của Yu-Gi-Oh! TCG kể từ khi thành lập.\nDark Magician: Một lá bài quái vật mang tính biểu tượng khác có giá trị sưu tầm cao.\nBlack Magician Girl: Một lá bài quái vật nữ phổ biến thường được ghép với Dark Magician.\nSlifer the Sky Dragon: Một trong những lá bài của Egyptian God Cards và là một lá bài quái vật mạnh mẽ.",
        "type": "normal"
      },
      {
        "text": "Magic: The Gathering",
        "type": "title"
      },

      {
        "text": "Black Lotus: Một lá bài tạo tác tạo ra mana mạnh mẽ, là một trong những lá bài đắt nhất trong trò chơi.\nAncestral Recall: Một lá bài mạnh mẽ cho phép bạn rút ba lá bài.\nTimetwister: Một lá bài mạnh mẽ có thể xáo trộn thư viện của bạn và thư viện của đối thủ.\nSerra Angel: Một lá bài sinh vật mạnh mẽ có thể bay và tái sinh.",
        "type": "normal"
      },
      {
        "text": "Các TCG đáng chú ý khác",
        "type": "title"
      },
      {
        "text": "Dragon Ball Super TCG: Son Goku, Vegeta và các nhân vật nổi tiếng khác trong loạt phim Dragon Ball.\nYu-Gi-Oh! GX: Elemental Heroes, Destiny Heroes và các nguyên mẫu phổ biến khác. P.K.M GO TCG: Các lá bài dựa trên trò chơi di động phổ biến P.K.M GO.",
        "type": "normal"
      },

      {
        "text": "Hãy nhớ: Khi bắt đầu sưu tập, hãy tập trung vào những lá bài mà bạn thích và phù hợp với ngân sách của mình. Đừng cảm thấy áp lực phải mua những lá bài đắt nhất. Niềm vui của việc sưu tập thường nằm ở việc tìm kiếm và trân trọng những lá bài có ý nghĩa cá nhân.",
        "type": "normal"
      }
    ]
  }
]

const ja_tips = [
  {
    "image": require("../assets/tips/tip1.jpg"),
    "title": "TCG カードの見分け方",
    "contents": [
      {
        "text": "TCG は Trading Card Game の略です。これらのゲームには、ユニークなキャラクター、能力、アートワークを備えたコレクションカードがよく登場します。TCG カードの一般的な見分け方は次のとおりです:",
        "type": "title"
      },
      {
        "text": "1. カードの構造:",
        "type": "title"
      },
      {
        "text": "紙: TCG カードは通常、高品質のカード紙で作られています。\n箔押し: 多くのカードには箔押しのアクセントがあり、光沢のあるものやテクスチャのあるものなどがあります。\n枠: カードの枠は多くの場合はっきりとしており、ゲームやセットによって異なります。",
        "type": "normal"
      },
      {
        "text": "2. テキストとアートワーク:",
        "type": "title"
      },
      {
        "text": "テキスト: カードには、カードの特徴を説明するテキストがあります。キャラクター、その能力、および特別なルール。\nアートワーク: カードのイラストは、多くの場合、キャラクターまたはゲームのテーマに関連しています。",
        "type": "normal"
      },
      {
        "text": "3. ゲーム固有のインジケーター:",
        "type": "title"
      },
      {
        "text": "シンボル: 各 TCG ゲームには、さまざまなアクション、タイプ、または属性を表す独自のシンボル セットがあります。\nセット マーカー: 多くのカードには、元のセットを示すシンボルまたはコードがあります。",
        "type": "normal"
      },
      {
        "text": "4.レア度マーカー:",
        "type": "normal"
      },
      {
        "text": "シンボル: 一部のカードには、コモン、アンコモン、レア、ウルトラレアなど、レア度を示すシンボルが付いています。",
        "type": "title"
      },
      {
        "text": "オンライン リソース:",
        "type": "title"
      },
      {
        "text": "特定のカードについてよくわからない場合は、検索エンジンや専用の TCG フォーラムを使用してオンラインで情報を検索できることがよくあります。\nTCGplayer や eBay などの Web サイトでも、カード セットやレア度に関する詳細情報が提供されています。",
        "type": "normal"
      }
    ]
  },
  {
    "image": require("../assets/tips/tip2.jpg"),
    "title": "TCG カードの売買に関するヒント",
    "contents": [
      {
        "text": "トレーディング カード ゲーム (TCG) カードの売買は、楽しく、利益を生む可能性のある趣味です。ここでは、市場をうまく乗り切るためのヒントをいくつか紹介します:",
        "type": "title"
      },
      {
        "text": "\n購入者向け:",
        "type": "title"
      },
      {
        "text": "1. 調査と教育:",
        "type": "title"
      },
      {
        "text": "基本を学ぶ: ゲームの仕組み、カードの種類、希少性を理解します。\nカードの価値を調査する: TCGplayer、eBay、PriceCharting などのオンライン リソースを使用して、カードの価格を追跡します。\n正当な販売者を特定する: 偽造カードには注意してください。肯定的なフィードバックのある評判の良い販売者を探します。",
        "type": "normal"
      },
      {
        "text": "2. 予算を設定する:",
        "type": "title"
      },
      {
        "text": "支出限度額を決定する: カードに投資する金額を決定します。\n購入の優先順位を決める: コレクションの目標と予算に合ったカードに重点を置きます。",
        "type": "normal"
      },
      {
        "text": "3. カードの状態を確認する:",
        "type": "title"
      },
      {
        "text": "摩耗や損傷を検査する: 傷、へこみ、折り目、白化がないか確認します。\nカードのグレード: 高額のカードを購入する場合は、専門家によるグレード付けを検討してください。",
        "type": "normal"
      },
      {
        "text": "4.まとめ買いを検討する:",
        "type": "title"
      },
      {
        "text": "お金を節約: カードをまとめ買いすると、割引になることが多いです。\nコレクションを増やす: コレクションを素早く拡大するのに最適な方法です。",
        "type": "normal"
      },
      {
        "text": "5辛抱強く待つ:",
        "type": "title"
      },
      {
        "text": "お買い得品を待つ: 価格は変動します。辛抱強く、お買い得品が出るまで待ちましょう。\n衝動買いを避ける: 本当に欲しくないカードを急いで購入しないでください。",
        "type": "normal"
      },
      {
        "text": "\n販売者向け:",
        "type": "title"
      },
      {
        "text": "1.コレクションを評価する:",
        "type": "title"
      },
      {
        "text": "価値あるカードを特定する: 販売する価値のあるカードとそのおおよその価値を判断します。\nコレクションを整理する: カードをセット、レア度、状態別に分類します。",
        "type": "normal"
      },
      {
        "text": "2. 販売プラットフォームを選択する:",
        "type": "title"
      },
      {
        "text": "オンライン マーケットプレイス: eBay、TCGplayer、Facebook Marketplace を検討します。\n地元の店舗: カードを売買する地元のゲーム ストアを確認します。",
        "type": "normal"
      },
      {
        "text": "3.競争力のある価格を設定する:",
        "type": "title"
      },
      {
        "text": "市場価格を調査する: オンライン ツールを使用して、類似のカードの価格を比較します。\n状態を考慮する: カードの状態に基づいて価格を調整します。",
        "type": "normal"
      },
      {
        "text": "4. 高品質の写真を撮る:",
        "type": "title"
      },
      {
        "text": "鮮明で詳細: カードの表面、裏面、および欠陥を表示します。\n適切な照明を使用する: 写真が十分に明るくなっていることを確認します。",
        "type": "normal"
      },
      {
        "text": "5. 正確な説明を提供する:",
        "type": "title"
      },
      {
        "text": "カードの状態を詳しく説明する: 摩耗や損傷について正直に説明します。\n関連情報を含める: カードのセット、希少性、およびグレーディング (該当する場合) について言及します。",
        "type": "normal"
      },
      {
        "text": "6.安全に梱包して発送する:",
        "type": "title"
      },
      {
        "text": "カードを保護する: 配送中の損傷を防ぐために適切な梱包を使用します。\n保険を検討する: 高価なカードには紛失や損傷から保護するための保険を購入します。",
        "type": "normal"
      },
      {
        "text": "\nこれらのヒントに従うことで、TCG の購入と販売の体験を向上させ、情報に基づいた決定を下すことができます。",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/tips/tip3.jpg"),
    "title": "偽造 TCG カードの見分け方",
    "contents": [
      {
        "text": "偽造トレーディング カードを見分けるのは難しい場合がありますが、鋭い目と知識があれば、偽造品を購入するリスクを大幅に減らすことができます。注目すべき主な要素は次のとおりです:\n",
        "type": "normal"
      },
      {
        "text": "目視検査:",
        "type": "title"
      },
      {
        "text": "カード用紙の品質: 本物のカードは、通常、より厚く、より耐久性のあるカード用紙を使用しています。偽造カードは、より薄く、より脆弱に感じる場合があります。\n印刷品質: 画像の鮮明さ、テキストの鮮明さ、および全体的な印刷品質に注意してください。偽造カードには、ぼやけた要素や歪んだ要素がある場合があります。\nホログラフィック効果: カードにホログラフィック要素がある場合は、よく調べてください。本物のホログラフィック効果は、鮮やかで、一貫性があり、一定の深みがあるはずです。偽造ホログラムは平らに見えたり、金属光沢がある場合があります。\n境界線と角: カードの端を確認してください。本物のカードは通常、境界線と角がきれいで鮮明です。偽造カードは、端が粗かったり、不均一だったりする場合があります。\nセット シンボルと番号: セット シンボルと番号が本物のカードと一致していることを確認します。偽造者は間違いを犯したり、間違った情報を使用したりすることがあります。",
        "type": "normal"
      },
      {
        "text": "テキストとタイポグラフィ:",
        "type": "title"
      },
      {
        "text": "フォントと間隔: カードのテキストのフォントと間隔を本物の例と比較します。偽造カードは、フォントが間違っていたり、間隔が一定でない場合があります。\n文法とスペル: 文法やスペルに間違いがないか確認してください。本物のカードは慎重に校正されています。",
        "type": "normal"
      },
      {
        "text": "本物のカードとの比較:",
        "type": "title"
      },
      {
        "text": "並べて比較: 可能であれば、偽造の疑いのあるカードを、同じセットで同じレア度の本物のカードと比較してください。色、質感、または詳細に相違がないか確認してください。\nオンライン リソース: TCGplayer やトレーディング カード会社の公式 Web サイトなどの信頼できるオンライン リソースを使用して、カードを本物の画像と比較してください。",
        "type": "normal"
      },
      {
        "text": "販売者の評判:",
        "type": "title"
      },
      {
        "text": "信頼できるソース: 信頼できる販売者からカードを購入するか、メーカーから直接購入してください。不明なソースや、偽造品を販売した経歴のある販売者からの購入は避けてください。",
        "type": "normal"
      },
      {
        "text": "\n覚えておいてください: これらのガイドラインは偽造カードを見分けるのに役立ちますが、常に注意して調査を行うことをお勧めします。カードの真正性に確信が持てない場合は、経験豊富なコレクターやその分野の専門家に相談してください。",
        "type": "normal"
      }
    ]
  },
  {
    "image": require("../assets/tips/tip4.jpg"),
    "title": "すべての新人コレクターが所有すべきトップ TCG カード",
    "contents": [
      {
        "text": "注: このリストは素晴らしい出発点ですが、新人コレクターにとって最高のカードは個人の好みや興味のある特定のトレーディング カード ゲーム (TCG) によって異なることを覚えておくことが重要です。",
        "type": "normal"
      },
      {
        "text": "P.K.M TCG",
        "type": "title"
      },
      {
        "text": "基本セット リザードン: 象徴的な火を吐くドラゴンは、P.K.M コレクターにとって必須のアイテムです。\nP.i.k.a.c.h.u イラストレーター: このレアなプロモーション カードは非常に人気があり、かなり高価になることがあります。\n基本セット カメックス: もう 1 つのクラシックなスターター P.K.M であるカメックスは、コレクターに人気の選択肢です。\nリザードン VMAX 代替品アート: この見事なフルアート版のリザードンは、最近 P.K.M TCG に追加されたもので、すぐにコレクターのお気に入りになりました。",
        "type": "normal"
      },
      {
        "text": "Yu-Gi-Oh! TCG",
        "type": "title"
      },
      {
        "text": "青眼の白龍: Yu-Gi-Oh! TCG の定番である古典的なモンスター カードです。 TCG の誕生以来、最も人気の高いカードです。\nブラック マジシャン: 収集価値の高いもう 1 つの象徴的なモンスター カードです。\nブラック マジシャン ガール: ブラック マジシャンとペアになることが多い、人気の女性モンスター カードです。\nスリファー ザ スカイ ドラゴン: エジプトの神カードの 1 つで、強力なモンスター カードです。",
        "type": "normal"
      },
      {
        "text": "マジック: ザ ギャザリング",
        "type": "title"
      },
      {
        "text": "ブラック ロータス: マナを生成する強力なアーティファクト カードで、ゲームで最も高価なカードの 1 つです。\nアンセストラル リコール: カードを 3 枚引くことができる強力なカードです。\nタイムツイスター: 自分のライブラリーと対戦相手のライブラリーをシャッフルする強力なカードです。\nセラ エンジェル: 飛行と再生ができる強力なクリーチャー カードです。",
        "type": "normal"
      },
      {
        "text": "その他の注目の TCG",
        "type": "title"
      },
      {
        "text": "ドラゴンボール スーパー TCG:孫悟空、ベジータ、ドラゴンボールシリーズの人気キャラクター。\n遊戯王GX: エレメンタルヒーロー、デスティニーヒーロー、その他の人気アーキタイプ。P.K.M GO TCG: 人気のモバイルゲーム P.K.M GO をベースにしたカード。",
        "type": "normal"
      },
      {
        "text": "覚えておいてください: コレクションを始めるときは、自分が楽しんでいて予算に合うカードに集中してください。最も高価なカードを買うプレッシャーを感じないでください。コレクションの喜びは、多くの場合、個人的に意味のあるカードを見つけて評価することにあります。",
        "type": "normal"
      }
    ]
  }
]

const hi_tips = [
  {
    "image": require("../assets/tips/tip1.jpg"),
    "title": "TCG कार्ड की पहचान कैसे करें",
    "contents": [
      {
        "text": "TCG का मतलब है ट्रेडिंग कार्ड गेम। इन खेलों में अक्सर अद्वितीय पात्रों, क्षमताओं और कलाकृति वाले संग्रहणीय कार्ड होते हैं। यहाँ बताया गया है कि आप आमतौर पर TCG कार्ड की पहचान कैसे कर सकते हैं:",
        "type": "title"
      },
      {
        "text": "1. कार्ड निर्माण:",
        "type": "title"
      },
      {
        "text": "कागज़: TCG कार्ड आमतौर पर उच्च-गुणवत्ता वाले कार्डस्टॉक से बने होते हैं.\nफ़ॉइलिंग: कई कार्ड में फ़ॉइल एक्सेंट होते हैं, जो चमकदार या बनावट वाले हो सकते हैं.\nबॉर्डर: कार्ड की सीमाएँ अक्सर अलग-अलग होती हैं और खेल या सेट के आधार पर भिन्न हो सकती हैं.",
        "type": "normal"
      },
      {
        "text": "2. टेक्स्ट और आर्टवर्क:",
        "type": "title"
      },
      {
        "text": "टेक्स्ट: कार्ड में कैरेक्टर, उसकी योग्यताओं और किसी विशेष नियम का वर्णन करने वाला टेक्स्ट होगा।\nआर्टवर्क: कार्ड पर चित्रण अक्सर कैरेक्टर या गेम थीम से संबंधित होता है।",
        "type": "normal"
      },
      {
        "text": "3. गेम-विशिष्ट संकेतक:",
        "type": "title"
      },
      {
        "text": "प्रतीक: प्रत्येक TCG गेम में प्रतीकों का अपना सेट होता है जो अलग-अलग क्रियाओं, प्रकारों या विशेषताओं का प्रतिनिधित्व करता है।\nसेट मार्कर: कई कार्ड में एक प्रतीक या कोड होता है जो उस सेट को दर्शाता है जिससे वे आए थे।",
        "type": "normal"
      },
      {
        "text": "4. दुर्लभता चिह्न:",
        "type": "normal"
      },
      {
        "text": "प्रतीक: कुछ कार्डों में ऐसे प्रतीक होते हैं जो उनकी दुर्लभता को दर्शाते हैं, जैसे कि सामान्य, असामान्य, दुर्लभ या अति-दुर्लभ।",
        "type": "title"
      },
      {
        "text": "ऑनलाइन संसाधन:",
        "type": "title"
      },
      {
        "text": "यदि आप किसी विशिष्ट कार्ड के बारे में अनिश्चित हैं, तो आप अक्सर खोज इंजन या समर्पित TCG फ़ोरम का उपयोग करके ऑनलाइन जानकारी पा सकते हैं।\nTCGplayer या eBay जैसी वेबसाइटें भी कार्ड सेट और दुर्लभताओं के बारे में विवरण प्रदान कर सकती हैं।",
        "type": "normal"
      }
    ]
  },
  {
    "image": require("../assets/tips/tip2.jpg"),
    "title": "TCG कार्ड खरीदने और बेचने के लिए शीर्ष युक्तियाँ",
    "contents": [
      {
        "text": "ट्रेडिंग कार्ड गेम (TCG) कार्ड खरीदना और बेचना एक मज़ेदार और संभावित रूप से लाभदायक शौक हो सकता है। यहाँ बाज़ार में आगे बढ़ने में आपकी मदद करने के लिए कुछ शीर्ष युक्तियाँ दी गई हैं:",
        "type": "title"
      },
      {
        "text": "\nखरीदारों के लिए:",
        "type": "title"
      },
      {
        "text": "1. शोध और शिक्षा:",
        "type": "title"
      },
      {
        "text": "मूल बातें जानें: खेल के यांत्रिकी, कार्ड के प्रकार और दुर्लभता के स्तरों को समझें.\nकार्ड मूल्यों पर शोध करें: कार्ड की कीमतों को ट्रैक करने के लिए TCGplayer, eBay और PriceCharting जैसे ऑनलाइन संसाधनों का उपयोग करें.\nवैध विक्रेताओं की पहचान करें: नकली कार्ड से सावधान रहें। प्रतिष्ठित विक्रेताओं की तलाश करें सकारात्मक प्रतिक्रिया वाले विक्रेता.",
        "type": "normal"
      },
      {
        "text": "2. बजट निर्धारित करें:",
        "type": "title"
      },
      {
        "text": "अपनी खर्च सीमा निर्धारित करें: तय करें कि आप कार्ड में कितना निवेश करना चाहते हैं.\nअपनी खरीदारी को प्राथमिकता दें: ऐसे कार्ड पर ध्यान दें जो आपके संग्रह लक्ष्यों और बजट के साथ संरेखित हों.",
        "type": "normal"
      },
      {
        "text": "3. कार्ड की स्थिति की जाँच करें:",
        "type": "title"
      },
      {
        "text": "घिसावट के लिए जाँच करें: खरोंच, डेंट, सिलवटें और सफ़ेदी के लिए देखें.\nकार्ड को ग्रेड दें: यदि आप उच्च-मूल्य वाले कार्ड खरीद रहे हैं, तो उन्हें पेशेवर रूप से ग्रेड करवाने पर विचार करें.",
        "type": "normal"
      },
      {
        "text": "4. थोक में खरीदने पर विचार करें:",
        "type": "title"
      },
      {
        "text": "पैसे बचाएँ: थोक में कार्ड खरीदने से अक्सर छूट मिल सकती है.\nअपना संग्रह बढ़ाएँ: यह आपके संग्रह को तेज़ी से बढ़ाने का एक शानदार तरीका है.",
        "type": "normal"
      },
      {
        "text": "5धैर्य रखें:",
        "type": "title"
      },
      {
        "text": "सौदों का इंतज़ार करें: कीमतों में उतार-चढ़ाव होता रहता है. धैर्य रखें और अच्छे सौदों के आने का इंतज़ार करें.\nआवेगपूर्ण खरीदारी से बचें: ऐसे कार्ड खरीदने में जल्दबाजी न करें जो आपको वास्तव में नहीं चाहिए.",
        "type": "normal"
      },
      {
        "text": "\nविक्रेताओं के लिए:",
        "type": "title"
      },
      {
        "text": "1. अपने संग्रह का आकलन करें:",
        "type": "title"
      },
      {
        "text": "मूल्यवान कार्ड की पहचान करें: निर्धारित करें कि कौन से कार्ड बेचने लायक हैं और उनका अनुमानित मूल्य क्या है.\nअपने संग्रह को व्यवस्थित करें: कार्ड को सेट, दुर्लभता और स्थिति के अनुसार वर्गीकृत करें.",
        "type": "normal"
      },
      {
        "text": "2. एक विक्रय प्लेटफ़ॉर्म चुनें:",
        "type": "title"
      },
      {
        "text": "ऑनलाइन मार्केटप्लेस: eBay, TCGplayer और Facebook मार्केटप्लेस पर विचार करें.\nस्थानीय स्टोर: स्थानीय गेम स्टोर से जाँच करें जो कार्ड खरीदते और बेचते हैं.",
        "type": "normal"
      },
      {
        "text": "3. प्रतिस्पर्धी मूल्य निर्धारित करें:",
        "type": "title"
      },
      {
        "text": "बाजार दरों पर शोध करें: समान कार्डों के लिए कीमतों की तुलना करने के लिए ऑनलाइन टूल का उपयोग करें.\nस्थिति पर विचार करें: कार्ड की स्थिति के आधार पर कीमतों को समायोजित करें.",
        "type": "normal"
      },
      {
        "text": "4. उच्च-गुणवत्ता वाली फ़ोटो लें:",
        "type": "title"
      },
      {
        "text": "स्पष्ट और विस्तृत: कार्ड के सामने, पीछे और किसी भी खामियों को दिखाएं.\nअच्छी रोशनी का उपयोग करें: सुनिश्चित करें कि फ़ोटो अच्छी तरह से प्रकाशित हों.",
        "type": "normal"
      },
      {
        "text": "5. सटीक विवरण प्रदान करें:",
        "type": "title"
      },
      {
        "text": "विवरण कार्ड की स्थिति: किसी भी टूट-फूट या क्षति के बारे में ईमानदार रहें.\nप्रासंगिक जानकारी शामिल करें: कार्ड के सेट, दुर्लभता और ग्रेडिंग (यदि लागू हो) का उल्लेख करें.",
        "type": "normal"
      },
      {
        "text": "6. सुरक्षित रूप से पैक करें और शिप करें:",
        "type": "title"
      },
      {
        "text": "कार्ड की सुरक्षा करें: शिपिंग के दौरान क्षति को रोकने के लिए उचित पैकेजिंग का उपयोग करें.\nबीमा पर विचार करें: नुकसान या क्षति से बचाने के लिए उच्च-मूल्य वाले कार्ड के लिए बीमा खरीदें.",
        "type": "normal"
      },
      {
        "text": "\nइन सुझावों का पालन करके, आप अपने TCG खरीद और बिक्री के अनुभव को बेहतर बना सकते हैं और सूचित निर्णय ले सकते हैं.",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/tips/tip3.jpg"),
    "title": "नकली TCG कार्ड कैसे पहचानें",
    "contents": [
      {
        "text": "नकली ट्रेडिंग कार्ड का पता लगाना मुश्किल हो सकता है, लेकिन एक गहरी नज़र और कुछ ज्ञान के साथ, आप नकली आइटम खरीदने के जोखिम को काफी हद तक कम कर सकते हैं। यहाँ कुछ मुख्य कारक दिए गए हैं जिन पर ध्यान देना चाहिए:\n",
        "type": "normal"
      },
      {
        "text": "दृश्य निरीक्षण:",
        "type": "title"
      },
      {
        "text": "कार्डस्टॉक गुणवत्ता: असली कार्ड में अक्सर मोटा, अधिक टिकाऊ कार्डस्टॉक होता है। नकली कार्ड पतले या अधिक कमजोर लग सकते हैं.\nप्रिंटिंग गुणवत्ता: छवियों की तीक्ष्णता, पाठ की स्पष्टता और समग्र प्रिंट गुणवत्ता पर ध्यान दें। नकली कार्ड में धुंधले या विकृत तत्व हो सकते हैं.\nहोलोग्राफिक प्रभाव: यदि कार्ड में होलोग्राफिक तत्व हैं, तो उन्हें बारीकी से जांचें। असली होलोग्राफिक प्रभाव जीवंत होने चाहिए, सुसंगत, और एक निश्चित गहराई है। नकली होलोग्राम सपाट दिखाई दे सकते हैं या उनमें धातु जैसी चमक हो सकती है। बॉर्डर और कोने: कार्ड के किनारों की जाँच करें। असली कार्ड में आमतौर पर साफ, स्पष्ट बॉर्डर और कोने होते हैं। नकली कार्ड में खुरदरे या असमान किनारे हो सकते हैं। सेट सिंबल और नंबर: सत्यापित करें कि सेट सिंबल और नंबर प्रामाणिक कार्ड से मेल खाते हैं। जालसाज़ गलतियाँ कर सकते हैं या गलत जानकारी का उपयोग कर सकते हैं।",
        "type": "normal"
      },
      {
        "text": "टेक्स्ट और टाइपोग्राफी:",
        "type": "title"
      },
      {
        "text": "फ़ॉन्ट और स्पेसिंग: अपने कार्ड पर टेक्स्ट के फ़ॉन्ट और स्पेसिंग की तुलना प्रामाणिक उदाहरणों से करें। नकली कार्ड में गलत फ़ॉन्ट या असंगत स्पेसिंग हो सकती है।\ व्याकरण और वर्तनी: व्याकरण या वर्तनी में किसी भी त्रुटि की जाँच करें। असली कार्डों की सावधानीपूर्वक प्रूफ़रीडिंग की जाती है।",
        "type": "normal"
      },
      {
        "text": "प्रामाणिक कार्डों की तुलना:",
        "type": "title"
      },
      {
        "text": "साइड-बाय-साइड तुलना: यदि संभव हो, तो संदिग्ध नकली कार्ड की तुलना उसी सेट और दुर्लभता के प्रामाणिक कार्ड से करें। रंग, बनावट या विवरण में किसी भी विसंगति की तलाश करें।\nऑनलाइन संसाधन: अपने कार्ड की प्रामाणिक छवियों से तुलना करने के लिए TCGplayer या ट्रेडिंग कार्ड कंपनियों की आधिकारिक वेबसाइटों जैसे प्रतिष्ठित ऑनलाइन संसाधनों का उपयोग करें।",
        "type": "normal"
      },
      {
        "text": "विक्रेता प्रतिष्ठा:",
        "type": "title"
      },
      {
        "text": "विश्वसनीय स्रोत: प्रतिष्ठित विक्रेताओं से या सीधे निर्माता से कार्ड खरीदें। अज्ञात स्रोतों या नकली सामान बेचने वाले विक्रेताओं से खरीदारी करने से बचें।",
        "type": "normal"
      },
      {
        "text": "\nयाद रखें: हालाँकि ये दिशा-निर्देश आपको नकली कार्ड पहचानने में मदद कर सकते हैं, लेकिन हमेशा सावधान रहना और अपना शोध करना एक अच्छा विचार है। यदि आप किसी कार्ड की प्रामाणिकता के बारे में अनिश्चित हैं, तो अनुभवी संग्रहकर्ताओं या क्षेत्र के विशेषज्ञों से परामर्श करें।",
        "type": "normal"
      }
    ]
  },
  {
    "image": require("../assets/tips/tip4.jpg"),
    "title": "हर नए कलेक्टर के पास होने चाहिए ये टॉप TCG कार्ड",
    "contents": [
      {
        "text": "नोट: जबकि यह सूची एक बेहतरीन शुरुआती बिंदु है, यह याद रखना महत्वपूर्ण है कि नए कलेक्टर के लिए सबसे अच्छे कार्ड उनकी व्यक्तिगत प्राथमिकताओं और विशिष्ट ट्रेडिंग कार्ड गेम (TCG) पर निर्भर करते हैं जिसमें वे रुचि रखते हैं.",
        "type": "normal"
      },
      {
        "text": "P.K.M TCG",
        "type": "title"
      },
      {
        "text": "बेस सेट चारिज़र्ड: प्रतिष्ठित अग्नि-श्वास ड्रैगन किसी भी P.K.M कलेक्टर के लिए ज़रूरी है.\nP.i.k.a.c.h.u इलस्ट्रेटर: यह दुर्लभ प्रचार कार्ड अत्यधिक मांग में है और काफी महंगा हो सकता है.\nबेस सेट ब्लास्टोइस: एक और क्लासिक स्टार्टर P.K.M, ब्लास्टोइस एक लोकप्रिय विकल्प है कलेक्टर्स.\nचारिज़र्ड VMAX ऑल्ट आर्ट: चारिज़र्ड का यह शानदार फुल-आर्ट संस्करण हाल ही में P.K.M TCG में जोड़ा गया है और यह जल्दी ही कलेक्टर का पसंदीदा बन गया है.",
        "type": "normal"
      },
      {
        "text": "Yu-Gi-Oh! TCG",
        "type": "title"
      },
      {
        "text": "ब्लू-आइज़ व्हाइट ड्रैगन: एक क्लासिक मॉन्स्टर कार्ड जो Yu-Gi-Oh का मुख्य हिस्सा रहा है! TCG अपनी शुरुआत से ही.\nडार्क मैजिशियन: एक और प्रतिष्ठित मॉन्स्टर कार्ड जो अत्यधिक संग्रहणीय है.\nब्लैक मैजिशियन गर्ल: एक लोकप्रिय महिला मॉन्स्टर कार्ड जिसे अक्सर डार्क मैजिशियन के साथ जोड़ा जाता है.\nस्लिफ़र द स्काई ड्रैगन: मिस्र के भगवान कार्ड में से एक और एक शक्तिशाली मॉन्स्टर कार्ड.",
        "type": "normal"
      },
      {
        "text": "मैजिक: द गैदरिंग",
        "type": "title"
      },
      {
        "text": "ब्लैक लोटस: एक शक्तिशाली मैना-उत्पादक आर्टिफैक्ट कार्ड जो गेम में सबसे महंगे कार्ड में से एक है.\nपैतृक रिकॉल: एक शक्तिशाली कार्ड जो आपको तीन कार्ड खींचने की अनुमति देता है.\nटाइमट्विस्टर: एक शक्तिशाली कार्ड जो आपकी लाइब्रेरी और आपके विरोधियों की लाइब्रेरी को शफ़ल करता है.\nसेरा एंजेल: एक शक्तिशाली प्राणी कार्ड जो उड़ सकता है और पुनर्जीवित हो सकता है.",
        "type": "normal"
      },
      {
        "text": "अन्य उल्लेखनीय TCG",
        "type": "title"
      },
      {
        "text": "ड्रैगन बॉल सुपर TCG: सोन गोकू, वेजिटा और ड्रैगन बॉल फ़्रैंचाइज़ के अन्य लोकप्रिय पात्र.\nयू-गि-ओह! GX: एलिमेंटल हीरोज़, डेस्टिनी हीरोज़ और अन्य लोकप्रिय आर्कटाइप.P.K.M GO TCG: लोकप्रिय मोबाइल गेम P.K.M GO पर आधारित कार्ड.",
        "type": "normal"
      },
      {
        "text": "याद रखें: संग्रह शुरू करते समय, उन कार्डों पर ध्यान केंद्रित करें जो आपको पसंद हों और जो आपके बजट में फिट हों. सबसे महंगे कार्ड खरीदने के लिए दबाव महसूस न करें. संग्रह करने का आनंद अक्सर उन कार्डों को खोजने और उनकी सराहना करने में होता है जिनका व्यक्तिगत महत्व होता है.",
        "type": "normal"
      }
    ]
  }
]

const pt_tips = [
  {
    "image": require("../assets/tips/tip1.jpg"),
    "title": "Como identificar um cartão TCG",
    "contents": [
      {
        "text": "TCG significa Trading Card Game. Estes jogos apresentam frequentemente cartas colecionáveis ​​com personagens, habilidades e artes únicas. Veja como pode identificar uma carta TCG:",
        "type": "title"
      },
      {
        "text": "1. Construção do cartão:",
        "type": "title"
      },
      {
        "text": "Papel: Os cartões TCG são geralmente feitos de papel cartão de alta qualidade. \nFoiling: Muitos cartões têm detalhes em foil, que podem ser brilhantes ou texturizados. \nBordas: As bordas do cartão são geralmente distintas e podem variar dependendo o jogo ou conjunto.",
        "type": "normal"
      },
      {
        "text": "2. Texto e Arte:",
        "type": "title"
      },
      {
        "text": "Texto: O card terá um texto que descreve a personagem, as suas habilidades e quaisquer regras especiais. \nArte: A ilustração no card está normalmente relacionada com a personagem ou o tema do jogo.",
        "type": "normal"
      },
      {
        "text": "3. Indicadores específicos do jogo:",
        "type": "title"
      },
      {
        "text": "Símbolos: Cada jogo TCG tem o seu próprio conjunto de símbolos que representam diferentes ações, tipos ou atributos. \nMarcadores de conjunto: Muitas cartas têm um símbolo ou código que indica o conjunto de onde vieram.",
        "type": "normal"
      },
      {
        "text": "4. Marcadores de raridade:",
        "type": "normal"
      },
      {
        "text": "Símbolos: Algumas cartas têm símbolos que indicam a sua raridade, como comum, incomum, raro ou ultra-raro.",
        "type": "title"
      },
      {
        "text": "Recursos on-line:",
        "type": "title"
      },
      {
        "text": "Se não tiver a certeza sobre uma carta específica, pode geralmente encontrar informações online utilizando motores de busca ou fóruns dedicados ao TCG. \nSites como o TCGplayer ou o eBay também podem fornecer detalhes sobre conjuntos de cartas e raridades.",
        "type": "normal"
      }
    ]
  },
  {
    "image": require("../assets/tips/tip2.jpg"),
    "title": "Dicas importantes para comprar e vender cartas TCG",
    "contents": [
      {
        "text": "Comprar e vender cartas de Trading Card Game (TCG) pode ser um passatempo divertido e potencialmente lucrativo. Aqui estão algumas dicas importantes para o ajudar a navegar no mercado:",
        "type": "title"
      },
      {
        "text": "\nPara compradores:",
        "type": "title"
      },
      {
        "text": "1. Investigação e Educação:",
        "type": "title"
      },
      {
        "text": "Aprenda o básico: compreenda a mecânica do jogo, os tipos de cartas e os níveis de raridade. \nPesquise os valores das cartas: utilize recursos online como o TCGplayer, eBay e PriceCharting para acompanhar os preços das cartas. \nIdentificar vendedores legítimos: tenha cuidado com as falsificações cartões.",
        "type": "normal"
      },
      {
        "text": "2. Defina um orçamento:",
        "type": "title"
      },
      {
        "text": "Determine o seu limite de gastos: decida quanto está disposto a investir em cartões. \nPriorize as suas compras: concentre-se em cartões que estejam alinhados com os seus objetivos de coleção e orçamento.",
        "type": "normal"
      },
      {
        "text": "3. Verifique o estado do cartão:",
        "type": "title"
      },
      {
        "text": "Inspecione quanto a desgaste: procure riscos, amolgadelas, vincos e esbranquiçamento. \nCartões de classificação: se estiver a comprar cartões de alto valor, considere classificá-los profissionalmente.",
        "type": "normal"
      },
      {
        "text": "4. Considere comprar a granel:",
        "type": "title"
      },
      {
        "text": "Poupe dinheiro: comprar cartões em grandes quantidades pode muitas vezes resultar em descontos. \nAumente a sua coleção: é uma ótima forma de expandir a sua coleção rapidamente.",
        "type": "normal"
      },
      {
        "text": "5Seja paciente:",
        "type": "title"
      },
      {
        "text": "Aguarde pelas ofertas: os preços flutuam. Seja paciente e espere que apareçam boas ofertas. \nEvite as compras por impulso: não se precipite a comprar cartas que não quer mesmo.",
        "type": "normal"
      },
      {
        "text": "\nPara vendedores:",
        "type": "title"
      },
      {
        "text": "1. Avalie a sua coleção:",
        "type": "title"
      },
      {
        "text": "Identifique cartas valiosas: determine que cartas vale a pena vender e o seu valor aproximado. \nOrganize a sua coleção: categorize as cartas por conjunto, raridade e estado.",
        "type": "normal"
      },
      {
        "text": "2. Escolha uma plataforma de vendas:",
        "type": "title"
      },
      {
        "text": "Mercados online: considere o eBay, o TCGplayer e o Facebook Marketplace. \nLojas locais: consulte as lojas de jogos locais que compram e vendem cartas.",
        "type": "normal"
      },
      {
        "text": "3. Defina preços competitivos:",
        "type": "title"
      },
      {
        "text": "Pesquise taxas de mercado: utilize ferramentas online para comparar preços de cartões semelhantes. \nConsidere a condição: ajuste os preços com base na condição do cartão.",
        "type": "normal"
      },
      {
        "text": "4. Tire fotografias de alta qualidade:",
        "type": "title"
      },
      {
        "text": "Claro e detalhado: mostre a frente, o verso do cartão e quaisquer imperfeições. \nUtilize uma boa iluminação: certifique-se de que as fotografias estão bem iluminadas.",
        "type": "normal"
      },
      {
        "text": "5. Forneça descrições precisas:",
        "type": "title"
      },
      {
        "text": "Detalhe da condição da carta: seja honesto sobre qualquer desgaste ou dano. \nInclua informação relevante: mencione o conjunto, a raridade e a classificação da carta (se aplicável).",
        "type": "normal"
      },
      {
        "text": "6. Embale e envie com segurança:",
        "type": "title"
      },
      {
        "text": "Proteja os cartões: utilize embalagens apropriadas para evitar danos durante o transporte. \nConsidere seguro: compre um seguro para cartões de alto valor para se proteger contra perdas ou danos.",
        "type": "normal"
      },
      {
        "text": "\nSeguindo estas dicas, pode melhorar a sua experiência de compra e venda de TCG e tomar decisões informadas.",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/tips/tip3.jpg"),
    "title": "Como identificar cartões TCG falsos",
    "contents": [
      {
        "text": "Detetar cartões de troca falsos pode ser complicado, mas com um olhar atento e algum conhecimento, pode reduzir significativamente o risco de comprar artigos falsificados. Eis alguns fatores-chave a ter em conta:\n",
        "type": "normal"
      },
      {
        "text": "Inspeção visual:",
        "type": "title"
      },
      {
        "text": "Qualidade do papel cartão: Os cartões genuínos têm, geralmente, um papel cartão mais grosso e durável. Os cartões falsos podem parecer mais finos ou frágeis. \nQualidade de impressão: Tenha em atenção a nitidez das imagens, a clareza do texto e à qualidade geral qualidade de impressão. Os cartões falsos podem ter elementos desfocados ou distorcidos. \nEfeitos holográficos: se o cartão apresentar elementos holográficos, examine-os atentamente. podem parecer planos ou ter uma brilho metálico. \nBordas e cantos: Verifique as bordas do cartão. Os cartões reais têm frequentemente bordas e cantos limpos e nítidos. o símbolo e o número definidos correspondem ao cartão autêntico.",
        "type": "normal"
      },
      {
        "text": "Texto e Tipografia:",
        "type": "title"
      },
      {
        "text": "Tipo de letra e espaçamento: compare o tipo de letra e o espaçamento do texto no seu cartão com exemplos autênticos. Os cartões falsos podem ter tipos de letra incorretos ou espaçamento inconsistente. \nGramática e ortografia: verifique se existem erros de gramática ou ortografia. Os cartões genuínos são cuidadosamente revistos.",
        "type": "normal"
      },
      {
        "text": "Comparação com cartões autênticos:",
        "type": "title"
      },
      {
        "text": "Comparação lado a lado: Se possível, compare a carta suspeita de ser falsa com uma carta autêntica do mesmo conjunto e raridade. Procure quaisquer discrepâncias na cor, textura ou detalhes. \nCaracterísticas online: Utilize fontes online fiáveis. como o TCGplayer ou os sites oficiais das empresas de cartas colecionáveis ​​para comparar a sua carta com imagens autênticas.",
        "type": "normal"
      },
      {
        "text": "Reputação do vendedor:",
        "type": "title"
      },
      {
        "text": "Fontes fidedignas: compre cartões a vendedores fidedignos ou diretamente ao fabricante. Evite comprar a fontes desconhecidas ou a vendedores com histórico de venda de produtos falsificados.",
        "type": "normal"
      },
      {
        "text": "\nLembre-se: Embora estas orientações possam ajudá-lo a identificar cartas falsas, é sempre uma boa ideia ser cauteloso e fazer a sua pesquisa. Se não tiver a certeza sobre a autenticidade de uma carta, consulte colecionadores experientes ou especialistas em o campo.",
        "type": "normal"
      }
    ]
  },
  {
    "image": require("../assets/tips/tip4.jpg"),
    "title": "Melhores cartas TCG que todo o novo colecionador deve ter",
    "contents": [
      {
        "text": "Nota: embora esta lista seja um ótimo ponto de partida, é importante lembrar que as melhores cartas para um novo colecionador dependem das suas preferências pessoais e do jogo de cartas colecionáveis ​​(TCG) específico em que está interessado .",
        "type": "normal"
      },
      {
        "text": "P.K.M TCG",
        "type": "title"
      },
      {
        "text": "Conjunto base Charizard: O icónico dragão cuspidor de fogo é essencial para qualquer colecionador de P.K.M.\nP.i.k.a.c.h.u Ilustrador: Esta rara carta promocional é muito procurada e pode ser bastante cara. \nConjunto base Blastoise: Outro clássico inicial P.K.M , Blastoise é uma escolha popular entre os colecionadores. \nCharizard VMAX Alt Art: Esta impressionante versão com arte completa de Charizard é uma adição recente ao P.K.M TCG e rapidamente se tornou a favorita dos colecionadores.",
        "type": "normal"
      },
      {
        "text": "Yu-Gi-Oh! TCG",
        "type": "title"
      },
      {
        "text": "Blue-Eyes White Dragon: Uma carta de monstro clássica que tem sido um marco do Yu-Gi-Oh! TCG desde o seu início. \nDark Magician: Outra carta de monstro icónica que é altamente colecionável. \nBlack Magician Girl : Uma carta popular de monstro feminino que é geralmente emparelhada com o Mago Negro. \nSlifer, o Dragão Celeste: Uma das cartas de Deus Egípcio e uma carta de monstro poderosa.",
        "type": "normal"
      },
      {
        "text": "Magic: The Gathering",
        "type": "title"
      },
      {
        "text": "Black Lotus: Uma poderosa carta artefacto que produz mana e é uma das cartas mais caras do jogo. \nAncestral Recall: Uma carta poderosa que te permite comprar três cartas. \nTimetwister: Uma carta poderosa que baralha a tua biblioteca e as bibliotecas dos seus adversários. \nSerra Angel: Uma carta de criatura poderosa que pode voar e regenerar.",
        "type": "normal"
      },
      {
        "text": "Outros TCG notáveis",
        "type": "title"
      },
      {
        "text": "Dragon Ball Super TCG: Son Goku, Vegeta e outras personagens populares da franquia Dragon Ball. \nYu-Gi-Oh! GX: Heróis Elementais, Heróis do Destino e outros arquétipos populares.P.K.M GO TCG: Cartas baseadas no popular jogo para telemóvel P.K.M GO.",
        "type": "normal"
      },
      {
        "text": "Lembre-se: Quando começar uma coleção, concentre-se em cartas de que goste e que se enquadrem no seu orçamento. Não se sinta pressionado a comprar as cartas mais caras. A alegria de colecionar está muitas vezes em encontrar e apreciar cartões que têm características pessoais.",
        "type": "normal"
      }
    ]
  }
]

const es_tips = [
  {
    "image": require("../assets/tips/tip1.jpg"),
    "title": "Cómo identificar una carta de TCG",
    "contents": [
      {
        "text": "TCG significa Trading Card Game (juego de cartas coleccionables). Estos juegos suelen incluir cartas coleccionables con personajes, habilidades e ilustraciones únicos. Así es como puedes identificar normalmente una carta de TCG:",
        "type": "title"
      },
      {
        "text": "1. Construcción de la carta:",
        "type": "title"
      },
      {
        "text": "Papel: las cartas de TCG suelen estar hechas de cartulina de alta calidad.\nMetalizado: muchas cartas tienen detalles metalizados, que pueden ser brillantes o texturizados.\nBordes: los bordes de la carta suelen ser distintos y pueden variar según el juego o la colección.",
        "type": "normal"
      },
      {
        "text": "2. Texto e ilustraciones:",
        "type": "title"
      },
      {
        "text": "Texto: la carta tendrá un texto que describe el personaje, sus habilidades y cualquier regla especial.\nIlustración: La ilustración de la carta suele estar relacionada con el personaje o el tema del juego.",
        "type": "normal"
      },
      {
        "text": "3. Indicadores específicos del juego:",
        "type": "title"
      },
      {
        "text": "Símbolos: Cada juego de TCG tiene su propio conjunto de símbolos que representan diferentes acciones, tipos o atributos.\nMarcadores de conjunto: Muchas cartas tienen un símbolo o código que indica el conjunto del que proceden.",
        "type": "normal"
      },
      {
        "text": "4. Marcadores de rareza:",
        "type": "normal"
      },
      {
        "text": "Símbolos: algunas cartas tienen símbolos que indican su rareza, como común, poco común, rara o ultrarrara.",
        "type": "title"
      },
      {
        "text": "Recursos en línea:",
        "type": "title"
      },
      {
        "text": "Si no estás seguro sobre una carta específica, a menudo puedes encontrar información en línea usando motores de búsqueda o foros dedicados a TCG.\nLos sitios web como TCGplayer o eBay también pueden proporcionar detalles sobre los juegos de cartas y sus rarezas.",
        "type": "normal"
      }
    ]
  },
  {
    "image": require("../assets/tips/tip2.jpg"),
    "title": "Los mejores consejos para comprar y vender cartas del juego de cartas coleccionables (TCG)",
    "contents": [
      {
        "text": "Comprar y vender cartas del juego de cartas coleccionables (TCG) puede ser un pasatiempo divertido y potencialmente rentable. A continuación, se ofrecen algunos consejos importantes para ayudarlo a explorar el mercado:",
        "type": "title"
      },
      {
        "text": "\nPara compradores:",
        "type": "title"
      },
      {
        "text": "1. Investigación y educación:",
        "type": "title"
      },
      {
        "text": "Aprenda los conceptos básicos: comprenda la mecánica del juego, los tipos de cartas y los niveles de rareza.\nInvestigue los valores de las cartas: use recursos en línea como TCGplayer, eBay y PriceCharting para realizar un seguimiento de los precios de las cartas.\nIdentifique a los vendedores legítimos: tenga cuidado con las cartas falsificadas. Busque vendedores confiables con comentarios positivos.",
        "type": "normal"
      },
      {
        "text": "2. Establece un presupuesto:",
        "type": "title"
      },
      {
        "text": "Determina tu límite de gasto: decide cuánto estás dispuesto a invertir en tarjetas.\nPrioriza tus compras: céntrate en tarjetas que se ajusten a tus objetivos de colección y a tu presupuesto.",
        "type": "normal"
      },
      {
        "text": "3. Comprueba el estado de las tarjetas:",
        "type": "title"
      },
      {
        "text": "Inspecciona el estado de las tarjetas: busca rasguños, abolladuras, pliegues y blanqueamiento.\nCalifica las tarjetas: si vas a comprar tarjetas de alto valor, considera la posibilidad de que un profesional las califique.",
        "type": "normal"
      },
      {
        "text": "4. Considere comprar al por mayor:",
        "type": "title"
      },
      {
        "text": "Ahorre dinero: comprar tarjetas al por mayor a menudo puede generar descuentos.\nAumente su colección: es una excelente manera de expandir su colección rápidamente.",
        "type": "normal"
      },
      {
        "text": "5Sea paciente:",
        "type": "title"
      },
      {
        "text": "Espere las ofertas: los precios fluctúan. Sea paciente y espere a que aparezcan buenas ofertas.\nEvite las compras impulsivas: no se apresure a comprar tarjetas que realmente no desea.",
        "type": "normal"
      },
      {
        "text": "\nPara vendedores:",
        "type": "title"
      },
      {
        "text": "1. Evalúa tu colección:",
        "type": "title"
      },
      {
        "text": "Identifica cartas valiosas: determina qué cartas vale la pena vender y su valor aproximado.\nOrganiza tu colección: clasifica las cartas por set, rareza y condición.",
        "type": "normal"
      },
      {
        "text": "2. Elige una plataforma de venta:",
        "type": "title"
      },
      {
        "text": "Mercados en línea: considera eBay, TCGplayer y Facebook Marketplace.\nTiendas locales: consulta con tiendas de juegos locales que compren y vendan cartas.",
        "type": "normal"
      },
      {
        "text": "3. Establece precios competitivos:",
        "type": "title"
      },
      {
        "text": "Investiga las tarifas del mercado: usa herramientas en línea para comparar precios de cartas similares.\nConsidera la condición: ajusta los precios según la condición de la carta.",
        "type": "normal"
      },
      {
        "text": "4. Tome fotografías de alta calidad:",
        "type": "title"
      },
      {
        "text": "Nítidas y detalladas: muestre el frente, el dorso y cualquier imperfección de la tarjeta.\nUse una buena iluminación: asegúrese de que las fotos estén bien iluminadas.",
        "type": "normal"
      },
      {
        "text": "5. Proporcione descripciones precisas:",
        "type": "title"
      },
      {
        "text": "Detalle el estado de la tarjeta: sea honesto sobre cualquier desgaste o daño.\nIncluya información relevante: mencione el conjunto, la rareza y la clasificación de la tarjeta (si corresponde).",
        "type": "normal"
      },
      {
        "text": "6. Empaque y envíe de forma segura:",
        "type": "title"
      },
      {
        "text": "Proteja las cartas: use un embalaje adecuado para evitar daños durante el envío.\nConsidere la posibilidad de contratar un seguro: compre un seguro para las cartas de alto valor para protegerse contra pérdidas o daños.",
        "type": "normal"
      },
      {
        "text": "\nSi sigue estos consejos, podrá mejorar su experiencia de compra y venta de TCG y tomar decisiones informadas.",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/tips/tip3.jpg"),
    "title": "Cómo detectar cartas de TCG falsas",
    "contents": [
      {
        "text": "Detectar cartas coleccionables falsas puede ser complicado, pero con un ojo agudo y algo de conocimiento, puede reducir significativamente el riesgo de comprar artículos falsificados. Estos son algunos factores clave a tener en cuenta:\n",
        "type": "normal"
      },
      {
        "text": "Inspección visual:",
        "type": "title"
      },
      {
        "text": "Calidad de la cartulina: las cartas genuinas suelen tener una cartulina más gruesa y duradera. Las cartas falsas pueden parecer más delgadas o endebles.\nCalidad de impresión: preste atención a la nitidez de las imágenes, la claridad del texto y la calidad general de la impresión. Las cartas falsas pueden tener elementos borrosos o distorsionados.\nEfectos holográficos: si la carta presenta elementos holográficos, examínelos de cerca. Los efectos holográficos reales deben ser vibrantes, consistentes y tener un cierto profundidad. Los hologramas falsos pueden parecer planos o tener un brillo metálico.\nBordes y esquinas: Verifique los bordes de la tarjeta. Las tarjetas reales suelen tener bordes y esquinas limpios y nítidos. Las tarjetas falsas pueden tener bordes ásperos o desiguales.\nSímbolo y número establecidos: Verifique que el símbolo y el número establecidos coincidan con la tarjeta auténtica. Los falsificadores pueden cometer errores o usar información incorrecta.",
        "type": "normal"
      },
      {
        "text": "Texto y tipografía:",
        "type": "title"
      },
      {
        "text": "Fuente y espaciado: Compare la fuente y el espaciado del texto en su tarjeta con ejemplos auténticos. Las tarjetas falsas pueden tener fuentes incorrectas o espaciado inconsistente.\nGramática y ortografía: Verifique si hay errores de gramática u ortografía. Las cartas auténticas se revisan cuidadosamente.",
        "type": "normal"
      },
      {
        "text": "Comparación con cartas auténticas:",
        "type": "title"
      },
      {
        "text": "Comparación lado a lado: si es posible, compara la carta sospechosa de ser falsa con una carta auténtica del mismo conjunto y rareza. Busca discrepancias en el color, la textura o los detalles.\nRecursos en línea: utiliza recursos en línea confiables como TCGplayer o los sitios web oficiales de las compañías de cartas coleccionables para comparar tu carta con imágenes auténticas.",
        "type": "normal"
      },
      {
        "text": "Reputación del vendedor:",
        "type": "title"
      },
      {
        "text": "Fuentes confiables: compra cartas de vendedores confiables o directamente del fabricante. Evite comprar de fuentes desconocidas o vendedores con antecedentes de venta de productos falsificados.",
        "type": "normal"
      },
      {
        "text": "\nRecuerde: si bien estas pautas pueden ayudarlo a detectar tarjetas falsas, siempre es una buena idea ser cauteloso e investigar. Si no está seguro de la autenticidad de una tarjeta, consulte con coleccionistas experimentados o expertos en el campo.",
        "type": "normal"
      }
    ]
  },
  {
    "image": require("../assets/tips/tip4.jpg"),
    "title": "Las mejores cartas de TCG que todo coleccionista novato debería tener",
    "contents": [
      {
        "text": "Nota: si bien esta lista es un excelente punto de partida, es importante recordar que las mejores cartas para un coleccionista novato dependen de sus preferencias personales y del juego de cartas coleccionables (TCG) específico en el que esté interesado.",
        "type": "normal"
      },
      {
        "text": "P.K.M TCG",
        "type": "title"
      },
      {
        "text": "Charizard de la colección básica: el icónico dragón que escupe fuego es un artículo imprescindible para cualquier coleccionista de P.K.M.\nIlustrador de P.i.k.a.c.h.u: esta rara carta promocional es muy buscada y puede ser bastante cara.\nBlastoise de la colección básica: otro clásico de P.K.M., Blastoise es una opción popular para los coleccionistas.\nArte alternativo de Charizard VMAX: Esta impresionante versión de Charizard con arte completo es una incorporación reciente al TCG de P.K.M y se ha convertido rápidamente en una de las favoritas de los coleccionistas.",
        "type": "normal"
      },
      {
        "text": "Yu-Gi-Oh! TCG",
        "type": "title"
      },
      {
        "text": "Dragón Blanco de Ojos Azules: Una carta de monstruo clásica que ha sido un elemento básico del TCG de Yu-Gi-Oh! TCG desde sus inicios.\nMago Oscuro: Otra carta de monstruo icónica que es muy coleccionable.\nChica Maga Negra: Una carta de monstruo femenina popular que a menudo se combina con Mago Oscuro.\nSlifer el Dragón del Cielo: Una de las Cartas de Dios Egipcio y una carta de monstruo poderosa.",
        "type": "normal"
      },
      {
        "text": "Magic: The Gathering",
        "type": "title"
      },
      {
        "text": "Loto Negro: Una carta de artefacto poderosa que produce maná y es una de las cartas más caras del juego.\nRecuerdo Ancestral: Una carta poderosa que te permite robar tres cartas.\nTimetwister: Una carta poderosa que baraja tu biblioteca y las bibliotecas de tus oponentes.\nÁngel Serra: Una carta de criatura poderosa que puede volar y regenerarse.",
        "type": "normal"
      },
      {
        "text": "Otros TCG notables",
        "type": "title"
      },
      {
        "text": "Dragon Ball Super TCG: Son Goku, Vegeta y otros personajes populares de la franquicia Dragon Ball.\nYu-Gi-Oh! GX: Elemental Heroes, Destiny Heroes y otros arquetipos populares.P.K.M GO TCG: Cartas basadas en el popular juego para dispositivos móviles P.K.M GO.",
        "type": "normal"
      },
      {
        "text": "Recuerda: cuando comiences una colección, céntrate en las cartas que te gusten y que se ajusten a tu presupuesto. No te sientas presionado a comprar las cartas más caras. La alegría de coleccionar suele estar en encontrar y apreciar cartas que tengan un significado personal.",
        "type": "normal"
      }
    ]
  }
]

const nl_tips = [
  {
    "image": require("../assets/tips/tip1.jpg"),
    "title": "Hoe herken je een TCG-kaart",
    "contents": [
      {
        "text": "TCG staat voor Trading Card Game. Deze spellen bevatten vaak verzamelkaarten met unieke personages, vaardigheden en artwork. Zo herken je doorgaans een TCG-kaart:",
        "type": "title"
      },
      {
        "text": "1. Kaartconstructie:",
        "type": "title"
      },
      {
        "text": "Papier: TCG-kaarten zijn meestal gemaakt van hoogwaardig karton.\nFolie: Veel kaarten hebben folieaccenten, die glanzend of getextureerd kunnen zijn.\nRanden: De randen van de kaart zijn vaak duidelijk en kunnen variëren, afhankelijk van het spel of de set.",
        "type": "normal"
      },
      {
        "text": "2. Tekst en artwork:",
        "type": "title"
      },
      {
        "text": "Tekst: De kaart bevat tekst die het personage, zijn vaardigheden en speciale regels beschrijft.\nIllustratie: De illustratie op de kaart is vaak gerelateerd aan het personage of het thema van het spel.",
        "type": "normal"
      },
      {
        "text": "3. Spelspecifieke indicatoren:",
        "type": "title"
      },
      {
        "text": "Symbolen: Elk TCG-spel heeft zijn eigen set symbolen die verschillende acties, typen of attributen vertegenwoordigen.\nSetmarkeringen: Veel kaarten hebben een symbool of code die de set aangeeft waaruit ze afkomstig zijn.",
        "type": "normal"
      },
      {
        "text": "4. Zeldzaamheidsmarkeringen:",
        "type": "normal"
      },
      {
        "text": "Symbolen: Sommige kaarten hebben symbolen die hun zeldzaamheid aangeven, zoals common, unusual, rare of ultra-rare.",
        "type": "title"
      },
      {
        "text": "Online bronnen:",
        "type": "title"
      },
      {
        "text": "Als u niet zeker bent over een specifieke kaart, kunt u vaak online informatie vinden via zoekmachines of speciale TCG-forums.\nWebsites zoals TCGplayer of eBay kunnen ook details bieden over kaartensets en zeldzaamheden.",
        "type": "normal"
      }
    ]
  },
  {
    "image": require("../assets/tips/tip2.jpg"),
    "title": "Toptips voor het kopen en verkopen van TCG-kaarten",
    "contents": [
      {
        "text": "Het kopen en verkopen van Trading Card Game (TCG)-kaarten kan een leuke en potentieel winstgevende hobby zijn. Hier zijn enkele toptips om u te helpen navigeren op de markt:",
        "type": "title"
      },
      {
        "text": "\nVoor kopers:",
        "type": "title"
      },
      {
        "text": "1. Onderzoek en onderwijs:",
        "type": "title"
      },
      {
        "text": "Leer de basis: begrijp de spelmechanismen, kaarttypen en zeldzaamheidsniveaus.\nOnderzoek kaartwaarden: gebruik online bronnen zoals TCGplayer, eBay en PriceCharting om kaartprijzen bij te houden.\nIdentificeer legitieme verkopers: wees op uw hoede voor namaakkaarten. Zoek naar gerenommeerde verkopers met positieve feedback.",
        "type": "normal"
      },
      {
        "text": "2. Stel een budget in:",
        "type": "title"
      },
      {
        "text": "Bepaal uw bestedingslimiet: bepaal hoeveel u wilt investeren in kaarten.\nGeef prioriteit aan uw aankopen: richt u op kaarten die passen bij uw verzamelingsdoelen en budget.",
        "type": "normal"
      },
      {
        "text": "3. Controleer de staat van de kaart:",
        "type": "title"
      },
      {
        "text": "Inspecteer op slijtage: let op krassen, deuken, vouwen en verbleking.\nBeoordeel kaarten: als u kaarten met een hoge waarde koopt, overweeg dan om ze professioneel te laten beoordelen.",
        "type": "normal"
      },
      {
        "text": "4. Overweeg om in bulk te kopen:",
        "type": "title"
      },
      {
        "text": "Bespaar geld: kaarten in bulk kopen kan vaak leiden tot kortingen.\nVergroot uw collectie: het is een geweldige manier om uw collectie snel uit te breiden.",
        "type": "normal"
      },
      {
        "text": "5Wees geduldig:",
        "type": "title"
      },
      {
        "text": "Wacht op aanbiedingen: prijzen fluctueren. Wees geduldig en wacht tot er goede aanbiedingen verschijnen.\nVermijd impulsaankopen: koop niet overhaast kaarten die u eigenlijk niet wilt.",
        "type": "normal"
      },
      {
        "text": "\nVoor verkopers:",
        "type": "title"
      },
      {
        "text": "1. Beoordeel uw collectie:",
        "type": "title"
      },
      {
        "text": "Identificeer waardevolle kaarten: bepaal welke kaarten het waard zijn om te verkopen en wat hun geschatte waarde is.\nOrganiseer uw collectie: categoriseer kaarten op set, zeldzaamheid en conditie.",
        "type": "normal"
      },
      {
        "text": "2. Kies een verkoopplatform:",
        "type": "title"
      },
      {
        "text": "Online marktplaatsen: overweeg eBay, TCGplayer en Facebook Marketplace.\nLokale winkels: neem contact op met lokale gamewinkels die kaarten kopen en verkopen.",
        "type": "normal"
      },
      {
        "text": "3. Stel concurrerende prijzen in:",
        "type": "title"
      },
      {
        "text": "Onderzoek marktprijzen: Gebruik online tools om prijzen voor vergelijkbare kaarten te vergelijken.\nOverweeg de staat: Pas de prijzen aan op basis van de staat van de kaart.",
        "type": "normal"
      },
      {
        "text": "4. Maak foto's van hoge kwaliteit:",
        "type": "title"
      },
      {
        "text": "Duidelijk en gedetailleerd: Toon de voorkant, achterkant en eventuele onvolkomenheden van de kaart.\nGebruik goede belichting: Zorg dat de foto's goed belicht zijn.",
        "type": "normal"
      },
      {
        "text": "5. Geef nauwkeurige beschrijvingen:",
        "type": "title"
      },
      {
        "text": "Gedetailleerde staat van de kaart: wees eerlijk over slijtage of schade.\nGeef relevante informatie: vermeld de set, zeldzaamheid en classificatie van de kaart (indien van toepassing).",
        "type": "normal"
      },
      {
        "text": "6. Veilig verpakken en verzenden:",
        "type": "title"
      },
      {
        "text": "Bescherm kaarten: gebruik geschikte verpakking om schade tijdens verzending te voorkomen.\nOverweeg een verzekering: sluit een verzekering af voor waardevolle kaarten om te beschermen tegen verlies of schade.",
        "type": "normal"
      },
      {
        "text": "\nDoor deze tips te volgen, kunt u uw TCG-koop- en verkoopervaring verbeteren en weloverwogen beslissingen nemen.",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/tips/tip3.jpg"),
    "title": "Hoe u valse TCG-kaarten kunt herkennen",
    "contents": [
      {
        "text": "Het detecteren van valse ruilkaarten kan lastig zijn, maar met een scherp oog en wat kennis kunt u het risico op het kopen van namaakartikelen aanzienlijk verkleinen. Hier zijn enkele belangrijke factoren om op te letten:\n",
        "type": "normal"
      },
      {
        "text": "Visuele inspectie:",
        "type": "title"
      },
      {
        "text": "Kwaliteit van het karton: Echte kaarten hebben vaak een dikker, duurzamer karton. Valse kaarten kunnen dunner of slapper aanvoelen.\nAfdrukkwaliteit: Let op de scherpte van de afbeeldingen, de helderheid van de tekst en de algehele afdrukkwaliteit. Valse kaarten kunnen wazige of vervormde elementen bevatten.\nHolografische effecten: Als de kaart holografische elementen bevat, bekijk deze dan nauwkeurig. Echte holografische effecten moeten levendig, consistent zijn en een bepaalde diepte. Valse hologrammen kunnen er plat uitzien of een metaalachtige glans hebben.\nRanden en hoeken: Controleer de randen van de kaart. Echte kaarten hebben doorgaans schone, strakke randen en hoeken. Valse kaarten kunnen ruwe of ongelijke randen hebben.\nSetsymbool en nummer: Controleer of het setsymbool en nummer overeenkomen met de authentieke kaart. Vervalsers kunnen fouten maken of onjuiste informatie gebruiken.",
        "type": "normal"
      },
      {
        "text": "Tekst en typografie:",
        "type": "title"
      },
      {
        "text": "Lettertype en spatie: Vergelijk het lettertype en de spatie van de tekst op uw kaart met authentieke voorbeelden. Valse kaarten kunnen onjuiste lettertypen of inconsistente spaties hebben.\nGrammatica en spelling: Controleer op grammatica- of spellingsfouten. Echte kaarten worden zorgvuldig nagelezen.",
        "type": "normal"
      },
      {
        "text": "Vergelijking met authentieke kaarten:",
        "type": "title"
      },
      {
        "text": "Naast elkaar vergelijken: vergelijk indien mogelijk de vermoedelijke nepkaart met een authentieke kaart van dezelfde set en zeldzaamheid. Let op eventuele verschillen in kleur, textuur of details.\nOnline bronnen: gebruik gerenommeerde online bronnen zoals TCGplayer of de officiële websites van de verzamelkaartbedrijven om uw kaart te vergelijken met authentieke afbeeldingen.",
        "type": "normal"
      },
      {
        "text": "Verkopersreputatie:",
        "type": "title"
      },
      {
        "text": "Betrouwbare bronnen: koop kaarten bij gerenommeerde verkopers of rechtstreeks bij de fabrikant. Koop niet bij onbekende bronnen of verkopers met een geschiedenis van namaakgoederen.",
        "type": "normal"
      },
      {
        "text": "\nOnthoud: hoewel deze richtlijnen u kunnen helpen valse kaarten te herkennen, is het altijd een goed idee om voorzichtig te zijn en uw onderzoek te doen. Als u niet zeker weet of een kaart echt is, raadpleeg dan ervaren verzamelaars of experts op dit gebied.",
        "type": "normal"
      }
    ]
  },
  {
    "image": require("../assets/tips/tip4.jpg"),
    "title": "Top TCG-kaarten die elke nieuwe verzamelaar zou moeten bezitten",
    "contents": [
      {
        "text": "Opmerking: Hoewel deze lijst een goed startpunt is, is het belangrijk om te onthouden dat de beste kaarten voor een nieuwe verzamelaar afhangen van hun persoonlijke voorkeuren en het specifieke ruilkaartspel (TCG) waarin ze geïnteresseerd zijn.",
        "type": "normal"
      },
      {
        "text": "P.K.M TCG",
        "type": "title"
      },
      {
        "text": "Base Set Charizard: De iconische vuurspuwende draak is een must-have voor elke P.K.M-verzamelaar.\nP.i.k.a.c.h.u Illustrator: Deze zeldzame promotionele kaart is zeer gewild en kan behoorlijk duur zijn.\nBase Set Blastoise: Een andere klassieke P.K.M-starter, Blastoise is een populaire keuze voor verzamelaars.\nCharizard VMAX Alt Art: Deze verbluffende full-art versie van Charizard is een recente toevoeging aan de P.K.M TCG en is snel een favoriet geworden onder verzamelaars.",
        "type": "normal"
      },
      {
        "text": "Yu-Gi-Oh! TCG",
        "type": "title"
      },
      {
        "text": "Blue-Eyes White Dragon: Een klassieke monsterkaart die een hoofdbestanddeel is van de Yu-Gi-Oh! TCG sinds het begin.\nDark Magician: Nog een iconische monsterkaart die zeer verzamelbaar is.\nBlack Magician Girl: Een populaire vrouwelijke monsterkaart die vaak wordt gecombineerd met Dark Magician.\nSlifer the Sky Dragon: Een van de Egyptian God Cards en een krachtige monsterkaart.",
        "type": "normal"
      },
      {
        "text": "Magic: The Gathering",
        "type": "title"
      },
      {
        "text": "Black Lotus: Een krachtige manaproducerende artefactkaart die een van de duurste kaarten in het spel is.\nAncestral Recall: Een krachtige kaart waarmee je drie kaarten kunt trekken.\nTimetwister: Een krachtige kaart die je bibliotheek en de bibliotheken van je tegenstanders schudt.\nSerra Angel: Een krachtige wezenkaart die kan vliegen en regenereren.",
        "type": "normal"
      },
      {
        "text": "Andere opmerkelijke TCG's",
        "type": "title"
      },
      {
        "text": "Dragon Ball Super TCG: Son Goku, Vegeta en andere populaire personages uit de Dragon Ball-franchise.\nYu-Gi-Oh! GX: Elemental Heroes, Destiny Heroes en andere populaire archetypen.P.K.M GO TCG: Kaarten gebaseerd op de populaire mobiele game P.K.M GO.",
        "type": "normal"
      },
      {
        "text": "Onthoud: concentreer je bij het starten van een verzameling op kaarten die je leuk vindt en die binnen je budget passen. Voel je niet onder druk gezet om de duurste kaarten te kopen. Het plezier van verzamelen zit vaak in het vinden en waarderen van kaarten die een persoonlijke betekenis hebben.",
        "type": "normal"
      }
    ]
  }
]

const de_tips = [
  {
    "image": require("../assets/tips/tip1.jpg"),
    "title": "So erkennen Sie eine TCG-Karte",
    "contents": [
      {
        "text": "TCG steht für Trading Card Game. Diese Spiele enthalten oft Sammelkarten mit einzigartigen Charakteren, Fähigkeiten und Illustrationen. So erkennen Sie normalerweise eine TCG-Karte:",
        "type": "title"
      },
      {
        "text": "1. Kartenaufbau:",
        "type": "title"
      },
      {
        "text": "Papier: TCG-Karten bestehen normalerweise aus hochwertigem Karton.\nFolie: Viele Karten haben Folienakzente, die glänzend oder strukturiert sein können.\nRänder: Die Ränder der Karte sind oft deutlich erkennbar und können je nach Spiel oder Set variieren.",
        "type": "normal"
      },
      {
        "text": "2. Text und Illustrationen:",
        "type": "title"
      },
      {
        "text": "Text: Die Karte enthält Text, der den Charakter, seine Fähigkeiten und etwaige Sonderregeln.\nGrafik: Die Abbildung auf der Karte bezieht sich häufig auf den Charakter oder das Spielthema.",
        "type": "normal"
      },
      {
        "text": "3. Spielspezifische Indikatoren:",
        "type": "title"
      },
      {
        "text": "Symbole: Jedes TCG-Spiel hat seinen eigenen Satz von Symbolen, die unterschiedliche Aktionen, Typen oder Attribute darstellen.\nSet-Marker: Viele Karten haben ein Symbol oder einen Code, der das Set angibt, aus dem sie stammen.",
        "type": "normal"
      },
      {
        "text": "4. Seltenheitsmarkierungen:",
        "type": "normal"
      },
      {
        "text": "Symbole: Manche Karten haben Symbole, die ihre Seltenheit angeben, z. B. gewöhnlich, ungewöhnlich, selten oder extrem selten.",
        "type": "title"
      },
      {
        "text": "Online-Ressourcen:",
        "type": "title"
      },
      {
        "text": "Wenn Sie sich bei einer bestimmten Karte nicht sicher sind, können Sie häufig Informationen online mithilfe von Suchmaschinen oder speziellen TCG-Foren finden.\nWebsites wie TCGplayer oder eBay können auch Details zu Kartensets und Seltenheitsgraden bereitstellen.",
        "type": "normal"
      }
    ]
  },
  {
    "image": require("../assets/tips/tip2.jpg"),
    "title": "Top-Tipps zum Kaufen und Verkaufen von TCG-Karten",
    "contents": [
      {
        "text": "Der Kauf und Verkauf von TCG-Karten (Trading Card Game) kann ein unterhaltsames und potenziell lukratives Hobby sein. Hier sind einige Top-Tipps, die Ihnen helfen, sich auf dem Markt zurechtzufinden:",
        "type": "title"
      },
      {
        "text": "\nFür Käufer:",
        "type": "title"
      },
      {
        "text": "1. Recherche und Bildung:",
        "type": "title"
      },
      {
        "text": "Lernen Sie die Grundlagen: Verstehen Sie die Spielmechanik, Kartentypen und Seltenheitsstufen.\nRecherchieren Sie Kartenwerte: Nutzen Sie Online-Ressourcen wie TCGplayer, eBay und PriceCharting, um Kartenpreise zu verfolgen.\nIdentifizieren Sie seriöse Verkäufer: Seien Sie vorsichtig bei gefälschten Karten. Suchen Sie nach seriösen Verkäufern mit positivem Feedback.",
        "type": "normal"
      },
      {
        "text": "2. Legen Sie ein Budget fest:",
        "type": "title"
      },
      {
        "text": "Legen Sie Ihr Ausgabenlimit fest: Entscheiden Sie, wie viel Sie in Karten investieren möchten.\nPriorisieren Sie Ihre Einkäufe: Konzentrieren Sie sich auf Karten, die zu Ihren Sammelzielen und Ihrem Budget passen.",
        "type": "normal"
      },
      {
        "text": "3. Überprüfen Sie den Zustand der Karte:",
        "type": "title"
      },
      {
        "text": "Überprüfen Sie auf Abnutzung: Achten Sie auf Kratzer, Dellen, Knicke und Weißfärbungen.\nBewerten Sie die Karten: Wenn Sie hochwertige Karten kaufen, sollten Sie eine professionelle Bewertung in Betracht ziehen.",
        "type": "normal"
      },
      {
        "text": "4. Erwägen Sie den Kauf in großen Mengen:",
        "type": "title"
      },
      {
        "text": "Sparen Sie Geld: Der Kauf in großen Mengen von Karten kann oft zu Rabatten führen.\nErweitern Sie Ihre Sammlung: Dies ist eine großartige Möglichkeit, Ihre Sammlung schnell zu erweitern.",
        "type": "normal"
      },
      {
        "text": "5Seien Sie geduldig:",
        "type": "title"
      },
      {
        "text": "Warten Sie auf Angebote: Die Preise schwanken. Seien Sie geduldig und warten Sie, bis gute Angebote auftauchen.\nVermeiden Sie Impulskäufe: Kaufen Sie nicht überstürzt Karten, die Sie nicht wirklich wollen.",
        "type": "normal"
      },
      {
        "text": "\nFür Verkäufer:",
        "type": "title"
      },
      {
        "text": "1. Bewerten Sie Ihre Sammlung:",
        "type": "title"
      },
      {
        "text": "Wertvolle Karten identifizieren: Bestimmen Sie, welche Karten sich zu verkaufen lohnen und welchen ungefähren Wert sie haben.\nSammlung organisieren: Karten nach Set, Seltenheit und Zustand kategorisieren.",
        "type": "normal"
      },
      {
        "text": "2. Wählen Sie eine Verkaufsplattform:",
        "type": "title"
      },
      {
        "text": "Online-Marktplätze: Erwägen Sie eBay, TCGplayer und Facebook Marketplace.\nLokale Geschäfte: Erkundigen Sie sich bei lokalen Spieleläden, die Karten kaufen und verkaufen.",
        "type": "normal"
      },
      {
        "text": "3. Wettbewerbsfähige Preise festlegen:",
        "type": "title"
      },
      {
        "text": "Marktpreise recherchieren: Verwenden Sie Online-Tools, um Preise für ähnliche Karten zu vergleichen.\nZustand berücksichtigen: Passen Sie die Preise basierend auf dem Zustand der Karte an.",
        "type": "normal"
      },
      {
        "text": "4. Machen Sie qualitativ hochwertige Fotos:",
        "type": "title"
      },
      {
        "text": "Klar und detailliert: Zeigen Sie die Vorder- und Rückseite der Karte sowie alle Mängel.\nVerwenden Sie eine gute Beleuchtung: Stellen Sie sicher, dass die Fotos gut beleuchtet sind.",
        "type": "normal"
      },
      {
        "text": "5. Geben Sie genaue Beschreibungen an:",
        "type": "title"
      },
      {
        "text": "Geben Sie den Zustand der Karte im Detail an: Seien Sie ehrlich, was Abnutzung oder Beschädigungen angeht.\nGeben Sie relevante Informationen an: Erwähnen Sie das Set, die Seltenheit und die Bewertung der Karte (falls zutreffend).",
        "type": "normal"
      },
      {
        "text": "6. Sicher verpacken und versenden:",
        "type": "title"
      },
      {
        "text": "Karten schützen: Verwenden Sie eine geeignete Verpackung, um Schäden während des Versands zu vermeiden.\nVersicherung in Betracht ziehen: Schließen Sie eine Versicherung für hochwertige Karten ab, um sie vor Verlust oder Beschädigung zu schützen.",
        "type": "normal"
      },
      {
        "text": "\nWenn Sie diese Tipps befolgen, können Sie Ihr Kauf- und Verkaufserlebnis für Sammelkarten verbessern und fundierte Entscheidungen treffen.",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/tips/tip3.jpg"),
    "title": "So erkennen Sie gefälschte Sammelkarten",
    "contents": [
      {
        "text": "Das Erkennen gefälschter Sammelkarten kann schwierig sein, aber mit einem scharfen Auge und etwas Wissen können Sie das Risiko, gefälschte Artikel zu kaufen, erheblich verringern. Hier sind einige wichtige Faktoren, auf die Sie achten sollten:\n",
        "type": "normal"
      },
      {
        "text": "Sichtprüfung:",
        "type": "title"
      },
      {
        "text": "Kartenqualität: Echte Karten haben oft einen dickeren, haltbareren Kartenkarton. Gefälschte Karten können sich dünner oder wackeliger anfühlen.\nDruckqualität: Achten Sie auf die Schärfe der Bilder, die Klarheit des Textes und die allgemeine Druckqualität. Gefälschte Karten können verschwommene oder verzerrte Elemente aufweisen.\nHolografische Effekte: Wenn die Karte holografische Elemente aufweist, untersuchen Sie diese genau. Echte holografische Effekte sollten lebendig und konsistent sein und eine gewisse Tiefe aufweisen. Gefälschte Hologramme können erscheinen flach oder haben einen metallischen Glanz.\nRänder und Ecken: Überprüfen Sie die Kanten der Karte. Echte Karten haben normalerweise saubere, scharfe Ränder und Ecken. Gefälschte Karten können raue oder ungleichmäßige Kanten haben.\nSet-Symbol und Nummer: Überprüfen Sie, ob das Set-Symbol und die Nummer mit der echten Karte übereinstimmen. Fälscher können Fehler machen oder falsche Informationen verwenden.",
        "type": "normal"
      },
      {
        "text": "Text und Typografie:",
        "type": "title"
      },
      {
        "text": "Schriftart und Abstand: Vergleichen Sie die Schriftart und den Abstand des Textes auf Ihrer Karte mit echten Beispielen. Gefälschte Karten können falsche Schriftarten oder inkonsistente Abstände aufweisen.\nGrammatik und Rechtschreibung: Überprüfen Sie, ob Grammatik- oder Rechtschreibfehler vorliegen. Echte Karten werden sorgfältig Korrektur gelesen.",
        "type": "normal"
      },
      {
        "text": "Vergleich mit echten Karten:",
        "type": "title"
      },
      {
        "text": "Nebeneinander-Vergleich: Vergleichen Sie die mutmaßlich gefälschte Karte nach Möglichkeit mit einer echten Karte desselben Sets und derselben Seltenheit. Achten Sie auf Abweichungen in Farbe, Textur oder Details.\nOnline-Ressourcen: Verwenden Sie seriöse Online-Ressourcen wie TCGplayer oder die offiziellen Websites der Sammelkartenunternehmen, um Ihre Karte mit authentischen Bildern zu vergleichen.",
        "type": "normal"
      },
      {
        "text": "Verkäufer-Reputation:",
        "type": "title"
      },
      {
        "text": "Vertrauenswürdige Quellen: Kaufen Sie Karten von seriösen Verkäufern oder direkt vom Hersteller. Vermeiden Sie den Kauf aus unbekannten Quellen oder von Verkäufern, die in der Vergangenheit gefälschte Waren verkauft haben.",
        "type": "normal"
      },
      {
        "text": "\nDenken Sie daran: Diese Richtlinien können Ihnen zwar dabei helfen, gefälschte Karten zu erkennen, es ist jedoch immer eine gute Idee, vorsichtig zu sein und Nachforschungen anzustellen. Wenn Sie sich über die Echtheit einer Karte nicht sicher sind, wenden Sie sich an erfahrene Sammler oder Experten auf diesem Gebiet.",
        "type": "normal"
      }
    ]
  },
  {
    "image": require("../assets/tips/tip4.jpg"),
    "title": "Top-TCG-Karten, die jeder neue Sammler besitzen sollte",
    "contents": [
      {
        "text": "Hinweis: Diese Liste ist zwar ein guter Ausgangspunkt, es ist jedoch wichtig zu bedenken, dass die besten Karten für einen neuen Sammler von seinen persönlichen Vorlieben und dem spezifischen Sammelkartenspiel (TCG) abhängen, an dem er interessiert ist.",
        "type": "normal"
      },
      {
        "text": "P.K.M TCG",
        "type": "title"
      },
      {
        "text": "Basisset Charizard: Der ikonische feuerspeiende Drache ist ein Muss für jeden P.K.M-Sammler.\nP.i.k.a.c.h.u Illustrator: Diese seltene Werbekarte ist sehr begehrt und kann ziemlich teuer sein.\nBasisset Blastoise: Blastoise, ein weiteres klassisches Starter-P.K.M, ist eine beliebte Wahl für Sammler.\nCharizard VMAX Alt Art: Dieses atemberaubende Full-Art Version von Charizard ist eine neue Ergänzung zum P.K.M TCG und ist schnell zu einem Liebling der Sammler geworden.",
        "type": "normal"
      },
      {
        "text": "Yu-Gi-Oh! TCG",
        "type": "title"
      },
      {
        "text": "Blauäugiger weißer Drache: Eine klassische Monsterkarte, die ein fester Bestandteil des Yu-Gi-Oh! war. TCG seit seiner Einführung.\nDark Magician: Eine weitere kultige Monsterkarte, die sehr sammelwürdig ist.\nBlack Magician Girl: Eine beliebte weibliche Monsterkarte, die oft mit Dark Magician gepaart wird.\nSlifer the Sky Dragon: Eine der ägyptischen Götterkarten und eine mächtige Monsterkarte.",
        "type": "normal"
      },
      {
        "text": "Magic: The Gathering",
        "type": "title"
      },
      {
        "text": "Black Lotus: Eine mächtige Mana produzierende Artefaktkarte, die eine der teuersten Karten im Spiel ist.\nAncestral Recall: Eine mächtige Karte, mit der Sie drei Karten ziehen können.\nTimetwister: Eine mächtige Karte, die Ihre Bibliothek und die Bibliotheken Ihrer Gegner mischt.\nSerra Angel: Eine mächtige Kreaturenkarte, die fliegen und regenerieren kann.",
        "type": "normal"
      },
      {
        "text": "Andere bemerkenswerte TCGs",
        "type": "title"
      },
      {
        "text": "Dragon Ball Super TCG: Son Goku, Vegeta und andere beliebte Charaktere aus der Dragon Ball-Reihe.\nYu-Gi-Oh! GX: Elemental Heroes, Destiny Heroes und andere beliebte Archetypen.P.K.M GO TCG: Karten basierend auf dem beliebten Handyspiel P.K.M GO.",
        "type": "normal"
      },
      {
        "text": "Denken Sie daran: Wenn Sie eine Sammlung beginnen, konzentrieren Sie sich auf Karten, die Ihnen Spaß machen und in Ihr Budget passen. Fühlen Sie sich nicht unter Druck gesetzt, die teuersten Karten zu kaufen. Der Spaß am Sammeln liegt oft darin, Karten zu finden und zu schätzen, die eine persönliche Bedeutung haben.",
        "type": "normal"
      }
    ]
  }
]

const tips = [
  {
    "image": require("../assets/tips/tip1.jpg"),
    "title": "How To Identify A Stamp",
    "contents": [
      {
        "text": "How to Identify a Stamp",
        "type": "title"
      },
      {
        "text": "Identifying a postage stamp is a fun and educational process that helps you learn about its origin, value, and history. Here’s a step-by-step guide to help you get started.",
        "type": "normal"
      },
      {
        "text": "1. Check the Country Name",
        "type": "title"
      },
      {
        "text": "Most stamps have the issuing country’s name printed on them. Look closely at the top or bottom of the stamp. Older British stamps may not have a country name but feature the monarch’s portrait instead.",
        "type": "normal"
      },
      {
        "text": "2. Identify the Denomination",
        "type": "title"
      },
      {
        "text": "The denomination shows the face value of the stamp and is usually indicated with a number and a currency symbol, like 1¢, £2, or €0.50. This can give clues about the stamp’s time period and usage.",
        "type": "normal"
      },
      {
        "text": "3. Observe the Design",
        "type": "title"
      },
      {
        "text": "Stamps often feature national symbols, famous people, historical events, animals, or cultural items. These visuals can help you determine the origin and purpose of the stamp.",
        "type": "normal"
      },
      {
        "text": "4. Examine the Perforations",
        "type": "title"
      },
      {
        "text": "Perforations are the small holes around the stamp’s edges. They help separate stamps from each other. Measuring the number of holes per 2 centimeters can help distinguish between similar-looking stamps.",
        "type": "normal"
      },
      {
        "text": "5. Analyze the Printing Method",
        "type": "title"
      },
      {
        "text": "Use a magnifying glass to inspect the printing technique. Engraved stamps have fine raised lines, while lithographed or photogravure stamps have flat or dot-like patterns.",
        "type": "normal"
      },
      {
        "text": "6. Look for Watermarks",
        "type": "title"
      },
      {
        "text": "Some stamps have watermarks embedded in the paper. Hold the stamp up to the light or use watermark fluid to reveal hidden patterns that help identify the issue.",
        "type": "normal"
      },
      {
        "text": "7. Use Catalogs or Apps",
        "type": "title"
      },
      {
        "text": "Use reference catalogs like Scott, Stanley Gibbons, or Michel to look up stamps by country and year. You can also use mobile apps to scan and identify stamps with image recognition.",
        "type": "normal"
      },
      {
        "text": "8. Compare with Online Databases",
        "type": "title"
      },
      {
        "text": "Websites like Colnect, StampWorld, and FindYourStampsValue.com offer vast collections of stamp images and information to help with identification.",
        "type": "normal"
      },
      {
        "text": "9. Evaluate the Stamp’s Condition",
        "type": "title"
      },
      {
        "text": "Condition affects a stamp’s identity and value. Check for gum on the back, whether it’s mint or used, centering, and signs of damage like tears or fading.",
        "type": "normal"
      },
      {
        "text": "10. Ask for Help from the Community",
        "type": "title"
      },
      {
        "text": "Join online stamp collector groups or forums and share your stamp image. Experienced collectors are often willing to help with tough identifications.",
        "type": "normal"
      },
      {
        "text": "❝ Always handle stamps with care using tweezers and store them in albums to preserve their condition.",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/tips/tip2.jpg"),
    "title": "Top Tips to Buying and Selling Stamps",
    "contents": [
      {
        "text": "Top Tips for Buying and Selling Stamps",
        "type": "title"
      },
      {
        "text": "Whether you're a beginner or experienced philatelist, buying and selling stamps requires research, patience, and a good eye. Here are the top tips to help you succeed in the stamp market.",
        "type": "normal"
      },
      {
        "text": "1. Know What You’re Looking For",
        "type": "title"
      },
      {
        "text": "Before buying, define your interests—do you collect by country, theme, time period, or rarity? Having a clear focus helps avoid unnecessary purchases and builds a more valuable collection.",
        "type": "normal"
      },
      {
        "text": "2. Buy from Reputable Sources",
        "type": "title"
      },
      {
        "text": "Use trusted dealers, well-known auction houses, or verified online marketplaces. Be cautious with unfamiliar sellers or extremely low prices—they could be fakes or damaged stamps.",
        "type": "normal"
      },
      {
        "text": "3. Verify Authenticity",
        "type": "title"
      },
      {
        "text": "Rare stamps are often forged. Check watermarks, perforations, print type, and consult catalog numbers. For high-value stamps, consider getting a certificate of authenticity from a recognized expert.",
        "type": "normal"
      },
      {
        "text": "4. Inspect Condition Carefully",
        "type": "title"
      },
      {
        "text": "Mint condition, well-centered stamps with no tears or stains are more valuable. Always request clear images or inspect in person before buying.",
        "type": "normal"
      },
      {
        "text": "5. Use a Stamp Catalogue",
        "type": "title"
      },
      {
        "text": "Reference guides like Scott, Stanley Gibbons, or Michel help you identify stamps, check market values, and avoid overpaying or underselling.",
        "type": "normal"
      },
      {
        "text": "6. Sell Through the Right Channel",
        "type": "title"
      },
      {
        "text": "Selling rare stamps? Use auction houses or high-end collectors. For common stamps, online platforms like eBay or Delcampe are effective. Tailor the selling channel to the stamp's value.",
        "type": "normal"
      },
      {
        "text": "7. Provide Detailed Descriptions",
        "type": "title"
      },
      {
        "text": "When selling, include year, condition, catalog number, watermark info, and high-resolution photos. The more details, the more trust you’ll build with buyers.",
        "type": "normal"
      },
      {
        "text": "8. Be Honest About Condition",
        "type": "title"
      },
      {
        "text": "If a stamp is hinged, has a crease, or missing gum, disclose it. Misleading listings may result in returns, bad reviews, or disputes.",
        "type": "normal"
      },
      {
        "text": "9. Protect Your Stamps",
        "type": "title"
      },
      {
        "text": "Use stamp mounts, glassine envelopes, and archival-safe storage to prevent damage before selling. Presentation adds perceived value.",
        "type": "normal"
      },
      {
        "text": "10. Stay Updated with Market Trends",
        "type": "title"
      },
      {
        "text": "Stamp values fluctuate. Watch auction results, forums, and market news to know when to buy or sell specific stamps for the best return.",
        "type": "normal"
      },
      {
        "text": "❝ A well-informed collector makes smarter buying and selling decisions. Take your time and enjoy the process!",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/tips/tip3.jpg"),
    "title": "How To Spot Fake Stamp",
    "contents": [
      {
        "text": "How to Spot Fake Stamps",
        "type": "title"
      },
      {
        "text": "The world of stamp collecting is full of rare treasures, but also includes counterfeits and reproductions. Here are the key tips to help you detect fake stamps and protect your collection.",
        "type": "normal"
      },
      {
        "text": "1. Compare with a Verified Original",
        "type": "title"
      },
      {
        "text": "If you suspect a stamp might be fake, compare it closely to an image of a genuine stamp from a trusted catalog or website. Look for differences in color, size, paper, and design details.",
        "type": "normal"
      },
      {
        "text": "2. Check the Printing Method",
        "type": "title"
      },
      {
        "text": "Use a magnifying glass to examine the print. Genuine engraved stamps often have fine, raised lines. Fake ones may show blurry or flat printing done by inkjet or laser printers.",
        "type": "normal"
      },
      {
        "text": "3. Inspect the Perforations",
        "type": "title"
      },
      {
        "text": "Perforation size and shape should match known originals. Inconsistent, uneven, or handmade perforations are a red flag for tampering or forgery.",
        "type": "normal"
      },
      {
        "text": "4. Look for Watermarks",
        "type": "title"
      },
      {
        "text": "Many real stamps contain a watermark embedded in the paper. Use watermark fluid or hold the stamp against light. If the watermark is missing or incorrect, the stamp may be fake.",
        "type": "normal"
      },
      {
        "text": "5. Verify the Paper and Gum",
        "type": "title"
      },
      {
        "text": "Older stamps were printed on specific types of paper. Modern paper or shiny gum on old stamps may indicate forgery or regumming. Use reference books to check authenticity.",
        "type": "normal"
      },
      {
        "text": "6. Be Wary of Cancel Marks",
        "type": "title"
      },
      {
        "text": "Fake cancels are sometimes added to increase value. Look for unnatural ink, inconsistent placement, or cancel types that don’t match the stamp’s origin or era.",
        "type": "normal"
      },
      {
        "text": "7. Use a UV Light or Expert Tool",
        "type": "title"
      },
      {
        "text": "Some fakes use modern ink or paper that fluoresces under ultraviolet light. Genuine stamps usually do not glow unless originally printed with tagging.",
        "type": "normal"
      },
      {
        "text": "8. Get a Certificate of Authenticity",
        "type": "title"
      },
      {
        "text": "For high-value stamps, consult professional philatelic experts or services that can certify authenticity. This protects your investment and adds buyer confidence.",
        "type": "normal"
      },
      {
        "text": "9. Beware of Too-Good-to-Be-True Deals",
        "type": "title"
      },
      {
        "text": "If a rare stamp is offered at an unusually low price, be skeptical. Scammers often rely on inexperience and urgency to pass off fakes.",
        "type": "normal"
      },
      {
        "text": "10. Educate Yourself",
        "type": "title"
      },
      {
        "text": "Study philatelic literature, auction records, and join collector communities. The more you know about genuine stamps, the easier it becomes to spot counterfeits.",
        "type": "normal"
      },
      {
        "text": "❝ Always buy from trusted sources and take your time to verify stamps before adding them to your collection.",
        "type": "title"
      }
    ]
  },
  {
    "image": require("../assets/tips/tip4.jpg"),
    "title": "Top Stamps Every New Collector Should Own",
    "contents": [
      {
        "text": "Top Stamps Every New Collector Should Own",
        "type": "title"
      },
      {
        "text": "Starting a stamp collection can be both exciting and overwhelming. To help new collectors build a strong foundation, here’s a list of iconic and accessible stamps that are historically significant, visually appealing, and great conversation starters.",
        "type": "normal"
      },
      {
        "text": "1. Penny Black (1840, United Kingdom)",
        "type": "title"
      },
      {
        "text": "The world’s first adhesive postage stamp featuring Queen Victoria. While originals are rare and expensive, reprints and used copies are more affordable and still iconic.",
        "type": "normal"
      },
      {
        "text": "2. Inverted Jenny (1918, United States – Reproduction)",
        "type": "title"
      },
      {
        "text": "The original is one of the most famous errors in philately, showing an upside-down airplane. Reproductions are widely available and make a fun piece for beginners.",
        "type": "normal"
      },
      {
        "text": "3. 3¢ George Washington (1930s–1950s, United States)",
        "type": "title"
      },
      {
        "text": "A classic U.S. definitive stamp printed in large quantities. It’s affordable and represents a key period in American postal history.",
        "type": "normal"
      },
      {
        "text": "4. Canada’s Bluenose (1929)",
        "type": "title"
      },
      {
        "text": "Often called one of the most beautiful stamps ever issued, it features the Bluenose schooner and is a must-have for its artistry and significance.",
        "type": "normal"
      },
      {
        "text": "5. German Inflation Stamps (1920s)",
        "type": "title"
      },
      {
        "text": "Issued during Germany’s hyperinflation era, these stamps with high denominations tell a powerful economic story and are usually inexpensive.",
        "type": "normal"
      },
      {
        "text": "6. USSR Space Themed Stamps (1960s)",
        "type": "title"
      },
      {
        "text": "Soviet stamps from the space race era are colorful, well-designed, and capture a key moment in global history. They're also easy to find.",
        "type": "normal"
      },
      {
        "text": "7. Japanese Cherry Blossom or Mount Fuji Stamps",
        "type": "title"
      },
      {
        "text": "Japan is known for beautiful, minimalist stamp design. Collecting Japanese nature or seasonal themes is both relaxing and rewarding.",
        "type": "normal"
      },
      {
        "text": "8. Wildlife or World Heritage Series (various countries)",
        "type": "title"
      },
      {
        "text": "Many postal authorities issue wildlife, bird, or heritage-themed stamps. These are vibrant, educational, and usually affordable.",
        "type": "normal"
      },
      {
        "text": "9. Stamps from Your Own Country",
        "type": "title"
      },
      {
        "text": "Start local! Building a complete set from your country is rewarding and helps you understand your own postal history.",
        "type": "normal"
      },
      {
        "text": "10. A Stamp With Personal Meaning",
        "type": "title"
      },
      {
        "text": "Whether it features your birth year, favorite animal, or a theme you love—personal stamps add sentimental value to any collection.",
        "type": "normal"
      },
      {
        "text": "❝ Every great collection starts with a few stamps that spark curiosity. Begin with meaning, then build with knowledge.",
        "type": "title"
      }
    ]
  }
]

export async function getTips() {
  var lang = await AsyncStorage.getItem('language');
  if (lang == 'ja') return ja_tips;
  if (lang == 'vi') return vi_tips;
  if (lang == 'es') return es_tips;
  if (lang == 'pt') return pt_tips;
  if (lang == 'de') return de_tips;
  if (lang == 'nl') return nl_tips;
  if (lang == 'hi') return hi_tips;
  if (lang == 'it') return it_tips;
  return tips;
}

export async function getDiscovery() {
  var lang = await AsyncStorage.getItem('language');
  if (lang == 'ja') return ja_discovery;
  if (lang == 'vi') return vi_discovery;
  if (lang == 'es') return es_discovery;
  if (lang == 'pt') return pt_discovery;
  if (lang == 'de') return de_discovery;
  if (lang == 'nl') return nl_discovery;
  if (lang == 'hi') return hi_discovery;
  if (lang == 'it') return it_discovery;
  return discovery;
}