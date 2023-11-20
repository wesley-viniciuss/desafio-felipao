let hero = "the fool"
let xp = 100
let ranking

if (xp <= 1000) 
{
    ranking = "ferro"

} else if (xp <= 2000) 
{
    ranking = "bronze"

} else if ( xp <= 5000)
{
    ranking = "prata"

} else if ( xp <= 7000)
{
    ranking = "ouro"

} else if (xp <= 8000) 
{
    ranking = "platina"

} else if (xp <= 9000)
{
    ranking = "ascendente"

} else if ( xp <= 10000)
{
    ranking = "imortal"

} else if (xp >= 10001)
{
    ranking = "radiante"
}


console.log("o nosso herói " + hero + ", com seus incríveis " + xp + " de xp, tem o ranking de: " + ranking)
