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
  return tips;
}

export async function getDiscovery() {
  return discovery;
}

export function getArticles() {
  return [...tips, ...discovery];
}