import { BlogPreview } from "../components/BlogPreview"
import { useState } from "react"

export const Blog = () => {

const [itemTitle, setItemTitle] = useState('')
const [itemBody, setItemBody] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(itemTitle.trim() !== '' && itemBody !== ''){

            const blog = { itemTitle, itemBody }
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(blog)
            }).then ((res) => res.json())
            .then((json) => {
                console.log('new blog added')
            })
            
            setItemTitle('')
            setItemBody('')
        }
    }

    
    return (
        <div>
            <div className="formBlog">
                <form onSubmit={handleSubmit}>
                    <label>Title</label>
                    <input type="text" name="input" required value={itemTitle} onChange={(e) => setItemTitle(e.target.value)}/>
                    <label>Message</label>
                    <textarea name="message" placeholder="Your message..." required value={itemBody} onChange={(e) => setItemBody(e.target.value)}></textarea>
                    <button className="btn">Add blog</button>
                </form>
            </div>

                <BlogPreview itemTitle = {itemTitle} itemBody = {itemBody} />
        </div>
    )
}
