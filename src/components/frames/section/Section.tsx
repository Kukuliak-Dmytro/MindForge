//this is a section component that wraps a section
// 2 variants: with a title and without a title
//no title has 60px padding top
//title has 16px padding top and then an h3 title, and no padding top
import './Section.css'
interface sectionProps {
    title?: string;
    children?: React.ReactNode;
}
export function Section({ title, children }: sectionProps) {
    if (title) {
        return (
            <section className='sectionWrapper '>
                <h3>{title}</h3>
                <div className="section title">{children}</div>
            </section>
        )
    }
    else {
        return (
            <section className='sectionWrapper'>
                <div className="section">
                    {children}
                </div>
            </section>
        )
    }

}