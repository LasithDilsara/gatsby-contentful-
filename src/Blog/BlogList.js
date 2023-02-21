import React, {useEffect, useState} from 'react'
import {createClient} from 'contentful'




<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

const BlogList = () => {

     const [blogPosts, setBlogPosts] = useState([])
    
    const client = createClient({space: "xy3bgxqs1prh", accessToken: 
    "zkQv6UGthaJVmvFSTaOhEK0a4MyYcxMfUMFiyilqk7g"})

    useEffect(() => {
         const getAllEntries = async () => {
           try {
            await client.getEntries().then((entries) => {
                console.log(entries)
                setBlogPosts(entries)
            })
           } catch (error) {
            console.log("error");
           }
         }
         getAllEntries()

    }, [])

  return (
    <div id="layout" className="pure-g">
    <div className="content pure-u-1 pure-u-md-3-4">
      <div>
        <div className="posts">
          <div className="Heading">
                    
          </div>

          {blogPosts?.items?.map((post) => 
            <section>
              <header className="post-header" key={post.sys.id}>
              <img src={post.fields.blogLogo.fields.file.url} title="" alt={post.fields.title} width="250" height="100" />
              <nav class="navMenu">
      <a href="#">Home</a>
      <a href="#">Haircare</a>
      <a href="#">Skincare</a>
      <a href="#">About</a>
      <div class="dot"></div>
      
    </nav>
    </header>
  








              
             <div className="post-description">
                <img className="image-1" src={post.fields.blogPhoto1.fields.file.url}></img>
                 <p className="post-content-1">
                  <small>
                    {post.fields.blogPostContent}
                  </small>
                   </p>
                   <br />
                <button className="buton">
                    View Product
                </button> 
                </div>
                   
                <div className="post-description-2">
                <img className="image-1" src={post.fields.blogPhoto2.fields.file.url}></img>
                 <p className="post-content-1">
                  <small>
                    {post.fields.blogPostContent2}
                  </small>
                   </p>
                   <br />
                <button className="buton">
                    View Product
                </button> 
                </div>

              <div className="large-image">
              <img className="image-1" src={post.fields.blogLargeImage.fields.file.url} width="1895"></img>
              </div>

                 <div className="post-last">
                <img src={post.fields.blogLastImage1.fields.file.url}></img>
                 <p className="post-content-3">
                 “The story of Ceylon Elements is a tale<br />  of trust and transparency,
                 arising from our<br />  unfailing commitment to deliver effective<br />  skincare solutions" 
                </p> 
                </div>


                <div className="post-last-1">
                 <p className="post-content-4">
                 We pride ourselves in the purity of our products< br /> and honour the science behind the oil extraction< br />
                  process,< br />< br />
                 <div className="post-content-new">
                 which is performed in-house, making us the only skincare company in Sri< br /> Lanka to have our own cutting-edge technology. 
                 This internal expertise has< br /> led to the creation of a range of serums and moisturisers which offer visible< br />
                  anti-ageing and 
                 brightening benefits after short term use.
                 </div>
                </p> 
                <img src={post.fields.blogLastImage2.fields.file.url}></img>
                </div>


                <div className="hashtag">
                  <p className="hashtag-p">
                  {post.fields.blogHashtag}
                  </p>
                </div>
                      
                </section>
                
                )}
          </div>
       

        <div className="footer">
          <div className="pure-menu pure-menu-horizontal">
            <div className="pure-menu-item">
              <a href="http://twitter.com/thecodeangle" className="pure-menu-link">Twitter</a>
            </div>
          </div>
        </div>



       </div>
      </div>
    </div>

    

  )
}



export default BlogList
