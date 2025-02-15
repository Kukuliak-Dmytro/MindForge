import './ReviewCard.css'
interface ReviewCardProps {
    author: string;
    rating: number;
    date: string;
    content: string;
    avatar: React.ReactNode;
}
export default function ReviewCard({ author, rating, date, content, avatar }: ReviewCardProps) {
    return (
        <div className="reviewCardWrapper">
           
                {avatar}
                <div className="reviewInfo">
                    <span>
                        <h4>{author}</h4>
                        <p className='p2'>{date}</p>
                    </span>
                    <h5>{rating}/5</h5>
                    <p>{content}</p>
                </div>
          
            
        </div>
    )
}