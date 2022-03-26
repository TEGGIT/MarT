import CookwareSet from '../assets/CookwareSet.svg'
import Mocktail from '../assets/Moctail.svg'
import Clock from '../assets/clock.svg'
import Car from '../assets/Car.svg'
import Add from '../assets/Add.svg'

export const services = [
  {
    name: 'Дополнительный завтрак',
    image: CookwareSet,
    stateImage: Add,
    codeName: 'breakfast',
    price: 3000
  },
  {
    name: 'Мини-бар',
    image: Mocktail,
    stateImage: Add,
    codeName: 'bar',
    price: 2500
  },
  {
    name: 'Утренняя побудка',
    image: Clock,
    stateImage: Add,
    codeName: 'morning',
    price: 0
  },
  {
    name: 'Заказ трансфера',
    image: Car,
    stateImage: Add,
    codeName: 'transfer',
    price: 1500
  },
]