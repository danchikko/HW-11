// import { render } from '@testing-library/react';
import React from 'react';
import Comment from './components/Comment';

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

// const INTERVAL = 100;

// class Timer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: 0};
//   }

//   increment() {
//     this.setState({value: this.state.value + 1});
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => this.increment(), 1000/INTERVAL);
//     }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }


// render() {
//   const value = this.state.value
//   return (
//     <div>
//       <p>Таймер:</p>
//       <p>
//       <span>{Math.round(value/INTERVAL/60/60)} : </span>
//       <span>{Math.round(value/INTERVAL/60)} : </span>
//       <span>{Math.round(value/INTERVAL)} . </span>
//       <span>{value % INTERVAL}</span>
//     </p>
//     </div>
//    );
//   }
// }

// =====================================================

// class Conditioner extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {temperatura: 0};

//     this.onIncrease = this.onIncrease.bind(this)
//     this.onDecrease = this.onDecrease.bind(this)
//   }
//   onIncrease(){
//     this.setState(prevState => ({
//       temperatura: prevState.temperatura + 1
//     }))
//   }
//   onDecrease(){
//     this.setState(prevState => ({
//       temperatura: prevState.temperatura - 1
//     }))
//   }

//   render(){
//     return(
//       <p>
//         <h2>tekuhsaya temperatura: {this.state.temperatura}</h2>
//         <button onClick={this.onIncrease}>+</button>
//         <button onClick={this.onDecrease}>-</button>
//       </p>
//     )
//   }
// }



function App() {
  return (
    <div>
      <Comment 
      date={comment.date}
      text={comment.text}
      author={comment.author} 
      />
    </div>
  );
}

export default App;
