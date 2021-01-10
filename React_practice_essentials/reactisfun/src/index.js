import React, { Component } from 'react'
import  { render } from 'react-dom'


// ***************** Second chapter ********************
/*var style ={
  backgroundColor: 'orange',
  color: 'white',
  fontFamily: 'Arial'

}*/
/*First example
const title = React.createElement(
  'h1',
  {id: 'title', className: 'Header' ,style: style},
  'Hello World'
)*/

/*Second example
const title = React.createElement(
  'ul',
  {id:'title', className:'heder',style:style},
  React.createElement(
    'li',
    {},
    'One of the items on our list'
  )
)*/

//Using JSX
/*ReactDOM.render(
  <div style={style}>
      <h1>Hello world</h1>
      <p>Glad you are here</p>

  </div>
  , document.getElementById('root')
)*/


//******************Third chapter**********************************
/*class Message extends React.Component{
  render(){
    console.log(this.props)
    return(
      <div>
        <h1 style={{color:this.props.color}}>{this.props.msg}</h1>
        <p>Il check you up in {this.props.minutes} minutes</p>
      </div>
    )
  }
}

ReactDOM.render(<Message
  color="purple" 
  msg="How are you by the way"
  minutes={5}
  />
, document.getElementById('root'))*/

//Sunny days counter example

/*let sunnyDay ={
  total:40,
  rain:50,
  foggy:20,
  goal:50
}
//custom methods ++++++++++++++++++++++
class Sunnydaycounter extends Component{
  getPercent= decimal => {
    return decimal * 100 + '%'
  }
  calcofprogress=(total,goal) =>{
    return this.getPercent(total/goal)
  }

  render(){
    //we add all values to const so we dont have to write this.props. every time
    const {total,rain,foggy,goal} = this.props
    return(
      <section>
        <h1>Sunny days</h1>
        <div>
          <p>Total days {total} </p>
        </div>
        <div>
          <p>Rainy days {rain} </p>
        </div>
        <div>
          <p>Foggy days {foggy} </p>
        </div>
        <div>
          <p>Goal of days {goal} </p>
          <p> Goal progress : {this.calcofprogress(total,goal)}</p>
        </div>
      </section>
    )
  }
}

render(<Sunnydaycounter
  total={sunnyDay.total}
  rain={sunnyDay.rain}
  foggy={sunnyDay.foggy}
  goal={sunnyDay.goal}
/>
  ,document.getElementById('root'))*/

  //******************* CREATING FUNCTION COMPONENTS ************
  /*let sunnyDay ={
    total:40,
    rain:50,
    foggy:20,
    goal:50
  }
  const getPercent= decimal => {
    return decimal * 100 + '%'
  }
  const calcofprogress=(total,goal) =>{
    return getPercent(total/goal)
  }

  const Sunnydaycounter = (props) => {
    //we can also replace props with value names and than we wouldnt have to write props.
    return(
      <section>
          <h1>Sunny days</h1>
          <div>
            <p>Total days {props.total} </p>
          </div>
          <div>
            <p>Rainy days {props.rain} </p>
          </div>
          <div>
            <p>Foggy days {props.foggy} </p>
          </div>
          <div>
            <p>Goal of days {props.goal} </p>
            <p>Progress : {calcofprogress(props.total,props.goal)}</p>
          </div>
        </section>
    )
  }
  render(<Sunnydaycounter
    total={sunnyDay.total}
    rain={sunnyDay.rain}
    foggy={sunnyDay.foggy}
    goal={sunnyDay.goal}
  />
    ,document.getElementById('root'))
 
  }*/
  
 //***********************CHAPTER 4 ******************* */ 

 //COMPOSING COMPONENTS

// ***** PRACTICE 1 AND 2 ****
    /*let bookList =[
    {"title" : "Some book1", "author":"Some author1", "pages": 260},
    {"title" : "Some book2", "author":"Some author2", "pages": 602},
    {"title" : "Some book3", "author":"Some author3", "pages": 620}, 
    {"title" : "Some book4", "author":"Some author4", "pages": 26}

    

    ]
    const Library =({books}) => {
      return(
        <div>
               {books.map((book,i) => <Book 
                 key={i}
                 title={book.title}
                 author={book.author} 
                 pages={book.pages}/>
               )}
        </div>
      )
    }

    const Book = ({title, author, pages}) => {
      return(
        <section>
          <h2>{title}</h2>
          <p>by: {author}</p>
          <p>pages: {pages}</p>
        </section>
      )

    }
    
    render(
      
      <Library books={bookList}/>,document.getElementById('root')) */
