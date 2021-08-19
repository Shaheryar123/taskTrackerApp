import Button from "./Button"
const Header = (props) => {
    const onClick = ()=>{
        console.log('click using props')
    }
    return (
        <header className='header'>
           <h1>From Component using {props.title}</h1> 
           <Button color = 'green' text ='Button' onClick={onClick}/>
        </header>
    )
}

export default Header
