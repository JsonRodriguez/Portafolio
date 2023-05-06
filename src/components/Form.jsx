
export const Form = () => {
    return (
        <div className="form-container">
            <form className="form-contact">
                <label htmlFor="">Name</label>
                <div className="input-icon">
                    <i class="fa-regular fa-user"></i>
                    <input type="text" placeholder="Kriss Kyle" />
                </div>
                <label htmlFor="">Email</label>
                <div className="input-icon">
                    <i class="fa-regular fa-envelope"></i>
                    <input type="text" placeholder="example@gmail.com" />
                </div>
                <label htmlFor="">Message</label>
                <i class="fa-regular fa-paper-plane-top"></i>
                <textarea placeholder="body message" name="" id="" cols="30" rows="10"></textarea>
                <button className="sendMessage"> Send Message</button>
            </form>
        </div>
    )
}