//PRACTICE 3
      /*let bookList =[
        {"title" : "Some book1", "author":"Some author1", "pages": 260},
        {"title" : "Some book2", "author":"Some author2", "pages": 602},
        {"title" : "Some book3", "author":"Some author3", "pages": 620}, 
        {"title" : "Some book4", "author":"Some author4", "pages": 26}
        ]


        const Book = ({title, author, pages}) => {
          return(
            <section>
              <h2>{title}</h2>
              <p>by: {author}</p>
              <p>pages: {pages}</p>
            </section>
          )
        }



        class Library extends React.Component {
          //we use state= {open:false} so we wouldnt have to use constructor
          state = {open: false}
          //function for state change (open closed)
          toggleOpenClosed=()=>{
            this.setState(prevstate =>({
              open: !prevstate.open
            }))
          }

          render() {
            console.log(this.state)
            const { books } = this.props
            return(
            <div>
                    <h1>
                      Library is {this.state.open ?  'open' : 'closed'}
                    </h1>
                    <button onClick={this.toggleOpenClosed}>Change</button>
                   {books.map((book,i) => <Book 
                     key={i}
                     title={book.title}
                     author={book.author} 
                     pages={book.pages}/>
                   )}
                  
            </div>
                )
                 }
      }
    
        
        render(
          
          <Library books={bookList}/>,document.getElementById('root'))*/
          
//PRACTICE 4 PASS STATE AS PROPS  
       /* let bookList =[
        {"title" : "Some book1", "author":"Some author1", "pages": 260},
        {"title" : "Some book2", "author":"Some author2", "pages": 602},
        {"title" : "Some book3", "author":"Some author3", "pages": 620}, 
        {"title" : "Some book4", "author":"Some author4", "pages": 26}
        ]

        const Book = ({title, author, pages, freeBookmark}) => {
          return(
            <section>
              <h2>{title}</h2>
              <p>by: {author}</p>
              <p>pages: {pages}</p>
              <p>Free bookmark: {freeBookmark ? 'yes!' : 'No :(' }</p>
            </section>
          )
        }



        class Library extends React.Component {
          //we use state= {open:false} so we wouldnt have to use constructor
          state = {
            open: true,
            freeBookmark: true
          }
          //function for state change (open closed)
          toggleOpenClosed=()=>{
            this.setState(prevstate =>({
              open: !prevstate.open
            }))
          }

          render() {
            console.log(this.state)
            const { books } = this.props
            return(
            <div>
                    <h1>
                      Library is {this.state.open ?  'open' : 'closed'}
                    </h1>
                    <button onClick={this.toggleOpenClosed}>Change</button>
                   {books.map((book,i) => <Book 
                     key={i}
                     title={book.title}
                     author={book.author} 
                     pages={book.pages}
                     freebookmark={this.state.freeBookmark}
                       />
                   )}
                  
            </div>
                )
                 }
      }
    
        
        render(
          
          <Library books={bookList}/>,document.getElementById('root'))*/

//PRACTICE 5 CONDITIONAL RENDERING
       /* let bookList =[
          {"title" : "Some book1", "author":"Some author1", "pages": 260},
          {"title" : "Some book2", "author":"Some author2", "pages": 602},
          {"title" : "Some book3", "author":"Some author3", "pages": 620}, 
          {"title" : "Some book4", "author":"Some author4", "pages": 26}
          ]
  
          const Book = ({title, author, pages, freeBookmark}) => {
            return(
              <section>
                <h2>{title}</h2>
                <p>by: {author}</p>
                <p>pages: {pages}</p>
                <p>Free bookmark: {freeBookmark ? 'yes!' : 'No :(' }</p>
              </section>
            )
          }
          /* we can use it also like this*/
          
         /* const Hiring = () => 
          <div>
            <p>Go to this page to see more because we are hiring </p>
          </div>
          const NotHiring = () => 
          <div>
            <p>Go to this page to see more because we are not hiring </p>
          </div>
  
          class Library extends React.Component {
            //we use state= {open:false} so we wouldnt have to use constructor
            state = {
              open: true,
              freeBookmark: true,
              hiring: true
            }
            //function for state change (open closed)
            toggleOpenClosed=()=>{
              this.setState(prevstate =>({
                open: !prevstate.open
              }))
            }
  
            render() {
              console.log(this.state)
              const { books } = this.props
              return(
              <div>
                      {this.state.hiring ? <Hiring/> : <NotHiring/>}
                      <h1>
                        Library is {this.state.open ?  'open' : 'closed'}
                      </h1>
                      <button onClick={this.toggleOpenClosed}>Change</button>
                     {books.map((book,i) => <Book 
                       key={i}
                       title={book.title}
                       author={book.author} 
                       pages={book.pages}
                       freebookmark={this.state.freeBookmark}
                         />
                     )}
                    
              </div>
                  )
                   }
        }
      
          
          render(
            
            <Library books={bookList}/>,document.getElementById('root'))*/

