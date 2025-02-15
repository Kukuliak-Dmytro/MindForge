import './PriceCard.css'
interface PriceCardProps {
    title:string;
    price:number;
}
export default function PriceCard({title,price}:PriceCardProps) {
    return (
        <div className="priceCardWrapper">
            <span></span>
            <h6>{title}</h6>
            <p className='p2'>{price} грн</p>
        </div>
    )
}