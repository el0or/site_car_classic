import './App.css'
import Header from './components/Header'
import Heading from './components/Heading'
import Item from './components/Item'


const itemsList = [
  {
    id: 1,
    title: '1967 Toyota 2000GT',
    img: '/img/corvette.png',
    price: '$39 000',
  },
  {
    id: 2,
    title: '1967 Toyota 2000GT',
    img: '/img/toyota.png',
    price: '$66 700',
  },
  {
    id: 3,
    title: '1967 Toyota 2000GT',
    img: '/img/charger.png',
    price: '$39 000',
  },
  {
    id: 4,
    title: '1967 Toyota 2000GT',
    img: '/img/daytona.png',
    price: '$66 700',
  },
];

export default function App(){
  return (
    <div className='wrapper'>
      <Header/>
      <Heading/>
      <Item itemsList={itemsList}/>
    </div>
    )
}