//***************CHAPTER 5 ************************
//PRACTICE 2 FETCHING DATA
/*let bookList =[
  {"title" : "Some book1", "author":"Some author1", "pages": 260},
  {"title" : "Some book2", "author":"Some author2", "pages": 602},
  {"title" : "Some book3", "author":"Some author3", "pages": 620}, 
  {"title" : "Some book4", "author":"Some author4", "pages": 26}
  ]

  const Book = ({title, author, pages, freeBookmark}) => {
    return(
      <section>
        <h2>{title}</h2>
        <p>by: {author}</p>
        <p>pages: {pages}</p>
        <p>Free bookmark: {freeBookmark ? 'yes!' : 'No :(' }</p>
      </section>
    )
  }
  /* we can use it also like this*/
  
  /*const Hiring = () => 
  <div>
    <p>Go to this page to see more because we are hiring </p>
  </div>
  const NotHiring = () => 
  <div>
    <p>Go to this page to see more because we are not hiring </p>
  </div>

  class Library extends React.Component {
    //we use state= {open:false} so we wouldnt have to use constructor
    state = {
      open: true,
      freeBookmark: true,
      hiring: true,
      data: [],
      loading:false
    }

    componentDidMount(){
      this.setState({loading: true})
      fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
      .then(data => data.json())
      .then(data => this.setState({data,loading:false}))
    }
    componentDidUpdate(){
      console.log("The component just updated")
    }
    //function for state change (open closed)
    toggleOpenClosed=()=>{
      this.setState(prevstate =>({
        open: !prevstate.open
      }))
    }

    render() {
      console.log(this.state)
      const { books } = this.props
      return(
      <div>
              {this.state.hiring ? <Hiring/> : <NotHiring/>}
               {this.state.loading
               ? "loading"
              : <div>
                {this.state.data.map(product => {
                  return (
                    <div key={product.id}> 
                      <h3>Product of the week</h3>
                      <h4>{product.name}</h4>
                      <img alt={product.name} src={product.image} height={100}/>
                    </div>
                  )
                })}

                </div>}
              <h1>
                Library is {this.state.open ?  'open' : 'closed'}
              </h1>
              <button onClick={this.toggleOpenClosed}>Change</button>
             {books.map((book,i) => <Book 
               key={i}
               title={book.title}
               author={book.author} 
               pages={book.pages}
               freebookmark={this.state.freeBookmark}
                 />
             )}
            
      </div>
          )
           }
}

  
  render(
    
    <Library books={bookList}/>,document.getElementById('root'))*/
//PRACTICE 3 FORME


/*class FavoriteColorForm extends React.Component{
  //we use state to parse values comming from DOM
  state={value:''};
  newColor= e =>
  this.setState({value: e.target.value});

  submit = e => {
    console.log(`New Color: ${this.state.value}`);
    e.preventDefault()
  }

  render()
  {
    return(
      <form onSubmit={this.submit}>
        <label>Favorite color <br></br>  
          <input type="color"
          onChange={this.newColor}
          ></input>
         </label>
         <button>
           Submit
         </button>

        
      </form>
    )
  }
}
render(
    
  <FavoriteColorForm/>,document.getElementById('root'));*/

  //PRACTICE 4 Default props
  import Library from './library'
  let bookList =[
    {"title" : "Some book1", "author":"Some author1"},
    {"title" : "Some book2", "author":"Some author2", "pages": 602},
    {"title" : "Some book3", "author":"Some author3", "pages": 620}, 
    {"title" : "Some book4", "author":"Some author4", "pages": 26}
    ]
  
  
    
    
    render(
      
      <Library books={bookList}/>,document.getElementById('root'))