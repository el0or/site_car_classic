import './App.css'
import Header from './components/Header'
import Heading from './components/Heading'
import Items from './components/Items';


const itemsList = [
  {
    id: 1,
    title: '1957 Chevrolet Corvette',
    img: '/img/corvette.png',
    price: '$39 000',
  },
  {
    id: 2,
    title: '1960 Toyota 2000GT',
    img: '/img/toyota.png',
    price: '$66 700',
  },
  {
    id: 3,
    title: '1969 Dodge Charger',
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
      <Items itemsList={itemsList}/>
    </div>
    )
}