import img1 from "../assets/imageNumbers1.png"
import img2 from "../assets/imageNumbers2.png"
import img3 from "../assets/imageImage3.png"
import img4 from "../assets/imageNumbers4.png"
import img5 from "../assets/imageNumbers5.png"
import img6 from "../assets/imageNumbers6.png"
import img7 from "../assets/imageNumbers7.png"
import img8 from "../assets/imageNumbers8.png"
import img9 from "../assets/imageNumbers9.png"
import img10 from "../assets/imageNumbers10.png"
import IconSquare from "../assets/IconSquare.svg";
import User from "../assets/User.svg";
import Fork from "../assets/Fork.svg";
import ExclamationMark from "../assets/ExclamationMark.svg";


const catalog = [
  {
    category: "Семейный номер",
    image: img1,
    price: 30000,
    id: "BXD100BLK00",
    filter: 'Family room',
    info: [
      {description: "175 м2", image: IconSquare},
      {description: 'До 6‑ти человек ( до 3‑х детей до 3‑х лет включительно)', image: User},
      {description: 'Тип питания определяется в зависимости от тарифа', image: Fork},
      {description: 'Возможно проживание с животными весом не более 5 кг', image: ExclamationMark},
    ]
  },
  {
    category: "Семейный номер room XI",
    image: img2,
    price: 20000,
    id: "BXD100BLK01",
    filter: 'Family room',
    info: [
      {description: "37 м2", image: IconSquare},
      {description: 'До 4 человек', image: User},
      {description: 'Тип питания определяется в зависимости от тарифа', image: Fork},
      {description: 'Возможно проживание с животными весом не более 5 кг', image: ExclamationMark},
    ]


  },
  {
    category: "Семейный номер Viev",
    image: img3,
    price: 20000,
    id: "BXD100BLK02",
    filter: 'Family room',
    info: [
      {description: "52 м2", image: IconSquare},
      {description: 'До 4 человек', image: User},
      {description: 'Тип питания определяется в зависимости от тарифа', image: Fork},
      {description: 'Возможно проживание с животными весом не более 5 кг', image: ExclamationMark},
    ]


  },
  {
    category: "Семейный номер Art Room",
    image: img4,
    price: 30000,
    id: "BXD100BLK03",
    filter: 'Family room',
    info: [
      {description: "24 м2", image: IconSquare},
      {description: 'До 6‑ти человек (также можно разместить до 3‑х детей до 3‑х лет включительно)', image: User},
      {description: 'Тип питания определяется в зависимости от тарифа', image: Fork},
      {description: 'Возможно проживание с животными весом не более 5 кг', image: ExclamationMark},
    ]


  },
  {
    category: "Семейный номер Suite",
    image: img5,
    price: 40000,
    id: "BXD100BLK04",
    filter: 'Family room',
    info: [
      {description: "47 м2", image: IconSquare},
      {description: 'До 4 человек', image: User},
      {description: 'Тип питания определяется в зависимости от тарифа', image: Fork},
      {description: 'Возможно проживание с животными весом не более 5 кг', image: ExclamationMark},
    ]


  },
  {
    category: "Делюкс",
    image: img6,
    price: 35000,
    id: "BXD100BLK05",
    filter: 'Delux',
    info: [
      {description: "38 м2", image: IconSquare},
      {description: 'До 3‑х человек (включая детей 4‑13 лет)', image: User},
      {description: 'Тип питания определяется в зависимости от тарифа', image: Fork},
      {description: 'Для людей с ограниченными возможностями', image: ExclamationMark},
    ]


  },
  {
    category: "Делюкс Королевский",
    image: img7,
    price: 50000,
    id: "BXD100BLK06",
    filter: 'Delux',
    info: [
      {description: "200 м2", image: IconSquare},
      {description: 'До 4‑х человек (или 4 взрослых и 2 ребенка 4‑13 лет)', image: User},
      {description: 'Тип питания определяется в зависимости от тарифа', image: Fork},
      {description: 'Замечательный вид на город', image: ExclamationMark},
    ]


  },
  {
    category: "Делюкс vin",
    image: img8,
    price: 60000,
    id: "BXD100BLK07",
    filter: 'Delux',
    info: [
      {description: "200 м2", image: IconSquare},
      {description: 'До 6‑ти человек (также можно разместить до 3‑х детей до 3‑х лет включительно)', image: User},
      {description: 'Тип питания определяется в зависимости от тарифа', image: Fork},
      {description: 'Замечательный вид на город', image: ExclamationMark},
    ]


  },
  {
    category: "Президентский номер",
    image: img9,
    price: 80000,
    id: "BXD100BLK08",
    filter: 'Presidential Suite',
    info: [
      {description: "618 м2", image: IconSquare},
      {description: 'До 8‑ми человек (также можно разместить до 4‑х детей до 3‑х лет включительно)', image: User},
      {description: 'Тип питания определяется в зависимости от тарифа', image: Fork},
      {
        description: 'Возможно проживание с животными весом не более 5 кг за дополнительную плату',
        image: ExclamationMark
      },
    ]


  },
  {
    category: "Президентский номер Imperial",
    image: img10,
    price: 120000,
    id: "BXD100BLK09",
    filter: 'Presidential Suite',
    info: [
      {description: "1000 м2", image: IconSquare},
      {description: 'До 8‑ми человек (также можно разместить до 4‑х детей до 3‑х лет включительно)', image: User},
      {description: 'Тип питания определяется в зависимости от тарифа', image: Fork},
      {description: 'Возможен вызов бесплатного персонала', image: ExclamationMark},
    ]


  },
]

export default catalog;



