import React, { useState, useEffect } from "react";
import axios from "axios";

function TestForm() {
 
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState(null);
 
  useEffect(() => {
    loadList();
  }, []);
 
  const loadList = async () => {
    const result = await axios.get("http://localhost:8000/api/list");
    setPosts(result.data.reverse());
  };
 
  const handleSubmission = async (e) => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append('title', title);
    formData.append('category', category);
    formData.append('short_description', shortDescription);
    formData.append('long_description', longDescription);
    formData.append('author', author);
  

    await fetch("http://localhost:8000/api/upload", {
      method: "POST",
      body: formData,
    })
    .then((result)=>{
      loadList();
    })
    .catch(()=>{
      alert('Error in the Code');
    });
  };
 
  const deleteImage = (id) =>
  {
    axios.get('http://localhost:8000/api/delete/'+id)
    .then((result)=>{
      loadList();
    })
    .catch(()=>{
      alert('Error in the Code');
    });
  };
 

  return (
    <div className="container my-5 py-5">
      <h2 class="page-title text-center text-success  ml-4 mb-4 mt-4">Image Gallary in ReactJS</h2>
      <div className="row">
        <div className="col-sm-3 p-2 bg-gray">
         <div className="box mr-4" style={{border:"1px solid #b7b7b7",backgroundColor:"#rgb(253 253 253);"}}>
         <h5 class="text-center  ml-4 mb-3 mt-3">Add Image</h5>
          <table className="">
           <tr>
            <td>
              <div class="form-group ml-3">
                <input type="text" name="name" className="mb-4"onChange={(e) => setTitle(e.target.value)} placeholder="Blog Title"/>
              </div>
            </td>
           </tr>
 
           <tr>
            <td>
             <div class="form-group">
              <textarea type="text" name="desc" className="mb-4"  rows="3" cols="23" onChange={(e) => setShortDescription(e.target.value)} placeholder="Write Description" />
             </div>
            </td>
           </tr>
 
           <tr>
            <td>
             <div class="form-group">
              <input type="file" name="file" className="mb-4" onChange={(e) => setImage(e.target.files[0])} />
             </div>
            </td>
           </tr>
 
           <tr>
            <td>
             <div class="form-group">
               <button type="submit" onClick={handleSubmission}class="btn btn-success mb-3" name="submit">
                 Add Gallary
              </button>
             </div>
            </td>
           </tr>
          </table>
          </div>
        </div>
        <div className="col-sm-9">
          <div className="row">
            {posts.map((post) => (
              <div key={post.id} className="col-sm-3">
                <div class="card mb-3" style={{width:"12rem"}}>
                    <h5><a  href="#" onClick={() => deleteImage(post.id)} style={{textDecoration:"none",marginLeft:"162px"}}>
                      <span aria-hidden="true" className="text-danger">&times;</span>
                    </a></h5>
                    <img class="card-img-top hover-shadow" src={"http://localhost:8000/" + post.image} alt="Card image cap" style={{height:"110px"}}/> 
                   
                    <img src={process.env.PUBLIC_URL+ post.image} />

                    <img width="50px" src={`http://localhost:8000/storage/app/`+ post.image} />

                    {/* <img key={post.id} src={asset("storage/post.image")}/> */}

                    <img key={post.id} 
                    src={'http://localhost:8000/storage/app/'+post.name}/>


                  <img src="{{ route(post.image,$article->post.image) }}" alt="" title="" />


                    <div class="card-body">
                    <h6>{post.title}</h6>
                      <span class="card-text">{post.short_description}</span>
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}

export default TestForm