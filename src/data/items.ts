/**
 * Relic and misc item names, generated from Charlie Murder's own localization
 * (CharlieText resources) and the order of RelicMgr.relicDesc /
 * MiscItemCatalog.itemDef in the game code. Index = id stored in game.sav.
 */
import type { Locale } from "../i18n";

export interface ItemText {
  name: string;
  effect: string;
}

export const ITEM_TEXT: Record<Locale, { relics: ItemText[]; misc: ItemText[] }> = {
  "en": {
    "relics": [
      {
        "name": "Kitty Chain",
        "effect": "+5% Move Speed · -1% Attack"
      },
      {
        "name": "Ivory Skull",
        "effect": "+10% Attack · -1% Defense"
      },
      {
        "name": "Jeweled Cross",
        "effect": "+10% Defense · -1% Cash Get"
      },
      {
        "name": "Mithril Bottle Opener",
        "effect": "+10% Food Power"
      },
      {
        "name": "Cobalt Drum Key",
        "effect": "+15% Anar-chi · -1% Attack"
      },
      {
        "name": "Stress Cube",
        "effect": "+10% Attack · -1% Anar-chi"
      },
      {
        "name": "Silver Bottlecap",
        "effect": "+5% Cash Get"
      },
      {
        "name": "Sapphire Car",
        "effect": "+5% Move Speed · -1% Defense"
      },
      {
        "name": "Rusty Key",
        "effect": "+25% Loot Find · -1% Attack"
      },
      {
        "name": "Rabbit's Foot",
        "effect": "+25% Rare Loot"
      },
      {
        "name": "Smockula's Tooth",
        "effect": "+5% Leech"
      },
      {
        "name": "Moonstone Claw",
        "effect": "+5% Wound · -1% Attack"
      },
      {
        "name": "Spark Plug",
        "effect": "+15% Anar-chi · -1% Defense"
      },
      {
        "name": "Safety Pin",
        "effect": "+10% Attack · -1% Anar-chi"
      },
      {
        "name": "Jasper Cross",
        "effect": "+10% Defense · -1% Move Speed"
      },
      {
        "name": "Smockula's Eye",
        "effect": "+25% Rare Loot"
      },
      {
        "name": "Toy Microscope",
        "effect": "+50% Rare Loot · -1% Attack"
      },
      {
        "name": "Smockula's Heart",
        "effect": "+5 Regen"
      },
      {
        "name": "Heart of Soul",
        "effect": "+5 Regen"
      },
      {
        "name": "Emerald Mug",
        "effect": "+5% Move Speed · -1% Defense"
      },
      {
        "name": "Crystal Syringe",
        "effect": "Poison Grab"
      },
      {
        "name": "Dish Plush",
        "effect": "+50% Rare Loot"
      },
      {
        "name": "Car Battery",
        "effect": "Shocking Throw"
      },
      {
        "name": "Xbox360 Controller",
        "effect": "+50% Loot Find"
      },
      {
        "name": "Mookite Pick",
        "effect": "+5% Move Speed"
      },
      {
        "name": "Epic Mix Tape",
        "effect": "+5% Crits"
      },
      {
        "name": "Super Goo",
        "effect": "+5% Jump"
      },
      {
        "name": "Iron Lighter",
        "effect": "Fire Bullets"
      },
      {
        "name": "Opal Monocle",
        "effect": "+25% Loot Find"
      },
      {
        "name": "Spoonfork",
        "effect": "+10% Food Power"
      },
      {
        "name": "Spider Ring",
        "effect": "+5% Jump"
      },
      {
        "name": "Tattoo Coupon",
        "effect": "1 free tattoo!"
      },
      {
        "name": "Blessed Toothbrush",
        "effect": "Resist Acid"
      },
      {
        "name": "Dirty Bandage",
        "effect": "Resist Bleeding"
      },
      {
        "name": "Mithril Cog",
        "effect": "Sturdy Weapons"
      },
      {
        "name": "Solid Rainbow",
        "effect": "Rainbow Power"
      },
      {
        "name": "Smockula's Brain",
        "effect": "+50% Anar-chi"
      },
      {
        "name": "Smockula's Liver",
        "effect": "No Drunkenness"
      },
      {
        "name": "Ancient Ice Pack",
        "effect": "+5% Cooldown"
      },
      {
        "name": "Silver Hammer",
        "effect": "Can break down and store props."
      },
      {
        "name": "Build Failed",
        "effect": "Glitch like a boss."
      },
      {
        "name": "Anarchy Pin",
        "effect": "+5% Bludgeon Damage"
      },
      {
        "name": "\"The Cause\"",
        "effect": "+5% Cooldown"
      },
      {
        "name": "Robot Button",
        "effect": "-2 to teamup combo requirement."
      },
      {
        "name": "Trash Pin",
        "effect": "Use any weapon to destroy barricades."
      },
      {
        "name": "Star Button",
        "effect": "+25% overdrive charge."
      },
      {
        "name": "3.5\" Floppy",
        "effect": "+15% overdrive charge."
      },
      {
        "name": "Creepy Doll",
        "effect": "10% Curse chance on crit."
      },
      {
        "name": "Haunted Tape",
        "effect": "Increase lock on range."
      },
      {
        "name": "Golden Ticket",
        "effect": "Gain entry to movie theatre."
      },
      {
        "name": "Corruption Orb",
        "effect": "Add acid to thrown weapons."
      },
      {
        "name": "Magnifying Glass",
        "effect": "Camera highlights clickable spots."
      },
      {
        "name": "Pestilence Vial",
        "effect": "Spread end times diseases."
      },
      {
        "name": "Diamond Scale",
        "effect": "Breathe underwater."
      },
      {
        "name": "Bag of Oregano",
        "effect": "Protection from vampires."
      }
    ],
    "misc": [
      {
        "name": "Prop",
        "effect": "Can be placed"
      },
      {
        "name": "Aged Malt",
        "effect": "Germinated grains"
      },
      {
        "name": "Gold Barley",
        "effect": "Fermentable cereal"
      },
      {
        "name": "Red Wort",
        "effect": "Icky liquid"
      },
      {
        "name": "Ale Yeast",
        "effect": "Eukaryotic microorganism"
      },
      {
        "name": "White Malt",
        "effect": "Germinated grains"
      },
      {
        "name": "Red Barley",
        "effect": "Fermentable cereal"
      },
      {
        "name": "Lager Yeast",
        "effect": "Eukaryotic microorganism"
      },
      {
        "name": "Bitter wort",
        "effect": "Icky liquid"
      },
      {
        "name": "Sweet Wort",
        "effect": "Icky liquid"
      },
      {
        "name": "Rich Wort",
        "effect": "Icky liquid"
      },
      {
        "name": "Blanc'd Dye",
        "effect": "Enwhitens clothing"
      },
      {
        "name": "Enreddening Dye",
        "effect": "Enreddens clothing"
      },
      {
        "name": "Dorange Dye",
        "effect": "Enoranges clothing"
      },
      {
        "name": "Enyellowing Dye",
        "effect": "Enyellows clothing"
      },
      {
        "name": "Dergernen Dye",
        "effect": "Engreens clothing"
      },
      {
        "name": "Bluesephine Dye",
        "effect": "Enbluens clothing"
      },
      {
        "name": "Purplexor Dye",
        "effect": "Enpurples clothing"
      },
      {
        "name": "Enblackening Dye",
        "effect": "Enblackens clothing"
      },
      {
        "name": "Mimic Blood",
        "effect": "Swap stats with equipped clothes"
      },
      {
        "name": "Seed Dye",
        "effect": "Randomly colors clothing"
      },
      {
        "name": "Graden Dye",
        "effect": "Engrayens clothing"
      }
    ]
  },
  "es": {
    "relics": [
      {
        "name": "Cadena de gatito",
        "effect": "+5% Velocidad de movimiento · -1% Ataque"
      },
      {
        "name": "Calavera de marfil",
        "effect": "+10% Ataque · -1% Defensa"
      },
      {
        "name": "Cruz con joyas",
        "effect": "+10% Defensa · -1% Recogepasta"
      },
      {
        "name": "Abrebotellas de mithrilo",
        "effect": "+10% Poder alimenticio"
      },
      {
        "name": "Afinador batería de cobalto",
        "effect": "+15% Anar-ki-a · -1% Ataque"
      },
      {
        "name": "Cubo antiestrés",
        "effect": "+10% Ataque · -1% Anar-ki-a"
      },
      {
        "name": "Tapón de botellas de plata",
        "effect": "+5% Recogepasta"
      },
      {
        "name": "Coche de zafiro",
        "effect": "+5% Velocidad de movimiento · -1% Defensa"
      },
      {
        "name": "Llave oxidada",
        "effect": "+25% Encontrar botín · -1% Ataque"
      },
      {
        "name": "Pata de conejo",
        "effect": "+25% Botín especial"
      },
      {
        "name": "Diente de Smockula",
        "effect": "+5% Absorber"
      },
      {
        "name": "Garra de piedra lunar",
        "effect": "+5% Herida · -1% Ataque"
      },
      {
        "name": "Bujía de moto",
        "effect": "+15% Anar-ki-a · -1% Defensa"
      },
      {
        "name": "Imperdible",
        "effect": "+10% Ataque · -1% Anar-ki-a"
      },
      {
        "name": "Cruz de jaspe",
        "effect": "+10% Defensa · -1% Velocidad de movimiento"
      },
      {
        "name": "Ojo de Smockula",
        "effect": "+25% Botín especial"
      },
      {
        "name": "Microscopio de juguete",
        "effect": "+50% Botín especial · -1% Ataque"
      },
      {
        "name": "Corazón de Smockula",
        "effect": "+5 Regeneración"
      },
      {
        "name": "Corazón del Soul",
        "effect": "+5 Regeneración"
      },
      {
        "name": "Taza esmeralda",
        "effect": "+5% Velocidad de movimiento · -1% Defensa"
      },
      {
        "name": "Jeringuilla de cristal",
        "effect": "Agarre venenoso"
      },
      {
        "name": "Peluches",
        "effect": "+50% Botín especial"
      },
      {
        "name": "Batería de coche",
        "effect": "Lanzamiento de choque"
      },
      {
        "name": "Mando Xbox 360",
        "effect": "+50% Encontrar botín"
      },
      {
        "name": "Púa de Mookite",
        "effect": "+5% Velocidad de movimiento"
      },
      {
        "name": "Cinta con mezcla épica",
        "effect": "+5% Críticos"
      },
      {
        "name": "Superbaba",
        "effect": "+5% Salto"
      },
      {
        "name": "Mechero de hierro",
        "effect": "Balas de fuego"
      },
      {
        "name": "Monóculo de ópalo",
        "effect": "+25% Encontrar botín"
      },
      {
        "name": "Cuchitenedor",
        "effect": "+10% Poder alimenticio"
      },
      {
        "name": "Anillo de araña",
        "effect": "+5% Salto"
      },
      {
        "name": "Cupón de tatuaje",
        "effect": "¡1 tatuaje gratis!"
      },
      {
        "name": "Cepillo de dientes bendito",
        "effect": "Resistencia al ácido"
      },
      {
        "name": "Vendaje sucio",
        "effect": "Resistencia a desangramiento"
      },
      {
        "name": "Mecanismo de mithrilo",
        "effect": "Armas resistentes"
      },
      {
        "name": "Arcoíris sólido",
        "effect": "Poder del arcoíris"
      },
      {
        "name": "Cerebro de Smockula",
        "effect": "+50% Anar-ki-a"
      },
      {
        "name": "Hígado de Smockula",
        "effect": "Nada de borracheras"
      },
      {
        "name": "Paquete de hielo antiguo",
        "effect": "+5% Enfriamiento"
      },
      {
        "name": "Martillo de plata",
        "effect": "Puede romper y guardar complementos."
      },
      {
        "name": "Error de construcción",
        "effect": "Glitch quiere un jefe."
      },
      {
        "name": "Pin de anarkía",
        "effect": "+5% Daño contundente"
      },
      {
        "name": "La causa",
        "effect": "+5% Enfriamiento"
      },
      {
        "name": "Botón de robot",
        "effect": "-2 a requisitos de combinación de equipo."
      },
      {
        "name": "Pin de basura",
        "effect": "Usa cualquier arma para destruir barricadas."
      },
      {
        "name": "Botón estrella",
        "effect": "+25% de carga de control."
      },
      {
        "name": "Disquete",
        "effect": "+15% de carga de control."
      },
      {
        "name": "Muñeca aterradora",
        "effect": "10% de posibilidades de maldición en crítico."
      },
      {
        "name": "Cinta encantada",
        "effect": "Aumenta la fijación a distancia."
      },
      {
        "name": "Ticket dorado",
        "effect": "Gana una entrada para el cine."
      },
      {
        "name": "Orbe de corrupción",
        "effect": "Añadir ácido a las armas arrojadizas."
      },
      {
        "name": "Lupa",
        "effect": "La cámara destaca los lugares en los que hacer clic."
      },
      {
        "name": "Vial de pestilencia",
        "effect": "Difunde enfermedades apocalípticas."
      },
      {
        "name": "Escama de diamante",
        "effect": "Respira bajo el agua."
      },
      {
        "name": "Bolsa de orégano",
        "effect": "Protección contra vampiros."
      }
    ],
    "misc": [
      {
        "name": "Complemento",
        "effect": "Se puede colocar."
      },
      {
        "name": "Malta añeja",
        "effect": "Granos germinados"
      },
      {
        "name": "Cebada dorada",
        "effect": "Cereal fermentable"
      },
      {
        "name": "Mosto rojo",
        "effect": "Líquido asqueroso"
      },
      {
        "name": "Levadura de cerveza",
        "effect": "Microorganismo eucarionte"
      },
      {
        "name": "Malta blanca",
        "effect": "Granos germinados"
      },
      {
        "name": "Cebada roja",
        "effect": "Cereal fermentable"
      },
      {
        "name": "Levadura de rubia",
        "effect": "Microorganismo eucarionte"
      },
      {
        "name": "Mosto amargo",
        "effect": "Líquido asqueroso"
      },
      {
        "name": "Mosto dulce",
        "effect": "Líquido asqueroso"
      },
      {
        "name": "Mosto rico",
        "effect": "Líquido asqueroso"
      },
      {
        "name": "Tinte blancuzco",
        "effect": "Blanquea la ropa."
      },
      {
        "name": "Tinte enrojecedor",
        "effect": "Enrojece la ropa."
      },
      {
        "name": "Tinte naranjito",
        "effect": "Pone naranja la ropa."
      },
      {
        "name": "Tinte amarilleante",
        "effect": "Amarillea la ropa."
      },
      {
        "name": "Tinte verdul",
        "effect": "Pone verde la ropa."
      },
      {
        "name": "Tinte azulante",
        "effect": "Azula la ropa."
      },
      {
        "name": "Tinte purpúreo",
        "effect": "Pone morado la ropa."
      },
      {
        "name": "Tinte ennegrecedor",
        "effect": "Ennegrece la ropa."
      },
      {
        "name": "Sangre falsa",
        "effect": "Cambiar estadísticas con ropa equipada"
      },
      {
        "name": "Tinte multi",
        "effect": "Colorea al azar la ropa."
      },
      {
        "name": "Tinte grisáceo",
        "effect": "Pone gris la ropa."
      }
    ]
  },
  "pt-BR": {
    "relics": [
      {
        "name": "Corrente de gatinhos",
        "effect": "+5% Velocidade de movimento · -1% Atacar"
      },
      {
        "name": "Caveira de marfim",
        "effect": "+10% Atacar · -1% Defesa"
      },
      {
        "name": "Cruz com joias",
        "effect": "+10% Defesa · -1% Renda"
      },
      {
        "name": "Abridor de garrafas Mithril",
        "effect": "+10% Poder da comida"
      },
      {
        "name": "Chave de bateria de cobalto",
        "effect": "+15% Anar-chi · -1% Atacar"
      },
      {
        "name": "Cubo anti-estresse",
        "effect": "+10% Atacar · -1% Anar-chi"
      },
      {
        "name": "Tampa de garrafa Prata",
        "effect": "+5% Renda"
      },
      {
        "name": "Carro de safira",
        "effect": "+5% Velocidade de movimento · -1% Defesa"
      },
      {
        "name": "Chave enferrujada",
        "effect": "+25% Encontrar muamba · -1% Atacar"
      },
      {
        "name": "Pé de coelho",
        "effect": "+25% Muamba rara"
      },
      {
        "name": "Dente de Smockula",
        "effect": "+5% Sanguessuga"
      },
      {
        "name": "Garra de pedra lunar",
        "effect": "+5% Ferimento · -1% Atacar"
      },
      {
        "name": "Vela",
        "effect": "+15% Anar-chi · -1% Defesa"
      },
      {
        "name": "Alfinete de segurança",
        "effect": "+10% Atacar · -1% Anar-chi"
      },
      {
        "name": "Cruz de Jasper",
        "effect": "+10% Defesa · -1% Velocidade de movimento"
      },
      {
        "name": "Olho de Smockula",
        "effect": "+25% Muamba rara"
      },
      {
        "name": "Microscópio de brinquedo",
        "effect": "+50% Muamba rara · -1% Atacar"
      },
      {
        "name": "Coração de Smockula",
        "effect": "+5 Regen"
      },
      {
        "name": "Coração de Alma",
        "effect": "+5 Regen"
      },
      {
        "name": "Xícara Esmeralda",
        "effect": "+5% Velocidade de movimento · -1% Defesa"
      },
      {
        "name": "Seringa de cristal",
        "effect": "Pegada de Veneno"
      },
      {
        "name": "Prato Chique",
        "effect": "+50% Muamba rara"
      },
      {
        "name": "Bateria de carro",
        "effect": "Lançamento de meia"
      },
      {
        "name": "Controle Xbox360",
        "effect": "+50% Encontrar muamba"
      },
      {
        "name": "Palito de Mookite",
        "effect": "+5% Velocidade de movimento"
      },
      {
        "name": "Fita com mixagens épicas",
        "effect": "+5% Crits"
      },
      {
        "name": "Super Goo",
        "effect": "+5% Salto"
      },
      {
        "name": "Isqueiro de Ferro",
        "effect": "Balas de fogo"
      },
      {
        "name": "Monóculo de opala",
        "effect": "+25% Encontrar muamba"
      },
      {
        "name": "Garfolher",
        "effect": "+10% Poder da comida"
      },
      {
        "name": "Teia de aranha",
        "effect": "+5% Salto"
      },
      {
        "name": "Cupom de tatuagem",
        "effect": "1 tatuagem grátis!"
      },
      {
        "name": "Escova de dentes abençoada",
        "effect": "Resistência ao ácido"
      },
      {
        "name": "Ataduras sujas",
        "effect": "Resista ao sangramento"
      },
      {
        "name": "Engrenagem Mithril",
        "effect": "Armas robustas"
      },
      {
        "name": "Arco-íris sólido",
        "effect": "Poder do arco-íris"
      },
      {
        "name": "Cérebro de Smockula",
        "effect": "+50% Anar-chi"
      },
      {
        "name": "Fígado de Smockula",
        "effect": "Sem bebedeira"
      },
      {
        "name": "Pacote de gelo antigo",
        "effect": "+5% Recarga"
      },
      {
        "name": "Martelo de Prata",
        "effect": "Pode desmanchar e armazenar acessórios."
      },
      {
        "name": "Construção falhou",
        "effect": "Interfira como um chefe."
      },
      {
        "name": "Pin de anarquia",
        "effect": "+5% Danos da lança"
      },
      {
        "name": "\"A Causa\"",
        "effect": "+5% Recarga"
      },
      {
        "name": "Pin de robô",
        "effect": "-2 para fazer um combo de equipe."
      },
      {
        "name": "Pin de lixo",
        "effect": "Use qualquer arma para destruir barricadas"
      },
      {
        "name": "Recompensas de Estrela",
        "effect": "+25% de carga adicional."
      },
      {
        "name": "Disquete de 3,5\"",
        "effect": "+15% de carga adicional."
      },
      {
        "name": "Boneca Horrorosa",
        "effect": "Chance de maldição de 10% em crit."
      },
      {
        "name": "Fita assombrada",
        "effect": "Aumentar bloqueio à distância."
      },
      {
        "name": "Bilhete dourado",
        "effect": "Ganhe entradas para o cinema"
      },
      {
        "name": "Orbe de corrupção",
        "effect": "Adicionar ácido às armas atiradas."
      },
      {
        "name": "Lupa",
        "effect": "Câmera destaca os pontos clicáveis."
      },
      {
        "name": "Ampola de pestilência",
        "effect": "Espalhar doenças do fim dos tempos."
      },
      {
        "name": "Escala de diamante",
        "effect": "Respirar submerso."
      },
      {
        "name": "Saco de orégano",
        "effect": "Proteção contra vampiros."
      }
    ],
    "misc": [
      {
        "name": "Acessório",
        "effect": "Não pode ser colocado"
      },
      {
        "name": "Malte envelhecido",
        "effect": "Germinado grãos"
      },
      {
        "name": "Cevada dourada",
        "effect": "Fermentável cereal"
      },
      {
        "name": "Mosto vermelho",
        "effect": "Líquido gosmento"
      },
      {
        "name": "Fermento de cerveja",
        "effect": "Eucariótico microorganismo"
      },
      {
        "name": "Malte branco",
        "effect": "Germinado grãos"
      },
      {
        "name": "Cevada vermelha",
        "effect": "Fermentável cereal"
      },
      {
        "name": "Fermento de lager",
        "effect": "Eucariótico microorganismo"
      },
      {
        "name": "Mosto amargo",
        "effect": "Líquido gosmento"
      },
      {
        "name": "Mosto doce",
        "effect": "Líquido gosmento"
      },
      {
        "name": "Mosto forte",
        "effect": "Líquido gosmento"
      },
      {
        "name": "Tinta Blanc",
        "effect": "Embranquece roupas"
      },
      {
        "name": "Tinta avermelhadora",
        "effect": "Avermelha roupas"
      },
      {
        "name": "Tinta Larange",
        "effect": "Alaranja roupas"
      },
      {
        "name": "Tinta amarelante",
        "effect": "Amarela roupas"
      },
      {
        "name": "Tinta Verdernen",
        "effect": "Esverdeia roupas"
      },
      {
        "name": "Tinta Azufina",
        "effect": "Azula roupas"
      },
      {
        "name": "Tinta Roxor",
        "effect": "Arroxeia roupas"
      },
      {
        "name": "Tinta escurecedora",
        "effect": "Escurece roupas"
      },
      {
        "name": "Sangue falso",
        "effect": "Trocar estatísticas com roupas equipadas"
      },
      {
        "name": "Tinta Semente",
        "effect": "Colore aleatoriamente roupas"
      },
      {
        "name": "Tinta Cinzenten",
        "effect": "Acinzenta roupas"
      }
    ]
  }
};
