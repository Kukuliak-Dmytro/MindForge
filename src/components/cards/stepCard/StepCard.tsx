import './StepCard.css';
interface StepCardProps {
    step: number;
    title: string;
    content: string;
    children: React.ReactNode;
}
export default function StepCard({ step, title, content, children }: StepCardProps) {
    return (
        <div className="stepCardWrapper">
            {children}
            <div className="stepCardContent">
                <h4> {title}</h4>
                <p> {content}</p>
            </div>
            <div className="step"> <h4>{step}</h4></div>

        </div>
    );
}