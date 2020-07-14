import Button from '../Component/Button';
const CTA = () => {
    return(
        <section id="cta" className="sections">
        <div className="container">
            <div className="info">
                <h1 className="green title md-title big text-center">Don't be shy, we don't bite!</h1>
                <p className="title title__small big inverted text-center">Tell us about your new project, Your future dream job or if you simply want to talk over coffee!</p>
            </div>
            <div className="cta">
                <Button type="inverted-green" title="Start Your Project"/>
            </div>
        </div>
    </section>
    )
}
export default CTA;