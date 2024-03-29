const HEAD = (
  <div style={{width:"50px", height:"50px", borderRadius:"100%", border:"10px solid black", position:"absolute", top:"50px", right:"-30px"}} />
)

const BODY = (
  <div style={{width:"10px", height:"100px", position:"absolute", background:"black", top:"120px", right:"0px"}} />
)

const RIGHT_ARM = (
  <div style={{width:"100px", height:"10px", position:"absolute", background:"black", top:"150px", right:"-100px", rotate:"-30deg", transformOrigin:"left bottom"}} />
)

const LEFT_ARM = (
  <div style={{width:"100px", height:"10px", position:"absolute", background:"black", top:"150px", right:"10px", rotate:"30deg", transformOrigin:"right bottom"}} />
)

const RIGHT_LEG = (
  <div style={{width:"100px", height:"10px", position:"absolute", background:"black", top:"210px", right:"-90px", rotate:"60deg", transformOrigin:"left bottom"}} />
)

const LEFT_LEG = (
  <div style={{width:"100px", height:"10px", position:"absolute", background:"black", top:"210px", right:"0px", rotate:"-60deg", transformOrigin:"right bottom"}} />
)

const BODY_PARTS = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG];

type GuessArtProps = {
  numberOfGuesses : number
}

const GuessArt = ({numberOfGuesses}:GuessArtProps) => {
  return (
    <div style={{position:"relative"}}>
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div style={{height:"50px", width:"10px", background:"black", position:"absolute", top:0, right:0}}  />
        <div style={{height:"10px", width:"200px", background:"black", marginLeft:"120px"}} />
        <div style={{height:"400px", width:"10px", background:"black", marginLeft:"120px"}}/>
        <div style={{height:"10px", width:"250px", background:"black"}}/>
    </div>
  )
}

export default GuessArt

// type GuessArtProps = {
//   numberOfGuesses : number
// }

// export function GuessArt({numberOfGuesses}:GuessArtProps){
//   return (
//     <div style={{position:"relative"}}>
//         {HEAD}
//         {BODY}
//         {RIGHT_ARM}
//         {LEFT_ARM}
//         {RIGHT_LEG}
//         {LEFt_LEG}
//         <div style={{height:"50px", width:"10px", background:"black", position:"absolute", top:0, right:0}}  />
//         <div style={{height:"10px", width:"200px", background:"black", marginLeft:"120px"}} />
//         <div style={{height:"400px", width:"10px", background:"black", marginLeft:"120px"}}/>
//         <div style={{height:"10px", width:"250px", background:"black"}}/>
//     </div>
//   )
// }