import React, { Component } from 'react'
import './Context.css'
import Dishes from './Dishes'

export const viewDish = React.createContext('Default value'); 

class App extends Component {

  state = {
      dishes:[
          { id:1, dishName:'Լավաշով ռուլետ սնկի միջուկով', ingredients:`լավաշ-1 հատ
          սունկ շամպինիոն-300 գր
          սոխ-1 գլուխ
          գազար-1 հատ
          բուսայուղ` },
          { id:2, dishName:'Պահքային թխվածքաբլիթներ', ingredients:`վարսակի փաթիլներ(հերկուլես)-200 գր
          չիր-100 գր
          ընկույզ-50 գր
          շաքարավազ-1 ճգ
          ջուր-100 մլ
          բանան-1-2 հատ` },
          { id:3, dishName:'Ծաղկակաղամբով աղցան', ingredients:`կաղամբ (ծաղկակաղամբ)-500 գր
          սոխ-50 գր
          վարունգ-1 հատ
          սամիթ-1 կապ
          հավի փափկամիս-ըստ ճաշակի
          Սոուսի համար՝
          մայոնեզ-70 գր
          թթվասեր-70 գր
          սոյայի սոուս-1 ճ/գ
          աղ-ըստ ճաշակի
          աղացած սև պղպեղ-ըստ ճաշակի` },
          { id:4, dishName:'Հավի սիրտ կաթնային սոուսով', ingredients:`հավի սիրտ-1 կգ
          բանջարեղեն-500-600գր
          սոխ-2 գլուխ
          պանիր-100 գր
          աղ-ըստ ճաշակի
          աղացած սև պղպեղ-ըստ ճաշակ
          Կաթնային սոուսի համար՝
          կարագ-50 գր
          ալյուր-30 գր
          ձու-1 հատ
          կաթ֊250 գր`},
          { id:5, dishName:'Ամանորյա նախուտեստ', ingredients:`ջուր-200 մլ
          ալյուր-150գր
          կարագ-100գր
          ձու-3-4հատ
          աղ-1 պտղունց
          Միջուկի համար՝
          պանիր-150 գր
          ծովախեցգետնի ձողիկներ-150 գր
          ձու-1-2 հատ
          սխտոր-1 ատամիկ
          մայոնեզ`},
      ],
      renderDish:[{id:"",dishName:'Ընտրեք որևէ Ճաշատեսակ',ingredients:''}]
  }


  viewDishWithId = (id) => {
    let dish = [...this.state.dishes]
    let myDish =  dish.filter( (elem) => elem.id === id )
    this.setState({renderDish:myDish})
  }

  deleterViewDishWithId = () => {
    this.setState({renderDish:[{id:"",dishName:'Ընտրեք որևէ Ճաշատեսակ',ingredients:''}]})
  }

  render() {
      
   const {dishes} = this.state
   
    return (
      <div className='menu'>
        <h1>Բաղադրատոմսերի ցուցակ</h1>
      <viewDish.Provider value={ { 
         vieWer:this.state.renderDish
      } }>
        <Dishes data = {dishes} viewDish = {this.viewDishWithId} deleterDish = {this.deleterViewDishWithId}/>
      </viewDish.Provider>
      </div>
    )

  }
}

export default App
